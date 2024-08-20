import githubLogo from "/githubLogo.svg";
import "./App.css";
import "./components/Gold.tsx";
import Gold from "./components/Gold.tsx";
import PasswordInput from "./Password.tsx";


function App() {
  return (
    <>
      <div>
        <a
          href="https://github.com/ZuydUniversity/B2C6_HERKANSING_FRONTEND/issues"
          target="_blank"
        >
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
      <PasswordInput></PasswordInput>
    </>
  );
}

export default App;
