"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Page = () => {
  const planeRef = useRef(null);
  const pathRef = useRef(null);

  const flyPlane = () => {
    gsap.to(planeRef.current, {
      duration: 5,
      ease: "power1.inOut",
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
  };

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      
      {/* Responsive SVG Path */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <path
          ref={pathRef}
          d="M55 55 C65 50,72 45,78 40 C85 35,95 30,92 20 C90 10,78 10,75 20 C72 35,68 50,60 60 C55 65,50 70,45 75 C40 80,35 85,40 90 C45 95,55 90,55 80 C55 70,55 60,45 55 C35 50,20 50,10 45 C5 40,5 30,10 25 C15 20,25 25,28 35 C32 50,35 65,45 65 C50 65,52 60,55 55"
          fill="none"
          stroke="transparent"
        />
      </svg>

      {/* Contact Button */}
      <button
        onClick={flyPlane}
        className="flex items-center gap-2 text-xl z-10"
      >
        contact
        <img
          ref={planeRef}
          src="https://cdn-icons-png.flaticon.com/512/1350/1350120.png"
          className="w-6"
          alt="plane"
        />
      </button>
    </div>
  );
};

export default Page;
