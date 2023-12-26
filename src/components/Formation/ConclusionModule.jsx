import React from 'react';
import './style/ConclusionModule.css';
import { useTranslation } from "react-i18next";

const ConclusionModule = () => {

  const { t } = useTranslation();

  return (
    <>
      <section className="tenthformation">
        <h1>{t('titleTenthFormation')}</h1>
        <hr />
        <div className="module-subsection">
          <h2>{t('subtitleTenthFormation')}</h2>
          <div className="module-content">
            <h3>{t('subtitleFirstPartTenthFormation')}</h3>
            <p>{t('firstpTenthFormation')}</p>
            <p>{t('secondpTenthFormation')}</p>
            <p>{t('thirdpTenthFormation')}</p>
            <h3>{t('secondsubtitleFirstPartTenthFormation')}</h3>
            <p>{t('fourthpTenthFormation')}</p>
            <p>{t('fifthpTenthFormation')}</p>
            <p>{t('sixthpTenthFormation')}</p>
            <h3>{t('thirdsubtitleFirstPartTenthFormation')}</h3>
            <p>{t('seventhpTenthFormation')}</p>
            <p>{t('eighthpTenthFormation')}</p>
            <p>{t('ninthpTenthFormation')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConclusionModule;
