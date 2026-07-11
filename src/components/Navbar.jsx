import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ["Evolucao", "Profissional", "Conhecimento", "Criativo", "Social"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => ({
        id: item.toLowerCase(),
        el: document.getElementById(item.toLowerCase()),
      }));
      const current = sections.find(s => {
        if (!s.el) return false;
        const rect = s.el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom > 200;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      role="navigation"
      aria-label="Navegacao principal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 clamp(16px, 4vw, 48px)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.4s, border-bottom 0.4s, backdrop-filter 0.4s',
      }}
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '1rem',
          fontWeight: 400,
          color: '#00ff88',
          cursor: 'pointer',
          letterSpacing: '0.02em',
        }}
        aria-label="Voltar ao topo"
      >
        {'<'}Darlann{' />'}
      </motion.a>

      <div className="nav-desktop" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {navItems.map((item) => {
          const isActive = activeSection === item.toLowerCase();
          return (
            <motion.button
              key={item}
              onClick={() => scrollTo(item)}
              whileHover={{ color: '#00ff88' }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: isActive ? 'rgba(0,255,136,0.08)' : 'none',
                border: 'none',
                color: isActive ? '#00ff88' : '#888',
                fontFamily: "'Fragment Mono', monospace",
                fontSize: '0.75rem',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 8,
                transition: 'all 0.3s',
                position: 'relative',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              {item}
              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  style={{
                    position: 'absolute',
                    bottom: 2,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 16,
                    height: 2,
                    background: '#00ff88',
                    borderRadius: 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#00ff88',
          fontSize: '1.4rem',
          cursor: 'pointer',
          padding: 8,
          borderRadius: 8,
          transition: 'background 0.2s',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.25 }}
            className="nav-mobile-menu"
            role="menu"
            style={{
              position: 'absolute',
              top: 72,
              left: 0,
              right: 0,
              background: 'rgba(10,10,10,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item)}
                role="menuitem"
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.toLowerCase() ? '#00ff88' : '#888',
                  fontFamily: "'Fragment Mono', monospace",
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  padding: '14px 0',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  transition: 'color 0.2s',
                }}
              >
                <span style={{ color: '#c9a84c', marginRight: 12 }}>0{i + 1}</span>
                {item}
              </motion.button>
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
