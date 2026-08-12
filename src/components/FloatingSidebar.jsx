import React from 'react';

export default function FloatingSidebar() {
  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/yorazaki', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/yorazaki', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/yorazaki', label: 'Instagram' },
    { icon: 'fas fa-envelope', href: 'mailto:yorazakigusti@gmail.com', label: 'Email' },
  ];

  return (
    <div className="fixed right-3 bottom-4 md:right-6 md:bottom-6 flex flex-col gap-3 z-50 bg-neutral-900/90 p-2.5 rounded-2xl border border-neutral-800/80 backdrop-blur-md shadow-lg">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-neutral-500 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center"
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
}