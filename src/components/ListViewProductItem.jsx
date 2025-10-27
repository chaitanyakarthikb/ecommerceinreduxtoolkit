import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import FormatPrice from "./FormatPrice";

const ListViewProductItem = (props) => {
  const { product } = props;
  let image = product.images[0];
  let { category, description, title, price } = product;
  return (
    <Wrapper>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div>
        <h3>{title}</h3>
        <p>
          <FormatPrice price={price} />
        </p>

        <p>{description}</p>
        <Button>Read More</Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  figure {
    width: 75%;
    img {
      width: 100%;
    }
  }
  border: solid 1px black;
  margin-top: 2rem;
  margin-bottom: 2rem;

  button {
    margin-top: 1rem;
  }
`;
export default ListViewProductItem;
