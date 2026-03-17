"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const streams = [
  { src: images.weekendStays, label: "Resort Stays", desc: "Families & couples seeking weekend getaways" },
  { src: images.corporate, label: "Corporate", desc: "Team retreats & outdoor conferences" },
  { src: images.wedding, label: "Events", desc: "Destination weddings & pre-wedding shoots" },
  { src: images.film, label: "Film & Shoots", desc: "Commercial shoots & content production" },
];

export function RevenueChart() {
  const [activeChannel, setActiveChannel] = useState<string | null>(null);

  return (
    <section id="revenue" className="section-spacing bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 min-w-0">
        {/* Step 1 — HOOK: Outcome first */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] text-center mb-2"
        >
          Projected Owner Income
        </motion.h2>

        {/* Visual split: LEFT ₹60K–₹70K | RIGHT 60% Owner | 40% Operator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-xl bg-[#F8F7F4] border border-[#1A1A1A]/8">
            <span className="text-3xl" aria-hidden>💰</span>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#C6A15B]">
                ₹60,000 – ₹70,000 per month
              </p>
              <p className="text-sm text-[#1A1A1A]/70 mt-1">
                Based on 30% utilisation under conservative operating assumptions.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-xl bg-[#F8F7F4] border border-[#1A1A1A]/8">
            <span className="text-3xl" aria-hidden>⚙️</span>
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                60% Owner | 40% Operator
              </p>
              <p className="text-sm text-[#1A1A1A]/70 mt-1">
                Net operating income share
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 2 — Credibility */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#1A1A1A]/80 text-sm sm:text-base mb-10 max-w-2xl mx-auto"
        >
          Income is generated through a managed hospitality model with multiple revenue streams including stays, events, and shoot-based bookings.
        </motion.p>

        {/* Channel buttons — highlight revenue streams */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
        >
          {streams.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActiveChannel(activeChannel === s.label ? null : s.label)}
              className={`
                px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2
                ${activeChannel === s.label
                  ? "bg-[#C6A15B] text-white shadow-md scale-105"
                  : "bg-[#1A1A1A]/8 text-[#1A1A1A]/80 hover:bg-[#C6A15B]/20 hover:text-[#1A1A1A]"
                }
              `}
            >
              {s.label}
            </button>
          ))}
        </motion.div>

        {activeChannel && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#1A1A1A]/70 text-sm mb-6"
          >
            {streams.find((s) => s.label === activeChannel)?.desc}
          </motion.p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {streams.map((s, i) => {
            const isActive = activeChannel === null || activeChannel === s.label;
            return (
              <motion.button
                key={s.label}
                type="button"
                onClick={() => setActiveChannel(activeChannel === s.label ? null : s.label)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`
                  rounded-xl overflow-hidden shadow-soft transition-all text-left
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2
                  ${isActive ? "hover:shadow-card hover:-translate-y-0.5 opacity-100" : "opacity-50 hover:opacity-70"}
                  ${activeChannel === s.label ? "ring-2 ring-[#C6A15B] shadow-card -translate-y-0.5" : ""}
                `}
              >
                <div className="aspect-[4/3] relative">
                  <Image src={s.src} alt={s.label} fill className="object-cover" />
                </div>
                <p className="p-2 text-center text-sm font-medium text-[#1A1A1A]/80 bg-white">
                  {s.label}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Step 3 — How Revenue Is Distributed (logic) */}
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] text-center mb-4"
        >
          How Revenue Is Distributed
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-3 text-[#1A1A1A]/80 text-sm sm:text-base mb-8"
        >
          <p>All revenues are pooled and operating expenses are deducted first.</p>
          <p className="font-medium text-[#1A1A1A]">The net operating income is shared:</p>
          <ul className="list-none space-y-1 pl-0">
            <li className="flex items-center gap-2">
              <span className="font-semibold text-[#C6A15B]">60%</span> to Unit Owner
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold text-[#C6A15B]">40%</span> to Operator
            </li>
          </ul>
        </motion.div>

        {/* Step 4 — Trust line */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#1A1A1A]/80 text-sm sm:text-base font-medium mb-8 max-w-xl mx-auto"
        >
          This structure ensures professional management, consistent occupancy, and transparent operations.
        </motion.p>

        {/* Step 5 — Legal / disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-2 text-center text-xs sm:text-sm text-[#1A1A1A]/60"
        >
          <p>
            Figures are indicative and based on projected utilisation and pricing assumptions. Actual performance may vary.
          </p>
          <p className="italic">
            Returns are not fixed or guaranteed, but driven by actual operational performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
