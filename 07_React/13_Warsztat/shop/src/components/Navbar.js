import React from "react";
import { Link } from "react-router-dom";
import { useBasketContext } from "../BasketContext";
import { Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPenNib } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
    const { basket } = useBasketContext();

    return (
        <Navbar bg="primary" variant="dark" className={'bg-dark border-bottom border-body sticky-top ps-0 pe-0'}>
            <div className={'container'}>
                <Navbar.Brand className={''} href="../home"><FontAwesomeIcon icon={faPenNib} /> Strona Główna</Navbar.Brand>
                <Nav className=" text-end">
                    <Link to={`/summary/${basket.reduce((prev, curr) => prev + curr.price, 0)}`} className="btn btn-outline-light">
                        <span><FontAwesomeIcon icon={faCartShopping} /></span> Koszyk <span className={'badge text-bg-danger'}>{basket.length}</span> - Suma: {basket.reduce((prev, curr) => prev + curr.price, 0)} zł
                    </Link>
                </Nav>
            </div>
        </Navbar>
    );
};

export default CustomNavbar;
