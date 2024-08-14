import githubLogo from "/githubLogo.svg";
import "./App.css";
import "./components/Gold.tsx";
import "./components/Password.tsx";
import LoginButton from "./components/loginbutton.tsx";
import UserLoginComponent from "./components/loginusername.tsx";
import PasswordInput from "./components/Password.tsx";



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
      <UserLoginComponent></UserLoginComponent>
      <PasswordInput placeholder='Password' onChange={(pass: string) => {return}}> </PasswordInput>
      <LoginButton></LoginButton>
    </>
  );
}

export default App;
