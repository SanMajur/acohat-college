"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface IconSwitcherProps {
  title: string;
}
const IconSwitcher: React.FC<IconSwitcherProps> = ({ title }) => {
  const [iconSwitch, setIconSwitch] = useState(false);
  return (
    <button
      className="flex items-center justify-between py-3 px-4 hover:bg-[#1e5288] w-full"
      onClick={() => setIconSwitch(!iconSwitch)}
    >
      {title}
      <span>{iconSwitch ? <FaMinus /> : <FaPlus />}</span>
    </button>
  );
};

export default IconSwitcher;
