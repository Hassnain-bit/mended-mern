"use client";
import React, { useState, useEffect } from "react";
import { Container, Logo, Button } from "@/components";
import { HEADER_ITEMS } from "@/constants/data";
import Shadow from "../../../public/assets/headerShadow.svg";
import Image from "next/image";
import Hamicon from "../../../public/assets/hamicon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import DrawerLogo from "../../../public/assets/drawer-logo.svg";
import DrawerClose from "../../../public/assets/close.svg";
const Header = () => {
  const pathname = usePathname();

  const [activeIndex, setActiveIndex] = useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (pathname === "/") {
      setActiveIndex(0);
    } else if (pathname === "/advocates") {
      setActiveIndex(1);
    } else if (pathname === "/mended-team") {
      setActiveIndex(2);
    } else if (pathname === "/become-mender") {
      setActiveIndex(3);
    }
  }, [pathname]);

  const DrawerComponent = () => {
    return (
      <>
        <Drawer
          size="100%"
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="p-2 drawer-bg"
        >
          <div className=" flex justify-center p-2 ">
            <Image src={DrawerLogo} width={150} height={1} alt="" />
          </div>
          {HEADER_ITEMS?.map((item, index) => (
            <div onClick={() => setActiveIndex(index)} className="text-center">
              <Link href={item.url}>
                <h2
                  className={
                    index === activeIndex
                      ? "text-headingOne font-bold text-white  cursor-pointer capitalize  mt-[18px]"
                      : "text-headingOne font-bold text-white opacity-[60%]  cursor-pointer mt-[18px] capitalize "
                  }
                >
                  {item.title}
                </h2>
              </Link>
            </div>
          ))}
          <div className="flex justify-center">
            <Image
              src={DrawerClose}
              width={100}
              height={1}
              alt=""
              className="absolute bottom-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </Drawer>
      </>
    );
  };

  return (
    <div className="relative z-20 ">
      <DrawerComponent />
      <Image
        src={Shadow}
        width={2000}
        height={1}
        alt=""
        className="absolute z-0 lg:-top-24 md:-top-20 -top-4"
      />
      <Container>
        <div className="text-white z-10  bg-transparent lg:h-[145px] md:h-[145px] h-[100px] flex justify-between items-center">
          <div className="lg:w-[35%] md:w-[20%] w-[50%] z-10">
            <Logo />
          </div>
          <div className="lg:w-[65%] md:w-[80%] w-[50%] pl-4 lg:flex md:flex hidden lg:justify-between md:justify-between justify-end items-center lg:pr-14">
            {HEADER_ITEMS?.map((item, index) => (
              <div>
                <Link href={item.url}>
                  <p
                    onClick={() => setActiveIndex(index)}
                    className={
                      index === activeIndex
                        ? "text-headingThree font-normal  cursor-pointer capitalize text-responsive"
                        : "text-headingThree font-normal opacity-[60%] cursor-pointer capitalize text-responsive"
                    }
                  >
                    {item.title}
                  </p>
                </Link>
              </div>
            ))}
            <Button.Semantic
              variant="primary"
              size="large"
              label="Sign Up"
              className="py-[9px] px-9 z-10 bg-[#00000080]"
            />
          </div>
          <div className="lg:hidden md:hidden flex justify-end items-center">
            <Image
              src={Hamicon}
              width={30}
              height={1}
              alt=""
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
