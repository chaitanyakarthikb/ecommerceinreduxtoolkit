import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems:[],
  totalPrice:0,
}
const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      let { id, quantity } = action.payload;

      const checkForId = (id) => {
        let items = [...state.cartItems];
        let item = items.find((el) => el.id === id);
        if (item) {
          return true;
        }
        return false;
      };

      const addItem = (id) => {
        let items = [...state.cartItems];
        items.map((item) => {
          if (item.id === id) {
            return (item.quantity = item.quantity + quantity);
          }
          return item;
        });
      };

      if (checkForId(id)) {
        addItem(id);
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      let id = action.payload;
      let products = [...state.cartItems];
      let temp = products.filter((el) => el.id !== id);
      state.cartItems = temp;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    toggleQuantity: (state, action) => {
      console.log(
        "====================action==================",
        action.payload
      );
      let { sign, id } = action.payload;
      let products = [];
      if (sign === "+") {
        products = [...state.cartItems];
        products.map((el) => {
          if (el.id === id) {
            return (el.quantity = el.quantity + 1);
          }
          return el;
        });
      } else {
        products = [...state.cartItems];
        let product = products.find((el) => el.id === id);
        if (product.quantity === 1) {
          products = products.filter((el) => el.id !== id);
        } else {
          products.map((el) => {
            if (el.id === id) {
              if (el.quantity === 1) {
                products.filter((el) => el.id !== id);
              } else {
                return (el.quantity = el.quantity - 1);
              }
            }
            return el;
          });
        }
      }
      state.cartItems = products;
    },
  },
  extraReducers: (builder) => {},
});

export const {addTocart,removeFromCart,clearCart,toggleQuantity} = cartsSlice.actions;
export default cartsSlice.reducer;