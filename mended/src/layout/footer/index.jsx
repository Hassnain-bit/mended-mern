import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/footerlogo.svg";
const Footer = () => {
  return (
    <div className="mt-10 pt-10 flex justify-center items-center h-[200px] w-full footerbg">
      <div className="w-full lg:px-16 md:px-14 px-6">
        <div className="lg:mb-5 md:mb-5 mb-8 w-full flex justify-center">
          <Image src={Logo} width={130} height={1} alt="" />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-[#F8F8F880] font-normal lg:text-[15px] md:text-[15px] text-[12px]">
              Terms & Agreements
            </h2>
          </div>
          <div className="lg:flex md:flex hidden">
            <h2 className="text-[#F8F8F880] font-normal lg:text-[15px] md:text-[15px] text-[10px] lg:pr-12 md:pr-12 pr-0">
              @2023 Mended All Rights Reserved
            </h2>
          </div>
          <div>
            <h2 className="text-[#F8F8F880] font-normal lg:text-[15px] md:text-[15px] text-[12px]">
              Privacy Policy
            </h2>
          </div>
        </div>
        <div className="lg:hidden md:hidden flex justify-center mt-7">
          <h2 className="text-[#F8F8F84D] font-normal lg:text-[15px] md:text-[15px] text-[12px] lg:pr-12 md:pr-12 pr-0">
            @2023 Mended All Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
