import React, { useContext, useEffect, useReducer } from "react";
import products_reducer from "../reduser/ProductReducer";
import {
  products_url,
  single_product_url,
} from "../../utils/NavLust_and_API_url";
import {
  LOADING,
  GET_ALL_PRODUCTS,
  END_LOADING,
  SINGEL_PRODUCT_PROS,
} from "../../Const";

const initialState = {
  all_products: [],
  future_product: [],
  singel_products: {},
  loading: false,
};

const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_reducer, initialState);

  const all_products_fetch = async () => {
    dispatch({ type: LOADING });
    const goToServer = await fetch(products_url);
    const allProduct = await goToServer.json();
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: allProduct,
    });
    dispatch({ type: END_LOADING });
  };

  const FetchingSingelproduct = async (id) => {
    dispatch({ type: LOADING });
    const Sr = await fetch(`${single_product_url}${id}`);
    const sdata = await Sr.json();
    dispatch({ type: SINGEL_PRODUCT_PROS, payload: sdata });
    dispatch({ type: END_LOADING });
  };

  useEffect(() => {
    all_products_fetch();
  }, []);

  const value = {
    ...state,
    FetchingSingelproduct,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
