import React from "react";
import "./style/AboutMe.css";
import ImgProfil from "./src/profil.jpeg";
import { useTranslation } from "react-i18next";

const AboutMe = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="aboutme">
                <h1>{t('aboutMe')}</h1>
                <hr />
                <div className="row">
                    <div className="image-about">
                        <img src={ImgProfil} alt="Profile" className="profile-img" />
                    </div>
                    <div className="info-about">
                        <h2>{t('story')}</h2>
                        <p>{t('passionateCom')}</p>
                        <p>{t('passionateCom2')}</p>
                        <p>{t('passionateCom3')}</p>
                        <p>{t('passionateCom4')}</p>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="container-services">
                    <h1 className="my-title">{t('myServices')}</h1>
                    <div className="services-list">
                        <div className="first">
                            <h2>{t('titleFirstService')}</h2>
                            <p>{t('firstService')}</p>
                        </div>
                        <div className="second">
                            <h2>{t('titleSecondService')}</h2>
                            <p>{t('secondService')}</p>
                        </div>
                        <div className="third">
                            <h2>{t('titleThirdService')}</h2>
                            <p>{t('thirdService')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;