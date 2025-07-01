import { Typography } from "@material-tailwind/react";
import { EmailInput } from "../variances/FormElements";

const Footer = () => {
  return (
    <footer className="w-full lg:block">
      <div className="w-full flex justify-center mb-6 lg:mb-12">
        <div className="w-[85%] flex gap-x-8">
          <div className="flex flex-col gap-y-5">
            <div>
              <img src="../../images/corsen-main-logo-x2.png.png" />
            </div>
            <Typography
              variant="small"
              className="text-[0.6rem] font-noto-sans font-normal"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </Typography>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-y-3">
              <Typography
                variant="small"
                className="text-[0.6rem] text-gray-800 font-noto-sans font-normal"
              >
                SUPPORT
              </Typography>
              <div className="flex flex-col gap-y-2">
                <div className="w-6 lg:w-32 h-3 bg-black"></div>
                <div className="w-3 lg:w-14 h-3 bg-black"></div>
                <div className="w-4 lg:w-20 h-3 bg-black"></div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <Typography
                variant="small"
                className="text-[0.6rem] text-gray-800 font-noto-sans font-normal"
              >
                COMPANY
              </Typography>
              <div className="flex flex-col gap-y-2">
                <div className="w-9 h-3 bg-black"></div>
                <div className="w-4 h-3 bg-black"></div>
                <div className="w-6 h-3 bg-black"></div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <Typography
                variant="small"
                className="text-[0.6rem] text-gray-800 font-noto-sans font-normal"
              >
                LOCATIONS
              </Typography>
              <div className="flex flex-col gap-y-2">
                <div className="w-6 lg:w-32 h-3 bg-black"></div>
                <div className="w-7 lg:w-14 h-3 bg-black"></div>
                <div className="w-5 lg:w-20 h-3 bg-black"></div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="hidden md:flex lg:flex flex-col gap-y-2">
            <Typography variant="small" className="font-noto-sans font-normal">
              Get The Latest News
            </Typography>
            <EmailInput />
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="w-full flex justify-center py-4">
        <div className="flex justify-between flex-row w-[85%]">
          <Typography
            variant="small"
            className="text-[0.6rem] font-noto-sans font-normal"
          >
            &copy; 2023 <span className="w-32 h-3 bg-black inline-block"></span>
            , ALL RIHGTS RESERVED
          </Typography>
          <div className="flex items-center gap-x-2">
            <div className="w-3 h-3 bg-black"></div>
            <div className="w-[0.5px] h-3 bg-black"></div>
            <div className="w-3 h-3 bg-black"></div>
            <div className="w-[0.5px] h-3 bg-black"></div>
            <div className="w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
