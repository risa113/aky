import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Home as HomeIcon } from 'lucide-react';
import logoImg from '../assets/aky-logo.png';
import { departments } from '../data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDepartmentsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { 
      label: 'Departments', 
      path: '/departments',
      hasDropdown: true,
      children: departments.map(d => ({
        label: d.title,
        path: `/departments/${d.id}`
      }))
    },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Placements', path: '/placements' },
    { label: 'News & Events', path: '/news-events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Approvals', path: '/approvals' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Title Area */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1 sm:flex-initial">
          <img 
            src={logoImg} 
            alt="AKY Polytechnic College Crest" 
            className="h-9 sm:h-12 md:h-14 w-auto object-contain shrink-0 transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCtpqCzaVipVcAZqYmz-eD9wO2TV11o6UFm2bCQ8kFkp53ka-xVPDJKdwWgLqY_VENH0lQRaG1g65ROoe0974OVW8r13mQHyuYJrg1Nzowfg3t4us6qivUodD8_EiQXiAqQNYmRhConhHRujtRInp_Hjfw3ZB1qUp74u0p56zYDkev29sYnp4UOdQA4tMhWBtlquOZH1Th4eihQmsoneXIGL4lKCEFCHLKvQs_mH9u2Fy8L7n7xTHpOdxnwUYAXiwXcU";
            }}
          />
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] sm:text-base md:text-xl font-headline font-bold text-[#003f7e] tracking-tight uppercase leading-tight truncate">
              AKY POLYTECHNIC COLLEGE
            </span>
            <span className="hidden sm:inline-block text-[10px] text-gray-500 font-medium tracking-wide truncate">
              (A Unit of AKY Charitable and Educational Trust) • AICTE Approved & DOTE Affiliated
            </span>
            <span className="sm:hidden text-[9px] text-gray-500 font-medium tracking-tight truncate">
              AICTE Approved • DOTE (Code: 592)
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-5 text-[14px] font-semibold">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.path} 
                  className="relative group py-2"
                  onMouseEnter={() => setDepartmentsDropdownOpen(true)}
                  onMouseLeave={() => setDepartmentsDropdownOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `flex items-center gap-1 transition-colors duration-200 py-1 ${
                        isActive || location.pathname.startsWith('/departments')
                          ? 'text-[#0756a6] font-bold border-b-2 border-[#0756a6]'
                          : 'text-gray-700 hover:text-[#0756a6]'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-gray-400" />
                  </NavLink>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-1.5 border-b border-gray-100 mb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Diploma Programs
                    </div>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                            isActive
                              ? 'bg-blue-50 text-[#0756a6] font-bold'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[#0756a6]'
                          }`
                        }
                      >
                        <span>{child.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                      </NavLink>
                    ))}
                    <div className="mt-1 pt-1 border-t border-gray-100 px-3">
                      <Link 
                        to="/departments" 
                        className="text-xs font-bold text-[#0756a6] hover:underline flex items-center gap-1 p-1"
                      >
                        View All 4 Departments <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#0756a6] font-bold border-b-2 border-[#0756a6]'
                      : 'text-gray-700 hover:text-[#0756a6]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center gap-1 bg-[#e8a317] hover:bg-[#d49411] text-[#001b3d] font-headline text-xs sm:text-sm px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg shadow-sm hover:shadow font-bold active:scale-95 transition-all whitespace-nowrap"
          >
            <span>APPLY NOW</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0756a6]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 px-4 py-4 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <nav className="flex flex-col space-y-1 font-semibold text-sm">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.path} className="border-b border-gray-100 pb-2 mb-1">
                    <div 
                      className="flex items-center justify-between py-2 text-gray-800 cursor-pointer"
                      onClick={() => setDepartmentsDropdownOpen(!departmentsDropdownOpen)}
                    >
                      <span className="font-bold">{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${departmentsDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {departmentsDropdownOpen && (
                      <div className="pl-3 py-1 space-y-1 bg-gray-50 rounded-lg">
                        {link.children.map((c) => (
                          <NavLink
                            key={c.path}
                            to={c.path}
                            className={({ isActive }) =>
                              `block py-2 px-3 text-xs rounded transition-colors ${
                                isActive ? 'bg-blue-100 text-[#0756a6] font-bold' : 'text-gray-700 hover:text-[#0756a6]'
                              }`
                            }
                          >
                            {c.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#0756a6] font-bold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#0756a6]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
            <span>Tirunelveli, Tamil Nadu</span>
            <span className="font-bold text-[#0756a6]">DOTE Code: 592</span>
          </div>

          <div className="mt-3">
            <Link
              to="/admin"
              className="block text-center py-2 text-xs font-semibold text-gray-400 hover:text-gray-600"
            >
              🔒 Institutional Admin Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
