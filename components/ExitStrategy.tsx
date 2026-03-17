"use client";

import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

export function ExitStrategy() {
  return (
    <section id="exit" className="section-spacing bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 min-w-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C6A15B]/15 text-[#C6A15B] mb-8"
        >
          <ArrowRightCircle className="w-8 h-8" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4"
        >
          Exit With Clarity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1A1A1A]/80 leading-relaxed mb-4"
        >
          Resale after lock-in. Structured exit support for bulk investors after
          24 months. Long-term yield holding.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-[#1A1A1A]/60 italic"
        >
          Exit mechanisms are structured, not speculative.
        </motion.p>
      </div>
    </section>
  );
}
