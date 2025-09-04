import React from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

function page() {
    const contents = [
        {
            title: "Refrain from burning garbage",
            description: "งดการเผาขยะ",
            symbol: "fa-solid fa-fire text-[#f55555]",
            image: "-",
            content: "<p>ส่วนใหญ่ผู้คนชอบเผาขยะเพราะว่ามันง่ายต่อการกำจัด</p><p>แต่การเผาขยะนั้นทำให้เกิดมลพิษทางอากาศอย่างมาก</p><p>ทำให้มีส่วนทำให้เกิดโลกร้อนได้อีกด้วย</p><p>ใช้ถุงผ้าแทนถุงพลาสติก ใช้ช้อนส้อมกระดาษแทนพลาสติกเช่นกัน</p>"
        },
        {
            title: "Increase the green area",
            description: "เพิ่มพื้นที่สีเขียว",
            symbol: "fa-solid fa-tree text-[#4caf50]",
            image: "-",
            content: "<p>การเพิ่มพื้นที่สีเขียวสามารถช่วยลดผลกระทบจาก PM2.5</p><p>เพิ่มบรรยายกาศดี ๆไว้ให้เราได้หายใจ</p>"
        },
        {
            title: "Reduce personal car driving",
            description: "ลดการขับขี่รถยนต์ส่วนตัว",
            symbol: "fa-solid fa-car",
            image: "-",
            content: "หากไม่จำเป็นก็ใช้รถสาธารณะเพื่อลดปริมาณ CO<sub>2</sub>"
        }
    ]
    return (
        <div>
            <Navbar education title = "Education" description = "วิธีลดการปล่อยมลพิษ" image = "/chiangmai_1.jpg" w = {1500} h = {986}/>
            <Card contents = {contents} h = "h-lg"/>
            <div className = "p-4">
                <div className = "container mx-auto justify-self-center h-full flex flex-col justify-center items-center">
                </div>
            </div>
        </div>
    )
}

export default page
