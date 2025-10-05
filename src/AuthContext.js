import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('userToken') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage on initial load
    if (token) {
        // Optionally fetch user profile data here using the token
        // setUser({ id: storedUserId, name: storedUserName }); 
    }
    setLoading(false);
  }, [token]);

  const login = (userData, jwtToken) => {
    localStorage.setItem('userToken', jwtToken);
    setToken(jwtToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
