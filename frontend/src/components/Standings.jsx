import { useEffect, useState } from "react";
import "../styles/standings.css";

export default function Standings() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/standings")
      .then(res => res.json())
      .then(data => {
        const standings = data.response[0].league.standings;
        setGroups(standings);
      });
  }, []);

  return (
    <div className="page">
      <h1 className="page-title">Group Standings</h1>

      {groups.map((group, idx) => (
        <div key={idx} className="group-section">
          <h2 className="group-title">{group[0].group}</h2>

          <div className="grid">
            {group.map(team => (
              <div key={team.team.id} className="card">
                <img
                  src={team.team.logo}
                  alt={team.team.name}
                  className="card-img"
                />

                <h3 className="card-title">{team.team.name}</h3>
                <p className="card-subtitle">Rank #{team.rank}</p>

                <div className="card-info">
                  <p><strong>Points:</strong> {team.points}</p>
                  <p><strong>Wins:</strong> {team.all.win}</p>
                  <p><strong>Draws:</strong> {team.all.draw}</p>
                  <p><strong>Losses:</strong> {team.all.lose}</p>
                  <p><strong>Played:</strong> {team.all.played}</p>
                  <p><strong>Goal Diff:</strong> {team.goalsDiff}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
