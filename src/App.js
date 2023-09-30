import React from "react";
import HomePage from "./pages/home/Home";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SingelProduct from "./pages/SingelProduct/SingelProduct";
import CartPage from "./pages/CartPage/CartPage";
import About from "./pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<SingelProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
