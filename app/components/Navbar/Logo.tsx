import Image from "next/image";
import React from "react";
import logo from "../../assets/images/transparentLogo.png";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";

export default function Logo() {
  return (
    <div className="">
      <div
        className=" gap-4 py-2 px-4 flex items-center justify-end bg-red-800 text-white"
        aria-label="upper nav"
      >
        <form className="flex gap-4">
          <div className="hidden laptop:flex bg-white items-center ">
            <input
              className="py-3 px-2 text-sm border-r border-gray-400 outline-none text-gray-600"
              placeholder="Search this site"
            />
            <button className="text-xl px-2 text-red-800">
              <CiSearch />
            </button>
          </div>
          <button className="flex flex-col items-center gap-2 font-bold tablet:hidden">
            <CiSearch size={20} color="white" />
            <span className="text-[8px]">SEARCH</span>
          </button>
          <button className="hidden laptop:flex gap-2 items-center border px-4 border-red-500">
            Resources <BiChevronDown size={20} />
          </button>
        </form>
        <button className="flex flex-col items-center gap-2 font-bold laptop:hidden">
          <CiMenuFries size={20} color="white" />
          <span className="text-[8px]">MENU</span>
        </button>
      </div>
      {/* <div className="hidden" aria-label="middle nav">
        <Image src={logo} alt="Logo" width={110} height={80} />
        <h2 className="flex flex-col items-center">
          Aroma College of <span className=""> Hospitality & Tourism</span>
        </h2>
      </div>
      <div className="" aria-label="bottom nav"></div> */}
    </div>
  );
}
