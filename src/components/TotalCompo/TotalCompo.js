import React from "react";
import { useCartContex } from "../../state/contex/CartContex";

const TotalCompo = () => {
  const { total_amount, shipping_fee } = useCartContex();
  return (
    <div className="TotalCompo">
      <div className="TotalCompo__con">
        <div className="TotalCompo__top">
          <div className="TotalCompo__ubt">
            <h5 className="TotalCompo_subtotal">sub total:</h5>
            <h5 className="TotalCompo_subtotal"> ${total_amount}</h5>
          </div>
          <div className="TotalCompo__shiping">
            <span className="TotalCompo__swpw">Shipping Fee :</span>
            <span className="TotalCompo__swpw">${shipping_fee}</span>
          </div>
        </div>
        <div className="TotalCompo__underline"></div>
        <div className="TotalCompo__botom">
          <h1 className="TotalCompo__total">Order Total :</h1>
          <h1 className="TotalCompo__total">${total_amount + shipping_fee}</h1>
        </div>
      </div>
    </div>
  );
};

export default TotalCompo;
