"use client";

import { motion } from "framer-motion";
import { FileCheck, HardHat, Settings, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { icon: FileCheck, label: "Unit Booking", key: "booking" },
  { icon: HardHat, label: "Construction", key: "construction" },
  { icon: Settings, label: "Operational Setup", key: "setup" },
  { icon: Banknote, label: "Revenue Generation", key: "revenue" },
];

export function ProcessFlow() {
  return (
    <section id="process" className="section-spacing bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] text-center mb-16"
        >
          How It Works
        </motion.h2>
        <div className="relative">
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#111111]/10 -translate-y-1/2" />
          <div className="grid sm:grid-cols-4 gap-8 sm:gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div
                  className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center",
                    "bg-[#F8F7F4] border-2 border-[#C6A15B]/40 text-[#C6A15B]",
                    "group-hover:bg-[#C6A15B]/15 group-hover:scale-105 transition-all z-10"
                  )}
                >
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <p className="mt-4 font-semibold text-[#1A1A1A] text-sm sm:text-base">
                  {step.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
