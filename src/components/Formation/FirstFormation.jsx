import React from "react";
import './style/FirstFormation.css';
import { useTranslation } from "react-i18next";

const FirstFormation = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="firstformation">
                <h1>{t('titleFirstFormation')}</h1>
                <hr />
                <div className="module-subsection">
                    <h2>{t('subtitleFirstFormation')}</h2>
                    <div className="module-content">
                        <h3>{t('subtitleFirstPart')}</h3>
                        <p>{t('firstpFirstFormation')}</p>
                        <p>{t('secondpFirstFormation')}</p>
                        <p>{t('thirdpFirstFormation')}</p>
                        <h3>{t('secondsubtitleFirstPart')}</h3>
                        <p>{t('fourthpFirstFormation')}</p>
                        <p>{t('fifthpFirstFormation')}</p>
                        <p>{t('sixthpFirstFormation')}</p>
                    </div>
                </div>
                <div className="module-subsection">
                    <h2>{t('subtitleFirstFormation2')}</h2>
                    <div className="module-content">
                        <h3>{t('subtitleSecondPart')}</h3>
                        <p>{t('seventhpFirstFormation')}</p>
                        <p>{t('eighthpFirstformation')}</p>
                        <p>{t('ninthpFirstFormation')}</p>
                        <h3>{t('subtitleThirdPart')}</h3>
                        <p>{t('tenthpFirstFormation')}</p>
                        <p>{t('eleventhpFirstFormation')}</p>
                        <p>{t('twelfthpFirstFormation')}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FirstFormation;
