import React from "react";
import UpperNav from "./UpperNav";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";

export default function Navbar({ closeMenu }: { closeMenu: any }) {
  return (
    <div className="" onClick={closeMenu}>
      <UpperNav />
      <Logo />
      <hr />
      <DesktopNav closeMenu={closeMenu} />
      <hr />
    </div>
  );
}
