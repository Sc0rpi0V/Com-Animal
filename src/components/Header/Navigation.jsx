import "./style/Navigation.css";
import logo from "../../img/logo.jpeg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <img src={logo} alt="Logo" />
                <ul>
                    <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >Home</NavLink></li>
                    <li><NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} >About</NavLink></li>
                    <li><NavLink to="/project" className={(nav) => (nav.isActive ? "nav-active" : "")} >Project</NavLink></li>
                    <li><NavLink to="/paiement" className={(nav) => (nav.isActive ? "nav-active" : "")}>Paiement</NavLink></li>
                    <li><NavLink to="/countries" className={(nav) => (nav.isActive ? "nav-active" : "")}>Countries</NavLink></li>
                    <li><NavLink to="/pokedex" className={(nav) => (nav.isActive ? "nav-active" : "")} >Pokedex</NavLink></li>
                    <li><NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")} >Contact Us</NavLink></li>
                    <li><NavLink to="/users" className={(nav) => (nav.isActive ? "nav-active" : "")} >Users Contact</NavLink></li>
                    <li><NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>Connexion</NavLink></li>
                    <li><NavLink to="/registration" className={(nav) => (nav.isActive ? "nav-active" : "")}>Registration</NavLink></li>
                    <div className="cursor"></div>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;