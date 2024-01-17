import React from 'react';
import "./style/Footer.css";
import { useTranslation } from "react-i18next";


const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer">
       <p className='text-footer'> Copyright &copy; {t('madeby')} Boury Valentin - 2022. </p>
      </div>
    </footer>
  );
};

export default Footer;