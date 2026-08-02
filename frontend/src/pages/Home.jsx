import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">World Cup App</h1>

      <p className="text-lg mb-8">
        Explore teams, fixtures, standings, players, and top scorers.
      </p>

      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        <Link to="/teams" className="bg-blue-600 text-white py-3 rounded">
          View Teams
        </Link>
        <Link to="/fixtures" className="bg-green-600 text-white py-3 rounded">
          View Fixtures
        </Link>
        <Link to="/standings" className="bg-purple-600 text-white py-3 rounded">
          View Standings
        </Link>
        <Link to="/players" className="bg-orange-600 text-white py-3 rounded">
          View Players
        </Link>
        <Link to="/topscorers" className="bg-red-600 text-white py-3 rounded">
          View Top Scorers
        </Link>
      </div>
    </div>
  );
}
