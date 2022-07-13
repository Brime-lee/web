import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemExists = state?.find((item) => item._id === action.payload._id);
      if (itemExists) {
        itemExists.count++;
      } else {
        let tempProductItem = { ...action.payload, count: 1 };
        state.push(tempProductItem);
      }
    },

    addQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },

    subQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addItemToCart, addQuantity, subQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
