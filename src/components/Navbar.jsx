import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import cart from "../Images/cart.png";
//import {IoIosMenu} from "react-icons/fa"

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div
      id="navbar"
      className={`py-2  px-4  z-50 flex items-center bg-white  top-[2rem]  gap-3 lg: shadow-md lg:px-1  text-white text-[14px]  w-full  justify-between `}
    >
      <div className="bg-transparent ">
        <div className="text-black text-[2rem]">Ecommerce</div>
      </div>

      {/* menu */}

      <ul className={` hidden lg:flex  z-[22rem] gap-5  items-center`}>
        <a href="#about" className="bg-transparent px-2 font-semibold">
          {" "}
          <li className="text-[#000000] text-xl bg-transparent">Overview</li>
        </a>
        <a href="#skills" className="bg-transparent px-2 font-semibold  ">
          {" "}
          <li className="text-[#000000] text-[13px] text-xl bg-transparent">
            Our Technology
          </li>
        </a>
        <a href="#Projects" className="bg-transparent px-2 font-semibold ">
          <li className="text-[#000000] text-[13px]  text-xl bg-transparent">
            Research
          </li>
        </a>
        <a href="#Contact  " className="bg-transparent px-2 font-semibold">
          {" "}
          <li className="text-[#000000] text-xl text-[13px] bg-transparent">
            {" "}
            Blog
          </li>
        </a>
        <a href="#Contact" className="bg-transparent px-2 font-semibold">
          {" "}
          <li className="text-[#000000] text-xl text-[13px] bg-transparent">
            {" "}
            Support
          </li>
        </a>

        <button
          type="button"
          class=" outline outline-1 outline-offset-2  font-medium rounded-full bg-[#1D1D1D] text-white text-sm px-5 py-[0.4rem] text-center mr-2 mb-2"
        >
          Buy Now
        </button>

        <img
          className=" bg-transparent min-w-max h-[20px]  "
          alt="/"
          src={cart}
        />
      </ul>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? " absolute z-50 -translate-y-full duration-300 ease-in top-0 left-0 w-full h-screen flex flex-col  justify-start items-center"
            : "absolute translate-y-0 -top-[4rem] -left-4 px-[1rem] w-full duration-300 ease-in  bg-[#ffffff] flex flex-col my-[6rem] mx-[1rem]   justify-start items-start lg:hidden"
        }
      >
        <li className="  text-4xl py-[2rem] overflow-hidden text-black bg-[#ffffff] border-b-2 w-full ">
          Docs
        </li>
        <li className=" mt-2 py-[2rem] text-4xl text-black bg-[#ffffff] border-b-2 w-full ">
          {" "}
          Blog
        </li>
        <li className="mt-2 py-[2rem] text-4xl text-black bg-[#ffffff] border-b-2 w-full">
          {" "}
          Enterprise
        </li>
        <li className="mt-2 py-[2rem] text-4xl text-black bg-[#ffffff] border-b-2 w-full">
          {" "}
          Pricing
        </li>
        <li className="mt-2 py-[2rem] text-4xl text-black bg-[#ffffff] border-b-2 w-full">
          {" "}
          FAQ
        </li>
        
      
      </ul>

      <div className=" flex items-center bg-transparent">
        <div onClick={handleClick} className="z-20  lg:hidden w-8 ">
          {!nav ? (
            <FaBars className="text-black h-5 w-6" />
          ) : (
            <FaTimes className="text-black h-5 w-6 bg-[#ffffff]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
