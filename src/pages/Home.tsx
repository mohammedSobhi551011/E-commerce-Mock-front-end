import { useEffect, useState } from "react";
import {
  HomeMainCarousel,
  HomeSecondCarousel,
} from "../components/variances/Carousels";
import { Typography } from "@material-tailwind/react";
import ProductsList from "../components/main/ProductsList";
import { RxCross2 } from "react-icons/rx";
import { ShopCollectionBtn } from "../components/variances/Buttons";
import { EmailInput } from "../components/variances/FormElements";
import BlogPosts from "../components/main/BlogPosts";

// ----- CLASSES -----//
import Carousel from "../classes/CarouselClass";
import Product from "../classes/ProductClass";
import BlogPost from "../classes/BlogPostClass";
// ----- CLASSES -----//

const Home = () => {
  const [appState, setAppState] = useState<{
    carousels: TCarousel[];
    products: TProduct[];
    blogPosts: TBlogPost[];
  }>({
    carousels: [],
    products: [],
    blogPosts: [],
  });

  useEffect(() => {
    const carousel = new Carousel();
    const product = new Product();
    const blogPost = new BlogPost();
    product
      .getProducts()
      .then((products) => setAppState({ ...appState, products: products }));
    carousel
      .getCarousels()
      .then((carousels) => setAppState({ ...appState, carousels: carousels }));
    blogPost
      .getBlogPosts()
      .then((blogPosts) => setAppState({ ...appState, blogPosts: blogPosts }));
  }, []);

  return (
    <main className="w-full flex flex-col items-center font-noto-sans">
      <HomeMainCarousel />

      <div className="flex flex-col items-center w-[85%]">
        {/* ----- SECTION 2 ----- */}
        <div className="w-[90%] my-12 sm:w-[75%] md:w-[60%] md:my-20 lg:w-[50%] lg:my-24">
          <p className=" text-center font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>

        {/* ----- PRODUCTS LIST */}
        <ProductsList />
        {/* ----- PRODUCTS LIST */}

        {/* ----- SECTION 2 ----- */}
      </div>

      {/* ----- SECTION 3 ----- */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-20">
          <div className="relative">
            <img
              src="../../images/collections/main-home-category-img-4.jpg.png"
              className="outline outline-1 outline-black pointer-events-none"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-2/4 -translate-x-2/4 flex flex-col  items-center gap-y-5">
              <Typography variant="h3" className="font-noto-sans font-medium">
                MEN
              </Typography>
              <ShopCollectionBtn />
            </div>
          </div>
          <div className="relative">
            <img
              src="../../images/collections/main-home-category-img-5.jpg.png"
              className="outline outline-1 outline-black pointer-events-none"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-2/4 -translate-x-2/4 flex flex-col  items-center gap-y-5">
              <Typography variant="h3" className="font-noto-sans font-medium">
                WOMEN
              </Typography>
              <ShopCollectionBtn />
            </div>
          </div>
        </div>
      </div>
      {/* ----- SECTION 3 ----- */}

      {/* ----- SECTION 4 ----- */}
      <div className="w-[85%]">
        <HomeSecondCarousel />
        {/* ----- SECTION 4 ----- */}

        {/* ----- SECTION 5 ----- */}
        <div className=" relative outline outline-1 outline-black mb-20">
          <img
            src="../../images/div.elementor-background-overlay.png"
            className="pointer-events-none"
          />
          <div className="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-3 sm:gap-y-4 md:gap-y-5 lg:gap-y-5">
            <div className="flex items-center">
              <Typography
                variant="h2"
                color="white"
                className="font-noto-sans font-normal text-xl sm:text-2xl md:text-4xl lg:text-5xl"
              >
                ONYX
              </Typography>
              <RxCross2 className="text-white" />
              <Typography
                variant="h2"
                color="white"
                className="font-noto-sans font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                THE FLOW
              </Typography>
            </div>
            <Typography
              variant="small"
              color="white"
              className="underline font-noto-sans text-[0.5rem] lg:text-sm"
            >
              <a href="#">Read More</a>
            </Typography>
          </div>
        </div>
        {/* ----- SECTION 5 ----- */}

        {/* ----- SECTION 6 ----- */}
        <BlogPosts blogPosts={appState.blogPosts} />
        {/* ----- SECTION 6 ----- */}
      </div>
      {/* ----- SECTION 7 ----- */}
      <div className="w-full mb-20 relative hidden md:block lg:block">
        <img
          src="../../images/section.elementor-section.png"
          className="pointer-events-none"
        />
        <div className="w-[30%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-4">
          <Typography
            variant="h4"
            className="font-normal font-noto-sans text-center md:text-base"
          >
            Sign up to our newsletter for all the latest news & discounts.
          </Typography>
          <EmailInput />
        </div>
      </div>
      {/* ----- SECTION 7 ----- */}

      {/* ----- SECTION 8 ----- */}
      <div className="w-[85%] flex flex-col gap-y-5 sm:flex-row md:flex-row lg:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-36 mb-20 ">
        <div className="flex md:gap-x-10 lg:gap-x-10 sm:gap-x-5 gap-x-2">
          <div className="w-1/2">
            <img
              src="../../images/artists/main-home-image-4-1.jpg.png"
              alt=""
            />
          </div>
          <div className="w-1/2 sm:translate-y-20 sm:rotate-6 md:translate-y-20 md:rotate-6 lg:translate-y-20 lg:rotate-6">
            <img src="../../images/artists/div.qodef-m-image.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 justify-center">
          <Typography
            variant="h4"
            className="font-noto-sans font-normal text-start md:w-[75%] lg:w-[60%] lg:text-2xl md:text-xl sm:text-base"
          >
            Meet The Artists Behind The Corsen Maria & Sophia
          </Typography>
          <Typography
            variant="small"
            className="font-noto-sans font-normal text-start md:w-[85%] lg:w-[80%] md:text-sm sm:text-xs"
          >
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </Typography>
          <div>
            <ShopCollectionBtn />
          </div>
        </div>
      </div>
      {/* ----- SECTION 8 ----- */}

      {/* ----- SECTION 9 ----- */}
      <div className="w-[85%] flex flex-col gap-y-1 mb-4">
        <Typography
          variant="h5"
          className="font-normal font-noto-sans text-start w-[60%]"
        >
          Instagram
        </Typography>
        <Typography
          variant="small"
          className="text-[0.8rem] font-normal font-noto-sans text-start w-[60%]"
        >
          Follow us on @qodeinteractive
        </Typography>
      </div>
      <div className="overflow-x-scroll w-full relative mb-12">
        <div className="flex items-center gap-x-5 w-fit">
          <a
            href="#"
            className="w-[230px] h-[230px]"
            style={{
              backgroundImage:
                "url('../../images/instagram/div.qodef-e (6).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
          <a
            href="#"
            className="w-[230px] h-[230px]"
            style={{
              backgroundImage: "url('../../images/instagram/div.qodef-e.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
          <a
            href="#"
            className="w-[230px] h-[230px]"
            style={{
              backgroundImage:
                "url('../../images/instagram/div.qodef-e (1).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
          <a
            href="#"
            className="w-[230px] h-[230px]"
            style={{
              backgroundImage:
                "url('../../images/instagram/div.qodef-e (2).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
          <a
            href="#"
            className="w-[230px] h-[230px]"
            style={{
              backgroundImage:
                "url('../../images/instagram/div.qodef-e (3).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
          <a
            href="#"
            className="w-[230px] h-[230px]"
            style={{
              backgroundImage:
                "url('../../images/instagram/div.qodef-e (4).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
          <a
            href="#"
            className="w-[230px] h-[230px]"
            style={{
              backgroundImage:
                "url('../../images/instagram/div.qodef-e (5).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </div>
      </div>
      {/* ----- SECTION 9 ----- */}

      {/* ----- SECTION 10 ----- */}
      <div className="grid grid-cols-4 mb-8 lg:mb-12 w-full">
        <div className="py-4 md:py-6 lg:py-8 flex flex-row gap-x-2 justify-center items-center px-2 lg:px-20 outline outline-1 outline-gray-800">
          <svg
            width="25"
            height="7"
            viewBox="0 0 25 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_5974)">
              <path
                d="M24.4024 1.1875H13.3574V0.1875H24.4024V1.1875Z"
                fill="black"
              />
              <path
                d="M24.4028 6.6875H0.59375V5.6875H24.4028V6.6875Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_5974">
                <rect
                  width="24"
                  height="6.5"
                  fill="white"
                  transform="translate(0.59375 0.1875)"
                />
              </clipPath>
            </defs>
          </svg>
          <Typography
            variant="small"
            className="font-noto-sans font-normal text-[0.6rem]"
          >
            FAST DELIVERY
          </Typography>
        </div>
        <div className="py-4 md:py-6 lg:py-8 flex flex-row gap-x-2 justify-center items-center px-2 lg:px-20 outline outline-1 outline-gray-800">
          <svg
            width="36"
            height="12"
            viewBox="0 0 36 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_5982)">
              <path
                d="M30.6688 1.18608H12.9688V0.1875H30.6688V1.18608Z"
                fill="black"
              />
              <path
                d="M30.8236 8.01941H0.892578V7.02084H30.6986C31.6567 7.06085 32.5976 6.75849 33.3526 6.16805C33.618 5.89846 33.8239 5.57627 33.9569 5.22228C34.0898 4.8683 34.147 4.4904 34.1246 4.11298C34.1459 3.73884 34.0881 3.3644 33.9551 3.01398C33.8221 2.66355 33.6169 2.34496 33.3526 2.07889C32.5663 1.46751 31.5882 1.15469 30.5926 1.19615L30.5346 0.19757C31.8034 0.140826 33.0488 0.551248 34.0346 1.35092C34.7336 2.10598 35.1214 3.09669 35.1204 4.12495C35.1195 5.1532 34.7299 6.14321 34.0296 6.89701C33.1304 7.64315 31.9925 8.04152 30.8236 8.01941Z"
                fill="black"
              />
              <path
                d="M4.5155 4.60736L1.6015 7.51621L4.5155 10.4251L3.8085 11.1311L0.1875 7.51621L3.8085 3.90137L4.5155 4.60736Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_5982">
                <rect
                  width="35"
                  height="10.9375"
                  fill="white"
                  transform="translate(0.1875 0.1875)"
                />
              </clipPath>
            </defs>
          </svg>
          <Typography
            variant="small"
            className="font-noto-sans font-normal text-[0.6rem]"
          >
            FREE RETURNS
          </Typography>
        </div>
        <div className="py-4 md:py-6 lg:py-8 flex flex-row gap-x-2 justify-center items-center px-2 lg:px-20 outline outline-1 outline-gray-800">
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_5991)">
              <path
                d="M7.00581 0.25L7.30581 0.439814C8.15497 0.959374 9.05454 1.39182 9.99081 1.73055C10.9802 2.05185 11.9972 2.28094 13.0288 2.41488L13.3798 2.45684L13.4578 2.8015C13.4998 2.98732 14.4748 7.397 12.9378 10.6998C11.4008 14.0025 7.42881 16.0026 7.25981 16.0855L7.03381 16.1974L6.80881 16.0825C6.64581 15.9996 2.79181 13.9985 1.25481 10.6998C-0.282195 7.401 0.577805 2.99931 0.614805 2.81349L0.686805 2.45184L1.05381 2.41388C2.17125 2.29245 3.27435 2.06361 4.34781 1.73055C5.19896 1.4318 6.00027 1.00679 6.72481 0.469785L7.00581 0.25ZM12.5478 3.35696C11.5686 3.21311 10.6036 2.98481 9.66381 2.67463C8.76132 2.35149 7.8909 1.94513 7.06381 1.46081C6.32515 1.96932 5.52212 2.3775 4.67581 2.67463C3.65312 3.00069 2.60224 3.23079 1.53681 3.36195C1.37381 4.44389 1.00281 7.78962 2.16181 10.2772C3.35181 12.8317 6.21781 14.601 7.04081 15.0725C7.88181 14.6079 10.8408 12.8377 12.0308 10.2772C13.1948 7.78263 12.7348 4.41992 12.5478 3.35696Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_5991">
                <rect
                  width="14"
                  height="15.9375"
                  fill="white"
                  transform="translate(0.34375 0.25)"
                />
              </clipPath>
            </defs>
          </svg>
          <Typography
            variant="small"
            className="font-noto-sans font-normal text-[0.6rem]"
          >
            SECURE CHECKOUT
          </Typography>
        </div>
        <div className="py-4 md:py-6 lg:py-8 flex flex-row gap-x-2 justify-center items-center px-2 lg:px-20 outline outline-1 outline-gray-800">
          <svg
            width="31"
            height="6"
            viewBox="0 0 31 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_5997)">
              <path
                d="M26.1117 3.18652H0.84375V2.18652H26.1117V3.18652Z"
                fill="black"
              />
              <path
                d="M1.34766 4.65775H0.347656V0.71875H1.34766V4.65775Z"
                fill="black"
              />
              <path
                d="M12.9004 4.65677H11.9004V0.717773H12.9004V4.65677Z"
                fill="black"
              />
              <path
                d="M24.9238 0.1875H29.9238V5.1875H24.9238V0.1875Z"
                fill="white"
              />
              <path
                d="M25.9238 1.1875V4.1875H28.9238V1.1875H25.9238ZM24.9238 0.1875H29.9238V5.1875H24.9238V0.1875Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_5997">
                <rect
                  width="30"
                  height="5"
                  fill="white"
                  transform="translate(0.34375 0.1875)"
                />
              </clipPath>
            </defs>
          </svg>
          <Typography
            variant="small"
            className="font-noto-sans font-normal text-[0.6rem]"
          >
            ORDER TRACING
          </Typography>
        </div>
      </div>
      {/* ----- SECTION 10 ----- */}
    </main>
  );
};
export default Home;
