import React from "react";
import Logo from "../navbar/Logo";
import DesktopNav from "../navbar/DesktopNav";
import UpperNav from "../navbar/UpperNav";

export default function Navbar() {
  return (
    <div className="">
      <UpperNav />
      <Logo />
      <hr />
      <DesktopNav />
      <hr />
    </div>
  );
}
