import React from "react";
import styled from "styled-components";
import FormatPrice from "./FormatPrice";

const Product = (props) => {
  let { product } = props;
  let { images, title, price, category } = product;
  return (
    <Wrapper>
      <div className="card">
        <figure>
          <img src={images[0]} alt={category} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  
    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
      }
      &:hover::after {
        width: 100%;
      }
      &:hover img {
        transform: scale(1.2);
      }
      img {
        max-width: 90%;
        margin-top: 1rem;
        height: 20rem;
        transition: all 0.2s linear;
      }

      .caption {
        position: absolute;
        top: 15%;
        right: 10%;
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.helper};
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        border-radius: 2rem;
      }
    }

    .card {
      background-color: #fff;
      border-radius: 1rem;

      .card-data {
        padding: 0 2rem;
      }

      .card-data-flex {
        margin: 1rem 0;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        align-items: center;
      }

      h3 {
        color: ${({ theme }) => theme.colors.text};
        text-transform: capitalize;
      }

      .card-data--price {
        color: ${({ theme }) => theme.colors.helper};
      }

      .btn {
        margin: 2rem auto;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: rgb(98 84 243);
        }

        &:hover a {
          color: #fff;
        }
        a {
          color: rgb(98 84 243);
          font-size: 1.4rem;
        }
      }
`;

export default Product;
