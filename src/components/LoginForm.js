import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../context/AuthContext';
import InputField from './InputField';
import Button from './Button';
import validator from 'validator';

const LoginForm = ({ onLoginSuccess }) => {
    const { t } = useTranslation();
    const { login, error } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [emailValidationMessage, setEmailValidationMessage] = useState('');
    const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
    const handleOnBlur = (e) => {
        setEmailValidationMessage('');
        setPasswordValidationMessage('');
    }

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        if (validator.isEmail(emailInput)) {
            setIsEmailValid(true);
            setEmailValidationMessage('');
        } else {
            setIsEmailValid(false);
            setEmailValidationMessage(t('error.invalidEmail'));
        }
    };

    const handlePasswordChange = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length >= 6) {
            setIsPasswordValid(true);
            setPasswordValidationMessage('');
        } else {
            setIsPasswordValid(false);
            setPasswordValidationMessage(t('error.invalidPassword'));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = isEmailValid && isPasswordValid;

        if (isFormValid) {
            const success = login(email, password);
            if (success) {
                onLoginSuccess();
            }
        } else {
            if (!isEmailValid) {
                setEmailValidationMessage(t('error.invalidEmail'));
            }
            if (!isPasswordValid) {
                setPasswordValidationMessage(t('error.invalidPassword'));
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label={t('login.email')}
                type="text"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleOnBlur}
            />
            {!isEmailValid && <p style={{ color: 'red' }}>{emailValidationMessage}</p>}
            <InputField
                label={t('login.password')}
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handleOnBlur}
            />
            {!isPasswordValid && <p style={{ color: 'red' }}>{passwordValidationMessage}</p>}
            <Button text={t('login.loginButton')} />
            {error && <p>{t('error.invalidCredentials')}</p>}
        </form>
    );
};

export default LoginForm;
