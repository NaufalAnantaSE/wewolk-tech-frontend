"use client";

import Image from "next/image";

export default function UnderConstructionPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orb top-right */}
        <div
          className="animate-pulse-glow absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--wewolk-500) 0%, var(--wewolk-700) 40%, transparent 70%)",
          }}
        />
        {/* Medium gradient orb bottom-left */}
        <div
          className="animate-pulse-glow absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--wewolk-400) 0%, var(--wewolk-600) 40%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        {/* Small accent orb center-left */}
        <div
          className="animate-pulse-glow absolute top-1/3 left-1/4 w-[250px] h-[250px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--wewolk-300) 0%, var(--wewolk-500) 40%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="animate-particle-1 absolute top-[20%] left-[10%] w-2 h-2 rounded-full"
          style={{ background: "var(--wewolk-400)" }}
        />
        <div
          className="animate-particle-2 absolute top-[60%] right-[15%] w-3 h-3 rounded-full"
          style={{ background: "var(--wewolk-300)" }}
        />
        <div
          className="animate-particle-3 absolute top-[40%] right-[30%] w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--wewolk-500)" }}
        />
        <div
          className="animate-particle-1 absolute bottom-[25%] left-[35%] w-2.5 h-2.5 rounded-full"
          style={{ background: "var(--wewolk-200)", animationDelay: "3s" }}
        />
        <div
          className="animate-particle-2 absolute top-[15%] right-[45%] w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--wewolk-400)", animationDelay: "5s" }}
        />
        <div
          className="animate-particle-3 absolute bottom-[40%] left-[60%] w-2 h-2 rounded-full"
          style={{ background: "var(--wewolk-300)", animationDelay: "7s" }}
        />
      </div>

      {/* Rotating ring decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="animate-spin-slow w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{
            border: "1px solid var(--wewolk-400)",
          }}
        />
        <div
          className="animate-spin-slow absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            border: "1px solid var(--wewolk-300)",
            animationDirection: "reverse",
            animationDuration: "30s",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Logo */}
        <div className="animate-float mb-8" style={{ animationDelay: "0.2s" }}>
          <div
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl"
            style={{
              boxShadow:
                "0 0 60px rgba(59, 139, 245, 0.3), 0 0 120px rgba(37, 99, 235, 0.15)",
            }}
          >
            <Image
              src="/images/logo.jpeg"
              alt="wewolk.tech logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <div
          className="animate-fade-in-up mb-4"
          style={{ animationDelay: "0.3s" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span
              className="animate-shimmer bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--wewolk-300), var(--wewolk-100), var(--wewolk-400), var(--wewolk-300))",
              }}
            >
              Sedang Dibangun
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className="animate-fade-in-up mb-10"
          style={{ animationDelay: "0.5s" }}
        >
          <p
            className="text-lg md:text-xl leading-relaxed max-w-md mx-auto"
            style={{ color: "var(--wewolk-200)" }}
          >
            Kami sedang menyiapkan sesuatu yang{" "}
            <span className="font-semibold" style={{ color: "var(--wewolk-400)" }}>
              luar biasa
            </span>{" "}
            untuk Anda. Nantikan!
          </p>
        </div>

        {/* Progress section */}
        <div
          className="animate-fade-in-up w-full max-w-sm mb-10"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: "var(--wewolk-300)" }}
            >
              Progress
            </span>
            <span
              className="text-sm font-mono"
              style={{ color: "var(--wewolk-400)" }}
            >
              65%
            </span>
          </div>
          <div
            className="w-full h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(59, 139, 245, 0.1)" }}
          >
            <div
              className="animate-progress-bar h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--wewolk-600), var(--wewolk-400), var(--wewolk-300))",
                boxShadow: "0 0 20px rgba(59, 139, 245, 0.5)",
              }}
            />
          </div>
        </div>

        {/* Feature pills */}
        <div
          className="animate-fade-in-up flex flex-wrap justify-center gap-3 mb-12"
          style={{ animationDelay: "0.9s" }}
        >
          {["Cloud Solutions", "Modern Tech", "Scalable Infrastructure"].map(
            (feature) => (
              <span
                key={feature}
                className="px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: "rgba(59, 139, 245, 0.1)",
                  border: "1px solid rgba(59, 139, 245, 0.2)",
                  color: "var(--wewolk-300)",
                }}
              >
                {feature}
              </span>
            )
          )}
        </div>

        {/* Notify me section */}
        <div
          className="animate-fade-in-up w-full max-w-md"
          style={{ animationDelay: "1.1s" }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Masukkan email Anda..."
              className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-wewolk-500 placeholder:opacity-50"
              style={{
                background: "rgba(59, 139, 245, 0.08)",
                border: "1px solid rgba(59, 139, 245, 0.2)",
                color: "var(--wewolk-100)",
              }}
              id="email-notify"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, var(--wewolk-600), var(--wewolk-500))",
                boxShadow:
                  "0 4px 20px rgba(37, 99, 235, 0.4), 0 0 40px rgba(59, 139, 245, 0.15)",
              }}
              id="btn-notify"
            >
              Beritahu Saya
            </button>
          </form>
        </div>

        {/* Social / Contact hint */}
        <div
          className="animate-fade-in-up mt-12"
          style={{ animationDelay: "1.3s" }}
        >
          <p
            className="text-sm"
            style={{ color: "rgba(142, 194, 255, 0.5)" }}
          >
            © {new Date().getFullYear()} wewolk.tech — All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
