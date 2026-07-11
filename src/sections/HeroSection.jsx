import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const silhouetteY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const silhouetteOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 24px',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.5,
      }} />

      {/* Floating silhouette */}
      <motion.div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          y: silhouetteY,
          opacity: silhouetteOpacity,
        }}
      >
        <svg viewBox="0 0 120 160" width="200" height="260" style={{ opacity: 0.08 }}>
          <circle cx="60" cy="30" r="20" fill="#00ff88"/>
          <path d="M60 50 L45 90 L40 140" fill="none" stroke="#00ff88" strokeWidth="3" strokeLinecap="round"/>
          <path d="M60 50 L75 90 L70 140" fill="none" stroke="#00ff88" strokeWidth="3" strokeLinecap="round"/>
          <path d="M60 50 L30 70 L20 65" fill="none" stroke="#00ff88" strokeWidth="3" strokeLinecap="round"/>
          <path d="M60 50 L90 70 L100 65" fill="none" stroke="#00ff88" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>

      <motion.div
        style={{ y, opacity, scale, textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 800 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.8rem',
            color: '#c9a84c',
            marginBottom: 16,
          }}
        >
          {'// '}
          {portfolioData.papel.split(' ').slice(0, 8).join(' ')}...
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 700,
            color: '#f0f0f0',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          <span style={{ color: '#00ff88' }}>{'<'}</span>
          Darlann
          <span style={{ color: '#00ff88' }}>{' />'}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: '#888',
            marginBottom: 16,
          }}
        >
          Da rua para o codigo, a evolucao nao para.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            fontSize: '0.85rem',
            color: '#555',
            marginBottom: 40,
          }}
        >
          De Australopithecus a Homo Sapiens — 16 anos evoluindo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('evolucao')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ▼ explorar evolucao
          </motion.button>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('profissional')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ borderColor: '#c9a84c', color: '#c9a84c' }}
          >
            ver trabalho
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: 20,
            height: 32,
            border: '2px solid #333',
            borderRadius: 10,
            position: 'relative',
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: 4,
              height: 8,
              background: '#00ff88',
              borderRadius: 2,
              position: 'absolute',
              top: 4,
              left: 6,
            }}
          />
        </motion.div>
        <span style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.6rem',
          color: '#555',
        }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
