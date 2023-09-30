import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ProductsProvider } from "./state/contex/ProductContex";
import { FilterProvider } from "./state/contex/FilterContex";
import { CartProvider } from "./state/contex/CartContex";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
