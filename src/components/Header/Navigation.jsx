import "./style/Navigation.css";
import logo from "../../img/logo.jpeg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from '../../i18n';

const Navigation = () => {
    const { t, i18n } = useTranslation();

    function handleLangChange(event) {
        console.log(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    return (
        <div className="navigation">
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <ul>
                    <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >{t('home')}</NavLink></li>
                    <li><NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} >{t('about')}</NavLink></li>
                    <li><NavLink to="/project" className={(nav) => (nav.isActive ? "nav-active" : "")} >{t('project')}</NavLink></li>
                    <li><NavLink to="/paiement" className={(nav) => (nav.isActive ? "nav-active" : "")}>{t('paiement')}</NavLink></li>
                    <li><NavLink to="/countries" className={(nav) => (nav.isActive ? "nav-active" : "")}>{t('countries')}</NavLink></li>
                    <li><NavLink to="/pokedex" className={(nav) => (nav.isActive ? "nav-active" : "")} >{t('pokedex')}</NavLink></li>
                    <li><NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")} >{t('contact')}</NavLink></li>
                    <li><NavLink to="/users" className={(nav) => (nav.isActive ? "nav-active" : "")} >{t('users')}</NavLink></li>
                    <li><NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>{t('connexion')}</NavLink></li>
                    <li><NavLink to="/registration" className={(nav) => (nav.isActive ? "nav-active" : "")}>{t('registration')}</NavLink></li>
                    <div>
                        <select onChange={handleLangChange} defaultValue="fr">
                            <option value="fr">FR</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <div className="cursor"></div>
                </ul>
            </nav>
        </div>
    );
}


export default Navigation;