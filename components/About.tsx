"use client";

import { useRef } from "react";

const stack = ["Next.js", "TypeScript", "Flutter", "Express.js", "PostgreSQL", "Docker", "MySQL", "AWS", "MongoDB", "Laravel", "Go"];

function MarqueeLine({ items, direction = "left", speed = 40 }: { 
  items: string[]; 
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];
  
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-2 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs text-[#93C5FD] bg-[#1E3A5F]/40 border border-[#1D4ED8]/30 rounded-full whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

const stats = [
  { value: "3+", label: "Tahun pengalaman" },
  { value: "40+", label: "Proyek selesai" },
  { value: "95%", label: "Klien kembali" },
];

export function About() {
  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section id="about" className="py-32 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left — text */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#2563EB] mb-3 font-medium">
                About Us
              </p>
              <h2 className="text-3xl md:text-5xl font-light text-[#E2E8F0] leading-tight mb-8">
                Tim kecil,
                <br />
                <span className="font-medium">dampak nyata</span>
              </h2>
              <div className="space-y-4 text-[#94A3B8] text-sm leading-relaxed">
                <p>
                  Kami adalah studio pengembangan software yang fokus pada kualitas, bukan kuantitas.
                  Setiap klien mendapat perhatian penuh bukan dikerjakan paralel dengan puluhan proyek lain.
                </p>
                <p>
                  Pendekatan kami sederhana: pahami bisnis Anda dulu, baru tulis kode. Hasilnya adalah
                  produk yang benar-benar menyelesaikan masalah, bukan sekadar fitur yang terlihat bagus.
                </p>
              </div>

              {/* Marquee Stack */}
              <div className="mt-10">
                <p className="text-xs text-[#94A3B8] mb-4 tracking-widest uppercase">Tech stack</p>
                <div className="space-y-2 relative">
                  {/* Fade edges */}
                  <div className="absolute inset-y-0 left-0 w-8 z-10 bg-gradient-to-r from-[#0F172A] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-[#0F172A] to-transparent pointer-events-none" />

                  <MarqueeLine items={stack} direction="left" speed={35} />
                  {/* <MarqueeLine items={[...stack].reverse()} direction="right" speed={45} /> */}
                </div>
              </div>
            </div>

            {/* Right — stats */}
            <div className="flex flex-col gap-px bg-white/[0.06]">
              {/* {stats.map(({ value, label }) => (
                <div key={label} className="bg-[#0F172A] px-10 py-10 flex items-baseline gap-4">
                  <span className="text-5xl font-light text-[#E2E8F0] tabular-nums">{value}</span>
                  <span className="text-sm text-[#94A3B8]">{label}</span>
                </div>
              ))} */}

              <div className="bg-[#0A0F1A] px-10 py-8 border-t border-white/[0.06]">
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Berbasis di Indonesia melayani klien lokal dan internasional secara remote.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}