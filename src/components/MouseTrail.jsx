import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 20;
const PARTICLE_INTERVAL = 2;

export default function MouseTrail() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const frameRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      frameRef.current++;

      // Spawn new particles
      if (frameRef.current % PARTICLE_INTERVAL === 0) {
        particlesRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          size: 2 + Math.random() * 3,
          life: 1,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          color: Math.random() > 0.7 ? '#c9a84c' : '#00ff88',
        });

        if (particlesRef.current.length > TRAIL_LENGTH * 3) {
          particlesRef.current = particlesRef.current.slice(-TRAIL_LENGTH * 2);
        }
      }

      // Update and draw
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life -= 0.025;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.01;
        p.size *= 0.98;

        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        const alpha = p.life * 0.6;
        ctx.fillStyle = p.color === '#c9a84c'
          ? `rgba(201,168,76,${alpha})`
          : `rgba(0,255,136,${alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life * 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#c9a84c'
          ? `rgba(201,168,76,${alpha * 0.15})`
          : `rgba(0,255,136,${alpha * 0.15})`;
        ctx.fill();

        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99998,
      }}
    />
  );
}
