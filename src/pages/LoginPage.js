import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import { useTranslation } from 'react-i18next';
import SuccessScreen from '../components/SuccessScreen';
import LanguageSwitcher from '../components/LanguageSwitcher';
import './LoginPage.scss';

const LoginPage = () => {
    const { t } = useTranslation();
    const { isAuthenticated } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="container">
            <LanguageSwitcher />
            {isAuthenticated && isLoggedIn ? (
                <SuccessScreen message={t('login.message')}/>
            ) : (
                <>
                    <h2>{t('login.title')}</h2>
                    <LoginForm onLoginSuccess={handleLoginSuccess} />
                    <Link to="/forgot-password" className="link">{t('login.forgotPassword')}</Link>
                </>
            )}
        </div>
    );
};

export default LoginPage;
