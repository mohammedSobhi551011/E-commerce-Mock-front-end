import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { products: TProduct[] } = { products: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push(action.payload);
    },
  },
});
export default cartSlice.reducer;
export const { addProduct } = cartSlice.actions;
