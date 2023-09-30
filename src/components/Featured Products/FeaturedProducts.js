import React from "react";
import GTP from "../GTP/GTP";
import Gird from "../Gird/Gird";
import "./FeaturedProducts.scss";
import { useProductsContext } from "../../state/contex/ProductContex";
const FeaturedProducts = () => {
  const { future_product } = useProductsContext();
  return (
    <>
      <section className="future">
        <div className="con">
          <div className="future__contenar">
            <header className="future__tittle">future products</header>

            <main className="future__main">
              <div className="future__main__contenar">
                {future_product.map((future) => {
                  return (
                    <div className="future__singel" key={future.id}>
                      <Gird {...future} />
                    </div>
                  );
                })}
              </div>
            </main>

            <GTP text={"all products"} loc={"products"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
