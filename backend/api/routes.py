# backend/api/routes.py

from flask import Blueprint, request, jsonify
from datetime import datetime, date
from werkzeug.security import check_password_hash
from models.models import db, User, PantryItem, SavedRecipe
from core.ai_handler import generate_recipe

# Create the Blueprint
api_bp = Blueprint('api', __name__, url_prefix='/api')

# --- Helper Function for Auth (Replace with JWT in production) ---
def get_current_user_id():
    # Placeholder: In a real app, this would decode a JWT token from the request header.
    # For initial development, we'll hardcode user_id=1
    return 1 
# -----------------------------------------------------------------


# ====================================================================
# 1. Authentication Routes (Pages 2, 3: Login, Signup)
# ====================================================================

@api_bp.route('/auth/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username') # User Name
    email = data.get('email')       # Email Address or Phone Number
    password = data.get('password') # Password
    
    if not username or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400
    if User.query.filter_by(email=email).first() or User.query.filter_by(username=username).first():
        return jsonify({"message": "User already exists"}), 409

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    
    db.session.add(new_user)
    db.session.commit()
    
    # NOTE: You should return a JWT token here, not just success
    return jsonify({"message": "User created successfully", "user_id": new_user.id}), 201

@api_bp.route('/auth/login', methods=['POST'])
def login():
    data = request.json
    email_or_username = data.get('identifier')
    password = data.get('password')
    
    user = User.query.filter((User.email == email_or_username) | (User.username == email_or_username)).first()
    
    if user is None or not user.check_password(password):
        return jsonify({"message": "Invalid credentials"}), 401

    # NOTE: Generate and return a JWT token here
    return jsonify({"message": "Login successful", "token": "dummy_jwt_token", "user_id": user.id}), 200


# ====================================================================
# 2. Pantry Management Routes (Pages 4, 5: Add New Ingredients, Selection)
# ====================================================================

@api_bp.route('/pantry/add', methods=['POST'])
def add_pantry_item():
    user_id = get_current_user_id() # Get ID from token/session
    data = request.json
    
    try:
        # Page 4 fields: Ingredient Name, Quantity, Units, Used by Date (Expiry Date)
        expiry_date_str = data.get('expiry_date')
        expiry_date = datetime.strptime(expiry_date_str, '%Y-%m-%d').date() if expiry_date_str else None
        
        new_item = PantryItem(
            user_id=user_id,
            name=data['name'],
            quantity=float(data['quantity']),
            units=data['units'],
            expiry_date=expiry_date
        )
        db.session.add(new_item)
        db.session.commit()
        return jsonify({"message": "Ingredient added successfully", "item": new_item.to_dict()}), 201
    except Exception as e:
        return jsonify({"error": f"Invalid data or format: {e}"}), 400

@api_bp.route('/pantry/items', methods=['GET'])
def get_pantry_items():
    user_id = get_current_user_id()
    
    # Retrieve items, sorted by expiry date ascending for "Waste Zero" display priority
    items = PantryItem.query.filter_by(user_id=user_id).order_by(PantryItem.expiry_date.asc()).all()
    
    return jsonify([item.to_dict() for item in items])


# ====================================================================
# 3. AI Generation Route (Page 5: Generate Button)
# ====================================================================

@api_bp.route('/recipe/generate', methods=['POST'])
def generate_new_recipe():
    # user_id = get_current_user_id()
    data = request.json
    
    # data['selected_ingredients'] is a list of dictionaries from the frontend
    # data['dietary_needs'] and data['skill_level'] will come from filters
    
    recipe_data = generate_recipe(
        ingredients_list=data.get('selected_ingredients', []),
        dietary_needs=data.get('dietary_needs', 'Omnivore'),
        skill_level=data.get('skill_level', 'Beginner')
    )
    
    return jsonify(recipe_data)

# NOTE: Saved Recipe routes will be added in a later step.
# 4. Saved Recipes Routes (Page 6: Saved Recipes)
# ====================================================================

@api_bp.route('/recipe/save', methods=['POST'])
def save_recipe():
    """Saves a generated recipe to the user's profile."""
    user_id = get_current_user_id() # Assumed to be authenticated
    data = request.json
    
    # Requires recipe_name (e.g., Chicken Kottu) and the full recipe_data JSON
    recipe_name = data.get('recipe_name')
    recipe_data = data.get('recipe_data')
    
    if not recipe_name or not recipe_data:
        return jsonify({"message": "Missing recipe name or data"}), 400
        
    new_save = SavedRecipe(
        user_id=user_id,
        name=recipe_name,
        recipe_json=recipe_data
    )
    
    db.session.add(new_save)
    db.session.commit()
    
    return jsonify({"message": f"Recipe '{recipe_name}' saved successfully"}), 201


@api_bp.route('/recipe/saved', methods=['GET'])
def get_saved_recipes():
    """Retrieves all saved recipes for display on Page 6."""
    user_id = get_current_user_id()
    
    # Retrieve recipes, ordered by save date
    recipes = SavedRecipe.query.filter_by(user_id=user_id).order_by(SavedRecipe.date_saved.desc()).all()
    
    # Use the to_dict method from the SavedRecipe model
    return jsonify([r.to_dict() for r in recipes])
    
    
@api_bp.route('/recipe/view/<int:recipe_id>', methods=['GET'])
def get_single_saved_recipe(recipe_id):
    """Retrieves a single recipe's full JSON data."""
    user_id = get_current_user_id()
    
    recipe = SavedRecipe.query.filter_by(id=recipe_id, user_id=user_id).first()
    
    if not recipe:
        return jsonify({"message": "Recipe not found"}), 404
        
    # Return the full recipe JSON for the Cook Smart display
    return jsonify(recipe.recipe_json)


# ====================================================================
# 5. User Profile Routes (Page 7: Personal Information)
# ====================================================================

@api_bp.route('/profile', methods=['GET'])
def get_user_profile():
    """Fetches the user's profile details (First Name, Last Name, Phone, Email)."""
    user_id = get_current_user_id()
    user = User.query.filter_by(id=user_id).first()
    
    if not user:
        return jsonify({"message": "User not found"}), 404
        
    return jsonify({
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
        "phone_number": user.phone_number,
        "username": user.username
        # Note: Profile picture upload requires file storage logic (S3/GCS)
    })

@api_bp.route('/profile', methods=['PUT'])
def update_user_profile():
    """Updates the user's profile details (Page 7 fields)."""
    user_id = get_current_user_id()
    data = request.json
    user = User.query.filter_by(id=user_id).first()
    
    if not user:
        return jsonify({"message": "User not found"}), 404
        
    # Update fields only if they are present in the request body
    if 'first_name' in data:
        user.first_name = data['first_name']
    if 'last_name' in data:
        user.last_name = data['last_name']
    if 'phone_number' in data:
        user.phone_number = data['phone_number']
    
    # Email change often requires verification, but for simplicity:
    if 'email' in data:
        user.email = data['email']
        
    db.session.commit()
    
    return jsonify({"message": "Profile updated successfully"}), 200