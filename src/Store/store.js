import productsReducer from '../Features/ProductsSlice.js';
import sortProductsReducer from '../Features/SortProductsSlice.js';

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer:{
    products:productsReducer,
    sortProducts: sortProductsReducer,
  }
}
)

export default store;