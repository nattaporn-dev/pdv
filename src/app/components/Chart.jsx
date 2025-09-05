import React from "react";

function Chart({ contents }) {
    return (
        <div className = "px-4 bg-white border-b border-[#ececec]">
            <div className = "container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 py-24 max-md:py-8 justify-center items-center">
                <div className = "flex justify-center w-full" data-aos = "fade-up">
                    <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                        <div className = "flex justify-center items-center gap-2.5 flex-wrap">
                            <h1 className = "text-4xl font-bold max-md:text-2x">กราฟฝุ่นรายวัน</h1>
                        </div>
                        <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full">15 สิงหาคม 2568</p>
                    </div>
                </div>
                <div className = "w-full h-96 flex justify-end items-end">
                    {contents.map((content, index) => {
                        const h = `h-[${content}]`;

                        return (
                            <div key = {index} className = "w-1/10 border border-[#ececec] bg-[#f7f7f7]" style = {{ height: content }}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Chart
