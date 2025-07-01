import {
  Carousel,
  IconButton,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { ShopCollectionBtn } from "./Buttons";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchCarousels } from "../../features/carousel/carouselSlice";

export const HomeMainCarousel = () => {
  const dispatch = useAppDispatch();
  const { carousels, isLoading } = useAppSelector((state) => state.carousel);
  useEffect(() => {
    dispatch(fetchCarousels());
  }, []);
  return (
    <Carousel
      className="relative"
      // autoplay
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-[0] flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplayDelay={2500}
      transition={{ duration: 2 }}
      loop
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
          placeholder={"Previous"}
        >
          <IoIosArrowBack className="text-2xl text-gray-900" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder={"Next"}
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <IoIosArrowForward className="text-2xl text-gray-900" />
        </IconButton>
      )}
      placeholder={""}
    >
      {isLoading ? (
        <div className="relative h-[250px] sm:h-[350px] md:h-[480px] lg:h-[750px] w-full">
          <div className="w-full flex items-center justify-center h-full">
            <Spinner className="h-10 w-10" />
          </div>
        </div>
      ) : (
        carousels.map((carousel) => {
          return (
            <div
              key={carousel.id}
              className="relative h-[250px] sm:h-[350px] md:h-[480px] lg:h-[750px] w-full"
            >
              <>
                <div className="w-full flex items-center justify-center h-full ">
                  <img
                    src={carousel.image}
                    className={` object-cover h-full w-full pointer-events-none`}
                    alt="Image"
                  />
                </div>
                <div className="flex-col gap-y-8 absolute z-[0] bottom-[14%] left-[8%] hidden lg:flex md:flex">
                  {/* ----- IMAGE CONTENT */}
                  <div className="flex flex-col gap-y-1 font-noto-sans">
                    <h1 className="text-4xl  text-black ">{carousel.title}</h1>
                    <p className="text-xs text-black w-[20rem] ">
                      {carousel.body}
                    </p>
                  </div>
                  {/* ----- IMAGE CONTENT */}
                  <div>
                    <ShopCollectionBtn />
                  </div>
                </div>
                <div className="absolute bottom-[7%] hidden sm:hidden md:flex lg:flex justify-center z-[0] w-full ">
                  <div className="border-b-black border-b-[1px] w-[90%]"></div>
                </div>
              </>
            </div>
          );
        })
      )}
    </Carousel>
  );
};
export const HomeSecondCarousel = () => {
  return (
    <Carousel
      className="mb-20"
      navigation={() => {
        ("");
      }}
      // autoplay
      autoplayDelay={2500}
      transition={{ duration: 2 }}
      loop
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 !left-0 -translate-y-2/4"
          placeholder={"Previous"}
        >
          <IoIosArrowBack className="text-2xl text-gray-900" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder={"Next"}
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 right-0 -translate-y-2/4"
        >
          <IoIosArrowForward className="text-2xl text-gray-900" />
        </IconButton>
      )}
    >
      <div className="flex flex-col gap-y-10 ">
        <div className="flex flex-col gap-y-5 items-center">
          <svg
            width="34"
            height="29"
            viewBox="0 0 34 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.491 0.497559L10.3519 28.0938H3.18596L1.04688 0.497559H12.491ZM32.8123 0.497559L30.6732 28.0938H23.5073L21.3682 0.497559H32.8123Z"
              stroke="black"
              strokeWidth="0.999574"
            />
          </svg>
          <Typography
            variant="lead"
            className="text-center w-3/4 font-noto-sans font-light text-sm md:text-base lg:text-base"
          >
            Accusantium doloremque laudantium, totam rem aperiam. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem.
          </Typography>
        </div>
        <div className="flex flex-col gap-y-3 items-center">
          <RxCross2 />
          <div className="flex items-center gap-x-5">
            <div>
              <img src="../../images/carousel2/video-clients-image-6.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-1.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-2.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-3.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-5.png.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 ">
        <div className="flex flex-col gap-y-5 items-center">
          <svg
            width="34"
            height="29"
            viewBox="0 0 34 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.491 0.497559L10.3519 28.0938H3.18596L1.04688 0.497559H12.491ZM32.8123 0.497559L30.6732 28.0938H23.5073L21.3682 0.497559H32.8123Z"
              stroke="black"
              strokeWidth="0.999574"
            />
          </svg>
          <Typography
            variant="lead"
            className="text-center w-3/4 font-noto-sans font-light text-sm md:text-base lg:text-base"
          >
            Accusantium doloremque laudantium, totam rem aperiam. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem.
          </Typography>
        </div>
        <div className="flex flex-col gap-y-3 items-center">
          <RxCross2 />
          <div className="flex items-center gap-x-5">
            <div>
              <img src="../../images/carousel2/video-clients-image-6.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-1.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-2.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-3.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-5.png.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 ">
        <div className="flex flex-col gap-y-5 items-center">
          <svg
            width="34"
            height="29"
            viewBox="0 0 34 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.491 0.497559L10.3519 28.0938H3.18596L1.04688 0.497559H12.491ZM32.8123 0.497559L30.6732 28.0938H23.5073L21.3682 0.497559H32.8123Z"
              stroke="black"
              strokeWidth="0.999574"
            />
          </svg>
          <Typography
            variant="lead"
            className="text-center w-3/4 font-noto-sans font-light text-sm md:text-base lg:text-base"
          >
            Accusantium doloremque laudantium, totam rem aperiam. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem.
          </Typography>
        </div>
        <div className="flex flex-col gap-y-3 items-center">
          <RxCross2 />
          <div className="flex items-center gap-x-5">
            <div>
              <img src="../../images/carousel2/video-clients-image-6.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-1.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-2.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-3.png.png" />
            </div>
            <div>
              <img src="../../images/carousel2/Video-clients-img-5.png.png" />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
