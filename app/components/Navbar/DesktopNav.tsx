import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

export default function DesktopNav() {
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
      <li className="">
        <Link
          href="/courses"
          className="flex py-4 px-5 hover:bg-blue-100 items-center"
        >
          All Courses <BiChevronDown size={20} />
        </Link>
      </li>
      <li className="">
        <Link
          href="/for-students"
          className="flex py-4 px-5 hover:bg-blue-100 items-center"
        >
          For Students <BiChevronDown size={20} />
        </Link>
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
