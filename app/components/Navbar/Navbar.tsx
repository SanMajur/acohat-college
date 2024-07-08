import React from "react";
import UpperNav from "./UpperNav";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";

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
