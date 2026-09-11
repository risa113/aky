import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { 
  Building2, 
  Award, 
  Target, 
  Eye, 
  Users, 
  CheckCircle, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { collegeInfo } from '../data/mockData';

export default function About() {
  const values = [
    {
      title: "Practical Skill Excellence",
      desc: "Imparting hands-on workshop and lab instruction where students learn by doing on real machinery."
    },
    {
      title: "Rural Youth Upliftment",
      desc: "Delivering affordable, top-tier technical education to youth in and around Tirunelveli and Tenkasi districts."
    },
    {
      title: "Disciplined Career Focus",
      desc: "Fostering industry work ethics, punctuality, teamwork, and strong communicative self-confidence."
    },
    {
      title: "Continuous Innovation",
      desc: "Regular curriculum enrichment through CAD design software, CNC coding, and renewable energy practices."
    }
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="About AKY Polytechnic College"
        subtitle="Empowering rural students through skill-oriented technical education, modern engineering laboratories, and ethical leadership since 2015."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Narrative Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Our Foundation & Heritage
            </span>
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-gray-900 leading-tight">
              A Noble Educational Vision in Southern Tamil Nadu
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>AKY Polytechnic College</strong> was established in 2015 under the esteemed aegis of the <strong>AKY Charitable and Educational Trust</strong>. Conceived as a private self-financing polytechnic institution approved by AICTE, New Delhi and affiliated to the Directorate of Technical Education (DOTE), Chennai (College Code: 592), the college was founded to fulfill a pressing educational mission: bridging the divide between rural school education and rewarding technical careers.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Located on the bustling Tenkasi Main Road at AKY Nagar, opposite Vallavankottai Bus Stand, the institution features an expansive green campus equipped with multi-disciplinary laboratories, digital learning classrooms, CNC workshops, electrical testing benches, and expansive athletic grounds.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl text-center">
                <span className="block text-2xl sm:text-3xl font-headline font-bold text-[#0756a6]">2015</span>
                <span className="text-xs text-gray-600 font-semibold uppercase">Year Established</span>
              </div>
              <div className="p-4 bg-amber-50/70 border border-amber-100 rounded-xl text-center">
                <span className="block text-2xl sm:text-3xl font-headline font-bold text-[#e8a317]">592</span>
                <span className="text-xs text-gray-600 font-semibold uppercase">DOTE Code</span>
              </div>
              <div className="p-4 bg-green-50/70 border border-green-100 rounded-xl text-center col-span-2 sm:col-span-1">
                <span className="block text-2xl sm:text-3xl font-headline font-bold text-[#39A935]">100%</span>
                <span className="text-xs text-gray-600 font-semibold uppercase">Practical Focus</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="/images/about/college-facts1.jpg" 
                alt="AKY Polytechnic College Main Entrance Arch" 
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8bfc7c]">
                  Academic Sanctuary
                </span>
                <h3 className="text-lg font-headline font-bold">AKY Polytechnic Campus, Tirunelveli</h3>
                <p className="text-xs text-gray-300">Clean, disciplined, and technologically stimulating learning environment.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-gray-50 border-y border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900 mt-1">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm border border-gray-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0756a6] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900">
                Institutional Vision
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To emerge as a premier technical education destination in Tamil Nadu by empowering youth—particularly from rural and underprivileged backgrounds—with robust engineering knowledge, practical skills, and confidence to build successful industrial careers and contribute meaningfully to societal progress.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm border border-gray-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-[#39A935] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900">
                Institutional Mission
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39A935] shrink-0 mt-1" />
                  <span>Deliver curriculum-aligned, industry-vetted diploma instruction with heavy shop-floor and laboratory emphasis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39A935] shrink-0 mt-1" />
                  <span>Bridge academia and industry through live internships, field visits, and recruiter collaborations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39A935] shrink-0 mt-1" />
                  <span>Inculcate disciplined work ethics, communicative English, and societal sensitivity in every graduate.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#063B73] via-[#0756a6] to-[#001f3f] text-white p-8 sm:p-12 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e8a317]">
                A Message from the Founder
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold">
                {collegeInfo.founder.name}
              </h2>
              <p className="text-xs text-blue-200 uppercase font-semibold tracking-wider">
                {collegeInfo.founder.title}
              </p>

              <blockquote className="text-lg sm:text-xl font-headline italic text-blue-100 border-l-4 border-[#e8a317] pl-4 my-4">
                "{collegeInfo.founder.quote}"
              </blockquote>

              <p className="text-sm text-blue-100 leading-relaxed">
                "Our aim at AKY Polytechnic College is not merely to award a diploma certificate. We are dedicated to shaping the mindset of rural youngsters. When a student learns to troubleshoot a machine, survey a terrain, or program a microcontroller with confidence, their entire family and community rise with them."
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl backdrop-blur-md border border-white/15 text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8a317] shadow-xl mb-3 flex items-center justify-center">
                <img 
                  src={collegeInfo.founder.image} 
                  alt={collegeInfo.founder.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/about/founder.jpg";
                  }}
                />
              </div>
              <h3 className="font-headline font-bold text-lg">Skill • Knowledge • Innovation • Career</h3>
              <p className="text-xs text-blue-200 mt-1">Our four unwavering institutional pillars guiding every student's daily routine.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="py-16 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
            Our Culture
          </span>
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900 mt-1">
            Core Institutional Strengths
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={v.title} className="p-6 bg-gray-50 rounded-xl border border-gray-200/70 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#0756a6] text-white flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </div>
              <h4 className="text-base font-headline font-bold text-gray-900">{v.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 bg-[#e8a317] hover:bg-[#d49411] text-[#001b3d] px-8 py-3.5 rounded-lg font-headline font-bold shadow-md transition-all active:scale-95"
          >
            <span>Apply for 2026–27 Admission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
