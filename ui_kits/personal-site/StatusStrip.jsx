// StatusStrip — flat, hairline-divided status bar (laplace-style restraint):
// mono labels, accent used only as a live pulse / small mark. No gradient tiles, no emoji.
const { Card } = window.ElysiaJeffiDesignSystem_f13e8e;

function StatusStrip({ lang, track, playing }) {
  const Cell = ({ label, children, href, last }) => {
    const body = (
      <div style={{
        padding: '16px clamp(14px,2.5vw,26px)', height: '100%',
        borderRight: last ? 'none' : '1px solid var(--site-hairline)',
        display: 'flex', flexDirection: 'column', gap: 7, justifyContent: 'center',
        transition: 'background var(--dur) var(--ease)',
      }}
      onMouseEnter={href ? (e) => e.currentTarget.style.background = 'var(--site-row-hover)' : undefined}
      onMouseLeave={href ? (e) => e.currentTarget.style.background = 'transparent' : undefined}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--site-text-faint)' }}>{label}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--site-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</div>
      </div>
    );
    return href
      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{body}</a>
      : body;
  };

  const dot = (color) => <span style={{ width: 7, height: 7, borderRadius: '50%', background: color, boxShadow: `0 0 7px ${color}`, animation: 'pulseDot 1.6s ease-in-out infinite', display: 'inline-block', flexShrink: 0 }} />;

  return (
    <section style={{ maxWidth: 'var(--container)', margin: '-30px auto 0', padding: '0 clamp(16px,4vw,40px)', position: 'relative', zIndex: 5 }}>
      <style>{`@keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}@keyframes eqbar{from{height:25%}to{height:100%}}`}</style>
      <Card tone="surface" padding="0" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', overflow: 'hidden' }}>
        <Cell label={lang === 'zh' ? '正在打造' : 'Now building'}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>{dot('var(--success)')} Elysia VTuber</span>
        </Cell>
        <Cell label={lang === 'zh' ? '正在播放' : 'Now playing'} href="#music">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {playing && (
              <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 2, height: 12 }}>
                {[0,1,2].map(i => <span key={i} style={{ width: 2.5, borderRadius: 1, background: 'var(--site-accent)', height: '100%', animation: `eqbar 0.6s ${i*0.12}s infinite alternate ease-in-out` }} />)}
              </span>
            )}
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track ? track.title : '—'}</span>
          </span>
        </Cell>
        <Cell label="maimai Rating" href="https://aquadx.net/u/Jeffi/mai2">
          15,303 <span style={{ color: 'var(--site-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>↑</span>
        </Cell>
        <Cell label="GitHub" href="https://github.com/Jeffiiii" last>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500 }}>@Jeffiiii</span>
        </Cell>
      </Card>
    </section>
  );
}
window.StatusStrip = StatusStrip;
