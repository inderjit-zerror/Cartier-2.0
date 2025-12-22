"use client";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const CameraScroll = () => {
  const { camera, viewport } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    const scrollY = scrollRef.current;
    const sectionHeight = window.innerHeight;

    const targetY = -(scrollY / sectionHeight) * viewport.height;

    // Smooth movement
    camera.position.y += (targetY - camera.position.y) * 0.1;
  });

  return null;
};

export default CameraScroll;
