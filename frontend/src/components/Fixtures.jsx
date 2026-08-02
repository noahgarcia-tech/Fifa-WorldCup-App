import { useEffect, useState } from "react";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/fixtures")
      .then(res => res.json())
      .then(data => setFixtures(data.response));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {fixtures.map(f => (
        <div key={f.fixture.id} className="bg-white shadow rounded p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600">
              {new Date(f.fixture.date).toLocaleString()}
            </span>
            <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded">
              {f.league.name}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={f.teams.home.logo} className="w-10 h-10" />
              <span>{f.teams.home.name}</span>
            </div>

            <span className="text-xl font-bold">
              {f.goals.home} - {f.goals.away}
            </span>

            <div className="flex items-center gap-3">
              <img src={f.teams.away.logo} className="w-10 h-10" />
              <span>{f.teams.away.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
