import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { galleryItems } from '../data/mockData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Campus', 'Laboratories', 'Industrial Visits', 'Events'];

  const filteredItems = galleryItems.filter((item) => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-0">
      <PageHero
        title="Photo Gallery & Campus Moments"
        subtitle="A visual walk through our academic blocks, engineering machine laboratories, student athletic achievements, and industrial visit expeditions."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0756a6] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#0756a6] px-2.5 py-0.5 rounded-full mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-headline font-bold leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredItems[lightboxIndex].imageUrl} 
              alt={filteredItems[lightboxIndex].title} 
              className="max-w-full max-h-[72vh] rounded-xl object-contain shadow-2xl"
            />
            <div className="text-center mt-3 text-white">
              <span className="text-xs uppercase tracking-wider text-[#e8a317] font-bold">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-base font-headline font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
