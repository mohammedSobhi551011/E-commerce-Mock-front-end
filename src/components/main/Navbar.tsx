import {
  Button,
  Chip,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";
// ----- ICONS ----- //
import { CiSearch, CiUser, CiBookmark } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { BsList, BsCollection } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { FaBox } from "react-icons/fa6";
// ----- ICONS ----- //
import { useState } from "react";
import { SearchInput } from "../variances/FormElements";
import { useAppSelector } from "../../hooks";

const Navbar = () => {
  {
    /* ----- TODOS: ADD ROUTE LINKS USING REACT-ROUTER, MAKE CART AND FAVORITE DYNAMIC ----- */
  }
  const [navListOpen, setNavListOpen] = useState(false);
  const handleDrawerClose = () => {
    setNavListOpen(false);
  };
  const cartProducts = useAppSelector((state) => state.cart.products);
  const favorites = useAppSelector((state) => state.favorite.favorites);

  return (
    <nav className="font-noto-sans w-[85%] bg-transparent flex flex-col absolute top-0 z-[1]">
      <div className="mb-2 flex items-center gap-x-5 border-b-[1px] border-black lg:py-3 py-2">
        {/* ----- LOGO ----- */}
        <div>
          <img src="../../../images/corsen-main-logo-x2.png.png" />
        </div>
        {/* ----- LOGO ----- */}

        {/* ----- NAV ITEMS ----- */}
        <div className="hidden   items-center w-full justify-between lg:flex">
          <div
            className="flex items-center gap-x-5
        text-sm"
          >
            <a href="#" className="underline-hover-effect before:bg-black">
              HOME
            </a>
            <a href="#" className="underline-hover-effect before:bg-black">
              PRODUCTS
            </a>
            <a href="#" className="underline-hover-effect before:bg-black">
              COLLECTIONS
            </a>
          </div>
          <div className="flex items-center gap-x-3">
            {/* SEARCH */}
            <Button
              size="sm"
              variant="text"
              className="text-black rounded-none text-sm flex items-center font-noto-sans gap-x-1 font-medium"
            >
              <span>SEARCH</span>
              <CiSearch />
            </Button>
            {/* SEARCH */}

            {/* CART */}
            <Button
              size="sm"
              variant="text"
              className="text-sm text-black font-medium font-noto-sans rounded-none"
            >
              <div className="flex items-baseline gap-x-1 ">
                <span>Cart</span>
                <div className="flex items-baseline gap-x-0.5">
                  <SlBag />
                  <span className="text-[0.7rem]">{cartProducts.length}</span>
                </div>
              </div>
            </Button>
            {/* CART */}

            {/* FAVORITE */}
            <IconButton
              variant="text"
              className=" rounded-none text-md font-noto-sans font-medium text-black"
            >
              <div className="flex items-baseline">
                <CiBookmark />
                <span className="text-[0.7rem]">{favorites.length}</span>
              </div>
            </IconButton>
            {/* FAVORITE */}

            {/* USER */}
            <IconButton
              variant="text"
              className="text-lg rounded-none p-5 text-black"
            >
              <CiUser />
            </IconButton>
            {/* USER */}
          </div>
        </div>
        <div className="w-full flex justify-end lg:hidden">
          <IconButton
            variant={`${navListOpen ? "gradient" : "text"}`}
            className=""
            style={{ background: navListOpen ? "black" : "" }}
            onClick={() => {
              setNavListOpen(!navListOpen);
            }}
          >
            <BsList className="text-2xl " />
          </IconButton>
        </div>
        {/* ----- NAV ITEMS ----- */}
      </div>
      <Drawer
        placement="left"
        overlayProps={{ className: "!opacity-0" }}
        open={navListOpen}
        onClose={handleDrawerClose}
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <img src="../../../images/corsen-main-logo-x2.png.png" />
          <IconButton variant="text" color="black" onClick={handleDrawerClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <SearchInput />
        <List className="text-black font-noto-sans font-light">
          <ListItem>
            <ListItemPrefix>
              <GoHome />
            </ListItemPrefix>
            Home
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaBox />
            </ListItemPrefix>
            Products
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BsCollection />
            </ListItemPrefix>
            Collections
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <SlBag />
            </ListItemPrefix>
            Cart
            <ListItemSuffix>
              <Chip
                value="0"
                size="sm"
                className="rounded-full text-black bg-transparent outline-1 outline-black outline"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <CiBookmark className="text-lg" />
            </ListItemPrefix>
            Favorite
            <ListItemSuffix>
              <Chip
                value="0"
                size="sm"
                className="rounded-full text-black bg-transparent outline-1 outline-black outline"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <CiUser className="text-lg" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </List>
      </Drawer>
      {/* <div
        className={`bg-[rgb(255,255,255,0.8)] flex text-black ${
          navListOpen ? " max-h-64" : " max-h-0"
        } flex-col items-center gap-y-3 lg:hidden transition-all duration-700 overflow-hidden `}
      >
        <div className="flex items-start gap-x-3 text-sm mt-2">
          <a href="#" className="underline-hover-effect before:bg-black">
            HOME
          </a>
          <a href="#" className="underline-hover-effect before:bg-black">
            PRODUCTS
          </a>
          <a href="#" className="underline-hover-effect before:bg-black">
            COLLECTIONS
          </a>
        </div>
        <div className="flex items-center gap-y-2">
          <Button
            size="sm"
            variant="text"
            className="text-black rounded-none text-sm flex items-center font-noto-sans gap-x-1 font-medium"
          >
            <span>SEARCH</span>
            <CiSearch />
          </Button>
          <Button
            size="sm"
            variant="text"
            className="text-sm text-black font-medium font-noto-sans rounded-none"
          >
            <div className="flex items-baseline gap-x-1 ">
              <span>Cart</span>
              <div className="flex items-baseline gap-x-0.5">
                <SlBag />
                <span className="text-[0.7rem]">0</span>
              </div>
            </div>
          </Button>
          <IconButton
            variant="text"
            className=" rounded-none text-md font-noto-sans font-medium text-black"
          >
            <div className="flex items-baseline">
              <CiBookmark />
              <span className="text-[0.7rem]">0</span>
            </div>
          </IconButton>
          <IconButton
            variant="text"
            className="text-lg rounded-none p-5 text-black"
          >
            <CiUser />
          </IconButton>
        </div>
      </div> */}
    </nav>
  );
};
export default Navbar;
