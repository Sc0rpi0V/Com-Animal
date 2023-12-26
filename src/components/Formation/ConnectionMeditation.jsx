import React from "react";
import { useTranslation } from "react-i18next";
import './style/ConnectionMeditation.css';

const ConnectionMeditation = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="secondformation">
                <h1>{t('titleSecondFormation')}</h1>
                <hr />
                <div className="module-subsection">
                    <h2>{t('subtitleSecondFormation')}</h2>
                    <div className="module-content">
                        <h3>{t('subtitleFirstPartSecondFormation')}</h3>
                        <p>{t('firstpSecondFormation')}</p>
                        <p>{t('secondpSecondFormation')}</p>
                        <p>{t('thirdpSecondFormation')}</p>
                        <h3>{t('secondsubtitleFirstPartSecondFormation')}</h3>
                        <p>{t('fourthpSecondFormation')}</p>
                        <p>{t('fifthpSecondFormation')}</p>
                        <p>{t('sixthpSecondFormation')}</p>
                        <p>{t('seventhpSecondFormation')}</p>
                        <p>{t('eighthpSecondformation')}</p>
                        <h3>{t('subtitleSecondFormation2')}</h3>
                        <p>{t('ninthpSecondFormation')}</p>
                        <p>{t('tenthpSecondFormation')}</p>
                        <p>{t('eleventhpSecondFormation')}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ConnectionMeditation;
