import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const icons = {
  WhatsApp: WhatsAppIcon,
  Email: EmailIcon,
  GitHub: GitHubIcon,
  YouTube: YouTubeIcon,
};

function AnimatedContactIcon({ Icon, href, label, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.15,
        y: -3,
        filter: 'drop-shadow(0 0 12px rgba(0,255,136,0.4))',
      }}
      whileTap={{ scale: 0.9 }}
      style={{
        color: '#888',
        transition: 'color 0.3s',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 12,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = '#00ff88'; e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
    >
      <Icon />
    </motion.a>
  );
}

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
          <div style={{ display: 'flex', gap: 12 }}>
            <AnimatedContactIcon
              Icon={WhatsAppIcon}
              href={`https://wa.me/${rodape.whatsapp}`}
              label="Enviar mensagem no WhatsApp"
              delay={0}
            />
            <AnimatedContactIcon
              Icon={EmailIcon}
              href={`mailto:${rodape.email}`}
              label="Enviar email"
              delay={0.1}
            />
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
          <div style={{ display: 'flex', gap: 12 }}>
            <AnimatedContactIcon
              Icon={GitHubIcon}
              href="https://github.com/reylanbit"
              label="GitHub"
              delay={0}
            />
            <AnimatedContactIcon
              Icon={YouTubeIcon}
              href="https://youtube.com"
              label="YouTube"
              delay={0.1}
            />
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
          v3.0
        </span>
      </div>
    </footer>
  );
}
