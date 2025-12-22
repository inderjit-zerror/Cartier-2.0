'use client'
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useEffect, useState } from "react";

export default function Home() {
  const [ViewChange, SetViewChange] = useState(false);

  useEffect(()=>{
    if(window.innerWidth <= 1000){
      SetViewChange(true)
    }

  },[])

  return (
    <>
      {ViewChange === false ? (
        <>
          {/* Smooth */}
          <SmoothScroll />

          {/* 3D-Section */}
          <Experience />

          {/* Sections */}
          <div className="w-full h-fit flex flex-col relative">
            <div className="w-full h-screen"></div>
            <div className="w-full h-screen"></div>
            <div className="w-full h-screen"></div>
          </div>

          <Footer />
        </>
      ) : (
        <>
          <div className="w-full h-screen flex justify-center items-center bg-[#202020] text-[18px] text-center text-white px-[20vw]">
            Switch To PC/Laptop For Best Experience
          </div>
        </>
      )}
    </>
  );
}
