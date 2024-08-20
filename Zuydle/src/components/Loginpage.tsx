import React, {useState} from "react";
import LoginButton from "./loginbutton";
import UserLoginComponent from "./loginusername";

function LoginPage() 
{
    return(
        <div>
            <UserLoginComponent></UserLoginComponent>
            <LoginButton></LoginButton>
        </div>
    )

}

export default LoginPage;
