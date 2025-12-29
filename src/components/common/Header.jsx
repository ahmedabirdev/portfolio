"use client"
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { MenuData } from '../helpers/MenuData'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {

    if (openMenu) {
      gsap.to(".menu_paren", {
        width: "14vw",
        backgroundColor: "white",
      })
      gsap.to(".menu_btn", {
        backgroundColor: "transparent",
      })
      gsap.to(".overlay", {
        opacity: 1,
        backdropFilter: "blur(4px)"
      })
      gsap.to(".anim_link", {
        opacity: 1,
        delay: 0.5,
        stagger: 0.05,
        transform: "translateY(0)"
      })
    } else {
      gsap.to(".menu_paren", {
        width: "4rem",
        backgroundColor: "transparent",
        delay: 0.3
      })
      gsap.to(".menu_btn", {
        backgroundColor: "#E2E1DF",
      })
      gsap.to(".anim_link", {
        opacity: 0,
        stagger: 0.05,
        transform: "translateY(8px)"
      })
      gsap.to(".overlay", {
        opacity: 0,
        backdropFilter: "blur(0px)",
        delay: 0.5
      })
    }
  }, [openMenu])


  return (
    <>
      <div className=" fixed top-0 z-[99]  padding w-full  flex justify-end">
        <div className=" menu_paren w-16 overflow-hidden  p-6 relative  rounded-4xl origin-top-right   aspect-square ">
          <h2 className='text-xl anim_link opacity-0 translate-y-2 font-semibold'>Menu</h2>
          <div className="flex flex-col mt-5 gap-y-2">
            {
              MenuData.map((link, index) =>
                <a href={link.href} key={index} className='text-2xl flex items-center gap-0 group anim_link opacity-0 translate-y-2 uppercase font-semibold'>
                  <div className="size-0 bg-black group-hover:size-2 rounded-full group-hover:mr-2 transition-all duration-300"></div>
                  {link.title}
                </a>
              )
            }
          </div>
          <button onClick={() => setOpenMenu(!openMenu)} className='size-12 menu_btn bg-[#E2E1DF] absolute right-2 top-2 rounded-full shrink-0 center '>
            <Hamburger size={18} toggled={openMenu} toggle={setOpenMenu} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Header