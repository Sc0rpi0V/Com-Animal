import React from "react";
import './style/Header.css';
import { useTranslation } from "react-i18next";

const Header = () => {

  const { t } = useTranslation();

  return (
    <header id="home" className="header-home">
      <h1>{t('headerDev')}<span>{t('headerProject')}</span></h1>
      <h2>Valentin BOURY</h2>
      <hr />
      <p>{t('headerDevBack')}</p>
      <div className="home-btns">
        <a href="/descriptionaboutme" className="home-btn home-btn1" rel="noopener noreferrer">{t('aboutMe')}</a>
        <a href="/contactme" className="home-btn home-btn2" rel="noopener noreferrer">{t('contactMe')}</a>
        <a href="/showecommerce" className="home-btn home-btn1" rel="noopener noreferrer">{t('training')}</a>
      </div>
    </header>
  );
};

export default Header;
