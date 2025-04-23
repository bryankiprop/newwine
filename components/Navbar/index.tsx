"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const links = ["Home", "About", "Contact", "Login"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {isMenuOpen && (
        <div className=" bg-black fixed z-0 pt-[80px] inset-0 w-[70%] lg:hidden">
          <div className=" flex flex-col items-center">
            <ul className=" w-full mb-5">
              {links.map((link, index) => (
                <li className=" navLinkMobile" key={index}>
                  {link}
                </li>
              ))}
            </ul>
            <div className=" bg-amber-600 text-center w-fit  py-3 px-6 cursor-pointer text-white rounded-4xl">
              Add a quote
            </div>
          </div>
        </div>
      )}
      <div className="  w-full fixed top-0 z-10 bg-black">
        <div className="  flex items-center justify-between  px-5 max-w-[1240px] mx-auto">
          <div className=" cursor-pointer">
            <Image src="/images/logo2.png" alt="img" height={40} width={70} />
          </div>
          <div className=" hidden lg:flex  lg:flex-1 lg:justify-center">
            <ul className=" flex gap-10 text-white ">
              {links.map((link, index) => (
                <li className=" navLink" key={index}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className=" bg-amber-600 hidden lg:flex py-3 px-6 cursor-pointer text-black rounded-4xl">
            Add a quote
          </div>
          <div>
            {isMenuOpen ? (
              <GrClose
                onClick={toggleMenu}
                className=" text-white text-3xl flex lg:hidden cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleMenu}
                className=" text-white text-3xl flex lg:hidden cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
