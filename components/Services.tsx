import { Globe, Smartphone, Server, LayoutDashboard, Database, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        desc: "Website modern yang cepat, responsif, dan mudah dikelola. Dibangun dengan Next.js dan teknologi terkini.",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        desc: "Aplikasi mobile cross-platform dengan Flutter. Satu codebase, berjalan mulus di iOS dan Android.",
    },
    {
        icon: Server,
        title: "API",
        desc: "REST dan gRPC API yang scalable. Siap menangani ribuan request per detik dengan arsitektur yang solid.",
    },
    {
        icon: LayoutDashboard,
        title: "CRM System",
        desc: "Kelola hubungan pelanggan dalam satu platform. Lacak leads, pipeline, dan aktivitas tim secara real-time.",
    },
    {
        icon: Database,
        title: "ERP Solution",
        desc: "Integrasikan seluruh proses bisnis dari inventori hingga keuangan dalam satu sistem terpusat.",
    },
];

export function Services() {

    const whatsappLink =
        "https://wa.me/6287887246199?text=Halo%20Wewolk.tech,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20dan%20aplikasi.";

    return (
        <section id="services" className="py-32 px-6 bg-[#0A0F1A]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-[#2563EB] mb-3 font-medium">
                            Services
                        </p>
                        <h2 className="text-3xl md:text-5xl font-light text-[#E2E8F0] leading-tight">
                            Apa yang kami
                            <br />
                            <span className="font-medium">kerjakan</span>
                        </h2>
                    </div>
                    <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
                        Setiap proyek dikerjakan dari nol, disesuaikan dengan kebutuhan bisnis Anda  bukan template.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
                    {services.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="group bg-[#0A0F1A] p-8 flex flex-col gap-6 hover:bg-[#0F172A] transition-colors duration-300 cursor-pointer"
                        >
                            <div className="flex items-start justify-between">
                                <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center">
                                    <Icon size={18} className="text-[#3B82F6]" />
                                </div>
                                <ArrowUpRight
                                    size={16}
                                    className="text-[#1E293B] group-hover:text-[#3B82F6] transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-medium mb-2">{title}</h3>
                                <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* CTA cell */}
                    <div className="bg-[#0F172A] p-8 flex flex-col justify-between gap-6">
                        <p className="text-[#94A3B8] text-sm leading-relaxed">
                            Tidak menemukan yang Anda cari? Ceritakan kebutuhan Anda.
                        </p>
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#3B82F6] transition-all duration-200 hover:gap-3"
                        >
                            Diskusi Proyek
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
}