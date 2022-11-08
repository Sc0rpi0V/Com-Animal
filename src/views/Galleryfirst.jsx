import React from 'react';
import "./style/BoatGallery.css";
import bathub from "../img/boat/bathub.jpg";
import bathub2 from "../img/boat/bathub-2.jpg";
import bathub3 from "../img/boat/bathub-3.jpg";
import bathub4 from "../img/boat/bathub-4.jpg";
import bathub5 from "../img/boat/bathub-5.jpg";
import CardGallery from '../components/CardGallery/CardGallery';

const Images = [
  {
    backgroundImage: bathub
  },
  {
    backgroundImage: bathub2
  },
  {
    backgroundImage: bathub3
  },
  {
    backgroundImage: bathub4
  },
    {
    backgroundImage: bathub5
  }
]

const Galleryfirst = () => {

  return (
    <div className="cards-container-gallery">
      {Images.map(link => {
          return <CardGallery link={link} key={link.backgroundImage} />
      })}
  </div>
  );
}

export default Galleryfirst;