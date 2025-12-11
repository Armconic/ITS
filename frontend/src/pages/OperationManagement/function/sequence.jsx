// function Sequence() {
//   return (
//     <>
//       <div>Sequence Page</div>
//     </>
//   );
// }

// export default Sequence;

import React, { useState } from "react";

const mockEvents = [
  {
    id: 1,
    time: "14:05:23",
    plate: "กข 1234",
    camera: "CAM-001",
    location: "สี่แยกราชดำเนิน",
    offense: "ขับฝ่าไฟแดง",
  },
  {
    id: 2,
    time: "14:03:10",
    plate: "กข 1234",
    camera: "CAM-002",
    location: "สี่แยกราชดำเนิน",
    offense: "ขับฝ่าไฟแดง",
  },
  {
    id: 3,
    time: "14:01:02",
    plate: "กข 1234",
    camera: "CAM-003",
    location: "สี่แยกราชดำเนิน",
    offense: "ขับฝ่าไฟแดง",
  },
];

const mockCameras = [
  { id: "CAM-001", location: "สี่แยกราชดำเนิน" },
  { id: "CAM-002", location: "สี่แยกราชดำเนิน" },
  { id: "CAM-003", location: "สี่แยกราชดำเนิน" },
  { id: "CAM-004", location: "สี่แยกราชดำเนิน" },
];

