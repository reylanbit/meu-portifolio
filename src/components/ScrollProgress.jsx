import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Top bar */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #00ff88, #c9a84c)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 10001,
        }}
      />

      {/* Side progress dots */}
      <nav
        aria-label="Progresso de leitura"
        style={{
          position: 'fixed',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          zIndex: 100,
        }}
      >
        {['evolucao', 'profissional', 'conhecimento', 'criativo', 'social'].map((id, i) => (
          <motion.a
            key={id}
            href={`#${id}`}
            whileHover={{ scale: 1.6, x: -4 }}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.background = '#00ff88'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.15)'}
            aria-label={`Ir para secao ${id}`}
          />
        ))}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          nav[aria-label="Progresso de leitura"] { display: none !important; }
        }
      `}</style>
    </>
  );
}
