import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

class Config:
    # Security
    SECRET_KEY = os.getenv('SECRET_KEY', 'change-me-in-production')

    # Database
    # Use DATABASE_URL env var if present; otherwise default to a local MySQL DB
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL',
        f"mysql://root:@localhost:3306/pantry_chef_db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # CORS (comma separated)
    CORS_ORIGINS = [o.strip() for o in os.getenv('CORS_ORIGINS', 'http://localhost:3000').split(',')]

    # Model path
    MODEL_PATH = os.getenv('MODEL_PATH', str(BASE_DIR / 'models' / 'my_model'))

    # Uploads
    UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER', str(BASE_DIR / 'uploads'))
    MAX_CONTENT_LENGTH = int(os.getenv('MAX_CONTENT_LENGTH', 16 * 1024 * 1024))

    # Logging
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')
