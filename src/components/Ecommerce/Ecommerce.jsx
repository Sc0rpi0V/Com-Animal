import React, { useState } from "react";
import './style/Ecommerce.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase"; 
import { addDoc, collection } from 'firebase/firestore';

const Ecommerce = ({addToCart}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [cardsData] = useState([
        {
            name: "Html",
            description: "Cours sur les bases HTML pour réaliser votre site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationhtml"
        },
        {
            name: "CSS",
            description: "Cours sur les bases CSS pour réaliser un premier site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationcss"
        },
        {
            name: "Javascript",
            description: "Cours sur les bases Javascript pour réaliser un premier site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationjs"
        },
        {
            name: "ReactJs",
            description: "Cours sur les bases ReactJs pour réaliser un premier site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationreact"
        },
        {
            name: "PHP",
            description: "Cours sur les bases PHP pour réaliser un premier site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationphp"
        },
        {
            name: "WordPress",
            description: "Cours sur les bases WordPress pour réaliser un premier site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationwordpress"
        },
        {
            name: "Python",
            description: "Cours sur les bases Python pour réaliser un premier site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationpython"
        },
        {
            name: "Symfony",
            description: "Cours sur les bases Symfony pour réaliser un premier site",
            duration: "Durée : 3H00",
            stars: 5,
            price: 90.00,
            difficultyOptions: ["blue"],
            link: "/formationsymfony"
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
            <h4>Formations</h4>
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
                            <span className="name">{card.name}</span>
                            <p>{card.description}</p>
                            <p>{card.duration}</p>
                            <div className="stars">
                                {[...Array(card.stars)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} size="2x" color="blue" />
                                ))}
                            </div>
                        </div>
                        <div className="color-price">
                            <div className="color-option">
                                <span className="color">Difficulty :</span>
                                <div className="circles">
                                    <span className="circle blue active" data-option= "blue"></span>
                                    <span className="circle blue active" data-option= "blue"></span>
                                    <span className="circle blue active" data-option= "blue"></span>
                                    <span className="circle blue active" data-option= "blue"></span>
                                </div>
                            </div>
                            <div className="price">
                                <span className="price_num">90.00$</span>
                                <span className="price__letter">Ninety dollar only</span>
                            </div>
                        </div>
                        <div className="see-more-details">
                            <button className="more-details-btn" href={card.link}>
                                <a href={card.link} className="add-link">See More</a>
                            </button>
                        </div>
                        <div className="add-cart button">
                            <div className="button-layer"></div>
                            <button className="add-btn-card" onClick={() => handleAddToCart(index)}>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Ecommerce;