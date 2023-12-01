import React from 'react';
import ShopItemHeader from "./ShopItemHeader.jsx";
import ShopItemDescription from "./ShopItemDescription.jsx";
import ShopItemPricing from "./ShopItemPricing.jsx";

const ShopItem = ({product}) => {
    return (
        <section>
            <ShopItemHeader title={product.title} image={product.image} />
            <ShopItemDescription description={product.description} />
            <ShopItemPricing price={product.price} />
        </section>
    );
};

export default ShopItem;
