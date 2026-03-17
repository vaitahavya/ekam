"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-viewport relative flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.pathway})` }}
      />
      <div className="absolute inset-0 bg-[#111111]/80" />
      <div className="relative z-10 w-full max-w-full min-w-0 h-full min-h-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-16 pb-12">
        <div className="w-full max-w-4xl mx-auto min-w-0 flex flex-col items-center justify-center flex-1 min-h-0 py-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full min-w-0 max-w-2xl mx-auto space-y-4 sm:space-y-6"
          >
            {/* Logo + name sized to fit hero */}
            <div className="flex flex-col items-center justify-center shrink-0 max-h-[40vh] w-full [&_img]:mix-blend-multiply">
              <Image
                src={images.logo}
                alt=""
                width={280}
                height={84}
                className="h-[min(16vh,9rem)] w-auto object-contain"
              />
              <p className="font-serif font-semibold text-white tracking-[0.25em] mt-2 text-base sm:text-lg">
                EKAM
              </p>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] break-words">
              Own a Managed Resort Asset That Generates Monthly Income
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed break-words">
              Decade Street Ekam is a structured hospitality development in Hyderabad
              designed for investors seeking recurring income, asset ownership, and
              defined exit pathways.
            </p>
            <p className="text-sm sm:text-base text-[#C6A15B] font-medium tracking-wide">
              Only 18 Units in Phase 1 | Founder Allocation Now Open
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#C6A15B] text-[#111111] font-semibold text-sm sm:text-base hover:shadow-glow hover:bg-[#C6A15B]/95 transition-all"
            >
              Schedule Private Presentation
            </Link>
            <Link
              href="#revenue"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-white/40 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/60 transition-all"
            >
              View Financial Model
            </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
