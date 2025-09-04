"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar({ title, description, image, w, h, home, about, education, pm25 }) {
    const [menu, setMenu] = useState(false);

    return (
        <div>
            <div className = "px-4 bg-white border-b border-[#ececec] h-24">
                <div className = "container mx-auto justify-self-center flex justify-between items-center h-full">
                    <div className = "w-max h-full flex items-center gap-4">
                        <Image src = "/logo.png" alt = "PDV Logo" width = {1000} height = {1000} unoptimized className = "w-14 rounded-xl shadow-md"/>
                        <div className = "flex flex-col">
                            <h1 className = "text-[#171717] text-3xl font-bold">PDV</h1>
                            <p className = "text-[#9497a1] text-xs -mt-1">Chiang Mai</p>
                        </div>
                    </div>
                    <div className = "flex items-center gap-8 text-sm font-medium max-sm:hidden">
                        <Link href = "/" className ={`${home ? "text-[#171717]" : "text-[#9497a1]"} `}>Home</Link>
                        <Link href = "/about" className ={`${about ? "text-[#171717]" : "text-[#9497a1]"} `}>About</Link>
                        <Link href = "/education" className ={`${education ? "text-[#171717]" : "text-[#9497a1]"} `}>Education</Link>
                        <Link href = "/pm%2025" className ={`${pm25 ? "text-[#171717]" : "text-[#9497a1]"} `}>PM2.5</Link>
                    </div>
                    <div onClick = {() => setMenu(!menu)} className = {`w-10 h-10 flex justify-center items-center rounded-xl text-base border-2 border-[#171717] ${menu ? "bg-white text-[#171717]" : "bg-[#171717] text-white"} min-sm:hidden`}><i className = "fa-solid fa-bars"></i></div>
                </div>
            </div>
            {menu && (
                <div className = "flex flex-col items-center gap-4 text-sm font-medium min-sm:hidden w-max px-16 py-6 rounded-xl border border-[#ececec] shadow-md bg-white absolute z-10 mt-4 right-4">
                    <Link href = "/" className ={`${home ? "text-[#171717]" : "text-[#9497a1]"} `}>Home</Link>
                    <Link href = "/about" className ={`${about ? "text-[#171717]" : "text-[#9497a1]"} `}>About</Link>
                    <Link href = "/education" className ={`${education ? "text-[#171717]" : "text-[#9497a1]"} `}>Education</Link>
                    <Link href = "/pm%2025" className ={`${pm25 ? "text-[#171717]" : "text-[#9497a1]"} `}>PM2.5</Link>
                </div>
            )}
            <div className = "relative">
                <Image src = {image} alt = {title} width = {w} height = {h} unoptimized className = "w-screen h-36 lg:h-54 object-cover object-center"/>
                <div className = "absolute inset-0 bg-black opacity-40"></div>
                <div className ="absolute inset-0 flex flex-col items-center justify-center p-4 text-center container mx-auto justify-self-center px-4">
                    <h1 className = "text-3xl lg:text-5xl font-extrabold text-white drop-shadow-md">
                        {title}
                    </h1>
                    <p className = "text-white text-xs lg:text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
