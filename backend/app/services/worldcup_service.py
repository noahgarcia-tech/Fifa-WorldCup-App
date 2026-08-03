import os
import requests
from cache import cached

API_KEY = os.getenv("FOOTBALL_API_KEY")
BASE_URL = "https://v3.football.api-sports.io"

headers = {
    "x-apisports-key": API_KEY
}

def wc_get(path, params=None):
    url = f"{BASE_URL}/{path}"
    print(f"[API CALL] {path} {params}")
    return requests.get(url, headers=headers, params=params).json()

@cached(ttl=None)
def get_wc_coverage():
    return wc_get("leagues", {"id": 1, "season": 2022})

@cached(ttl=None)
def get_wc_teams():
    return wc_get("teams", {"league": 1, "season": 2022})

@cached(ttl=None)
def get_wc_fixtures():
    return wc_get("fixtures", {"league": 1, "season": 2022})

@cached(ttl=None)
def get_wc_rounds():
    return wc_get("fixtures/rounds", {"league": 1, "season": 2022})

@cached(ttl=None)
def get_wc_standings():
    return wc_get("standings", {"league": 1, "season": 2022})

@cached(ttl=None)
def get_wc_players(page=1):
    return wc_get("players", {"league": 1, "season": 2022, "page": page})

@cached(ttl=None)
def get_wc_coach(team_id):
    return wc_get("coachs", {"team": team_id})

@cached(ttl=None)
def get_wc_injuries():
    return wc_get("injuries", {"league": 1, "season": 2022})

@cached(ttl=None)
def get_wc_fixture_events(fixture_id):
    return wc_get("fixtures/events", {"fixture": fixture_id})

@cached(ttl=None)
def get_wc_fixture_players(fixture_id):
    return wc_get("fixtures/players", {"fixture": fixture_id})

@cached(ttl=None)
def get_wc_top_scorers():
    return wc_get("players/topscorers", {"league": 1, "season": 2022})

@cached(ttl=None)
def get_wc_predictions(fixture_id):
    return wc_get("predictions", {"fixture": fixture_id})

@cached(ttl=None)
def get_wc_odds(fixture_id):
    return wc_get("odds", {"fixture": fixture_id})
