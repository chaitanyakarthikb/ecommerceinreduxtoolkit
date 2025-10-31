import React from "react";
import { MdOutlineFormatListBulleted, MdOutlineGridView } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrView, sortAccToPrice } from "../Features/SortProductsSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    dispatch(sortAccToPrice({ type: e.target.value }));
  };
  let totalProducts = useSelector(
    (state) => state.sortProducts.filtered_products
  );
  let currView = useSelector((state) => state.sortProducts.curr_view);

  return (
    <Wrapper>
      <div className="icons">
        <div className={currView === "grid_view" ? "active icon" : "icon"}>
          <MdOutlineGridView
            onClick={() => dispatch(setCurrView("grid_view"))}
          />
        </div>
        <div className={currView === "list_view" ? "active icon" : "icon"}>
          <MdOutlineFormatListBulleted
            onClick={() => dispatch(setCurrView("list_view"))}
          />
        </div>
      </div>
      <div className="totalProductsHeading">
        <h3>{totalProducts.length} Total Products</h3>
      </div>
      <div className="sortFilter">
        <select onChange={(e) => handleSelectChange(e)}>
          <option value={"lowest"}>Price (lowest)</option>
          <option value={"highest"}>Price (highest)</option>
          <option value={"a-z"}>Alphabetically (a-z)</option>
          <option value={"z-a"}>Alphabetically (z-a)</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  .icons {
    font-size: 3rem;
    display: flex;
    justify-content: space-between;
  }
  .icons .active {
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .icons .icon {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    .icons {
      margin-left: auto;
      margin-right: 5rem;
    }
  }
`;

export default Sort;
