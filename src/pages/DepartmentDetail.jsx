import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { 
  ArrowRight, 
  CheckCircle2, 
  FlaskConical, 
  Briefcase, 
  BookOpen, 
  Clock, 
  Users, 
  GraduationCap,
  Sparkles,
  Phone
} from 'lucide-react';
import { departments, collegeInfo } from '../data/mockData';

export default function DepartmentDetail() {
  const { id } = useParams();
  const dept = departments.find(d => d.id === id);

  if (!dept) {
    return <Navigate to="/departments" replace />;
  }

  return (
    <div className="space-y-0">
      <PageHero
        title={dept.title}
        subtitle={`${dept.degree} • Approved Intake: ${dept.intake} Students • Duration: ${dept.duration}`}
        breadcrumbs={[
          { label: "Departments", path: "/departments" },
          { label: dept.title }
        ]}
      />

      {/* Overview & Quick Specs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
                Department Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900 leading-tight">
                {dept.degree}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {dept.overview}
              </p>
              <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">Department Vision</span>
                <p className="text-xs sm:text-sm text-gray-700 italic">"{dept.vision}"</p>
              </div>
            </div>

            {/* Laboratory Infrastructure (Full Detail) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-6 h-6 text-[#0756a6]" />
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
                  Specialized Department Laboratories
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                The department houses modern laboratory setups equipped to provide intensive practical learning aligned with current industrial workplace expectations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {dept.laboratories.map((lab, i) => (
                  <div key={lab.name} className="p-4 bg-white rounded-xl border border-gray-200/80 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0756a6] flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <h4 className="text-sm font-headline font-bold text-gray-900 leading-snug">
                        {lab.name}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {lab.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum & Key Subjects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#39A935]" />
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
                  Core Curriculum Topics & Modules
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-200/70">
                {dept.syllabus.map((topic) => (
                  <div key={topic} className="flex items-center gap-2 py-1">
                    <CheckCircle2 className="w-4 h-4 text-[#39A935] shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#e8a317]" />
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
                  Career Trajectories & Job Profiles
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Upon completing the diploma program, graduates are immediately eligible for recruitment in public sector undertakings, multinational corporations, and private engineering firms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {dept.careers.map((career) => (
                  <div key={career} className="p-3.5 bg-white border border-gray-200/80 rounded-lg flex items-start gap-2 shadow-sm">
                    <span className="text-xs font-bold text-[#e8a317]">›</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{career}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Quick Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Specs Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-headline font-bold text-lg text-gray-900 border-b border-gray-100 pb-3">
                Course Quick Facts
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-gray-500 block text-xs">Course Duration</span>
                  <strong className="text-gray-900 font-bold">3 Years (6 Semesters)</strong>
                  <span className="text-xs text-[#0756a6] block">Direct 2nd Year for +2 / ITI</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">Approved Annual Intake</span>
                  <strong className="text-gray-900 font-bold">{dept.intake} Students / Academic Year</strong>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">Eligibility Criteria</span>
                  <span className="text-gray-700 block">10th (SSLC) Pass with Science & Maths</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">Awarding Authority</span>
                  <span className="text-gray-700 block">DOTE, Government of Tamil Nadu</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/admissions"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#39A935] hover:bg-[#2f8f2c] text-white font-headline text-sm py-3 rounded-lg font-bold transition-colors shadow-sm active:scale-95"
                >
                  <span>Apply for {dept.code}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <a
                  href={`https://wa.me/918489010999?text=${encodeURIComponent(`Hello AKY College, I want to enquire about Diploma in ${dept.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-headline text-xs py-2.5 rounded-lg font-bold transition-colors"
                >
                  <span>WhatsApp Inquiry for {dept.code}</span>
                </a>
              </div>
            </div>

            {/* Other Departments Navigation */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-3">
              <h4 className="font-headline font-bold text-sm text-gray-900">
                Other Diploma Programs
              </h4>
              <div className="space-y-1 text-xs font-semibold">
                {departments
                  .filter(d => d.id !== dept.id)
                  .map(other => (
                    <Link
                      key={other.id}
                      to={`/departments/${other.id}`}
                      className="block p-2.5 bg-white rounded-lg border border-gray-200/70 hover:border-[#0756a6] hover:text-[#0756a6] transition-colors"
                    >
                      {other.title} ({other.code})
                    </Link>
                  ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
