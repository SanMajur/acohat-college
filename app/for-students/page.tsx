import React from "react";

export default function page() {
  return (
    <div className="h-[80vh] text-center w-full bg-red-600 text-white">
      <h1>Student Information</h1>
      <div className="flex flex-wrap items-center ">
        <h2 className="w-[50%]">Application Details</h2>
        <h2 className="w-[50%]">Registration Details</h2>
        <h2 className="w-[50%]">Banking details</h2>
      </div>
    </div>
  );
}
