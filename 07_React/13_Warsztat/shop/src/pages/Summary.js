import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { useBasketContext } from "../BasketContext";
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import React from "react";

const Summary = () => {
    const { basket, removeFromBasket } = useBasketContext();
    const { price } = useParams();

    const handleRemove = (productId) => {
        removeFromBasket(productId);
    };

    return (
        <>
            <h1 className={'mt-3'}><span><FontAwesomeIcon icon={faCartShopping}/></span> Koszyk:</h1>
            <table className={'table'}>
                <thead className={''}>
                <tr>
                    <th scope={'col'}>ID produktu</th>
                    <th scope={'col'}>Nazwa produktu</th>
                    <th scope={'col'}>Cena</th>
                    <th scope={'col'}>Opcje</th>
                </tr>
                </thead>
                <tbody className={'table-group-divider'}>
                {basket.map((el, i) => (
                    <tr key={i}>
                        <th scope={'row'}>{el.id}</th>
                        <th>{el.title}</th>
                        <th>{el.price} zł</th>
                        <th>
                            <Button variant="danger" size="sm" onClick={() => handleRemove(el.id)}>
                                Usuń
                            </Button>
                        </th>
                    </tr>
                ))}
                <tr className={'table-dark'}>
                    <th></th>
                    <th>Łączna wartość zamówienia:</th>
                    <th>{basket.reduce((prev, curr) => prev + curr.price, 0)} zł</th>
                    <th></th>
                </tr>
                </tbody>
            </table>
            <h5 className={'mb-2'}><Link className={'mt-3 badge text-bg-warning'} to="../home"><FontAwesomeIcon
                icon={faArrowLeft}/> Powrót do strony głównej</Link></h5>
        </>
    );
};

export default Summary;
