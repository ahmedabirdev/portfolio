'use client'

import Button from "@/components/common/Button"
import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiYoutubeLine } from "@remixicon/react"

export default function ContactPage() {
    return (

        <>
            <div className="w-full  padding space-y-20  bg-neutral-900 text-[#F5F5F5]">
                <div className="w-full center pt-32">
                    <h2 className="text-[14vw]  leading-none">Contact Me</h2>
                </div>
                <div className="w-full flex items-stretch">
                    <div className="w-1/2 flex flex-col justify-between">
                        <div className="text-3xl font-thin  space-y-4 ">
                            <p>ahmedabir2852@gmail.com</p>
                            <p>+880 1822627775</p>
                            <p>Kushtia, Bangladesh
                            </p>
                        </div>
                        <div className=" flex gap-x-5 items-center">
                            <div className="size-14 hover:bg-[#E2E1DF] hover:text-black cursor-pointer center rounded-full border border-[#E2E1DF] transition-all duration-300">
                            <RiGithubLine />
                            </div>
                            <div className="size-14 hover:bg-[#E2E1DF] hover:text-black cursor-pointer center rounded-full border border-[#E2E1DF] transition-all duration-300">
                                <RiYoutubeLine />
                            </div>
                            <div className="size-14 hover:bg-[#E2E1DF] hover:text-black cursor-pointer center rounded-full border border-[#E2E1DF] transition-all duration-300">
                                <RiInstagramLine />
                            </div>
                            <div className="size-14 hover:bg-[#E2E1DF] hover:text-black cursor-pointer center rounded-full border border-[#E2E1DF] transition-all duration-300">
                                <RiFacebookLine />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <form className="w-full flex flex-col gap-y-10">
                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase ">
                                    Name <sup> *</sup>
                                </p>

                                <div className="flex gap-[2vw]">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase ">
                                    Email <sup> *</sup>
                                </p>
                                <input
                                    placeholder="Enter Email"
                                    type="email"
                                    className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500"
                                />
                            </div>

                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase ">
                                    Message <sup> *</sup>
                                </p>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500 resize-none"
                                />
                            </div>

                            <Button text="Send Message" theme="dark" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
