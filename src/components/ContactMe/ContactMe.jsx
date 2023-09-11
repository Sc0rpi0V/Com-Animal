import React from "react";
import "./style/ContactMe.css";

const ContactMe = () => {

    return (
        <section id="contact">
            <h4>Contact</h4>
            <form className="contact" action="">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" placeholder="Indiquez votre nom" />
                <label htmlFor="prenom">Prenom</label>
                <input type="text" id="prenom" placeholder="Indiquez votre prenom"/>
                <label htmlFor="mail">Mail</label>
                <input type="mail" id="mail" placeholder="Indiquez votre mail"/>
                <label htmlFor="message"></label>
                <textarea name="message" id="message" cols="30" rows="10"
                    placeholder="Indiquez votre message"></textarea>
                <button className="contact-btn">Envoyer le message</button>
            </form>
        </section>
    );
}

export default ContactMe;