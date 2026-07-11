import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

function CaseCard({ caso, index }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ cursor: 'pointer' }}
      onClick={() => setExpandido(!expandido)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1.1rem',
          color: '#00ff88',
        }}>
          {caso.nome}
        </h3>
        <motion.span
          animate={{ rotate: expandido ? 180 : 0 }}
          style={{ color: '#c9a84c', fontSize: '1.2rem' }}
        >
          ▾
        </motion.span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: expandido ? 'auto' : 0, opacity: expandido ? 1 : 0 }}
        style={{ overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 8 }}>
          <div>
            <span className="tag tag--dourado">problema</span>
            <p style={{ marginTop: 8, fontSize: '0.9rem', color: '#ccc', lineHeight: 1.6 }}>{caso.problema}</p>
          </div>
          <div>
            <span className="tag tag--verde">abordagem</span>
            <p style={{ marginTop: 8, fontSize: '0.9rem', color: '#ccc', lineHeight: 1.6 }}>{caso.abordagem}</p>
          </div>
          {caso.codigo && (
            <div>
              <span className="tag tag--cinza">codigo</span>
              <pre style={{
                marginTop: 8,
                padding: 16,
                background: '#0d0d0d',
                borderRadius: 8,
                border: '1px solid #222',
                overflow: 'auto',
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.75rem',
                color: '#00ff88',
                lineHeight: 1.6,
              }}>
                <code>{caso.codigo}</code>
              </pre>
            </div>
          )}
          <div>
            <span className="tag tag--verde">resultado</span>
            <p style={{ marginTop: 8, fontSize: '0.9rem', color: '#ccc', lineHeight: 1.6 }}>{caso.resultado}</p>
          </div>
          <div>
            <span className="tag tag--dourado">aprendizado</span>
            <p style={{ marginTop: 8, fontSize: '0.9rem', color: '#f0f0f0', lineHeight: 1.6, fontStyle: 'italic' }}>{caso.aprendizado}</p>
          </div>
        </div>
      </motion.div>

      {!expandido && (
        <p style={{ fontSize: '0.85rem', color: '#888', marginTop: 4 }}>
          Clique para expandir os detalhes
        </p>
      )}
    </motion.div>
  );
}

function StackBadge({ tech, index }) {
  const statusColors = {
    producao: '#00ff88',
    aprendizado: '#c9a84c',
    estudo: '#888',
  };
  const color = statusColors[tech.status] || '#888';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, borderColor: color }}
      style={{
        padding: '12px 16px',
        background: '#111',
        border: '1px solid #333',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        transition: 'border-color 0.3s',
      }}
    >
      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.85rem', color: '#f0f0f0', fontWeight: 600 }}>
        {tech.nome}
      </span>
      <span style={{ fontSize: '0.7rem', color: '#888' }}>{tech.nivel}</span>
      <span style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.65rem',
        color,
        textTransform: 'uppercase',
      }}>
        ● {tech.status}
      </span>
    </motion.div>
  );
}

export default function ProfissionalSection() {
  const { profissional } = portfolioData.conteudo;

  return (
    <section id="profissional" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Camada Profissional
      </motion.h2>

      {/* Mini Cases */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
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
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // processo de trabalho
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.85rem', color: '#00ff88', marginBottom: 12 }}>
              ferramentas
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {profissional.processo.ferramentas.map((f) => (
                <span key={f} className="tag tag--verde">{f}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.85rem', color: '#00ff88', marginBottom: 12 }}>
              rituais
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {profissional.processo.rituais.map((r) => (
                <span key={r} style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.8rem', color: '#ccc' }}>
                  → {r}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stack */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // stack tecnico
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 12,
        }}>
          {profissional.stack.map((tech, i) => (
            <StackBadge key={tech.nome} tech={tech} index={i} />
          ))}
        </div>
      </div>

      {/* Timeline textual */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          padding: '32px 24px',
          border: '1px solid #c9a84c',
          background: 'rgba(201,168,76,0.05)',
        }}
      >
        <span style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
        }}>
          {profissional.timeline}
        </span>
      </motion.div>
    </section>
  );
}
