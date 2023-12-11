import React, { useState } from "react";
import Ecommerce from "../components/Ecommerce/Ecommerce";

const ShowEcommerce = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <>
            <Ecommerce addToCart={addToCart} />
        </>
    );
}

export default ShowEcommerce;