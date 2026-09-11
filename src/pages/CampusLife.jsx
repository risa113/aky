import React from 'react';
import PageHero from '../components/PageHero';
import { 
  Compass, 
  Trophy, 
  Calendar, 
  HeartHandshake, 
  Sparkles, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CampusLife() {
  const activities = [
    {
      title: "Practical Industrial Visits",
      category: "Industry Exposure",
      desc: "Regular field visits to manufacturing hubs, thermal power stations, electrical substations, and automated CNC production plants across Madurai, Coimbatore, and Chennai.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQfnKRKzKzSUzWWpY_EsBCvStyh8wxtm3yhWyAywrYentG405T-nfw4HzrSWyqIxqFfeQ3psmFrRwSG5601vJb46e7l8Jh5kY5wu7OxnKD5J5fdBIaRoWfumcty7Xb3goyP_FfC-sYKW-LmQihO6IfoVinOjU5PtI9uirvSOWTdq7w-yRWCKgV-VGgoIHrcqVxg2dyqnxupxGZZPG9mel-EB2Mfkdqc46i6YsKQfF9yTSkE3cvu7jAuQ"
    },
    {
      title: "Technical Symposiums & Workshops",
      category: "Innovation",
      desc: "Annual inter-polytechnic symposium 'TECHSPARK', circuit debugging hackathons, CAD drafting competitions, and hands-on robotics workshops.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdwY0xjB6c2jlDVSUUBoJeX27LrDFxqlU5Ipj5TzzG4Q5kj97lr6bF_r8_mN4LnjMWa8U1JQTQgdxSclq_06bhD707qJx6lBSX8M1C0fheZIc3hL6f16pbE0E32RkqzvHCwgys1AlPkQ5VVmVx7xWLVmKWg8xxAg0W8AkQ_CwN4JNtnGvXkEXHwPnMWSY83vFcBsXqyURtrkDmPgIx1acaYtS_PzqFx1IFw81mrGf9oQHMR5Y95HyAvg"
    },
    {
      title: "Sports Tournaments & Athletic Meets",
      category: "Physical Fitness",
      desc: "Inter-departmental cricket, volleyball, kabaddi, and track tournaments fostering camaraderie, endurance, and team leadership.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwS0rS9bSXAkAF9R_DhInMLokFeI0p7RuKwWvbR5oagghQGr0yFSEAm_FQLHyFzm0iWtf3KqUdcS77Nuok58t8tciSzyVlXN_G68533PoBVXgrUFqAi_8QD-e9J0M4O13MsUQvvcQAqGrL3lk9bESPY2m6cbRTxcqndFjMsmLRysB7XUnUTgUAwVXxsrXAVJh7Dg2_eooqvLol0DFoiPTcWGAGcfxwgTBgctGdCSSqOf3RyMS5pR2d5g"
    },
    {
      title: "Cultural Celebrations & Annual Day",
      category: "Tradition & Talent",
      desc: "Vibrant collegiate celebrations of traditional Tamil festivals like Pongal, patriotic Independence Day parades, and gala Annual Day celebrations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATnsv5LQfEmoGLPkm9FimGEJo1zoBt1ghLp4Iod33bfoYdAa8Iq5WL0GlHl5IbCyOT0XRAtJfyH9lwZ1ldFqkhWvODaAZQRIunXO76Fzm6eOYEZ8UpA52VyHRr1Kcs5MVaNftr9TnqzM8TXUHIPABmt9pPR-1qEFfJFBDdlpM3vtgdD2CfQfbiPZyQdvW5IkS0Cj_jzD-gpgpzHx5veDDseGMfotycbvSFOnXgfLcdi30gK1TbwjpRaA"
    }
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="Life @ AKY Polytechnic College"
        subtitle="Holistic development beyond classroom learning through technical events, sports championships, industrial immersion, and vibrant cultural traditions."
        breadcrumbs={[{ label: "Campus Life" }]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act) => (
            <div 
              key={act.title}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <span className="absolute bottom-4 left-4 bg-white text-[#0756a6] text-xs font-bold px-3 py-1 rounded-full">
                  {act.category}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-headline font-bold text-gray-900 group-hover:text-[#0756a6] transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Commitment & NSS Banner */}
        <div className="mt-16 p-8 bg-blue-50 border border-blue-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">
              Community Engagement
            </span>
            <h4 className="text-xl font-headline font-bold text-gray-900">
              National Service Scheme (NSS) & Social Outreach
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
              AKY students actively participate in village cleanliness drives, tree sapling plantations, blood donation camps, and digital awareness initiatives for rural school pupils.
            </p>
          </div>
          <Link
            to="/gallery"
            className="shrink-0 bg-[#0756a6] hover:bg-[#003f7e] text-white px-6 py-3 rounded-lg font-headline font-bold text-sm transition-colors"
          >
            Explore Photo Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
