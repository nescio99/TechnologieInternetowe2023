import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import {CardImg} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useBasketContext } from "../BasketContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

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
    const clickHandler = (e) => {
        e.preventDefault();
        if (typeof addToBasket === "function") {
            addToBasket(product);
        }
    }
    return (
        <div>
            <Card style={{width: '100%'}}>
                <Card.Body>
                    <Card.Title>{product.title} <span
                        className={'badge bg-danger'}>{product.specials[0]}</span></Card.Title>
                    <Card.Text>
                        Cena: {product.price} zł
                    </Card.Text>
                    <Card.Text> <span className={'fw-bold'}>Kategorie:</span> <br/>
                        {product.product_cat.map((category, index) => (
                            <span key={index}>| {category} | </span>
                        ))}
                    </Card.Text>
                </Card.Body>
                <CardImg className={'img-thumbnail'} variant={"bottom"} src={product.thumb}/>
                <Button type={'button'} className={'btn btn-success'} style={{height: '50px'}} variant="primary"
                        onClick={clickHandler}>Dodaj do koszyka</Button>
            </Card>
            <h5 className={'mt-2'}><Link className={'mt-3 badge text-bg-warning'} to="../home"><FontAwesomeIcon
                icon={faArrowLeft}/> Powrót do strony głównej</Link></h5>
        </div>
    );
};

export default Product;
