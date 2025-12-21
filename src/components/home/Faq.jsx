"use client"
import React, { useState } from 'react'
import ScrollVelocity from '../effects/ScrollVelocity'
import Footer from '../common/Footer'

const faq = [
    {
        title: 'How much does a website cost?',
        desc: "Every website is custom-made, so the price depends on your needs. A simple yet stylish website starts at €800 (excluding VAT). Do you have something larger or more complex in mind, such as animations or special features? Then I'm happy to create a customized proposal. Transparency is paramount; you always know what to expect."
    },
    {
        title: 'How much does a website cost?',
        desc: "Every website is custom-made, so the price depends on your needs. A simple yet stylish website starts at €800 (excluding VAT). Do you have something larger or more complex in mind, such as animations or special features? Then I'm happy to create a customized proposal. Transparency is paramount; you always know what to expect."
    },
    {
        title: 'How much does a website cost?',
        desc: "Every website is custom-made, so the price depends on your needs. A simple yet stylish website starts at €800 (excluding VAT). Do you have something larger or more complex in mind, such as animations or special features? Then I'm happy to create a customized proposal. Transparency is paramount; you always know what to expect."
    },
    {
        title: 'How much does a website cost?',
        desc: "Every website is custom-made, so the price depends on your needs. A simple yet stylish website starts at €800 (excluding VAT). Do you have something larger or more complex in mind, such as animations or special features? Then I'm happy to create a customized proposal. Transparency is paramount; you always know what to expect."
    },
]

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <div className="pt-44 background">

                <ScrollVelocity
                    texts={['Creative  —  Visual   —  Immersive   —  Interactive  —  ']}
                    velocity={50}
                    className="custom-scroll-text uppercase"
                />
            </div>

            <div className="w-full background  px-[18vw] py-[13vw] ">
                <p className=' text-6xl font-semibold'>Frequently  Asked <span className='heading font-thin'>Questions</span></p>
                <div className="my-24">
                    {faq.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div key={index} className="mt-12 border-b pb-5">
                                <button
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between text-left"
                                >
                                    <h2 className="text-3xl font-semibold">
                                        0{index + 1}. {item.title}
                                    </h2>

                                    <span
                                        className={`text-4xl font-thin transition-transform duration-500  ${isOpen ? "rotate-270 -translate-x-2" : "rotate-90"
                                            }`}
                                    >
                                        ›
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in ${isOpen ? "grid-rows-[1fr] mt-5" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-2xl">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="w-full   h-[40vw] ">
             
            </div>
        </>
    )
}

export default Faq