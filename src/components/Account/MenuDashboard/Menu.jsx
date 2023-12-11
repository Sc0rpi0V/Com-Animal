// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Menu.css';
import { useTranslation } from "react-i18next";

const Menu = () => {

  const { t } = useTranslation();

  return (
    <div className='menu'>
      <Link to='/account'>{t('dashboard')}</Link>
      <Link to='/profile'>{t('myProfil')}</Link>
      <Link to='/changepassword'>{t('changePassword')}</Link>
      <Link to='/changeaddress'>{t('changeAddress')}</Link>
      <Link to='/formations'>{t('myFormations')}</Link>
    </div>
  );
};

export default Menu;
