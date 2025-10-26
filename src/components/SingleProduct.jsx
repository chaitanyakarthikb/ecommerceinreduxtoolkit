import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFeaturedProducts,
  getProductThunk,
} from "../Features/ProductsSlice";

const SingleProduct = () => {
  const params = useParams();
  let { id } = params;
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);
  let { all_products } = store;
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);
  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [all_products]);

  let product = all_products.filter((el) => el.id === Number(id));

  return (
    <div>{product ? <h1>{product[0]?.category}</h1> : <h1>Loading...</h1>}</div>
  );
};

export default SingleProduct;
