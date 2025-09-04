import React from "react";

import Navbar from "../components/Navbar";

function page() {
    return (
        <div>
            <Navbar pm25 title = "PM2.5" description = "ฝุ่น PM2.5 คืออะไร" image = "/chiangmai_1.jpg" w = {1500} h = {986}/>
            <div className = "p-4">
                <div className = "container mx-auto justify-self-center h-full flex flex-col justify-center items-center">
                </div>
            </div>
        </div>
    )
}

export default page