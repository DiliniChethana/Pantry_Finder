import json
from datetime import datetime

# --- IMPORTANT: These paths must match where you store your exported model ---
MODEL_PATH = './model/fine_tuned_llm'
TOKENIZER_PATH = './model/fine_tuned_tokenizer'

# Placeholder for the loaded model/tokenizer
# In a real app, you'd load these once when the app starts.
model = None
tokenizer = None


def load_ai_model():
    """Placeholder to load your LLM from disk."""
    global model, tokenizer
    if model is None:
        try:
            # Replace these with your actual Hugging Face/PyTorch loading logic
            # tokenizer = AutoTokenizer.from_pretrained(TOKENIZER_PATH)
            # model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_PATH)
            model = True  # Dummy check
            print("AI Model structure loaded.")
        except Exception as e:
            print(f"Error loading AI model: {e}")
            model = False
    return model


def generate_recipe(ingredients_list, dietary_needs="Omnivore", skill_level="Beginner"):
    """
    Generates a recipe based on user inputs.
    This function contains the core "AI Magic" and "Waste Zero" logic.
    """
    if not load_ai_model():
        # Fallback for development if model loading fails
        return {
            "name": "Dummy Pasta Recipe",
            "time": "25 mins",
            "ingredients": [
                {"item": "Chicken", "quantity": 300, "units": "grams"},
                {"item": "Pasta", "quantity": 200, "units": "grams"},
            ],
            "steps": [
                {"description": "Boil the pasta until al dente.", "timer_mins": 10},
                {"description": "Mix chicken with sauce.", "timer_mins": 0},
            ],
            "buy_suggestion": "Garlic (needed for flavor)",
        }

    # 1. WASTE ZERO Logic: Identify items nearing expiry
    # Note: ingredient_list contains dicts with 'expiry_date' from the PantryItem model
    priority_ingredients = [
        item["name"]
        for item in ingredients_list
        if item.get("expiry_date")
        and (datetime.strptime(item["expiry_date"], "%Y-%m-%d").date() - datetime.now().date()).days <= 3
    ]

    ingredient_names = ", ".join([item["name"] for item in ingredients_list])

    # 2. Construct the Prompt for the LLM
    prompt = (
        f"Generate a {skill_level}-level {dietary_needs} recipe. "
        f"Prioritize using: {', '.join(priority_ingredients) if priority_ingredients else 'None'}. "
        f"Available ingredients: {ingredient_names}. Output a structured JSON object."
    )

    # 3. Call the LLM (Placeholder for actual inference code)
    # raw_output = model.generate(...) 

    # 4. Parse the output (Placeholder)
    # The actual LLM output must be parsed to extract name, ingredients, steps, etc.
    return {
        "name": "LLM Generated Recipe (placeholder)",
        "time": "30 mins",
        "ingredients": [],
        "steps": [],
        "buy_suggestion": None,
    }


def parse_llm_output(raw_text):
    """Parses the raw LLM output into a clean, structured JSON object for the frontend.
    This is a placeholder and should be replaced with actual parsing logic.
    """
    try:
        return json.loads(raw_text)
    except Exception:
        # Return a safe fallback structure
        return {
            "name": "Parsed Dummy",
            "time": "0 mins",
            "ingredients": [],
            "steps": [],
        }