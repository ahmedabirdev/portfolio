"use client"

import { ProjectsData } from '@/data/ProjectsData'
import { RiArrowRightUpLine, RiGithubFill, RiYoutubeFill } from '@remixicon/react'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [isFading, setIsFading] = useState(false);
  const categories = ["All", ...new Set(ProjectsData.map(item => item.category))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? ProjectsData
      : ProjectsData.filter(item => item.category === activeCategory)


  return (
    <>
      {/* HEADER */}
      <div className="w-full padding h-[70vh] flex flex-col justify-end">
        <h2 className="text-6xl font-semibold">Explore Mine Projects</h2>
        <p className="text-2xl w-1/2 leading-none my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* CATEGORIES */}
        <div className="w-full flex flex-wrap gap-2">
          {categories.map((category, i) => {
            const count =
              category === "All"
                ? ProjectsData.length
                : ProjectsData.filter(item => item.category === category).length;

            return (
              <button
                key={i}
                onClick={() => {
                  setIsFading(true);
                  setTimeout(() => {
                    setActiveCategory(category);
                    setIsFading(false);
                  }, 300);
                }}
                className={`uppercase flex items-center text-sm px-5 py-3 rounded-full cursor-pointer transition-all duration-300
        ${activeCategory === category
                    ? "bg-[#262626] text-white"
                    : "bg-[#E2E1DF] font-semibold hover:bg-[#262626] hover:text-white"
                  }`}
              >
                <p className='translate-y-[1px]'>{category}</p>
                <sup className='pl-1'>({count})</sup>
              </button>
            );
          })}

        </div>
      </div>

      {/* PROJECT GRID */}
      <div
        className={`w-full padding py-0! grid grid-cols-2 gap-5 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"
          }`}
      >
        {filteredProjects.map((item, i) => (
          <Link
            key={i}
            title={item.title}
            href={`/projects/${item.slug}`}
            className="block w-full aspect-video  drop-shadow-xl group rounded-xl overflow-hidden relative"
          >
            <Image
              height={500}
              width={500}
              src={item.cover_img}
              alt={item.name}
              className="cover transition-all duration-300 group-hover:brightness-[.6] group-hover:blur-[.25rem]"
            />

            {/* CATEGORY TAG */}
            <div className="absolute bottom-0 p-3 opacity-0 group-hover:opacity-100 transition">
              <div className="bg-[#E2E1DF] uppercase font-semibold text-sm px-3 py-2 rounded-lg">
                <p className="translate-y-[1px]">{item.name}</p>
              </div>
            </div>

            {/* ICONS */}
            <div className="absolute bottom-0 right-0 p-5 flex gap-5 opacity-0 group-hover:opacity-100 transition">
              {item.yt_video && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(item.yt_video, "_blank")
                  }}
                  className="group/btn"
                >
                  <RiYoutubeFill
                    size={32}
                    color="white"
                    className="transition-transform duration-300 group-hover/btn:scale-[1.2]"
                  />
                </button>
              )}
              {item.github_link && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(item.github_link, "_blank")
                  }}
                  className="group/btn"
                >
                  <RiGithubFill
                    size={32}
                    color="white"
                    className="transition-transform duration-300 group-hover/btn:scale-[1.2]"
                  />
                </button>
              )}
              {item.live_link && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(item.live_link, "_blank")
                  }}
                  className="group/btn"
                >
                  <RiArrowRightUpLine
                    size={32}
                    color="white"
                    className="transition-transform duration-300 group-hover/btn:scale-[1.2]"
                  />
                </button>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default page
