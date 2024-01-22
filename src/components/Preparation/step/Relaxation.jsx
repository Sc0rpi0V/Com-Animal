import React from "react";
import '../style/Relaxation.css';
import { useTranslation } from "react-i18next";

const Relaxation = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="relaxation">
                <h1>{t('titleRelaxation')}</h1>
                <hr />
                <div className="container-relaxation">
                    <h2>{t('subtitleRelaxation')}</h2>
                    <p>{t('firstpRelaxation')}</p>
                    <p>{t('secondpRelaxation')}</p>
                    <p>{t('thirdpRelaxation')}</p>
                    <p>{t('fourthpRelaxation')}</p>
                </div>
            </section>
        </>
    );
}

export default Relaxation;