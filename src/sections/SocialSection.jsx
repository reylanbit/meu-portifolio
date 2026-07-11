import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function SocialSection() {
  const { social, extra } = portfolioData.conteudo;

  return (
    <section id="social" className="section" aria-labelledby="social-title">
      <div className="section-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // social
        </motion.span>
        <motion.h2
          id="social-title"
          className="section-title"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Camada <span className="accent">Social</span>
        </motion.h2>
        <motion.div
          className="section-divider"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Como Trabalhar */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
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
              oQueNaoFazer: '#ff6b6b',
            };
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
                  fontSize: '0.85rem',
                  color: colors[chave],
                  fontWeight: 600,
                  marginBottom: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {labels[chave]}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#ccc',
                  lineHeight: 1.7,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {valor}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mentorias & Disponibilidade */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 80 }}>
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.9rem',
            color: '#00ff88',
            fontWeight: 600,
            marginBottom: 14,
          }}>
            mentorias
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: 1.7 }}>
            {social.mentorias}
          </p>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'linear-gradient(135deg, rgba(201,168,76,0.04), var(--bg-card))' }}
        >
          <h4 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.9rem',
            color: '#c9a84c',
            fontWeight: 600,
            marginBottom: 14,
          }}>
            disponibilidade
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: 1.7 }}>
            {social.disponibilidade}
          </p>
        </motion.div>
      </div>

      {/* Capsula do Tempo */}
      <div style={{ marginBottom: 80 }}>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
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
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ border: '1px solid rgba(136,136,136,0.15)', opacity: 0.85 }}
          >
            <span className="tag tag--cinza" style={{ marginBottom: 14, display: 'inline-block' }}>2021</span>
            <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.7, fontStyle: 'italic' }}>
              {extra.capsulaTempo.conteudo2021}
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ border: '1px solid rgba(0,255,136,0.2)', background: 'linear-gradient(135deg, rgba(0,255,136,0.04), var(--bg-card))' }}
          >
            <span className="tag tag--verde" style={{ marginBottom: 14, display: 'inline-block' }}>2026</span>
            <p style={{ fontSize: '0.85rem', color: '#f0f0f0', lineHeight: 1.7 }}>
              {extra.capsulaTempo.conteudo2026}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Erros */}
      <div>
        <h3 style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#c9a84c',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          // erros que me ensinaram
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {extra.erros.map((erro, i) => (
            <motion.article
              key={erro.titulo}
              className="card"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderLeft: '3px solid #ff6b6b' }}
            >
              <h4 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.9rem',
                color: '#ff6b6b',
                fontWeight: 600,
                marginBottom: 10,
              }}>
                {erro.titulo}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: '#00ff88',
                lineHeight: 1.7,
                paddingLeft: 16,
                borderLeft: '2px solid rgba(0,255,136,0.3)',
              }}>
                {erro.aprendizado}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          marginTop: 80,
          textAlign: 'center',
          padding: '48px 24px',
          background: 'linear-gradient(135deg, rgba(0,255,136,0.04), rgba(201,168,76,0.02))',
          borderRadius: 'var(--radius)',
          border: '1px solid rgba(0,255,136,0.1)',
        }}
      >
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: '#f0f0f0',
          fontWeight: 700,
          marginBottom: 12,
          letterSpacing: '-0.02em',
        }}>
          Pronto pra evoluir junto?
        </h3>
        <p style={{
          fontFamily: "'Fragment Mono', monospace",
          fontSize: '0.8rem',
          color: '#888',
          marginBottom: 28,
        }}>
          Freelance, mentoria ou CLT — bora conversar.
        </p>
        <motion.a
          href={`https://wa.me/${portfolioData.navegacao.rodape.whatsapp}?text=${encodeURIComponent(portfolioData.conteudo.social.mensagemWhatsApp)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(0,255,136,0.3)' }}
          whileTap={{ scale: 0.97 }}
        >
          falar comigo no WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
