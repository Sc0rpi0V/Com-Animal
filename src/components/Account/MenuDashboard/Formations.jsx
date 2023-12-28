import React, {useState, useEffect} from "react";
import Menu from "./Menu";
import { auth, firestore } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import "../style/Formations.css";
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

const Formations = () => {

    const [user, setUser] = useState(null);
    const [purchasedFormations, setPurchasedFormations] = useState([]);
    const { search } = useLocation();
    const {t} = useTranslation();
    
    useEffect(() => {
        // Fonction pour extraire les données des paramètres de recherche
        const getCartItemsFromSearch = (search) => {
            const params = new URLSearchParams(search);
            const cartItemsParam = params.get('cartItems');
            return cartItemsParam ? JSON.parse(decodeURIComponent(cartItemsParam)) : [];
        };

        const cartItems = getCartItemsFromSearch(search);
        setPurchasedFormations(cartItems);
    }, [search]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
            if (userAuth) {
                const userDocRef = doc(firestore, 'Users', userAuth.uid);

                try {
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser(userData);
                        console.log('User', userData);

                    } else {
                        console.log("Le document de l'utilisateur n'existe pas dans Firestore.");
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des données de l'utilisateur depuis Firestore:", error);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <div className="formations-container">
                <Menu />
                <div className="formations-content">
                    <h1 className="formations-title">{t('myFormations')}</h1>
                    {user ? (
                        <div className="formations">
                            {purchasedFormations.map((formation, index) => (
                                <div key={index} className="formation-card">
                                    <div className="logo-cart">
                                        <img src={formation.image}></img>
                                    </div>
                                    <div className="info-card">
                                        <p>{formation.name}</p>
                                        <p>{formation.description}</p>
                                    </div>
                                    <div className="info-duration">
                                        <p>{formation.duration}</p>
                                    </div>
                                    <div className="info-price">
                                        <span className="price_num">{formation.price} €</span>
                                        <span className="price_letter">{t('price')}</span>
                                    </div>
                                    <div className="info-download">
                                        <div className="button-layer"></div>
                                        <button className="btn-download">Télécharger</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Connectez-vous pour voir les informations du compte.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Formations;