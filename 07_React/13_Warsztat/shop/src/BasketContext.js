import React, { createContext, useState, useContext } from "react";

const BasketContext = createContext();

export const useBasketContext = () => {
    return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket((prev) => [...prev, product]);
    };

    const removeFromBasket = (productId) => {
        setBasket((prev) => prev.filter((item) => item.id !== productId));
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};
