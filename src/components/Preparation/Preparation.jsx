import React from "react";
import './style/Preparation.css';

const Preparation = () => {

    return (
        <>
            <h1 className="title-preparation">Exercices Préparation Communication Animale </h1>
            <p className="explication">
                Comment apprendre la communication animale? 
                Vous savez peut-être que tout le monde peut communiquer intuitivement avec les animaux?
                Si, si promis ce n'est pas une légende. Cela demande un peu d'entrainement mais pas plus que pour apprendre à faire du vélo.
                La communication animale est une communication non verbale, qui passe par nos sens de perception. 
                Ainsi nous recevons une information soit en entendant, en voyant ou en ressentant dans notre corps, comme dans un rêve éveillé.
                Cependant, il est peu courant de communiquer ainsi avec un animal sans s'entrainer et développer des outils que je nommerais de 
                fondamentaux.
                Je vous propose de découvrir les 5 étapes clés pour apprendre à communiquer avec un animal:
            </p>

            <div className="button-list">
                <a href="/anchoring" className="home-btn home-btn1">L'Ancrage</a>
                <a href="/openhearth" className="home-btn home-btn2">L'ouverture du Coeur</a>
                <a href="/relaxation" className="home-btn home-btn3">La Relaxation</a>
                <a href="/spiritconnexion" className="home-btn home-btn4">La Connexion</a>
                <a href="/sensoryexchange" className="home-btn home-btn5">Les échanges Sensorielles</a>
            </div>
        </>
    );
}

export default Preparation;