import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  curr_view : 'grid_view',
}

const sortProductsSlice = createSlice({
  name:'SortProductsSlice',
  initialState,
  reducers:{
    setCurrView :(state,action)=>{
      state.curr_view = action.payload;
    }
  }
})

export const {setCurrView} = sortProductsSlice.actions;
export default sortProductsSlice.reducer;