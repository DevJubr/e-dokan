import {
  LOADING,
  GET_ALL_PRODUCTS,
  END_LOADING,
  SINGEL_PRODUCT_PROS,
} from "../../Const";

const products_reducer = (state, action) => {
  const { type, payload } = action;

  if (type === LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === END_LOADING) {
    return {
      ...state,
      loading: false,
    };
  }

  if (type === GET_ALL_PRODUCTS) {
    let temp_future = payload;
    const filter_future_products = temp_future.filter(
      (future) => future.featured === true
    );
    return {
      ...state,
      all_products: payload,
      future_product: filter_future_products,
    };
  }

  if (SINGEL_PRODUCT_PROS) {
    return {
      ...state,
      singel_products: payload,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
