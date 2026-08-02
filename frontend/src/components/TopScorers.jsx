import { useEffect, useState } from "react";

export default function TopScorers() {
  const [scorers, setScorers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/topscorers")
      .then(res => res.json())
      .then(data => setScorers(data.response));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Top Scorers</h2>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Player</th>
            <th className="p-2">Goals</th>
            <th className="p-2">Team</th>
          </tr>
        </thead>
        <tbody>
          {scorers.map(s => (
            <tr key={s.player.id} className="border-t">
              <td className="p-2">{s.player.name}</td>
              <td className="p-2 text-center">{s.statistics[0].goals.total}</td>
              <td className="p-2 text-center">{s.statistics[0].team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
