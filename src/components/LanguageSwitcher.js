import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';
import usFlag from '../assets/gb.svg';
import bgFlag from '../assets/bg.svg';
import { useDispatch, useSelector } from 'react-redux';
import {changeLanguage, selectLanguage} from '../languageSlice';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const storeLanguage = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectedLanguage = storeLanguage;
  const changeSelectedLanguage = useCallback((lng) => {
    if(selectedLanguage !== lng) {
      i18n.changeLanguage(lng);
      dispatch(changeLanguage(lng));
    }
    setDropdownOpen(false);
    
  }, [dispatch, i18n, selectedLanguage]);

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} className="language-button">
        🌐
      </button>
      {dropdownOpen && (
        <div className="language-dropdown">
          <button onClick={() => changeSelectedLanguage('en')}>
            <img src={usFlag} alt="English" className="flag-icon" /> English
          </button>
          <button onClick={() => changeSelectedLanguage('bg')}>
            <img src={bgFlag} alt="Български" className="flag-icon" /> Български
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

