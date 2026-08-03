import { useEffect, useState } from "react";
import "../styles/topscorers.css";


export default function TopScorers() {
  const [scorers, setScorers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/topscorers")
      .then((res) => res.json())
      .then((data) => setScorers(data.response || []));
  }, []);

  return (
    <div className="page">
      <h1 className="page-title">Top Scorers</h1>

      <div className="grid">
        {scorers.map((item, index) => {
          const player = item.player;
          const stats = item.statistics[0];

          return (
            <div key={index} className="card">
              <img
                src={player.photo}
                alt={player.name}
                className="card-img"
              />

              <h2 className="card-title">{player.name}</h2>

              <p className="card-subtitle">{stats.team.name}</p>

              <div className="card-info">
                <p><strong>Goals:</strong> {stats.goals.total}</p>
                <p><strong>Matches:</strong> {stats.games.appearences}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
