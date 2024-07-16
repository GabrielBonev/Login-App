import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (

    <AuthProvider>
      <Provider store={store}>
        <Router>
          <div>
            <LanguageSwitcher /> { }
            <Routes>
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
