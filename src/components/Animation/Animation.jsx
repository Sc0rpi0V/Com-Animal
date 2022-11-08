import React from 'react';
import "./style/Animation.css";
import boat from "./img/boat.jpg";
import sunsea from "./img/sunsea.jpg";
import sunset from "./img/sunset.jpg";

const Animation = () => {
  return (
  <div className="container">
    <h1 className="animation">Animation Discover</h1>
    <p className="para-animation"> Ceci est un affichage de 3 photos pour 
    découvrir de nouveaux horizons.</p>
    <div className="cards-container-animation">
      <div className="card">
        <div className="elms-animation">
          <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            <span className="four"></span>
        </div>
        <img src={boat} alt="boat on a lake"/>
        <div className="content">
          <button>
            <a href="GalleryBoat">
            Discover
            </a>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img src={sunsea} alt="sunset over the sea"/>
        <div className="content">
          <button>Discover</button>
        </div>
      </div>
      <div className="card">
        <div className="elms-animation">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <span className="four"></span>
        </div>
        <img src={sunset} alt="sunset over the meadow"/>
        <div className="content">
          <button>Discover</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Animation;