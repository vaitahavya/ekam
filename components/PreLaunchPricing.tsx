"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const inclusions = [
  "Fully constructed cottage",
  "Undivided share of land",
  "Managed hospitality operations",
  "Revenue participation model",
];

export function PreLaunchPricing() {
  return (
    <section id="pricing" className="section-spacing bg-[#F8F7F4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 min-w-0 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4"
        >
          Pre-Launch Entry from ₹60 Lakhs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1A1A1A]/80 text-sm sm:text-base mb-2"
        >
          Phase 1 units are offered under a tiered pricing structure, with founder and early allocations available at preferential pricing.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1A1A1A]/70 text-sm mb-8"
        >
          Final pricing varies based on allocation stage and unit positioning.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 text-left max-w-md mx-auto mb-8"
        >
          {inclusions.map((item, i) => (
            <li key={item} className="flex items-center gap-3 text-[#1A1A1A]/90">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[#C6A15B]/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#C6A15B]" strokeWidth={2.5} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-semibold text-[#1A1A1A] text-sm sm:text-base px-4 py-3 rounded-lg bg-[#C6A15B]/15 border border-[#C6A15B]/30"
        >
          Early entry pricing is limited and will be revised as the project progresses.
        </motion.p>
      </div>
    </section>
  );
}
