import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: { favorites: TProduct[] } = { favorites: [] };
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<TProduct>) => {
      state.favorites.push(action.payload);
    },
  },
});
export default favoriteSlice.reducer;
export const { addToFavorite } = favoriteSlice.actions;
