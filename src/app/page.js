"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SmoothScroll from "@/components/SmoothScroll";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [ViewChange, SetViewChange] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const tlRef = useRef(null);

   const circleRef = useRef(null);
  const containerRef = useRef(null);

   useEffect(() => {
    // Rotate animation
    gsap.to(circleRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 2,
      transformOrigin: "center center",
    });

    // Fade out on scroll
    gsap.to(containerRef.current, {
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=100 top",
        scrub: true,
      },
    });
  }, []);

  const handleToggleSound = () => {
    if (!isPlaying) {
      audioRef.current.play();
      tlRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      tlRef.current.pause();
      tlRef.current.progress(0);
      gsap.to(".audiowave", {
        height: "3px",
        duration: 0.25,
        ease: "power1.out",
      });
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    tlRef.current = gsap.timeline({ repeat: -1, paused: true });

    tlRef.current.to(".audiowave", {
      height: "12px",
      yoyo: true,
      duration: 0.3,
      ease: "power1.inOut",
      stagger: {
        each: 0.1,
        from: "random",
      },
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      SetViewChange(true);
    }
    // Desktop-only navbar animation
    if (window.innerWidth > 1024) {
      gsap.to(".MainNavBarCont", {
        top: "-70px",
        ease: "linear",
        scrollTrigger: {
          trigger: ".HeroSectionMain",
          start: "top -2%",
          end: "top -7%",
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    const P1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".PAGE2",
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      },
    });
    P1.to(".tCont1", {
      opacity: 0,
    });
    P1.to(".tCont2", {
      opacity: 1,
    });

    const P2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".PAGE3",
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      },
    });
    P2.to(".tCont2", {
      opacity: 0,
    });
    P2.to(".tCont3", {
      opacity: 1,
    });

    // FOOTER
    const F1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".FooterMainCont",
        start: "top 90%",
        end: "top 80%",
        scrub: true,
      },
    });
    F1.to(".MainTextCont", {
      opacity: 0,
    });
  }, []);

  return (
    <>
      {ViewChange === false ? (
        <>
          <NavBar />

          {/* Smooth */}
          <SmoothScroll />

          {/* Background_AUDIO */}
          <audio ref={audioRef} src="/sound/BackgroundSound.mp3" loop />

          {/* Text-Div */}
          <div className="w-[50%] MainTextCont h-fit fixed top-[75%] left-[2%] z-[100] ">
            <div className="w-full h-fit bg-amber-300 relative">
              {/* T1 */}
              <div className="w-full tCont1 h-full flex flex-col absolute top-0 f7 text-white text-[35px] leading-[35px] left-0 z-[20] ">
                <p>TIMELESS</p>
                <p>DESIGN</p>
                {/* BTN */}
                <div className="w-fit h-fit flex px-[20px] py-[10px] text-[14px] mt-[20px] select-none cursor-pointer f7  justify-center items-center text-black bg-white border-[1px] border-white">
                  SHOP
                </div>
              </div>

              {/* T2 */}
              <div className="w-full tCont2 h-full flex flex-col absolute top-0 f7 text-white text-[35px] leading-[35px] left-0 z-30 opacity-0">
                <p>DIMOND GIFT</p>
                <p>DESIGN</p>
                {/* BTN */}
                <div className="w-fit h-fit flex px-[20px] py-[10px] text-[14px] mt-[20px] select-none cursor-pointer f7   justify-center items-center text-black bg-white border-[1px] border-white">
                  SHOP
                </div>
              </div>

              {/* T2 */}
              <div className="w-full tCont3 h-full flex flex-col absolute top-0 f7 text-white text-[35px] leading-[35px] left-0 z-40 opacity-0">
                <p>GAMING</p>
                <p>MOUSE</p>
                {/* BTN */}
                <div className="w-fit h-fit flex px-[20px] py-[10px] text-[14px] mt-[20px] select-none cursor-pointer f7  justify-center items-center text-black bg-white border-[1px] border-white">
                  SHOP
                </div>
              </div>
            </div>
          </div>

          {/* BTN-On OFF */}
          <div
            onClick={handleToggleSound}
            className="w-fit h-fit select-none flex justify-end text-white items-end text-[14px] tracking-tight leading-[14px] gap-[7px] cursor-pointer fixed top-[90%] right-[5%] z-[100] px-[20px]"
          >
            {isPlaying ? "OFF" : "ON"}

            {/* Audio-Waves */}
            <div className="w-fit h-fit flex justify-end items-end gap-[4px]">
              <div className="audiowave w-[2px] h-[3px] bg-white"></div>
              <div className="audiowave w-[2px] h-[3px] bg-white"></div>
              <div className="audiowave w-[2px] h-[3px] bg-white"></div>
              <div className="audiowave w-[2px] h-[3px] bg-white"></div>
            </div>
          </div>

          {/* 3D-Section */}
          <Experience />

          {/* Sections */}
          <div className="w-full h-fit flex flex-col relative">
            <div className="HeroSectionMain w-full h-screen"></div>
            <div className="PAGE2 w-full h-screen"></div>
            <div className="PAGE3 w-full h-screen"></div>
          </div>

          <Footer />

          <div
            ref={containerRef}
            className="fixed z-[100] bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 select-none"
          >
            {/* Animated Circle */}
            <div className="relative w-14 h-14 flex items-center justify-center">
              {/* Rotating stroke */}
              <div
                ref={circleRef}
                className="absolute inset-0 rounded-full border border-white/40"
                style={{
                  borderTopColor: "transparent",
                  borderWidth: "2px",
                }}
              ></div>

              {/* Arrow */}
              <span className="text-white text-xl font-light">↓</span>
            </div>

            {/* Text */}
            <p className="text-white text-[7px] tracking-[2px]">
              SCROLL TO NAVIGATE
            </p>
          </div>
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
