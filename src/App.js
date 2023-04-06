import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React App CIRCLE change</p>
        <p>Feat changes</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react app
        </a>
        <p>Feat qww</p>
      </header>
    </div>
  );
}

export default App;
