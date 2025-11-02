import { createSlice } from "@reduxjs/toolkit"
import { getProductThunk } from "./ProductsSlice";

const initialState = {
  curr_view : 'grid_view',
  all_products:[],
  filtered_products:[],
  filters:{
    name:'',
    category:'',
    price:0,
  }
}

const sortProductsSlice = createSlice({
  name: "SortProductsSlice",
  initialState,
  reducers: {
    setCurrView: (state, action) => {
      state.curr_view = action.payload;
    },
    clearFilters:(state,action)=>{
      state.filters={
        name:'',
        category:'',
        price:action.payload,
      }
      state.filtered_products=state.all_products;

    },
    setInitialPrice:(state,action)=>{
      state.filters.price=action.payload;
    },
    sortAccToPrice: (state, action) => {
      let products = [...state.filtered_products];
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
      state.filtered_products = sortedAccToPrice;
    },
    filterProducts: (state)=>{
      let tempProducts = state.all_products;
      let filteredProducts = tempProducts;
      let {name,category,price} = state.filters;
      if(name){
        filteredProducts = filteredProducts.filter((el)=> el.title.toLowerCase().includes(name.toLowerCase()));
      }
      if(category){
        filteredProducts = filteredProducts.filter((el)=> el.category.toLowerCase().includes(category.toLowerCase()));
      }
      if(price){
        filteredProducts = filteredProducts.filter((el)=>el.price<=price);
      }
      state.filtered_products=filteredProducts;
    },
    setFilters:(state,action)=>{
      switch(action.payload.type){
        case "PRICE":
          state.filters.price=action.payload.price;
          break;
        case "CATEGORY":
          state.filters.category = action.payload.category;
          break;
        case "NAME":
          state.filters.name = action.payload.name;
          break;
        default:
          return state;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductThunk.fulfilled, (state, action) => {
      let temp = [...action.payload];
      let products = temp.sort((a,b)=>a.price-b.price);
      state.sorted_and_filtered_products = products;
      state.all_products=products;
      state.filtered_products=products;
    });
  },
});

export const {setCurrView,sortAccToPrice,setInitialSortedAndFilteredProducts,setFilters,filterProducts,setInitialPrice,clearFilters} = sortProductsSlice.actions;
export default sortProductsSlice.reducer;