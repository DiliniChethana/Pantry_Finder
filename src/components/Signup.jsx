// frontend/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// Use Vite environment variable or empty string to let proxy work in dev
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/auth/signup`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // After successful signup, go to the login page (Login is at `/`)
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed.');
      console.error('Signup error:', err);
    }
  };

  const styles = {
    container: { display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' },
    left: { flex: '0 0 50%', position: 'relative', backgroundImage: "url('/images/login-left.png')", backgroundSize: 'cover', backgroundPosition: 'center' },
    leftOverlay: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' },
    right: { flex: '0 0 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 80px' },
    card: { width: '100%', maxWidth: '520px', background: '#fff', borderRadius: 6, padding: '24px 34px' },
    heading: { color: '#F7931E', fontSize: 24, fontWeight: 700, marginBottom: 6 },
    desc: { color: '#666', fontSize: 14, marginBottom: 18, lineHeight: 1.5 },
    label: { fontWeight: 700, marginBottom: 6, display: 'block', fontSize: 16 },
    input: { width: '100%', padding: '14px 16px', border: '1px solid #cfcfcf', borderRadius: 2, marginBottom: 18, fontSize: 15 },
    button: { width: '100%', background: '#F7931E', color: '#fff', padding: '14px', borderRadius: 10, border: 'none', fontWeight: 800, fontSize: 20, cursor: 'pointer', marginTop: 8 },
    footer: { textAlign: 'center', marginTop: 14, display: 'flex', justifyContent: 'center', gap: 6 },
    smallLink: { color: '#3b82f6', textDecoration: 'none' },
    error: { color: 'red', marginTop: 8 }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.leftOverlay} />
      </div>

      <div style={styles.right}>
        <div style={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <img src="/images/logo-small.png" alt="logo" style={{ width: 48, height: 48 }} />
            <div style={{ fontWeight: 800, fontSize: 20 }}>Pantry Finder</div>
          </div>

          <h3 style={styles.heading}>SignUp</h3>
          <p style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etp</p>

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>User Name</label>
            <input name="username" style={styles.input} placeholder="User Name" value={formData.username} onChange={handleChange} required />

            <label style={styles.label}>Email</label>
            <input name="email" style={styles.input} placeholder="Email Address" value={formData.email} onChange={handleChange} required />

            <label style={styles.label}>Password</label>
            <input name="password" type="password" style={styles.input} placeholder="Password" value={formData.password} onChange={handleChange} required />

            <label style={styles.label}>Confirm Password</label>
            <input name="confirmPassword" type="password" style={styles.input} placeholder="Comform Password" value={formData.confirmPassword} onChange={handleChange} required />

            <button type="submit" style={styles.button}>SignUp</button>
          </form>

          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.footer}>Do you already have an account? <Link to="/" style={styles.smallLink}>Login</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;