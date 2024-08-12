import React, { useState } from 'react';

interface PasswordInputProps {
    label: string;
    placeholder?: string;
    onChange: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder, onChange }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPasswordField, setShowConfirmPasswordField] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        onChange(newPassword);
        setPasswordsMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordsMatch(password === newConfirmPassword);
    };

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const toggleConfirmPasswordField = () => {
        setShowConfirmPasswordField(true);
    };

    return (
        <div className="password-input">
            <label>
                {label}
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
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
                <div style={{ color: 'red' }}>Passwords do not match!</div>
            )}
            {!showConfirmPasswordField && (
                <button type="button" onClick={toggleConfirmPasswordField}>
                    Sign UP
                </button>
            )}
        </div>
    );
};

export default PasswordInput;