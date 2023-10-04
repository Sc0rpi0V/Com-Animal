import React from "react";
import "./style/AboutMe.css";
import ImgProfil from "./src/profil.jpg";
import { useTranslation } from "react-i18next";
import DownloadButton from "../Download/Download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack, faWordpress, faReact , faSquareGit, faDocker} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {

    const { t, i18n } = useTranslation();

    const getWordOrder = () => {
        return i18n.language === "fr" ? <>{t('developer')} {t('backend')}</> : <>{t('backend')} {t('developer')}</>;
    };

    const getWordOrder2 = () => {
        return i18n.language === "fr" ? <>{t('Techno')} {t('backend')}</> : <>{t('backend')} {t('techno')}</>;
    };

    const getWordOrder3 = () => {
        return i18n.language === "fr" ? <>{t('Gestion')} {t('backend')}</> : <>{t('backend')} {t('management')}</>;
    };

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
                        <p>{t('passionateComputer')}</p>
                        <p>{t('passionateComputer2')}</p>
                        <p>{t('realisation')}</p>
                    </div>
                </div>
                <h4 className="technology">
                    {t('technology')}
                </h4>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <div className="button-list">
                    <a href="#" className="home-btn home-btn1">SQL</a>
                    <a href="#" className="home-btn home-btn2">AS400</a>
                    <a href="#" className="home-btn home-btn3">PHP</a>
                    <a href="#" className="home-btn home-btn4">JAVA</a>
                    <a href="#" className="home-btn home-btn5">JAVASCRIPT</a>
                    <a href="#" className="home-btn home-btn6">HTML</a>
                    <a href="#" className="home-btn home-btn7">PYTHON</a>
                    <a href="#" className="home-btn home-btn8">CSS</a>
                    <a href="#" className="home-btn home-btn9">React JS</a>
                </div>
            </section>
            <section className="services">
                <div className="container-services">
                    <h1 className="my-title">{t('myServices')}</h1>
                    <div className="services-list">
                        <div className="first">
                            <FontAwesomeIcon icon={faSlack} size="5x" />
                            <h2>{getWordOrder()}</h2>
                            <p>{t('infoBack')}</p>
                        </div>
                        <div className="second">
                            <FontAwesomeIcon icon={faWordpress} size="5x" />
                            <FontAwesomeIcon icon={faReact} size="5x" />
                            <h2>{getWordOrder2()}</h2>
                            <p>{t('infoTechno')}</p>
                        </div>
                        <div className="third">
                            <FontAwesomeIcon icon={faDocker} size="5x" />
                            <FontAwesomeIcon icon={faSquareGit} size="5x" />
                            <h2>{getWordOrder3()}</h2>
                            <p>{t('infoGestion')}</p>
                        </div>
                    </div>
                </div>
                <DownloadButton />
            </section>
        </>
    );
};

export default AboutMe;