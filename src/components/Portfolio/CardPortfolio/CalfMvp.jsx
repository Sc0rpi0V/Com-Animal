import React from "react";
import "./style/CalfMvp.css";
import { useTranslation } from "react-i18next";

const CALFMVP = () => {

    const { t } = useTranslation();

    return (
        <section className="calfmvp">
            <h1>{t('calfVersionMVP')}</h1>
            <hr />
            <p>{t('firstPartMVP')}</p>
            <p>{t('secondMvp')}</p>
            <p>{t('thirdMVP')}</p>
            <p>{t('fourthMVP')}</p>
            <p>{t('fifthMVP')}</p>
        </section>
    );
}

export default CALFMVP;