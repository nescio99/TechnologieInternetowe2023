import {useState, useEffect} from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom"
import ProductItem from "../components/ProductItem";
import { useBasketContext } from "../BasketContext";

const Home = () => {
    const [pens, setPens] = useState([]);
    const { basket, addToBasket } = useBasketContext();

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then(res => res.json())
            .then(res => setPens(res))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <Row className={'text-center'}>
                {
                    pens.map((el) => (
                    <Link className={"col-3 mb-2 p-2"} to={`/product/${el.id}`} state={{ addToBasket }}>
                        <ProductItem data={el} key={el.id} />
                    </Link>
                ))}
            </Row>
        </>

    );
};

export default Home;
