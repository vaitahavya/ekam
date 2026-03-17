"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const items = [
  { label: "18 Cottages", value: "18" },
  { label: "2 Acres", value: "2" },
  { label: "Central Event Plaza", value: null },
  { label: "Café & Experience Zone", value: null },
  { label: "Managed Operations", value: null },
];

export function ProjectSnapshot() {
  return (
    <section id="snapshot" className="section-spacing bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] text-center mb-14"
        >
          Project Snapshot
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={cn(
                  "p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60",
                  "shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
                )}
              >
                {item.value && (
                  <p className="text-2xl font-serif font-bold text-[#C6A15B]">
                    {item.value}
                  </p>
                )}
                <p className={cn("text-[#1A1A1A]/80", item.value ? "text-sm mt-1" : "font-medium")}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <Image
              src={images.streetView}
              alt="Decade Street pathway and cottages"
              width={600}
              height={320}
              className="w-full rounded-xl shadow-card object-cover"
            />
            <div className="grid grid-cols-2 gap-3">
              <Image
                src={images.pool}
                alt="Resort pool"
                width={280}
                height={160}
                className="w-full rounded-xl shadow-soft object-cover aspect-video"
              />
              <Image
                src={images.kidsArea}
                alt="Kids play area"
                width={280}
                height={160}
                className="w-full rounded-xl shadow-soft object-cover aspect-video"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
