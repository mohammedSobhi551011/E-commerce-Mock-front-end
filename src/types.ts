// ----- MAIN TYPES ------ //
type TChild = {
  children: React.ReactNode;
};
// ----- MAIN TYPES ------ //

// ----- CAROUSEL TYPES ------ //
type TCarousel = {
  id: number;
  image: string;
  body: string;
  title: string;
  isLoading: boolean;
};
interface ICarouselProps {
  carousels: TCarousel[];
}
// ----- CAROUSEL TYPES ------ //

// ----- PRODUCTS TYPES ------ //
type TProduct = {
  id: number;
  name: string;
  price: number | { from: number; to: number };
  image: string;
  state: "new" | "sale" | "sold" | null;
  type: "jacket" | "outfit" | "t-shirt" | "vest" | "boots" | "hat";
};
interface IProductsListProps {
  products: TProduct[];
}
// ----- PRODUCTS TYPES ------ //

// ----- BLOGPOSTS TYPES ------ //
type TBlogPost = {
  id: number;
  image: string;
  title: string;
  createdAt: string;
};
interface IBlogPostProps {
  blogPost: TBlogPost;
  type: "small" | "large";
}
interface IBlogPostsProps {
  blogPosts: TBlogPost[];
}
// ----- BLOGPOSTS TYPES ------ //
