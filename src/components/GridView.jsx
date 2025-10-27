import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useSelector } from "react-redux";

const GridView = () => {
  let products = useSelector((state) => state.products.all_products);
  return (
    <Wrapper>
      <div className="container grid grid-three-column">
        {products?.map((el) => (
          <Product product={el} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

export default GridView;
