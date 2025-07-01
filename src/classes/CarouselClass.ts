class Carousel {
  private urls: string[] = [
    "/images/carousel/main-home-rev-5.jpg.png",
    "/images/carousel/main-home-rev-5.jpg.png",
    "/images/carousel/main-home-rev-5.jpg.png",
  ];
  constructor() {}
  async getCarousels() {
    let fetchedCarousels: TCarousel[] = [
      { body: "", id: 0, image: "", isLoading: true, title: "" },
    ];
    for (let i = 0; i < this.urls.length; i++) {
      try {
        const response = await fetch(this.urls[i]);
        if (response.ok) {
          const blob = await response.blob();
          fetchedCarousels[i] = {
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit vero in.",
            id: i,
            image: URL.createObjectURL(blob),
            title: "Mixed Textiles",
            isLoading: false,
          };
        } else {
          console.error(`Failed to fetch image: ${this.urls[i]}`);
        }
      } catch (error) {
        console.error(`Error fetching image: ${this.urls[i]}`, error);
      }
    }
    return fetchedCarousels;
  }
}
export default Carousel;
