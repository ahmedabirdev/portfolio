"use client"
import React from 'react'
import Button from '../common/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

useGSAP(() => {
  const ctx = gsap.context(() => {
    gsap.to(".hero_video", {
      y: 400,
      filter: "brightness(.2)",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero_paren",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
  });

  return () => ctx.revert();
}, []);


  return (
    <>
      <div className=" hero_paren w-full h-screen overflow-hidden">
        <video loop autoPlay muted playsInline className=' hero_video brightness-100 cover ' src="/videos/showreel.mp4"></video>
      </div>
    </>
  )
}

export default Hero