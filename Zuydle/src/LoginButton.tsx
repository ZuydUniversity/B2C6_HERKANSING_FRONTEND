import React, { useState } from 'react';
import './LoginButton.css'; // Zorg ervoor dat de CSS wordt geïmporteerd

const LoginButton: React.FC = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    setLoginFormVisible(true); // Toon het formulier bij klikken op de knop
  };

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Username and password are required.');
    } else if (username !== 'correctUsername' || password !== 'correctPassword') {
      setErrorMessage('Incorrect username or password.');
    } else {
      setErrorMessage('');
      console.log('Inloggen geslaagd');
      // Voeg hier de inloglogica toe als je dat later wilt
    }
  };

  return (
    <div className={`login-container ${isLoginFormVisible ? 'login-form-visible' : ''}`}>
      {!isLoginFormVisible ? (
        <button className="login-button" onClick={handleButtonClick}>
          In
        </button>
      ) : (
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-button" onClick={handleLogin}>
            Inloggen
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginButton;
