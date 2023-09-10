import React from "react";
import './style/Header.css';

const Header = () => {

  return (
    <header id="home" className="header-home">
      <h1>Développons votre <span>Projet</span> ensemble !</h1>
      <h2>Valentin BOURY</h2>
      <hr />
      <p>Développeur Back-End</p>
      <div className="home-btns">
        <a href="/descriptionaboutme" className="home-btn home-btn1" target="_blank">A Propos de Moi</a>
        <a href="/contactme" className="home-btn home-btn2" target="_blank">Me Contacter</a>
        {/* <a href="/travel" className="home-btn home-btn3" target="_blank">Mon Parcours</a>
        <a href="/about" className="home-btn home-btn4" target="_blank">Portfolio</a> */}
      </div>
    </header>
  );
};

export default Header;
