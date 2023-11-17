import React from 'react';

const ImageUrl = () => {
    const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
    return (
        <div>
            <img src={imageUrl} alt="car" />
        </div>
    );
};

export default ImageUrl;
