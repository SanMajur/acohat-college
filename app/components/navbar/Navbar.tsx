import React from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import UpperNav from "./UpperNav";

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
