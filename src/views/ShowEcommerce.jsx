import React, { useState } from "react";
import Ecommerce from "../components/Ecommerce/Ecommerce";
import Panier from "../components/Ecommerce/Panier";

const ShowEcommerce = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <>
            <Ecommerce addToCart={addToCart} />
            <Panier cartItems={cartItems} />
        </>
    );
}

export default ShowEcommerce;