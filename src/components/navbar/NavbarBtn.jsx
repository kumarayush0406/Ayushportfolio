import React from "react";
import { RiArrowRightDownLine } from "react-icons/ri";
const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-centre gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow ">
      <a href="https://drive.google.com/file/d/1DMdTvy5eU_Xz_zeKk6Ir_wZPLeLhVZUH/view?usp=sharing">
        Resume
      </a>
      <div className="sm:hidden md:block pt-1">
        <RiArrowRightDownLine />
      </div>
    </button>
  );
};

export default NavbarBtn;
