import React from "react";
import Image from "next/image";

function Card({ contents, h, title, description }) {
    return (
        <div className = "px-4 bg-[#f0f9ff] border-b border-[#ececec]">
            <div className = "container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 pt-24 max-md:pt-8 justify-center items-center">
                {title && (
                    <div className = "flex justify-center w-full" data-aos = "fade-up">
                        <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                            <div className = "flex justify-center items-center gap-2.5 flex-wrap">
                                <h1 className = "text-4xl font-bold max-md:text-2x">{title}</h1>
                            </div>
                            <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full">{description}</p>
                        </div>
                    </div>
                )}
                <div className = "flex overflow-x-auto styleScrollbar gap-4 pb-24 max-md:pb-8 text-[#171717] max-w-full">
                    {contents.map((content, index) => (
                        <div className = {`shadow-md bg-white ${h} rounded-xl min-w-72 max-w-72 py-11 px-8 flex flex-col gap-7`} key = {`${content.title} - ${index}`}>
                            {content.image !== "-" ? (
                                <div className = "border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square px-4">
                                    <div className = "w-8 h-8 relative">
                                        <Image src = {content.extension !== "-" ? `/${content.image}.${content.extension}` : `${content.image}`} alt = {content.title} unoptimized fill className = {`object-contain ${content.extension === "-" && "rounded-full"}`}/>
                                    </div>
                                </div>
                            ) : content.symbol !== "-" && (
                                <div className = "border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square text-xl">
                                    <i className = {content.symbol}></i>
                                </div>
                            )}
                            <div className = "flex flex-col gap-4">
                                {content.title !== "-" && (
                                    <div className = "flex flex-col">
                                        <h1 className = "text-xl font-bold" dangerouslySetInnerHTML = {{ __html: content.title }}></h1>
                                        <p className = "text-[#9497a1] text-xs font-medium" dangerouslySetInnerHTML = {{ __html: content.description }}></p>
                                    </div>
                                )}
                                <div className = "font-normal text-[#9497a1]" dangerouslySetInnerHTML = {{ __html: content.content }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card