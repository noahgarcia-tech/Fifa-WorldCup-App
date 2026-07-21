from flask import Blueprint, request
from app.services.worldcup_service import (
    get_wc_coverage,
    get_wc_teams,
    get_wc_fixtures,
    get_wc_standings,
    get_wc_players,
    get_wc_fixture_events,
    get_wc_top_scorers,
)

wc_bp = Blueprint("worldcup", __name__)

@wc_bp.get("/coverage")
def coverage():
    return get_wc_coverage()

@wc_bp.get("/teams")
def teams():
    return get_wc_teams()

@wc_bp.get("/fixtures")
def fixtures():
    return get_wc_fixtures()

@wc_bp.get("/standings")
def standings():
    return get_wc_standings()

@wc_bp.get("/players")
def players():
    page = request.args.get("page", 1)
    return get_wc_players(page)

@wc_bp.get("/events/<int:fixture_id>")
def events(fixture_id):
    return get_wc_fixture_events(fixture_id)

@wc_bp.get("/topscorers")
def top_scorers():
    return get_wc_top_scorers()
