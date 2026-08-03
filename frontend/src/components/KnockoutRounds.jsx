import { useEffect, useState } from "react";
import "../styles/knockoutrounds.css";

export default function Knockout() {
  const [rounds, setRounds] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/fixtures")
      .then(res => res.json())
      .then(data => {
        const fixtures = data.response || [];

        // Only knockout rounds
        const knockoutRounds = [
          "Round of 16",
          "Quarter-finals",
          "Semi-finals",
          "Final"
        ];

        const grouped = {};

        fixtures.forEach(fix => {
          const round = fix.league.round;

          if (knockoutRounds.includes(round)) {
            if (!grouped[round]) grouped[round] = [];
            grouped[round].push(fix);
          }
        });

        setRounds(grouped);
      });
  }, []);

  return (
    <div className="knockout-page">
      <h1 className="knockout-title">Knockout Rounds</h1>

      {Object.keys(rounds).map(round => (
        <div key={round} className="round-section">
          <h2 className="round-title">{round}</h2>

          <div className="knockout-grid">
            {rounds[round].map(match => {
              const home = match.teams.home;
              const away = match.teams.away;

              const scoreHome = match.goals.home;
              const scoreAway = match.goals.away;

              return (
                <div key={match.fixture.id} className="knockout-card">
                  <p className="match-date">
                    {new Date(match.fixture.date).toLocaleString()}
                  </p>

                  <div className="match-teams">
                    <div className="team-side">
                      <img src={home.logo} className="team-logo" />
                      <p className="team-name">{home.name}</p>
                    </div>

                    <div className="match-score">
                      {scoreHome !== null && scoreAway !== null
                        ? `${scoreHome} - ${scoreAway}`
                        : "TBD"}
                    </div>

                    <div className="team-side">
                      <img src={away.logo} className="team-logo" />
                      <p className="team-name">{away.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
