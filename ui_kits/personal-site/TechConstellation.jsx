// TechConstellation — skills as a living star-map instead of a grid. Nodes drift
// gently, related tech are linked by edges, and hovering a node lights up its
// connections. Colour = proficiency tier. Real stack from the original site.
function TechConstellation({ lang }) {
  const TECH_N = [
    { name: 'Python',      lvl: 'Proficient',  zh: '熟练',   c: 'var(--jeffi-400)', bx: 175, by: 118, amp: 8, ph: 0.0, sp: 0.50 },
    { name: 'Java',        lvl: 'Proficient',  zh: '熟练',   c: 'var(--jeffi-400)', bx: 150, by: 312, amp: 7, ph: 1.1, sp: 0.43 },
    { name: 'JavaScript',  lvl: 'Comfortable', zh: '较熟练', c: 'var(--crystal)',   bx: 400, by: 78,  amp: 9, ph: 2.0, sp: 0.55 },
    { name: 'HTML / CSS',  lvl: 'Comfortable', zh: '较熟练', c: 'var(--crystal)',   bx: 628, by: 122, amp: 8, ph: 0.6, sp: 0.48 },
    { name: 'Git / GitHub',lvl: 'Comfortable', zh: '较熟练', c: 'var(--crystal)',   bx: 668, by: 305, amp: 7, ph: 1.7, sp: 0.52 },
    { name: 'React',       lvl: 'Familiar',    zh: '了解中', c: 'var(--mint)',      bx: 560, by: 372, amp: 9, ph: 2.6, sp: 0.46 },
    { name: 'Node.js',     lvl: 'Familiar',    zh: '了解中', c: 'var(--mint)',      bx: 255, by: 392, amp: 8, ph: 3.1, sp: 0.50 },
    { name: 'Unity',       lvl: 'Familiar',    zh: '了解中', c: 'var(--mint)',      bx: 706, by: 212, amp: 7, ph: 0.9, sp: 0.44 },
  ];
  const STRONG = [[0, 1], [2, 3], [2, 5], [2, 6], [5, 6], [3, 4]];
  const neighbors = React.useMemo(() => {
    const m = TECH_N.map(() => new Set());
    STRONG.forEach(([a, b]) => { m[a].add(b); m[b].add(a); });
    return m;
  }, []);

  const [hover, setHover] = React.useState(null);
  const [tick, setTick] = React.useState(0);
  const reduce = React.useRef(false);
  React.useEffect(() => {
    reduce.current = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia && window.matchMedia('(max-width: 640px)').matches;
    if (reduce.current || mobile) return;
    let raf, alive = true;
    const loop = () => { if (!alive) return; setTick(performance.now() / 1000); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { alive = false; cancelAnimationFrame(raf); };
  }, []);

  const drift = (n) => reduce.current
    ? { x: n.bx, y: n.by }
    : { x: n.bx + Math.sin(tick * n.sp + n.ph) * n.amp, y: n.by + Math.cos(tick * n.sp * 0.9 + n.ph) * n.amp };
  const pos = TECH_N.map(drift);
  const cx = reduce.current ? 400 : 400 + Math.sin(tick * 0.3) * 5;
  const cy = reduce.current ? 232 : 232 + Math.cos(tick * 0.27) * 5;

  const dim = (i) => hover != null && hover !== i && !neighbors[hover].has(i);
  const edgeLit = (a, b) => hover != null && (hover === a || hover === b);

  return (
    <React.Fragment>
    <div className="tc-wrap" style={{ position: 'relative', width: '100%', maxWidth: 880, margin: '0 auto', aspectRatio: '800 / 460' }}>
      <svg viewBox="0 0 800 460" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">
        {/* faint spokes from the central node */}
        {pos.map((p, i) => (
          <line key={'c' + i} x1={cx} y1={cy} x2={p.x} y2={p.y}
            stroke="var(--site-hairline)" strokeWidth="1" vectorEffect="non-scaling-stroke"
            style={{ opacity: hover == null ? 0.5 : (hover === i ? 0.7 : 0.12), transition: 'opacity .3s' }} />
        ))}
        {/* relationship edges */}
        {STRONG.map(([a, b], i) => (
          <line key={'e' + i} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y}
            stroke="var(--site-accent)" strokeWidth={edgeLit(a, b) ? 1.8 : 1.1} vectorEffect="non-scaling-stroke"
            style={{ opacity: hover == null ? 0.32 : (edgeLit(a, b) ? 0.85 : 0.06), transition: 'opacity .3s, stroke-width .3s' }} />
        ))}
      </svg>

      {/* central identity node */}
      <div className="tc-core" style={{ position: 'absolute', left: (cx / 800 * 100) + '%', top: (cy / 460 * 100) + '%', transform: 'translate(-50%,-50%)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1rem,2vw,1.35rem)', letterSpacing: '-0.03em', color: 'var(--site-text)' }}>
          Jeffi<span style={{ color: 'var(--site-accent)' }}>.</span>
        </span>
      </div>

      {/* tech nodes */}
      {TECH_N.map((n, i) => (
        <div key={n.name} className="tc-node"
          onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
          onFocus={() => setHover(i)} onBlur={() => setHover(null)} tabIndex={0}
          style={{
            position: 'absolute', left: (pos[i].x / 800 * 100) + '%', top: (pos[i].y / 460 * 100) + '%',
            transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            cursor: 'default', textAlign: 'center', opacity: dim(i) ? 0.32 : 1, transition: 'opacity .3s', outline: 'none',
          }}>
          <span style={{
            width: hover === i ? 16 : 12, height: hover === i ? 16 : 12, borderRadius: '50%', background: n.c,
            boxShadow: `0 0 ${hover === i ? 18 : 9}px ${n.c}`, transition: 'all .3s var(--ease-out)',
          }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--site-text)', whiteSpace: 'nowrap' }}>{n.name}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: n.c }}>
            <window.XFade text={lang === 'zh' ? n.zh : n.lvl} />
          </span>
        </div>
      ))}
    </div>

    {/* compact, readable fallback for narrow screens where the graph would overlap */}
    <div className="tc-fallback">
      {TECH_N.map((n) => (
        <div key={n.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--site-chip-bg)', border: '1px solid var(--site-chip-border)' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: n.c, flexShrink: 0, boxShadow: `0 0 8px ${n.c}` }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--site-text)' }}>{n.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: n.c }}>{lang === 'zh' ? n.zh : n.lvl}</div>
          </div>
        </div>
      ))}
    </div>
    </React.Fragment>
  );
}
window.TechConstellation = TechConstellation;