export default function SequenceDashboard() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showBlacklistModal, setShowBlacklistModal] = useState(false);

  const handleSaveBlacklist = (data) => {
    console.log("Blacklist form data:", data);
    setShowBlacklistModal(false);
  };

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="p-4 space-y-4">
          {/* Search section */}
          <div className="bg-white rounded-xl shadow-sm px-4 py-3 flex gap-3 items-center">
            <div className="flex-1 flex gap-2">
              <input
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="ค้นหาหมายเลขทะเบียน / หมายเลขบัญชี /กล้องตรวจจับ"
              />
              <input
                className="w-52 border border-slate-200 rounded-lg px-3 py-2 text-sm"
                placeholder="ช่วงเวลาที่เกิดเหตุ"
              />
              <input
                className="w-52 border border-slate-200 rounded-lg px-3 py-2 text-sm"
                placeholder="จุดตรวจจับ"
              />
            </div>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
              ค้นหา
            </button>
          </div>

          {/* Sequence section */}
          <section className="bg-white rounded-xl shadow-sm p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">
                Sequence – ระบบติดตามลำดับการตรวจจับ
              </h2>
              <button
                onClick={() => setShowBlacklistModal(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
              >
                เพิ่มบัญชีดำ
              </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {/* Left: main video & info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">
                    ทะเบียน : <span className="font-semibold">กข 1234</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    อัปเดตล่าสุด : 09:45 น.
                  </div>
                </div>

                {/* Video block */}
                <div className="bg-slate-900 rounded-xl h-64 flex items-center justify-center text-white relative overflow-hidden">
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-3xl"
                  >
                    ▶
                  </button>
                  <span className="absolute bottom-3 left-3 text-xs bg-black/50 px-2 py-1 rounded">
                    กล้อง : CAM-001 | สถานที่ : สี่แยกราชดำเนิน
                  </span>
                </div>

                {/* Plate & buttons */}
                <div className="flex gap-3 items-center">
                  <div className="flex-1 border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between bg-slate-50">
                    <span className="text-xs text-slate-500">
                      หมายเลขทะเบียน
                    </span>
                    <span className="text-xl font-bold tracking-widest">
                      5ขว-8765
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold">
                      ป้ายขาว
                    </span>
                  </div>
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="px-4 py-3 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700"
                  >
                    ดูวิดีโอมุมอื่น
                  </button>
                </div>

                {/* meta info */}
                <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 text-xs space-y-1">
                  <div>ชนิดรถ : เก๋ง 4 ประตู</div>
                  <div>กล้อง : CAM-001</div>
                  <div>สถานที่ : สี่แยกราชดำเนิน</div>
                  <div>จำนวนครั้งที่ตรวจจับ : 3 ครั้ง</div>
                </div>

                {/* alert */}
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl px-3 py-2">
                  เหตุผล : ขับฝ่าไฟแดง / ความเร็วเกินกำหนด
                </div>
              </div>

              {/* Right: map */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <h3 className="font-semibold">แผนที่เส้นทางการตรวจจับ</h3>
                  <span className="text-xs text-slate-500">
                    จุดตรวจจับทั้งหมด 4 จุด
                  </span>
                </div>
                <div className="bg-slate-200 rounded-xl h-80 flex items-center justify-center text-slate-600 text-sm">
                  [Mockup แผนที่ & เส้นทาง Sequence]
                </div>
              </div>
            </div>
          </section>

          {/* Events list */}
          <section className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-base">
                รายการบัญชีดำ ( {mockEvents.length} รายการ )
              </h3>
              <button className="text-xs px-3 py-1 border rounded-lg">
                ตัวกรอง
              </button>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              {mockEvents.map((e, idx) => (
                <div
                  key={e.id}
                  className={
                    "flex items-center text-sm px-4 py-3 border-b border-slate-100 last:border-b-0 " +
                    (idx === 0 ? "bg-emerald-50" : "bg-white")
                  }
                >
                  <div className="w-32 text-xs text-slate-500">{e.time}</div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="px-2 py-1 text-xs bg-slate-100 rounded">
                      ทะเบียน {e.plate}
                    </span>
                    <span className="px-2 py-1 text-xs bg-slate-100 rounded">
                      กล้อง: {e.camera}
                    </span>
                    <span className="text-xs text-slate-500">
                      สถานที่: {e.location}
                    </span>
                  </div>
                  <div className="w-40 text-xs text-slate-500">
                    ความผิด: {e.offense}
                  </div>
                  <button
                    className="ml-3 text-xs px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                    onClick={() => setShowVideoModal(true)}
                  >
                    ดูวิดีโอ
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Modals */}
      {showVideoModal && (
        <VideoModal cameras={mockCameras} onClose={() => setShowVideoModal(false)} />
      )}

      {showBlacklistModal && (
        <BlacklistModal
          defaultPlate="5ขว-8765"
          onClose={() => setShowBlacklistModal(false)}
          onSave={handleSaveBlacklist}
        />
      )}
    </div>
  );
}

/* ---------------- Sidebar ---------------- */

function Sidebar() //   Sidebar component
{
//   return ( 
//     <aside className="w-60 bg-emerald-800 text-emerald-50 flex flex-col">
//       <div className="h-14 flex items-center px-4 border-b border-emerald-700">
//         <div className="w-8 h-8 bg-white text-emerald-700 rounded flex items-center justify-center font-bold mr-2">
//           L
//         </div>
//         <span className="font-semibold text-sm">LOGO</span>
//       </div>
//       <nav className="flex-1 text-sm py-3 space-y-1">
//         <NavItem label="Overview" />
//         <NavItem label="Traffic Enforcement" />
//         <NavItem label="Traffic Data Collection" />
//         <NavItem label="Traffic Operation Management" active />
//         <NavItem label="Incident & Accident" />
//         <NavItem label="Configuration" />
//       </nav>
//     </aside>
//   );
}

function NavItem({ label, active }) {
  return (
    <div
      className={
        "px-4 py-2 cursor-pointer flex items-center gap-2 text-xs " +
        (active
          ? "bg-emerald-600 text-white font-semibold"
          : "hover:bg-emerald-700/60")
      }
    >
      <span className="w-2 h-2 rounded-full bg-emerald-300" />
      {label}
    </div>
  );
}

/* ---------------- Top bar ---------------- */

function TopBar() {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4">
      <div className="font-semibold text-sm">Sequence</div>
      <div className="flex items-center gap-6 text-xs text-slate-600">
        <div>14:20:39</div>
        <div>วันอังคารที่ 23 มิถุนายน 2568</div>
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            T
          </span>
          <span className="font-medium">TestID@1234</span>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Video Modal ---------------- */

function VideoModal({ cameras, onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
          <h3 className="font-semibold text-base">ดูวิดีโอมุมอื่นเพิ่มเติม</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-4 p-4 overflow-y-auto">
          {/* Main video */}
          <div className="space-y-3">
            <div className="bg-slate-900 rounded-xl h-64 flex items-center justify-center text-white">
              ▶
            </div>
            <div className="text-xs text-slate-500 flex justify-between items-center">
              <span>ทะเบียน : กข 1234</span>
              <span>เวลาที่ตรวจจับ : 14:05:23 น.</span>
            </div>
          </div>

          {/* Info + car image */}
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">หมายเลขทะเบียน</span>
                <span className="text-lg font-bold tracking-widest">เพิ่มป้ายทะเบียนรถ</span>
              </div>
              <div>ยี่ห้อ / รุ่น : Honda / ดำ</div>
              <div>ประเภทรถ : กระบะ</div>
              <div>กล้อง : CAM-001</div>
              <div>สถานที่ : สี่แยกราชดำเนิน</div>
            </div>

            <div className="bg-slate-200 rounded-xl h-40 flex items-center justify-center text-xs text-slate-600">
              [ภาพนิ่งจากกล้อง]
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">ตัวเล่นเสียงพากย์:</span>
              <div className="flex-1 h-2 bg-slate-200 rounded-full">
                <div className="h-2 w-1/3 bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Camera thumbnails */}
        <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cameras.map((c) => (
            <div
              key={c.id}
              className="border border-slate-200 rounded-xl bg-white overflow-hidden"
            >
              <div className="bg-slate-900 h-32 flex items-center justify-center text-white">
                ▶
              </div>
              <div className="p-2 text-xs space-y-1">
                <div>กล้อง : {c.id}</div>
                <div>สถานที่ : {c.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Blacklist Modal ---------------- */

function BlacklistModal({ defaultPlate, onClose, onSave }) {
  const [form, setForm] = useState({
    plate: defaultPlate || "",
    location: "",
    vehicleType: "",
    brand: "",
    model: "",
    color: "",
    reason: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form); // mock: ส่งให้ parent เก็บหรือเรียก API
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
          <h3 className="font-semibold text-base">เพิ่มรถเข้าสารบบบัญชีดำ</h3>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1">
                เพิ่มป้ายทะเบียนรถ :
              </label>
              <input
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                value={form.plate}
                onChange={handleChange("plate")}
                placeholder="เช่น 5ขว-8765"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">สถานที่ตรวจพบ :</label>
              <div className="flex gap-2">
                <input
                  className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm"
                  value={form.location}
                  onChange={handleChange("location")}
                  placeholder="เช่น สี่แยกราชดำเนิน"
                />
                <button
                  type="button"
                  className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-xs"
                >
                  เลือกจากแผนที่
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1">ประเภทรถ :</label>
              <input
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                value={form.vehicleType}
                onChange={handleChange("vehicleType")}
                placeholder="เช่น เก๋ง, กระบะ"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs mb-1">ยี่ห้อ :</label>
                <input
                  className="w-full border border-slate-200 rounded-lg px-2 py-2 text-sm"
                  value={form.brand}
                  onChange={handleChange("brand")}
                  placeholder="Honda"
                />
              </div>
              <div>
                <label className="block text-xs mb-1">รุ่น :</label>
                <input
                  className="w-full border border-slate-200 rounded-lg px-2 py-2 text-sm"
                  value={form.model}
                  onChange={handleChange("model")}
                  placeholder="Civic"
                />
              </div>
              <div>
                <label className="block text-xs mb-1">สี :</label>
                <input
                  className="w-full border border-slate-200 rounded-lg px-2 py-2 text-sm"
                  value={form.color}
                  onChange={handleChange("color")}
                  placeholder="ดำ"
                />
              </div>
            </div>
          </div>

          {/* upload & reason */}
          <div>
            <label className="block text-xs mb-1">แนบรูป / วิดีโอหลักฐาน :</label>
            <div className="border border-dashed border-slate-300 rounded-xl h-32 flex flex-col items-center justify-center text-xs text-slate-500 gap-1">
              <span>กดเพื่อเลือกไฟล์ หรือ ลากไฟล์มาวางที่นี่</span>
              <span className="text-[10px]">
                รองรับ .jpg, .png, .mp4 ขนาดไม่เกิน 20MB
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs mb-1">
              เหตุผลการเพิ่มบัญชีดำ :
            </label>
            <textarea
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm min-h-[100px]"
              value={form.reason}
              onChange={handleChange("reason")}
              placeholder="ระบุรายละเอียด เช่น ขับฝ่าไฟแดงซ้ำหลายครั้ง, ป้ายทะเบียนปลอม ฯลฯ"
            />
          </div>
        </div>

        {/* footer buttons */}
        <div className="flex justify-end gap-3 px-4 py-3 border-t border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700"
          >
            ยกเลิกการเพิ่มบัญชี
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700"
          >
            บันทึกข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
}
