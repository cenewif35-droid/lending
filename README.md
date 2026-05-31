# KOH Auto-Backed Lending — Portfolio Site

## วิธีใช้งาน

### เพิ่มเคสใหม่
แก้ไขไฟล์ `data.js` เท่านั้น — เพิ่ม object ใน array `cases`

### fields ที่ต้องใส่
- id: "CAR-012"
- date: "วัน/เดือน/ปี"
- vehicle: "ชื่อรถ ปี"
- color: "สี"
- type: "car" หรือ "moto"
- plate: "ทะเบียน"
- customer: "ชื่อลูกค้า"
- amount: ตัวเลข (บาท)
- cycle: "รอบดอก"
- doc: "wait" / "missing" / "reconcile" / "check" / "ok"
- note: "หมายเหตุ"

### doc status ที่ใช้ได้
- wait = รอหลักฐาน
- missing = ขาดหลักฐาน (critical)
- reconcile = รอ reconcile
- check = รอตรวจ
- ok = ครบแล้ว

## วิธีขึ้น GitHub Pages
1. สร้าง repo ใหม่ใน GitHub
2. upload ไฟล์ทั้ง 3: index.html / data.js / README.md
3. ไป Settings → Pages → Source: main branch
4. รอ 1-2 นาที → ได้ URL ฟรี

## ไฟล์ในโปรเจกต์
- index.html — หน้าหลัก (ไม่ต้องแก้)
- data.js — ข้อมูลเคสทั้งหมด (แก้ที่นี่เท่านั้น)
- README.md — คู่มือนี้
