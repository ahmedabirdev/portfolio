import React from 'react'

const FeaturedProjects = () => {
    return (
        <>
            <div className="padding background">
                <div className="w-full flex font-semibold items-center justify-between">
                    <p className=' font-semibold text-3xl uppercase'>Featured Projects</p>
                    <div className=' text-xl block relative w-fit cursor-pointer group'>
                        <h2>
                            View All →
                        </h2>
                        <div className="absolute left-0 group-hover:w-full transition-all duration-300 bottom-0.5 w-0 rounded-full h-[2px] black"></div>
                    </div>
                </div>

                <div className="w-full flex relative z-10 flex-wrap gap-5 mt-10 text-white">
                    <div className="w-[59%] group h-[26vw] relative overflow-hidden rounded-2xl ">
                        <div className="flex z-[10] opacity-0 transition-all duration-300 group-hover:opacity-100 h-full flex-col justify-between p-6">
                            <div className="flex gap-5">
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                            </div>
                            <p className='text-5xl font-semibold'>LUXE</p>
                        </div>
                        <img className='cover group-hover:brightness-70 transition-all group-hover:blur-md blur-[0] duration-300 brightness-100 absolute z-[-1] top-0 left-0 ' src="https://yourwave.nl/wp-content/uploads/2025/09/holahurghada-scaled.jpg" alt="" />
                    </div>
                    <div className="w-[39%] h-[26vw] group relative overflow-hidden rounded-2xl ">
                        <div className="flex z-[10] opacity-0 transition-all duration-300 group-hover:opacity-100 h-full flex-col justify-between p-6">
                            <div className="flex gap-5">
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                            </div>
                            <p className='text-5xl font-semibold'>LUXE</p>
                        </div>
                        <img className='cover group-hover:brightness-70 transition-all group-hover:blur-md blur-[0] duration-300 brightness-100 absolute z-[-1] top-0 left-0 ' src="https://yourwave.nl/wp-content/uploads/2025/11/jve.png" alt="" />
                    </div>
                    <div className="w-[39%] h-[26vw] group relative overflow-hidden rounded-2xl ">
                        <div className="flex z-[10] opacity-0 transition-all duration-300 group-hover:opacity-100 h-full flex-col justify-between p-6">
                            <div className="flex gap-5">
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                            </div>
                            <p className='text-5xl font-semibold'>LUXE</p>
                        </div>
                        <img className='cover group-hover:brightness-70 transition-all group-hover:blur-md blur-[0] duration-300 brightness-100 absolute z-[-1] top-0 left-0 ' src="https://yourwave.nl/wp-content/uploads/2025/09/Group-1.png" alt="" />
                    </div>
                    <div className="w-[59%] h-[26vw] group relative overflow-hidden rounded-2xl ">
                        <div className="flex z-[10] opacity-0 transition-all duration-300 group-hover:opacity-100 h-full flex-col justify-between p-6">
                            <div className="flex gap-5">
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                                <button className='px-4 py-2 bg-white/20 rounded-lg font-semibold'>
                                    <p>dndcdcdc</p>
                                </button>
                            </div>
                            <p className='text-5xl font-semibold'>LUXE</p>
                        </div>
                        <img className='cover group-hover:brightness-70 transition-all group-hover:blur-md blur-[0] duration-300 brightness-100 absolute z-[-1] top-0 left-0 ' src="	https://yourwave.nl/wp-content/uploads/2025/09/uxdesignwithoutshadow.jpg.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProjects