"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink =
    "https://wa.me/6287887246199?text=Halo%20Wewolk.tech,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20dan%20aplikasi.";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0F1A]/40 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/favicon.png"
            alt="Wewolk"
            width={54}
            height={54}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}

              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-80  " : "max-h-0"
          }`}
      >
        <div className="space-y-5 px-6 py-6 ">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-blue/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={whatsappLink}
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex rounded-full border border-white/15 px-5 py-2 text-white transition hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}