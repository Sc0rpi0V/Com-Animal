import React from "react";
import './style/Header.css';

const Header = () => {

  return (
    <header id="home" className="header-home">
      <h1>Développons votre <span>Projet</span> ensemble !</h1>
      <h2>Valentin BOURY</h2>
      <hr />
      <p>Développeur Full-Stack</p>
      <div className="home-btns">
        <a href="#portfolio" className="home-btn home-btn1">Portfolio</a>
        <a href="#contact" className="home-btn home-btn2">Me Contacter</a>
      </div>
    </header>
  );
};

export default Header;
