import React, { createContext, useContext, useEffect, useReducer } from "react";
import FilterReduser from "../reduser/FilterReduser";
import {
  LOAD_FILTER_PRODUCT,
  SET_GRID_VIEV,
  SORT_PRODUCTS,
  SET_LIST_VIEV,
  UPDEAT_SHORT,
  UPDEATE_FILTER,
  FILTER_PRODUCTS,
} from "../../Const";
import { useProductsContext } from "../contex/ProductContex";
const FilterContex = createContext();
const InitialState = {
  filtered_products: [],
  filter_all_products: [],
  gird_view: true,
  short: "a_to_z",
  filters: {
    search_text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReduser, InitialState);
  const { all_products } = useProductsContext();

  const set_grid = () => {
    dispatch({ type: SET_GRID_VIEV });
  };
  const set_list = () => {
    dispatch({ type: SET_LIST_VIEV });
  };

  const updeat_short = (e) => {
    let value = e.target.value;
    dispatch({ type: UPDEAT_SHORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
    dispatch({ type: FILTER_PRODUCTS });
  }, [all_products, state.short, state.filters]);

  const updeatFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //console.log("NAME==", name, "VALUE==", value);
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDEATE_FILTER, payload: { value, name } });
  };

  // console.log(state.filters);

  useEffect(() => {
    dispatch({ type: LOAD_FILTER_PRODUCT, payload: all_products });
  }, [all_products]);

  // console.log(state.short);
  const value = {
    ...state,
    set_list,
    set_grid,
    updeat_short,
    updeatFilter,
  };
  // console.log(state.filtered_products);
  return (
    <FilterContex.Provider value={value}>{children}</FilterContex.Provider>
  );
};

export const useFilterContex = () => {
  return useContext(FilterContex);
};
