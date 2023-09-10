import React from "react";
import './style/Description.css';
import CoverOrehus from "./src/cover-orehus.jpg";
import WorkHard from "./src/cover-jeveuxdeshits.jpg";

const Description = () => {

    return (
        <section className="onfirst">
            <div className="onfirst-line"></div>
                <h4>Description</h4>
                <div className="onfirst-descriptions">
                    <article>
                        <a href="#"><img src={CoverOrehus} alt="cover orehus"></img></a>
                        <h5>Qui suis-je ?</h5>
                        <p>
                            Passionné par le développement Backend, je fusionne la puissance de la technologie 
                            avec la créativité du code pour créer des expériences en ligne exceptionnelles. 
                            Ma boîte à outils inclut une gamme de technologies, allant de React pour construire 
                            des interfaces utilisateur dynamiques, à PHP pour créer des bases de données robustes 
                            et des logiques serveur complexes. Je jongle avec Javascript, HTML et CSS pour donner 
                            vie à mes idées, en créant des sites Web fluides et esthétiquement plaisants.
                        </p>
                        <a className="see-more" href="#propos">En savoir plus</a>
                    </article>
                    <article>
                        <a href="#"><img src={WorkHard} alt="cover hard work"></img></a>
                        <h5>Qui fais-je ?</h5>
                        <p>
                            Passionné par le développement Backend, je fusionne la puissance de la technologie 
                            avec la créativité du code pour créer des expériences en ligne exceptionnelles. 
                            Ma boîte à outils inclut une gamme de technologies, allant de React pour construire 
                            des interfaces utilisateur dynamiques, à PHP pour créer des bases de données robustes 
                            et des logiques serveur complexes. Je jongle avec Javascript, HTML et CSS pour donner 
                            vie à mes idées, en créant des sites Web fluides et esthétiquement plaisants.
                        </p>
                        <a className="see-more" href="#work">En savoir plus</a>
                    </article>
                </div>
            <div className="onfirst-line"></div>
        </section> 
    );
};

export default Description;