// frontend/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// Use relative paths; frontend dev server proxy will forward to backend
const API_BASE_URL = '';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',      // User Name
    email: '',         // Email Address or Phone Number
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const { login } = useAuth(); // If you want to log the user in immediately after signup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
  await axios.post(`${API_BASE_URL}/api/auth/signup`, {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      alert("Signup successful! Please log in.");
      navigate('/login');

    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Check server status.");
      console.error("Signup error:", err);
    }
  };

  return (
    // NOTE: Apply styling here to match Figma Page 3 layout.
    <div className="auth-container">
      <h1>SignUp</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        
        <input
          type="text"
          name="username"
          placeholder="User Name" // Matches Figma Page 3
          value={formData.username}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          name="email"
          placeholder="Email Address or Phone Number" // Matches Figma Page 3
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="confirmPassword"
          placeholder="Comform Password" // Matches Figma Page 3
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <button type="submit">SignUp</button>
      </form>
      
      <p>Do you already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;