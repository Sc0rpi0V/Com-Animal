import React from "react";
import './style/Preparation.css';
import { useTranslation } from "react-i18next";

const Preparation = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="preparation">
                <h1>{t('titlePreparation')}</h1>
                <hr />
                <div className="info-explication">
                    <h2>{t('subtitlePreparation')}</h2>
                    <p>{t('firstpPreparation')}</p>
                    <p>{t('secondpPreparation')}</p>
                </div>

                <div className="button-list">
                    <a href="/anchoring" className="home-btn home-btn1">{t('btn1Preparation')}</a>
                    <a href="/openhearth" className="home-btn home-btn2">{t('btn2Preparation')}</a>
                    <a href="/relaxation" className="home-btn home-btn3">{t('btn3Preparation')}</a>
                    <a href="/spiritconnexion" className="home-btn home-btn4">{t('btn4Preparation')}</a>
                    <a href="/sensoryexchange" className="home-btn home-btn5">{t('btn5Preparation')}</a>
                </div>
            </section>
        </>
    );
}

export default Preparation;