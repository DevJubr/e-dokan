import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import FilterCompo from "../../components/FilterCompo/FilterCompo";
import Short from "../../components/Short/Short";
import ProductLists from "../../components/ProductLists/ProductLists";
import "./ProductsPage.scss";
import { useProductsContext } from "../../state/contex/ProductContex";
const ProductsPage = () => {
  const { loading } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <NavBar />
      <section className="Products__page__contents">
        <div className="con">
          <div className="Products__page__contents__con">
            <FilterCompo />
            <div className="products__and__short">
              <Short />
              <div className="products__all_singel">
                <ProductLists />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
