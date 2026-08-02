import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./components/Teams";
import Fixtures from "./components/Fixtures";
import Standings from "./components/Standings";
import Players from "./components/Players";
import TopScorers from "./components/TopScorers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/players" element={<Players />} />
        <Route path="/topscorers" element={<TopScorers />} />
    </Routes>
    </BrowserRouter>
  );
}
