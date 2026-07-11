import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

function MetricCounter({ value, label, delay }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericValue = parseInt(value);

  useEffect(() => {
    let frameId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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
  }, [hasAnimated, numericValue]);

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

function EstagioCard({ estagio, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.4], [index % 2 === 0 ? -80 : 80, 0]);
  const blurVal = useTransform(scrollYProgress, [0, 0.4], [8, 0]);
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      style={{ opacity, x, display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end', position: 'relative', marginBottom: 40 }}
      role="listitem"
    >
      <motion.div
        style={{
          filter: blurVal,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 20,
          alignItems: 'start',
        }}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              border: `2px solid ${estagio.corretivo}`,
              boxShadow: `0 0 30px ${estagio.corretivo}22`,
              flexShrink: 0,
              position: 'relative',
            }}
          >
            <img
              src={estagio.imagem}
              alt={estagio.imagemAlt}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
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

            <div style={{
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
            }}>
              {estagio.imagemAlt}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function EvolucaoSection() {
  const containerRef = useRef(null);
  const { estagios, conteudo, metricas } = portfolioData;

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
            left: 60,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, rgba(0,255,136,0.2), rgba(0,255,136,0.2), transparent)',
          }}
        />

        {estagios.map((estagio, index) => (
          <EstagioCard key={estagio.ordem} estagio={estagio} index={index} />
        ))}
      </div>
    </section>
  );
}
