import Link from "next/link";
import React from "react";
import kdIcon from "../assets/Trinitysoft.svg";
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href={"/"}>
      <h3 className="text-sm font-semibold hover:text-orange-500 cursor-pointer duration-200">
      <Image src={kdIcon} height={100} width={100} alt="Trinitysoft"/>
      </h3>
    </Link>
  );
};

export default Logo;
