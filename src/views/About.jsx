import React from "react";
import "./style/About.css";
import ImgProfil from "../img/profil.jpg";
import DownloadButton from "../components/Download/Download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin, faFacebookF, faTwitter, faTiktok, faGithub,
  faSlack, faWordpress, faReact , faSquareGit, faDocker} from "@fortawesome/free-brands-svg-icons";
import Back1 from "../img/back-1.png";
import { useTranslation } from "react-i18next";

const About = () => {

    const { t } = useTranslation();

    return (
        <div>
            <div className="text-box">
                <h1>Hello I'm a</h1>
                <h2>Back-End<span> Developer</span></h2>
                <p className="firstp">
                    Bonjour à tous et bienvenue sur mon premier site en React.
                </p>
                <p className="framework"> Technologies</p>
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
                        <h1 className="sub-title">About Me</h1>
                        <h2> A Story of HardWork and Perseverance</h2>
                        <p className="textabout">
                            Passionné d'informatique depuis plus de 10 ans maintenant, je me suis lancé dans le monde de la programmation web en solo.
                            Ayant une formation dans le mileu du réseaux informatique (RIMS = Réseaux Informatiques Mobilité et Sécurité).
                        </p>
                        <p className="textabout">
                            Je réalise quelque sites ou quelques codes afin de pouvoir garder la main sur certains Langages de programmation 
                            (Java, Javascript, PHP, C/C#), afin de ne pas être en retard sur les dernières technologies et dernières mises à jour. 
                            Ayant un esprit rapide et une facilité de compréhension, cela me permet de pouvoir interpréter et 
                            mettre en place assez facilement et rapidement ce que l'on me demande.
                        </p>
                    </div>
                    <DownloadButton />
                </div>
            </div>
            <div className="services">
                <div className="container-services">
                    <h1 className="my-title"> My Services</h1>
                    <div className="services-list">
                        <div className="first">
                            <FontAwesomeIcon icon={faSlack} size="5x" />
                            <h2> Back-End Developer </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nibh at arcu scelerisque venenatis. Proin euismod 
                                facilisis dolor, id ullamcorper dui aliquam at. Proin nisi tortor, hendrerit vitae eros vitae, condimentum finibus ex. Aenean ex 
                                eros, iaculis in sapien id, commodo congue nibh. Fusce pharetra facilisis felis, sit amet cursus nisi euismod sed. Mauris vitae 
                                congue mauris, tincidunt elementum eros. 
                            </p>
                        </div>
                        <div className="second">
                            <FontAwesomeIcon icon={faWordpress} size="5x" />
                            <FontAwesomeIcon icon={faReact} size="5x" />
                            <h2> Back-End Techno </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nibh at arcu scelerisque venenatis. Proin euismod 
                                facilisis dolor, id ullamcorper dui aliquam at. Proin nisi tortor, hendrerit vitae eros vitae, condimentum finibus ex. Aenean ex 
                                eros, iaculis in sapien id, commodo congue nibh. Fusce pharetra facilisis felis, sit amet cursus nisi euismod sed. Mauris vitae 
                                congue mauris, tincidunt elementum eros. 
                            </p>
                        </div>
                        <div className="third">
                            <FontAwesomeIcon icon={faDocker} size="5x" />
                            <FontAwesomeIcon icon={faSquareGit} size="5x" />
                            <h2> Back-End Gestion </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nibh at arcu scelerisque venenatis. Proin euismod 
                                facilisis dolor, id ullamcorper dui aliquam at. Proin nisi tortor, hendrerit vitae eros vitae, condimentum finibus ex. Aenean ex 
                                eros, iaculis in sapien id, commodo congue nibh. Fusce pharetra facilisis felis, sit amet cursus nisi euismod sed. Mauris vitae 
                                congue mauris, tincidunt elementum eros. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="container-portfolio">
                    <h1 className="sub-porto"> My Portfolio</h1>
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
                        <h1 className="sub-title-contact"> Contact Me </h1>
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
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;