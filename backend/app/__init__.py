from flask import Flask
from app.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Register ONLY the World Cup blueprint
    from app.routes.worldcup import wc_bp
    app.register_blueprint(wc_bp, url_prefix="/api/worldcup")

    return app

app = create_app()
