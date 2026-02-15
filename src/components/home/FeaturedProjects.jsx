"use client";
import { RiArrowLeftLine, RiArrowLeftSLine, RiArrowRightLine, RiArrowRightSLine } from "@remixicon/react";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";

export default function FramerCarousel() {
  const carouselData = [
    {
      type: "image",
      slug: "/projects/chanel-website-redesign",
      src: "/images/projects/chanel/cover_img.webp",
    },
    {
      type: "image",
      slug: "/projects/rolls-royce-website-redesign",
      src: "/images/projects/rolls_royce/cover_img.webp",
    },
    {
      type: "image",
      slug: "/projects/advanced-studios",
      src: "/images/projects/advanced_studios/cover_img.webp",
    },
    {
      type: "image",
      slug: "/projects/instagram-clone",
      src: "/images/projects/instagram/cover_img.webp",
    },
    {
      type: "image",
      slug: "/projects/luxe",
      src: "/images/projects/luxe/cover_img.webp",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = carouselData.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const getStyle = (index) => {
    let offset = index - active;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (offset === 0) {
      return {
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 100,
        opacity: 1,
      };
    }

    if (offset === -1) {
      return {
        transform:
          "translateX(-50vw) scale(.7) translateZ(-25vw) rotateY(-25deg)",
        zIndex: 99,
        opacity: 0.6,
      };
    }

    if (offset === 1) {
      return {
        transform:
          "translateX(50vw) scale(.7) translateZ(-25vw) rotateY(25deg)",
        zIndex: 99,
        opacity: 0.6,
      };
    }

    return {
      transform:
        offset < 0
          ? "translateX(-1296px) translateZ(-896px) rotateY(-50deg)"
          : "translateX(1296px) translateZ(-896px) rotateY(50deg)",
      zIndex: 98,
      opacity: 0,
      pointerEvents: "none",
    };
  };

  return (
    <>
      <div className="padding mt-32 center w-full">
        <h2 className="text-6xl font-semibold">Latest Projects</h2>
      </div>
      <div
        className="relative w-full h-screen overflow-hidden"
        >
        <div className="absolute top-1/2 left-0 w-full h-[35vw] -translate-y-1/2 perspective-[900px] [transform-style:preserve-3d]">
          {carouselData.map((item, i) => (
            <Link
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
              href={item.slug}
              prefetch
              key={i}
              className="absolute drop-shadow-2xl left-1/2 w-[50vw] h-full -translate-x-1/2 rounded-2xl overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={getStyle(i)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt=""
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover pointer-events-none"
                />
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setActive((prev) => (prev - 1 + total) % total)}
          className="absolute left-[26vw] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 flex items-center justify-center text-white text-2xl z-10 hover:bg-[#262626] transition-all duration-300 hover:scale-110"
        >
          <RiArrowLeftSLine />
        </button>

        <button
          onClick={() => setActive((prev) => (prev + 1) % total)}
          className="absolute right-[26vw] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 flex items-center justify-center text-white text-2xl z-10 hover:bg-[#262626] transition-all duration-300 hover:scale-110"
        >
          <RiArrowRightSLine />
        </button>
      </div>
    </>
  );
}
