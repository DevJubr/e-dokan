import React from "react";
import "./CartPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import { useCartContex } from "../../state/contex/CartContex";
import CartItem from "../../components/CartItem/CartItem";
import CartPgUti from "../../components/CartPgUti/CartPgUti";
import TotalCompo from "../../components/TotalCompo/TotalCompo";
const CartPage = () => {
  const { cart } = useCartContex();

  return (
    <>
      <NavBar />
      <section className="cart__section">
        <div className="con">
          <div className="cart_section_contenar">
            <article className="column__title">
              <p className="column__text">items</p>
              <p className="column__text bn">price</p>
              <p className="column__text">Quantity</p>
              <p className="column__text bn">Subtotal</p>
              <p className="column__text"></p>
            </article>

            <div className="cart__con__main__warp">
              {cart.map((crt) => {
                return <CartItem key={crt.id} {...crt} />;
              })}
            </div>
            <CartPgUti />
            <TotalCompo />
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
