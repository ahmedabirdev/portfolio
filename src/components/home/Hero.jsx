import React from 'react'
import Button from '../common/Button'

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center px-40">
        <h2 className='text-6xl font-semibold'>I’m Ahmed Abir, <br /> a product designer.</h2>
        <p className='text-2xl w-1/2 leading-none my-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid consequatur nobis illo in ipsum, at suscipit quod atque ex.</p>
        <Button text={"Download CV"}/>
      </div>
    </>
  )
}

export default Hero