import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  CLR_CRT,
  COUNT_CART_TOTALS,
  DELETE_FROM_CART,
  TOGOL_CART,
} from "../../Const";
import { cartreduser } from "../reduser/cartReduser";
export const CartContex = createContext();

const getttL = () => {
  let cartT = localStorage.getItem("cart");
  if (cartT) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
  // return cartT
};

const initialState = {
  cart: getttL(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartreduser, initialState);
  const addtocart = (id, stock, product, count) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, stock, product, count, stock },
    });
  };

  const deleteItemsFromCart = (id) => {
    dispatch({ type: DELETE_FROM_CART, payload: id });
  };

  const togolAmonunt = (id, value) => {
    dispatch({ type: TOGOL_CART, payload: { id, value } });
  };

  const clear_cart = () => {
    dispatch({ type: CLR_CRT });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  // console.log(state.cart);
  const value = {
    ...state,
    addtocart,
    togolAmonunt,
    deleteItemsFromCart,
    clear_cart,
  };
  return <CartContex.Provider value={value}>{children}</CartContex.Provider>;
};

export const useCartContex = () => {
  return useContext(CartContex);
};
