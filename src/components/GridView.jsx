import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const GridView = (props) => {
  let products = props.products;
  return (
    <Wrapper>
      <div className="container grid grid-three-column">
        {products?.map((el) => (
          <Link to={`/product/${el.id}`}>
            <Product product={el} />
          </Link>
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
