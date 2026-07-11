import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

function MetricCounter({ value, label, delay }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  const numericValue = parseInt(value);

  useEffect(() => {
    let frameId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericValue));
            if (progress < 1) frameId = requestAnimationFrame(animate);
          };
          frameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frameId); };
  }, [numericValue]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="metric-value"
      >
        {count}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        className="metric-label"
      >
        {label}
      </motion.div>
    </div>
  );
}

function EstagioModal({ estagio, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes: ${estagio.especie}`}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, filter: 'blur(8px)' }}
        animate={{ scale: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ scale: 0.9, y: 30, filter: 'blur(8px)' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#111',
          border: `1px solid ${estagio.corretivo}33`,
          borderRadius: 'var(--radius)',
          maxWidth: 600,
          width: '100%',
          maxHeight: '85vh',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            color: '#888',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1rem',
            zIndex: 2,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.target.style.color = '#00ff88'; e.target.style.borderColor = '#00ff8844'; }}
          onMouseLeave={(e) => { e.target.style.color = '#888'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          ✕
        </button>

        <img
          src={estagio.imagem}
          alt={estagio.imagemAlt}
          style={{
            width: '100%',
            height: 260,
            objectFit: 'cover',
            display: 'block',
            borderRadius: 'var(--radius) var(--radius) 0 0',
          }}
        />

        <div style={{ padding: '28px 32px 32px' }}>
          <span style={{
            fontFamily: "'Fragment Mono', monospace",
            fontSize: '0.65rem',
            color: '#c9a84c',
            letterSpacing: '0.1em',
          }}>
            etapa {String(estagio.ordem).padStart(2, '0')} / 07 — {estagio.periodo}
          </span>

          <h3 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '1.5rem',
            color: estagio.corretivo,
            fontWeight: 800,
            marginTop: 8,
            marginBottom: 4,
            letterSpacing: '-0.02em',
          }}>
            {estagio.especie}
          </h3>

          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '1rem',
            color: '#f0f0f0',
            fontWeight: 600,
            marginBottom: 2,
          }}>
            {estagio.faseProfissional}
          </div>

          <div style={{
            fontFamily: "'Fragment Mono', monospace",
            fontSize: '0.75rem',
            color: '#888',
            marginBottom: 20,
          }}>
            {estagio.local}
          </div>

          <div style={{
            width: '100%',
            height: 1,
            background: `linear-gradient(90deg, ${estagio.corretivo}44, transparent)`,
            marginBottom: 20,
          }} />

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.9rem',
            color: '#ccc',
            lineHeight: 1.8,
          }}>
            {estagio.detalhes}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function EstagioCard({ estagio, index, onSelect }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const blurVal = useTransform(scrollYProgress, [0, 0.4], [8, 0]);

  const isEven = index % 2 === 0;
  const x = useTransform(scrollYProgress, [0, 0.4], [isEven ? -80 : 80, 0]);

  return (
    <motion.article
      ref={ref}
      style={{
        opacity,
        x,
        display: 'flex',
        justifyContent: isEven ? 'flex-start' : 'flex-end',
        position: 'relative',
        marginBottom: 48,
      }}
      role="listitem"
    >
      <motion.div
        style={{
          filter: blurVal,
          maxWidth: 520,
          width: '100%',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: isEven ? '130px 1fr' : '1fr 130px',
          gap: 20,
          alignItems: 'start',
        }}>
          {isEven && (
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={() => onSelect(estagio)}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelect(estagio); }}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes de ${estagio.especie}`}
              style={{
                width: 130,
                height: 130,
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: `2px solid ${estagio.corretivo}`,
                boxShadow: `0 0 30px ${estagio.corretivo}22`,
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 40px ${estagio.corretivo}44`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 30px ${estagio.corretivo}22`}
            >
              <img
                src={estagio.imagem}
                alt={estagio.imagemAlt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          )}

          <div style={{ textAlign: isEven ? 'left' : 'right' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 6,
              justifyContent: isEven ? 'flex-start' : 'flex-end',
            }}>
              <span style={{
                fontFamily: "'Fragment Mono', monospace",
                fontSize: '0.65rem',
                color: '#c9a84c',
                letterSpacing: '0.1em',
              }}>
                {String(estagio.ordem).padStart(2, '0')} / 07
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '1.1rem',
              color: estagio.corretivo,
              fontWeight: 700,
              marginBottom: 4,
              letterSpacing: '-0.02em',
            }}>
              {estagio.especie}
            </h3>

            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.9rem',
              color: '#f0f0f0',
              fontWeight: 500,
              marginBottom: 2,
            }}>
              {estagio.faseProfissional}
            </div>

            <div style={{
              fontFamily: "'Fragment Mono', monospace",
              fontSize: '0.72rem',
              color: '#888',
            }}>
              {estagio.local}
            </div>

            <motion.div
              whileHover={{ background: `linear-gradient(135deg, ${estagio.corretivo}12, transparent)` }}
              style={{
                marginTop: 12,
                padding: '10px 14px',
                background: `linear-gradient(135deg, ${estagio.corretivo}08, transparent)`,
                borderRadius: 'var(--radius-xs)',
                border: `1px solid ${estagio.corretivo}15`,
                fontFamily: "'Fragment Mono', monospace",
                fontSize: '0.68rem',
                color: '#888',
                lineHeight: 1.5,
                fontStyle: 'italic',
                textAlign: isEven ? 'left' : 'right',
                cursor: 'pointer',
              }}
              onClick={() => onSelect(estagio)}
            >
              clique para ver mais →
            </motion.div>
          </div>

          {!isEven && (
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              onClick={() => onSelect(estagio)}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelect(estagio); }}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes de ${estagio.especie}`}
              style={{
                width: 130,
                height: 130,
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: `2px solid ${estagio.corretivo}`,
                boxShadow: `0 0 30px ${estagio.corretivo}22`,
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
                order: -1,
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 40px ${estagio.corretivo}44`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 30px ${estagio.corretivo}22`}
            >
              <img
                src={estagio.imagem}
                alt={estagio.imagemAlt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function EvolucaoSection() {
  const containerRef = useRef(null);
  const { estagios, conteudo, metricas } = portfolioData;
  const [selectedEstagio, setSelectedEstagio] = useState(null);

  return (
    <section id="evolucao" className="section" ref={containerRef} aria-labelledby="evolucao-title">
      <div className="section-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // evolucao
        </motion.span>
        <motion.h2
          id="evolucao-title"
          className="section-title"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="accent">16 anos</span> de evolucao
        </motion.h2>
        <motion.div
          className="section-divider"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontWeight: 500,
          color: '#f0f0f0',
          textAlign: 'center',
          marginBottom: 16,
          lineHeight: 1.4,
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>"</span>
        {conteudo.evolucao.fraseImpacto}
        <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>"</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#888',
          textAlign: 'center',
          marginBottom: 64,
          maxWidth: 500,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {conteudo.evolucao.subFrase}
      </motion.p>

      {/* Metricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        marginBottom: 80,
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <MetricCounter value={metricas.anosExperiencia} label="anos" delay={0} />
        <MetricCounter value={metricas.projetosEntregues} label="projetos" delay={0.1} />
        <MetricCounter value={metricas.stackTecnologias} label="techs" delay={0.2} />
        <MetricCounter value={metricas.comunidadeImpactada} label="pessoas" delay={0.3} />
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }} role="list" aria-label="Linha do tempo da evolucao profissional">
        {/* Timeline line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, rgba(0,255,136,0.15), rgba(0,255,136,0.15), transparent)',
            transform: 'translateX(-50%)',
          }}
        />

        {estagios.map((estagio, index) => (
          <EstagioCard key={estagio.ordem} estagio={estagio} index={index} onSelect={setSelectedEstagio} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEstagio && (
          <EstagioModal estagio={selectedEstagio} onClose={() => setSelectedEstagio(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
