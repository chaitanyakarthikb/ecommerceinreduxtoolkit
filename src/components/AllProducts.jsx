import React, { useEffect } from "react";
import GridView from "./GridView";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../Features/ProductsSlice";
import ListView from "./ListView";

const AllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const products = useSelector((state) => state.products.all_products);
  const sortProducts = useSelector((state) => state.sortProducts.curr_view);
  return (
    <div>
      {sortProducts === "grid_view" ? (
        <GridView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </div>
  );
};

export default AllProducts;
