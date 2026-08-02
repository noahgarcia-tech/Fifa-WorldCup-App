import { useEffect, useState } from "react";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/players")
      .then(res => res.json())
      .then(data => setPlayers(data.response));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {players.map(p => (
        <div key={p.player.id} className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-bold mb-2">{p.player.name}</h3>
          <p className="text-gray-600">Age: {p.player.age}</p>
          <p className="text-gray-600">Nationality: {p.player.nationality}</p>
          <p className="text-gray-600">Position: {p.statistics[0].games.position}</p>
        </div>
      ))}
    </div>
  );
}
