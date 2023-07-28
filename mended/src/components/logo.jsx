import React from "react";
import ImageLogo from "../../public/assets/logo.svg";
import SmallLogo from "../../public/assets/smallLogo.svg";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={ImageLogo}
          alt="any"
          width={115}
          height={1}
          className="lg:flex md:flex hidden"
        />
        <Image
          src={SmallLogo}
          width={30}
          height={1}
          alt=""
          className="lg:hidden md:hidden flex"
        />
      </Link>
    </div>
  );
};

export default Logo;
