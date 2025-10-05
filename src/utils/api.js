import axios from 'axios';

const api = axios.create({
  // No baseURL here; dev proxy will forward /api/* to backend
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token if present
const token = localStorage.getItem('token');
if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default api;
