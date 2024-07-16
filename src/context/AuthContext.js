import React, { createContext, useState } from 'react';
import credentials from '../api/credentials.json';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const login = (email, password) => {
        const user = credentials.find(
            user => user.email === email && user.password === password
        );
        if (user) {
            setIsAuthenticated(true);
            setError('');
            return true;
        } else {
            setError('Invalid credentials');
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};
