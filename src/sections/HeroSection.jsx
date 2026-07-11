import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import MouseParallax from '../components/MouseParallax';
import { RippleButton } from '../components/Ripple';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.96]);
  const silhouetteY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const silhouetteOpacity = useTransform(scrollYProgress, [0, 0.5], [0.06, 0]);
  const silhouetteScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={ref}
      aria-label="Apresentacao"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 clamp(16px, 4vw, 48px)',
      }}
    >
      {/* Animated background grid */}
      <motion.div
        style={{ y: bgY, position: 'absolute', inset: 0 }}
        aria-hidden="true"
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,136,0.04) 0%, transparent 70%)',
        }} />
      </motion.div>

      {/* Floating silhouette with mouse parallax */}
      <MouseParallax
        speed={0.015}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          y: silhouetteY,
          opacity: silhouetteOpacity,
          scale: silhouetteScale,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 120 160" width="clamp(120px, 20vw, 280)" style={{ filter: 'blur(0.5px)' }} aria-hidden="true">
          <circle cx="60" cy="28" r="20" fill="#00ff88" />
          <path d="M60 48 L44 88 L38 140" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 48 L76 88 L72 140" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 48 L28 68 L18 62" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 48 L92 68 L102 62" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </MouseParallax>

      {/* Floating particles */}
      <div aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              position: 'absolute',
              width: 3 + i,
              height: 3 + i,
              borderRadius: '50%',
              background: i % 2 === 0 ? '#00ff88' : '#c9a84c',
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity, scale, textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 860 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Fragment Mono', monospace",
            fontSize: '0.75rem',
            color: '#c9a84c',
            marginBottom: 20,
            letterSpacing: '0.05em',
          }}
        >
          {'// '}
          {portfolioData.papel.split(' ').slice(0, 6).join(' ')}...
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 800,
            color: '#f0f0f0',
            lineHeight: 1.05,
            marginBottom: 28,
            letterSpacing: '-0.04em',
          }}
        >
          <span style={{ color: '#00ff88' }}>{'<'}</span>
          Darlann
          <span style={{ color: '#00ff88' }}>{' />'}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.05rem, 2.5vw, 1.5rem)',
            fontWeight: 500,
            color: '#aaa',
            marginBottom: 12,
            letterSpacing: '-0.01em',
          }}
        >
          Da rua para o codigo, a evolucao nao para.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Fragment Mono', monospace",
            fontSize: '0.8rem',
            color: '#555',
            marginBottom: 48,
          }}
        >
          De Australopithecus a Homo Sapiens — 16 anos evoluindo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <MagneticButton strength={0.3}>
            <RippleButton
              className="btn"
              onClick={() => document.getElementById('evolucao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              explorar evolucao
            </RippleButton>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <RippleButton
              className="btn btn--dourado"
              onClick={() => document.getElementById('profissional')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ver trabalho
            </RippleButton>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{
            width: 22,
            height: 36,
            border: '1.5px solid #333',
            borderRadius: 11,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{
              width: 3,
              height: 8,
              background: '#00ff88',
              borderRadius: 2,
              marginTop: 6,
            }}
          />
        </motion.div>
        <span style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.6rem',
          color: '#444',
          letterSpacing: '0.1em',
        }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
