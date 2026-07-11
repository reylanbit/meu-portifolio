import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RippleContainer({ children, className, style, ...props }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 800);
  }, []);

  return (
    <div
      className={className}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      onClick={createRipple}
      {...props}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: ripple.x - 150,
              top: ripple.y - 150,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,255,136,0.3), transparent)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export function RippleButton({ children, className, style, ...props }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  }, []);

  return (
    <button
      className={className}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      onClick={createRipple}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: 'absolute',
            left: ripple.x - 75,
            top: ripple.y - 75,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.35), transparent)',
            pointerEvents: 'none',
            animation: 'rippleExpand 0.7s ease-out forwards',
            zIndex: 1,
          }}
        />
      ))}
      <style>{`
        @keyframes rippleExpand {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
    </button>
  );
}
