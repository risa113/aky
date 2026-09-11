import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHero({ eyebrow = "AKY Polytechnic College", title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#06284E] text-white py-12 sm:py-16 md:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 custom-hero-overlay opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuATnsv5LQfEmoGLPkm9FimGEJo1zoBt1ghLp4Iod33bfoYdAa8Iq5WL0GlHl5IbCyOT0XRAtJfyH9lwZ1ldFqkhWvODaAZQRIunXO76Fzm6eOYEZ8UpA52VyHRr1Kcs5MVaNftr9TnqzM8TXUHIPABmt9pPR-1qEFfJFBDdlpM3vtgdD2CfQfbiPZyQdvW5IkS0Cj_jzD-gpgpzHx5veDDseGMfotycbvSFOnXgfLcdi30gK1TbwjpRaA')` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start gap-3">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#a9c7ff] mb-2 font-medium">
          <Link to="/" className="hover:text-white flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={b.path || b.label}>
              {b.path ? (
                <Link to={b.path} className="hover:text-white">
                  {b.label}
                </Link>
              ) : (
                <span className="text-white font-semibold">{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8bfc7c] bg-[#004b06]/60 border border-[#8bfc7c]/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8bfc7c] animate-pulse"></span>
          {eyebrow}
        </span>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-[#d9e2fc] max-w-3xl leading-relaxed mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
