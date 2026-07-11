import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    const checkHover = (e) => {
      const el = e.target.closest('a, button, [role="button"], .card, .tilt-card, .magnetic');
      setHovering(!!el);
    };

    const animate = () => {
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${clicking ? 0.8 : hovering ? 1.4 : 1})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseover', checkHover, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseover', checkHover);
      cancelAnimationFrame(rafRef.current);
    };
  }, [clicking, hovering]);

  return (
    <>
      {/* Outer ring - follows with lag */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? '#00ff88' : 'rgba(0,255,136,0.4)'}`,
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot - follows exactly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: pos.y,
          left: pos.x,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#00ff88',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s',
          boxShadow: '0 0 10px rgba(0,255,136,0.5)',
        }}
      />

      <style>{`
        @media (pointer: coarse) {
          div[aria-hidden="true"] { display: none !important; }
        }
        * { cursor: none !important; }
        @media (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
