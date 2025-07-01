class Product {
  initialproducts: TProduct[] = [
    {
      id: 0,
      name: "black jacket",
      price: 350.0,
      state: "new",
      image: "images/products/Main-product-list-1.jpg.png",
      type: "jacket",
      isLoading: true,
    },
    {
      id: 1,
      name: "leather jacket",
      price: 300.0,
      state: null,
      image: "images/products/Main-product-list-2.jpg.png",
      type: "jacket",
      isLoading: true,
    },
    {
      id: 2,
      name: "black outfit",
      price: { from: 180.0, to: 220.0 },
      state: "sale",
      image: "images/products/Main-product-list-3.jpg.png",
      type: "outfit",
      isLoading: true,
    },
    {
      id: 3,
      name: "t-shirt",
      price: 120.0,
      state: null,
      image: "images/products/Main-product-list-4.jpg.png",
      type: "t-shirt",
      isLoading: true,
    },
    {
      id: 4,
      name: "black vest",
      price: 85.0,
      state: null,
      image: "images/products/product-new-img-1.jpg.png",
      type: "vest",
      isLoading: true,
    },
    {
      id: 5,
      name: "otk boots",
      price: 270.0,
      state: null,
      image: "images/products/Main-product-list-6.jpg.png",
      type: "boots",
      isLoading: true,
    },
    {
      id: 6,
      name: "beige t-shirt",
      price: 60.0,
      state: "sold",
      image: "images/products/Main-product-list-7.jpg.png",
      type: "t-shirt",
      isLoading: true,
    },
    {
      id: 7,
      name: "black hat",
      price: 45.0,
      state: null,
      image: "images/products/Main-product-list-8.jpg.png",
      type: "hat",
      isLoading: true,
    },
  ];
  constructor() {}
  async getProducts() {
    for (let i = 0; i < this.initialproducts.length; i++) {
      try {
        const response = await fetch(this.initialproducts[i].image);
        if (response.ok) {
          const blob = await response.blob();
          this.initialproducts[i].image = URL.createObjectURL(blob);
          this.initialproducts[i].isLoading = false;
        } else {
          console.error(
            `Failed to fetch image: ${this.initialproducts[i].image}`
          );
        }
      } catch (error) {
        console.error(
          `Error fetching image: ${this.initialproducts[i].image}`,
          error
        );
      }
    }
    return this.initialproducts;
  }
}
export default Product;
