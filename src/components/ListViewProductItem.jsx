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
      <div className="left">
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="right">
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
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .left {
    max-width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left figure {
    display: flex;
    justify-content: center;
  }

  .left figure img {
    width: 50%;
  }

  border: solid 1px black;
  margin-top: 2rem;
  margin-bottom: 2rem;

  button {
    margin-top: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 50vh;
    display: flex;
    text-align: center;
    flex-direction: column;

    align-items: center;

    .left figure img {
      width: 75%;
    }

    .left {
      max-width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default ListViewProductItem;
