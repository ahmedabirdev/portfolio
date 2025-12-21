import React from 'react'
import { ContactData, MenuData, SocialData } from '../helpers/MenuData'

const Footer = () => {
  return (
    <>
      <div className="w-full pointer-events-auto  z-[1] left-0 px-[6vw]  ">
        <div className="w-full  gap-4 grid  grid-cols-[49%_17%_17%_17%]">

          <div className="w-full font-semibold space-y-5 text-xl">
            <h2 className=''> Let’s Connect</h2>
            <button className='px-5 group  gap-3 hover:gap-6 transition-all duration-300 py-2  flex items-center black rounded-md  font-thin text-lg'>
              <p className='text-white'>Send Mail</p>
              <div className="size-5 center rounded-sm font-semibold  bg-white">→</div>
            </button>
          </div>

          <div className=" font-semibold space-y-3 text-xl">
            <h2>Menu</h2>
            <div className=" font-thin text-base space-y-1">
              {
                MenuData.map((link, index) =>
                  <a href={link.href} key={index} className=' flex items-center  group  '>
                    <div className="size-0 bg-black group-hover:size-1 rounded-full group-hover:mr-1 transition-all duration-300"></div>
                    {link.title}
                  </a>
                )
              }
            </div>
          </div>

          <div className=" font-semibold space-y-3 text-xl">
            <h2>Socials</h2>
            <div className=" font-thin text-base space-y-1">
              {
                SocialData.map((link, index) =>
                  <a href={link.href} key={index} className=' flex items-center  group  '>
                    <div className="size-0 bg-black group-hover:size-1 rounded-full group-hover:mr-1 transition-all duration-300"></div>
                    {link.title}
                  </a>
                )
              }
            </div>
          </div>

          <div className=" font-semibold space-y-3 text-xl">
            <h2>Contact</h2>
            <div className=" font-thin text-base space-y-1">
              {
                ContactData.map((link, index) =>
                  <a href={link.href} key={index} className=' flex items-center  group  '>
                    <div className="size-0 bg-black group-hover:size-1 rounded-full group-hover:mr-1 transition-all duration-300"></div>
                    {link.title}
                  </a>
                )
              }
            </div>
          </div>

        </div>

        <div className="w-full  mt-[10vw] flex justify-center items-end  whitespace-nowrap text-center">
          <h2 className=' text-[17vw] leading-[14vw]'>Ahmed Abir</h2>
        </div>
        
      </div>
    </>
  )
}

export default Footer