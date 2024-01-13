import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { useBasketContext } from "../BasketContext";
import {useParams} from "react-router-dom";

const Summary = () => {
    const { basket, removeFromBasket } = useBasketContext();
    const { price } = useParams();

    const handleRemove = (productId) => {
        removeFromBasket(productId);
    };

    return (
        <>
            <h1>Koszyk:</h1>
            <ul>
                {basket.map((el, i) => (
                    <li key={i}>
                        {el.title} -{" "}
                        <Button variant="danger" size="sm" onClick={() => handleRemove(el.id)}>
                            Usuń
                        </Button>
                    </li>
                ))}
            </ul>
            <p>Lączna wartość zamówienia: {basket.reduce((prev, curr) => prev + curr.price, 0)} zł</p>
            <Link to="../home">Powrót do strony głównej</Link>
        </>
    );
};

export default Summary;
