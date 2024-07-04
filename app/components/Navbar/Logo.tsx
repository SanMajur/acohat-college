import Image from "next/image";
import React from "react";
import logo from "../../assets/images/transparentLogo.png";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex flex-col">
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
      <div
        className="flex flex-col  justify-start w-[30rem] md:w-[45rem] lg:w-[60rem] mx-auto md:flex-row md:justify-between gap-4"
        aria-label="middle nav"
      >
        <Link href="/" className="flex items-center py-4" aria-label="logo">
          <Image src={logo} alt="Logo" width={110} height={80} />
          <h2 className="flex flex-col ml-4 text-left text-3xl md:text-2xl font-bold text-red-900">
            Aroma College of
            <span className="text-gray-900"> Hospitality & Tourism</span>
          </h2>
        </Link>
        <div className="flex flex-col">
          <form className="flex items-center md:mt-8">
            <label htmlFor="select-menu" className="mr-1">
              I am
            </label>
            <select
              name="select-menu"
              id="select-menu"
              className="bg-gray-200 p-2 w-96 md:w-60  border-b-4 border-slate-600 outline-none font-bold hover:border-red-800"
            >
              <option className="w-96 p-2" value="choose an option">
                choose an option
              </option>
              <option className="w-96 p-2" value="a future student">
                a future student
              </option>
              <option className="w-96 p-2" value="a current student">
                a current student
              </option>
              <option className="w-96 p-2" value="an alumni member">
                an alumni member
              </option>
              <option className="w-96 p-2" value="a donor">
                a donor
              </option>
            </select>
            <button className="bg-gray-500 border-b-2 p-2 text-white border-gray-500 hover:bg-blue-300">
              GO
            </button>
          </form>
          <div className="flex flex-col text-center mt-2 md:mt-4">
            <button className="w-full py-2 my-2 border border-red-900 text-red-900">
              Apply Now
            </button>
            <button className="text-white bg-red-900 w-full py-2 my-2">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* <div className="" aria-label="bottom nav">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
      </div> */}
    </div>
  );
}
