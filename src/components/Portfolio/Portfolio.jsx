import React from "react";
import "./style/Portfolio.css";
import ImgIfs from "./src/ifs.jpeg";
import ImgCalf from "./src/calf.png";
import ImgEdfEnr from "./src/edfenr.png";
import ImgEngie from "./src/engie.png";
import ImgWordpress from "./src/wordpress.jpeg";

const Portfolio = () => {

    return (
        <section id="portfolio" className="portfolio">
            <div className="card-portfolio">
                <a href="/cardifs"><img className="portfolio-image" src={ImgIfs} alt="IFS"></img></a>
                <div className="card-portfolio-infos">
                    <h3>TMA IFS</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/cardcalfmvp"><img className="portfolio-image" src={ImgCalf} alt="CALFMVP"></img></a>
                <div className="card-portfolio-infos">
                    <h3>CALF MVP</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/cardcalfv1"><img className="portfolio-image" src={ImgCalf} alt="CALFV1"></img></a>
                <div className="card-portfolio-infos">
                    <h3>CALF V1</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/cardedfenr"><img className="portfolio-image" src={ImgEdfEnr} alt="EDFENR"></img></a>
                <div className="card-portfolio-infos">
                    <h3>EDF-ENR</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/cardengie"><img className="portfolio-image" src={ImgEngie} alt="ENGIE"></img></a>
                <div className="card-portfolio-infos">
                    <h3>ENGIE</h3>
                </div>
            </div>
            <div className="card-portfolio">
                <a href="/cardwordpress"><img className="portfolio-image" src={ImgWordpress} alt="WORDPRESS"></img></a>
                <div className="card-portfolio-infos">
                    <h3>Mini-Wordpress</h3>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;