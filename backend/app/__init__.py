from flask import Flask
from flask_cors import CORS
from .config import Config
from .utils.logger import setup_logger
from .routes.upload_routes import upload_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # ✅ ENABLE CORS
    CORS(app)

    setup_logger()
    app.register_blueprint(upload_bp, url_prefix="/api")

    return app
