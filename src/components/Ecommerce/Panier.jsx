import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
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
                items.push({ id: doc.id, ...data });
                totalPrice += data.price;
            });

            setCartItems(items);
            setTotalPrice(totalPrice);
        };

        fetchCartItems();
    }, []);

    const handleItemSelection = (item) => {
    console.log("Selected Item:", item);

        setSelectedItem(item);
    };

    const handlePurchase = () => {
        console.log("Achat effectué :", selectedItem);
        // Envoie infos au back ou service paiement 
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await deleteDoc(doc(db, 'cart', itemId));
            console.log('Formation retirée du panier avec succès.');

            // Mise à jour des éléments du panier après suppression
            const updatedCartItems = cartItems.filter(item => item.id !== itemId);
            setCartItems(updatedCartItems);

            // Recalcul du total des prix après suppression
            const updatedTotalPrice = updatedCartItems.reduce((sum, item) => sum + item.price, 0);
            setTotalPrice(updatedTotalPrice);
        } catch (error) {
            console.error('Erreur lors de la suppression de la formation du panier : ', error);
        }
    };

    return (
        <>
            <div className="panier">
                <div className="panier-info">
                    <h2>Panier</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} onClick={() => handleItemSelection(item)}>
                                <p>{item.name} - {item.duration}</p>
                                <p>{item.description}</p>
                                <p>{item.price} $</p>
                                <button className="btn-delete-card" onClick={(e) => { e.stopPropagation(); handleRemoveItem(item.id); }}>Supprimer</button>
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
