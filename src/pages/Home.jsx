import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Send, 
  ExternalLink, 
  BookOpen, 
  Award, 
  Building2, 
  Users, 
  Calendar,
  Sparkles,
  Check,
  Compass,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { 
  departments, 
  facilities, 
  recruiters, 
  initialNews, 
  collegeInfo, 
  heroSlides, 
  managementTeam 
} from '../data/mockData';
import { getAsset } from '../utils/assets';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mgmtSlide, setMgmtSlide] = useState(0);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    course: 'Mechanical (ME)'
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Auto-rotate hero slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate management team slides every 6 seconds
  useEffect(() => {
    const mgmtTimer = setInterval(() => {
      setMgmtSlide((prev) => (prev + 1) % managementTeam.length);
    }, 6000);
    return () => clearInterval(mgmtTimer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevMgmt = () => {
    setMgmtSlide((prev) => (prev - 1 + managementTeam.length) % managementTeam.length);
  };

  const handleNextMgmt = () => {
    setMgmtSlide((prev) => (prev + 1) % managementTeam.length);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('aky_enquiries') || '[]');
    const newEnquiry = {
      id: `ENQ-2026-${String(Date.now()).slice(-4)}`,
      studentName: inquiryForm.name,
      parentName: "Not Specified",
      phone: inquiryForm.phone,
      email: "N/A",
      course: inquiryForm.course,
      qualification: "10th / +2",
      percentage: "Awaiting",
      date: new Date().toISOString().split('T')[0],
      status: "New",
      notes: "Submitted via Homepage Quick Prospectus Form"
    };

    localStorage.setItem('aky_enquiries', JSON.stringify([newEnquiry, ...existing]));
    setInquirySubmitted(true);
  };

  return (
    <div className="space-y-0">

      {/* HERO SECTION WITH LARGE DEDICATED CAMPUS IMAGE SHOWCASE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#051d3b] via-[#082a52] to-[#0a192f] text-[#f9f9ff] pt-6 sm:pt-10 pb-16 sm:pb-20" id="home">
        
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e4976_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top College Intro Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="bg-[#39A935] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Admissions Open 2026–27
                </span>
                <span className="text-[#a9c7ff]">•</span>
                <span className="text-gray-200">AICTE Approved, New Delhi</span>
                <span className="text-[#a9c7ff]">•</span>
                <span className="text-[#e8a317] font-bold">DOTE Affiliated (Code: 592)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-black text-white tracking-tight uppercase">
                AKY POLYTECHNIC COLLEGE
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                (A Unit of AKY Charitable and Educational Trust) • Near M.S. University, Tirunelveli - Tenkasi Main Road
              </p>
            </div>

            {/* Quick CTAs on Header */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a 
                href={`tel:${collegeInfo.phones[0]}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold backdrop-blur-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8bfc7c]" />
                <span>+91 84890 10999</span>
              </a>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-[#39A935] hover:bg-[#2f8f2c] text-white px-5 py-2 rounded-lg text-xs sm:text-sm font-headline font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Main Grid: Prominent Campus Image Slider (Left) + Admissions Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-6">
            
            {/* Left Column: PROMINENT, PROPERLY SIZED CAMPUS IMAGE SHOWCASE SLIDER */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
              
              {/* Main Slider Display Box */}
              <div className="relative w-full h-[360px] sm:h-[450px] md:h-[500px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/25 bg-slate-950 group">
                
                {/* 100% Crisp, Natural Color Photo (NO dark blue wash!) */}
                <img 
                  key={heroSlides[currentSlide].image}
                  src={heroSlides[currentSlide].image} 
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out select-none"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getAsset("/images/about/college-facts1.jpg");
                  }}
                />

                {/* Top Badge: Category & Counter */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#39A935] animate-pulse"></span>
                    <span>{heroSlides[currentSlide].tag}</span>
                  </span>

                  <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-lg">
                    Photo {currentSlide + 1} / {heroSlides.length}
                  </span>
                </div>

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label="Previous Campus Photo"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/55 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl hover:scale-110 active:scale-95 transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label="Next Campus Photo"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/55 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl hover:scale-110 active:scale-95 transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>

                {/* Bottom Caption Overlay (Subtle gradient only at bottom 30% for high readability) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 z-10">
                  <p className="text-sm sm:text-lg md:text-xl font-headline font-bold text-white leading-snug drop-shadow-md">
                    {heroSlides[currentSlide].title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 drop-shadow leading-tight">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                  
                  {/* Slide Indicator Dots */}
                  <div className="flex items-center gap-1.5 mt-3">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Jump to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          currentSlide === idx ? 'w-7 bg-[#e8a317]' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Thumbnails Showcase Underneath */}
              <div className="mt-3.5">
                <div className="flex items-center justify-between text-xs text-gray-300 mb-2 font-medium">
                  <span className="flex items-center gap-1.5 text-white font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#e8a317]" />
                    <span>Campus Gallery Showcase (Tap to View):</span>
                  </span>
                  <span className="text-gray-400 hidden sm:inline text-[11px]">
                    Auto-slides every 5s
                  </span>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative flex-shrink-0 w-24 sm:w-28 h-16 sm:h-18 rounded-xl overflow-hidden border-2 transition-all group cursor-pointer ${
                        currentSlide === idx 
                          ? 'border-[#e8a317] ring-2 ring-[#e8a317]/60 scale-105 shadow-xl' 
                          : 'border-white/20 opacity-70 hover:opacity-100 hover:border-white/60'
                      }`}
                    >
                      <img src={slide.image} alt={slide.tag} className="w-full h-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-black/75 text-[10px] text-white py-0.5 truncate px-1 text-center font-bold">
                        {slide.tag}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: ADMISSIONS 2026-2027 REGISTRATION & PROSPECTUS CARD */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-6 text-[#121b2e] flex flex-col justify-between h-full">
                
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0756a6]">
                        Academic Session 2026-27
                      </span>
                      <h2 className="text-xl font-headline font-bold text-gray-900">
                        Admissions Open
                      </h2>
                    </div>
                    <span className="bg-[#EAF7EA] text-[#00660b] border border-[#76e569] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#39A935] animate-ping"></span>
                      Apply Now
                    </span>
                  </div>

                  {/* Highlights Pill Badges */}
                  <div className="py-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 border border-blue-100">
                      <span className="font-semibold text-gray-700">Course Eligibility</span>
                      <span className="font-bold text-[#0756a6]">10th / +2 / ITI Lateral</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/80 border border-amber-100">
                      <span className="font-semibold text-gray-700">Approved Intake</span>
                      <span className="font-bold text-[#b47a00]">60 Seats per Branch</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-green-50/80 border border-green-100">
                      <span className="font-semibold text-gray-700">Campus Facilities</span>
                      <span className="font-bold text-[#2b8a27]">Bus & Hostel Available</span>
                    </div>
                  </div>

                  {/* Quick Application Form */}
                  {inquirySubmitted ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center space-y-2 my-2">
                      <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-green-900 text-sm">Application Received!</h3>
                      <p className="text-xs text-green-700">
                        Thank you, {inquiryForm.name}. Our admissions counselor will call your phone ({inquiryForm.phone}) shortly with prospectus and scholarship details.
                      </p>
                      <button
                        type="button"
                        onClick={() => setInquirySubmitted(false)}
                        className="text-xs font-bold text-[#0756a6] hover:underline pt-1 block mx-auto"
                      >
                        Submit another application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-2.5 pt-1">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Student Full Name *
                        </label>
                        <input 
                          type="text"
                          required
                          value={inquiryForm.name}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                          placeholder="e.g. A. Mohamed Ibrahim"
                          className="w-full text-sm h-9 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white transition-all font-medium"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input 
                            type="tel"
                            required
                            value={inquiryForm.phone}
                            onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full text-sm h-9 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white transition-all font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Preferred Course
                          </label>
                          <select 
                            value={inquiryForm.course}
                            onChange={(e) => setInquiryForm({ ...inquiryForm, course: e.target.value })}
                            className="w-full text-sm h-9 px-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white transition-all font-semibold text-gray-800"
                          >
                            <option value="Mechanical (ME)">Mechanical (ME)</option>
                            <option value="Civil (CE)">Civil (CE)</option>
                            <option value="Electrical (EEE)">Electrical (EEE)</option>
                            <option value="Electronics (ECE)">Electronics (ECE)</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full mt-2 bg-[#0756a6] hover:bg-[#003f7e] text-white font-headline text-sm py-2.5 rounded-lg font-bold shadow-md transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px] active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        <span>Get Free Prospectus & Call</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Direct Helplines Strip */}
                <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#39A935]" />
                    <div>
                      <p className="text-[10px] text-gray-500 font-semibold uppercase">Admissions Helpline</p>
                      <a href={`tel:${collegeInfo.phones[0]}`} className="font-bold text-gray-900 hover:text-[#0756a6]">
                        {collegeInfo.phones[0]}
                      </a>
                    </div>
                  </div>

                  <Link 
                    to="/admissions" 
                    className="inline-flex items-center gap-1 font-bold text-[#0756a6] hover:underline"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* QUICK METRICS BAR ("AKY AT A GLANCE") */}
      <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 items-center">
            
            {/* Pillar Title */}
            <div className="md:col-span-2 pr-4 space-y-1">
              <div className="inline-block w-8 h-1 bg-[#0756a6] mb-1"></div>
              <h2 className="text-xl sm:text-2xl font-headline font-bold text-[#0756a6]">
                AKY at a Glance
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                A Legacy of Excellence Since 2015 with focus on skill empowerment and vocational leadership.
              </p>
            </div>

            {/* Metric 1: Established */}
            <div className="pt-4 sm:pt-0 sm:px-3 text-center">
              <div className="flex justify-center mb-1 text-[#0756a6]">
                <Calendar className="w-7 h-7" />
              </div>
              <p className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">2015</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Established</p>
            </div>

            {/* Metric 2: AICTE */}
            <div className="pt-4 sm:pt-0 sm:px-3 text-center">
              <div className="flex justify-center mb-1 text-[#e8a317]">
                <Award className="w-7 h-7" />
              </div>
              <p className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">AICTE</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Approved</p>
            </div>

            {/* Metric 3: DOTE */}
            <div className="pt-4 sm:pt-0 sm:px-3 text-center">
              <div className="flex justify-center mb-1 text-[#003f7e]">
                <Building2 className="w-7 h-7" />
              </div>
              <p className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">DOTE</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Affiliated (592)</p>
            </div>

            {/* Metric 4: Programs & Intake */}
            <div className="pt-4 sm:pt-0 sm:pl-3 text-center">
              <div className="flex justify-center mb-1 text-[#39A935]">
                <Users className="w-7 h-7" />
              </div>
              <p className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">4+ | 60</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Diploma Programs*</p>
            </div>

          </div>
          <p className="text-[11px] text-right text-gray-400 mt-4">
            * 60 Approved Student Intake capacity per Engineering branch as governed by AICTE norms.
          </p>
        </div>
      </section>

      {/* OUR DEPARTMENTS SECTION */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="departments">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Academic Programs
            </span>
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-gray-900 mt-1">
              Our Departments
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Choose Your Path. Build Your Future. Industry-aligned polytechnic engineering curriculum focused on modern lab machinery, drafting, and automation.
            </p>
          </div>
          <Link 
            to="/departments" 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0756a6] hover:text-[#003f7e] group self-start md:self-auto"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Department Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <article 
              key={dept.id} 
              className="bg-white border border-gray-200/80 rounded-xl overflow-hidden card-hover-fx flex flex-col group shadow-sm hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dept.image} 
                  alt={dept.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-white/95 text-[#0756a6] font-headline text-[11px] px-2.5 py-0.5 rounded font-bold shadow-sm">
                  3 Years Full Time
                </span>
                <span className="absolute top-3 right-3 bg-[#0756a6]/80 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                  Intake: {dept.intake}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className={`w-10 h-10 -mt-10 mb-3 ${dept.iconBg} text-white rounded-full flex items-center justify-center shadow-md border-2 border-white`}>
                    <span className="material-symbols-outlined text-[20px]">
                      {dept.icon}
                    </span>
                  </div>

                  <h3 className="text-lg font-headline font-bold text-gray-900 group-hover:text-[#0756a6] transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0756a6] mb-2">{dept.degree}</p>
                  
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {dept.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[#0756a6] font-bold text-xs">
                  <Link 
                    to={`/departments/${dept.id}`}
                    className="flex items-center justify-between w-full hover:underline"
                  >
                    <span>Explore Syllabus & Labs</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PREFACE FROM CHAIRMAN DESK (FULL OFFICIAL DISCOURSE) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200/70" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            
            {/* Header Ribbon */}
            <div className="bg-[#001b3d] text-white py-4 px-6 sm:px-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#e8a317]/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8a317]"></span>
                <span className="text-xs sm:text-sm font-headline font-bold tracking-widest uppercase text-[#e8a317]">
                  PREFACE FROM CHAIRMAN DESK
                </span>
              </div>
              <span className="text-xs text-[#a9c7ff] font-semibold">
                AKY Charitable and Educational Trust
              </span>
            </div>

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left: Chairman Portrait & Signature Card */}
                <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-[#e8a317] shadow-2xl">
                    <img 
                      src={collegeInfo.founder.image} 
                      alt={collegeInfo.founder.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getAsset("/images/about/founder.jpg");
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-2 inset-x-2 text-[11px] font-bold text-white bg-black/50 backdrop-blur-sm py-1 rounded">
                      Founder & Managing Trustee
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
                      {collegeInfo.founder.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0756a6] mt-0.5">
                      AKY Polytechnic College
                    </p>
                    <p className="text-[11px] text-gray-500">
                      (A Unit of AKY Charitable and Educational Trust)
                    </p>
                  </div>

                  {/* Trust Pillar Badge */}
                  <div className="w-full p-4 bg-blue-50/70 border border-blue-100 rounded-xl text-left space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0756a6]">
                      Institutional Mission
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      Skill oriented technical education for rural students in Tirunelveli.
                    </p>
                  </div>
                </div>

                {/* Right: Chairman's Complete Discourse */}
                <div className="lg:col-span-8 space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                  
                  {/* Dr APJ Abdul Kalam Quote */}
                  <div className="p-5 bg-gradient-to-r from-blue-50 via-white to-amber-50 rounded-2xl border-l-4 border-[#e8a317] border-y border-r border-gray-200/80 shadow-sm space-y-2">
                    <p className="text-xs text-gray-500 font-semibold italic">
                      There is a saying by a famous man who was a Scientist:
                    </p>
                    <blockquote className="text-base sm:text-lg font-headline font-bold text-gray-900 italic">
                      “All birds find shelter during a rain. But an Eagle avoids rain by flying above the Clouds.”
                    </blockquote>
                    <p className="text-xs text-right font-bold text-[#0756a6]">
                      — {collegeInfo.founder.scientistQuoteAuthor}
                    </p>
                  </div>

                  <p>
                    {collegeInfo.founder.message}
                  </p>

                  {/* Chinese Proverb */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs sm:text-sm italic font-medium text-gray-800 space-y-1">
                    <p className="font-bold text-[#0756a6] not-italic text-xs uppercase tracking-wide">
                      Guiding Philosophy:
                    </p>
                    <p>
                      “While planning for a year – sow corn;<br />
                      While planning for a decade – plant trees;<br />
                      While planning for a life – train and educate people”
                    </p>
                  </div>

                  <p>
                    {collegeInfo.founder.vision}
                  </p>

                  <div className="pt-3 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500 italic">With wishes and regards,</p>
                      <p className="font-headline font-bold text-base text-gray-900">
                        {collegeInfo.founder.name}
                      </p>
                    </div>

                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-2 bg-[#0756a6] hover:bg-[#003f7e] text-white px-6 py-2.5 rounded-lg font-headline text-xs sm:text-sm font-bold shadow transition-colors"
                    >
                      <span>Join AKY College</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* BOARD OF MANAGEMENT & COLLEGE LEADERSHIP SLIDER */}
          <div className="mt-10 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            
            {/* Header Ribbon */}
            <div className="bg-[#00264d] text-white py-4 px-6 sm:px-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#e8a317]/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8a317] animate-pulse"></span>
                <span className="text-xs sm:text-sm font-headline font-bold tracking-widest uppercase text-[#e8a317]">
                  BOARD OF MANAGEMENT & COLLEGE LEADERSHIP
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-300">Member {mgmtSlide + 1} of {managementTeam.length}</span>
                <div className="flex items-center gap-1 ml-2">
                  <button
                    type="button"
                    onClick={handlePrevMgmt}
                    aria-label="Previous Leader"
                    className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMgmt}
                    aria-label="Next Leader"
                    className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slider Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Image */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-4 border-[#e8a317] shadow-xl group">
                    <img 
                      src={managementTeam[mgmtSlide].image} 
                      alt={managementTeam[mgmtSlide].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getAsset("/images/about/founder.jpg");
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2.5 inset-x-3 text-center">
                      <span className="text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-block">
                        {managementTeam[mgmtSlide].role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">
                      {managementTeam[mgmtSlide].org}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">
                      {managementTeam[mgmtSlide].name}
                    </h3>
                    <p className="text-sm font-semibold text-[#e8a317]">
                      {managementTeam[mgmtSlide].role}
                    </p>
                  </div>

                  <blockquote className="p-4 bg-blue-50/70 border-l-4 border-[#0756a6] rounded-r-xl text-sm sm:text-base italic text-gray-800 font-medium">
                    "{managementTeam[mgmtSlide].quote}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {managementTeam[mgmtSlide].desc}
                  </p>

                  {/* Thumbnail Switcher for Management */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold text-gray-500">Governing Council:</span>
                    <div className="flex flex-wrap gap-2">
                      {managementTeam.map((m, idx) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMgmtSlide(idx)}
                          className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                            mgmtSlide === idx 
                              ? 'bg-[#0756a6] text-white border-[#0756a6] shadow-sm' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
                          }`}
                        >
                          {m.name.split(' ')[0]} - {m.role.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WORLD-CLASS FACILITIES */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="facilities">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
            Campus Infrastructure
          </span>
          <h2 className="text-2xl sm:text-4xl font-headline font-bold text-gray-900">
            Our Facilities
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            World-class infrastructure planned meticulously to provide students with a secure, disciplined, and technologically stimulating learning environment.
          </p>
        </div>

        {/* 10 Facility Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {facilities.map((fac) => (
            <div 
              key={fac.id}
              className="bg-white border border-gray-200/80 rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center card-hover-fx shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0756a6] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-2xl">
                  {fac.icon}
                </span>
              </div>
              <h4 className="font-headline font-bold text-gray-900 text-sm sm:text-base">
                {fac.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-tight">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 border-2 border-[#0756a6] text-[#0756a6] hover:bg-[#0756a6] hover:text-white px-6 py-2.5 rounded-lg font-headline text-sm font-bold transition-all"
          >
            <span>View All Campus Facilities In Detail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PLACEMENTS & RECRUITMENT CELL (BENTO SECTION) */}
      <section className="py-16 sm:py-20 bg-gray-50 border-y border-gray-200/70" id="placements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#121b2e] text-white">
              <div 
                className="h-80 sm:h-96 w-full bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url('${getAsset('/images/about/placement.jpg')}')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[#e8a317] text-xs font-bold uppercase tracking-wider">
                  Placement Drive Success
                </span>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-white leading-tight mt-1 mb-2">
                  Building Careers Beyond the Classroom
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                  Rigorous corporate alignment: from resume drafting, mock interviews to core manufacturing recruitment camps.
                </p>
                <Link
                  to="/placements"
                  className="inline-flex items-center gap-2 bg-[#e8a317] hover:bg-[#d49411] text-[#001b3d] font-headline text-xs sm:text-sm px-5 py-2.5 rounded-lg font-bold transition-colors w-fit"
                >
                  <span>Placement Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Recruiter Grid & Pathway */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
                  Industry Tie-Ups
                </span>
                <h3 className="text-xl sm:text-3xl font-headline font-bold text-gray-900">
                  Top Hiring Companies
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Leading automotive, infrastructure, electronics, and technical conglomerates recruit AKY diploma graduates:
                </p>
              </div>

              {/* Recruiter Logos Bento */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {recruiters.map((rec) => (
                  <div 
                    key={rec.name}
                    className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col items-center justify-center text-center shadow-sm hover:shadow transition-shadow"
                  >
                    {rec.logo ? (
                      <img 
                        src={rec.logo} 
                        alt={rec.name} 
                        className="h-10 w-auto object-contain mb-1.5"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : null}
                    <span className={`font-headline font-bold text-sm sm:text-base ${rec.color} tracking-wider`}>
                      {rec.name}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {rec.division}
                    </span>
                  </div>
                ))}
              </div>

              {/* Placement Timeline Pathway */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/70 flex flex-wrap items-center justify-between gap-2 text-xs font-headline uppercase font-bold text-gray-600 shadow-sm">
                <span className="flex items-center gap-1.5 text-[#0756a6]">
                  <span className="w-2 h-2 rounded-full bg-[#0756a6]"></span>
                  Technical Training
                </span>
                <span className="text-gray-300">→</span>
                <span className="flex items-center gap-1.5 text-[#0756a6]">
                  <span className="w-2 h-2 rounded-full bg-[#0756a6]"></span>
                  Aptitude Drills
                </span>
                <span className="text-gray-300">→</span>
                <span className="flex items-center gap-1.5 text-[#0756a6]">
                  <span className="w-2 h-2 rounded-full bg-[#0756a6]"></span>
                  Soft Skills
                </span>
                <span className="text-gray-300">→</span>
                <span className="flex items-center gap-1.5 text-[#39A935]">
                  <span className="w-2 h-2 rounded-full bg-[#39A935]"></span>
                  Campus Interviews
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LATEST NEWS & EVENTS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="news">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Updates & Notices
            </span>
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-gray-900 mt-1">
              Latest News & Events
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Stay updated with our latest institutional activities, admissions deadlines, and campus celebrations.
            </p>
          </div>
          <Link
            to="/news-events"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0756a6] hover:text-[#003f7e] group self-start md:self-auto"
          >
            <span>View All News</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialNews.slice(0, 3).map((item) => (
            <article 
              key={item.id}
              className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col justify-between card-hover-fx shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-bold px-2.5 py-0.5 rounded-full ${item.color}`}>
                    {item.category}
                  </span>
                  <span className="text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-base font-headline font-bold text-gray-900 hover:text-[#0756a6] transition-colors leading-snug">
                  <Link to="/news-events">{item.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[#0756a6] font-bold text-xs">
                <Link to="/news-events" className="flex items-center justify-between w-full hover:underline">
                  <span>Read Full Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA ACTION BANNER (ADMISSIONS DIRECT ENROLLMENT) */}
      <section className="relative py-14 sm:py-16 bg-gradient-to-r from-[#063B73] via-[#0756a6] to-[#001f3d] text-white" id="admissions-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest text-[#e8a317] uppercase border border-white/10">
            Enroll for 2026 - 2027 Academic Year
          </span>
          <h2 className="text-2xl sm:text-4xl font-headline font-bold max-w-2xl mx-auto leading-tight">
            Your Journey to a Better Future Starts Here
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Join AKY Polytechnic College and become a disciplined, skilled engineering professional. Walk in with curiosity, graduate with career clarity.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pt-2">
            <a
              href={`tel:${collegeInfo.phones[0]}`}
              className="w-full sm:w-auto bg-[#39A935] hover:bg-[#2f8f2c] text-white font-headline text-sm sm:text-base px-7 py-3.5 rounded-lg font-bold shadow-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Admissions Desk</span>
            </a>
            <Link
              to="/admissions"
              className="w-full sm:w-auto bg-[#e8a317] hover:bg-[#d49411] text-[#001b3d] font-headline text-sm sm:text-base px-7 py-3.5 rounded-lg font-bold shadow-lg transition-all inline-flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Apply Online Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
