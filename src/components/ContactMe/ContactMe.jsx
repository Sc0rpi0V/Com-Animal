import React from "react";
import "./style/ContactMe.css";

const ContactMe = () => {

    return (
        <section>
            <div class="newsletter-ligne"></div>
            <h4>Contact</h4>
            <form class="contact" action="">
                <label for="nom">Nom</label>
                <input type="text" id="nom" placeholder="Indiquez votre nom" />
                <label for="prenom">Prenom</label>
                <input type="text" id="prenom" placeholder="Indiquez votre prenom"/>
                <label for="mail">Mail</label>
                <input type="mail" id="mail" placeholder="Indiquez votre mail"/>
                <label for="message"></label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button class="home-btn">Envoyer le message</button>
            </form>
        </section>
    );
}

export default ContactMe;