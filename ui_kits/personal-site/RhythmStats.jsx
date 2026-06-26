// RhythmStats — "data as identity": a compact band of real numbers that count
// up when scrolled into view. maimai Rating, hours gamed, projects, games.
// Bilingual labels; respects reduced-motion (snaps to final value).
function RhythmStats({ lang }) {
  const STATS = [
    { to: 15303, fmt: (n) => n.toLocaleString('en-US'), en: 'maimai Rating', zh: 'maimai Rating', suffix: '', accent: true },
    { to: 6000, fmt: (n) => n.toLocaleString('en-US'), en: 'Hours gamed', zh: '游戏时长', suffix: '+' },
    { to: 6, fmt: (n) => String(n), en: 'Projects shipped', zh: '已交付项目', suffix: '' },
    { to: 12, fmt: (n) => String(n), en: 'Games logged', zh: '记录的游戏', suffix: '' },
  ];
  const ref = React.useRef(null);
  const [vals, setVals] = React.useState(STATS.map(() => 0));
  const ran = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const run = () => {
      if (ran.current) return;
      ran.current = true;
      if (reduce) { setVals(STATS.map((s) => s.to)); return; }
      const start = performance.now();
      const dur = 1500;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setVals(STATS.map((s) => Math.round(s.to * e)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { run(); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
      borderTop: '1px solid var(--site-hairline)', borderBottom: '1px solid var(--site-hairline)',
      margin: '0 0 clamp(28px,5vh,44px)',
    }}>
      {STATS.map((s, i) => (
        <div key={i} style={{
          padding: 'clamp(18px,3vh,26px) clamp(14px,2.5vw,26px)',
          borderRight: i < STATS.length - 1 ? '1px solid var(--site-hairline)' : 'none',
          display: 'flex', flexDirection: 'column', gap: 8,
        }} className="rs-cell">
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1,
            fontSize: 'clamp(1.9rem,4vw,2.7rem)', letterSpacing: '-0.03em',
            color: s.accent ? 'var(--site-accent)' : 'var(--site-text)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            {s.fmt(vals[i])}<span style={{ fontSize: '0.5em', color: 'var(--site-text-faint)' }}>{s.suffix}</span>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.66rem', fontWeight: 500,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--site-text-faint)',
          }}>
            <window.XFade text={lang === 'zh' ? s.zh : s.en} />
          </div>
        </div>
      ))}
    </div>
  );
}
window.RhythmStats = RhythmStats;
