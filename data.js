// data.js — KOH Auto-Backed Lending Portfolio
// Source of Truth — อัพเดทไฟล์นี้เมื่อเพิ่มเคสใหม่
// Last updated: 31 พ.ค. 2569

const PORTFOLIO = {
  updated: "31 พ.ค. 2569",
  total_cases: 11,
  total_amount: 269000,
  line_confirmed: 143000,
  cases: [
    { id:"CAR-001", date:"3/5/2569", vehicle:"Click 125i 2019", color:"น้ำเงิน", type:"moto", plate:"2กข5846", customer:"ทวีสิทธิ์ อังกอนรัมย์", amount:5000, cycle:"18×3", doc:"wait", note:"ขอรูปเล่ม / สัญญา / สลิป" },
    { id:"CAR-002", date:"3/5/2569", vehicle:"Fiesta 2012", color:"แดง", type:"car", plate:"1ขช3705", customer:"นิศา นนทศิลา", amount:28000, cycle:"3", doc:"wait", note:"ขอสัญญาและรายละเอียดรับสุทธิ" },
    { id:"CAR-003", date:"5/5/2569", vehicle:"Wave 110 2021", color:"แดง", type:"moto", plate:"1กข5601", customer:"กัลยา ใจศิลป์", amount:7000, cycle:"20×5", doc:"check", note:"ชื่อสะกดต้องเช็กเพิ่ม" },
    { id:"CAR-004", date:"5/5/2569", vehicle:"CBR650 2019", color:"ดำ", type:"moto", plate:"9กย8924", customer:"กฤินทอง พรมไทย", amount:35000, cycle:"20×5", doc:"wait", note:"ขอเลขสัญญาและหลักฐานเพิ่ม" },
    { id:"CAR-005", date:"6/5/2569", vehicle:"Forza 350 2025", color:"ดำ", type:"moto", plate:"1ขญ1697", customer:"นันทิพัฒน์ เพ็งบุญ", amount:35000, cycle:"21×6", doc:"reconcile", note:"ยืนยัน 35,000 แล้ว" },
    { id:"CAR-006", date:"6/5/2569", vehicle:"Nissan Note 2017", color:"แดง", type:"car", plate:"7กค3583", customer:"จิราพร พรมเมือง", amount:40000, cycle:"6", doc:"wait", note:"ขาด LINE export / สัญญา / สลิป" },
    { id:"CAR-007", date:"7/5/2569", vehicle:"City 2017", color:"ดำ", type:"car", plate:"6กน7377", customer:"ชัยวัฒน์ ปั้นหา", amount:40000, cycle:"7", doc:"wait", note:"ขอเลขสัญญาและหลักฐานเพิ่ม" },
    { id:"CAR-008", date:"8/5/2569", vehicle:"Wave 2006", color:"เทา", type:"moto", plate:"— ไม่ระบุ", customer:"จิราวัฒน์ พุ่มคง", amount:6000, cycle:"23×8", doc:"missing", note:"ต้องเพิ่มทะเบียนและหลักฐานทั้งหมด", hold:true },
    { id:"CAR-009", date:"10/5/2569", vehicle:"M-Slaz 2017", color:"เหลือง", type:"moto", plate:"1ฆข7588", customer:"ชวลิต สมศรี", amount:18000, cycle:"25×10", doc:"reconcile", note:"ยืนยัน 18,000 แล้ว" },
    { id:"CAR-010", date:"10/5/2569", vehicle:"Wave 125 2026", color:"เทา", type:"moto", plate:"— ยังไม่ได้ป้าย", customer:"ธนพร จันทา", amount:15000, cycle:"25×10", doc:"missing", note:"ต้องขอใบและหลักฐานทั้งหมด" },
    { id:"CAR-011", date:"31/5/2569", vehicle:"Honda City", color:"ขาว", type:"car", plate:"7กน2528", customer:"สมชาย เขียวบาง", amount:40000, interest:4000, parking:2000, contract_fee:2000, transfer:15450, cash:16550, mileage:61715, cycle:"—", doc:"wait", note:"รอใบรับเงินสด 16,550 บาท" }
  ]
};
