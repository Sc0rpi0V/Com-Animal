import React from "react";
import './style/Work.css';
import { useTranslation } from "react-i18next";

const Work = () => {

    const { t } = useTranslation();

    return (
        <section className="work">
            <h4>{t('myWork')}</h4>
            <div className="work-card">
                <h5>{t('titleFirstWork')}</h5>
                <h5>{t('subtitleFirstPartFirstWork')}</h5>
                <p>{t('firstPartFirstWork')}</p>
                <h5>{t('subtitleSecondPartFirstWork')}</h5>
                <p>{t('secondPartFirstWork')}</p>
                <h5>{t('subtitleThirdPartFirstWork')}</h5>
                <p>{t('thirdPartFirstWork')}</p>
                <h5>{t('subtitleFourthPartFirstWork')}</h5>
                <p>{t('fourthPartFirstWork')}</p>
            </div>
            <div className="work-card">
                <h5>{t('titleSecondWork')}</h5>
                <h5>{t('subtitleFirstPartSecondWork')}</h5>
                <p>{t('firstPartSecondWork')}</p>
                <h5>{t('subtitleSecondPartSecondWork')}</h5>
                <p>{t('secondPartSecondWork')}</p>
                <h5>{t('subtitleThirdPartSecondWork')}</h5>
                <p>{t('thirdPartSecondWork')}</p>
            </div>
            <div className="work-card">
                <h5>{t('titleThirdWork')}</h5>
                <h5>{t('subtitleFirstPartThirdWork')}</h5>
                <p>{t('firstPartThirdWork')}</p>
                <h5>{t('subtitleSecondPartThirdWork')}</h5>
                <p>{t('secondPartThirdWork')}</p>
                <h5>{t('subtitleThirdPartThirdWork')}</h5>
                <p>{t('thirdPartThirdWork')}</p>
                <h5>{t('subtitleFourthPartThirdWork')}</h5>
                <p>{t('fourthPartThirdWork')}</p>
            </div>
            <div className="work-card">
                <h5>{t('titleFourthWork')}</h5>
                <h5>{t('subtitleFirstPartFourthWork')}</h5>
                <p>{t('firstPartFourthWork')}</p>
                <h5>{t('subtitleSecondPartFourthWork')}</h5>
                <p>{t('secondPartFourthWork')}</p>
                <h5>{t('subtitleThirdPartFourthWork')}</h5>
                <p>{t('thirdPartFourthWork')}</p>
                <h5>{t('subtitleFourthPartFourthWork')}</h5>
                <p>{t('fourthPartFourthWork')}</p>
            </div>
        </section>
    );
}

export default Work;