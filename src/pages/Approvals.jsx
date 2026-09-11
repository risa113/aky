import React from 'react';
import PageHero from '../components/PageHero';
import { 
  Award, 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  FileText, 
  CheckCircle,
  Download,
  Phone
} from 'lucide-react';
import { collegeInfo } from '../data/mockData';

export default function Approvals() {
  const complianceItems = [
    {
      title: "AICTE Approval & EOA Letters",
      body: "AKY Polytechnic College operates under the statutory approval granted by the All India Council for Technical Education (AICTE), New Delhi, an apex body of the Government of India for technical education standards.",
      authority: "AICTE, New Delhi",
      badge: "Approved"
    },
    {
      title: "DOTE Affiliation Order",
      body: "The college is permanently affiliated to the Directorate of Technical Education (DOTE), Higher Education Department, Government of Tamil Nadu, Chennai, under Institutional Institution Code 592.",
      authority: "DOTE, Chennai",
      badge: "Affiliated"
    },
    {
      title: "Anti-Ragging Compliance Cell",
      body: "In compliance with Supreme Court orders and AICTE guidelines, AKY maintains a zero-tolerance policy towards ragging with a high-level committee monitoring campus and hostel premises.",
      authority: "Statutory Committee",
      badge: "Enforced"
    },
    {
      title: "Grievance Redressal & Women Safety Cell",
      body: "Constitutional committee established for addressing student academic grievances, internal inquiries, and ensuring equal opportunity and safety across the campus community.",
      authority: "Internal Redressal",
      badge: "Active"
    }
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="Approvals, Affiliations & Mandatory Disclosures"
        subtitle="Full statutory compliance under AICTE, New Delhi and the Directorate of Technical Education (DOTE), Government of Tamil Nadu."
        breadcrumbs={[{ label: "Approvals" }]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-amber-50 text-[#e8a317] flex items-center justify-center shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e8a317]">
                Apex Regulatory Body
              </span>
              <h3 className="text-xl font-headline font-bold text-gray-900">
                AICTE Approval
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Approved by All India Council for Technical Education, New Delhi. Validated annual intake capacity of 60 students per core diploma program.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0756a6] flex items-center justify-center shrink-0">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">
                Curricular Affiliation
              </span>
              <h3 className="text-xl font-headline font-bold text-gray-900">
                DOTE Affiliation • Code 592
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Affiliated to Directorate of Technical Education, Government of Tamil Nadu. Examinations, evaluations, and diploma certificates awarded directly by DOTE.
              </p>
            </div>
          </div>

        </div>

        {/* Institutional Regulatory Details */}
        <div className="space-y-6">
          <h3 className="text-xl font-headline font-bold text-gray-900">
            Statutory Committees & Compliance Disclosures
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceItems.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {item.authority}
                  </span>
                  <span className="bg-green-50 text-[#39A935] border border-green-200 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-base font-headline font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Anti-ragging helpline */}
        <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center max-w-xl mx-auto space-y-2">
          <ShieldCheck className="w-8 h-8 text-[#0756a6] mx-auto" />
          <h4 className="text-base font-headline font-bold text-gray-900">
            Anti-Ragging Helpline
          </h4>
          <p className="text-xs text-gray-600">
            Any grievances or ragging concerns may be escalated to the institutional committee or national toll-free helpline.
          </p>
          <p className="text-sm font-bold text-[#0756a6]">
            Campus Cell: +91 84890 10999 | National Toll Free: 1800-180-5522
          </p>
        </div>

      </section>
    </div>
  );
}
