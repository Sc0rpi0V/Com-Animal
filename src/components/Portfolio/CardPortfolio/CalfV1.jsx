import React from "react";
import "./style/CalfV1.css";
import { useTranslation } from "react-i18next";

const CALFV1 = () => {

    const { t } = useTranslation();

    return (
        <section className="calfv1">
            <h1>{t('calfVersionV1')}</h1>
            <hr />
            <p>{t('firstPartV1')}</p>
            <p>{t('secondPartV1')}</p>
            <p>{t('thirdPartV1')}</p>
            <p>{t('fourthPartV1')}</p>
        </section>
    );
}

export default CALFV1;