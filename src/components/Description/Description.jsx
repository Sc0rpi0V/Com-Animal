import React from "react";
import './style/Description.css';
import CoverOrehus from "./src/cover-orehus.jpg";
import WorkHard from "./src/cover-jeveuxdeshits.jpg";
import { useTranslation } from "react-i18next";

const Description = () => {

  const { t } = useTranslation();

    return (
        <section className="onfirst">
            <div className="onfirst-line"></div>
                <h4>{t('description')}</h4>
                <div className="onfirst-descriptions">
                    <article>
                        <a href="/descriptionaboutme#"><img src={CoverOrehus} alt="cover orehus"></img></a>
                        <h5>{t('whoami')}</h5>
                        <p>{t('descriptionFirst')}</p>
                        <a className="see-more" href="/descriptionaboutme">{t('seeMore')}</a>
                    </article>
                    <article>
                        <a href="/viewwork"><img src={WorkHard} alt="cover hard work"></img></a>
                        <h5>{t('whatido')}</h5>
                        <p>{t('descriptionSecond')}</p>
                        <a className="see-more" href="/viewwork">{t('seeMore')}</a>
                    </article>
                </div>
            <div className="onfirst-line"></div>
        </section> 
    );
};

export default Description;