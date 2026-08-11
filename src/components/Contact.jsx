import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [result, setResult] = useState('');

  // Fungsi magnetic bawaan
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

  // Fungsi Pengiriman Email via Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setResult('Sending message...');

    const formData = new FormData(e.target);

    // GANTI DENGAN ACCESS KEY DARI WEB3FORMS (https://web3forms.com/)
    formData.append('access_key', '63dd24bd-d8ff-40fe-bb47-5779489909d7');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult('Pesan berhasil terkirim!');
        e.target.reset();
      } else {
        setStatus('error');
        setResult(data.message || 'Gagal mengirim pesan.');
      }
    } catch (error) {
      setStatus('error');
      setResult('Terjadi kesalahan koneksi.');
    }
  };

  const contactInfo = [
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />, label:'LOCATION', value:'Blora, Jawa Tengah, Indonesia', href:null },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3m-6 0H5a2 2 0 00-2 2v3a2 2 0 002 2h3" />, label:'EMAIL', value:'yorazakigusti@gmail.com', href:'mailto:yorazakigusti@gmail.com' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />, label:'PHONE', value:'+62 896-0138-5599', href:'tel:+6289601385599' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 bg-[#0a0a0b]/70">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8" data-aos="fade-up">
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">LET'S CONNECT</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Get In Touch</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-200 leading-snug max-w-sm">Let's build something exceptional together.</h3>
          <div className="space-y-6 pt-4">
            {contactInfo.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icon}</svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">{label}</p>
                  {href
                    ? <a href={href} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors font-medium">{value}</a>
                    : <p className="text-sm text-neutral-300 font-medium">{value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#131315] border border-neutral-900 rounded-3xl p-8 md:p-10 shadow-2xl" data-aos="fade-left">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs uppercase text-neutral-400 font-semibold tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-[#1a1a1e] border border-neutral-800/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase text-neutral-400 font-semibold tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#1a1a1e] border border-neutral-800/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase text-neutral-400 font-semibold tracking-wider">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell me about your project..."
                className="w-full bg-[#1a1a1e] border border-neutral-800/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticReset}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xs tracking-widest rounded-xl hover:opacity-90 uppercase transition-all disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status !== 'idle' && (
              <p className={`text-xs text-center font-medium pt-1 ${status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}