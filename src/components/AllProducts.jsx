import GridView from "./GridView";
import { useSelector } from "react-redux";
import ListView from "./ListView";

const AllProducts = () => {
  const sortedAndFilteredProducts = useSelector(
    (state) => state.sortProducts.filtered_products
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
