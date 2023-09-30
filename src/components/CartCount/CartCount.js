import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartCount = ({ increase, decrease, count }) => {
  return (
    <div className="amount-btsn">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{count}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartCount;
