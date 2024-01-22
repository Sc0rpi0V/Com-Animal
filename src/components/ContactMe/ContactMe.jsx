import React from "react";
import "./style/ContactMe.css";
import { useTranslation } from "react-i18next";

const ContactMe = () => {

    const { t } = useTranslation();

    return (
        <section id="contact">
            <div className="back-contact">
                <h4>{t('contactMe')}</h4>
                <form className="contact" action="">
                    <label htmlFor="nom">{t('name')}</label>
                    <input type="text" id="nom" placeholder={t('labelName')} />
                    <label htmlFor="prenom">{t('firstName')}</label>
                    <input type="text" id="prenom" placeholder={t('labelFirstName')}/>
                    <label htmlFor="mail">{t('mail')}</label>
                    <input type="mail" id="mail" placeholder={t('labelMail')}/>
                    <label htmlFor="message">{t('labelMessage')}</label>
                    <textarea name="message" id="message" cols="30" rows="10"
                        placeholder={t('labelMessage')}></textarea>
                    <button className="contact-btn">{t('sendMessage')}</button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;