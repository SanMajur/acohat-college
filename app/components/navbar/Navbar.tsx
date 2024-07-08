import React from "react";
import UpperNav from "./UpperNav";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";

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
