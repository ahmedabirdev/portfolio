"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const cardsData = [
    {
        title: "Graphic Design",
        desc: "Graphic design is a creative discipline that involves crafting visual content to communicate ideas, messages, or emotions effectively. By combining art, technology, and storytelling, graphic design plays a pivotal role in shaping the way individuals and businesses engage with the world. It encompasses a vast range of applications, from branding and advertising to digital media and user interface design.",
        img: 'https://framerusercontent.com/images/muMF2cIwh5QapdR9YxQ3m17KBbo.png?scale-down-to=1024',
    },
    {
        title: "Web design",
        desc: "Web design is the art and science of creating visually appealing and functional websites that provide seamless user experiences. By blending aesthetics, usability, and cutting-edge technology, web design shapes how individuals interact with digital spaces. It encompasses layout design, typography, color schemes, and responsive frameworks, ensuring websites look and perform flawlessly across devices. Whether for businesses, personal portfolios, or e-commerce platforms",
        img: 'https://framerusercontent.com/images/dlvXUdV5I373H07NscF7BKx1XE.png?scale-down-to=1024',
    },
    {
        title: "UX/UI design",
        desc: "UX/UI design focuses on enhancing user experiences and creating intuitive interfaces that connect people with digital products and services. UX (User Experience) emphasizes usability, accessibility, and the overall journey a user takes, ensuring interactions are seamless and enjoyable. UI (User Interface) complements this by designing visually appealing layouts, buttons, and interactive elements that guide users effortlessly. Together, UX/UI design is a blend of functionality",
        img: 'https://framerusercontent.com/images/fYeQpticBuVUEXsko8RjmjgJ4.png?scale-down-to=1024',
    },
    {
        title: "Framer developer",
        desc: "A Framer developer specializes in building interactive and visually stunning digital experiences using Framer, a powerful design and prototyping tool. Combining creative design principles with advanced coding skills, they craft responsive websites, animations, and prototypes that bring ideas to life. With a focus on seamless interactions and performance, Framer developers bridge the gap between design and development, enabling teams to iterate quickly and deliver polished, user-centric products.Abstract dark blue and brown wavesFramer developer",
        img: 'https://framerusercontent.com/images/hYMZWTnsPJbWuOENJsVAJYxZho.png?scale-down-to=1024',
    },
]

const StickyCards = () => {

    useGSAP(() => {
        var tl = gsap.timeline({
            defaults: {
                ease: "linear"
            },
            scrollTrigger: {
                trigger: ".sticky_cards_paren",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })
        tl.to(".stick_crd_0", {
            y: -40,
            scale: .95
        })
        tl.to(".stick_crd_0", {
            y: -90,
            scale: .85
        })
        tl.to(".stick_crd_1", {
            y: -40,
            scale: .95
        }, "<")
        tl.to(".stick_crd_1", {
            y: -90,
            scale: .85
        })
        tl.to(".stick_crd_2", {
            y: -40,
            scale: .95
        }, "<")


    })

    return (
        <>
            <div className="w-full center mt-44 mb-20">
                <h2 className='text-6xl font-semibold'>What I Do</h2>
            </div>
            <div className=" sticky_cards_paren w-full relative  h-min flex flex-col gap-20  items-center ">
                {cardsData.map((card, index) => (
                    <div key={index} className={`  stick_crd_${index} w-[80%] black text-white flex justify-between gap-32 h-[65vh] rounded-2xl  sticky top-[20vh] p-10`}>
                        <div className="w-[65%] h-full flex flex-col justify-center">
                            <h2 className='text-5xl '>{card.title}</h2>
                            <div className="w-full h-px mt-6 mb-20 bg-white"></div>
                            <p className='text-xl '>{card.desc}</p>
                        </div>

                        <div className="w-[35%] h-full  overflow-hidden rounded-xl">
                            <img className='cover' src={card.img} alt="" />
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default StickyCards