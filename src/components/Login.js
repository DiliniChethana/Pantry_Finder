// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

// Use relative paths; frontend dev server proxy will forward to backend
const API_BASE_URL = '';

function Login() {
  const [identifier, setIdentifier] = useState(''); // Email Address or Phone Number/User Name
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
  const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        identifier: identifier, // Used to check against email or username in backend
        password: password
      });

      // Assuming backend returns a JWT token and user details
      const { token, user_id } = response.data; 
      
      // Store token and state using AuthContext
      login({ id: user_id }, token); 
      
      alert("Login successful!");
      navigate('/pantry'); // Redirect to the main Pantry page (Page 5)

    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    // NOTE: Apply styling here to match Figma Page 2 layout.
    <div className="auth-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        
        <input
          type="text"
          placeholder="Email Address or Phone Number" // Matches Figma Page 2
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Login</button>
      </form>
      
      <p>Don't you have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;