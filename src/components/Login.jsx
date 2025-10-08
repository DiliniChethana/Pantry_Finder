// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

// Use Vite environment variable or empty string to let proxy work in dev
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

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
      if (token && user_id) {
        login({ id: user_id }, token);
        navigate('/pantry');
        return;
      }
      // Unexpected success payload
      setError('Login succeeded but no token returned.');
    } catch (err) {
      // Better error messages for debugging
      const status = err.response?.status;
      const serverMsg = err.response?.data?.message || JSON.stringify(err.response?.data || {});
      setError(status ? `Login failed (${status}): ${serverMsg}` : 'Network error: could not reach server');
      console.error('Login error:', err);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
      background: '#fff'
    },
    left: {
      flex: '0 0 50%',
      position: 'relative',
      backgroundImage: "url('/images/login-left.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    },
    leftOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.35)'
    },
    right: {
      flex: '0 0 50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 80px'
    },
    card: {
      width: '100%',
      maxWidth: '520px',
      background: '#fff',
      borderRadius: '6px',
      padding: '28px 36px',
      boxShadow: 'none'
    },
    brandRow: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', justifyContent: 'center' },
    title: { color: '#F7931E', fontSize: '26px', margin: '14px 0 18px', fontWeight: 700 },
    label: { fontWeight: 700, marginBottom: '8px', display: 'block', fontSize: '16px' },
    input: { width: '100%', padding: '14px 18px', border: '1px solid #cfcfcf', borderRadius: '2px', marginBottom: '22px', fontSize: '15px' },
    button: { width: '100%', background: '#F7931E', color: '#fff', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: 800, fontSize: '20px', cursor: 'pointer', margin: '22px 0' },
    footerText: { textAlign: 'center', marginTop: '10px', color: '#333', display: 'flex', justifyContent: 'center', gap: 6, alignItems: 'center' },
    smallLink: { color: '#3b82f6', textDecoration: 'none' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.leftOverlay} />
      </div>

      <div style={styles.right}>
        <div style={{ width: '100%', maxWidth: '520px', marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <img src="/images/logo-small.png" alt="logo" style={{ width: 56, height: 56 }} />
          <div style={{ fontWeight: 800, fontSize: 22 }}>Pantry Finder</div>
        </div>

        <div style={styles.card}>
          <h3 style={{ ...styles.title, textAlign: 'left' }}>Login</h3>

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
            <span style={{fontSize:14}}>Don't you have an&nbsp;account?</span>
            <Link to="/signup" style={styles.smallLink}>Sign Up</Link>
          </div>

          {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}