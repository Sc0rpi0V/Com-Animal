import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import './style/Panier.css';
import { db } from "../../firebase"; 

const Panier = () =>  {
    const [cartItems, setCartItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            const cartCollection = collection(db, 'cart');
            const querySnapshot = await getDocs(cartCollection);
            const items = [];
            let totalPrice = 0;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                items.push(data);
                totalPrice += data.price;
            });

            setCartItems(items);
            setTotalPrice(totalPrice);
        };

        fetchCartItems();
    }, []);

    const handleItemSelection = (item) => {
        setSelectedItem(item);
    };

    const handlePurchase = () => {
        // Logique pour achat
        console.log("Achat effectué :", selectedItem);
        // Envoie infos au back ou service paiement 
    };

    return (
        <>
            <div className="panier">
                <div className="panier-info">
                    <h2>Panier</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} onClick={() => handleItemSelection(item)}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="panier-details">
                    {selectedItem && (
                        <div className="item-details">
                            <h3>Informations de la formation</h3>
                            <p>Nom : {selectedItem.name}</p>
                            <p>Prix : ${selectedItem.price}</p>
                            {/* Ajoutez ici d'autres détails de la formation si nécessaire */}
                            <button onClick={handlePurchase}>Acheter</button>
                        </div>
                    )}
                    <div className="total-price">
                        <h3>Total</h3>
                        <p>${totalPrice}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Panier;
