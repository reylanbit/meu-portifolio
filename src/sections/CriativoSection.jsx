import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function CriativoSection() {
  const { criativo } = portfolioData.conteudo;

  return (
    <section id="criativo" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Criativo
      </motion.h2>

      {/* Playground */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
        }}>
          // playground
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {criativo.playground.map((item, i) => (
            <motion.div
              key={item.nome}
              className="card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{
                width: '100%',
                height: 180,
                background: '#1a1a1a',
                borderRadius: 8,
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #333',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {item.tipo === 'game' ? (
                  <svg viewBox="0 0 200 120" width="160" height="96" style={{ opacity: 0.6 }}>
                    <rect x="10" y="80" width="180" height="30" fill="#222" rx="2"/>
                    <rect x="60" y="50" width="30" height="30" fill="#00ff88" rx="4" opacity="0.7"/>
                    <rect x="110" y="40" width="25" height="40" fill="#c9a84c" rx="4" opacity="0.5"/>
                    <rect x="150" y="55" width="20" height="25" fill="#ff4444" rx="4" opacity="0.5"/>
                    <circle cx="75" cy="35" r="8" fill="#00ff88" opacity="0.9"/>
                    <line x1="75" y1="27" x2="75" y2="15" stroke="#00ff88" strokeWidth="2" opacity="0.9"/>
                    <circle cx="75" cy="12" r="4" fill="none" stroke="#00ff88" strokeWidth="1"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 200 120" width="160" height="96" style={{ opacity: 0.6 }}>
                    {[...Array(8)].map((_, row) => (
                      [...Array(12)].map((_, col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={col * 16 + 4}
                          y={row * 14 + 2}
                          width="14"
                          height="12"
                          rx="2"
                          fill={`rgba(0, 255, 136, ${0.1 + Math.random() * 0.5})`}
                        />
                      ))
                    ))}
                  </svg>
                )}
                <div style={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.6rem',
                  color: '#555',
                }}>
                  demo
                </div>
              </div>
              <h4 style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.95rem',
                color: '#00ff88',
                marginBottom: 8,
              }}>
                {item.nome}
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.5 }}>
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Setup */}
      <div style={{ marginBottom: 64 }}>
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 24,
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h4 style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.85rem',
                  color: '#00ff88',
                  marginBottom: 12,
                }}>
                  {icones[chave]} {titulos[chave]}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {itens.map((item) => (
                    <span key={item} style={{
                      fontSize: '0.8rem',
                      color: '#ccc',
                      padding: '6px 0',
                      borderBottom: '1px solid #1a1a1a',
                    }}>
                      → {item}
                    </span>
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', padding: '32px 24px' }}
      >
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1rem',
          color: '#c9a84c',
          marginBottom: 16,
        }}>
          // soundtrack
        </h3>
        <p style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.85rem',
          color: '#888',
          marginBottom: 16,
        }}>
          Lo-fi phonk pra manter o foco durante as madrugadas de codigo
        </p>
        <a
          href={criativo.playlist}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          ▶ abrir playlist no Spotify
        </a>
      </motion.div>
    </section>
  );
}
