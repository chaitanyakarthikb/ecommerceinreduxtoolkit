import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductThunk } from "../Features/ProductsSlice";
import styled from "styled-components";
import Sort from "../components/Sort";
import AllProducts from "../components/AllProducts";
import Search from "../components/Search";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="container grid-filter-columns">
        <div className="searchSection">
          <Search />
        </div>
        <div className="productSection">
          <div className="sortSection">
            <Sort />
            <AllProducts />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-columns {
    display: grid;
    grid-template-columns: 25% 75%;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;

export default Products;
