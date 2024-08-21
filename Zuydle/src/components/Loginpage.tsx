import React, {useState} from "react";
import LoginButton from "./loginbutton";
import UserLoginComponent from "./loginusername";


function HandleLogin(user: string, pass: string)
{
//   const databaseUsers = fetch('/api/users')
}

function LoginPage() 
{
    const[username, setUsername] = useState("default")
    const[password, setPassword] = useState("1234")

    return(
        <div>
            <UserLoginComponent setUsername={setUsername}></UserLoginComponent>
            <LoginButton HandleLogin={HandleLogin} u = {username} p = {password}></LoginButton>
        </div>
    )

}

export default LoginPage;
