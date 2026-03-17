"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export function FounderTrust() {
  return (
    <section className="section-spacing bg-[#F8F7F4] relative overflow-x-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url(${images.audience})` }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] text-center mb-8"
        >
          Built by Experience Across Industries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1A1A1A]/80 text-center leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Valora Vista is formed by professionals with over a decade of
          experience across:
        </motion.p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[#1A1A1A]/80 mb-10">
          <li>Film & content production</li>
          <li>Marketing & audience building</li>
          <li>Construction & execution</li>
        </ul>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-serif text-lg text-[#5C4A1A] italic"
        >
          This enables us to create not just spaces, but demand-driven
          destinations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Image
            src={images.corporate}
            alt="Valora Vista — experience across industries"
            width={480}
            height={280}
            className="rounded-xl shadow-card w-full max-w-md h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
