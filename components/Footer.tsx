"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-w-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="#hero" className="flex items-center gap-2">
            <Image
              src={images.logo}
              alt="Decade Street Ekam"
              width={100}
              height={30}
              className="h-7 w-auto opacity-90"
            />
            <span className="font-serif text-sm tracking-widest text-[#C6A15B]">
              EKAM
            </span>
          </Link>
          <p className="text-sm">
            Project of <strong className="text-white">Valora Vista</strong>
          </p>
          <a
            href="tel:+916309697306"
            className="text-sm text-[#C6A15B] hover:underline"
          >
            +91 63096 97306
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Decade Street Ekam. Hyderabad. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
