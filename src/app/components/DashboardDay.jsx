import React from "react";
import Image from "next/image";

function DashboardDay() {
    return (
        <div className = "px-4 bg-[#ffffff] border-b border-[#ececec]">
            <div className = "container mx-auto justify-self-center flex flex-col flex-wrap-reverse gap-4 py-24 max-md:py-8">
                <div className = "w-full flex justify-between items-center" data-aos = "fade-up">
                    <div className = "w-max flex gap-4 items-center">
                        <Image src = "/logo.png" alt = "PDV Logo" width = {1000} height = {1000} unoptimized className = "w-14 rounded-xl shadow-md"/>
                        <div className = "flex flex-col">
                            <h1 className = "text-[#171717] text-3xl font-bold">PDV</h1>
                            <p className = "text-[#9497a1] text-xs -mt-1">Chiang Mai</p>
                        </div>
                    </div>
                    <div className = "flex flex-col justify-end items-end">
                        <h1 className = "text-[#171717] text-xl max-md:text-base font-bold">ค่าฝุ่นล่วงหน้าประจำวัน</h1>
                        <h1 className = "text-[#9497a1] text-md max-md:text-sm font-medium -mt-1">16 สิงหาคม 2568</h1>
                    </div>
                </div>
                <div className = "flex w-max mx-auto justify-center items-center border-2 border-[#ececec] shadow-md rounded-xl px-8 py-6 gap-8" data-aos = "fade-up">
                    <i className = "fa-solid fa-cloud text-6xl"></i>
                    <p className = "flex gap-4 items-center text-xl font-medium text-[#171717]">
                        <span>PM2.5</span>
                        <span className = "text-blue-500">XXX</span>
                        <span>µg/m<sup>2</sup></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DashboardDay
