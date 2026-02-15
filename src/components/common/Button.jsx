import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'

const Button = ({ text, theme = 'light' , ...props }) => {
  return (
    <>
      {theme === 'light' ? (
        <div {...props} className=' h-12 px-5 cursor-pointer hover:pl-2 transition-all duration-300 group py-2 flex items-center gap-2 bg-[#E2E1DF] rounded-full uppercase font-semibold text-sm w-fit'>
          <div className="size-2 group-hover:size-8 center overflow-hidden rounded-full black transition-all duration-300">
            <RiArrowRightLine size={18} className='-translate-x-4 group-hover:translate-x-0 transition-all duration-300' color='white' />
          </div>
          {text}
        </div>
      ) : (
        <div {...props} className=' h-12 px-5 cursor-pointer hover:pl-2 transition-all duration-300 group py-2 flex items-center gap-2 bg-transparent border border-[#E2E1DF] rounded-full uppercase font-semibold text-sm w-fit'>
          <div className="size-2 group-hover:size-8 center overflow-hidden rounded-full bg-[#E2E1DF] transition-all duration-300">
            <RiArrowRightLine size={18} className='-translate-x-4 group-hover:translate-x-0 transition-all duration-300' color='black' />
          </div>
          {text}
        </div>
      )}
    </>
  )
}

export default Button