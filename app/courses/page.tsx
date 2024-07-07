import React from "react";

export default function page() {
  return (
    <div className="h-[80vh] text-center w-full bg-cyan-600 text-white px-8">
      <h1 className=" py-8">All Courses page</h1>
      <div className="flex flex-wrap items-center w-full justify-between gap-4">
        <h2 className="md:w-[45%] h-[100px] bg-blue-700 text-center w-full lg:w-[30%]">
          Certificate
        </h2>
        <h2 className="md:w-[45%] h-[100px] bg-green-700 text-center w-full lg:w-[30%]">
          Diploma
        </h2>
        <h2 className="md:w-[45%] h-[100px] bg-emerald-500 text-center w-full lg:w-[30%]">
          Short courses
        </h2>
        <h2 className="md:w-[45%] h-[100px] bg-sky-700 text-center w-full lg:w-[30%]">
          Languages
        </h2>
      </div>
    </div>
  );
}
