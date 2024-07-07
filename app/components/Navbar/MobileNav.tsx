"use client";
import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const MobileNav = (props: any) => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex bg-white items-center ">
        <input
          className="p-4 text-sm border-r border-gray-400 outline-none text-gray-600 w-[88%]"
          placeholder="Search this site"
        />
        <button className="text-xl px-2 text-red-800">
          <CiSearch />
        </button>
      </div>
      <ul className="flex flex-col px-4 py-8 gap-4">
        <li className="">
          <Link
            href="/about"
            className="block py-3 px-5 hover:bg-blue-400"
            onClick={props.closeMenu}
          >
            About us
          </Link>
        </li>
        <li className="">
          <Link
            href="/courses/"
            className="flex items-center justify-between py-3 px-5 hover:bg-blue-400"
            onClick={props.closeMenu}
          >
            All Courses
            <span>
              <BiChevronDown />
            </span>
          </Link>
        </li>
        <li className="">
          <Link
            href="/for-students"
            className="flex items-center justify-between py-3 px-5 hover:bg-blue-400"
            onClick={props.closeMenu}
          >
            For Students
            <span>
              <BiChevronDown />
            </span>
          </Link>
        </li>

        <li className="">
          <Link
            href="/contact"
            className="block py-3 px-5 hover:bg-blue-400"
            onClick={props.closeMenu}
          >
            Contact us
          </Link>
        </li>
        <li className="">
          <Link
            href="/galary"
            className="block py-3 px-5 hover:bg-blue-400"
            onClick={props.closeMenu}
          >
            Galary
          </Link>
        </li>
        <li className="">
          <Link
            href="/downloads"
            className="block py-3 px-5 hover:bg-blue-400"
            onClick={props.closeMenu}
          >
            Downloads
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
