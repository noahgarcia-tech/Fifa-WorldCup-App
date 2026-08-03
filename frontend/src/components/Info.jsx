import { useEffect, useState } from "react";
import "../styles/info.css";

export default function WorldCup2022() {
  return (
    <div className="wc2022-page">
      <h1 className="wc2022-title">FIFA World Cup 2022 — Qatar</h1>

      {/* Summary Section */}
      <div className="wc2022-section">
        <h2 className="wc2022-heading">Tournament Summary</h2>
        <p className="wc2022-text">
          The 2022 FIFA World Cup was held in Qatar from 20 November to 18 December 2022,
          marking the first World Cup hosted in the Middle East and the first played in
          November–December. Argentina won the tournament after defeating France in one of
          the greatest finals in World Cup history.
        </p>
      </div>

      {/* Key Facts */}
   
<div className="wc2022-section">
  <h2 className="wc2022-heading">Key Facts</h2>

  <ul className="wc2022-list">
    <li>Host Country: Qatar</li>
    <li>Dates: 20 November – 18 December 2022</li>
    <li>Teams: 32</li>
    <li>Matches Played: 64</li>
    <li>Total Goals: 172 (Record)</li>
    <li>Champion: Argentina</li>
  </ul>
</div>


      {/* Final Match */}
      <div className="wc2022-section">
        <h2 className="wc2022-heading">The Final</h2>
        <p className="wc2022-text">
          Argentina defeated France 3–3 (4–2 on penalties) at Lusail Stadium. Lionel Messi
          scored twice, while Kylian Mbappé became the first player since 1966 to score a
          hat-trick in a World Cup final.
        </p>
      </div>

      {/* Award Winners */}
      <div className="wc2022-section">
        <h2 className="wc2022-heading">Award Winners</h2>

        <div className="wc2022-grid">
          <div className="wc2022-card">
            <h3 className="wc2022-card-title">Golden Ball</h3>
            <p>Lionel Messi (Argentina)</p>
          </div>

          <div className="wc2022-card">
            <h3 className="wc2022-card-title">Golden Boot</h3>
            <p>Kylian Mbappé (France) — 8 goals</p>
          </div>

          <div className="wc2022-card">
            <h3 className="wc2022-card-title">Golden Glove</h3>
            <p>Emiliano Martínez (Argentina)</p>
          </div>

          <div className="wc2022-card">
            <h3 className="wc2022-card-title">Young Player Award</h3>
            <p>Enzo Fernández (Argentina)</p>
          </div>
        </div>
      </div>

      {/* Historic Moments */}
      <div className="wc2022-section">
        <h2 className="wc2022-heading">Historic Moments</h2>

        <ul className="wc2022-list">
          <li>Morocco became the first African nation to reach the semifinals.</li>
          <li>Record-breaking 172 goals scored — the most in World Cup history.</li>
          <li>First World Cup hosted in the Middle East.</li>
          <li>Compact tournament — all stadiums within close proximity.</li>
        </ul>
      </div>

    {/* Stadiums */}
<div className="wc2022-section">
  <h2 className="wc2022-heading">Stadiums</h2>

  <ul className="wc2022-list">
    <li>Lusail Stadium</li>
    <li>Al Bayt Stadium</li>
    <li>Khalifa International Stadium</li>
    <li>Education City Stadium</li>
    <li>Stadium 974</li>
    <li>Al Thumama Stadium</li>
  </ul>
</div>

</div>
);
}
