import React, { useState } from "react";
import TerminalUI from "./Terminal";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import "../styles/App.css";

function App() {
  const [page, setPage] = useState("terminal");

  return (
    <div className="dashboard">
      {/* Background with Cyberpunk Theme */}
      <div className="background-overlay"></div>

      {/* Top Panel: Holographic Map */}
      <div className="top-panel">
        <h1 className="title">🛰️ Mission Control System</h1>
        <p>Tracking satellites, space stations, and rocket launches...</p>
        <div className="holo-map">
          <img src="/assets/planet.png" alt="Holographic Map" />
        </div>
      </div>

      {/* Left Panel: Navigation */}
      <div className="left-panel">
        <h2>📟 Mission Directory</h2>
        <button className="nav-btn" onClick={() => setPage("projects")}>📂 Mission Reports</button>
        <button className="nav-btn" onClick={() => setPage("blog")}>📜 Flight Logs</button>
        <button className="nav-btn" onClick={() => setPage("contact")}>📡 Ground Control</button>
      </div>

      {/* Right Panel: Content Display */}
      <div className="right-panel">
        {page === "projects" && <Projects />}
        {page === "blog" && <Blog />}
        {page === "contact" && <Contact />}
      </div>

      {/* Bottom Panel: Terminal */}
      <div className="bottom-panel">
        <TerminalUI setPage={setPage} />
      </div>
    </div>
  );
}

export default App;

