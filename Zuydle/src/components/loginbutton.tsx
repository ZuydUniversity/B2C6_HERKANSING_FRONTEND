import React from "react";

// Dit component krijgt HandleLogin via props. Het activeerd wanneer je op de login knop duwt.
interface LoginButtonProps 
{
  HandleLogin: (u: string, p:string) => void,
  u:string,
  p:string
}

const LoginButton: React.FC<LoginButtonProps> = ({HandleLogin, u, p}) => {
  console.log(HandleLogin)
  return (
    <div>
        <button onClick={() => {HandleLogin(u, p)}}>Log in</button>
    </div>
  );
};

export default LoginButton;
