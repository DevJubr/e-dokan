import {
  LOAD_FILTER_PRODUCT,
  SET_GRID_VIEV,
  SET_LIST_VIEV,
  UPDEAT_SHORT,
  SORT_PRODUCTS,
  UPDEATE_FILTER,
  FILTER_PRODUCTS,
} from "../../Const";

const FilterReduser = (state, action) => {
  const { type, payload } = action;

  if (type === LOAD_FILTER_PRODUCT) {
    let maxPrice = payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      filter_all_products: [...payload],
      filtered_products: [...payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (type === SET_GRID_VIEV) {
    return {
      ...state,
      gird_view: true,
    };
  }
  if (type === SET_LIST_VIEV) {
    return {
      ...state,
      gird_view: false,
    };
  }
  if (type === UPDEAT_SHORT) {
    return {
      ...state,
      short: payload,
    };
  }

  if (type === SORT_PRODUCTS) {
    const { filtered_products, short } = state;
    let tempProducts = [...filtered_products];

    if (short === "a_to_z") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      if (short === "z_to_a") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
    }
    if (short === "price_lTH") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (short === "price_hTl") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    return { ...state, filtered_products: tempProducts };
  }

  if (type === UPDEATE_FILTER) {
    const { name, value } = payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (type === FILTER_PRODUCTS) {
    const { filter_all_products } = state;

    const { search_text, company, category, color, price, shipping } =
      state.filters;

    let tempProducts = [...filter_all_products];

    if (search_text) {
      tempProducts = tempProducts.filter((pd) =>
        pd.name.toLowerCase().startsWith(search_text)
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter((pd) => pd.company === company);
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter((pd) => pd.category === category);
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((pd) => {
        return pd.colors.find((c) => c === color);
      });
    }
    tempProducts = tempProducts.filter((pd) => pd.price <= price);

    if (shipping) {
      tempProducts = tempProducts.filter((pd) => pd.shipping === true);
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default FilterReduser;
