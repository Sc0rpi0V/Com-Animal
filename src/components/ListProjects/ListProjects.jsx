import React from "react";
import './style/ListProjects.css';
import CreditCard from './img/CreditCard.avif';
import Dashboard from './img/Dashboard.png';
import DispCountries from "./img/DispCountries.jpeg";
import DispPokdex from "./img/Pokedex.png";

const ListProjects = () => {

    return (
        <section id="portfolio" className="portfolio">
            <div className="card-portfolio">
                <a href="/visacreditcard"><img className="portfolio-image" src={CreditCard} alt="CreditCard"></img></a>
                <div className="card-portfolio-infos">
                    <h3>Credit Card</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/dashboard"><img className="portfolio-image" src={Dashboard} alt="Dashboard"></img></a>
                <div className="card-portfolio-infos">
                    <h3>Dashboard</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/countries"><img className="portfolio-image" src={DispCountries} alt="Countries"></img></a>
                <div className="card-portfolio-infos">
                    <h3>Countries</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/pokedex"><img className="portfolio-image" src={DispPokdex} alt="Pokedex"></img></a>
                <div className="card-portfolio-infos">
                    <h3>Pokedex</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/carousel"><img className="portfolio-image" src={CreditCard} alt="CreditCard"></img></a>
                <div className="card-portfolio-infos">
                    <h3>ENGIE</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/todolist"><img className="portfolio-image" src={CreditCard} alt="CreditCard"></img></a>
                <div className="card-portfolio-infos">
                    <h3>Mini-Wordpress</h3>
                </div>
            </div>
        </section>
    );

}

export default ListProjects;