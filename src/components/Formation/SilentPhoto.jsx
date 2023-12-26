import React from 'react';
import { useTranslation } from "react-i18next";
import './style/SilentPhoto.css';

const PhotoSilencieuseModule = () => {

    const { t } = useTranslation();
    
    return (
        <>
            <section className="thirdformation">
                <h1>{t('titleThirdFormation')}</h1>
                <hr />
                <div className="module-subsection">
                    <h2>{t('subtitleThirdFormation')}</h2>
                    <div className="module-content">
                        <h3>{t('subtitleFirstPartThirdFormation')}</h3>
                        <p>{t('firstpThirdFormation')}</p>
                        <p>{t('secondpThirdFormation')}</p>
                        <h3>{t('secondsubtitleFirstPartThirdFormation')}</h3>
                        <p>{t('thirdpThirdFormation')}</p>
                        <p>{t('fourthpThirdFormation')}</p>
                        <h3>{t('subtitleThirdFormation2')}</h3>
                        <p>{t('fifthpThirdFormation')}</p>
                        <p>{t('sixthpThirdFormation')}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PhotoSilencieuseModule;
