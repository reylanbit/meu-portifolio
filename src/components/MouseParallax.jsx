import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseParallax({ children, speed = 0.02, className, style }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * speed;
      const y = (e.clientY - window.innerHeight / 2) * speed;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [speed]);

  const springX = useSpring(mouse.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouse.y, { stiffness: 50, damping: 20 });

  const { y: parentY, x: parentX, ...restStyle } = style || {};

  return (
    <motion.div
      className={className}
      style={{
        ...restStyle,
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}
