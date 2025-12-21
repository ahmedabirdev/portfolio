"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(() => {
        const split_chars = SplitText.create(".split_txt", { type: "chars" });
        gsap.set(split_chars.chars, { opacity: 0.15 });

        gsap.to(split_chars.chars, {
            scrollTrigger: {
                trigger: ".about_paren",
                start: "top bottom",
                end: "bottom center",
                scrub: true,
            },
            opacity: 1,
            duration: .01,
            delay: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
        });
    })

    return (
        <>
            <div className="background about_paren w-full   padding flex flex-col justify-center">
                <div className=" mt-5 text-7xl font-semibold py-[12vw] leading-[5.2rem]">
                    <p className='split_txt'><span className='text-xl heading  -translate-y-3'>About Me</span> <span className='opacity-0'>.....................................</span>
                        I’m a <span className='heading font-thin'> passionate  </span>  innovator from Bangladesh, using computer science and  <span className='heading font-thin'> creative </span>  technology to <span className='heading font-thin'> solve </span>   real-world problems and build <span className='heading font-thin'> impactful,</span> future-driven solutions.</p>
                </div>
            </div>
        </>
    )
}

export default About