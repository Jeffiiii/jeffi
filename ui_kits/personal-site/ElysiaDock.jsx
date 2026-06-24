// ElysiaDock — floating launcher + slide-in compact chat panel for the personal site.
const { IconButton } = window.ElysiaJeffiDesignSystem_f13e8e;

function ElysiaDock({ lang, setLang, open, setOpen }) {
  return (
    <React.Fragment>
      {/* launcher */}
      <button onClick={() => setOpen(true)} aria-label="Chat with Elysia" className="elysia-zone" style={{
        position: 'fixed', right: 20, bottom: 86, zIndex: 70,
        display: open ? 'none' : 'flex', alignItems: 'center', gap: '10px',
        padding: '8px 18px 8px 8px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
        background: 'rgba(36,22,48,0.85)', backdropFilter: 'blur(16px)',
        boxShadow: '0 12px 40px rgba(214,51,122,0.5)',
      }}>
        <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-gradient-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>🌸</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>{lang === 'zh' ? '和爱莉聊天 ♪' : 'Chat with Elysia ♪'}</span>
      </button>

      {/* panel */}
      <div className="elysia-zone" style={{
        position: 'fixed', right: 20, bottom: 20, zIndex: 80,
        width: 'min(380px, calc(100vw - 40px))', height: 'min(620px, calc(100vh - 40px))',
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        background: 'var(--night-900)', border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 28px 80px rgba(0,0,0,0.5)',
        transform: open ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'all var(--dur) var(--ease-out)', transformOrigin: 'bottom right',
        display: 'flex', flexDirection: 'column',
      }}>
        <window.ElysiaChatPanel lang={lang} setLang={setLang} compact onClose={() => setOpen(false)} />
      </div>
    </React.Fragment>
  );
}
window.ElysiaDock = ElysiaDock;
