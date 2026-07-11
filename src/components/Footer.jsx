import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { rodape } = portfolioData.navegacao;

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px clamp(16px, 4vw, 48px) 32px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #080808 100%)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Fragment Mono', monospace",
              fontSize: '1.1rem',
              fontWeight: 400,
              color: '#00ff88',
              marginBottom: 12,
            }}
          >
            {'<'}Darlann{' />'}
          </div>
          <p style={{ color: '#888', fontSize: '0.85rem', maxWidth: 300, lineHeight: 1.7 }}>
            Da rua para o codigo. A evolucao continua.
          </p>
        </div>

        <div>
          <span style={{
            fontFamily: "'Fragment Mono', monospace",
            fontSize: '0.7rem',
            color: '#c9a84c',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            display: 'block',
            marginBottom: 16,
          }}>
            contato
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <motion.a
              href={`https://wa.me/${rodape.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4, color: '#00ff88' }}
              style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.3s' }}
            >
              WhatsApp: (85) 98170-2374
            </motion.a>
            <motion.a
              href={`mailto:${rodape.email}`}
              whileHover={{ x: 4, color: '#00ff88' }}
              style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.3s' }}
            >
              {rodape.email}
            </motion.a>
          </div>
        </div>

        <div>
          <span style={{
            fontFamily: "'Fragment Mono', monospace",
            fontSize: '0.7rem',
            color: '#c9a84c',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            display: 'block',
            marginBottom: 16,
          }}>
            redes
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rodape.links.map((link) => (
              <motion.a
                key={link}
                href={link === 'GitHub' ? 'https://github.com/reylanbit' : 'https://youtube.com'}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, color: '#00ff88' }}
                style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.3s' }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <span style={{
            fontFamily: "'Fragment Mono', monospace",
            fontSize: '0.7rem',
            color: '#c9a84c',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            display: 'block',
            marginBottom: 16,
          }}>
            navegacao
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {portfolioData.navegacao.abas.map((aba) => (
              <motion.a
                key={aba}
                href={`#${aba.toLowerCase()}`}
                whileHover={{ x: 4, color: '#00ff88' }}
                style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.3s' }}
              >
                {aba}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.7rem',
          color: '#555',
        }}>
          © 2026 Darlann. React + Framer Motion.
        </span>
        <span style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.65rem',
          color: '#333',
        }}>
          v1.0
        </span>
      </div>
    </footer>
  );
}
