import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #333',
        padding: '48px 24px',
        background: '#0a0a0a',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 32,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#00ff88',
              marginBottom: 8,
            }}
          >
            {'<'}Darlann{' />'}
          </div>
          <p style={{ color: '#888', fontSize: '0.85rem', maxWidth: 300 }}>
            Da rua para o codigo. A evolucao continua.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.8rem', color: '#c9a84c' }}>
            // contato
          </span>
          <a
            href={`https://wa.me/5585981702374`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#888', fontSize: '0.9rem' }}
          >
            WhatsApp: (85) 98170-2374
          </a>
          <a
            href="mailto:darlannasa@gmail.com"
            style={{ color: '#888', fontSize: '0.9rem' }}
          >
            darlannasa@gmail.com
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.8rem', color: '#c9a84c' }}>
            // redes
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#00ff88' }}
              style={{ color: '#888', fontSize: '0.9rem' }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#00ff88' }}
              style={{ color: '#888', fontSize: '0.9rem' }}
            >
              YouTube
            </motion.a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '32px auto 0',
          paddingTop: 24,
          borderTop: '1px solid #222',
          textAlign: 'center',
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.75rem',
          color: '#555',
        }}
      >
        © 2026 Darlann. Construido com React + Framer Motion.
      </div>
    </footer>
  );
}
