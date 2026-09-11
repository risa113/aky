import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { 
  CheckCircle2, 
  Send, 
  Phone, 
  FileText, 
  GraduationCap, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';
import { departments, collegeInfo } from '../data/mockData';

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    dob: '',
    gender: 'Male',
    address: '',
    schoolName: '',
    percentage: '',
    passingYear: '2026',
    community: 'BC',
    course: 'Mechanical Engineering'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone || !formData.percentage) {
      alert('Please fill in Student Name, Mobile Number, and 10th Percentage.');
      return;
    }

    const newId = `ENQ-2026-${String(Date.now()).slice(-4)}`;
    const newEnquiry = {
      id: newId,
      studentName: formData.studentName,
      parentName: formData.parentName || "Not Specified",
      phone: formData.phone,
      email: formData.email || "N/A",
      course: formData.course,
      qualification: `10th (${formData.percentage}%)`,
      percentage: `${formData.percentage}%`,
      date: new Date().toISOString().split('T')[0],
      status: "New",
      notes: `School: ${formData.schoolName || 'N/A'}, Community: ${formData.community}, Address: ${formData.address || 'N/A'}`
    };

    const existing = JSON.parse(localStorage.getItem('aky_enquiries') || '[]');
    localStorage.setItem('aky_enquiries', JSON.stringify([newEnquiry, ...existing]));

    setSubmittedId(newId);
    setSubmitted(true);
  };

  const steps = [
    { num: "1", title: "Enquiry & Counseling", desc: "Submit your online enquiry or visit the campus admissions cell to receive expert guidance on branch selection." },
    { num: "2", title: "Application Submission", desc: "Fill out the official DOTE polytechnic admission form and register your course preferences." },
    { num: "3", title: "Document Verification", desc: "Submit original Marksheets, Transfer Certificate (TC), Community Certificate, and Aadhaar card." },
    { num: "4", title: "Admission Confirmation", desc: "Seat allotment, nominal fee payment, and issuance of official admission order and student ID." },
    { num: "5", title: "Begin Your Journey", desc: "Attend the institutional orientation program, collect uniforms & lab kits, and start classes." }
  ];

  const documents = [
    "10th (SSLC) Marksheet / Original + 3 sets of photocopies",
    "Transfer Certificate (TC) issued by the last attended school",
    "Conduct & Character Certificate",
    "Community Certificate (issued by competent Tahsildar / Revenue authority)",
    "Aadhaar Card copy of Student and Parent",
    "Recent Passport Size Color Photographs (6 copies)",
    "+2 / HSC Marksheet or ITI 2-Year Certificate (for Lateral Entry applicants)"
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="Admissions 2026–2027"
        subtitle="Step into a world of technical competence and assured careers. Applications open for 1st Year Diploma & Direct 2nd Year Lateral Entry across all 4 departments."
        breadcrumbs={[{ label: "Admissions" }]}
      />

      {/* Why Choose AKY Banner */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-2xl border border-blue-100 p-6 sm:p-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Admission Highlights 2026-27
            </span>
            <h2 className="text-xl sm:text-3xl font-headline font-bold text-gray-900 mt-1 mb-3">
              Shape Your Technical Ambitions with AKY Polytechnic
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#39A935] shrink-0" />
                <span>AICTE Approved & DOTE Affiliated Institution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#39A935] shrink-0" />
                <span>Modern CNC, CAD/CAM & Heavy Electrical Machines Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#39A935] shrink-0" />
                <span>Comprehensive Bus Facility across Tirunelveli & Tenkasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#39A935] shrink-0" />
                <span>Special fee concessions for rural first-generation learners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 bg-gray-50 border-y border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Seamless Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900 mt-1">
              5-Step Admission Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm relative space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#0756a6] text-white flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>
                <h3 className="font-headline font-bold text-sm text-gray-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form & Requirements Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Application Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">
                Online Admission Registration
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900 mt-1">
                Student Admission Enquiry 2026–27
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Fill this form to register your seat preference. Our admissions cell will contact you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-headline font-bold text-green-900">
                  Enquiry Registered Successfully!
                </h4>
                <p className="text-xs font-bold text-green-800">
                  Application Reference ID: {submittedId}
                </p>
                <p className="text-xs text-green-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.studentName}</strong>. Your enquiry for <strong>{formData.course}</strong> has been logged in the AKY Polytechnic College admission system. Our admission counselor will reach out to <strong>{formData.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      studentName: '',
                      parentName: '',
                      phone: '',
                      email: '',
                      dob: '',
                      gender: 'Male',
                      address: '',
                      schoolName: '',
                      percentage: '',
                      passingYear: '2026',
                      community: 'BC',
                      course: 'Mechanical Engineering'
                    });
                  }}
                  className="bg-[#0756a6] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#003f7e] transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Student Personal Info */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">
                    1. Student Particulars
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Student Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="As in 10th marksheet"
                        className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Parent / Guardian Name
                      </label>
                      <input 
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Father / Mother Name"
                        className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mobile Number *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Phone number"
                        className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="student@example.com"
                        className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input 
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full text-xs sm:text-sm h-10 px-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Gender
                      </label>
                      <select 
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full text-xs sm:text-sm h-10 px-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Community
                      </label>
                      <select 
                        value={formData.community}
                        onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                        className="w-full text-xs sm:text-sm h-10 px-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      >
                        <option value="OC">OC</option>
                        <option value="BC">BC</option>
                        <option value="BCM">BCM</option>
                        <option value="MBC/DNC">MBC / DNC</option>
                        <option value="SC">SC</option>
                        <option value="SCA">SCA</option>
                        <option value="ST">ST</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Residential Address / Village
                    </label>
                    <textarea 
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Village, Taluk, District"
                      className="w-full text-xs sm:text-sm p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Academic & Branch Selection */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">
                    2. Academic Background & Course Choice
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        10th School Attended
                      </label>
                      <input 
                        type="text"
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        placeholder="School name & place"
                        className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        10th Percentage / Marks *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.percentage}
                        onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                        placeholder="e.g. 78.5% or 390/500"
                        className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Course Interested In *
                    </label>
                    <select 
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full text-xs sm:text-sm h-11 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white font-semibold text-[#0756a6]"
                    >
                      <option value="Mechanical Engineering">Diploma in Mechanical Engineering (ME)</option>
                      <option value="Civil Engineering">Diploma in Civil Engineering (CE)</option>
                      <option value="Electrical & Electronics Engineering">Diploma in Electrical & Electronics (EEE)</option>
                      <option value="Electronics & Communication Engineering">Diploma in Electronics & Communication (ECE)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full bg-[#39A935] hover:bg-[#2f8f2c] text-white font-headline text-sm py-3.5 rounded-lg font-bold shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Enquiry</span>
                  </button>
                  <p className="text-[11px] text-center text-gray-400 mt-2">
                    🔒 Your details are securely saved in the AKY College Admissions system.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Right: Requirements & Checklist */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eligibility Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">
                Confirmed Eligibility Rules
              </span>
              <h4 className="text-lg font-headline font-bold text-gray-900">
                Minimum Academic Qualifications
              </h4>

              <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100">
                  <strong className="text-[#0756a6] block font-bold mb-0.5">1st Year Diploma (3 Years)</strong>
                  <span>Passed 10th Standard (SSLC) examination conducted by the Board of Secondary Education, Tamil Nadu or equivalent with Science & Maths.</span>
                </div>

                <div className="p-3 bg-green-50/60 rounded-lg border border-green-100">
                  <strong className="text-[#39A935] block font-bold mb-0.5">Lateral Entry to 2nd Year (2 Years)</strong>
                  <span>Passed +2 / Higher Secondary (Academic or Vocational stream) with Maths, Physics, Chemistry OR completed 2-Year ITI course.</span>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e8a317]">
                Checklist
              </span>
              <h4 className="text-lg font-headline font-bold text-gray-900">
                Required Documents for Admission
              </h4>

              <ul className="space-y-2 text-xs text-gray-600">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0756a6] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Admissions Desk Phone */}
            <div className="bg-[#001b3d] text-white p-5 rounded-xl text-center space-y-2">
              <Phone className="w-6 h-6 text-[#8bfc7c] mx-auto" />
              <h5 className="font-headline font-bold text-sm">Need Instant Admission Assistance?</h5>
              <p className="text-xs text-blue-200">Call our admissions cell directly:</p>
              <div className="text-sm font-bold text-white space-x-2">
                <a href={`tel:${collegeInfo.phones[0]}`} className="hover:underline">{collegeInfo.phones[0]}</a>
                <span>|</span>
                <a href={`tel:${collegeInfo.phones[1]}`} className="hover:underline">{collegeInfo.phones[1]}</a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
