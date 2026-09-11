import React from 'react';
import { MessageCircle } from 'lucide-react';
import { collegeInfo } from '../data/mockData';

export default function WhatsAppButton() {
  const phone = "918489010999";
  const message = encodeURIComponent(
    "Hello AKY Polytechnic College, I would like to know more about admissions for the 2026-27 academic year."
  );

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 z-40">
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 sm:gap-2.5 transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat with Admissions team on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366]" />
        <span className="font-headline text-xs sm:text-sm font-bold pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
