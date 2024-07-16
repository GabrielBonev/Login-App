import React, { useState } from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import SuccessScreen from '../components/SuccessScreen';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './ForgotPasswordPage.scss';

const ForgotPasswordPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="container">
            <LanguageSwitcher />
            {submitted ? (
                <SuccessScreen message={t('forgotPassword.successMessage')} />
            ) : (
                <>
                    <h2>{t('forgotPassword.forgot')}</h2>
                    <ForgotPasswordForm onSuccess={() => setSubmitted(true)} />
                </>
            )}
        </div>
    );
};

export default ForgotPasswordPage;
