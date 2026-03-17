"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Building2, TrendingUp } from "lucide-react";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Landmark,
    title: "Ownership",
    desc: "Fully constructed asset with land share",
  },
  {
    icon: Building2,
    title: "Operations",
    desc: "Managed by a central operator",
  },
  {
    icon: TrendingUp,
    title: "Revenue",
    desc: "Multi-stream income model",
  },
];

export function IdeaSection() {
  return (
    <section id="idea" className="section-spacing bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              This Is Not a Plot. This Is a System.
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Most real estate investments offer either appreciation or rental
              income. Decade Street Ekam is designed to deliver both — through a
              structured hospitality model where ownership, operations, and
              revenue are aligned.
            </p>
            <ul className="space-y-2 text-[#1A1A1A]/80">
              <li>You own a built asset.</li>
              <li>We operate it professionally.</li>
              <li>Revenue is generated across multiple channels.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src={images.lifestyle}
              alt="Decade Street Ekam lifestyle"
              width={560}
              height={360}
              className="rounded-xl shadow-card w-full h-auto object-cover"
            />
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                "p-6 rounded-xl bg-white border border-[#111111]/8 shadow-soft",
                "hover:shadow-card hover:-translate-y-0.5 transition-all"
              )}
            >
              <card.icon className="w-10 h-10 text-[#C6A15B] mb-4" />
              <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-2">
                {card.title}
              </h3>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
