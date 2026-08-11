import React from 'react';

export default function FloatingSidebar() {
  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/yorazaki', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/yorazaki', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/yorazaki', label: 'Instagram' },
    { icon: 'fas fa-envelope', href: 'mailto:yorazakigusti@gmail.com', label: 'Email' },
  ];

  return (
    <div className="fixed right-8 bottom-0 z-40 hidden md:flex flex-col items-center gap-6 after:w-[1px] after:h-28 after:bg-gradient-to-b after:from-neutral-700 after:to-transparent">
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