import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    FOOTBALL_API_KEY = os.getenv("FOOTBALL_API_KEY")
