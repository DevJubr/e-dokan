import React from "react";
import FeaturedProducts from "../../components/Featured Products/FeaturedProducts";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import { useProductsContext } from "../../state/contex/ProductContex";
import Jong from "../../components/Jong/Jong";
import FotterCompo from "../../components/FotterCompo/FotterCompo";

const Home = () => {
  const { loading } = useProductsContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <HeroComponent />
      <FeaturedProducts />
      <Jong />
      <FotterCompo />
    </>
  );
};

export default Home;
