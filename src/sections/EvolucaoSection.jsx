import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';

const SilhuetaSVG = ({ index, total }) => {
  const silhuetas = [
    // Australopithecus
    <svg key={0} viewBox="0 0 100 120" width="60" height="72">
      <circle cx="50" cy="25" r="14" fill="none" stroke="#00ff88" strokeWidth="2"/>
      <path d="M50 39 L35 70 L25 100 M50 39 L55 75 L50 100 M50 39 L70 65 L75 95" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
      <path d="M35 50 L20 60" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
      <rect x="14" y="55" width="14" height="20" rx="2" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.8"/>
    </svg>,
    // Homo habilis
    <svg key={1} viewBox="0 0 100 120" width="60" height="72">
      <circle cx="50" cy="22" r="15" fill="none" stroke="#00cc6a" strokeWidth="2"/>
      <path d="M50 37 L40 68 L32 98 M50 37 L56 72 L50 98 M50 37 L68 60 L72 92" fill="none" stroke="#00cc6a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 52 L25 55" fill="none" stroke="#00cc6a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M68 52 L80 48" fill="none" stroke="#00cc6a" strokeWidth="2" strokeLinecap="round"/>
      <rect x="72" y="40" width="18" height="12" rx="1" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.8"/>
    </svg>,
    // Homo erectus
    <svg key={2} viewBox="0 0 100 120" width="60" height="72">
      <circle cx="50" cy="20" r="16" fill="none" stroke="#00aa55" strokeWidth="2"/>
      <path d="M50 36 L42 66 L38 96 M50 36 L55 70 L52 96 M50 36 L65 58 L70 90" fill="none" stroke="#00aa55" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 50 L30 42" fill="none" stroke="#00aa55" strokeWidth="2" strokeLinecap="round"/>
      <path d="M65 50 L78 45" fill="none" stroke="#00aa55" strokeWidth="2" strokeLinecap="round"/>
      <line x1="78" y1="45" x2="78" y2="90" stroke="#c9a84c" strokeWidth="2" opacity="0.8"/>
    </svg>,
    // Neanderthal
    <svg key={3} viewBox="0 0 100 120" width="60" height="72">
      <circle cx="50" cy="18" r="17" fill="none" stroke="#008844" strokeWidth="2"/>
      <path d="M50 35 L43 64 L40 94 M50 35 L54 68 L50 94 M50 35 L62 56 L68 88" fill="none" stroke="#008844" strokeWidth="2" strokeLinecap="round"/>
      <path d="M43 48 L28 44" fill="none" stroke="#008844" strokeWidth="2" strokeLinecap="round"/>
      <path d="M62 48 L76 40" fill="none" stroke="#008844" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="50" cy="100" rx="20" ry="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.6"/>
    </svg>,
    // Homo sapiens
    <svg key={4} viewBox="0 0 100 120" width="60" height="72">
      <circle cx="50" cy="18" r="16" fill="none" stroke="#00ff88" strokeWidth="2.5"/>
      <path d="M50 34 L44 62 L42 92 M50 34 L53 66 L50 92 M50 34 L60 54 L66 86" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 46 L32 52 L28 48" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 46 L72 50 L80 44" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
      <rect x="22" y="38" width="22" height="14" rx="2" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
      <circle cx="50" cy="18" r="22" fill="none" stroke="#00ff88" strokeWidth="0.5" opacity="0.3"/>
    </svg>,
  ];
  return silhuetas[index] || null;
};

function EstagioCard({ estagio, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? -60 : 60, 0]);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end', position: 'relative', marginBottom: 60 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: isLeft ? 'flex-start' : 'flex-end', maxWidth: 420, width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexDirection: isLeft ? 'row' : 'row-reverse',
          marginBottom: 8,
        }}>
          <div style={{
            width: 80,
            height: 80,
            border: `2px solid ${estagio.corretivo}`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(10,10,10,0.9)',
            flexShrink: 0,
          }}>
            <SilhuetaSVG index={index} total={5} />
          </div>
          <div style={{ textAlign: isLeft ? 'left' : 'right' }}>
            <div style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.7rem',
              color: '#c9a84c',
              marginBottom: 2,
            }}>
              etapa {String(estagio.ordem).padStart(2, '0')} / 05
            </div>
            <h3 style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: '1.1rem',
              color: estagio.corretivo,
              fontWeight: 600,
            }}>
              {estagio.especie}
            </h3>
          </div>
        </div>

        <div className="card" style={{ width: '100%' }}>
          <div style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.8rem',
            color: '#f0f0f0',
            fontWeight: 600,
            marginBottom: 4,
          }}>
            {estagio.faseProfissional}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#888' }}>
            {estagio.local}
          </div>
          <div style={{
            marginTop: 12,
            padding: '8px 12px',
            background: 'rgba(0,255,136,0.05)',
            borderRadius: 8,
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.7rem',
            color: '#888',
            lineHeight: 1.4,
            fontStyle: 'italic',
          }}>
            {estagio.imagemAlt}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EvolucaoSection() {
  const containerRef = useRef(null);
  const { estagios, conteudo } = portfolioData;

  return (
    <section id="evolucao" className="section" ref={containerRef}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Evolucao
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: '#f0f0f0',
          textAlign: 'center',
          marginBottom: 80,
          lineHeight: 1.4,
        }}
      >
        <span style={{ color: '#c9a84c' }}>"</span>
        {conteudo.evolucao.fraseImpacto}
        <span style={{ color: '#c9a84c' }}>"</span>
      </motion.p>

      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(to bottom, transparent, #00ff88, #00ff88, transparent)',
          transform: 'translateX(-50%)',
          opacity: 0.3,
        }} />

        {estagios.map((estagio, index) => (
          <EstagioCard key={estagio.ordem} estagio={estagio} index={index} />
        ))}
      </div>
    </section>
  );
}
