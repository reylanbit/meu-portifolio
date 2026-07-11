import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

function AnimatedMetric({ value, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numericMatch = value.match(/(\d+)/);
          if (numericMatch) {
            const target = parseInt(numericMatch[1]);
            const duration = 1200;
            const startTime = performance.now();
            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(animate);
              else setCount(target);
            };
            requestAnimationFrame(animate);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '20px 16px' }}>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '2.2rem',
        fontWeight: 800,
        color: '#00ff88',
        letterSpacing: '-0.03em',
        lineHeight: 1,
      }}>
        {count}{value.replace(/\d+/, '')}
      </div>
      <div style={{
        fontFamily: "'Fragment Mono', monospace",
        fontSize: '0.7rem',
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginTop: 8,
      }}>
        {label}
      </div>
    </div>
  );
}

function CaseCard({ caso, index }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="card"
      style={{ cursor: 'pointer' }}
      onClick={() => setExpandido(!expandido)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpandido(!expandido); } }}
      role="button"
      tabIndex={0}
      aria-expanded={expandido}
      aria-label={`Caso: ${caso.nome}`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <h3 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '1.2rem',
            color: '#00ff88',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}>
            {caso.nome}
          </h3>
          {caso.metrica && (
            <div style={{
              fontFamily: "'Fragment Mono', monospace",
              fontSize: '0.7rem',
              color: '#c9a84c',
              marginTop: 4,
            }}>
              {caso.metrica.valor} {caso.metrica.label}
            </div>
          )}
        </div>
        <motion.span
          animate={{ rotate: expandido ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: '#c9a84c', fontSize: '1rem', flexShrink: 0, marginTop: 4 }}
          aria-hidden="true"
        >
          ▾
        </motion.span>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: expandido ? 'auto' : 0,
          opacity: expandido ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 8 }}>
          <div>
            <span className="tag tag--dourado">problema</span>
            <p style={{ marginTop: 10, fontSize: '0.88rem', color: '#ccc', lineHeight: 1.7 }}>{caso.problema}</p>
          </div>
          <div>
            <span className="tag tag--verde">abordagem</span>
            <p style={{ marginTop: 10, fontSize: '0.88rem', color: '#ccc', lineHeight: 1.7 }}>{caso.abordagem}</p>
          </div>
          {caso.codigo && (
            <div>
              <span className="tag tag--cinza">codigo</span>
              <pre className="code-block" style={{ marginTop: 10 }}>
                <code>{caso.codigo}</code>
              </pre>
            </div>
          )}
          <div>
            <span className="tag tag--verde">resultado</span>
            <p style={{ marginTop: 10, fontSize: '0.88rem', color: '#ccc', lineHeight: 1.7 }}>{caso.resultado}</p>
          </div>
          <div>
            <span className="tag tag--dourado">aprendizado</span>
            <p style={{ marginTop: 10, fontSize: '0.88rem', color: '#f0f0f0', lineHeight: 1.7, fontStyle: 'italic', paddingLeft: 16, borderLeft: '2px solid #c9a84c' }}>
              {caso.aprendizado}
            </p>
          </div>
        </div>
      </motion.div>

      {!expandido && (
        <p style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.7rem',
          color: '#555',
          marginTop: 4,
        }}>
          clique para expandir
        </p>
      )}
    </motion.article>
  );
}

function StackBadge({ tech, index }) {
  const statusColors = {
    producao: '#00ff88',
    aprendizado: '#c9a84c',
    estudo: '#666',
  };
  const color = statusColors[tech.status] || '#666';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, borderColor: color, boxShadow: `0 0 20px ${color}15` }}
      style={{
        padding: '16px 18px',
        background: 'var(--bg-card)',
        border: '1px solid var(--cinza-muito-escuro)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        transition: 'all 0.3s',
      }}
    >
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', color: '#f0f0f0', fontWeight: 600 }}>
        {tech.nome}
      </span>
      <span style={{ fontFamily: "'Fragment Mono', monospace", fontSize: '0.68rem', color: '#888' }}>{tech.nivel}</span>
      <span style={{
        fontFamily: "'Fragment Mono', monospace",
        fontSize: '0.6rem',
        color,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        ● {tech.status}
      </span>
    </motion.div>
  );
}

export default function ProfissionalSection() {
  const { profissional } = portfolioData.conteudo;

  return (
    <section id="profissional" className="section" aria-labelledby="profissional-title">
      <div className="section-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // profissional
        </motion.span>
        <motion.h2
          id="profissional-title"
          className="section-title"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Camada <span className="accent">Profissional</span>
        </motion.h2>
        <motion.div
          className="section-divider"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Metricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 64,
        background: 'var(--bg-card)',
        border: '1px solid var(--cinza-muito-escuro)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
      }}>
        {profissional.cases.map((c) => c.metrica && (
          <AnimatedMetric key={c.nome} value={c.metrica.valor} label={c.metrica.label} />
        ))}
      </div>

      {/* Cases */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // mini cases
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {profissional.cases.map((caso, i) => (
            <CaseCard key={caso.nome} caso={caso} index={i} />
          ))}
        </div>
      </div>

      {/* Processo */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // processo de trabalho
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', color: '#00ff88', fontWeight: 600, marginBottom: 14 }}>
              ferramentas
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {profissional.processo.ferramentas.map((f) => (
                <motion.span
                  key={f}
                  className="tag tag--verde"
                  whileHover={{ scale: 1.05 }}
                >
                  {f}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', color: '#00ff88', fontWeight: 600, marginBottom: 14 }}>
              rituais
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {profissional.processo.rituais.map((r) => (
                <motion.span
                  key={r}
                  whileHover={{ x: 4 }}
                  style={{
                    fontFamily: "'Fragment Mono', monospace",
                    fontSize: '0.78rem',
                    color: '#ccc',
                    cursor: 'default',
                  }}
                >
                  → {r}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stack */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // stack tecnico
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
          gap: 12,
        }}>
          {profissional.stack.map((tech, i) => (
            <StackBadge key={tech.nome} tech={tech} index={i} />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: 'center',
          padding: '40px 24px',
          border: '1px solid rgba(201,168,76,0.2)',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.04), transparent)',
        }}
      >
        <span style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          letterSpacing: '0.05em',
        }}>
          {profissional.timeline}
        </span>
      </motion.div>
    </section>
  );
}
