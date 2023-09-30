import React, { useState } from "react";
import GTP from "../GTP/GTP";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./AddToCart.scss";
import { Link } from "react-router-dom";
import { useCartContex } from "../../state/contex/CartContex";

const AddToCart = ({ product }) => {
  const { addtocart } = useCartContex();
  const { colors, id, stock } = product;
  // const [mainColor, setmainColor] = useState(colors[0]);
  const [count, setcount] = useState(1);

  const incre = () => {
    setcount((old) => {
      let temp = old + 1;
      if (temp > stock) {
        temp = stock;
      }
      return temp;
    });
  };

  const dicre = () => {
    setcount((old) => {
      let temp = old - 1;
      if (temp <= 0) {
        temp = 1;
      }
      return temp;
    });
  };

  return (
    <article className="AddToCart">
      {/* <div className="AddToCart__color">
        {colors.map((c, i) => {
          return (
            <button
              className="AddToCart_color_btn"
              key={i}
              style={{ background: c }}
              onClick={() => setmainColor(c)}
            ></button>
          );
        })}
      </div> */}
      <div className="AddToCart__counter">
        <AiOutlineMinus onClick={dicre} />
        <p className="AddToCart_count_num">{count}</p>
        <AiOutlinePlus onClick={incre} />
      </div>
      <button className="atc">
        <Link to={`/cart`} onClick={() => addtocart(id, stock, product, count)}>
          add to cart{" "}
        </Link>
      </button>
    </article>
  );
};

export default AddToCart;
