"use client";
import Image from "next/image";
import logo from "../../assets/images/transparentLogo.png";

import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#ffffff] " aria-label="middle nav">
        <div className=" laptop:max-w-[1140px] mx-auto py-2 px-4 lg:px-0 md:flex">
          <div
            className="my-4 md:flex-[50%] md:max-w-[50%] lg:flex-[40%] lg:max-w-[40%]"
            aria-label="logo div"
          >
            <Link href="/" className="flex items-center py-4" aria-label="logo">
              <Image src={logo} alt="Logo" width={110} height={80} />
              <h2 className="flex flex-col ml-1 text-2xl font-bold text-red-900">
                Aroma College of
                <span className="text-gray-900 ">Hospitality and Tourism</span>
              </h2>
            </Link>
          </div>
          <div
            className="flex flex-col  md:flex-[50%] md:max-w-[50%] md:flex-shrink-0 md:flex-grow-0 lg:flex-[60%] lg:max-w-[60%] lg:justify-end lg:flex-shrink-0 lg:flex-grow-0 md:mt-8 lg:flex-row lg:items-center lg:gap-4"
            aria-label="cta div"
          >
            <form className=" mb-4 lg:mb-0">
              <div className="flex  w-full items-center">
                <label htmlFor="select-menu" className="mr-1">
                  <span className="mr-2">I am</span>
                </label>
                <select
                  name="select-menu"
                  id="select-menu"
                  className="bg-[#f4f6f9] border-b-[3px] border-[#cbd1e0] text-gray-600 text-base font-bold outline-none py-2 px-3 flex-1 hover:border-[#ab0620] rounded-none"
                >
                  <option
                    className="w-96 py-3 px-4"
                    value="choose an option"
                    selected
                  >
                    choose an option
                  </option>
                  <option className="w-96 py-3 px-4" value="a future student">
                    a future student
                  </option>
                  <option className="w-96 py-3 px-4" value="a current student">
                    a current student
                  </option>
                  <option className="w-96 py-3 px-4" value="an alumni member">
                    an alumni member
                  </option>
                  <option className="w-96 py-3 px-4" value="a donor">
                    a donor
                  </option>
                </select>
                <button className="bg-[#61708b] text-white text-center border-2 border-transparent py-1 px-3 text-base hover:bg-[#6f8eb2]">
                  GO
                </button>
              </div>
            </form>
            <div className="flex flex-col lg:flex-row text-center mt-2 md:mt-4 lg:gap-4 lg:mt-0">
              <button className=" py-2 my-2 border border-red-900 text-red-900 lg:py-1.5 lg:px-14">
                Visit
              </button>
              <button className="text-white bg-red-900 py-2 my-2 lg:py-1.5 lg:px-8">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden" aria-label="bottom nav">
        bottom div
      </div>
    </div>
  );
}
