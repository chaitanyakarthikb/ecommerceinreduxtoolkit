import productsReducer from '../Features/ProductsSlice.js';
import sortProductsReducer from '../Features/SortProductsSlice.js';
import cartReducer from '../Features/CartsSlice.js';
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer:{
    products:productsReducer,
    sortProducts: sortProductsReducer,
    cart: cartReducer,
  }
}
)

export default store;