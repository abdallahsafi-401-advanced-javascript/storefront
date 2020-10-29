import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct(state, action) {
      let exist = state.cart.find((e) => {
        return e._id === action.payload._id;
      });
      if (!exist && action.payload.inStock > 0) {
        state.cart.push(action.payload);
      }
    },
    deleteProduct(state, action) {
      state.cart.splice(state.cart.indexOf(action.payload), 1);
      // cart = [...cart];
      // return { cart };
    },
  },
});


export const { addProduct, deleteProduct } = cart.actions;

export default cart.reducer;
