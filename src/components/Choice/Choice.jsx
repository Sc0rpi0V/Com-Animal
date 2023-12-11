import React from "react";
import './style/Choice.css';
import About from './src/icone-about.svg';
import Chat from './src/icone-chat.svg';
import Mobile from './src/icone-mobile.svg';
import Codes from './src/icone-codes.svg';
import { useTranslation } from "react-i18next";

const Choice = () => {

    const { t } = useTranslation();

    return (
        <section className="choice">
            <div className="card-choice">
                <img src={About} alt="About"></img>
                <a href="/descriptionaboutme">{t('aboutMe')}</a>
            </div>
            <div className="card-choice">
                <img src={Chat} alt="Chat"></img>
                <a href="/contactme">{t('contactMe')}</a>
            </div>
            <div className="card-choice">
                <img src={Codes} alt="Codes"></img>
                <a href="/exercice">{t('seeMyExercices')}</a>
            </div>
            <div className="card-choice">
                <img src={Mobile} alt="Calendar"></img>
                <a href="/projectlist">{t('calendar')}</a>
            </div>
        </section>
    );
};

export default Choice;