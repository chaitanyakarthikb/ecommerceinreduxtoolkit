import productsReducer from '../Features/ProductsSlice.js';

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer:{
    products:productsReducer,
  }
}
)

export default store;