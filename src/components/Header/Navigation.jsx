import React, { useState, useEffect } from "react";
import "./style/Navigation.css";
import logo from "../../img/logo.jpeg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin, faFacebookF, faTwitter, faTiktok, faGithub} from "@fortawesome/free-brands-svg-icons";
// eslint-disable-next-line
import i18next from '../../i18n';

const Navigation = () => {
    const { t, i18n } = useTranslation();

    function handleLangChange(event) {
        console.log(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    const [burgerActive, setBurgerActive] = useState(false);
    const [navActive, setNavActive] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(!burgerActive);
        setNavActive(!navActive);
    };

    const handleNavLinkClick = () => {
        setNavActive(false);
        setBurgerActive(false);
    };

    useEffect(() => {
        const nav = document.querySelector('nav');

        const changeFond = () => {
            if (window.scrollY >= 300) {
                nav.classList.add('font-scroll');
            } else {
                nav.classList.remove('font-scroll');
            }
        };

        window.addEventListener('scroll', changeFond);

        return () => {
        window.removeEventListener('scroll', changeFond);
        };
    }, []);


    return (
        <nav className={navActive ? "active" : ""}>
            <NavLink to="/">
                <img src={logo} alt="Logo" />
            </NavLink>
            <div className="social-nav">
                <ul>
                    <li><a href="https://www.facebook.com/BboyVal/" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="https://github.com/Sc0rpi0V/React" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.tiktok.com/@sc0rpi0v" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}><FontAwesomeIcon icon={faTiktok} /></a></li>
                    <li><a href="https://twitter.com/BouryValentin" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/valentin-boury-b716a31b6/" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
            <div className="principal-nav">
                <ul>
                    <li><a href="/" className="link-navigation" >{t('home')}</a></li>
                    <li><a href="/descriptionaboutme" className="link-navigation" >{t('about')}</a></li>
                    <li><a href="/travel" className="link-navigation" >{t('travel')}</a></li>
                    <li><a href="/viewproject" className="link-navigation" >{t('project')}</a></li>
                    <li><a href="/about" className="link-navigation" >Ancienne page</a></li>
                </ul>
            </div>
            <div className="nav-lang">
                <select className="lang" onChange={handleLangChange} defaultValue="fr">
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
            <div className="cursor"></div>
            <div className="burger" onClick={handleBurgerClick}>
                <div className="burger-ligne"></div>
                <div className="burger-ligne"></div>
            </div>
        </nav>
    );
}


export default Navigation;