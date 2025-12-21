"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LenisScroll from "@/components/common/LenisScroll";
import { ViewTransitions } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) {
        window.lenis.resize();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);



  return (
    <ViewTransitions routeKey={pathname}>
      <LenisScroll>
        <div className="page-root">
          <Header />
          <div className="overlay opacity-100 bg-black/40 fixed top-0 left-0 w-full h-screen pointer-events-none"></div>
          <main>{children}</main>
          <Footer />
        </div>
      </LenisScroll>
    </ViewTransitions>
  );
}
