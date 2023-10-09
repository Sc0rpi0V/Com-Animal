import React from 'react';
import "./style/Footer.css";
import { useTranslation } from "react-i18next";


const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer">
       <p className='text-footer'> Copyright &copy; Sc0rpi0V - 2022. {t('madeby')} <i className="fa-solid fa-heart"> Boury Valentin </i></p>
      </div>
    </footer>
  );
};

export default Footer;