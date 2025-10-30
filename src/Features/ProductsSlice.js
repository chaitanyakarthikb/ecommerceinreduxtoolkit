import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  error: false,
  all_products: [],
  featuredProducts: [],
};

export const getProductThunk = createAsyncThunk(
  "products/fetchingProducts",
  async (data, { rejectWithValue }) => {
    let apiUrl = "https://dummyjson.com/products";
    try {
      const response = await axios.get(apiUrl);
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getFeaturedProductsLogic = (products=[]) => {
  let featuredProducts = [];
  featuredProducts = products.filter((el) => el.rating >= 4.5);
  return featuredProducts.slice(0, 3);
};

const productSlice = createSlice({
  name: "ProductsSlice",
  initialState,
  reducers: {
    getFeaturedProducts: (state) => {
      state.featuredProducts = getFeaturedProductsLogic(state.all_products);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.all_products = action.payload;
      })
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { getFeaturedProducts } = productSlice.actions;
export default productSlice.reducer;
