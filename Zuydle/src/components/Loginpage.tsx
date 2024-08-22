import { useState } from "react";
import LoginButton from "./LoginButton";
import UserLoginComponent from "./LoginUsername";

interface LoginPageProps {
    onLoginStatusChange: (isLoggedIn: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginStatusChange }) => {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");

    async function HandleLogin(user: string, pass: string) {
        try {
            const response = await fetch(`http://localhost:5000/api/users?username=${encodeURIComponent(user)}`);
            
            if (response.status === 200) {
                alert('Username exists! (You can proceed with password check)');
            } else if (response.status === 404) {
                alert('Username does not exist.');
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            if (error instanceof Error) {
                alert('An error occurred: ' + error.message);
            } else {
                alert('An unknown error occurred');
            }
        }
    }

    return (
        <div>
            <UserLoginComponent setUsername={setUsername} />
            <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <LoginButton HandleLogin={HandleLogin} u={username} p={password} />
        </div>
    );
}

export default LoginPage;
