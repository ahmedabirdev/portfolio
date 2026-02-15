"use client";
import { ProjectsData } from "@/data/ProjectsData";
import { RiArrowRightLine, RiArrowRightUpLine, RiCloseLine, RiGithubFill, RiYoutubeFill } from "@remixicon/react";
import { Link } from "next-view-transitions";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {

    const [openYtVideo, setopenYtVideo] = useState(false)
    const [openYtVideo2, setopenYtVideo2] = useState(false)

    const [expandDesc, setExpandDesc] = useState(false)

    const { slug } = useParams();

    const project = ProjectsData.find((project) => project.slug === slug);

    const currentIndex = ProjectsData.findIndex(
        (project) => project.slug === slug
    );

    if (currentIndex === -1) return null;

    const totalProjects = ProjectsData.length;

    const prevIndex =
        currentIndex === 0 ? totalProjects - 1 : currentIndex - 1;

    const nextIndex =
        currentIndex === totalProjects - 1 ? 0 : currentIndex + 1;

    const prevSlug = ProjectsData[prevIndex].slug;
    const nextSlug = ProjectsData[nextIndex].slug;


    if (!project) return null;

    useEffect(() => {
        if (openYtVideo || openYtVideo2) {
            if (window.lenis) window.lenis.stop();
        } else {
            if (window.lenis) window.lenis.start();
        }
    }, [openYtVideo, openYtVideo2])


    return (
        <>
            <>

                <div className={`w-full fixed top-0 left-0 h-screen center z-[9999]  bg-[#00000083] transition-all duration-300 ${openYtVideo ? "opacity-100 pointer-events-auto backdrop-blur-md" : "opacity-0 pointer-events-none backdrop-blur-[0px]"}  `}>
                    <div onClick={() => setopenYtVideo(false)} className="absolute cursor-pointer hover:scale-110 top-5 right-5 center rounded-full size-10 font-bold bg-white transition-all duration-300 ">
                        <RiCloseLine />
                    </div>
                    <div className="h-[90%] aspect-video">
                        <iframe width="100%" height="100%" src={project?.yt_video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className={`w-full fixed top-0 left-0 h-screen center z-[9999]  bg-[#00000083] transition-all duration-300 ${openYtVideo2 ? "opacity-100 pointer-events-auto backdrop-blur-md" : "opacity-0 pointer-events-none backdrop-blur-[0px]"}  `}>
                    <div onClick={() => setopenYtVideo2(false)} className="absolute cursor-pointer hover:scale-110 top-5 right-5 center rounded-full size-10 font-bold bg-white transition-all duration-300 ">
                        <RiCloseLine />
                    </div>
                    <div className="h-[90%] aspect-video">
                        <iframe width="100%" height="100%" src={project?.yt_video2} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="w-full h-[60vh]  flex flex-col justify-end padding pb-0! ">
                    <h2 className="text-6xl font-semibold">{project.name}</h2>
                    <div className="flex gap-x-2">
                        {project.github_link && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    window.open(project.github_link, "_blank")
                                }}
                                className="group/btn"
                            >
                                <RiGithubFill
                                    size={32}
                                    color="black"
                                    className="transition-transform duration-300 group-hover/btn:scale-[1.2]"
                                />
                            </button>
                        )}
                        {project.live_link && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    window.open(project.live_link, "_blank")
                                }}
                                className="group/btn"
                            >
                                <RiArrowRightUpLine
                                    size={32}
                                    color="black"
                                    className="transition-transform duration-300 group-hover/btn:scale-[1.2]"
                                />
                            </button>
                        )}
                    </div>
                    {/* <p className="text-2xl w-1/2 leading-none my-5 ">{project.subtitle}</p> */}
                    <div className="w-full   flex gap-2 mt-10">
                        {
                            project.technologiesUsed.map((category) => (
                                <div key={category} className="bg-[#E2E1DF] uppercase font-semibold text-sm px-5 py-3 rounded-full ">
                                    {category}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="padding flex gap-x-10  text-xl leading-tight">
                    <div className="w-1/2">
                        <p>{project.projectOverview}</p>
                        <button onClick={() => setExpandDesc(!expandDesc)} className="mt-2 opacity-50 hover:opacity-100 transition-all duration-300">Read {expandDesc ? "Less" : "More"}</button>
                    </div>
                    <div
                        className={`w-1/2 overflow-hidden border-t pt-12 space-y-12 border-black/20
    transition-[max-height,opacity] duration-500 ease-in-out
    ${expandDesc ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
  `}
                    >
                        <div className="space-y-5">
                            <h2 className="font-semibold">Project Overview</h2>
                            {project?.shortPreview?.map((paragraph, index) => (
                                <p key={index} className="leading-tight text-lg opacity-80">{paragraph}</p>
                            ))}
                        </div>
                        <div className="w-full grid grid-cols-2">

                            <div className="space-y-5">
                                <h2 className="font-semibold">Skills</h2>
                                {project?.skills?.map((skill, index) => (
                                    <p key={index} className="leading-tight text-lg opacity-80">{skill}</p>
                                ))}
                            </div>
                            <div className="space-y-5">
                                <h2 className="font-semibold">Functionalities</h2>
                                {project?.functionalities?.map((functionality, index) => (
                                    <p key={index} className="leading-tight text-lg opacity-80">{functionality}</p>
                                ))}
                            </div>
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
                    <div onClick={() => setopenYtVideo(true)} className="w-full drop-shadow-xl relative center group rounded-xl overflow-hidden col-span-2 aspect-video">
                        <img className=" w-[6vw] cursor-pointer absolute z-10 invert-100 opacity-0 group-hover:opacity-100 transition-all duration-300" src="https://cdn-icons-png.flaticon.com/512/974/974542.png" alt="" />
                        <img className="cover brightness-100 group-hover:brightness-[.65] group-hover:blur-xs blur-[0px] transition-all duration-300    " src={project?.cover_img} alt="" />
                    </div>
                    {project.yt_video2 && (
                        <div onClick={() => setopenYtVideo2(true)} className="w-full mt-5 drop-shadow-xl relative center group rounded-xl overflow-hidden col-span-2 aspect-video">
                            <img className=" w-[6vw] cursor-pointer absolute z-10 invert-100 opacity-0 group-hover:opacity-100 transition-all duration-300" src="https://cdn-icons-png.flaticon.com/512/974/974542.png" alt="" />
                            <img className="cover brightness-100 group-hover:brightness-[.65] group-hover:blur-xs blur-[0px] transition-all duration-300    " src={project?.cover_img_2} alt="" />
                        </div>
                    )}
                    <div className="w-full grid gap-5 grid-cols-2 pt-5 border-t border-black/20">
                        {project.images.map((image, index) => (
                            <div key={index} className="w-full drop-shadow-xl rounded-xl overflow-hidden">
                                <img className="cover" src={image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </>

            <div className="w-full padding py-0! h-20 border-t gap-x-10 border-b border-black/20 text-2xl leading-none font-semibold flex items-center justify-center">

                <Link href={`/projects/${prevSlug}`}>
                    <button
                        className="flex hover:-translate-x-3 transition-all duration-300 items-center gap-2"
                    >
                        <h2>←</h2>
                        <h2>Prev</h2>
                    </button>
                </Link>

                <div className="w-px h-full bg-black/20"></div>

                <Link href={`/projects/${nextSlug}`}>
                    <button
                        className="flex hover:translate-x-3 transition-all duration-300 items-center gap-2"
                    >
                        <h2>Next</h2>
                        <h2>→</h2>
                    </button>
                </Link>

            </div>


        </>
    );
};

export default Page;
