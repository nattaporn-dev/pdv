import React from "react";
import Image from "next/image";

function Info({ content, image, extension, w ,h }) {
    return (
        <div className = "px-4 bg-[#ffffff] border-b border-[#ececec]">
            <div className = "container mx-auto justify-self-center flex justify-around items-center flex-wrap-reverse gap-4 py-24 max-md:py-8">
                <div className = "w-lg flex flex-col gap-7 max-md:gap-4">
                    <div className = "w-max h-max flex items-center gap-4">
                        <Image src = "/logo.png" alt = "PDV Logo" width = {1000} height = {1000} unoptimized className = "w-14 rounded-xl shadow-md"/>
                        <div className = "flex flex-col">
                            <h1 className = "text-[#171717] text-3xl font-bold">PDV</h1>
                            <p className = "text-[#9497a1] text-xs -mt-1">Chiang Mai</p>
                        </div>
                    </div>
                    <div className = "text-[#9497a1] text-xl max-md:text-base">
                        {content.map((content, index) => (
                            <p key = {index}>{content}</p>
                        ))}
                    </div>
                </div>
                    <Image src = {`/${image}.${extension}`} unoptimized width = {w} height = {h} className = "object-contain w-lg max-lg:w-full rounded-2xl shadow-md" alt = {image}/>
            </div>
        </div>
    )
}

export default Info
