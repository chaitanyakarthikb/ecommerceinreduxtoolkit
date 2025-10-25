import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { Link } from "react-router-dom";

const FeaturedProducts = (props) => {
  let featuredProducts = props.featuredProducts || [];
  return (
    <Wrapper>
      <div id="featuredProducts" className="container">
        <div className="headings">
          <p id="check-now">Check Now!</p>
          <h2>Our Featured Services!</h2>
        </div>
        <div className="product--cards grid grid-three-column">
          {featuredProducts.map((el) => (
            <Link to={`/product/${el.id}`}>
              <Product product={el} />
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  margin-bottom: 10rem;

  h2 {
    font-weight: 700;
  }

  .container #check-now {
    font-size: 1.5rem;
    color: rgb(81, 56, 238);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .container {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .product--cards {
  }
`;

export default FeaturedProducts;
