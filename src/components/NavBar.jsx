import Image from "next/image";
import React from "react";
import { SlHeart } from "react-icons/sl";
import { LuUserRound } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";


const NavBar = () => {
  const menuItems = [
    "The holiday season",
    "High Jewelry",
    "Jewelry",
    "Watches",
    "Bags and accessories",
    "Fragrances",
    "Home & Stationery",
    "News",
    "La Maison",
  ];

  return (
    <>
      <div className="w-full MainNavBarCont h-fit flex flex-col fixed top-0 left-0 z-[100] pt-[20px] max-lg:pt-[10px] max-lg:pb-[10px] bg-white ">
        {/* TOP */}
        <div className="w-full h-[50px] flex relative justify-between  px-[4vw] md:px-[8vw] items-center">
          {/* LEft */}
          <div className="w-fit h-fit f7 uppercase text-[12px] flex gap-[10px] ">
            <p className="max-lg:hidden">United States </p>
            <p className="max-lg:hidden">Contact Us </p>
            <p className="max-lg:hidden">Services </p>

            {/* Menu for mobile */}
            <IoMenuOutline className="lg:hidden text-[24px]"  />

          </div>

          {/* Center */}
          <div className="w-fit h-[50px] flex justify-center items-center absolute top-[0%] left-[50%] translate-x-[-50%] overflow-hidden ">
            <Image
              src={"/data/cartierLogo.svg"}
              className="w-[150px] "
              width={1000}
              height={1000}
              alt="logo"
            />
            
          </div>

          {/* Right */}
          <div className="w-fit h-fit flex gap-[10px] text-[18px] max-lg:text-[22px] max-lg:pr-[10px]">
            <SlHeart className="max-lg:hidden" />
            <LuUserRound className="max-lg:hidden" />
            <IoLocationOutline />
            <BsBag />
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full h-fit flex px-[4vw] md:px-[8vw] py-[25px] gap-[10px] justify-center items-center max-lg:hidden">
            {
                menuItems.map((item,index)=>{
                    return(
                        <p className="f7 text-[12px] leading-[13px] uppercase select-none cursor-pointer" key={index}>{item}</p>
                    )
                })
            }

            | <IoSearchOutline />
        </div>
      </div>
    </>
  );
};

export default NavBar;
