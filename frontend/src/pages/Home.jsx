import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">🏆</h1>

      <h1 className="home-title">2022 World Cup Dashboard</h1>

      <p className="home-subtitle">
        Explore teams, fixtures, standings, players, and top scorers.
      </p>

      <div className="home-links">
        <Link to="/teams" className="home-link home-link-blue">
          View Teams
        </Link>
        <Link to="/fixtures" className="home-link home-link-green">
          View Matches
        </Link>
        <Link to="/standings" className="home-link home-link-purple">
          View Standings
        </Link>
        <Link to="/players" className="home-link home-link-orange">
          View Players
        </Link>
        <Link to="/topscorers" className="home-link home-link-red">
          View Top Scorers
        </Link>
      </div>
    </div>
  );
}
