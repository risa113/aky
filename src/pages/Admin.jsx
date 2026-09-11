import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { 
  Users, 
  FileText, 
  Calendar, 
  Image, 
  Download, 
  Trash2, 
  Plus, 
  Search, 
  Check, 
  RefreshCw,
  Eye
} from 'lucide-react';
import { initialEnquiries, initialNews } from '../data/mockData';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('enquiries');
  const [enquiries, setEnquiries] = useState([]);
  const [newsList, setNewsList] = useState(initialNews);
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // New notice form
  const [newNotice, setNewNotice] = useState({
    title: '',
    category: 'Admissions',
    summary: '',
    content: ''
  });

  // Load enquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('aky_enquiries');
    if (saved) {
      try {
        setEnquiries(JSON.parse(saved));
      } catch (e) {
        setEnquiries(initialEnquiries);
      }
    } else {
      setEnquiries(initialEnquiries);
      localStorage.setItem('aky_enquiries', JSON.stringify(initialEnquiries));
    }
  }, []);

  const updateStatus = (id, newStatus) => {
    const updated = enquiries.map((enq) => 
      enq.id === id ? { ...enq, status: newStatus } : enq
    );
    setEnquiries(updated);
    localStorage.setItem('aky_enquiries', JSON.stringify(updated));
  };

  const deleteEnquiry = (id) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      const updated = enquiries.filter(enq => enq.id !== id);
      setEnquiries(updated);
      localStorage.setItem('aky_enquiries', JSON.stringify(updated));
    }
  };

  const exportCSV = () => {
    const headers = ["ID", "Student Name", "Phone", "Email", "Course", "Qualification", "Date", "Status", "Notes"];
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${e.studentName}"`,
      `"${e.phone}"`,
      `"${e.email || ''}"`,
      `"${e.course}"`,
      `"${e.qualification}"`,
      `"${e.date}"`,
      `"${e.status}"`,
      `"${(e.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AKY_Admissions_Enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.summary) {
      alert('Please enter title and summary.');
      return;
    }
    const item = {
      id: Date.now(),
      title: newNotice.title,
      category: newNotice.category,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      color: 'bg-blue-100 text-blue-800',
      summary: newNotice.summary,
      content: newNotice.content || newNotice.summary
    };
    setNewsList([item, ...newsList]);
    setNewNotice({ title: '', category: 'Admissions', summary: '', content: '' });
    alert('Notice published successfully!');
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesStatus = statusFilter === 'All' || e.status === statusFilter;
    const matchesSearch = e.studentName.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          e.phone.includes(searchFilter) ||
                          e.course.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Staff Portal"
        title="Institutional Administration Dashboard"
        subtitle="Manage 2026–27 Admission Enquiries, News Circulars, and Student Application Status in real time."
        breadcrumbs={[{ label: "Admin Dashboard" }]}
      />

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-gray-500">Total Enquiries</span>
            <p className="text-2xl sm:text-3xl font-headline font-bold text-[#0756a6] mt-1">
              {enquiries.length}
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-gray-500">New Enquiries</span>
            <p className="text-2xl sm:text-3xl font-headline font-bold text-amber-600 mt-1">
              {enquiries.filter(e => e.status === 'New').length}
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-gray-500">Converted Seats</span>
            <p className="text-2xl sm:text-3xl font-headline font-bold text-[#39A935] mt-1">
              {enquiries.filter(e => e.status === 'Converted').length}
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-gray-500">Published News</span>
            <p className="text-2xl sm:text-3xl font-headline font-bold text-purple-600 mt-1">
              {newsList.length}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 gap-4 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('enquiries')}
            className={`pb-3 text-sm font-headline font-bold transition-colors flex items-center gap-2 ${
              activeTab === 'enquiries'
                ? 'border-b-2 border-[#0756a6] text-[#0756a6]'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Admission Enquiries ({enquiries.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('news')}
            className={`pb-3 text-sm font-headline font-bold transition-colors flex items-center gap-2 ${
              activeTab === 'news'
                ? 'border-b-2 border-[#0756a6] text-[#0756a6]'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Manage News ({newsList.length})</span>
          </button>
        </div>

        {/* TAB 1: ENQUIRIES */}
        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden space-y-4 p-5 sm:p-6">
            
            {/* Filter Bar & Export */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Search student or phone..."
                    className="w-full text-xs pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6]"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-xs py-2 px-2.5 bg-gray-50 border border-gray-200 rounded-lg font-medium text-gray-700"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Converted">Converted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={exportCSV}
                  className="inline-flex items-center gap-1.5 bg-[#39A935] hover:bg-[#2f8f2c] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export to CSV</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-700">
                <thead className="bg-gray-50 text-gray-500 font-bold uppercase text-[10px] tracking-wider border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-3">Ref ID</th>
                    <th className="py-3 px-3">Student Name</th>
                    <th className="py-3 px-3">Course Preference</th>
                    <th className="py-3 px-3">Phone</th>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-gray-400">
                        No admission enquiries found matching the filter.
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3 px-3 font-mono font-bold text-gray-500">{enq.id}</td>
                        <td className="py-3 px-3 font-semibold text-gray-900">
                          {enq.studentName}
                          <span className="block text-[11px] text-gray-400 font-normal">
                            Qual: {enq.qualification}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-medium text-[#0756a6]">{enq.course}</td>
                        <td className="py-3 px-3">
                          <a href={`tel:${enq.phone}`} className="hover:underline font-mono">
                            {enq.phone}
                          </a>
                        </td>
                        <td className="py-3 px-3 text-gray-500">{enq.date}</td>
                        <td className="py-3 px-3">
                          <select
                            value={enq.status}
                            onChange={(e) => updateStatus(enq.id, e.target.value)}
                            className={`text-xs py-1 px-2 rounded-md font-bold border ${
                              enq.status === 'New'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : enq.status === 'Converted'
                                ? 'bg-green-50 text-green-700 border-green-200'
                                : enq.status === 'Contacted'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : 'bg-gray-100 text-gray-700 border-gray-300'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Follow-up">Follow-up</option>
                            <option value="Converted">Converted</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            type="button"
                            onClick={() => deleteEnquiry(enq.id)}
                            className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                            title="Delete enquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* TAB 2: NEWS MANAGEMENT */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Add New Form */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-headline font-bold text-base text-gray-900 border-b border-gray-100 pb-2">
                Publish New Notice / Circular
              </h3>

              <form onSubmit={handleAddNotice} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={newNotice.title}
                    onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                    placeholder="e.g. Campus Placement Drive by TVS"
                    className="w-full text-xs h-9 px-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
                  <select
                    value={newNotice.category}
                    onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                    className="w-full text-xs h-9 px-2 bg-gray-50 border border-gray-200 rounded-lg"
                  >
                    <option value="Admissions">Admissions</option>
                    <option value="Student Activities">Student Activities</option>
                    <option value="Campus Events">Campus Events</option>
                    <option value="Technical Events">Technical Events</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Summary (Short Excerpt) *</label>
                  <textarea
                    rows={2}
                    required
                    value={newNotice.summary}
                    onChange={(e) => setNewNotice({ ...newNotice, summary: e.target.value })}
                    placeholder="Brief description for homepage and listing..."
                    className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Detailed Content</label>
                  <textarea
                    rows={4}
                    value={newNotice.content}
                    onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                    placeholder="Full circular text..."
                    className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0756a6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0756a6] hover:bg-[#003f7e] text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Publish Notice</span>
                </button>
              </form>
            </div>

            {/* Right: Existing Notices */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-headline font-bold text-base text-gray-900">
                Published Notices ({newsList.length})
              </h3>

              <div className="space-y-3">
                {newsList.map((item) => (
                  <div key={item.id} className="p-4 bg-white rounded-xl border border-gray-200 flex items-start justify-between gap-3 shadow-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0756a6]">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-gray-400">{item.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{item.summary}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setNewsList(newsList.filter(n => n.id !== item.id))}
                      className="text-gray-400 hover:text-red-600 p-1 shrink-0"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </section>
    </div>
  );
}
