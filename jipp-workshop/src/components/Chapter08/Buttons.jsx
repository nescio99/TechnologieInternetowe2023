import React from 'react';

const Buttons = () => {

    const clickHandler = () => {
        const numA = parseInt(prompt("Podaj liczbę A?"));
        const numB = parseInt(prompt("Podaj liczbę B?"));
        console.log(numA+numB)
    }

    const clickHandler2 = () => {
        console.log(window.innerWidth, window.innerHeight);
    }

    return (
        <div>
            <button onClick={() => console.log("Pierwszy przycisk kliknięty")}>Kliknij mnie</button>
            <button onClick={clickHandler}>Kliknij mnie 2</button>
            <button onClick={clickHandler2}>Kliknij mnie 3</button>
        </div>
    );
};

export default Buttons;
