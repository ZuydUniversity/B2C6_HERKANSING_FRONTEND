import React from "react";
import useUsername from "../hooks/useUsername";


function HandleLogin()
{
  const databaseUsers = fetch('/api/users')
}

const LoginButton: React.FC<{}> = () => {
  
  return (
    <div>
        <button onClick={() => {HandleLogin}}>Log in</button>
    </div>
  );
};

export default LoginButton;
