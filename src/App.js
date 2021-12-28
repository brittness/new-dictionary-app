import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary />
      <footer>
        <small>
          This{" "}
          <a
            href="https://github.com/brittness/new-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>{" "}
          dictionary was built by Brittany Linn and hosted on{" "}
          <a
            href="https://trusting-tesla-9a56c6.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
