import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./features/carousel/carouselSlice";
import productSlice from "./features/product/productSlice";
import cartSlice from "./features/cart/cartSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";
export const store = configureStore({
  reducer: {
    carousel: carouselSlice,
    product: productSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
