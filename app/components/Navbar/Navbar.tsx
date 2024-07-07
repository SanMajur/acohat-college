import React from "react";
import Logo from "./Logo";
import UpperNav from "./UpperNav";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  return (
    <div className="">
      <UpperNav />
      <Logo />
      <hr />
      <DesktopNav />
    </div>
  );
}
