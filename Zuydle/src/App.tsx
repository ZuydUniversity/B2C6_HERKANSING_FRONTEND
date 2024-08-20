import githubLogo from "/githubLogo.svg";
import "./App.css";
import "./components/Gold.tsx";
import LoginPage from "./components/Loginpage.tsx";



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
      <LoginPage></LoginPage>
    </>
  );
}

export default App;
