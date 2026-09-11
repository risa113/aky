import React from 'react';
import PageHero from '../components/PageHero';
import { 
  Library, 
  FlaskConical, 
  Trophy, 
  Bus, 
  Utensils, 
  Wifi, 
  Theater, 
  Hotel, 
  Briefcase, 
  Handshake, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { facilities } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function Facilities() {
  const iconMap = {
    menu_book: Library,
    science: FlaskConical,
    sports_cricket: Trophy,
    directions_bus: Bus,
    restaurant: Utensils,
    wifi: Wifi,
    theater_comedy: Theater,
    hotel: Hotel,
    model_training: Briefcase,
    handshake: Handshake
  };

  return (
    <div className="space-y-0">
      <PageHero
        title="Campus Infrastructure & Facilities"
        subtitle="Designed to provide a secure, comfortable, and technically stimulating environment for all diploma students."
        breadcrumbs={[{ label: "Facilities" }]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0756a6]">
            Campus Amenities
          </span>
          <h2 className="text-2xl sm:text-4xl font-headline font-bold text-gray-900">
            Everything You Need for Academic & Personal Growth
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            From modern workshops to extensive bus routes across Tirunelveli and Tenkasi, AKY Polytechnic College prioritizes student well-being and practical readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac, idx) => {
            const IconComponent = iconMap[fac.icon] || FlaskConical;
            return (
              <div 
                key={fac.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0756a6] flex items-center justify-center shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#e8a317]">0{idx + 1}</span>
                    <h3 className="text-lg font-headline font-bold text-gray-900">
                      {fac.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-[#0756a6]">{fac.desc}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {fac.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bus Transportation Details Box */}
        <div className="mt-16 bg-gradient-to-r from-[#063B73] via-[#0756a6] to-[#001f3f] text-white p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8bfc7c]">
                Safe Student Commute
              </span>
              <h3 className="text-xl sm:text-3xl font-headline font-bold">
                College Bus Network Routes
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                AKY institutional buses operate covering key transit junctions across Tirunelveli, Tenkasi, Alangulam, Surandai, Pavoorchatram, Ambasamudram, and surrounding rural hamlets to ensure prompt, stress-free campus arrival and departure.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e8a317] hover:bg-[#d49411] text-[#001b3d] px-6 py-3 rounded-lg font-headline font-bold text-sm transition-all"
              >
                <span>Enquire Bus Routes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
