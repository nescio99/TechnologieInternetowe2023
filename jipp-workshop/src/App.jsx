import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import artist from "./data/artist";
import ImageUrl from "./components/Chapter02/ImageUrl";
import RGBBoxes from "./components/Chapter02/RGBBoxes";
import Hello from "./components/Chapter05/Hello";
import CurrencyConverter from "./components/Chapter05/CurrencyConverter";
import ParentComponent from "./components/Chapter06/ParentComponent.jsx";
import ShopItem from "./components/Chapter06/ShopItem.jsx";
import product from "./data/product.js";
import './App.css';
import HelloWorld from "./components/Chapter07/HelloWorld.jsx";

function App() {
  const [count, setCount] = useState(0);

  // const numA = parseInt(prompt("Podaj liczbę A?"));
  // const numB = parseInt(prompt("Podaj liczbę B?"));
  // const age =  parseInt(prompt("Podaj rok urodzenia?"));

  // const mapObjToArray = (artist) => {
  //     const tab = [];
  //     for (const value of Object.values(artist)) {
  //         tab.push(value);
  //     }
  //     return tab;
  // }
  // mapObjToArray(artist);
  //
  //   const numA = parseInt(prompt("Podaj liczbę A?"));
  //   const numB = parseInt(prompt("Podaj liczbę B?"));
  //   const operator =  prompt("Wybierz operator (+, -, *, /)?");
  //
  //   const obj = {
  //       "+": () => <h1>{numA} + {numB} = {numA+numB}</h1>,
  //       "-": () => <h2>{numA} - {numB} = {numA-numB}</h2>,
  //       "*": () => <h4>{numA} * {numB} = {numA*numB}</h4>,
  //       "/": () => <h4>{numA} / {numB} = {numA/numB}</h4>
  //   }
  //   console.log(obj[operator]());
  return (
    <>
        {/*<p>{numA + numB}</p>*/}
        {/*<h1>Masz: { new Date().getFullYear() - age } lat</h1>*/}
        {/*{obj[operator]()}*/}
        <ul>
            {/*{*/}
            {/*    mapObjToArray(artist).map((el) => <li key={uuidv4()}>{el}</li>)*/}
            {/*}*/}
            {/*<li>{artist.firstName}</li>*/}
            {/*<li>{artist.lastName}</li>*/}
            {/*<li>{artist.nickname}</li>*/}
            {/*<li>{artist.age}</li>*/}
        </ul>
        <ImageUrl />
        <RGBBoxes />
        <Hello name="Grzegorz" surname="Kowalski" />
        <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
        <CurrencyConverter from="PLN" to="USD" value={200} rate={0.25} />
        <ParentComponent>
            <p>Hej</p>
        </ParentComponent>
        <ShopItem product={product} />
        <HelloWorld />
    </>
  )
}

export default App
