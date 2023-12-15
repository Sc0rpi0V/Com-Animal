import React from 'react';
import { useTranslation } from "react-i18next";
import './style/FourthFormation.css';

const ConversationEcriteModule = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="fourthformation">
                <h1>{t('titleFourthFormation')}</h1>
                <hr />
                <div className="module-subsection">
                    <h2>{t('subtitleFourthFormation')}</h2>
                    <div className="module-content">
                        <h3>{t('subtitleFirstPartFourthFormation')}</h3>
                        <p>{t('firstpFourthFormation')}</p>
                        <p>{t('secondpFourthFormation')}</p>
                        <h3>{t('secondsubtitleFirstPartFourthFormation')}</h3>
                        <p>{t('thirdpFourthFormation')}</p>
                        <p>{t('fourthpFourthFormation')}</p>
                        <h3>{t('thirdsubtitleFirstPartFourthFormation')}</h3>
                        <p>{t('fifthpFourthFormation')}</p>
                        <p>{t('sixthpFourthFormation')}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConversationEcriteModule;
