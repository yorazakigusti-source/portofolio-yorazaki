import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0d0d0e]/60 border-b border-neutral-900/40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <a 
          href="#home" 
          className="font-serif text-xl tracking-wider font-bold text-cyan-400 hover:opacity-80 transition-opacity"
        >
          YG.
        </a>

        {/* Navigation Menu (Tengah) */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 relative pb-1 uppercase ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-neutral-400 hover:text-cyan-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Download CV */}
        <div className="hidden md:block">
          <a
          href="/cv.pdf"
          download="CV_Yorazaki.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 border border-cyan-300 text-neutral-950 font-bold text-xs tracking-wider rounded-lg uppercase transition-all shadow-md shadow-cyan-500/20 inline-flex items-center gap-2 cursor-pointer"
        >
          DOWNLOAD CV
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d0e]/95 backdrop-blur-xl border-b border-neutral-900 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium tracking-wider uppercase transition-colors ${
                activeSection === link.id ? 'text-cyan-400 font-bold' : 'text-neutral-300 hover:text-cyan-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            download="CV_Yorazaki.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 font-bold text-xs tracking-wider rounded-lg border border-blue-400 hover:opacity-90 uppercase transition-all shadow-lg shadow-blue-500/40 inline-flex items-center justify-center gap-2 cursor-pointer"
            style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
          >
            DOWNLOAD CV ↓
          </a>
        </div>
      )}
    </header>    
  );
}