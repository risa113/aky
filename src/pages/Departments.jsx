import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Users, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { departments } from '../data/mockData';

export default function Departments() {
  return (
    <div className="space-y-0">
      <PageHero
        title="Academic Departments & Diploma Programs"
        subtitle="Approved by AICTE, New Delhi and Affiliated to DOTE, Chennai. Industry-focused curricula designed for immediate employability and higher technical education."
        breadcrumbs={[{ label: "Departments" }]}
      />

      {/* Program Summary Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
            Diploma Engineering Wings
          </span>
          <h2 className="text-2xl sm:text-4xl font-headline font-bold text-gray-900">
            Four Core Disciplines for Career Success
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Every department at AKY Polytechnic College is equipped with dedicated modern machinery, state-of-the-art simulation software, and industry-experienced faculty mentors.
          </p>
        </div>

        <div className="space-y-10">
          {departments.map((dept, index) => (
            <div 
              key={dept.id}
              className={`bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Department Image */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] overflow-hidden">
                <img 
                  src={dept.image} 
                  alt={dept.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className={`inline-block ${dept.iconBg} text-white text-xs font-bold px-2.5 py-1 rounded-full mb-1`}>
                    DOTE Course Code: {dept.code}
                  </span>
                  <p className="text-xs text-gray-300">Intake Capacity: 60 Seats / Year</p>
                </div>
              </div>

              {/* Department Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
                      {dept.title}
                    </h3>
                    <span className="text-xs font-bold text-[#0756a6] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {dept.duration}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#0756a6] mb-3">{dept.degree}</p>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {dept.overview}
                  </p>

                  {/* Highlights Grid */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Key Laboratories:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {dept.laboratories.slice(0, 4).map((lab) => (
                        <div key={lab.name} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39A935] shrink-0" />
                          <span className="truncate">{lab.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0756a6]" />
                      6 Semesters
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#39A935]" />
                      60 Approved Intake
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/departments/${dept.id}`}
                      className="inline-flex items-center gap-1.5 bg-[#0756a6] hover:bg-[#003f7e] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Explore Department & Labs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum & Certification Advantage Banner */}
      <section className="py-16 bg-gray-50 border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001b3d] text-white rounded-2xl p-8 sm:p-10 shadow-lg text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8bfc7c]">
              Value-Added Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold max-w-2xl mx-auto">
              Skill Certifications Integrated into Every Department
            </h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto">
              Beyond the prescribed DOTE curriculum, all AKY students undergo mandatory hands-on software & technical workshops including AutoCAD, CNC G-Code programming, PLC logic, and spoken English communication.
            </p>
            <div className="pt-2">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-[#e8a317] hover:bg-[#d49411] text-[#001b3d] px-7 py-3 rounded-lg font-headline font-bold transition-all"
              >
                <span>Enroll Now for 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
