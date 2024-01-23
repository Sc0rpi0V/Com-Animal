import React from "react";
import './style/Header.css';
import { useTranslation } from "react-i18next";
import { useAuth } from "../../AuthContext";

const Header = () => {

  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <header id="home" className="header-home">
      <h1>{t('headerProject')}<span>{t('headerTogether')}</span></h1>
      <h2>Devröede Valentine</h2>
      <hr />
      <p>{t('headerAnimCom')}</p>
      <div className="home-btns">
        <a href="/descriptionaboutcom" className="home-btn home-btn1" rel="noopener noreferrer">{t('aboutCom')}</a>
        <a href="/contactme" className="home-btn home-btn2" rel="noopener noreferrer">{t('contactMe')}</a>
        {user ? (<a href="/showecommerce" className="home-btn home-btn3" rel="noopener noreferrer">{t('training')}</a>) : null}
      </div>
    </header>
  );
};

export default Header;
