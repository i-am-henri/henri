"use client"
import ThemeSwitch from "./ThemeSwitch";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Navigation({ work, land, locale }: { work: string[], land: string, locale: string }) {
    const randomNum = Math.floor(Math.random() * 3);
    const [title, setTitle] = useState(work[randomNum])
    useEffect(() => {
        const interval = setInterval(() => {
            const randomNum = Math.floor(Math.random() * 3);
            setTitle(work[randomNum])
        }, 3000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, []);

    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="fixed flex-col items-center w-full h-full top-0 right-0 left-0 bg-[#e1e1e1] dark:bg-[#171717] z-10 hidden" style={{ display: menu ? "flex" : "none" }} >
                <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[700px] flex flex-col mt-[78px] space-y-16">
                    <div className="flex justify-between opacity-100 items-center">
                        <p>(hopefully) helping links</p>
                        <div onClick={() => setMenu(false)} className="flex z-20 group cursor-pointer flex-col items-center justify-center space-y-0.5 w-5 h-5" >
                            <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                            <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                            <div className="h-1 w-1 group-active:opacity-60 group-hover:dark:bg-[#ffffffc0] transition-all duration-300 rounded-full bg-black dark:bg-white"></div>
                        </div>
                    </div>
                    <Link className="text-2xl animate-bottom_fade" href={`/${locale}/lab`}><button className="text-black dark:text-white group relative h-12 rounded-full  bg-transparent px-4 "><span className="text-white relative inline-flex overflow-hidden"><div className="text-black dark:text-white translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">lab</div><div className="text-black dark:text-white absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">lab</div></span></button></Link>
                    <Link className="text-2xl animate-bottom_fade" href={`/${locale}/work`}><button className="text-black dark:text-white group relative h-12 rounded-full  bg-transparent px-4 "><span className="text-white relative inline-flex overflow-hidden"><div className="text-black dark:text-white translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">work</div><div className="text-black dark:text-white absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">work</div></span></button></Link>
                    <Link className="text-2xl animate-bottom_fade" href={`/${locale}/contact`}><button className="text-black dark:text-white group relative h-12 rounded-full  bg-transparent px-4 "><span className="text-white relative inline-flex overflow-hidden"><div className="text-black dark:text-white translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">contact</div><div className="text-black dark:text-white absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">contact</div></span></button></Link>
                </div>
            </div>
            <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[700px] flex flex-col space-y-16">
                <div className="flex items-center justify-between mt-16">
                    <div className="flex items-center justify-center  space-x-3">
                        <Link href={"/"}>
                            <img className="w-[40px] h-[40px] relative top-1 hover:ring-[#ffffff] cursor-pointer hover:dark:ring-[#282828] ring-2 ring-[#ffffff80] dark:ring-[#282828c0]  ring-offset-2 hover:ring-offset-3 transition-all ring-offset-[#e1e1e1]  dark:ring-offset-[#171717] rounded-full" src="https://avatars.githubusercontent.com/u/98414850?v=4" alt="avatar" width={"40"} height={"40"} />
                        </Link>
                        <div className="flex flex-col">
                            <h2 className="relative top-2 font-pacifico font-medium ">henri</h2>
                            <p className="font-medium">{title} - {land}</p>
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