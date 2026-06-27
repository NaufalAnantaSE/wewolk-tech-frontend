const features = [
  {
    label: "Performa",
    title: "Cepat dari hari pertama",
    desc: "Lighthouse score 90+ bukan target itu standar minimum kami. Setiap halaman dioptimasi untuk Core Web Vitals sejak awal development.",
    detail: "SSR · ISR · Edge Runtime · Image Optimization",
  },
  {
    label: "Keamanan",
    title: "Aman secara default",
    desc: "Autentikasi, enkripsi data, rate limiting, dan proteksi terhadap OWASP Top 10 sudah masuk dalam setiap build bukan ditambahkan belakangan.",
    detail: "JWT · HTTPS · Input Validation · RBAC",
  },
  {
    label: "Skalabilitas",
    title: "Tumbuh bersama bisnis Anda",
    desc: "Arsitektur yang dirancang untuk berkembang. Mulai dari ratusan hingga jutaan pengguna tanpa perlu rewrite total.",
    detail: "Docker · Redis · Queue · Horizontal Scaling",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-[#0F172A] ">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-lg ">
          <p className="text-xs tracking-[0.2em] uppercase text-[#2563EB] mb-3 font-medium">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#E2E8F0] leading-tight">
            Dibangun dengan
            <br />
            <span className="font-medium">standar yang tinggi</span>
          </h2>
        </div>

        {/* Features list */}
        <div className="space-y-px bg-white/[0.06]">
          {features.map(({ label, title, desc, detail }, i) => (
            <div
              key={title}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-0 bg-[#0A0F1A] hover:bg-[#0F172A] transition-colors duration-300"
            >
              {/* Col 1 — label + number */}
              <div className="px-8 py-10 border-b md:border-b-0 md:border-r border-white/[0.06] flex items-start gap-4">
                <span className="text-[#728097] text-xs tabular-nums mt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs tracking-widest uppercase text-[#94A3B8]">{label}</span>
              </div>

              {/* Col 2 — main content */}
              <div className="px-8 py-10 border-b md:border-b-0 md:border-r border-white/[0.06]">
                <h3 className="text-[#E2E8F0] font-medium mb-3">{title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Col 3 — tech tags */}
              <div className="px-8 py-10 flex flex-col justify-center gap-2">
                {detail.split(" · ").map((tag) => (
                  <span key={tag} className="text-xs text-[#3B82F6]/70 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}