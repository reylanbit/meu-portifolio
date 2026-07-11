import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function SocialSection() {
  const { social, extra } = portfolioData.conteudo;

  return (
    <section id="social" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Social
      </motion.h2>

      {/* Como Trabalhar */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // como trabalho
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {Object.entries(social.comoTrabalhar).map(([chave, valor], i) => {
            const labels = {
              horarios: 'horarios',
              comunicacao: 'comunicacao',
              feedback: 'feedback',
              oQueNaoFazer: 'nao faca',
            };
            const colors = {
              horarios: '#00ff88',
              comunicacao: '#c9a84c',
              feedback: '#00ff88',
              oQueNaoFazer: '#ff4444',
            };
            return (
              <motion.div
                key={chave}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h4 style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.85rem',
                  color: colors[chave],
                  marginBottom: 12,
                }}>
                  {labels[chave]}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#ccc',
                  lineHeight: 1.6,
                }}>
                  {valor}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mentorias & Disponibilidade */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 64 }}>
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.85rem',
            color: '#00ff88',
            marginBottom: 12,
          }}>
            // mentorias
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: 1.6 }}>
            {social.mentorias}
          </p>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ borderColor: '#c9a84c' }}
        >
          <h4 style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.85rem',
            color: '#c9a84c',
            marginBottom: 12,
          }}>
            // disponibilidade
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: 1.6 }}>
            {social.disponibilidade}
          </p>
        </motion.div>
      </div>

      {/* Capsula do Tempo */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          //capsula do tempo
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
        }}>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ border: '1px solid #555', opacity: 0.7 }}
          >
            <span className="tag tag--cinza" style={{ marginBottom: 12, display: 'inline-block' }}>2021</span>
            <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.6, fontStyle: 'italic' }}>
              {extra.capsulaTempo.conteudo2021}
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ border: '1px solid #00ff88' }}
          >
            <span className="tag tag--verde" style={{ marginBottom: 12, display: 'inline-block' }}>2026</span>
            <p style={{ fontSize: '0.85rem', color: '#f0f0f0', lineHeight: 1.6 }}>
              {extra.capsulaTempo.conteudo2026}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Erros */}
      <div>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // erros que me ensinaram
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {extra.erros.map((erro, i) => (
            <motion.div
              key={erro.titulo}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ borderLeft: '3px solid #ff4444' }}
            >
              <h4 style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.9rem',
                color: '#ff4444',
                marginBottom: 8,
              }}>
                ✕ {erro.titulo}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: '#00ff88',
                lineHeight: 1.6,
                paddingLeft: 16,
              }}>
                → {erro.aprendizado}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
