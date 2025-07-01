import { IconButton, Typography } from "@material-tailwind/react";
import { SlBag } from "react-icons/sl";
import { CiBookmark } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { useAppDispatch } from "../../hooks";
import { addProduct } from "../../features/cart/cartSlice";
import { addToFavorite } from "../../features/favorite/favoriteSlice";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col ">
      <div className="relative">
        <img
          src={product.image}
          alt=""
          className=" outline outline-1 outline-black pointer-events-none w-full h-full object-cover"
        />
        {/*----- PRODUCT STATE ----- */}
        {product.state ? (
          <span
            className={`absolute top-4 left-4 ${
              product.state === "sold"
                ? "bg-black text-white"
                : "bg-white text-black"
            } text-[0.6rem] px-1 outline outline-1 outline-black font-medium`}
          >
            {product.state.toUpperCase()}
          </span>
        ) : (
          ""
        )}
        {/*----- PRODUCT STATE ----- */}
        <div className="absolute top-2 right-4 flex flex-col gap-y-0">
          <IconButton
            variant="text"
            size="sm"
            onClick={() => {
              dispatch(addToFavorite(product));
            }}
          >
            <CiBookmark />
          </IconButton>
          <IconButton variant="text" size="sm">
            <IoEyeOutline />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-row bg-white outline outline-1 outline-black">
        <div className="w-full flex flex-col ps-8 py-2 ">
          <Typography
            variant="small"
            className="font-noto-sans font-medium text-xs"
          >
            {product.name.toUpperCase()}
          </Typography>
          <Typography
            variant="small"
            className="font-noto-sans text-xs opacity-90"
          >
            {typeof product.price == "number"
              ? `$${product.price}`
              : `$${product.price.to} $${product.price.from}`}
          </Typography>
        </div>
        <IconButton
          variant="text"
          className="rounded-none p-6 border-black border-l-[1px]"
          onClick={() => {
            dispatch(addProduct(product));
          }}
        >
          <SlBag />
        </IconButton>
      </div>
    </div>
  );
};
export default ProductCard;
