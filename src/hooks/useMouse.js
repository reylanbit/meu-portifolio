import { useState, useEffect, useCallback, useRef } from 'react';

export function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const prevRef = useRef({ x: 0, y: 0, time: Date.now() });

  useEffect(() => {
    const handleMove = (e) => {
      const now = Date.now();
      const dt = now - prevRef.current.time || 1;
      const vx = (e.clientX - prevRef.current.x) / dt;
      const vy = (e.clientY - prevRef.current.y) / dt;

      setPosition({ x: e.clientX, y: e.clientY });
      setVelocity({ x: vx, y: vy });

      prevRef.current = { x: e.clientX, y: e.clientY, time: now };
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return { position, velocity };
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
