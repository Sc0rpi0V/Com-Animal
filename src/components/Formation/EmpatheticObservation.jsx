import React from 'react';
import { useTranslation } from "react-i18next";
import './style/EmpatheticObservation.css';

const EmpatheticObservation = () => {

    const { t } = useTranslation();
    
    return (
        <>
            <section className="fifthformation">
                <h1>{t('titleFifthFormation')}</h1>
                <hr />
                <div className="module-subsection">
                    <h2>{t('subtitleFifthFormation')}</h2>
                    <div className="module-content">
                        <h3>{t('subtitleFirstPartFifthFormation')}</h3>
                        <p>{t('firstpFifthFormation')}</p>
                        <p>{t('secondpFifthFormation')}</p>
                        <p>{t('thirdpFifthFormation')}</p>
                        <h3>{t('secondsubtitleFirstPartFifthFormation')}</h3>
                        <p>{t('fourthpFifthFormation')}</p>
                        <p>{t('fifthpFifthFormation')}</p>
                        <p>{t('sixthpFifthFormation')}</p>
                        <h3>{t('thirdsubtitleFirstPartFifthFormation')}</h3>
                        <p>{t('seventhpFifthFormation')}</p>
                        <p>{t('eighthpFifthFormation')}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EmpatheticObservation;
