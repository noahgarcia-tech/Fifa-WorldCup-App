import { useEffect, useState } from "react";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/worldcup/teams")
      .then(res => res.json())
      .then(data => {
        console.log("API DATA:", data);   // you already saw the shape
        setTeams(data.response);          // THIS is correct
      });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {teams.map((t) => (
        <div
          key={t.team.id}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 transition"
        >
        <h3 className="text-lg font-semibold">{t.team.name}</h3>
          <img
            src={t.team.logo}
            alt={t.team.name}
            className="w-20 h-20 object-contain mb-3"
          />
          
          
        </div>
      ))}
    </div>
  );
}
