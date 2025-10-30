import React, { useEffect } from "react";
import GridView from "./GridView";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../Features/ProductsSlice";
import ListView from "./ListView";
import {
  setInitialSortedAndFilteredProducts,
  sortAccToPrice,
} from "../Features/SortProductsSlice";

const AllProducts = () => {
  const sortedAndFilteredProducts = useSelector(
    (state) => state.sortProducts.sorted_and_filtered_products
  );
  const sortProducts = useSelector((state) => state.sortProducts.curr_view);
  return (
    <div>
      {sortProducts === "grid_view" ? (
        <GridView products={sortedAndFilteredProducts} />
      ) : (
        <ListView products={sortedAndFilteredProducts} />
      )}
    </div>
  );
};

export default AllProducts;
