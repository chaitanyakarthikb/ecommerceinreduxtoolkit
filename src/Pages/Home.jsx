import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedProducts,
  getProductThunk,
} from "../Features/ProductsSlice";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import DetailsSection from "../components/DetailsSection";
import TrustedSection from "../components/TrustedSection";

const Home = () => {
  const dispatch = useDispatch();
  const all_products = useSelector((state) => state.products.all_products);
  const featuredProducts = useSelector(
    (state) => state.products.featuredProducts
  );
  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [all_products, dispatch]);

  return (
    <Wrapper>
      <HeroSection heading={"𝓑𝓪𝓼𝓿𝓪 𝓢𝓽𝓸𝓻𝓮"} />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <DetailsSection />
      <TrustedSection />
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  min-height: 450px;
  // padding: 0rem 0rem;
  overflow: hidden;

  .hero--section--img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #featuredProducts {
    width: 100%;
  }

  .content--container h1 {
    margin-top: 0;
    margin-bottom: 15px;
    line-height: 55px;
  }

  #content--welcome {
    font-size: 2rem;
    color: rgb(81, 56, 238);
    text-transform: uppercase;
  }

  .hero--section--img img {
    width: 75%;
  }

  .container {
    margin-top: 15rem;
  }

  #content--para {
    margin-bottom: 2rem;
  }
`;

export default Home;
