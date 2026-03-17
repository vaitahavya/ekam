"use client";

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

const drivers = [
  {
    icon: Sparkles,
    title: "Spiritual Tourism",
    desc: "Kanha Shantivanam attracts consistent visitor flow throughout the year.",
  },
  {
    icon: GraduationCap,
    title: "Academic Demand",
    desc: "Symbiosis ensures recurring short-stay demand from visiting families and guests.",
  },
  {
    icon: Mountain,
    title: "Weekend Market",
    desc: "Hyderabad catchment drives regular bookings and short-stay demand.",
  },
];

export function DemandDrivers() {
  return (
    <section id="demand" className="section-spacing bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] text-center mb-4"
        >
          What Drives Demand
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {drivers.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={cn(
                "p-6 rounded-xl bg-[#F8F7F4] border border-[#1A1A1A]/10",
                "shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-[#C6A15B]/20",
                "transition-all duration-300"
              )}
            >
              <d.icon className="w-10 h-10 text-[#C6A15B] mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-2">
                {d.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm sm:text-base text-[#1A1A1A]/80 max-w-2xl mx-auto"
        >
          These demand drivers support consistent occupancy and long-term revenue potential.
        </motion.p>
      </div>
    </section>
  );
}
