import Link from "next/link";
import React from "react";

interface DropdownProps {
  closeMenu: () => void;
}
const Dropdown: React.FC<DropdownProps> = ({ closeMenu }) => {
  return (
    <>
      <li className="hover:bg-[#1e5288]">
        <Link
          href="/courses"
          className="block py-3 px-4 mx-4 "
          onClick={closeMenu}
        >
          All Courses
        </Link>
      </li>
      <li className="hover:bg-[#1e5288]">
        <Link
          href="/courses/certificate"
          className="block py-3 px-4 mx-4 "
          onClick={closeMenu}
        >
          Certificate Courses
        </Link>
      </li>
      <li className="hover:bg-[#1e5288]">
        <Link
          href="/courses/diploma"
          className="block py-3 px-4 mx-4 "
          onClick={closeMenu}
        >
          Diploma Courses
        </Link>
      </li>
      <li className="hover:bg-[#1e5288]">
        <Link
          href="/courses/short-courses"
          className="block py-3 px-4 mx-4 "
          onClick={closeMenu}
        >
          Short Courses
        </Link>
      </li>
      <li className="hover:bg-[#1e5288]">
        <Link
          href="/courses/languages"
          className="block py-3 px-4 mx-4 "
          onClick={closeMenu}
        >
          Languages
        </Link>
      </li>
    </>
  );
};
export default Dropdown;
