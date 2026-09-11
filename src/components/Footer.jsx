import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import logoImg from '../assets/aky-logo.png';
import { collegeInfo } from '../data/mockData';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Departments', path: '/departments' },
    { label: 'Admissions 2026-27', path: '/admissions' },
    { label: 'Campus Facilities', path: '/facilities' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Training & Placements', path: '/placements' },
    { label: 'News & Events', path: '/news-events' },
    { label: 'Photo Gallery', path: '/gallery' },
    { label: 'AICTE Approvals', path: '/approvals' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Admin Portal', path: '/admin' }
  ];

  return (
    <footer className="w-full bg-[#121b2e] text-[#f9f9ff] pt-14 pb-8 px-4 sm:px-6 lg:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-gray-800">
        
        {/* Brand & Trust Profile */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="AKY Crest" 
              className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1.5"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCtpqCzaVipVcAZqYmz-eD9wO2TV11o6UFm2bCQ8kFkp53ka-xVPDJKdwWgLqY_VENH0lQRaG1g65ROoe0974OVW8r13mQHyuYJrg1Nzowfg3t4us6qivUodD8_EiQXiAqQNYmRhConhHRujtRInp_Hjfw3ZB1qUp74u0p56zYDkev29sYnp4UOdQA4tMhWBtlquOZH1Th4eihQmsoneXIGL4lKCEFCHLKvQs_mH9u2Fy8L7n7xTHpOdxnwUYAXiwXcU";
              }}
            />
            <div>
              <span className="text-lg font-headline font-bold text-white tracking-tight uppercase block leading-tight">
                AKY POLYTECHNIC COLLEGE
              </span>
              <span className="text-[11px] text-[#a9c7ff] block">
                Approved by AICTE | Affiliated to DOTE
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            (A Unit of <strong className="text-white">AKY Charitable and Educational Trust</strong>)<br />
            Committed to technical excellence, rural student empowerment, and industry-oriented vocational career development since 2015.
          </p>

          <div className="pt-2 flex items-center gap-3 text-gray-400">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Motto:</span>
            <span className="text-xs text-[#8bfc7c] font-semibold">
              Skill • Knowledge • Innovation • Career
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-base font-headline font-bold text-white mb-3">Quick Navigation</h4>
          <div className="grid grid-cols-1 gap-2 text-sm">
            {quickLinks.slice(0, 7).map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                <span className="text-gray-600 text-xs">›</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Institutional Contact Details */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-base font-headline font-bold text-white mb-3">Campus Contact</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#8bfc7c] shrink-0 mt-0.5" />
              <span className="leading-snug">
                4 / 254, Tirunelveli - Tenkasi Main Road, Near M.S. University,<br />
                Seethaparpanallur Post, Tirunelveli - 627012, Tamil Nadu.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#8bfc7c] shrink-0" />
              <div className="space-x-2">
                <a href={`tel:${collegeInfo.phones[0]}`} className="hover:text-white transition-colors">
                  {collegeInfo.phones[0]}
                </a>
                <span>|</span>
                <a href={`tel:${collegeInfo.phones[1]}`} className="hover:text-white transition-colors">
                  {collegeInfo.phones[1]}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#8bfc7c] shrink-0" />
              <a href={`mailto:${collegeInfo.email}`} className="hover:text-white transition-colors">
                {collegeInfo.email}
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-block text-xs font-bold text-[#d6e3ff] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Institutional DOTE Code: 592
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Strip */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} AKY Polytechnic College. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs">
          <span>AICTE Approved</span>
          <span>•</span>
          <span>DOTE Chennai</span>
          <span>•</span>
          <Link to="/admin" className="text-gray-500 hover:text-gray-300 transition-colors">
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
