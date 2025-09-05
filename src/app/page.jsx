import React from "react";

import Navbar from "./components/Navbar";
import DashboardDay from "./components/DashboardDay";
import Card from "./components/Card";
import Chart from "./components/Chart";

function page() {
    const days = [
        {
            title: "17 สิงหาคม",
            description: "2568",
            symbol: "fa-solid fa-cloud text-violet-500",
            image: "-",
            content: "XXX µg/m<sup>2</sup>"
        },
        {
            title: "18 สิงหาคม",
            description: "2568",
            symbol: "fa-solid fa-cloud text-amber-300",
            image: "-",
            content: "XXX µg/m<sup>2</sup>"
        },
        {
            title: "19 สิงหาคม",
            description: "2568",
            symbol: "fa-solid fa-cloud text-[#f55555]",
            image: "-",
            content: "XXX µg/m<sup>2</sup>"
        },
        {
            title: "20 สิงหาคม",
            description: "2568",
            symbol: "fa-solid fa-cloud text-green-600",
            image: "-",
            content: "XXX µg/m<sup>2</sup>"
        },
        {
            title: "21 สิงหาคม",
            description: "2568",
            symbol: "fa-solid fa-cloud text-amber-300",
            image: "-",
            content: "XXX µg/m<sup>2</sup>"
        },
        {
            title: "22 สิงหาคม",
            description: "2568",
            symbol: "fa-solid fa-cloud text-violet-500",
            image: "-",
            content: "XXX µg/m<sup>2</sup>"
        },
        {
            title: "23 สิงหาคม",
            description: "2568",
            symbol: "fa-solid fa-cloud text-[#f55555]",
            image: "-",
            content: "XXX µg/m<sup>2</sup>"
        }
    ]
    const chart = [
        "50%", "80%", "70%", "60%", "90%", "50%", "20%", "80%", "70%", "60%"
    ]

    return (
        <div>
            <Navbar home title = "Home" description = "หน้าหลัก" image = "/chiangmai_1.jpg" w = {1500} h = {986}/>
            <DashboardDay/>
            <Card title = "ค่าฝุ่นล่วงหน้ารายวัน" description = "ข้อมูลค่าฝุ่นล่วงหน้ารายวัน" contents = {days} h = "h-md"/>
            <Chart contents = {chart}/>
        </div>
    )
}

export default page
