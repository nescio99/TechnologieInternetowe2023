import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import artist from "./data/artist";
import ImageUrl from "./components/Chapter02/ImageUrl.jsx";
import RGBBoxes from "./components/Chapter02/RGBBoxes.jsx";

function App() {
  const [count, setCount] = useState(0);

  // const numA = parseInt(prompt("Podaj liczbę A?"));
  // const numB = parseInt(prompt("Podaj liczbę B?"));
  // const age =  parseInt(prompt("Podaj rok urodzenia?"));

  const mapObjToArray = (artist) => {
      const tab = [];
      for (const value of Object.values(artist)) {
          tab.push(value);
      }
      return tab;
  }
  mapObjToArray(artist);

    const numA = parseInt(prompt("Podaj liczbę A?"));
    const numB = parseInt(prompt("Podaj liczbę B?"));
    const operator =  prompt("Wybierz operator (+, -, *, /)?");

    const obj = {
        "+": () => <h1>{numA} + {numB} = {numA+numB}</h1>,
        "-": () => <h2>{numA} - {numB} = {numA-numB}</h2>,
        "*": () => <h4>{numA} * {numB} = {numA*numB}</h4>,
        "/": () => <h4>{numA} / {numB} = {numA/numB}</h4>
    }
    console.log(obj[operator]());
  return (
    <>
      <div>
        {/*<p>{numA + numB}</p>*/}
        {/*<h1>Masz: { new Date().getFullYear() - age } lat</h1>*/}
        {obj[operator]()}
        <ul>
            {
                mapObjToArray(artist).map((el, i) => <li key={i}>{el}</li>)
            }
            {/*<li>{artist.firstName}</li>*/}
            {/*<li>{artist.lastName}</li>*/}
            {/*<li>{artist.nickname}</li>*/}
            {/*<li>{artist.age}</li>*/}
        </ul>
        <ImageUrl />
        <RGBBoxes />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Hello World!!! React jest fajny. Test.
      </p>
    </>
  )
}

export default App
