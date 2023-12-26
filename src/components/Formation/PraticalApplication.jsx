import React from 'react';
import { useTranslation } from "react-i18next";
import './style/PraticalApplication.css';

const PraticalApplication = () => {

  const { t } = useTranslation();
    
  return (
    <>
      <section className="seventhformation">
        <h1>{t('titleSeventhFormation')}</h1>
        <hr />
        <div className="module-subsection">
          <h2>{t('subtitleSeventhFormation')}</h2>
          <div className="module-content">
            <h3>{t('subtitleFirstPartSeventhFormation')}</h3>
            <p>{t('firstpSeventhFormation')}</p>
            <p>{t('secondpSeventhFormation')}</p>
            <p>{t('thirdpSeventhFormation')}</p>
            <h3>{t('secondsubtitleFirstPartSeventhFormation')}</h3>
            <p>{t('fourthpSeventhFormation')}</p>
            <p>{t('fifthpSeventhFormation')}</p>
            <p>{t('sixthpSeventhFormation')}</p>
            <h3>{t('thirdsubtitleFirstPartSeventhFormation')}</h3>
            <p>{t('seventhpSeventhFormation')}</p>
            <p>{t('eighthpSeventhFormation')}</p>
            <p>{t('ninthpSeventhFormation')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PraticalApplication;
