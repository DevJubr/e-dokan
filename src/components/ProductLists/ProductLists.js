import React from "react";
import "./ProductLists.scss";
import { useFilterContex } from "../../state/contex/FilterContex";
import Gird from "../Gird/Gird";
const ProductLists = () => {
  const { filtered_products, gird_view } = useFilterContex();
  // console.log(filtered_products);
  const product = filtered_products.map((filtered) => (
    <div key={filtered.id} className="aps">
      <Gird {...filtered} />
    </div>
  ));

  if (gird_view === false) {
    return <h1>list view</h1>;
  }
  return product;
};

export default ProductLists;
