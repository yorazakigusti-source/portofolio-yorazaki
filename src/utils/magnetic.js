export const handleMagneticMove = (e) => {
  const b = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - b.left - b.width / 2;
  const y = e.clientY - b.top - b.height / 2;
  e.currentTarget.style.transform = `translate(${x * 0.35}px,${y * 0.35}px) scale(1.02)`;
  e.currentTarget.style.transition = 'transform 0.1s ease-out';
};

export const handleMagneticReset = (e) => {
  e.currentTarget.style.transform = 'translate(0,0) scale(1)';
  e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.25,1,0.5,1)';
};