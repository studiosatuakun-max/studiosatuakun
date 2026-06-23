"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppFloat({ 
  phoneNumber = "6282260880878", 
  message = "Halo Tim Studio Satu Akun, saya ingin konsultasi gratis mengenai pembuatan sistem digital." 
}: WhatsAppFloatProps) {
  
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Chat via WhatsApp">
        <div className="relative group">
          {/* Ping animation behind */}
          <div className="absolute -inset-2 bg-green-500 rounded-full opacity-30 group-hover:animate-ping transition-opacity"></div>
          
          <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <MessageCircle className="w-7 h-7" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1.5 bg-slate-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-white/10">
            Chat via WhatsApp
            {/* Tooltip arrow */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-slate-900"></div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
