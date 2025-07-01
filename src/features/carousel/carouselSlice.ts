import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: { carousels: TCarousel[]; isLoading: boolean } = {
  carousels: [
    {
      id: 0,
      isLoading: true,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      title: "Mixed Textiles",
      image: "images/carousel/main-home-rev-5.jpg.png",
    },
    {
      id: 0,
      isLoading: true,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      title: "Mixed Textiles",
      image: "images/carousel/main-home-rev-5.jpg.png",
    },
    {
      id: 0,
      isLoading: true,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      title: "Mixed Textiles",
      image: "images/carousel/main-home-rev-5.jpg.png",
    },
  ],
  isLoading: false,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCarousels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCarousels.fulfilled, (state, action) => {
        if (action.payload) {
          state.carousels = action.payload;
          state.isLoading = false;
        }
      });
  },
});
export const fetchCarousels = createAsyncThunk(
  "mainCarousel/getMainProducts",
  async () => {
    const carousels = [
      {
        id: 0,
        isLoading: true,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        title: "Mixed Textiles",
        image: "images/carousel/main-home-rev-5.jpg.png",
      },
      {
        id: 0,
        isLoading: true,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        title: "Mixed Textiles",
        image: "images/carousel/main-home-rev-5.jpg.png",
      },
      {
        id: 0,
        isLoading: true,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        title: "Mixed Textiles",
        image: "images/carousel/main-home-rev-5.jpg.png",
      },
    ];
    let id = 0;
    try {
      for (const carousel of carousels) {
        carousel.id = id;
        id++;
        const response = await fetch(carousel.image);
        if (response.ok) {
          const blob = await response.blob();
          carousel.image = URL.createObjectURL(blob);
        }
      }
      return carousels;
    } catch (error) {
      console.log(error);
    }
  }
);
export default carouselSlice.reducer;
