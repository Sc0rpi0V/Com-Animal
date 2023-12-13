import React from "react";
import '../style/SensoryExchanges.css';
import { useTranslation } from "react-i18next";

const SensoryExchanges = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="sensory">
                <h1>{t('titleSensory')}</h1>
                <hr />
                <div className="container-sensory">
                    <h2>{t('subtitleSensory')}</h2>
                    <p>{t('firstpSensory')}</p>
                    <p>{t('secondpSensory')}</p>
                    <p>{t('thirdpSensory')}</p>
                </div>
            </section>
        </>
    );
}

export default SensoryExchanges;