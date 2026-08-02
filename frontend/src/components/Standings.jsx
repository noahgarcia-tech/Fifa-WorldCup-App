import { useEffect, useState } from "react";

export default function Standings() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/standings")
      .then(res => res.json())
      .then(data => setStandings(data.response[0].league.standings));
  }, []);

  return (
    <div className="p-6">
      {standings.map((group, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Group {group[0].group}</h2>

          <table className="w-full bg-white shadow rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Team</th>
                <th className="p-2">Pts</th>
                <th className="p-2">W</th>
                <th className="p-2">D</th>
                <th className="p-2">L</th>
              </tr>
            </thead>
            <tbody>
              {group.map(team => (
                <tr key={team.team.id} className="border-t">
                  <td className="p-2 flex items-center gap-3">
                    <img src={team.team.logo} className="w-6 h-6" />
                    {team.team.name}
                  </td>
                  <td className="p-2 text-center">{team.points}</td>
                  <td className="p-2 text-center">{team.all.win}</td>
                  <td className="p-2 text-center">{team.all.draw}</td>
                  <td className="p-2 text-center">{team.all.lose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
