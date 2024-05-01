"use client"
import { Link } from "next-view-transitions";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import {motion} from "framer-motion"
export default function Navigation({work, land}: {work: string, land: string}) {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="fixed flex-col items-center w-full h-full top-0 right-0 left-0 bg-[#e1e1e1] dark:bg-[#171717] z-10 hidden" style={{display: menu? "flex": "none"}} >
                <div className="lg:w-[700px] flex flex-col mt-[78px] space-y-16">
                    <div className="flex justify-between opacity-100 items-center">
                        <p>(hopefully) helping links</p>
                        <div onClick={() => setMenu(false)} className="flex z-20 group cursor-pointer flex-col items-center justify-center space-y-0.5 w-5 h-5" >
                            <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                            <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                            <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                        </div>
                    </div>
                    <Link className="text-2xl animate-bottom_fade" href='/work'>Work</Link>
                    <Link className="text-2xl animate-bottom_fade" href='/contact'>Contact</Link>
                </div>
            </div>
            <div className="lg:w-[700px] flex flex-col space-y-16">
                    <div className="flex items-center justify-between mt-16">
                        <div className="flex items-center justify-center  space-x-3">
                            <Link href={"https://github.com/i-am-henri"} target="_blank">
                                <img className="w-[40px] h-[40px] relative top-1 hover:ring-[#ffffff] cursor-pointer hover:dark:ring-[#282828] ring-2 ring-[#ffffff80] dark:ring-[#282828c0]  ring-offset-2 hover:ring-offset-3 transition-all ring-offset-[#e1e1e1]  dark:ring-offset-[#171717] rounded-full" src="https://avatars.githubusercontent.com/u/98414850?v=4" alt="avatar" width={"40"} height={"40"} />
                            </Link>
                            <div className="flex flex-col">
                                <h2 className="relative top-2 font-pacifico font-medium ">henri</h2>
                                <p className="font-medium">{work} - {land}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <ThemeSwitch />
                            <div className="flex group cursor-pointer flex-col items-center justify-center space-y-0.5 w-5 h-5" onClick={() => setMenu(true)}>
                                <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                                <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                                <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    )
}