import React, { useState } from "react";
import TerminalUI from "./Terminal";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  const [page, setPage] = useState("terminal");

  return (
    <div className="app-container">
      <h1 className="title">🚀 Cyberpunk Space Terminal</h1>
      
      {/* Ensure only one instance of TerminalUI is rendered */}
      {page === "terminal" && <TerminalUI setPage={setPage} />}
      {page === "projects" && <Projects />}
      {page === "blog" && <Blog />}
      {page === "contact" && <Contact />}
      
      {page !== "terminal" && (
        <button className="back-button" onClick={() => setPage("terminal")}>
          Back to Terminal
        </button>
      )}
    </div>
  );
}

export default App;
