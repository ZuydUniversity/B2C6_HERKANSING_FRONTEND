import {useState} from "react";
import LoginButton from "./LoginButton.tsx";
import UserLoginComponent from "./LoginUsername";


function HandleLogin(user: string, pass: string)
{

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
