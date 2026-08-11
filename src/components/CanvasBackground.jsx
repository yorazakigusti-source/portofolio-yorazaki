import React, { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrameId;
    let particles = [];

    const initCanvas = () => {
      const W = window.innerWidth;
      const H = document.documentElement.scrollHeight;
      canvas.width  = W;
      canvas.height = H;

      particles = Array.from({ length: 80 }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 1.5 + 0.5,
        dx:    (Math.random() - 0.5) * 0.4,
        dy:    (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.15,
        color: Math.random() > 0.5 ? '34,211,238' : '52,211,153',
      }));
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const spacing = 40;
      ctx.fillStyle = 'rgba(34,211,238,0.18)';
      for (let x = spacing; x < W; x += spacing) {
        for (let y = spacing; y < H; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const lines = [
        { x1: 0, y1: H*0.08,  x2: W*0.45, y2: 0,       c:'34,211,238', a:0.25 },
        { x1: W, y1: H*0.04,  x2: W*0.5,  y2: H*0.22,  c:'34,211,238', a:0.2  },
        { x1: 0, y1: H*0.28,  x2: W*0.4,  y2: H*0.18,  c:'52,211,153', a:0.2  },
        { x1: W, y1: H*0.33,  x2: W*0.58, y2: H*0.48,  c:'34,211,238', a:0.2  },
        { x1: 0, y1: H*0.52,  x2: W*0.4,  y2: H*0.42,  c:'52,211,153', a:0.18 },
        { x1: W, y1: H*0.58,  x2: W*0.6,  y2: H*0.72,  c:'34,211,238', a:0.18 },
        { x1: 0, y1: H*0.75,  x2: W*0.35, y2: H*0.65,  c:'52,211,153', a:0.15 },
        { x1: W, y1: H*0.82,  x2: W*0.65, y2: H*0.92,  c:'34,211,238', a:0.15 },
      ];
      lines.forEach(({ x1, y1, x2, y2, c, a }) => {
        const g = ctx.createLinearGradient(x1, y1, x2, y2);
        g.addColorStop(0, `rgba(${c},${a})`);
        g.addColorStop(1, `rgba(${c},0)`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      const drawOrnament = (cx, cy, size, rot, a) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.strokeStyle = `rgba(34,211,238,${a})`;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(-size/2, -size/2, size, size);
        ctx.beginPath();
        ctx.moveTo(0, -size*0.38); ctx.lineTo(size*0.38, 0);
        ctx.lineTo(0,  size*0.38); ctx.lineTo(-size*0.38, 0);
        ctx.closePath(); ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI*2);
        ctx.fillStyle = `rgba(52,211,153,${a*2})`;
        ctx.fill();
        ctx.restore();
      };
      drawOrnament(W*0.07,  H*0.10, 70, Math.PI/4, 0.22);
      drawOrnament(W*0.93,  H*0.20, 55, Math.PI/6, 0.18);
      drawOrnament(W*0.05,  H*0.46, 50, Math.PI/3, 0.18);
      drawOrnament(W*0.95,  H*0.54, 60, Math.PI/5, 0.18);
      drawOrnament(W*0.08,  H*0.76, 55, Math.PI/4, 0.15);
      drawOrnament(W*0.92,  H*0.87, 50, Math.PI/3, 0.15);

      const hr = 30;
      const hh = Math.sqrt(3) * hr;
      const startY = H * 0.48;
      for (let row = 0; row * hh < H - startY + hh; row++) {
        for (let col = 0; col * hr * 1.5 < W + hr*2; col++) {
          if ((row + col) % 3 !== 0) continue;
          const hx = col * hr * 3;
          const hy = startY + row * hh + (col % 2 === 0 ? 0 : hh/2);
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const ang = (Math.PI/3)*i - Math.PI/6;
            const px = hx + hr * Math.cos(ang);
            const py = hy + hr * Math.sin(ang);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.strokeStyle = 'rgba(34,211,238,0.09)';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();

        for (let j = i+1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(34,211,238,${(1 - dist/130) * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', initCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}