import React, {useEffect, useState} from 'react';

const HelloWorld = () => {
    const [text, setText] = useState("Hello World");

    useEffect(() => {
        const timerID = setTimeout(() => {
            setText("Hi, Everyone!");
        }, 5000);
    }, []);

    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

export default HelloWorld;
