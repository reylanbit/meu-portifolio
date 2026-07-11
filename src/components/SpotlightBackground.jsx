import { useEffect, useRef } from 'react';

export default function SpotlightBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -200, y: -200 });
  const targetRef = useRef({ x: -200, y: -200 });
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
      targetRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth follow
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.08;

      const { x, y } = mouseRef.current;

      // Main spotlight
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 350);
      gradient.addColorStop(0, 'rgba(0, 255, 136, 0.04)');
      gradient.addColorStop(0.5, 'rgba(0, 255, 136, 0.015)');
      gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Secondary warm glow
      const gradient2 = ctx.createRadialGradient(x, y, 0, x, y, 200);
      gradient2.addColorStop(0, 'rgba(201, 168, 76, 0.02)');
      gradient2.addColorStop(1, 'rgba(201, 168, 76, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

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
        zIndex: 0,
      }}
    />
  );
}
