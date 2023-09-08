import React, { useState } from "react";
import "./style/About.css";
import ImgProfil from "../img/profil.jpg";
import DownloadButton from "../components/Download/Download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin, faFacebookF, faTwitter, faTiktok, faGithub,
  faSlack, faWordpress, faReact , faSquareGit, faDocker} from "@fortawesome/free-brands-svg-icons";
import Back1 from "../img/back-1.png";
import { useTranslation } from "react-i18next";
import axios from 'axios';

const About = () => {

    const { t, i18n } = useTranslation();

    const getWordOrder = () => {
        return i18n.language === "fr" ? <><span>{t('developer')} </span>{t('backend')}</> : <>{t('backend')} <span>{t('developer')}</span></>;
    };

    const getWordOrder2 = () => {
        return i18n.language === "fr" ? <>{t('developer')} {t('backend')}</> : <>{t('backend')} {t('developer')}</>;
    };

    const getWordOrder3 = () => {
        return i18n.language === "fr" ? <>{t('Techno')} {t('backend')}</> : <>{t('backend')} {t('techno')}</>;
    };

    const getWordOrder4 = () => {
        return i18n.language === "fr" ? <>{t('Gestion')} {t('backend')}</> : <>{t('backend')} {t('management')}</>;
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/send-email', formData);
            console.log(response.data); // Le message renvoyé par le serveur
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <div className="text-box">
                <h1>{t('hello')}</h1>
                <h2>{getWordOrder()}</h2>
                <p className="firstp">{t('firstp')}</p>
                <p className="framework">{t('technology')}</p>
                <ul className="technos-list">
                    <li>SQL</li>
                    <li>AS400</li>
                    <li>PHP</li>
                    <li>JAVA</li>
                    <li>JAVASCRIPT</li>
                    <li>HTML</li>
                    <li>C</li>
                    <li>C#</li>
                    <li>React JS</li>
                </ul>
            </div>
            <div className="about">
                <div className="row">
                    <div className="image-about">
                        <img src={ImgProfil} alt="Profile" className="profile-img" />
                    </div>
                    <div className="about-text">
                        <h1 className="sub-title">{t('aboutMe')}</h1>
                        <h2>{t('story')}</h2>
                        <p className="textabout">{t('passionateComputer')}</p>
                        <p className="textabout">{t('realisation')}</p>
                    </div>
                    <DownloadButton />
                </div>
            </div>
            <div className="services">
                <div className="container-services">
                    <h1 className="my-title">{t('myServices')}</h1>
                    <div className="services-list">
                        <div className="first">
                            <FontAwesomeIcon icon={faSlack} size="5x" />
                            <h2>{getWordOrder2()}</h2>
                            <p>{t('infoBack')}</p>
                        </div>
                        <div className="second">
                            <FontAwesomeIcon icon={faWordpress} size="5x" />
                            <FontAwesomeIcon icon={faReact} size="5x" />
                            <h2>{getWordOrder3()}</h2>
                            <p>{t('infoTechno')}</p>
                        </div>
                        <div className="third">
                            <FontAwesomeIcon icon={faDocker} size="5x" />
                            <FontAwesomeIcon icon={faSquareGit} size="5x" />
                            <h2>{getWordOrder4()}</h2>
                            <p>{t('infoGestion')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="container-portfolio">
                    <h1 className="sub-porto">{t('portfolio')}</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src={Back1} alt="Back" className="back-img" />
                            <div className="layer">
                                <h3>Portfolio 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nibh at arcu scelerisque venenatis. Proin euismod 
                                    facilisis dolor, id ullamcorper dui aliquam at. Proin nisi tortor, hendrerit vitae eros vitae, condimentum finibus ex. Aenean ex 
                                    eros, iaculis in sapien id, commodo congue nibh. Fusce pharetra facilisis felis, sit amet cursus nisi euismod sed. Mauris vitae 
                                    congue mauris, tincidunt elementum eros. 
                                </p>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">
                                    <i className="fa-solid fa-crop-simple"></i>
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src={ImgProfil} alt="Profile" className="profile-img" />
                            <div className="layer">
                                <h3>Portfolio 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nibh at arcu scelerisque venenatis. Proin euismod 
                                    facilisis dolor, id ullamcorper dui aliquam at. Proin nisi tortor, hendrerit vitae eros vitae, condimentum finibus ex. Aenean ex 
                                    eros, iaculis in sapien id, commodo congue nibh. Fusce pharetra facilisis felis, sit amet cursus nisi euismod sed. Mauris vitae 
                                    congue mauris, tincidunt elementum eros. 
                                </p>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" rel="noreferrer">
                                    <i className="fa-brands fa-app-store"></i>
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src={ImgProfil} alt="Profile" className="profile-img" />
                            <div className="layer">
                                <h3>Portfolio 3</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nibh at arcu scelerisque venenatis. Proin euismod 
                                    facilisis dolor, id ullamcorper dui aliquam at. Proin nisi tortor, hendrerit vitae eros vitae, condimentum finibus ex. Aenean ex 
                                    eros, iaculis in sapien id, commodo congue nibh. Fusce pharetra facilisis felis, sit amet cursus nisi euismod sed. Mauris vitae 
                                    congue mauris, tincidunt elementum eros. 
                                </p>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">
                                    <i className="fa-regular fa-dumpster"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-contact">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title-contact">{t('contactMe')}</h1>
                        <p><i className="fa-solid fa-paper-plane"></i> valentinc.boury@gmail.com </p>
                        <p><i className="fa-sharp fa-solid fa-phone"></i> 0772266018 </p>
                        <div className="social-icons">
                            <ul className="wrapper">
                                <li className="icon facebook">
                                    <a href= "https://www.facebook.com/BboyVal/" target= "_blank" rel="noreferrer">
                                    <span className="tooltip">Facebook</span>
                                    <span>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </span>
                                    </a>
                                </li>
                                <li className="icon twitter">
                                    <a href= "https://twitter.com/BouryValentin" target= "_blank" rel="noreferrer">
                                    <span className="tooltip">Twitter</span>
                                    <span>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </span>
                                    </a>
                                </li>
                                <li className="icon linkedin">
                                    <a href= "https://www.linkedin.com/in/valentin-boury-b716a31b6/" target= "_blank" rel="noreferrer">
                                    <span className="tooltip">Linkedin</span>
                                    <span>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                    </a>
                                </li>
                                <li className="icon github">
                                    <a href= "https://github.com/Sc0rpi0V/React" target= "_blank" rel="noreferrer">
                                    <span className="tooltip">Github</span>
                                    <span>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                    </a>
                                </li>
                                <li className="icon tiktok">
                                    <a href= "https://www.tiktok.com/@sc0rpi0v?lang=fr" target= "_blank" rel="noreferrer">
                                    <span className="tooltip">Tiktok</span>
                                    <span>
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="6"
                                placeholder="Your Message"
                                required
                            />
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;