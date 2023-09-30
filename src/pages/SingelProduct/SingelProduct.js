import React, { useEffect } from "react";
import "./SingelProduct.scss";
import StarCompo from "../../components/StarCompo/StarCompo";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { useProductsContext } from "../../state/contex/ProductContex";
import Sp_Images from "../../components/Sp_Images/Sp_Images";
import AddToCart from "../../components/AddToCart/AddToCart";
const SingelProduct = () => {
  const { singel_products, loading, FetchingSingelproduct } =
    useProductsContext();
  const { id } = useParams();

  useEffect(() => {
    FetchingSingelproduct(id);
  }, [id]);

  // console.log(singel_products);
  const {
    name,
    category,
    colors,
    company,
    description,
    price,
    reviews,
    shipping,
    stars,
    stock,
    id: sku,
    images,
  } = singel_products;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <NavBar />
      <section className="singel_page">
        <div className="con">
          <div className="singel_page_con">
            <Sp_Images img={images} />
            <div className="SPtexT">
              <h1 className="SP_title">{name}</h1>
              <StarCompo reviews={reviews} stars={stars} />
              <p className="sp_price">{price}</p>
              <p className="dics">{description}</p>
              <ul className="SP_ul">
                <li className="Sp__li">
                  <h4>Available :</h4>
                  <span>{stock > 0 ? "in stock" : "not Available "}</span>
                </li>
                <li className="Sp__li">
                  <h4>SKU :</h4>
                  <span>{sku}</span>
                </li>
                <li className="Sp__li">
                  <h4>Brand :</h4>
                  <span>{company}</span>
                </li>
              </ul>
            </div>

            <AddToCart product={singel_products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingelProduct;
