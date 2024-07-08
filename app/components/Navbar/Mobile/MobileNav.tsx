"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import Dropdown from "../Dropdown";

const MobileNav = ({ closeMenu }: { closeMenu: any }) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [iconSwitch, setIconSwitch] = useState(false);
  const [iconSwitch1, setIconSwitch1] = useState(false);

  const handleIconSwitch = () => {
    setIconSwitch(!iconSwitch);
    setDropdown(!dropdown);
  };
  const handleIconSwitch1 = () => {
    setIconSwitch1(!iconSwitch1);
    setDropdown1(!dropdown1);
  };
  return (
    <div className="flex flex-col">
      <div className="flex bg-white items-center ">
        <input
          className="p-4 text-sm border-r border-gray-400 outline-none text-gray-600 w-[88%]"
          placeholder="Search this site"
        />
        <button className="text-xl px-2 text-red-800">
          <CiSearch />
        </button>
      </div>
      <ul className="flex flex-col py-8 gap-4">
        <li className="">
          <Link
            href="/about"
            className="block py-3 px-5 hover:bg-[#1e5288]"
            onClick={closeMenu}
          >
            About us
          </Link>
        </li>
        <li className="" onClick={handleIconSwitch}>
          <button className="flex items-center justify-between py-3 px-4 hover:bg-[#1e5288] w-full">
            All Courses
            <span>{iconSwitch ? <FaMinus /> : <FaPlus />}</span>
          </button>
          <ul
            className={
              dropdown
                ? "bg-[#6f8eb2]  flex flex-col ease-in-out duration-500 "
                : "bg-[#6f8eb2]  hidden ease-in-out duration-700 "
            }
          >
            <Dropdown closeMenu={closeMenu} />
          </ul>
        </li>
        <li className="" onClick={handleIconSwitch1}>
          <button className="flex items-center justify-between py-3 px-4 hover:bg-[#1e5288] w-full">
            For Students
            <span>{iconSwitch1 ? <FaMinus /> : <FaPlus />}</span>
          </button>
          <ul
            className={
              dropdown1
                ? "bg-[#6f8eb2]  flex flex-col ease-in-out duration-500 "
                : "bg-[#6f8eb2]  hidden ease-in-out duration-700 "
            }
          >
            <li className="hover:bg-[#1e5288]">
              <Link
                href="/for-students/registration-information"
                className="block py-3 px-4 mx-4 "
                onClick={closeMenu}
              >
                Registration Information
              </Link>
            </li>
            <li className="hover:bg-[#1e5288]">
              <Link
                href="/for-students/general-information"
                className="block py-3 px-4 mx-4 "
                onClick={closeMenu}
              >
                General Information
              </Link>
            </li>
            <li className="hover:bg-[#1e5288]">
              <Link
                href="/for-students/banking-information"
                className="block py-3 px-4 mx-4 "
                onClick={closeMenu}
              >
                Banking Information
              </Link>
            </li>
          </ul>
        </li>

        <li className="">
          <Link
            href="/contact"
            className="block py-3 px-5 hover:bg-[#1e5288]"
            onClick={closeMenu}
          >
            Contact us
          </Link>
        </li>
        <li className="">
          <Link
            href="/galary"
            className="block py-3 px-5 hover:bg-[#1e5288]"
            onClick={closeMenu}
          >
            Galary
          </Link>
        </li>
        <li className="">
          <Link
            href="/downloads"
            className="block py-3 px-5 hover:bg-[#1e5288]"
            onClick={closeMenu}
          >
            Downloads
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
