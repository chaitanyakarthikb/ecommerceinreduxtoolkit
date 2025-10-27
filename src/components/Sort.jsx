import React from "react";
import { MdOutlineFormatListBulleted, MdOutlineGridView } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCurrView } from "../Features/SortProductsSlice";

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="icons">
        <div className="icon">
          <MdOutlineGridView
            onClick={() => dispatch(setCurrView("grid_view"))}
          />
        </div>
        <div className="icon">
          <MdOutlineFormatListBulleted
            onClick={() => dispatch(setCurrView("list_view"))}
          />
        </div>
      </div>
      <div className="totalProductsHeading">
        <h3>12 Total Products</h3>
      </div>
      <div className="sortFilter">
        <select>
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
  .icons .icon {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
  }
`;

export default Sort;
