// Gallery + Skills sections.
const { Card, Tag } = window.ElysiaJeffiDesignSystem_f13e8e;

// `img` = themed stock placeholder (swap for your own later); `grad` = graceful fallback if it fails to load.
const UQ = '?w=640&h=640&fit=crop&crop=entropy&q=80&auto=format';
const GALLERY = [
  { img: 'https://images.unsplash.com/photo-1757444838044-d9dcb1bb3017', grad: 'linear-gradient(135deg,#2dd4bf,#7c3aed)', en: 'maimai moment', zh: 'maimai 时刻' },
  { img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989', grad: 'linear-gradient(135deg,#ff9ecb,#8fd3e8)', en: 'Tokyo nights', zh: '东京夜色' },
  { img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab', grad: 'linear-gradient(135deg,#c4a8e8,#2dd4bf)', en: 'Art I love', zh: '喜欢的艺术' },
  { img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4', grad: 'linear-gradient(135deg,#0d9488,#8fd3e8)', en: 'Music vibes', zh: '音乐氛围' },
  { img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946', grad: 'linear-gradient(135deg,#ff9ecb,#c4a8e8)', en: 'Something beautiful', zh: '美丽的事物' },
  { img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e', grad: 'linear-gradient(135deg,#2dd4bf,#0d9488)', en: 'Gaming memory', zh: '游戏记忆' },
];

function Gallery({ lang }) {
  return (
    <section id="gallery" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <window.SecHead n="05" eyebrow={lang === 'zh' ? '视觉日记' : 'Visual Diary'} title={lang === 'zh' ? '相册' : 'Gallery'} kana="ギャラリー" />
      <div className="gallery-mosaic">
        {GALLERY.map((g, i) => {
          const cls = i === 0 ? 'gm-feat' : i === 3 ? 'gm-wide' : i === 4 ? 'gm-tall' : '';
          return (
          <div key={g.en} className={cls} tabIndex={0} role="button" aria-label={g[lang]} style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--site-card-border)', background: g.grad, height: '100%' }}
            onMouseEnter={(e)=>{ const im=e.currentTarget.querySelector('img'); if(im) im.style.transform='scale(1.07)'; e.currentTarget.querySelector('.ov').style.opacity=1; }}
            onMouseLeave={(e)=>{ const im=e.currentTarget.querySelector('img'); if(im) im.style.transform='scale(1)'; e.currentTarget.querySelector('.ov').style.opacity=0; }}>
            <img src={g.img + UQ} alt={g[lang]} loading="lazy" onError={(e)=>{ e.currentTarget.style.display='none'; }} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform var(--dur-slow) var(--ease-out)' }} />
            <div className="ov" style={{ position: 'absolute', inset: 0, opacity: 0, transition: 'opacity var(--dur) var(--ease)', display: 'flex', alignItems: 'flex-end', padding: '14px', background: 'linear-gradient(to top, rgba(26,16,32,0.78), transparent 55%)' }}>
              <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: i === 0 ? '1.1rem' : '0.85rem' }}>{g[lang]}</span>
            </div>
          </div>
          );
        })}
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
      <window.TechConstellation lang={lang} />
    </section>
  );
}
Object.assign(window, { Gallery, Skills });
