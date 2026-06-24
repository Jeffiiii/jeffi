// SiteHero — editorial asymmetric hero: oversized wordmark, JP accent, mono meta,
// and Elysia's Live2D window. Pink stays scoped to the Elysia card (.elysia-zone).
const { Button, Live2DStage } = window.ElysiaJeffiDesignSystem_f13e8e;

function SiteHero({ lang, theme, onOpenChat }) {
  const meta = lang === 'zh'
    ? ['开发者', '玩家', '音乐', '动漫']
    : ['Developer', 'Gamer', 'Music', 'Anime'];

  return (
    <section style={{
      position: 'relative', minHeight: '88vh', display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,0.95fr)', gap: 'clamp(24px,5vw,56px)',
      alignItems: 'center', padding: 'clamp(56px,10vh,120px) clamp(16px,4vw,40px) clamp(40px,6vh,72px)',
    }} className="resp-2col">
      <div style={{ position: 'relative' }}>
        {/* mono kicker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(18px,3vh,28px)' }}>
          <span style={{ width: 28, height: 2, background: 'var(--site-accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.22em', color: 'var(--site-accent)', textTransform: 'uppercase' }}>
            {lang === 'zh' ? '个人主页 / 2026' : 'Personal Site / 2026'}
          </span>
        </div>

        {/* wordmark */}
        <h1 className="site-display" style={{ fontWeight: 800, fontSize: 'clamp(2.6rem,6vw,4.2rem)', lineHeight: 0.92, letterSpacing: '-0.04em', margin: '0 0 clamp(22px,4vh,32px)', color: 'var(--site-text)' }}>
          Jeffi<span style={{ color: 'var(--site-accent)' }}>.</span>
        </h1>

        <p style={{ fontFamily: 'var(--font-jp)', fontSize: 'clamp(1rem,1.6vw,1.12rem)', lineHeight: 1.65, color: 'var(--site-text-soft)', margin: '0 0 26px', maxWidth: 420, textWrap: 'pretty' }}>
          {lang === 'zh'
            ? '学生开发者，做全栈 Web、玩音游、也在亲手打造 AI VTuber —— Elysia。'
            : "Student developer building full-stack web, maining rhythm games, and hand-crafting an AI VTuber — Elysia."}
        </p>

        {/* mono meta row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, marginBottom: 'clamp(26px,4vh,36px)', borderTop: '1px solid var(--site-hairline)', borderBottom: '1px solid var(--site-hairline)' }}>
          {meta.map((m, i) => (
            <span key={m} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--site-text-muted)', textTransform: 'uppercase', padding: '11px 16px 11px 0', borderRight: i < meta.length - 1 ? '1px solid var(--site-hairline)' : 'none', marginRight: 16 }}>
              <span style={{ color: 'var(--site-accent)', marginRight: 7 }}>{String(i + 1).padStart(2, '0')}</span>{m}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Button variant="primary" iconRight="→" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' })}>{lang === 'zh' ? '看项目' : 'See Projects'}</Button>
          <Button variant={theme === 'dark' ? 'dark' : 'secondary'} onClick={onOpenChat}>{lang === 'zh' ? '认识 Elysia' : 'Meet Elysia'}</Button>
        </div>
      </div>

      {/* Elysia Live2D window */}
      <div className="elysia-zone" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: -14, left: -2, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--elysia-400)', textTransform: 'uppercase', zIndex: 2 }}>
          ⟢ Live2D · {lang === 'zh' ? '在线' : 'online'}
        </div>
        <Live2DStage emotion="happy" speaking name="Elysia" live height={440} modelUrl="../../assets/live2d/changli.model3.json" />
        <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14, display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" size="sm" onClick={onOpenChat} style={{ boxShadow: '0 8px 28px rgba(214,51,122,0.6)' }}>
            {lang === 'zh' ? '来和我聊天吧' : 'Come chat with me'}
          </Button>
        </div>
      </div>
    </section>
  );
}
window.SiteHero = SiteHero;
