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
            <div className="background about_paren w-full text-center padding flex flex-col justify-center">
                <h2 className='text-6xl  font-semibold '>About Me</h2>
                <div className=" text-4xl space-y-10 px-52 font-semibold  pt-10 ">
                    <p className='split_txt'>I’m a <span className='heading font-thin'> passionate  </span>  innovator from Bangladesh, using computer science and  <span className='heading font-thin'> creative </span>  technology to <span className='heading font-thin'> solve </span>   real-world problems and build <span className='heading font-thin'> impactful,</span> future-driven solutions.</p>
                    <p className='split_txt'>I’m a <span className='heading font-thin'> passionate  </span>  innovator from Bangladesh, using computer science and  <span className='heading font-thin'> creative </span>  technology to <span className='heading font-thin'> solve </span>   real-world problems and build <span className='heading font-thin'> impactful,</span> future-driven solutions.</p>
                </div>
                <div className="w-full mt-32 grid grid-cols-3">
                    <div className="w-full font-semibold center flex-col">
                        <h2 className='text-6xl'>20+</h2>
                        <p className='text-xl'>Stacks i use</p>
                    </div>
                    <div className="w-full font-semibold center flex-col">
                        <h2 className='text-6xl'>15 <sup>+</sup></h2>
                        <p className='text-xl'>Projects</p>
                    </div>
                    <div className="w-full font-semibold center flex-col">
                        <h2 className='text-6xl'>2</h2>
                        <p className='text-xl'>Research paper published</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About