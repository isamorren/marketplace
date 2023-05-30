import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    id: string | number;
    name: string;
    image: string;
    info: string;
}

const initialState: CartState[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {},
    removeToCart: (state, action: PayloadAction<CartState>) => {},
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = cartSlice.actions;
