import React, { useState } from "react";
import LoginPage from "./Loginpage";
import Gold from "./Gold";
import PickaxeUpgrade from "./PickaxeUpgrade";

const AuthProvider: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLoginStatusChange = (loggedIn: boolean) => {
        setIsLoggedIn(loggedIn);
    };

    return (
        <div>
            {!isLoggedIn ? (
                <LoginPage onLoginStatusChange={handleLoginStatusChange} />
            ) : (
                <>
                    <Gold />
                    <PickaxeUpgrade />
                </>
            )}
        </div>
    );
};

export default AuthProvider;
