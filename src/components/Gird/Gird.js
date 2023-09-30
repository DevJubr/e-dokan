import React from "react";
import { Link } from "react-router-dom";
import "./Gird.scss";
const Gird = ({ name, price, id, image }) => {
  return (
    <>
      <div className="Gird__Product">
        <div className="Gird__Product__img__and__view">
          <div className="Gird__Product__img">
            <img src={image} alt={name} />
          </div>
          <button className="Gird__Product__view">
            <Link to={`/product/${id}`}>deteles</Link>
          </button>
        </div>

        <div className="Gird__Product__name__and__price">
          <h4 className="Gird__Product_name">{name}</h4>
          <p className="Gird__Product__price">{price}</p>
        </div>
      </div>
    </>
  );
};

export default Gird;
