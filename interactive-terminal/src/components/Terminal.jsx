import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

function TerminalUI({ setPage }) {
  const termRef = useRef(null);
  const terminalInstance = useRef(null);

  useEffect(() => {
    if (!terminalInstance.current) {
      const term = new Terminal({
        rows: 15,
        cursorBlink: true,
        theme: {
          background: "#0A0F1D",
          foreground: "#00FF00",
        },
      });

      terminalInstance.current = term;
      term.open(termRef.current);
      term.writeln("🚀 Welcome to the Cyberpunk Terminal!");
      term.writeln("Type 'help' to see available commands.\n");

      const commands = {
        help: "Available commands: ls, cd [projects/blog/contact], clear",
        ls: "projects  blog  contact",
        "cd projects": () => setPage("projects"),
        "cd blog": () => setPage("blog"),
        "cd contact": () => setPage("contact"),
        clear: () => term.clear(),
      };

      let input = "";
      term.onKey((e) => {
        const { key } = e;
        if (key === "\r") {
          term.writeln("\r\n");
          if (commands[input]) {
            if (typeof commands[input] === "function") {
              commands[input]();
            } else {
              term.writeln(commands[input]);
            }
          } else {
            term.writeln("Command not found. Type 'help' for available commands.");
          }
          input = "";
          term.write("\n$ ");
        } else if (key === "\u007F") {
          if (input.length > 0) {
            input = input.slice(0, -1);
            term.write("\b \b");
          }
        } else {
          input += key;
          term.write(key);
        }
      });

      term.write("$ ");
    }
  }, [setPage]);

  return (
    <div className="terminal-wrapper">
      <div ref={termRef} className="terminal-container" />
    </div>
  );
}

export default TerminalUI;
