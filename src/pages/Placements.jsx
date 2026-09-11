import React from 'react';
import PageHero from '../components/PageHero';
import { 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Award, 
  Building, 
  Users, 
  Phone, 
  Mail,
  ArrowRight 
} from 'lucide-react';
import { recruiters, collegeInfo } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function Placements() {
  const roadmap = [
    {
      step: "01",
      title: "Fundamental Technical Training",
      desc: "Core department labs, CAD software, machine tool operation, and practical circuit testing."
    },
    {
      step: "02",
      title: "Quantitative Aptitude & Reasoning",
      desc: "Weekly mathematical, logical, and analytical drills tailored for corporate entrance screenings."
    },
    {
      step: "03",
      title: "Soft Skills & Communicative English",
      desc: "Professional communication grooming, email writing, team dynamics, and presentation poise."
    },
    {
      step: "04",
      title: "Mock Interviews & Resume Clinic",
      desc: "One-on-one simulated HR and technical rounds with real-time corrective feedback."
    },
    {
      step: "05",
      title: "Campus Drives & Job Offer Letters",
      desc: "Arrangement of on-campus and pooled recruitment drives with reputable core engineering recruiters."
    }
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="Training & Placement Cell"
        subtitle="Building Careers Beyond the Classroom. Systematically transforming students into sought-after diploma engineering professionals."
        breadcrumbs={[{ label: "Placements" }]}
      />

      {/* Intro Bento */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Career Trajectories
            </span>
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-gray-900 leading-tight">
              Bridging Academic Potential with Corporate Expectations
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              At AKY Polytechnic College, career preparation begins in the third semester rather than the final months. Our dedicated Training and Placement Cell works proactively with manufacturing conglomerates, civil infrastructure developers, automotive majors, and electrical power industries.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We focus heavily on core engineering placements where diploma holders operate as site supervisors, maintenance technicians, CAD designers, quality controllers, and CNC programmers with clear promotion ladders.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl">
                <span className="text-xl sm:text-2xl font-headline font-bold text-[#0756a6]">100%</span>
                <span className="block text-xs text-gray-600 font-semibold">Placement Support</span>
              </div>
              <div className="p-4 bg-amber-50/70 border border-amber-100 rounded-xl">
                <span className="text-xl sm:text-2xl font-headline font-bold text-[#e8a317]">20+</span>
                <span className="block text-xs text-gray-600 font-semibold">Recruiting Partners</span>
              </div>
              <div className="p-4 bg-green-50/70 border border-green-100 rounded-xl col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-headline font-bold text-[#39A935]">150+</span>
                <span className="block text-xs text-gray-600 font-semibold">Mock Drills Done</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQfnKRKzKzSUzWWpY_EsBCvStyh8wxtm3yhWyAywrYentG405T-nfw4HzrSWyqIxqFfeQ3psmFrRwSG5601vJb46e7l8Jh5kY5wu7OxnKD5J5fdBIaRoWfumcty7Xb3goyP_FfC-sYKW-LmQihO6IfoVinOjU5PtI9uirvSOWTdq7w-yRWCKgV-VGgoIHrcqVxg2dyqnxupxGZZPG9mel-EB2Mfkdqc46i6YsKQfF9yTSkE3cvu7jAuQ" 
                alt="Placement Training Session"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#e8a317] uppercase tracking-wider">
                  Real Industry Experience
                </span>
                <h3 className="text-lg font-headline font-bold">Practical Machining & Assembly</h3>
                <p className="text-xs text-gray-300">AKY students in hands-on industrial workshop sessions.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5-Stage Training Roadmap */}
      <section className="py-16 bg-gray-50 border-y border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900 mt-1">
              5-Stage Career Readiness Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roadmap.map((item) => (
              <div key={item.step} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
                <span className="text-2xl font-headline font-extrabold text-[#0756a6]">
                  {item.step}
                </span>
                <h4 className="font-headline font-bold text-sm text-gray-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Companies Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
            Recruiting Companies
          </span>
          <h3 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">
            Top Industrial Employers
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Leading conglomerates and core engineering industries hiring polytechnic talent:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {recruiters.map((r) => (
            <div 
              key={r.name} 
              className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className={`font-headline font-bold text-xl ${r.color} tracking-wider`}>
                {r.name}
              </span>
              <span className="text-[11px] text-gray-500 mt-1">{r.division}</span>
            </div>
          ))}
        </div>

        {/* Contact Placement Officer Card */}
        <div className="mt-14 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm max-w-2xl mx-auto text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0756a6] flex items-center justify-center mx-auto">
            <Briefcase className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-headline font-bold text-gray-900">
            Placement Cell Assistance
          </h4>
          <p className="text-xs sm:text-sm text-gray-600">
            For campus recruitment partnerships, corporate tie-ups, or student placement verification:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-bold text-[#0756a6] pt-1">
            <a href={`tel:${collegeInfo.phones[0]}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span>{collegeInfo.phones[0]}</span>
            </a>
            <span className="text-gray-300">•</span>
            <a href={`mailto:${collegeInfo.email}`} className="flex items-center gap-1.5 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>{collegeInfo.email}</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
