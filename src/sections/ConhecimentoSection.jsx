import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function ConhecimentoSection() {
  const { conhecimento } = portfolioData.conteudo;

  return (
    <section id="conhecimento" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Conhecimento
      </motion.h2>

      {/* Artigos */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // artigos
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {conhecimento.artigos.map((artigo, i) => (
            <motion.div
              key={artigo.titulo}
              className="card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.95rem',
                color: '#00ff88',
                marginBottom: 8,
              }}>
                {artigo.titulo}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.6 }}>
                {artigo.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Palestras */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // palestras & workshops
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {conhecimento.palestras.map((palestra, i) => (
            <motion.div
              key={palestra.titulo}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.95rem',
                color: '#00ff88',
                marginBottom: 8,
              }}>
                {palestra.titulo}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.6, marginBottom: 12 }}>
                {palestra.descricao}
              </p>
              <a href={palestra.link} style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.8rem',
                color: '#c9a84c',
              }}>
                → acessar material
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Livros e Cursos */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // livros & cursos recomendados
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {conhecimento.livrosCursos.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.85rem',
                color: '#ccc',
                padding: '8px 0',
                borderBottom: '1px solid #222',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ color: '#00ff88' }}>●</span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // perguntas frequentes
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {conhecimento.faqs.map((faq, i) => (
            <motion.div
              key={faq.pergunta}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.9rem',
                color: '#00ff88',
                marginBottom: 12,
              }}>
                Q: {faq.pergunta}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: '#ccc',
                lineHeight: 1.7,
                paddingLeft: 16,
                borderLeft: '2px solid #c9a84c',
              }}>
                {faq.resposta}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
