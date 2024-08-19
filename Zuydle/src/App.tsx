import React from "react";
import githubLogo from "/githubLogo.svg";
import "./App.css";
import Gold from "./components/Gold";
import PickaxeUpgrade from "./components/PickaxeUpgrade";
import { GoldProvider } from "./context/GoldContext";


function App() {
  return (
    <GoldProvider>
      <div>
        <a
          href="https://github.com/ZuydUniversity/B2C6_HERKANSING_FRONTEND/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
      <Gold />
      <PickaxeUpgrade />
    </GoldProvider>
  );
}

export default App;
