"use client"
import { ProjectsData } from '@/data/ProjectsData'
import { RiArrowRightUpLine, RiGithubFill, RiGithubLine } from '@remixicon/react'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import React from 'react'

const categories = [
  "Coding",
  "UI/UX",
  "HTML/CSS",
  "Frontend",
  "Backend",
  "Robotics",
  "Machine Learning",
  "React",
  "Flutter",
  "NextJS",
  "TailwindCSS",
]
const page = () => {
  return (
    <>
      <div className="w-full padding h-[70vh] flex flex-col justify-end">
        <h2 className='text-6xl font-semibold'>Explore Mine Projects</h2>
        <p className='text-2xl w-1/2 leading-none my-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid consequatur nobis illo in ipsum, at suscipit quod atque ex.</p>
        <div className="w-full flex flex-wrap gap-2">
          {
            categories.map((category) => (
              <div key={category} className="bg-[#E2E1DF] uppercase font-semibold text-sm px-5 py-3 rounded-full cursor-pointer hover:bg-[#262626] transition-all duration-300 hover:text-white">
                {category}
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full padding grid grid-cols-2 gap-5">
        {
          ProjectsData.map((item, i) => (
            <Link
              key={i}
              title={item.title}
              href={`/projects/${item.slug}`}
              className="block w-full aspect-video group rounded-xl overflow-hidden relative"
            >
              <Image
                height={500}
                width={500}
                src={item.cover_img}
                alt={item.title}
                className="cover transition-all duration-300 group-hover:brightness-[.6] group-hover:blur-[.25rem]"
              />

              {/* CATEGORY */}
              <div className="absolute top-0 p-3 opacity-0 group-hover:opacity-100 transition">
                <div className="bg-[#E2E1DF] uppercase font-semibold text-sm px-3 py-2 rounded-lg">
                  {item.category}
                </div>
              </div>

              {/* ICONS */}
              <div className="absolute bottom-0 right-0 p-5 flex gap-5 opacity-0 group-hover:opacity-100 transition">

                {item.github_link && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(item.github_link, "_blank");
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
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(item.live_link, "_blank");
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

          ))
        }
      </div>

    </>
  )
}

export default page