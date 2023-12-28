import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './style/Panier.css';
import { db } from "../../firebase"; 
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const Panier = () =>  {
    const [cartItems, setCartItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();

    const { t } = useTranslation();

    useEffect(() => {
        const fetchCartItems = async () => {
            const cartCollection = collection(db, 'cart');
            const querySnapshot = await getDocs(cartCollection);
            const items = [];
            let totalPrice = 0;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                items.push({ id: doc.id, ...data, image: data.image });
                totalPrice += data.price;
            });

            setCartItems(items);
            setTotalPrice(totalPrice);
            setQuantities(calculateInitialQuantities(items));

            if (items.length > 0) {
                handleItemSelection(items[0]);
            }
        };

        fetchCartItems();
    }, []);

    const handleItemSelection = (item) => {
        console.log("Selected Item:", item);
        setSelectedItem(item);
    };

    const handleIncrement = (itemId) => {
        setQuantities((prevQuantities) => {
          const updatedQuantities = { ...prevQuantities };
          updatedQuantities[itemId] = (prevQuantities[itemId] || 0) + 1;
          return updatedQuantities;
        });
    };
      
    const handleDecrement = (itemId) => {
        setQuantities((prevQuantities) => {
          const newQuantity = (prevQuantities[itemId] || 1) - 1;
          const updatedQuantities = { ...prevQuantities };
          if (newQuantity >= 0) {
            updatedQuantities[itemId] = newQuantity;
          } else {
            delete updatedQuantities[itemId];
          }
          return updatedQuantities;
        });
    };      

    const calculateInitialQuantities = (items) => {
        const initialQuantities = {};
        items.forEach((item) => {
          initialQuantities[item.id] = 1;
        });
        return initialQuantities;
    };

    const calculateTotalQuantity = (customQuantities = null) => {
        const usedQuantities = customQuantities || quantities;
        const totalQuantity = Object.values(usedQuantities).reduce((acc, curr) => acc + curr, 0);
        return totalQuantity;
    };

    const handlePurchase = () => {
        console.log("Achat effectué pour tous les articles dans le panier :");

        // Itérer sur tous les articles du panier
        cartItems.forEach((item) => {
            const quantity = quantities[item.id] || 1;
            console.log(`Article ${item.name} - Quantité : ${quantity}`);
            // Envoie des informations au back ou service paiement pour chaque article
        });    
        navigate(`/formations?cartItems=${encodeURIComponent(JSON.stringify(cartItems))}`);
    };

    const handleRemoveItem = async (itemId) => {
        try {
            // Récupération de la quantité de l'article supprimé
            const removedItemQuantity = quantities[itemId] || 1;

            // Suppression de l'article de la base de données
            await deleteDoc(doc(db, 'cart', itemId));
            console.log('Formation retirée du panier avec succès.');

            // Mise à jour des éléments du panier après suppression
            const updatedCartItems = cartItems.filter(item => item.id !== itemId);
            setCartItems(updatedCartItems);

            // Recalcul du total des prix après suppression
            const updatedTotalPrice = updatedCartItems.reduce((sum, item) => sum + item.price, 0);
            setTotalPrice(updatedTotalPrice);

            // Soustraction de la quantité de l'article supprimé du total des quantités
            setQuantities((prevQuantities) => {
                const updatedQuantities = { ...prevQuantities };
                updatedQuantities[itemId] = 0; 
                const newTotalQuantity = calculateTotalQuantity(updatedQuantities) - removedItemQuantity;
                return { ...updatedQuantities, ...calculateInitialQuantities(updatedCartItems), ...{ [itemId]: 0 } };
            });
        } catch (error) {
            console.error('Erreur lors de la suppression de la formation du panier : ', error);
        }
    };

    return (
        <>
            <h1 className='title'>{t('basketSummary')}</h1>
            <div className="panier">
                <div className="panier-info">
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} onClick={() => handleItemSelection(item)}>
                                <div className='item-details-left'>
                                    <img src={item.image} alt="cover hard work"></img>
                                    <p className='item-name'>{item.name}</p>
                                    <p className='item-desc'>{item.description}</p>
                                    <p className='item-duration'>{item.duration}</p>
                                </div>
                                <div className='item-details-center'>
                                    <p className='item-price'>{item.price} €</p>
                                </div>
                                <div className="quantity-controls">
                                    <button onClick={(e) => { e.stopPropagation(); handleDecrement(item.id); }}>-</button>
                                        <span>{quantities[item.id] || 1}</span>
                                    <button onClick={(e) => { e.stopPropagation(); handleIncrement(item.id); }}>+</button>
                                </div>
                                <button className="btn-delete-card" onClick={(e) => { e.stopPropagation(); handleRemoveItem(item.id); }}>{t('delete')}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="panier-details">
                    <div className="list-products">
                        <p>Nombre(s) de produit(s)</p>
                        <p>{calculateTotalQuantity()}</p>
                    </div>
                    <div className="total-price">
                        <h2>Total: {totalPrice} €</h2>
                    </div>
                    <button onClick={handlePurchase}>{t('buy')}</button>
                </div>
            </div>
        </>
    );
}

export default Panier;
