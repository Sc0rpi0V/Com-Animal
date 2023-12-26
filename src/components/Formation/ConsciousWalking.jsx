import React from 'react';
import { useTranslation } from "react-i18next";
import './style/ConsciousWalking.css';

const ConsciousWalking = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="sixthformation">
                <h1>{t('titleSixthFormation')}</h1>
                <hr />
                <div className="module-subsection">
                    <h2>{t('subtitleSixthFormation')}</h2>
                    <div className="module-content">
                        <h3>{t('subtitleFirstPartSixthFormation')}</h3>
                        <p>{t('firstpSixthFormation')}</p>
                        <p>{t('secondpSixthFormation')}</p>
                        <p>{t('thirdpSixthFormation')}</p>
                        <h3>{t('secondsubtitleFirstPartSixthFormation')}</h3>
                        <p>{t('fourthpSixthFormation')}</p>
                        <p>{t('fifthpSixthFormation')}</p>
                        <p>{t('sixthpSixthFormation')}</p>
                        <h3>{t('thirdsubtitleFirstPartSixthFormation')}</h3>
                        <p>{t('seventhpSixthFormation')}</p>
                        <p>{t('eighthpSixthFormation')}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConsciousWalking;