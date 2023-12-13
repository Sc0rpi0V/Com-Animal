import React from "react";
import '../style/SpiritConnexion.css';
import { useTranslation } from "react-i18next";

const SpiritConnexion = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="spirit">
                <h1>{t('titleSpirit')}</h1>
                <hr />
                <div className="container-spiritconnexion">
                    <h2>{t('subtitleSpirit')}</h2>
                    <p>{t('firstpSpirit')}</p>
                    <p>{t('secondpSpirit')}</p>
                    <p>{t('thirdpSpirit')}</p>
                    <p>{t('fourthpSpirit')}</p>
                    <p>{t('fifthpSpirit')}</p>
                </div>
            </section>
        </>
    );
}

export default SpiritConnexion;