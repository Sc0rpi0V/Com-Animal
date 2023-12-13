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
                    <p>{t('firstpRelaxation')}</p>
                    <p>{t('secondpRelaxation')}</p>
                </div>
            </section>
        </>
    );
}

export default Relaxation;