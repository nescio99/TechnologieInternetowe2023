import React, {useState} from 'react';
import ShopItem from "./ShopItem.jsx";

const Shop = () => {
    const [basket, setBasket] = useState([]);

    const onBuy = (title) => {
        setBasket(prev => [...prev, title]);
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={onBuy} />
            <ShopItem title="Dell X5500" onBuy={onBuy} />
            <ShopItem title="Asus NT6000" onBuy={onBuy} />
            <ul>
                {
                    basket.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;
