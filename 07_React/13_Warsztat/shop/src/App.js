// App.js
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Summary from "./pages/Summary";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useBasketContext } from "./BasketContext";

const App = () => {
  const { basket } = useBasketContext();

  return (
      <BrowserRouter>
      <div className={'container-fluid p-0'}>
        <Navbar/>
        <div className={'container'}>

            <Routes>
              <Route path="/home" element={<Home />} errorElement={<ErrorPage/>}/>
              <Route path="/summary/:price" element={<Summary />} errorElement={<ErrorPage/>}/>
              <Route path="/product/:id" element={<Product />} errorElement={<ErrorPage/>}/>
              <Route path="/" element={<Home />} errorElement={<ErrorPage/>}/>
            </Routes>

        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
