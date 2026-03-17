"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "916309697306";
const MESSAGE = "Hi, I'm interested in Decade Street Ekam. I'd like to know more.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 sm:right-6 z-40 flex items-center justify-center w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform [bottom:max(1.5rem,env(safe-area-inset-bottom))]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
