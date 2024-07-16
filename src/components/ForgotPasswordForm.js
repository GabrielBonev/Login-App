import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputField from './InputField';
import Button from './Button';
import validator from 'validator';

const ForgotPasswordForm = ({ onSuccess }) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validator.isEmail(email)) {
            setError(t('error.invalidEmail'));
        } else {
            setError('');
            onSuccess();
            
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label={t('login.email')}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <Button text={t('forgotPassword.submitButton')} />
        </form>
    );
};

export default ForgotPasswordForm;
