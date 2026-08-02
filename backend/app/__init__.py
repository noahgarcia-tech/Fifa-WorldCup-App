from flask import Flask
from app.config import Config
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)

    
    from app.routes.worldcup import wc_bp
    app.register_blueprint(wc_bp, url_prefix="/api/worldcup")

    return app

app = create_app()
