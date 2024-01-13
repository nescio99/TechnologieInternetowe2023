import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import {CardImg} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useBasketContext } from "../BasketContext";

const Product = () => {
    const {id} = useParams();
    const { addToBasket } = useBasketContext();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8000/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
            .catch(error => console.log(error))
    }, [id]);
    if (!product) {
        return <p>Ładowanie...</p>;
    }
    return (
        <div>

            <Card style={{width: '32rem'}}>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Cena: {product.price} zł
                    </Card.Text>
                </Card.Body>
                <CardImg variant={"bottom"} src={product.thumb}/>
            </Card>
            <Link to="/home">Powrót do strony głównej</Link>
        </div>
    );
};

export default Product;
