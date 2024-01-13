import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useBasketContext} from "../BasketContext";

const ProductItem = ({data}) => {
    const {addToBasket} = useBasketContext();
    const clickHandler = (e) => {
        e.preventDefault();
        if (typeof addToBasket === "function") {
            addToBasket(data);
        }
    }
    return (
        <Card style={{ height: '400px', color: 'black' }}>
            <Card.Img className={'align-middle object-fit-scale'} variant="top" src={data.thumb} style={{width: '100%', height: '200px'}} />
            <Card.Body className={'p-0'}>
                <Card.Title className={'m-0'} style={{height: '100px'}}>{data.title}</Card.Title>
                <Card.Text className={'m-0'} style={{height: '30px'}}>
                    Cena: {data.price} zł
                </Card.Text>
                <Button  type={'button'} className={'btn btn-success'} style={{height: '50px'}} variant="primary" onClick={clickHandler}>Dodaj do koszyka</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
