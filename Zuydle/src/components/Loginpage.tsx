import { useState } from "react";
import LoginButton from "./loginbutton";
import UserLoginComponent from "./loginusername";

interface LoginPageProps {
    onLoginStatusChange: (isLoggedIn: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginStatusChange }) => {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");

    async function HandleLogin(user: string, pass: string) {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: user, password: pass }),
            });
    
            if (response.status === 200) {
                const result = await response.json();
                if (result.success) {
                    alert('Login successful!');
                    onLoginStatusChange(true);
                } else {
                    alert('Login failed: ' + result.message);
                }
            } else if (response.status === 401) {
                alert('Invalid username or password.');
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
