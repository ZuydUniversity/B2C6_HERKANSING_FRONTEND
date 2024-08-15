import React, { useState } from 'react';

interface PasswordInputProps {
    label: string;
    placeholder?: string;
    onChange: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder, onChange }) => { //De properties label en placeholder veranderen vandaar wordt onchange gebruikt om de verandering in password in te zien
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPasswordField, setShowConfirmPasswordField] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value; // het getypte password wordt geassignd aan newPassword
        setPassword(newPassword);
        onChange(newPassword);
        setPasswordsMatch(newPassword === confirmPassword); //controleert of het nieuwe wahctwoord overeenkomt met het bevestigingswachtwoord
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordsMatch(password === newConfirmPassword); //controlleert of het bevestigings wachtwoord overeenkomt met het wachtwoord
    };

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword); //een toggle om het wachtwoord zichtbaar te maken
    };

    const toggleConfirmPasswordField = () => { // de toggle tussen sign up en sign in
        setShowConfirmPasswordField(true);
    };

    return (
        <div className="password-input">
            <label>
                {label}
                <div>
                    <input
                        type={showPassword ? "text" : "password"} // bepaalt of het password zichtbaar is of dat deze verborgen blijft
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder={placeholder} 
                    />
                    <button type="button" onClick={toggleShowPassword}>   
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
            </label>
            {showConfirmPasswordField && (
                <label>
                    Confirm {label}
                    <div>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder={`Confirm ${placeholder}`}
                        />
                    </div>
                </label>
            )}
            {!passwordsMatch && (
                <div style={{ color: 'red' }}>Passwords do not match!</div> // Wanneer passwords niet matchen krijgt de gebruiker hier een melding van
            )}
            {!showConfirmPasswordField && (
                <button type="button" onClick={toggleConfirmPasswordField}>
                    Sign UP
                </button> // dit is de button die toggled tussen sign up en sign in om zo het 2e password veld te laten zien
            )}
        </div>
    );
};

export default PasswordInput;