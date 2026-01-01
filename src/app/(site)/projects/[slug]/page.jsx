"use client";
import { ProjectsData } from "@/data/ProjectsData";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "next-view-transitions";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {

    const [expandDesc, setExpandDesc] = useState(false)

    const { slug } = useParams();

    const project = ProjectsData.find((project) => project.slug === slug);

    if (!project) return null;

    return (
        <>
            <>
                <div className="w-full h-[60vh]  flex flex-col justify-end padding pb-0! ">
                    <h2 className="text-6xl font-semibold">{project.title}</h2>
                    <p className="text-2xl w-1/2 leading-none my-5 ">{project.subtitle}</p>
                    <div className="w-full   flex gap-2 mt-10">
                        {
                            project.categories.map((category) => (
                                <div key={category} className="bg-[#E2E1DF] uppercase font-semibold text-sm px-5 py-3 rounded-full ">
                                    {category}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="padding flex gap-x-10  text-xl leading-tight">
                    <div className="w-1/2">
                        <p>{project.desc}</p>
                        <button onClick={() => setExpandDesc(!expandDesc)} className="mt-2 opacity-50 hover:opacity-100 transition-all duration-300">Read {expandDesc ? "Less" : "More"}</button>
                    </div>
                    <div
                        className={`w-1/2 overflow-hidden border-t pt-12 space-y-12 border-black/20
    transition-[max-height,opacity] duration-500 ease-in-out
    ${expandDesc ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
  `}
                    >
                        <div className="space-y-5">
                            <h2 className="font-semibold">A Greentech Insight</h2>
                            <p className="leading-tight text-lg opacity-80">Sylvera were seeking a flexible brand and design system to help the company expand into their next phase of growth and accurately represent data driven insights for investors. The Sylvera and New Genre partnership began through our experience in greentech and comprehensive, multi-platform design systems.</p>
                        </div>
                        <div className="space-y-5">
                            <h2 className="font-semibold">Then it Clicked</h2>
                            <p className="leading-tight text-lg opacity-80">As a foundational element, we developed a custom masking shape system derived from flattened world map projections. The grid system is inspired by longitude and latitude lines that represent pin point accuracy in carbon data whilst bringing structure to the design system.</p>
                            <p className="leading-tight text-lg opacity-80">In creating the Sylvera logo, we drew inspiration from a globe and combined that with an off centre click effect to signify shifting toward positive climate action. The click effect is a recurring motif across the design system and can also be seen in the intersection of the grid as the axis points meet and click together.</p>
                            <p className="leading-tight text-lg opacity-80">We chose the Aeroport typeface to embody clear legibility and to further enhance the notion of open access to critical climate data. The consistent application allows investors to easily navigate complex data and environmental insights.</p>
                        </div>
                        <button
                            onClick={() => {
                                setExpandDesc(false);
                                window.lenis?.scrollTo(0, { duration: 1 });
                            }}
                            className="mt-2 opacity-50 hover:opacity-100 transition-all duration-300"
                        >
                            Read Less
                        </button>

                    </div>
                </div>
                <div className="padding">
                    <div className="w-full grid gap-5 grid-cols-2 pt-16 border-t border-black/20">
                        <div className="w-full rounded-xl overflow-hidden col-span-2">
                            <video loop autoPlay muted playsInline className="cover" src="https://framerusercontent.com/assets/pi3nDUOR6bddbonV6pQOZJGXMM.mp4"></video>
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <img className="cover" src="https://framerusercontent.com/images/4eIxatehd7PwkcreyU4fOz3APk.webp?width=1920&height=2400" alt="" />
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <img className="cover" src="https://framerusercontent.com/images/wlmPZzV0c27t3Ze9sL4nPe3uWc.webp?scale-down-to=2048&width=3840&height=2160" alt="" />
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-2">
                            <video loop autoPlay muted playsInline className="cover" src="https://framerusercontent.com/assets/VyLa1FwLisPRfsZs9kaVqt78I.mp4"></video>
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <video className="cover" loop autoPlay muted playsInline src="https://framerusercontent.com/assets/39EJlm8b5IrO241GVxNapHsMU.mp4" alt="" />
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <video className="cover" loop autoPlay muted playsInline src="https://framerusercontent.com/assets/4xfB7fdiRsWsJB6jxgi6ZWnjGA.mp4" alt="" />
                        </div>
                    </div>
                </div>
            </>

            <div className="w-full padding py-0! h-20 border-t gap-x-10 border-b border-black/20 text-2xl leading-none font-semibold flex items-center justify-center">
                <button className="flex  hover:-translate-x-3 transition-all duration-300 items-center gap-2">
                    <h2>←</h2>
                    <h2>Prev</h2>
                </button>
                <div className="w-px h-full bg-black/20"></div>
                <button className="flex hover:translate-x-3 transition-all duration-300  items-center gap-2">
                    <h2>Next</h2>
                    <h2>→</h2>
                </button>
            </div>

        </>
    );
};

export default Page;
