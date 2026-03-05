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
      <div className="w-full h-screen flex gap-x-10  items-center padding">

        <div className="space-y-10">
          <h2 className='text-6xl font-semibold'>I’m Ahmed Abir, <br /> a product designer.</h2>
          <p className='text-2xl  leading-none '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid consequatur nobis illo in ipsum, at suscipit quod atque ex.</p>
          <Button text={"Download CV"} />
        </div>

        <div className=" hero_paren w-[80%] rounded-3xl aspect-video overflow-hidden">
          <video loop autoPlay muted playsInline className=' hero_video brightness-100 cover ' src="/videos/showreel.mp4"></video>
        </div>

      </div>
    </>
  )
}

export default Hero