import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../Features/ProductsSlice";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const dispatch = useDispatch();

  const store = useSelector((state) => {
    console.log("=============state===========", state);
  });

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);
  return (
    <Wrapper>
      <HeroSection />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 450px;
  padding: 0rem 5rem;

  .hero--section--img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content--container h1 {
    margin-top: 0;
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
