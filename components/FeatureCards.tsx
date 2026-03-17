"use client";

import { motion } from "framer-motion";
import { Layers, Building2, Lock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Layers,
    title: "Multi-Revenue Engine",
    desc: "Resort stays, events, shoots & more — diversified income streams.",
  },
  {
    icon: Building2,
    title: "Centralised Management",
    desc: "Professional operations so you don't manage day-to-day.",
  },
  {
    icon: Lock,
    title: "Controlled Supply (18 units)",
    desc: "Limited Phase 1 inventory protects value and demand.",
  },
  {
    icon: MapPin,
    title: "Phased Development",
    desc: "Structured rollout with clear milestones and delivery.",
  },
];

export function FeatureCards() {
  return (
    <section id="why" className="section-spacing bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] text-center mb-14"
        >
          Why This Works
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={cn(
                "p-6 rounded-xl bg-white border border-[#111111]/8 shadow-soft",
                "hover:shadow-card hover:-translate-y-1 transition-all"
              )}
            >
              <f.icon className="w-10 h-10 text-[#C6A15B] mb-4" />
              <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
