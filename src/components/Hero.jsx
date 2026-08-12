import React, { useState, useEffect } from 'react';
import heroImg from '../assets/aing.jpeg';

export default function Hero() {
  const roles = ["Frontend Developer", "Technology Enthusiast", "Data Science Student"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Fungsi interaksi tombol magnetic
  const handleMagneticMove = (e) => {
    const b = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - b.left - b.width / 2;
    const y = e.clientY - b.top - b.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.35}px,${y * 0.35}px) scale(1.02)`;
    e.currentTarget.style.transition = 'transform 0.1s ease-out';
  };

  const handleMagneticReset = (e) => {
    e.currentTarget.style.transform = 'translate(0,0) scale(1)';
    e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.25,1,0.5,1)';
  };

  // Efek pengetikan teks otomatis (Typing Effect)
  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) { setTypingSpeed(2000); setIsDeleting(true); }
        else setTypingSpeed(100);
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") { setIsDeleting(false); setCurrentRoleIndex(p => (p + 1) % roles.length); setTypingSpeed(500); }
        else setTypingSpeed(50);
      }
    };
    const t = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(t);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative">
      <div className="space-y-6" data-aos="fade-right">
        <p className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">AVAILABLE FOR FREELANCE</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Hi, I am{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]">
            Yorazaki Gusti.
          </span>
        </h1>
        <div className="h-8 flex items-center">
          <p className="text-cyan-400 font-mono text-lg md:text-xl tracking-wide font-medium typing-cursor">{currentText}</p>
        </div>
        <p className="text-neutral-400 font-light leading-relaxed tracking-wide text-sm md:text-base max-w-md">
          Building intelligent, scalable digital solutions through structured frameworks, clean interface development, and data-driven computational models.
        </p>
        <div className="pt-4 flex items-center gap-4">
          <a 
            href="#projects" 
            onMouseMove={handleMagneticMove} 
            onMouseLeave={handleMagneticReset}
            className="px-6 py-3.5 bg-cyan-500 border border-cyan-400 text-slate-950 font-bold text-xs tracking-wider rounded-lg hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] uppercase transition-all"
          >
            View My Work ↓
          </a>
          <a href="#contact" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticReset}
             className="px-6 py-3.5 border border-neutral-800 text-neutral-300 font-bold text-xs tracking-wider rounded-lg hover:bg-neutral-900 hover:text-white hover:border-neutral-700 uppercase">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center" data-aos="fade-left">
        <div className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-neutral-900 border border-neutral-800 p-4 shadow-2xl overflow-hidden group animate-floating">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-full h-full rounded-2xl bg-[#141416] border border-neutral-800/60 relative overflow-hidden">
            <img src={heroImg} alt="Yorazaki Gusti"
                 className="w-full h-full object-cover rounded-2xl object-center group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" />
          </div>
        </div>
      </div>
    </section>
  );
}