import React, { useState, useEffect } from 'react';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 500);
          }, 200);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0e] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo YG dengan Efek Glowing Pulse */}
      <div className="relative mb-8">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-cyan-400 tracking-wider animate-pulse">
          YG.
        </h1>
        <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl -z-10" />
      </div>

      {/* Progress Bar Cyan */}
      <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-cyan-400 transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Angka Persentase */}
      <span className="text-xs font-mono text-neutral-400 tracking-widest">
        {progress}%
      </span>
    </div>
  );
};

export default Preloader;