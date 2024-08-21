import React from "react";
import githubLogo from "/githubLogo.svg";
import "./App.css";
import { GoldProvider } from "./context/GoldContext";
import LoginPage from "./components/Loginpage";
import UserList from "./components/UserList";

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
        <UserList />
      </div>
      <LoginPage></LoginPage>
      </GoldProvider>
  );
}

export default App;
