import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import styled from "styled-components";
import FormatPrice from "./FormatPrice";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  filterProducts,
  setFilters,
  setInitialPrice,
} from "../Features/SortProductsSlice";

const Search = () => {
  const dispatch = useDispatch();
  let categories = ["All", "Furniture", "Fragrances", "Groceries", "Beauty"];

  const handlePriceChange = (e) => {
    dispatch(setFilters({ type: "PRICE", price: e.target.value }));
    dispatch(filterProducts());
  };

  const filterCategorySelected = useSelector(
    (state) => state.sortProducts.filters.category
  );

  const filteredPrice = useSelector(
    (state) => state.sortProducts.filters.price
  );
  const [val, setVal] = useState(0);
  let maxPrice;
  maxPrice = useSelector((state) => {
    let allProducts = state?.sortProducts?.all_products;
    maxPrice = allProducts[allProducts.length - 1]?.price;
    return maxPrice || 0;
  });
  useEffect(() => {
    setVal(maxPrice);
    dispatch(setInitialPrice(maxPrice));
  }, [maxPrice]);

  const handleCategorySelect = (el) => {
    let category = el.toLowerCase() === "all" ? "" : el;
    dispatch(setFilters({ type: "CATEGORY", category: category }));
    dispatch(filterProducts());
  };

  const handleInputChange = (e) => {
    let val = e.target.value;
    dispatch(setFilters({ type: "NAME", name: val }));
    dispatch(filterProducts());
  };

  const handleClearFilters = () => {
    dispatch(clearFilters(maxPrice));
  };

  return (
    <Wrapper>
      <input onChange={(e) => handleInputChange(e)} placeholder="search" />
      <h3>Categories</h3>
      <div className="categories">
        {categories.map((el) => {
          return (
            <p
              className={
                filterCategorySelected.toLowerCase() ===
                  el.toLocaleLowerCase() ||
                (filterCategorySelected.toLocaleLowerCase() === "" &&
                  el.toLocaleLowerCase() === "all")
                  ? "underline"
                  : ""
              }
              onClick={() => handleCategorySelect(el)}
            >
              {el}
            </p>
          );
        })}
      </div>
      <div className="price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={filteredPrice} />
        </p>
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={filteredPrice}
          onChange={(e) => handlePriceChange(e)}
        />
      </div>

      <div className="button">
        <Button onClick={() => handleClearFilters()}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .price {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  input {
    margin-top: 2rem;
  }

  .underline {
    text-decoration: underline;
  }

  .button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .categories {
    margin-top: 1rem;
    margin-bottom: 1rem;
    p {
      cursor: pointer;
    }
    p:hover {
      text-decoration: underline;
    }
  }
  input {
    margin-bottom: 2rem;
  }

  .price input {
    margin: 0.5rem 0 1rem 0;
    padding: 0;
    box-shadow: none;
    cursor: pointer;
  }
`;

export default Search;
