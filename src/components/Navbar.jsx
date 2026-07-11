import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ["Evolucao", "Profissional", "Conhecimento", "Criativo", "Social"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #333' : '1px solid transparent',
        transition: 'background 0.3s, border-bottom 0.3s, backdrop-filter 0.3s',
      }}
    >
      <motion.div
        style={{ fontFamily: "'Fira Code', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#00ff88', cursor: 'pointer' }}
        whileHover={{ scale: 1.05 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {'<'}Darlann{' />'}
      </motion.div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}
        className="nav-desktop"
      >
        {navItems.map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollTo(item)}
            whileHover={{ color: '#00ff88' }}
            style={{
              background: 'none',
              border: 'none',
              color: '#888',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.8rem',
              cursor: 'pointer',
              padding: '8px 12px',
              transition: 'color 0.2s',
            }}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#00ff88',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="nav-mobile-menu"
            style={{
              position: 'absolute',
              top: 64,
              left: 0,
              right: 0,
              background: 'rgba(10,10,10,0.98)',
              borderBottom: '1px solid #333',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  padding: '12px 0',
                  textAlign: 'left',
                  borderBottom: '1px solid #222',
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
