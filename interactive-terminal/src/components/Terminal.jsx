import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

function TerminalUI({ setPage }) {
  const termRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      rows: 15,
      cursorBlink: true,
      theme: {
        background: "#0A0F1D",
        foreground: "#00FF00",
      },
    });

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
      if (key === "\r") { // Enter key
        term.writeln("\r\n");
        if (commands[input]) {
          if (typeof commands[input] === "function") {
            commands[input](); // Navigate to a different page
          } else {
            term.writeln(commands[input]);
          }
        } else {
          term.writeln("Command not found. Type 'help' for available commands.");
        }
        input = "";
        term.write("\n$ ");
      } else if (key === "\u007F") { // Backspace
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
  }, [setPage]);

  return <div ref={termRef} className="w-4/5 h-72 border border-green-500 p-2" />;
}

export default TerminalUI;
