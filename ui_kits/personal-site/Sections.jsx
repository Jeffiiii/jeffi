// Gallery + Skills sections.
const { Card, Tag } = window.ElysiaJeffiDesignSystem_f13e8e;

const GALLERY = [
  { seed: 'sakura1', en: 'maimai moment', zh: 'maimai 时刻' },
  { seed: 'anime77', en: 'Favourite anime', zh: '最爱的动漫' },
  { seed: 'pixel23', en: 'Art I love', zh: '喜欢的艺术' },
  { seed: 'music88', en: 'Music vibes', zh: '音乐氛围' },
  { seed: 'pastel9', en: 'Something beautiful', zh: '美丽的事物' },
  { seed: 'gamer5', en: 'Gaming memory', zh: '游戏记忆' },
];

function Gallery({ lang }) {
  return (
    <section id="gallery" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <window.SecHead n="05" eyebrow={lang === 'zh' ? '视觉日记' : 'Visual Diary'} title={lang === 'zh' ? '相册' : 'Gallery'} kana="ギャラリー" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '16px' }}>
        {GALLERY.map((g) => (
          <div key={g.seed} tabIndex={0} role="button" aria-label={g[lang]} style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '1', cursor: 'pointer', border: '1px solid var(--site-card-border)' }}
            onMouseEnter={(e)=>{ e.currentTarget.querySelector('img').style.transform='scale(1.07)'; e.currentTarget.querySelector('.ov').style.opacity=1; }}
            onMouseLeave={(e)=>{ e.currentTarget.querySelector('img').style.transform='scale(1)'; e.currentTarget.querySelector('.ov').style.opacity=0; }}>
            <img src={`https://picsum.photos/seed/${g.seed}/420/420`} alt={g[lang]} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform var(--dur-slow) var(--ease-out)' }} />
            <div className="ov" style={{ position: 'absolute', inset: 0, opacity: 0, transition: 'opacity var(--dur) var(--ease)', display: 'flex', alignItems: 'flex-end', padding: '14px', background: 'linear-gradient(to top, rgba(26,16,32,0.78), transparent 55%)' }}>
              <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem' }}>{g[lang]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const TECH = [
  { ic: 'code', name: 'Python', lvl: 'Proficient', zh: '熟练', c: 'var(--jeffi-400)' },
  { ic: 'coffee', name: 'Java', lvl: 'Proficient', zh: '熟练', c: 'var(--jeffi-400)' },
  { ic: 'braces', name: 'JavaScript', lvl: 'Comfortable', zh: '较熟练', c: 'var(--crystal)' },
  { ic: 'code', name: 'HTML / CSS', lvl: 'Comfortable', zh: '较熟练', c: 'var(--crystal)' },
  { ic: 'git', name: 'Git / GitHub', lvl: 'Comfortable', zh: '较熟练', c: 'var(--crystal)' },
  { ic: 'atom', name: 'React', lvl: 'Familiar', zh: '了解中', c: 'var(--mint)' },
  { ic: 'hexagon', name: 'Node.js', lvl: 'Familiar', zh: '了解中', c: 'var(--mint)' },
  { ic: 'box', name: 'Unity', lvl: 'Familiar', zh: '了解中', c: 'var(--mint)' },
];

function Skills({ lang }) {
  return (
    <section id="skills" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <window.SecHead n="06" eyebrow={lang === 'zh' ? '我用的技术' : 'What I Work With'} title={lang === 'zh' ? '技术与工具' : 'Tech & Tools'} kana="スキル" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(130px,1fr))', gap: '12px' }}>
        {TECH.map((t) => (
          <Card key={t.name} tone="surface" padding="18px 12px" hover style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', color: 'var(--site-text)' }}><window.Icon name={t.ic} size={26} strokeWidth={1.6} /></div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--site-text)' }}>{t.name}</div>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.c, marginTop: '4px' }}>{lang === 'zh' ? t.zh : t.lvl}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { Gallery, Skills });
