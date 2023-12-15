import React from 'react';
import './style/FormationNine.css';
import { useTranslation } from "react-i18next";

const RessourcesOutilsModule = () => {

  const { t } = useTranslation();

  return (
    <>
      <section className="nineformation">
        <h1>{t('titleNinthFormation')}</h1>
        <hr />
        <div className="module-subsection">
          <h2>{t('subtitleNinthFormation')}</h2>
          <div className="module-content">
            <h3>{t('subtitleFirstPartNinthFormation')}</h3>
            <p>{t('firstpNinthFormation')}</p>
            <p>{t('secondpNinthFormation')}</p>
            <p>{t('thirdpNinthFormation')}</p>
            <h3>{t('secondsubtitleFirstPartNinthFormation')}</h3>
            <p>{t('fourthpNinthFormation')}</p>
            <p>{t('fifthpNinthFormation')}</p>
            <p>{t('sixthpNinthFormation')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RessourcesOutilsModule;
