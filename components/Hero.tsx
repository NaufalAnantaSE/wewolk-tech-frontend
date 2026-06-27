import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HoleBackground } from "./animate-ui/components/backgrounds/hole";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6">
            <HoleBackground
                strokeColor="#2563EB"
                particleRGBColor={[96, 165, 250]}
                className="absolute inset-0 rounded-xl [&::before]:[background:radial-gradient(ellipse_at_50%_55%,transparent_10%,black_50%)]"
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-foreground">
                    Membangun produk
                    <br />
                    digital untuk bisnis
                    <br />
                    <span className="font-medium text-wewolk-600">yang bertumbuh</span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-xl mx-auto text-lg leading-relaxed text-muted-foreground font-light">
                    Kami merancang dan mengembangkan website modern, aplikasi mobile,
                    dan API yang membantu bisnis Anda berkembang dengan percaya diri.
                </p>

                {/* Features - minimal pill style */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
                    {["Web Development", "Mobile Apps", "API", "CRM", "ERP"].map((item) => (
                        <span
                            key={item}
                            className="px-4 py-1.5 rounded-full text-xs text-white font-bold bg-black/35 border border-white/10 backdrop-blur-xl"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}