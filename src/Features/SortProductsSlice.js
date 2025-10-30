import { createSlice } from "@reduxjs/toolkit"
import { getProductThunk } from "./ProductsSlice";

const initialState = {
  curr_view : 'grid_view',
  sorted_and_filtered_products:[]
}

const sortProductsSlice = createSlice({
  name: "SortProductsSlice",
  initialState,
  reducers: {
    setCurrView: (state, action) => {
      state.curr_view = action.payload;
    },
    sortAccToPrice: (state, action) => {
      let products = state.sorted_and_filtered_products;
      let sortedAccToPrice;
      switch (action.payload.type) {
        case "lowest":
          sortedAccToPrice = products.sort((a, b) => a.price - b.price);
          break;
        case "highest":
          sortedAccToPrice = products.sort((a, b) => b.price - a.price);
          break;
        case "a-z":
          sortedAccToPrice = products.sort((a,b) => a.title.localeCompare(b.title));
          break;
        case "z-a":
          sortedAccToPrice = products.sort((a,b)=>b.title.localeCompare(a.title));
          break;
        default:
          return state;
      }
      state.sorted_and_filtered_products = sortedAccToPrice;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductThunk.fulfilled, (state, action) => {
      let temp = [...action.payload];
      let products = temp.sort((a,b)=>a.price-b.price);
      state.sorted_and_filtered_products = products;
    });
  },
});

export const {setCurrView,sortAccToPrice,setInitialSortedAndFilteredProducts} = sortProductsSlice.actions;
export default sortProductsSlice.reducer;