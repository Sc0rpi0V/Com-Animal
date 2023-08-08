import React, { useState, useEffect } from 'react';
import './style/CookiesPop.css';
import { useTranslation } from "react-i18next";

const CookieConsentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem('cookiesAccepted') === 'true'
  );

  useEffect(() => {
    if (!cookiesAccepted) {
      setShowPopup(true);
    }
  }, [cookiesAccepted]);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
    setShowPopup(false);
  };

  const { t } = useTranslation();

  return (
    <div className={`cookie-popup ${showPopup ? 'active' : ''}`}>
      <div className="cookie-popup-content">
        <p>{t('cookies')}</p>
        <button onClick={acceptCookies}>{t('agreeCookies')}</button>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
