import React, {useEffect, useState} from 'react';

const Modal = ({heading}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShow(prev => !prev);
        }, 10000);

        return () => clearTimeout(timeoutID);
    }, []);

    return show ? <h2>{heading}</h2> : null;
};

export default Modal;
