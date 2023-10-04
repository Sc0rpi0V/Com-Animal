import React from "react";
import './style/ListProjects.css';
import CreditCard from './img/CreditCard.avif';
import Dashboard from './img/Dashboard.png';
import DispCountries from "./img/DispCountries.jpeg";
import DispPokdex from "./img/Pokedex.png";
import ToDoList from "./img/ToDoList.png";
import Recette from "./img/Recette.webp";
import Carousel from "./img/Carousel.png";
import { useTranslation } from "react-i18next";

const ListProjects = () => {

    const { t } = useTranslation();

    return (
        <section id="portfolio" className="portfolio">
            <div className="card-portfolio">
                <a href="/visacreditcard"><img className="portfolio-image" src={CreditCard} alt="CreditCard"></img></a>
                <div className="card-portfolio-infos">
                    <h3>{t('creditCard')}</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/dashboard"><img className="portfolio-image" src={Dashboard} alt="Dashboard"></img></a>
                <div className="card-portfolio-infos">
                    <h3>{t('dashboard')}</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/countries"><img className="portfolio-image" src={DispCountries} alt="Countries"></img></a>
                <div className="card-portfolio-infos">
                    <h3>{t('countries')}</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/pokedex"><img className="portfolio-image" src={DispPokdex} alt="Pokedex"></img></a>
                <div className="card-portfolio-infos">
                    <h3>{t('pokedex')}</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/carousel"><img className="portfolio-image" src={Carousel} alt="Carousel"></img></a>
                <div className="card-portfolio-infos">
                    <h3>{t('carousel')}</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/todolist"><img className="portfolio-image" src={ToDoList} alt="ToDoList"></img></a>
                <div className="card-portfolio-infos">
                    <h3>{t('todolist')}</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/displaycardrecette"><img className="portfolio-image" src={Recette} alt="Recette"></img></a>
                <div className="card-portfolio-infos">
                    <h3>{t('cookingRecipe')}</h3>
                </div>
            </div>
        </section>
    );

}

export default ListProjects;