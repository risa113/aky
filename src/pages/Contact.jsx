import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';
import { collegeInfo } from '../data/mockData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    setSent(true);
  };

  return (
    <div className="space-y-0">
      <PageHero
        title="Contact AKY Polytechnic College"
        subtitle="Have questions about diploma admissions, bus routes, or laboratory training? Our campus counselors and administrative staff are ready to assist you."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0756a6] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-base font-headline font-bold text-gray-900">Campus Address</h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {collegeInfo.address}
            </p>
            <p className="text-xs text-[#0756a6] font-semibold pt-1">
              Opposite Vallavankottai Bus Stand
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-[#39A935] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="text-base font-headline font-bold text-gray-900">Admissions & Office</h4>
            <div className="text-xs sm:text-sm space-y-1">
              <a href={`tel:${collegeInfo.phones[0]}`} className="block text-gray-700 hover:text-[#0756a6] font-semibold">
                {collegeInfo.phones[0]} (Admissions)
              </a>
              <a href={`tel:${collegeInfo.phones[1]}`} className="block text-gray-700 hover:text-[#0756a6] font-semibold">
                {collegeInfo.phones[1]} (Office Desk)
              </a>
            </div>
            <p className="text-xs text-gray-400">Available Mon - Sat, 9:00 AM - 5:30 PM</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#e8a317] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-base font-headline font-bold text-gray-900">Official Email</h4>
            <a href={`mailto:${collegeInfo.email}`} className="block text-xs sm:text-sm text-gray-700 hover:text-[#0756a6] font-semibold">
              {collegeInfo.email}
            </a>
            <p className="text-xs text-gray-500">
              Direct verification & academic query response within 24 working hours.
            </p>
          </div>

        </div>

        {/* Map & Feedback Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Map */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">
                Campus Location Map
              </span>
              <span className="text-xs text-gray-500">Tirunelveli – Tenkasi Highway</span>
            </div>
            <div className="h-96 w-full bg-gray-100 relative">
              <iframe
                title="AKY Polytechnic College Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.576882772591!2d77.6253457!3d8.7511394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0416972236e7a5%3A0x77c2bfbc239d1b0!2sVallavankottai%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50 text-xs text-gray-600 flex items-center justify-between">
              <span>Opp. Vallavankottai Bus Stand, AKY Nagar</span>
              <a 
                href="https://maps.google.com/?q=AKY+Polytechnic+College+Tirunelveli"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0756a6] hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="border-b border-gray-100 pb-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0756a6]">
                Send Us a Message
              </span>
              <h3 className="text-xl font-headline font-bold text-gray-900 mt-0.5">
                We're Here to Help
              </h3>
            </div>

            {sent ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="font-headline font-bold text-green-900">Message Received!</h4>
                <p className="text-xs text-green-700">
                  Thank you, {formState.name}. We have received your query and will reply via phone or email promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setFormState({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="text-xs font-bold text-[#0756a6] hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input 
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 Mobile"
                      className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full text-xs sm:text-sm h-10 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                    <select 
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full text-xs sm:text-sm h-10 px-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white font-medium"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions 2026-27">Admissions 2026-27</option>
                      <option value="Bus Transport Routes">Bus Transport Routes</option>
                      <option value="Hostel Accommodation">Hostel Accommodation</option>
                      <option value="Placements & Recruitment">Placements & Recruitment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your query or message here..."
                    className="w-full text-xs sm:text-sm p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0756a6] hover:bg-[#003f7e] text-white font-headline text-sm py-3 rounded-lg font-bold shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500">Need instant reply?</span>
              <a 
                href={`https://wa.me/918489010999?text=${encodeURIComponent("Hello AKY Polytechnic College, I am reaching out from your website contact page.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#25D366] flex items-center gap-1 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
