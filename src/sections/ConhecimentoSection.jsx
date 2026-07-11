import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

function FAQItem({ faq, index }) {
  const [aberto, setAberto] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card"
      style={{ cursor: 'pointer' }}
      onClick={() => setAberto(!aberto)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setAberto(!aberto); } }}
      role="button"
      tabIndex={0}
      aria-expanded={aberto}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <h4 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.95rem',
          color: '#00ff88',
          fontWeight: 600,
        }}>
          {faq.pergunta}
        </h4>
        <motion.span
          animate={{ rotate: aberto ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: '#c9a84c', fontSize: '1.2rem', flexShrink: 0, lineHeight: 1 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: aberto ? 'auto' : 0, opacity: aberto ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{
          marginTop: 16,
          fontSize: '0.85rem',
          color: '#ccc',
          lineHeight: 1.8,
          paddingLeft: 16,
          borderLeft: '2px solid #c9a84c',
        }}>
          {faq.resposta}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function ConhecimentoSection() {
  const { conhecimento } = portfolioData.conteudo;

  return (
    <section id="conhecimento" className="section" aria-labelledby="conhecimento-title">
      <div className="section-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // conhecimento
        </motion.span>
        <motion.h2
          id="conhecimento-title"
          className="section-title"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Camada de <span className="accent">Conhecimento</span>
        </motion.h2>
        <motion.div
          className="section-divider"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Artigos */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // artigos
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {conhecimento.artigos.map((artigo, i) => (
            <motion.article
              key={artigo.titulo}
              className="card"
              initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <h4 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '1rem',
                  color: '#00ff88',
                  fontWeight: 600,
                }}>
                  {artigo.titulo}
                </h4>
                {artigo.tempoLeitura && (
                  <span className="tag tag--cinza" style={{ flexShrink: 0 }}>{artigo.tempoLeitura}</span>
                )}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.7, marginTop: 8 }}>
                {artigo.descricao}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Palestras */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // palestras & workshops
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {conhecimento.palestras.map((palestra, i) => (
            <motion.article
              key={palestra.titulo}
              className="card"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
                <h4 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.95rem',
                  color: '#00ff88',
                  fontWeight: 600,
                }}>
                  {palestra.titulo}
                </h4>
                {palestra.duracao && (
                  <span className="tag tag--dourado" style={{ flexShrink: 0 }}>{palestra.duracao}</span>
                )}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.7, marginBottom: 16 }}>
                {palestra.descricao}
              </p>
              <motion.a
                href={palestra.link}
                whileHover={{ x: 4 }}
                style={{
                  fontFamily: "'Fragment Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#c9a84c',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                → acessar material
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Livros */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // livros & cursos recomendados
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 12,
        }}>
          {conhecimento.livrosCursos.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ x: 4, background: 'rgba(0,255,136,0.04)' }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.85rem',
                color: '#ccc',
                padding: '12px 16px',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--cinza-muito-escuro)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                cursor: 'default',
                transition: 'all 0.3s',
              }}
            >
              <span style={{ color: '#00ff88', fontSize: '0.8rem' }}>●</span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // perguntas frequentes
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {conhecimento.faqs.map((faq, i) => (
            <FAQItem key={faq.pergunta} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
