import React from "react";

// Dit component krijgt HandleLogin via props. Het activeerd wanneer je op de login knop duwt.
interface LoginButtonProps 
{
  HandleLogin: () => void
}

const LoginButton: React.FC<LoginButtonProps> = (HandleLogin) => {
  
  return (
    <div>
        <button onClick={() => {HandleLogin}}>Log in</button>
    </div>
  );
};

export default LoginButton;
