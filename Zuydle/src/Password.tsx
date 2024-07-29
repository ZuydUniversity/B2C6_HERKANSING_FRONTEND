import React, { useState } from 'react';

interface PasswordInputProps {
    label: string;
    placeholder?: string;
    onChange: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder, onChange }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        onChange(newPassword);
    };

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
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
        </div>
    );
}

export default PasswordInput;