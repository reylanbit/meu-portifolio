import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function CriativoSection() {
  const { criativo } = portfolioData.conteudo;

  return (
    <section id="criativo" className="section" aria-labelledby="criativo-title">
      <div className="section-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // criativo
        </motion.span>
        <motion.h2
          id="criativo-title"
          className="section-title"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Camada <span className="accent">Criativa</span>
        </motion.h2>
        <motion.div
          className="section-divider"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Playground */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // playground
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {criativo.playground.map((item, i) => (
            <motion.article
              key={item.nome}
              className="card"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.015, boxShadow: '0 0 40px rgba(0,255,136,0.06)' }}
              style={{ cursor: 'pointer', overflow: 'hidden' }}
            >
              <div style={{
                width: '100%',
                height: 200,
                background: 'linear-gradient(135deg, #111 0%, #0d0d0d 100%)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--cinza-muito-escuro)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {item.tipo === 'game' ? (
                  <svg viewBox="0 0 200 120" width="180" height="108" style={{ opacity: 0.5 }} aria-hidden="true">
                    <rect x="10" y="80" width="180" height="30" fill="#1a1a1a" rx="3"/>
                    <rect x="60" y="50" width="30" height="30" fill="#00ff88" rx="4" opacity="0.6"/>
                    <rect x="110" y="40" width="25" height="40" fill="#c9a84c" rx="4" opacity="0.4"/>
                    <rect x="150" y="55" width="20" height="25" fill="#ff4444" rx="4" opacity="0.4"/>
                    <circle cx="75" cy="35" r="8" fill="#00ff88" opacity="0.8"/>
                    <line x1="75" y1="27" x2="75" y2="15" stroke="#00ff88" strokeWidth="2" opacity="0.8"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 200 120" width="180" height="108" style={{ opacity: 0.5 }} aria-hidden="true">
                    {[...Array(8)].map((_, row) =>
                      [...Array(12)].map((_, col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={col * 16 + 4}
                          y={row * 14 + 2}
                          width="14"
                          height="12"
                          rx="2"
                          fill={`rgba(0, 255, 136, ${0.05 + Math.random() * 0.25})`}
                        />
                      ))
                    )}
                  </svg>
                )}
                <div style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  fontFamily: "'Fragment Mono', monospace",
                  fontSize: '0.6rem',
                  color: '#444',
                  letterSpacing: '0.05em',
                }}>
                  demo
                </div>
              </div>
              <h4 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1rem',
                color: '#00ff88',
                fontWeight: 600,
                marginBottom: 6,
              }}>
                {item.nome}
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.6 }}>
                {item.descricao}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Setup */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // setup
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {Object.entries(criativo.setup).map(([chave, itens], i) => {
            const titulos = { maquinas: 'maquinas', software: 'software', perifericos: 'perifericos' };
            const icones = { maquinas: '🖥', software: '⌨', perifericos: '🎧' };
            return (
              <motion.div
                key={chave}
                className="card"
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h4 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.9rem',
                  color: '#00ff88',
                  fontWeight: 600,
                  marginBottom: 14,
                }}>
                  {icones[chave]} {titulos[chave]}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {itens.map((item, j) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: j * 0.05 }}
                      style={{
                        fontSize: '0.82rem',
                        color: '#ccc',
                        padding: '10px 0',
                        borderBottom: j < itens.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      → {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Playlist */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', padding: '48px 24px' }}
      >
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 16,
          letterSpacing: '0.05em',
        }}>
          // soundtrack
        </h3>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.9rem',
          color: '#888',
          marginBottom: 24,
          maxWidth: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6,
        }}>
          Lo-fi phonk pra manter o foco durante as madrugadas de codigo
        </p>
        <motion.a
          href={criativo.playlist}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,255,136,0.3)' }}
          whileTap={{ scale: 0.97 }}
        >
          abrir playlist no Spotify
        </motion.a>
      </motion.div>
    </section>
  );
}
