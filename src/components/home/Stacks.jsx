import React from 'react'
import Marquee from 'react-fast-marquee'

const stacks = [
    {
        title: "Figma",
        img: "https://framerusercontent.com/images/rMW2AHsItIISOjMZ2b0Dhjf2K8.svg",
        desc: "I use Figma for creating wireframes, prototypes, and high-fidelity UI designs. Its real-time collaboration features make it perfect for working closely with teams and getting instant feedback."
    },
    {
        title: "Framer",
        img: "https://framerusercontent.com/images/S9jcfmxoHz0lxwq2GZmBerW44c0.svg",
        desc: "I use Framer when I need to create high-fidelity prototypes with advanced animations and micro-interactions to test user behavior and refine designs."
    },
    {
        title: "Photoshop",
        img: "https://framerusercontent.com/images/4QRuC7SpMfvpJ9mVUmq8OtF794.svg",
        desc: "Photoshop is essential for me when editing images or creating detailed visual assets like icons or banners that enhance the user interface."
    },
    {
        title: "HTML 5",
        img: "https://framerusercontent.com/images/oWZSEqU9CkCqrvKYWs7ggbbd7Ns.svg",
        desc: "I use HTML5 to structure content when prototyping or testing designs in a browser, ensuring layouts and interactions function as intended."
    },
    {
        title: "CSS 3",
        img: "https://framerusercontent.com/images/Rein5rUZgVUYVemycKeqenDAGg.svg",
        desc: "CSS3 allows me to style and bring my designs to life by adding layouts, colors, animations, and responsive adjustments directly to web pages."
    },
    {
        title: "Notion",
        img: "https://framerusercontent.com/images/E4jCxZqDNozauk1T1UKovtQvNK4.svg",
        desc: "I use Notion to organize design projects, document ideas, and keep track of user research and feedback. It helps me stay structured and aligned with the team."
    },
    {
        title: "Webflow",
        img: "https://framerusercontent.com/images/QZXUnhSBWgu9rsfmUFKThtP1aVI.svg",
        desc: "I use Webflow to create interactive, responsive websites without needing extensive coding. It’s great for turning design concepts into functional web experiences."
    },
]

const Stacks = () => {
    return (
        <>
            <div className="w-full center mt-44 mb-20">
                <h2 className='text-6xl font-semibold'>Stacks I Use</h2>
            </div>
                <Marquee gradientColor='#F5F5F5' gradientWidth={200} className='stacks_marquee py-5 overflow-hidden h-[20vw] flex items-end' speed={25} gradient={true} direction='left' pauseOnHover={true}>
                {stacks.map((item, i) => (
                    <div key={i} className="w-[25vw] h-[18vw] border border-black/10 hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 rounded-xl p-5 flex justify-between items-center ml-10 flex-col text-center ">
                        <img className='w-32' src={item.img} alt="" />
                        <p className='font-semibold  text-2xl'>{item.title}</p>
                        <p className=' leading-tight '>{item.desc}</p>
                    </div>
                ))}
                </Marquee>
                <Marquee gradientColor='#F5F5F5' gradientWidth={200} className='stacks_marquee py-5 overflow-hidden h-[20vw] flex items-end ' speed={25} gradient={true} direction='right' pauseOnHover={true}>
                {stacks.map((item, i) => (
                    <div key={i} className="w-[25vw] h-[18vw] border border-black/10 hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 rounded-xl p-5 flex justify-between items-center ml-10 flex-col text-center ">
                        <img className='w-32' src={item.img} alt="" />
                        <p className='font-semibold  text-2xl'>{item.title}</p>
                        <p className=' leading-tight '>{item.desc}</p>
                    </div>
                ))}
                </Marquee>
        </>
    )
}

export default Stacks