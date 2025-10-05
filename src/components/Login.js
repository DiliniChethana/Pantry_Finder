// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

// Use relative paths; frontend dev server proxy will forward to backend
const API_BASE_URL = '';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        identifier: identifier,
        password: password,
      });

      const { token, user_id } = response.data;
      login({ id: user_id }, token);
      navigate('/pantry');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check credentials.');
      console.error('Login error:', err);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif'
    },
    left: {
      flex: 1,
      backgroundImage: "url('/images/login-left.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    },
    right: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px'
    },
    card: {
      width: '100%',
      maxWidth: '520px',
      background: '#fff',
      borderRadius: '8px',
      padding: '32px 40px',
      boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
    },
    brandRow: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', justifyContent: 'center' },
    title: { color: '#F7931E', fontSize: '22px', margin: '8px 0 18px' },
    label: { fontWeight: 700, marginBottom: '8px', display: 'block', fontSize: '16px' },
    input: { width: '100%', padding: '14px 16px', border: '1px solid #cfcfcf', borderRadius: '4px', marginBottom: '18px', fontSize: '14px' },
    button: { width: '100%', background: '#F7931E', color: '#fff', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: 800, fontSize: '18px', cursor: 'pointer' },
    footerText: { textAlign: 'center', marginTop: '18px', color: '#333' },
    smallLink: { color: '#3b82f6', textDecoration: 'none', marginLeft: '6px' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left} />
      <div style={styles.right}>
        <div style={styles.card}>
          <div style={{ textAlign: 'center', marginBottom: 6 }}>
            <img src="/logo192.png" alt="logo" style={{ width: 56, height: 56 }} />
          </div>
          <h3 style={styles.title}>Login</h3>

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>User Name</label>
            <input
              style={styles.input}
              type="text"
              placeholder="Email Address or Phone Number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />

            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" style={styles.button}>Login</button>
          </form>

          <div style={styles.footerText}>
            <span>Don't you have an account?</span>
            <Link to="/signup" style={styles.smallLink}>Sign Up</Link>
          </div>

          {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}