import React from "react";
import '../style/OpenHearth.css';
import { useTranslation } from "react-i18next";

const OpenHearth = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="openhearth">
                <h1>{t('titleOpenHearth')}</h1>
                <hr />
                <div className="container-openhearth">
                    <h2>{t('firstpOpenHearth')}</h2>
                    <p>{t('secondpOpenHearth')} 
                        <a href="https://www.youtube.com/watch?v=SNykLYJYles" target="_blank" rel="noopener noreferrer"> {t('musicOpenHearth')} </a>
                    </p>
                    <p>{t('thirdpOpenHearth')}</p>
                    <p>{t('fourthpOpenHearth')}</p>
                    <p>{t('fifthpOpenHearth')}</p>
                </div>
            </section>
        </>
    );
}

export default OpenHearth;