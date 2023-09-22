import React from "react";
import './style/Carousel.css';
import AlfaRomeo from './img/alfaromeo.webp';
import AlphaTauri from './img/alphatauri.jpeg';
import Alpine from './img/alpine.jpeg';
import AstonMartin from './img/astonmartin.jpeg';
import Ferrari from './img/ferrari.jpeg';
import Haas from './img/haas.jpeg';
import McLaren from './img/mclaren.jpeg';
import Mercedes from './img/mercedes.webp';
import RedBull from './img/redbull.jpeg';
import Williams from './img/williams.jpeg';

const Carousel= () => {

    return (
        <div className="carousel-f1">
            <span style={{ '--i': 1}}><img src={AlfaRomeo} alt=""></img></span>
            <span style={{ '--i': 2}}><img src={AlphaTauri} alt=""></img></span>
            <span style={{ '--i': 3}}><img src={Alpine} alt=""></img></span>
            <span style={{ '--i': 4}}><img src={AstonMartin} alt=""></img></span>
            <span style={{ '--i': 5}}><img src={Ferrari} alt=""></img></span>
            <span style={{ '--i': 6}}><img src={Haas} alt=""></img></span>
            <span style={{ '--i': 7}}><img src={McLaren} alt=""></img></span>
            <span style={{ '--i': 8}}><img src={Mercedes} alt=""></img></span>
            <span style={{ '--i': 9}}><img src={RedBull} alt=""></img></span>
            <span style={{ '--i': 10}}><img src={Williams} alt=""></img></span>
        </div>
    );
}

export default Carousel;