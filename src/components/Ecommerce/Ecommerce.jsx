import React, { useState } from "react";
import './style/Ecommerce.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase"; 
import { addDoc, collection } from 'firebase/firestore';
import { useTranslation } from "react-i18next";

const Ecommerce = ({addToCart}) => {

    const { t } = useTranslation();
    
    const [cartItems, setCartItems] = useState([]);
    const [cardsData] = useState([
        {
            name: "Introduction",
            description: "Le Fondement de la Communication Animale",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/foundationanimalcom"
        },
        {
            name: "Méditation de Connexion",
            description: "Pratique de la Méditation de Connexion",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/connectionmeditation"
        },
        {
            name: "Photo Silencieuse",
            description: "La Puissance de la Visualisation",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/silentphoto"
        },
        {
            name: "Conversation Écrite",
            description: "Établir une Communication Écrite",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/writtenconversation"
        },
        {
            name: "Observation Empathique",
            description: "Développer l'Empathie envers les Animaux",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/empatheticobservation"
        },
        {
            name: "Marche Consciente",
            description: "La Connexion à travers l'Activité Physique",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/consciouswalking"
        },
        {
            name: "Application Pratique",
            description: "Mise en Pratique Globale",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/praticalapplication"
        },
        {
            name: "Éthique et Respect ",
            description: "Respect envers les Animaux et Éthique",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/ethicsrespect"
        },
        {
            name: "Ressources et Outils",
            description: "Ressources pour Approfondir la Communication Animale",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/ressourcestools"
        },
        {
            name: "Conclusion",
            description: "Intégration et Continuité",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/conclusionmodule"
        },
    ]);

    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = async (index) => {
        const card = cardsData[index];
        addToCart(card);

        setCartItems([...cartItems, card]);

        setCartCount(cartCount + 1);

        try {
            await addDoc(collection(db, 'cart'), {
                name: card.name,
                description: card.description,
                duration: card.duration,
                price: card.price,
            });
            console.log('Article ajouté au panier avec succès.');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'article au panier : ', error);
        }
    };

    return (
        <>
            <h4>{t('formationsEcommerce')}</h4>
            <a href="/panier" className="cart-container">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" size="2x" />
                <span className="cart-count">{cartCount}</span>
            </a>
            <div className="container-ecommerce">
                {cardsData.map((card, index) => (
                    <div key={index} className="card-ecommerce">
                        <div className="logo-cart">
                        </div>
                        <div className="info">
                            <span className="name">{t(`cards.${index}.name`)}</span>
                            <p>{t(`cards.${index}.description`)}</p>
                            <p>{t(`cards.${index}.duration`)}</p>
                            <div className="stars">
                                {[...Array(card.stars)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} size="2x" color="blue" />
                                ))}
                            </div>
                        </div>
                        <div className="color-price">
                            <div className="color-option">
                                <span className="color">{t('difficulty')}</span>
                                <div className="circles">
                                    <span className="circle blue active" data-option= "blue"></span>
                                    <span className="circle blue active" data-option= "blue"></span>
                                    <span className="circle blue active" data-option= "blue"></span>
                                    <span className="circle blue active" data-option= "blue"></span>
                                </div>
                            </div>
                            <div className="price">
                                <span className="price_num">40.00$</span>
                                <span className="price__letter">{t('price')}</span>
                            </div>
                        </div>
                        {/* <div className="see-more-details">
                            <button className="more-details-btn" href={card.link}>
                                <a href={card.link} className="add-link">{t('seeMore')}</a>
                            </button>
                        </div> */}
                        <div className="add-cart button">
                            <div className="button-layer"></div>
                            <button className="add-btn-card" onClick={() => handleAddToCart(index)}>{t('addToCart')}</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Ecommerce;