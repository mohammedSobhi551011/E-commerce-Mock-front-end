import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: { products: TProduct[]; isLoading: boolean } = {
  isLoading: false,
  products: [
    {
      id: 0,
      name: "black jacket",
      price: 350.0,
      state: "new",
      image: "images/products/Main-product-list-1.jpg.png",
      type: "jacket",
    },
    {
      id: 1,
      name: "leather jacket",
      price: 300.0,
      state: null,
      image: "images/products/Main-product-list-2.jpg.png",
      type: "jacket",
    },
    {
      id: 2,
      name: "black outfit",
      price: { from: 180.0, to: 220.0 },
      state: "sale",
      image: "images/products/Main-product-list-3.jpg.png",
      type: "outfit",
    },
    {
      id: 3,
      name: "t-shirt",
      price: 120.0,
      state: null,
      image: "images/products/Main-product-list-4.jpg.png",
      type: "t-shirt",
    },
    {
      id: 4,
      name: "black vest",
      price: 85.0,
      state: null,
      image: "images/products/product-new-img-1.jpg.png",
      type: "vest",
    },
    {
      id: 5,
      name: "otk boots",
      price: 270.0,
      state: null,
      image: "images/products/Main-product-list-6.jpg.png",
      type: "boots",
    },
    {
      id: 6,
      name: "beige t-shirt",
      price: 60.0,
      state: "sold",
      image: "images/products/Main-product-list-7.jpg.png",
      type: "t-shirt",
    },
    {
      id: 7,
      name: "black hat",
      price: 45.0,
      state: null,
      image: "images/products/Main-product-list-8.jpg.png",
      type: "hat",
    },
  ],
};
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
          state.isLoading = false;
        }
      });
  },
});
const fetchProducts = createAsyncThunk("product/getProducts", async () => {
  const products: TProduct[] = [
    {
      id: 0,
      name: "black jacket",
      price: 350.0,
      state: "new",
      image: "images/products/Main-product-list-1.jpg.png",
      type: "jacket",
    },
    {
      id: 1,
      name: "leather jacket",
      price: 300.0,
      state: null,
      image: "images/products/Main-product-list-2.jpg.png",
      type: "jacket",
    },
    {
      id: 2,
      name: "black outfit",
      price: { from: 180.0, to: 220.0 },
      state: "sale",
      image: "images/products/Main-product-list-3.jpg.png",
      type: "outfit",
    },
    {
      id: 3,
      name: "t-shirt",
      price: 120.0,
      state: null,
      image: "images/products/Main-product-list-4.jpg.png",
      type: "t-shirt",
    },
    {
      id: 4,
      name: "black vest",
      price: 85.0,
      state: null,
      image: "images/products/product-new-img-1.jpg.png",
      type: "vest",
    },
    {
      id: 5,
      name: "otk boots",
      price: 270.0,
      state: null,
      image: "images/products/Main-product-list-6.jpg.png",
      type: "boots",
    },
    {
      id: 6,
      name: "beige t-shirt",
      price: 60.0,
      state: "sold",
      image: "images/products/Main-product-list-7.jpg.png",
      type: "t-shirt",
    },
    {
      id: 7,
      name: "black hat",
      price: 45.0,
      state: null,
      image: "images/products/Main-product-list-8.jpg.png",
      type: "hat",
    },
  ];
  try {
    for (const product of products) {
      const response = await fetch(product.image);
      if (response.ok) {
        const blob = await response.blob();
        product.image = URL.createObjectURL(blob);
      }
    }
    return products;
  } catch (error) {
    console.log(error);
  }
});
export default productSlice.reducer;
