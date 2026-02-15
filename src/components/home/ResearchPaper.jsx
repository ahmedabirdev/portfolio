// components/ResearchHighlight.jsx
"use client";

import { useEffect, useState } from "react";
import Button from "../common/Button";
import { RiCloseLine } from "@remixicon/react";

export default function ResearchHighlight() {
    const [open, setOpen] = useState(false);

    const researchPaper = {
        title: "AI-Driven Optimization for Real-Time Systems",
        description:
            "This research explores machine learning models for optimizing real-time distributed systems with enhanced latency reduction and performance scalability.",
        tags: ["AI", "Machine Learning", "Optimization"],
        link: "/pdf/SUNNY_KURMI_RESUME.pdf",
    };

        useEffect(() => {
            if (open) {
                if (window.lenis) window.lenis.stop();
            } else {
                if (window.lenis) window.lenis.start();
            }
        }, [open])

    return (
        <>
            <section className="padding mt-32">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl text-center font-semibold">
                        Research Paper
                    </h2>

                    <div className="mt-10 flex bg-white border border-black/20 rounded-2xl p-8">
                        <div className="w-[70%] flex flex-col justify-between">
                            <div>
                                <p className="text-sm uppercase font-semibold mb-5">
                                    Published Research Paper
                                </p>

                                <h2 className="text-4xl font-semibold mb-2">
                                    {researchPaper.title}
                                </h2>
                            </div>

                            <p className="mb-6 text-xl">
                                {researchPaper.description}
                            </p>

                            <div className="flex gap-3 mb-6 flex-wrap">
                                {researchPaper.tags.map((item) => (
                                    <span
                                        key={item}
                                        className="border uppercase font-semibold text-sm px-3 py-1.5 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-5">
                                <Button
                                    text="View Online"
                                    onClick={() => setOpen(true)}
                                />

                                <a href={researchPaper.link} download>
                                    <Button text="Download PDF" />
                                </a>
                            </div>
                        </div>

                        <div 
                        onClick={() => setOpen(true)}
                         className="w-[30%] group cursor-pointer aspect-[3/4] center overflow-hidden hover:drop-shadow-2xl rounded-xl   transition-all duration-300  ">
                            <img
                                className=" group-hover:scale-[1.05] transition-all duration-300  cover "
                                src="https://paperguide.ai/content/images/2025/04/ChatGPT-Image-Apr-24--2025--12_50_51-PM.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className={`w-full fixed top-0 left-0 h-screen center z-[9999]  bg-[#00000083] transition-all duration-300 ${open ? "opacity-100 pointer-events-auto backdrop-blur-md" : "opacity-0 pointer-events-none backdrop-blur-[0px]"}  `}>
                <div onClick={() => setOpen(false)} className="absolute cursor-pointer hover:scale-110 top-5 right-5 center rounded-full size-10 font-bold bg-white transition-all duration-300 ">
                    <RiCloseLine />
                </div>
                <div className="relative w-[90%] h-[90%] bg-black">

                    <iframe
                        src={`${researchPaper.link}#toolbar=1&navpanes=1&scrollbar=1`}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
}
