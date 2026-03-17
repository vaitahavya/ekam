"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(pct);
      setVisible(pct > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed right-4 sm:right-6 z-40 [bottom:max(6.5rem,calc(1.5rem+env(safe-area-inset-bottom)+4rem))]"
        >
          <Link
            href="#cta"
            className={cn(
              "flex items-center gap-2 px-4 py-3 rounded-lg shadow-card",
              "bg-[#111111] text-white font-semibold text-sm",
              "hover:shadow-glow hover:bg-[#111111]/95 transition-all",
              "border border-[#C6A15B]/30"
            )}
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Schedule Presentation</span>
            <span className="sm:hidden">Book Now</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
