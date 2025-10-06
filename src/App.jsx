// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

// Import your components
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PantrySelector from './components/PantrySelector';
import RecipeDisplay from './components/RecipeDisplay';
import SavedRecipes from './components/SavedRecipes';

// Protect routes that need authentication
const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return token ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<ProtectedRoute><PantrySelector /></ProtectedRoute>} />
      <Route path="/pantry" element={<ProtectedRoute><PantrySelector /></ProtectedRoute>} />
      <Route path="/recipe" element={<ProtectedRoute><RecipeDisplay /></ProtectedRoute>} />
      <Route path="/saved-recipes" element={<ProtectedRoute><SavedRecipes /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
