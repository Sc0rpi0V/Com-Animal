import React from "react";
import "./style/Engie.css";
import { useTranslation } from "react-i18next";

const ENGIE = () => {

    const { t } = useTranslation();

    return (
        <section className="engie">
            <h1>{t('engieTitle')}</h1>
            <hr />
            <p>{t('firstPartEngie')}</p>
            <p>{t('secondPartEngie')}</p>
            <p>{t('thirdPartEngie')}</p>
            <p>{t('fourthPartEngie')}</p>
            <p>{t('fifthPartEngie')}</p>
        </section>
    );
}

export default ENGIE;