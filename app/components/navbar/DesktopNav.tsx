"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";

export default function DesktopNav({ closeMenu }: { closeMenu: any }) {
  const [handleDropdown, setHandleDropdown] = useState(false);
  return (
    <ul className="hidden px-4 gap-4 laptop:max-w-[1140px] mx-auto lg:flex">
      <li className="">
        <Link
          href="/"
          className=" py-4 px-5 hover:bg-blue-100 flex items-center"
        >
          Home
        </Link>
      </li>
      <li className="">
        <Link
          href="/about"
          className=" py-4 px-5 hover:bg-blue-100 flex items-center"
        >
          About us
        </Link>
      </li>
      <li
        className="relative"
        onClick={() => setHandleDropdown(!handleDropdown)}
      >
        <button className="flex py-4 px-5 hover:bg-blue-100 items-center">
          All Courses <BiChevronDown size={20} />
        </button>
        <ul
          className={
            handleDropdown
              ? "w-[325px] block absolute bg-[#0c234b] text-white transition-all duration-700 ease-in-out"
              : "w-[325px] hidden absolute bg-[#0c234b] text-white transition-all duration-700 ease-in-out"
          }
        >
          <Dropdown closeMenu={closeMenu} />
        </ul>
      </li>
      <li className="">
        <button className="flex py-4 px-5 hover:bg-blue-100 items-center">
          For Students <BiChevronDown size={20} />
        </button>
      </li>
      <li className="">
        <Link
          href="/contact"
          className="py-4 px-5 hover:bg-blue-100 flex items-center"
        >
          Contact us
        </Link>
      </li>
      <li className="">
        <Link
          href="/galary"
          className="py-4 px-5 hover:bg-blue-100 flex items-center"
        >
          Galary
        </Link>
      </li>
      <li className="">
        <Link
          href="/downloads"
          className="py-4 px-5 hover:bg-blue-100 flex items-center"
        >
          Downloads
        </Link>
      </li>
    </ul>
  );
}
