import React from 'react'
import { ContactData, MenuData, SocialData } from '../helpers/MenuData'
import Button from './Button'
import { Link } from 'next-view-transitions'

const Footer = () => {
  return (
    <>
      <div className="w-full pointer-events-auto mt-20  z-[1] left-0 px-[6vw]  ">
        <div className="w-full  gap-4 grid  grid-cols-[49%_17%_17%_17%]">

          <div className="w-full font-semibold space-y-5 text-xl">
            <h2 className='text-3xl'> Let’s Connect</h2>
           <Button text={"Send Mail"} />
          </div>

          <div className=" font-semibold space-y-3 text-xl">
            <h2>Menu</h2>
            <div className=" font-thin text-base space-y-1">
              {
                MenuData.map((link, index) =>
                  <Link href={link.href} key={index} className=' flex items-center  group  '>
                    <div className="size-0 bg-black group-hover:size-1 rounded-full group-hover:mr-1 transition-all duration-300"></div>
                    {link.title}
                  </Link>
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