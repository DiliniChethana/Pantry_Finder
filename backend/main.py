from flask import Flask
from flask_cors import CORS
from config import Config
from models.models import db  # db instance is imported here
from api.routes import api_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    CORS(app)
    db.init_app(app)

    # Register Blueprints/Routes
    app.register_blueprint(api_bp)

    # Example Test Route (now accessible at /)
    @app.route('/')
    def index():
        return "Pantry Chef Backend is running! Access API routes at /api/..."

    # Add DB Creation Route for convenience (KEEP THIS FOR TESTING)
    @app.route('/db/init')
    def db_init():
        with app.app_context():
            db.create_all()
        return "Database tables created (if they didn't exist)."

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)