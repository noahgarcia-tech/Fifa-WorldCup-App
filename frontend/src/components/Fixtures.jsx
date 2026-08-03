import { useEffect, useState } from "react";


export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/fixtures")
      .then(res => res.json())
      .then(data => setFixtures(data.response || []));
  }, []);

  return (
    <div className="page">
      <h1 className="page-title">Matches</h1>

      <div className="grid">
        {fixtures.map(fix => {
          const home = fix.teams.home;
          const away = fix.teams.away;

          const goalsHome = fix.goals.home;
          const goalsAway = fix.goals.away;

          const date = new Date(fix.fixture.date).toLocaleString();

          return (
            <div key={fix.fixture.id} className="card">
              <p className="fixture-date">{date}</p>

              <div className="fixture-teams">
                <div className="team-side">
                  <img src={home.logo} className="team-logo" />
                  <p className="team-name">{home.name}</p>
                </div>

                <div className="fixture-score">
                  {goalsHome !== null && goalsAway !== null
                    ? `${goalsHome} - ${goalsAway}`
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
  );
}
