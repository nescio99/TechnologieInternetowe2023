import React from 'react';

const ShopItem = ({title, onBuy}) => {

    const buyItem = () => {
        if (typeof onBuy === "function") {
            onBuy(title);
        }
    };

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={buyItem}>Kup</button>
        </div>
    );
};

export default ShopItem;
