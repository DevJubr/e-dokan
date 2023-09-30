import React from "react";
import { Link } from "react-router-dom";
import { useCartContex } from "../../state/contex/CartContex";

const CartPgUti = () => {
  const { clear_cart } = useCartContex();
  return (
    <div className="CartPgUti">
      <button className="CartPgUti_contenu_shoping">
        <Link to={"/products"}> contenue shoping</Link>
      </button>
      <button className="CartPgUti__clear_cart" onClick={clear_cart}>
        clear cart
      </button>
    </div>
  );
};

export default CartPgUti;
