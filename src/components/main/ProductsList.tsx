import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Spinner,
} from "@material-tailwind/react";
import ProductCard from "./ProductCard";
import { IoIosArrowDown } from "react-icons/io";
import { useAppSelector } from "../../hooks";

const ProductsList = () => {
  const { products, isLoading } = useAppSelector((state) => state.product);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <Button
          variant="text"
          size="sm"
          className="rounded-none font-noto-sans font-normal"
        >
          go
        </Button>
        <Menu
          placement="bottom"
          animate={{ mount: { y: 0 }, unmount: { y: -10 } }}
        >
          <MenuHandler>
            <Button
              variant="text"
              size="sm"
              className="rounded-none flex items-center gap-x-1 font-noto-sans font-normal"
            >
              filter <IoIosArrowDown />
            </Button>
          </MenuHandler>
          <MenuList className="bg-[rgb(255,255,255,0.7)] rounded-md font-noto-sans font-medium text-black">
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
      {isLoading ? (
        <div className="w-full flex items-center justify-center h-full">
          <Spinner className="h-10 w-10" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductsList;
