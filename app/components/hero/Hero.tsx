import React from "react";
import heroBg from "../../assets/images/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-hero bg-cover bg-center">
      <div className="h-full w-[30%] bg-gray-400">
        <h1>Welcome to Aroma</h1>
      </div>
    </div>
  );
}
