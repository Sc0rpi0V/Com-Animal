import React from 'react';
import { useTranslation } from "react-i18next";
import './style/EhticsRespect.css';

const EhticsRespect = () => {

  const { t } = useTranslation();

  return (
    <>
      <section className="eigthformation">
        <h1>{t('titleEighthFormation')}</h1>
        <hr />
        <div className="module-subsection">
          <h2>{t('subtitleEighthFormation')}</h2>
          <div className="module-content">
            <h3>{t('subtitleFirstPartEighthFormation')}</h3>
            <p>{t('firstpEighthFormation')}</p>
            <p>{t('secondpEighthFormation')}</p>
            <p>{t('thirdpEighthFormation')}</p>
            <h3>{t('secondsubtitleFirstPartEighthFormation')}</h3>
            <p>{t('fourthpEighthFormation')}</p>
            <p>{t('fifthpEighthFormation')}</p>
            <p>{t('sixthpEighthFormation')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EhticsRespect;
