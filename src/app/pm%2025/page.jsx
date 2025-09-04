import React from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Info from "../components/Info";

function page() {
    const contentsInfo = [
        "ฝุ่นละอองขนาดเล็กไม่เกิน 2.5 ไมครอน (PM2.5) ขนาดเล็กจนตาเปล่ามองไม่เห็น ลอยอยู่ในอากาศได้นาน",
        "สามารถเข้าสู่ระบบหายใจจนถึงถุงลมปอด หรือซึมผ่านเข้าสู่กระแสเลือดได้",
        "PM2.5 เกิดขึ้นได้ในหลายสาเหตุแต่มีสาเหตุหลักจากการเผาป่าหรือของในที่โล่ง เช่น การเผาเศษวัสดุทางการเกษตรการเผาป่าเพื่อหาของป่า อุตสาหกรรม การขนส่งและคมนาคม  การผลิตไฟฟ้า หรือ กิจกรรมของมนุษย์ "
    ]
    const contentsDangerous = [
        {
            title: "-",
            description: "-",
            symbol: "fa-solid fa-skull-crossbones text-[#f55555]",
            image: "-",
            content: "ฝุ่นชนิดอื่นมีขนาดใหญ่กว่า เช่น PM10 มักถูกดักไว้ที่โพรงจมูกหรือคอ แต่ PM2.5 เล็กมากจนทะลุผ่านไปถึงถุงลมปอดได้"
        },
        {
            title: "-",
            description: "-",
            symbol: "fa-solid fa-skull-crossbones text-[#f55555]",
            image: "-",
            content: "เมื่อเข้าสู่ร่างกายอนุภาคฝุ่นสามารถทำให้เกิดการอักเสบในปอด และบางส่วนยังซึมเข้าสู่กระแสเลือดส่งผลต่อ หัวใจ สมอง และอวัยวะอื่น ๆ"
        },
        {
            title: "-",
            description: "-",
            symbol: "fa-solid fa-skull-crossbones text-[#f55555]",
            image: "-",
            content: "ฝุ่น PM2.5 บางชนิดมีสารพิษ เช่น โลหะหนัก หรือสารก่อมะเร็งติดมากับอนุภาค"
        }
    ]
    const contentsEffects = [
        {
            title: "Short-term exposure",
            description: "การสัมผัสในระยะสั้น",
            image: "-",
            symbol: "fa-solid fa-head-side-cough",
            content: "<p>ทางเดินหายใจอักเสบ หายใจลำบาก แสบจมูก ไอมีเสมหะ แน่นหน้าอก ถุงลมแฟบ สมรรถภาพปอดลดลง ภูมิแพ้และหืดกำเริบ</p><p>ทำลายภูมิคุ้มกัน เกิดการติดเชื้อในปอด และทางเดินหายใจได้ง่าย เช่น ไข้หวัดใหญ่ หลอดลมอักเสบ หูอักเสบ</p><p>พัฒนาการเด็กล่าช้า</p><p>ผลต่อระบบสืบพันธุ์ ทำให้มีบุตรยาก</p>"
        },
        {
            title: "Long-term exposure",
            description: "การสัมผัสในระยะยาว",
            image: "-",
            symbol: "fa-solid fa-lungs-virus",
            content: "<p>โรคมะเร็งปอด</p><p>การอักเสบของเส้นเลือด อาจเกิดโรคหัวใจขาดเลือด โรคอัมพาตจากหลอดเลือดสมอง ความดันโลหิตสูง เบาหวาน</p><p>โรคหลอดลมอุดกั้นเรื้อรัง</p><p>โรคทางผิวหนังหรือตาอักเสบ</p><p>ผิวมีจุดด่างดำและรอยย่น ดูแก่กว่าวัย</p>"
        }
    ]
    const contentsGroups = [
        {
            title: "Children",
            description: "เด็ก",
            image: "-",
            symbol: "fa-solid fa-child",
            content: "อาจกล่าวได้ว่ายิ่งอายุน้อย ยิ่งเพิ่มความเสี่ยงมากขึ้น  เนื่องจากเด็กเล็กมีภูมิคุ้มกันโรคน้อยกว่าผู้ใหญ่ อวัยวะต่างๆ ในร่างกายยังอยู่ในระยะที่กำลังพัฒนา ทั้งนี้ฝุ่นพิษในอากาศที่สามารถเข้าสู่ระทางเดินหายใจและกระแสเลือดได้ง่ายจะไปขัดขวางการเจริญเติบโตของระบบต่างๆ  หรือทำให้เกิดโรคร้ายแรงในที่สุด"
        },
        {
            title: "Pregnant women",
            description: "หญิงมีครรภ์",
            image: "-",
            symbol: "fa-solid fa-person-pregnant",
            content: "นอกจากภัยร้ายส่งผลต่อตัวคุณแม่ตั้งครรภ์ที่สูดฝุ่นละอองโดยตรงแล้ว ทารกในครรภ์ยังเป็นอันตรายด้วยเช่นกัน  มีการศึกษาพบว่ามลพิษในอากาศมีผลต่อการคลอดก่อนกำหนด  เสี่ยงแท้งบุตร และเพิ่มอัตราการตายของทารกในครรภ์ได้"
        },
        {
            title: "Elderly",
            description: "ผู้สูงอายุ",
            image: "-",
            symbol: "fa-solid fa-person-cane",
            content: "เมื่ออายุมากขึ้น อวัยวะเริ่มเสื่อมถอย ระบบการทำงานต่างๆ ในร่างกายลดลง ส่งผลให้ภูมิคุ้มกันลงดลง หากต้องเผชิญกับฝุ่นละออง อาจมีแนวโน้มเสี่ยงต่อโรคหัวใจและหอบหืด โดยเฉพาะผู้สูงอายุที่มีโรคประจำตัว ควรหลีกเลี่ยงการเผชิญฝุ่นพิษให้มากที่สุด"
        },
        {
            title: "Patients or congenital diseases",
            description: "ผู้ป่วยหรือมีโรคประจำตัว",
            image: "-",
            symbol: "fa-solid fa-head-side-cough",
            content: "โดยเฉพาะผู้ป่วยโรคทางเดินหายใจ โรคปอด และโรคหัวใจชนิดต่างๆ การสูดฝุ่นผงเข้าสู่ร่างกายโดยตรงส่งผลให้โรคกำเริบ อาจถึงกับชีวิตได้"
        }
    ]
    const contentsProtection = [
        {
            title: "-",
            description: "-",
            image: "-",
            symbol: "fa-solid fa-cloud",
            content: "ติดตามรายงานสภาพอากาศและระดับ PM5 อย่างสม่ำเสมอ"
        },
        {
            title: "-",
            description: "-",
            image: "-",
            symbol: "fa-solid fa-building",
            content: "ในบ้านหรืออาคารควรใช้เครื่องฟอกอากาศที่สามารถกรองฝุ่น PM5 ได้"
        },
        {
            title: "-",
            description: "-",
            image: "-",
            symbol: "fa-solid fa-mask-face",
            content: "สวมหน้ากากอนามัยทางการแพทย์ หรือสวมหน้ากาก N95 เมื่อต้องออกจากบ้านหรืออาคาร"
        },
        {
            title: "-",
            description: "-",
            image: "-",
            symbol: "fa-solid fa-shirt",
            content: "สวมแว่นกันลม กันฝุ่น สวมเสื้อแขนยาวมิดชิด"
        },
        {
            title: "-",
            description: "-",
            image: "-",
            symbol: "fa-solid fa-clock",
            content: "ลดเวลาการอยู่นอกบ้าน/อาคาร โดยเฉพาะกลุ่มที่มีความเสี่ยงต่อ PM5 สูง เช่น เด็ก หญิงตั้งครรภ์ คนชรา ผู้ป่วยที่มีโรคประจำตัว ได้แก่ โรคภูมิแพ้ โรคปอด โรคหัวใจ โรคหลอดเลือดสมอง และโรคไตเรื้อรัง"
        },
        {
            title: "-",
            description: "-",
            image: "-",
            symbol: "fa-solid fa-sun",
            content: "หลีกเลี่ยงการออกกำลังกายกลางแจ้ง"
        }
    ]

    return (
        <div>
            <Navbar pm25 title = "PM2.5" description = "ฝุ่น PM2.5 คืออะไร" image = "/chiangmai_1.jpg" w = {1500} h = {986}/>
            <Info content = {contentsInfo} image = "pm25" extension = "jpg" w = {1911} h = {970}/>
            <Card title = "Why is PM2.5 dust more dangerous than regular dust?" description = "ทำไมฝุ่น PM2.5 อันตรายกว่าฝุ่นทั่วไป" contents = {contentsDangerous} h = "h-lg"/>
            <Card title = "Health effects" description = "ผลกระทบต่อสุขภาพ" contents = {contentsEffects} h = "h-lg"/>
            <Card title = "Risk groups from toxic dust" description = "กลุ่มเสี่ยงอันตรายจากฝุ่นพิษ" contents = {contentsGroups} h = "h-lg"/>
            <Card title = "Protection" description = "การป้องกัน" contents = {contentsProtection} h = "h-lg"/>
        </div>
    )
}

export default page