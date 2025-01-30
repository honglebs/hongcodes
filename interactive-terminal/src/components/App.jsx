import React, { useState } from "react";
import TerminalUI from "./Terminal";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  const [page, setPage] = useState("terminal");

  return (
    <div className="container">
      <h1 className="title">🚀 Cyberpunk Space Terminal</h1>
      {page === "terminal" && <TerminalUI setPage={setPage} />}
      {page === "projects" && <Projects />}
      {page === "blog" && <Blog />}
      {page === "contact" && <Contact />}
      <button onClick={() => setPage("terminal")}>Back to Terminal</button>
    </div>
  );
}

export default App;
