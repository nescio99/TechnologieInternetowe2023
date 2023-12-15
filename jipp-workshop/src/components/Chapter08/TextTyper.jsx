import React, {useState} from 'react';

const TextTyper = ({text}) => {
    const [counter, setCounter] = useState(1);
    const remove = ()  => setCounter(prev => prev - 1 >= 1 ? prev - 1 : 1);
    const add = ()  => setCounter(prev => prev + 1 <= text.length ? prev + 1 : text.length);

    return (
        <div>
            <h1>{text.slice(0,counter)}</h1>
            <button onClick={remove}>-</button>
            <button onClick={add}>+</button>
        </div>
    );
};

export default TextTyper;
