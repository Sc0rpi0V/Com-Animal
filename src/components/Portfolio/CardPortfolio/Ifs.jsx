import React from "react";
import "./style/Ifs.css";
import { useTranslation } from "react-i18next";

const IFS = () => {

    const { t } = useTranslation();

    return (
        <section className="tmaifs">
            <h1>{t('tmaIfsSingapore')}</h1>
            <hr />
            <p>{t('firstPartIfs')}</p>
            <p>{t('secondPartIfs')}</p>
            <p>{t('thirdPartIfs')}</p>
            <p>{t('fourthPartIfs')}</p>
            <p>{t('fifthPartIfs')}</p>
        </section>
    );
}

export default IFS;