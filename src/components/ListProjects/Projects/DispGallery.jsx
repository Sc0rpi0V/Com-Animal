import React from 'react';
import airballon from "../img/airballon.jpg";
import skyoldcity from "../img/skyoldcity.jpg";
import smallboat from "../img/smallboat.jpg";
import smallforest from "../img/smallforest.jpg";
import "../style/DispGallery.css";

const DispGallery = () => {
  return (
    <>
      <h1 className="gallery">Gallery</h1>
      <p className="paragallery"> Ceci est un affichage de photo cerclé divisé en 4.</p>
      <div className="dispgallery">
          <img src={airballon} alt ="hot air ballon"></img>
          <img src={skyoldcity} alt ="sky old city"></img>
          <img src={smallboat} alt ="small boat"></img>
          <img src={smallforest} alt ="small forest"></img>
      </div>
    </>
  );
};

export default DispGallery;