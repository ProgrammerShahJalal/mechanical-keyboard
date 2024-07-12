import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/utils/interfaces";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      const availableStock = action.payload.availableQuantity || 0;

      if (item) {
        const newQuantity = item.quantity + action.payload.quantity;
        if (newQuantity <= availableStock) {
          item.quantity = newQuantity;
        } else {
          console.error("Cannot add more items than available stock");
        }
      } else {
        const newQuantity = action.payload.quantity || 1;
        if (newQuantity <= availableStock) {
          state.items.push({ ...action.payload, quantity: newQuantity });
        } else {
          console.error("Cannot add more items than available stock");
        }
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item._id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
