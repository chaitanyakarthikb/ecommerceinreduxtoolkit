import axios from "axios";
// import { data } from "react-router-dom";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading:false,
  error:false,
  all_products:[],
}

export const getProductThunk = createAsyncThunk(
  "products/fetchingProducts",
  async(data,{rejectWithValue})=>{
    let apiUrl = 'https://dummyjson.com/products';
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

const productSlice = createSlice({
  name:"ProductsSlice",
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
        .addCase(getProductThunk.fulfilled, (state,action)=>{
          state.loading = false;
          state.all_products = action.payload.products;
        })
        .addCase(getProductThunk.pending, (state)=>{
          state.loading = true;
        })
        .addCase(getProductThunk.rejected,(state,action)=>{
          state.loading = false;
          state.error = true;
        })
  }
})

export default productSlice.reducer;