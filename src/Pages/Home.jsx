import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../Features/ProductsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const store = useSelector((state) => {
    console.log("=============state===========", state);
  });

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);
  return (
    <div>
      <h1>THis is my Home Page</h1>
    </div>
  );
};

export default Home;
