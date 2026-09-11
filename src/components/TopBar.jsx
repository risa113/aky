import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { collegeInfo } from '../data/mockData';

export default function TopBar() {
  return (
    <aside 
      aria-label="Institutional Quick Contacts" 
      className="bg-[#001b3d] text-[#d6e3ff] border-b border-[#0756a6]/30 text-xs py-1.5 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        {/* Left Contacts */}
        <div className="flex items-center flex-wrap gap-4 text-[#a9c7ff] text-[13px]">
          <a 
            href={`mailto:${collegeInfo.email}`} 
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-tertiary-fixed" />
            <span className="truncate max-w-[160px] sm:max-w-none">{collegeInfo.email}</span>
          </a>
          <span className="hidden sm:inline text-[#c2c6d3]/40">|</span>
          <a 
            href={`tel:${collegeInfo.phones[0]}`} 
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-tertiary-fixed" />
            <span>{collegeInfo.phones[0]}</span>
          </a>
          <span className="hidden md:inline text-[#c2c6d3]/40">|</span>
          <a 
            href={`tel:${collegeInfo.phones[1]}`} 
            className="hidden md:inline hover:text-white transition-colors duration-200"
          >
            {collegeInfo.phones[1]}
          </a>
        </div>

        {/* Right Pillars & Affiliation */}
        <div className="flex items-center gap-4 ml-auto text-[11px]">
          <div className="hidden lg:flex items-center gap-2 font-semibold tracking-wider uppercase text-[#8bfc7c]">
            {collegeInfo.motto.map((pillar, idx) => (
              <React.Fragment key={pillar}>
                <span>{pillar}</span>
                {idx < collegeInfo.motto.length - 1 && <span className="text-white/40">•</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[#d6e3ff] border-l border-white/20 pl-3">
            <span className="bg-white/10 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
              DOTE CODE: {collegeInfo.doteCode}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
