"use client";

import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";
import Image from "next/image";

export default function page() {
  return (
    <main className="w-full1">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
