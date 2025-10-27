import React from "react";
import ListViewProductItem from "./ListViewProductItem";

const ListView = (props) => {
  const { products } = props;
  return (
    <div>
      {products?.map((item) => (
        <ListViewProductItem product={item} />
      ))}
    </div>
  );
};

export default ListView;
