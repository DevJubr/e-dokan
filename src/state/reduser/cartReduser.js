import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  TOGOL_CART,
  CLR_CRT,
  COUNT_CART_TOTALS,
} from "../../Const";

export const cartreduser = (state, action) => {
  const { type, payload } = action;
  if (type === ADD_TO_CART) {
    const { id, product, count, stock } = payload;
    //let tempCart = state.cart.find((i) => i.id === id)
    const newItem = {
      id: id,
      name: product.name,
      count,
      image: product.images[0].url,
      price: product.price,
      max: stock,
    };

    return { ...state, cart: [...state.cart, newItem] };
  }

  if (type === TOGOL_CART) {
    const { value, id } = payload;

    let tempCart = state.cart.map((ct) => {
      if (ct.id === id) {
        if (value === "inc") {
          let tempCount = ct.count + 1;
          if (tempCount > ct.max) {
            tempCount = ct.max;
          }
          return { ...ct, count: tempCount };
        }

        if (value === "dic") {
          let tempCount = ct.count - 1;
          if (tempCount < 1) {
            tempCount = 1;
          }
          return { ...ct, count: tempCount };
        }
      }

      return ct;
    });

    return { ...state, cart: tempCart };
  }

  if (type === DELETE_FROM_CART) {
    let tempCart = state.cart.filter((itm) => itm.id !== payload);
    return { ...state, cart: tempCart };
  }

  if (type === CLR_CRT) {
    return { ...state, cart: [] };
  }

  if (type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (acc, cartItem) => {
        console.log("acc", acc, "===", "cartItem", cartItem);
        const { count, price } = cartItem;

        acc.total_items += count;
        acc.total_amount += price * count;

        return acc;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    console.log(
      "total_items",
      total_items,
      "===",
      "total_amount",
      total_amount
    );
    return { ...state, total_items, total_amount };
  }

  throw new Error("hop beta");
};
