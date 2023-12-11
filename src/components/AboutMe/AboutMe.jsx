import React from "react";
import "./style/AboutMe.css";
import ImgProfil from "./src/profil.jpg";
import { useTranslation } from "react-i18next";
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
            </section>
        </>
    );
};

export default AboutMe;