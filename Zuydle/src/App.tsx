import React from "react";
import githubLogo from "/githubLogo.svg";
import "./App.css";
import { GoldProvider } from "./context/GoldContext";
import AuthProvider from "./components/Authenticator";

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
      <AuthProvider />
      </GoldProvider>
  );
}

export default App;
