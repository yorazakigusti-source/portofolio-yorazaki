import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSidebar from './components/FloatingSidebar';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-neutral-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden antialiased scroll-smooth relative">

      <style>{`
        @keyframes floatAnimation {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        .animate-floating { animation: floatAnimation 5s ease-in-out infinite; }
        .typing-cursor::after { content:'|'; animation: blink 0.8s infinite; }
        @keyframes blink { 50% { opacity:0; } }
        .force-sidebar { display:none; }
        @media (min-width:768px) { .force-sidebar { display:flex !important; } }
        @keyframes scanline {
          0%   { transform: translateY(-4px); }
          100% { transform: translateY(100vh); }
        }
        .scanline {
          position:fixed; top:0; left:0; width:100%; height:3px;
          background: linear-gradient(to right, transparent, rgba(34,211,238,0.07), transparent);
          animation: scanline 10s linear infinite;
          pointer-events:none; z-index:2;
        }
        @keyframes pulseRing {
          0%,100% { transform:scale(0.95); opacity:0.5; }
          50%      { transform:scale(1.05); opacity:0.15; }
        }
        .pulse-ring { animation: pulseRing 3.5s ease-in-out infinite; }
      `}</style>

      {/* Background Layer */}
      <CanvasBackground />
      <div className="scanline" />

      {/* Glow Auras + Floating Tech Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="pulse-ring absolute top-[18%] right-[18%] w-[220px] h-[220px] rounded-full border border-cyan-500/10" />
        <div className="pulse-ring absolute top-[58%] left-[12%] w-[160px] h-[160px] rounded-full border border-emerald-500/10" style={{animationDelay:'1.5s'}} />
        <div className="pulse-ring absolute top-[78%] right-[22%] w-[190px] h-[190px] rounded-full border border-cyan-500/8" style={{animationDelay:'3s'}} />

        <div className="absolute top-[25%] left-[5%] w-[1px] h-32 bg-gradient-to-b from-cyan-500/30 to-transparent" data-aos="fade-down" />
        <div className="absolute top-[70%] right-[8%] w-[1px] h-40 bg-gradient-to-b from-emerald-500/30 to-transparent" data-aos="fade-up" />

        <div className="absolute top-[18%] right-[15%] text-neutral-700 opacity-[0.06] text-[9rem] animate-floating" data-aos="fade-left"><i className="fab fa-python"></i></div>
        <div className="absolute top-[38%] left-[8%] text-neutral-700 opacity-[0.06] text-[10rem] animate-floating" style={{animationDelay:'1.5s'}} data-aos="fade-right"><i className="fab fa-java"></i></div>
        <div className="absolute top-[62%] right-[12%] text-neutral-700 opacity-[0.06] text-[11rem] animate-floating" style={{animationDelay:'0.7s'}} data-aos="fade-left"><i className="fab fa-react"></i></div>
        <div className="absolute top-[85%] left-[10%] text-neutral-700 opacity-[0.06] text-[9rem] animate-floating" style={{animationDelay:'2.2s'}} data-aos="fade-right"><i className="fab fa-js"></i></div>
      </div>

      {/* App Structure */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <FloatingSidebar />
    </div>
  );
}