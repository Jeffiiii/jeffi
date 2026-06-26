// SiteNav — sticky blurred nav, laplace-style, plum-black + Elysia pink.
const { Button, IconButton } = window.ElysiaJeffiDesignSystem_f13e8e;

function SiteNav({ lang, setLang, theme, setTheme, onOpenChat }) {
  const links = [
    { en: 'Home', zh: '首页', id: 'top' },
    { en: 'About', zh: '关于', id: 'about' },
    { en: 'Projects', zh: '项目', id: 'projects' },
    { en: 'Games', zh: '游戏', id: 'games' },
    { en: 'Anime', zh: '动漫', id: 'anime' },
    { en: 'Music', zh: '音乐', id: 'music' },
    { en: 'Gallery', zh: '相册', id: 'gallery' },
    { en: 'Devlog', zh: '日志', id: 'devlog', href: 'devlog.html' },
  ];
  const [active, setActive] = React.useState('Home');
  return (
    <nav className="site-nav" style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '14px clamp(16px,4vw,40px)',
      background: 'var(--site-nav-bg)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--site-hairline)',
    }}>
      <div className="site-display" style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.04em', color: 'var(--site-text)', flexShrink: 0 }}>
        Jeffi<span style={{ color: 'var(--site-accent)' }}>.</span>
      </div>
      <ul className="nav-links" style={{ display: 'flex', gap: '2px', listStyle: 'none', margin: 0, padding: 0, flex: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
        {links.map((l, idx) => {
          const on = active === l.en;
          const go = (e) => {
            e.preventDefault();
            if (l.href) { window.location.href = l.href; return; }
            setActive(l.en);
            if (l.id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
            const el = document.getElementById(l.id);
            if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 72; window.scrollTo({ top: y, behavior: 'smooth' }); }
          };
          return (
            <li key={l.en}>
              <a href={'#' + l.id} onClick={go} style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '8px 14px', borderRadius: 'var(--radius-xs)',
                fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '0.78rem', letterSpacing: '0.04em',
                color: on ? 'var(--site-accent)' : 'var(--site-text-muted)',
                background: 'transparent',
                textDecoration: 'none', transition: 'all var(--dur) var(--ease)', whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e)=>{ if(!on) e.currentTarget.style.color='var(--site-text)'; }}
              onMouseLeave={(e)=>{ if(!on) e.currentTarget.style.color='var(--site-text-muted)'; }}>
                <span style={{ opacity: 0.5, fontSize: '0.66rem' }}>{String(idx).padStart(2,'0')}</span><window.XFade text={lang === 'zh' ? l.zh : l.en} />
              </a>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme" title="Toggle theme" style={{
        flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 38, height: 38, background: 'var(--site-chip-bg)', border: '1px solid var(--site-chip-border)',
        color: 'var(--site-text-soft)', fontSize: '1rem', borderRadius: 'var(--radius-full)', cursor: 'pointer',
      }}>{theme === 'dark' ? '☀' : '☽'}</button>
      <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} style={{
        flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: 'var(--site-chip-bg)', border: '1px solid var(--site-chip-border)',
        color: 'var(--site-text-soft)', fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '0.74rem', letterSpacing: '0.08em',
        padding: '9px 13px', borderRadius: 'var(--radius-xs)', cursor: 'pointer',
      }}>{lang === 'en' ? '中文' : 'EN'}</button>
      <Button variant="primary" size="sm" onClick={onOpenChat}>{lang === 'zh' ? '和 Elysia 聊天' : 'Chat'}</Button>
    </nav>
  );
}
window.SiteNav = SiteNav;
