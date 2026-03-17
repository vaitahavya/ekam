"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section
      id="cta"
      className="section-spacing bg-[#111111] text-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 min-w-0 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold mb-4"
        >
          Early Entry Defines Return
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/80 mb-10"
        >
          Only 18 units in Phase 1. Founder allocation is limited.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="https://wa.me/916309697306?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Founder%20Unit%20at%20Decade%20Street%20Ekam."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#C6A15B] text-[#111111] font-semibold hover:shadow-glow transition-all"
          >
            Book Founder Unit
          </Link>
          <Link
            href="https://wa.me/916309697306?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20Decade%20Street%20Ekam."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Schedule Site Visit
          </Link>
          <Link
            href="#revenue"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-white/30 text-white/90 font-semibold hover:bg-white/10 transition-all"
          >
            Get Financial Model
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
