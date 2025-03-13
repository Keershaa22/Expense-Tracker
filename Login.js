import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles/Login.css'; // Import CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // For simplicity, let's assume these are the correct credentials
    const mockEmail = 'user@example.com';
    const mockPassword = 'password123';

    // Validate email and password
    if (email === mockEmail && password === mockPassword) {
      // Redirect to home page after successful login
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
