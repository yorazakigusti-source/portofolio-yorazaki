import React from 'react';

export default function Experience() {
  const tags = [
    { name: 'Python', desc: 'Core language for ML pipeline' },
    { name: 'Machine Learning', desc: 'Predictive modeling & analytics' },
    { name: 'Artificial Intelligence', desc: 'Neural architectures & core theory' },
    { name: 'Prompt Engineering', desc: 'LLM workflow optimization' },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24 bg-[#0a0a0b]/70">
      <div className="max-w-4xl w-full mx-auto space-y-16">
        <div className="space-y-3 text-center md:text-left" data-aos="fade-up">
          <p className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">LEARNING JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Experience & Certifications</h2>
        </div>
        <div className="bg-[#131315] border border-neutral-900 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 transform" data-aos="fade-up">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full tracking-wider uppercase">Certification Program</span>
              <h3 className="text-xl font-bold text-white mt-3 group-hover:text-cyan-400 transition-colors">AI & Machine Learning Student</h3>
              <p className="text-neutral-400 text-sm font-medium mt-1">IDCamp 2025 | Dicoding Indonesia</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm font-bold text-neutral-300">Nov 2025 - Present</p>
              <p className="text-xs text-neutral-500 mt-1">Semarang, Indonesia</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-neutral-400 text-sm font-light leading-relaxed relative z-10 list-disc list-inside">
            <li>Bagian pelatihan intensif teknologi dengan fokus pada fondasi Artificial Intelligence dan Machine Learning models.</li>
            <li>Membangun pipeline komputasi menggunakan landasan pemrograman <span className="text-neutral-200 font-medium">Python Programming</span>.</li>
            <li>Menguasai konsep esensial <span className="text-neutral-200 font-medium">Prompt Engineering untuk Software Developer</span> demi optimasi alur rekayasa berbasis AI.</li>
            <li>Mengembangkan aplikasi sains data dasar menggunakan kerangka Scikit-Learn dan metrik evaluasi standar industri.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2 relative z-10">
            {tags.map(t => (
              <div key={t.name} className="relative group/tag">
                <span className="text-xs bg-[#1a1a1e] border border-neutral-800 text-neutral-400 px-3 py-1 rounded-md font-medium hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 cursor-help block">{t.name}</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs bg-neutral-900 border border-neutral-800 text-neutral-300 text-[11px] px-2.5 py-1.5 rounded-md opacity-0 pointer-events-none group-hover/tag:opacity-100 transition-opacity duration-300 shadow-xl z-50">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}