import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Calendar, Tag, ArrowRight, Search, X, Bell } from 'lucide-react';
import { initialNews } from '../data/mockData';

export default function NewsEvents() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Admissions', 'Student Activities', 'Campus Events', 'Technical Events'];

  const filteredNews = initialNews.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      <PageHero
        title="News, Circulars & Campus Events"
        subtitle="Stay updated with our latest academic announcements, admissions deadlines, industrial visits, and student achievements."
        breadcrumbs={[{ label: "News & Events" }]}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls: Categories & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0756a6] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search announcements..."
              className="w-full text-xs pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6] focus:bg-white"
            />
          </div>
        </div>

        {/* News Cards Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
            <Bell className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <h4 className="text-base font-bold text-gray-700">No notices found</h4>
            <p className="text-xs text-gray-500 mt-1">Try changing the category filter or search keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <article 
                key={item.id}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-bold px-2.5 py-0.5 rounded-full ${item.color}`}>
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-headline font-bold text-gray-900 hover:text-[#0756a6] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(item)}
                    className="text-xs font-bold text-[#0756a6] hover:text-[#003f7e] flex items-center gap-1"
                  >
                    <span>Read Full Notice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-4">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs">
              <span className={`font-bold px-2.5 py-0.5 rounded-full ${activeArticle.color}`}>
                {activeArticle.category}
              </span>
              <span className="text-gray-500">{activeArticle.date}</span>
            </div>

            <h3 className="text-xl font-headline font-bold text-gray-900 leading-snug">
              {activeArticle.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-2 border-t border-gray-100">
              {activeArticle.content}
            </p>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="bg-[#0756a6] text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-[#003f7e]"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
