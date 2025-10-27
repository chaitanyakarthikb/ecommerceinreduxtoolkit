import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const Search = () => {
  let categories = [
    "All",
    "Mobile",
    "Laptop",
    "Computer",
    "Accessories",
    "Watch",
  ];
  return (
    <Wrapper>
      <input placeholder="search" />
      <h3>Categories</h3>
      <div className="categories">
        {categories.map((el) => {
          return <p>{el}</p>;
        })}
      </div>
      <div className="price">
        <h3>Price Filter will come here</h3>
      </div>

      <div className="button">
        <Button>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .price {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .categories {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  input {
    margin-bottom: 2rem;
  }
`;

export default Search;
