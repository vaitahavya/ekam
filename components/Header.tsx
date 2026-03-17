"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#idea", label: "Concept" },
  { href: "#process", label: "How It Works" },
  { href: "#snapshot", label: "Overview" },
  { href: "#why", label: "Why This Works" },
  { href: "#demand", label: "Demand" },
  { href: "#revenue", label: "Income" },
  { href: "#exit", label: "Exit" },
  { href: "#cta", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] isolate relative overflow-hidden bg-[#0F0F0F] text-white border-b border-white/10">
      <div className="absolute inset-0">
        <Image
          src={images.closeBg}
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/40" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        <Link
          href="#hero"
          className="relative flex h-full self-stretch items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
        >
          <span className="relative flex h-full min-h-[2.5rem] w-[140px] sm:w-[160px] shrink-0 items-center">
            <Image
              src={images.logo}
              alt="Decade Street"
              fill
              className="object-contain object-left"
              sizes="160px"
            />
          </span>
          <span className="font-serif font-semibold text-sm sm:text-base tracking-[0.2em] text-white/90 hidden sm:inline">
            EKAM
          </span>
        </Link>

        <nav className="relative hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium text-white/80 hover:text-[#C6A15B] rounded transition-colors"
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="relative md:hidden bg-[#0F0F0F] border-t border-white/10"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 hover:text-[#C6A15B]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
