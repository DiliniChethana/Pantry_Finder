// frontend/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Keep base empty so CRA proxy or environment can be used
const API_BASE_URL = '';

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/auth/signup`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // Feedback & redirect
      alert('Signup successful! Please log in.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Check server status.');
      console.error('Signup error:', err);
    }
  };

  const styles = {
    container: { display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' },
    left: { flex: 1, backgroundImage: "url('/images/Gemini_Generated_Image_hnm4xmhnm4xmhnm4 1.png')", backgroundSize: 'cover', backgroundPosition: 'center' },
    right: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 },
    card: { width: '100%', maxWidth: 520, background: '#fff', borderRadius: 8, padding: '28px 36px', boxShadow: '0 12px 30px rgba(0,0,0,0.08)' },
    brandRow: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, justifyContent: 'center' },
    title: { color: '#111827', fontSize: 22, margin: '4px 0 6px', textAlign: 'center' },
    subtitle: { color: '#6b7280', fontSize: 14, marginBottom: 18, textAlign: 'center' },
    label: { fontWeight: 700, marginBottom: 8, display: 'block', fontSize: 14 },
    input: { width: '100%', padding: '12px 14px', border: '1px solid #e5e7eb', borderRadius: 4, marginBottom: 14, fontSize: 14 },
    button: { width: '100%', background: '#F7931E', color: '#fff', padding: 14, borderRadius: 10, border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer' },
    footerText: { textAlign: 'center', marginTop: 14, color: '#374151' },
    smallLink: { color: '#3b82f6', textDecoration: 'none', marginLeft: 6 }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left} />
      <div style={styles.right}>
        <div style={styles.card}>
          <div style={styles.brandRow}>
            <img src="/logo192.png" alt="logo" style={{ width: 56, height: 56 }} />
          </div>
          <h3 style={styles.title}>Pantry Finder</h3>
          <p style={styles.subtitle}>SignUp
            <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etp
          </p>

          {error && <p style={{ color: 'red', marginBottom: 10 }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>User Name</label>
            <input name="username" value={formData.username} onChange={handleChange} style={styles.input} placeholder="Email Address or Phone Number" required />

            <label style={styles.label}>Password</label>
            <div style={{ position: 'relative' }}>
              <input name="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleChange} style={styles.input} placeholder="Password" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 10, top: 10, background: 'transparent', border: 'none', cursor: 'pointer' }} aria-label="toggle password visibility">{showPassword ? 'Hide' : 'Show'}</button>
            </div>

            <label style={styles.label}>Comform Password</label>
            <input name="confirmPassword" type={showPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleChange} style={styles.input} placeholder="Comform Password" required />

            <button type="submit" style={styles.button}>SignUp</button>
          </form>

          <div style={styles.footerText}>
            <span>Do you already have an account?</span>
            <Link to="/login" style={styles.smallLink}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}