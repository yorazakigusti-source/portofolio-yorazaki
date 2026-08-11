import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#09090a]/90 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pr-12">
        <div className="text-center md:text-left space-y-2">
          <h4 className="text-sm font-bold tracking-wider text-white uppercase">YORAZAKI DEVLAB</h4>
          <p className="text-xs text-neutral-500">© 2026 Yorazaki Gusti. CRAFTED FOR EXCELLENCE.</p>
        </div>
        <div className="flex gap-6 text-xs text-neutral-400 font-semibold tracking-wider z-10">
          <a href="https://github.com/yorazakigusti-source" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GITHUB</a>
          <a href="https://www.linkedin.com/in/yora-zaki-06943b313" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LINKEDIN</a>
          <a href="https://www.instagram.com/yrazakii_" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">INSTAGRAM</a>
          <a href="mailto:yorazakigusti@gmail.com" className="hover:text-cyan-400 transition-colors">EMAIL</a>
        </div>
      </div>
      <div className="absolute right-12 bottom-0 w-[1px] h-full bg-neutral-800 hidden md:block"></div>
    </footer>
  );
}