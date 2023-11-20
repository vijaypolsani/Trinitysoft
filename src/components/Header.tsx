"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { FiSearch, FiLogOut } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5  md:justify-start">
          <Logo />
        <h2 className="text-md whitespace-nowrap text-blue-600 font-semibold hover:text-orange-500 cursor-pointer duration-200">
        <Link href={"/"}>Trinitysoft</Link>
        </h2>
        <Link href={"/services"}> Services </Link>
        <Link href={"/about"}> About </Link>
        <Link href={"/contact"}> Contact </Link>
        {/* Search Field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for articles"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
      </Container>
    </div>

  );
};

export default Header;
