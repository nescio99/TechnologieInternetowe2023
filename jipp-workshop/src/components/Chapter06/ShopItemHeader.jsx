import React from 'react';

const ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} alt={title} />
        </header>
    );
};

export default ShopItemHeader;
