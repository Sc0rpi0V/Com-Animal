import React from "react";
import '../style/Anchoring.css';
import { useTranslation } from "react-i18next";

const Anchoring = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="anchoring">
                <h1>{t('titleAnchoring')}</h1>
                <hr />
                <div className="container-anchoring">
                    <h2>{t('subtitleAnchoring')}</h2>
                    <p>{t('firstpAnchoring')}</p>
                    <p>{t('secondpAnchoring')}</p>
                    <p>{t('thirdpAnchoring')}</p>
                    <ul className="anchoring-list">
                        <li>{t('firstListAnchoring')}</li>
                        <li>{t('secondListAnchoring')}</li>
                        <li>{t('thirdListAnchoring')}</li>
                    </ul>
                    <p>{t('fourthpAnchoring')}</p>
                </div>
            </section>
        </>
    );
}

export default Anchoring;