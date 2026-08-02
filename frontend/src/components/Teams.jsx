import { useEffect, useState } from "react";
import "../styles/teams.css";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/teams")
      .then(res => res.json())
      .then(data => {
        setTeams(data.response);
      });
  }, []);

  return (
    <div className="teams-page">
      <h1 className="teams-title">2022 World Cup Teams</h1>

      <div className="teams-grid">
        {teams.map((t) => (
          <div key={t.team.id} className="team-card">
            <h3 className="team-name">{t.team.name}</h3>
            <img
              src={t.team.logo}
              alt={t.team.name}
              className="team-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
