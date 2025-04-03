import React from "react";

const footerLinks = [
  {
    name: "About Me",
    section: "about",
  },
  {
    name: "Skills",
    section: "skills",
  },
  {
    name: "Experience",
    section: "experience",
  },
  {
    name: "Projects",
    section: "projects",
  },
];
const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Ayush Kumar</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <a className="hover:text-white transition-all duration-500 cursor-pointer">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right sm:text-center mt-2 mb-12 text-sm text-lightBrown">
        © 2025 AYUSH KUMAR | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
