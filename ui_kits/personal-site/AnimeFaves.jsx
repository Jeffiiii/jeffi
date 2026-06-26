// AnimeFaves — gacha games + favourite characters (emoji avatars; real art omitted for copyright).
const { Card, Tabs, Badge } = window.ElysiaJeffiDesignSystem_f13e8e;

const GACHA = {
  pjsk: {
    en: ['Project Sekai', 'feat. Hatsune Miku · Rhythm'], zh: ['世界计划', 'feat. 初音未来 · 音游'],
    chars: [
      { e: '🌙', bg: 'linear-gradient(135deg,#2E1A5C,#7B4FA0)', n: 'Mafuyu', jp: '朝比奈まふゆ', en: '25-ji, Nightcord de.', zh: '25时，夜晚绳结。', fav: true },
      { e: '🎤', bg: 'linear-gradient(135deg,#FF7BAC,#FF4D9A)', n: 'Kohane', jp: '小豆沢こはね', en: 'Vivid BAD SQUAD', zh: 'Vivid BAD SQUAD', fav: true },
      { e: '💙', bg: 'linear-gradient(135deg,#39C5BB,#0099CC)', n: 'Hatsune Miku', jp: '初音ミク', en: 'Virtual Singer', zh: '虚拟歌手', fav: true },
    ],
  },
  wuwa: {
    en: ['Wuthering Waves', 'Open-world Gacha'], zh: ['鸣潮', '开放世界手游'],
    chars: [
      { e: '🪷', bg: 'linear-gradient(135deg,#ff9ecb,#d6337a)', n: 'Changli', jp: '长离', en: 'Resonator · the site\u2019s Live2D model ♪', zh: '共鸣者 · 本站 Live2D 模型 ♪', fav: true },
      { e: '🌊', bg: 'linear-gradient(135deg,#00D4C8,#1A8CFF)', n: 'Jinhsi', jp: '今汐', en: 'Magistrate of Jinzhou', zh: '今州牧', fav: true },
    ],
  },
  arknights: {
    en: ['Arknights', '明日方舟 · Tower Defence'], zh: ['明日方舟', 'Arknights · 塔防'],
    chars: [
      { e: '🐰', bg: 'linear-gradient(135deg,#3A5EA8,#6A9BD4)', n: 'Amiya', jp: '阿米娅', en: 'Guard · Rhodes Island', zh: '近卫 · 罗德岛', fav: true },
      { e: '🔥', bg: 'linear-gradient(135deg,#8B1A1A,#FF7020)', n: 'Reed the Flameshadow', jp: '焰影苇草', en: 'Guard · 6★ Alter', zh: '近卫 · 6★ 异格', fav: true },
    ],
  },
  hsr: {
    en: ['Honkai: Star Rail', 'Turn-based RPG'], zh: ['崩坏：星穹铁道', '回合制RPG'],
    chars: [
      { e: '⭐', bg: 'linear-gradient(135deg,#FFB830,#8B5CF6)', n: 'Kafka', jp: '卡芙卡', en: 'Stellaron Hunter', zh: '星核猎手', fav: true },
      { e: '🦋', bg: 'linear-gradient(135deg,#8B5CF6,#F0D8FF)', n: 'Black Swan', jp: '黑天鹅', en: 'Memokeeper', zh: '记忆神主', fav: false },
    ],
  },
  maimai: {
    en: ['maimai DX', 'Partner · CAFE MiLK'], zh: ['舞萌 DX', '搭档 · CAFE MiLK'],
    chars: [
      { e: '🐱', bg: 'linear-gradient(135deg,#FFD6E8,#B8E0FF)', n: 'Salt', jp: 'ソルト', en: 'CAFE MiLK partner', zh: 'CAFE MiLK 搭档', fav: true },
      { e: '🏮', bg: 'linear-gradient(135deg,#D4EAF7,#C8DCEF)', n: 'Salt — Festival', jp: 'ふぇすてぃばる', en: 'white dress · lantern 🏮', zh: '白裙 · 提灯 🏮', fav: true },
    ],
  },
};

function AnimeFaves({ lang }) {
  const [game, setGame] = React.useState('pjsk');
  const L = lang === 'zh' ? 'zh' : 'en';
  const tabs = Object.keys(GACHA).map(k => ({ key: k, label: GACHA[k][L][0] }));
  const g = GACHA[game];

  return (
    <section id="anime" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <window.SecHead n="04" eyebrow={lang === 'zh' ? '动漫与手游' : 'Anime & Gacha'} title={lang === 'zh' ? '我爱的角色' : 'Characters I Love'} kana="アニメ" />
      <p style={{ marginTop: '-24px', marginBottom: '28px', color: 'var(--site-text-muted)', fontSize: '0.92rem' }}>{lang === 'zh' ? '点击切换游戏 · 高亮 = 最爱' : 'Switch games · highlighted = favourite'}</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px', overflowX: 'auto' }}>
        <Tabs items={tabs} value={game} onChange={setGame} dark />
      </div>

      <div style={{ textAlign: 'center', marginBottom: 24, fontSize: '0.88rem', color: 'var(--site-text-muted)', fontWeight: 700 }}>
        {g[L][1]}
      </div>

      <div className="anime-grid">
        {g.chars.map((c, i) => i === 0 ? (
          <Card key={i} tone="surface" padding="0" hover className="ac-feat" style={{ position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c.bg }} />
            <div style={{ display: 'flex', gap: 18, padding: '22px 20px', alignItems: 'center' }}>
              <div style={{ width: 96, height: 96, flexShrink: 0, borderRadius: '50%', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.6rem', lineHeight: 1, border: '2.5px solid var(--site-card-border)', boxShadow: 'inset 0 2px 16px rgba(255,255,255,0.28), 0 8px 22px rgba(0,0,0,0.34)' }}>{c.e}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.3rem', color: 'var(--site-text)' }}>{c.n}</span>
                  {c.fav && <window.Icon name="sparkles" size={15} style={{ color: 'var(--site-accent)' }} />}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--site-text-faint)', fontWeight: 600, marginBottom: 8 }}>{c.jp}</div>
                <div style={{ fontSize: '0.86rem', color: 'var(--site-text-soft)', lineHeight: 1.5 }}>{c[L]}</div>
              </div>
            </div>
          </Card>
        ) : (
          <Card key={i} tone="surface" padding="20px 16px 16px" hover style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c.bg }} />
            {c.fav && <span style={{ position: 'absolute', top: 12, right: 14, display: 'inline-flex' }}><window.Icon name="sparkles" size={14} style={{ color: 'var(--site-accent)' }} /></span>}
            <div style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 12px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', lineHeight: 1, border: '2.5px solid var(--site-card-border)', boxShadow: 'inset 0 2px 16px rgba(255,255,255,0.28), 0 8px 22px rgba(0,0,0,0.34)' }}>{c.e}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.95rem', color: 'var(--site-text)' }}>{c.n}</div>
            <div style={{ fontSize: '0.74rem', color: 'var(--site-text-faint)', fontWeight: 600, marginBottom: 8 }}>{c.jp}</div>
            <div style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--site-chip-bg)', border: '1px solid var(--site-chip-border)', color: 'var(--site-text-soft)' }}>{c[L]}</div>
          </Card>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: 22, fontSize: '0.76rem', color: 'var(--site-text-faint)', fontStyle: 'italic' }}>
        {lang === 'zh' ? '角色版权归各自所有者所有 · 此处仅用 emoji 占位' : 'Characters © their respective owners · emoji placeholders shown here'}
      </p>
    </section>
  );
}
window.AnimeFaves = AnimeFaves;
