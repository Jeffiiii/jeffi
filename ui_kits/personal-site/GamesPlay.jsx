// GamesPlay — maimai card, games-I-love list, and goals. Real data from the original site.
const { Card, Badge } = window.ElysiaJeffiDesignSystem_f13e8e;

const GAMES = [
  { ic: 'music', en: ['maimai DX', 'Rhythm Game'], zh: ['舞萌 DX', '音游'], hr: 'Main' },
  { ic: 'music', en: ['Project Sekai', 'Rhythm Game'], zh: ['世界计划', '音游'], hr: 'Fav' },
  { ic: 'crosshair', en: ['Warframe', 'Action RPG'], zh: ['星际战甲', '动作RPG'], hr: '1200+ h' },
  { ic: 'dice', en: ['Path of Exile', 'ARPG'], zh: ['流放之路', '暗黑ARPG'], hr: '700+ h' },
  { ic: 'crosshair', en: ['Rainbow Six Siege', 'Tactical FPS'], zh: ['彩虹六号', '战术射击'], hr: '700+ h' },
  { ic: 'crosshair', en: ['Delta Force', 'Military FPS'], zh: ['三角洲行动', '军事射击'], hr: '700+ h' },
  { ic: 'dice', en: ['Path of Exile 2', 'ARPG'], zh: ['流放之路2', '暗黑ARPG'], hr: '600+ h' },
  { ic: 'crosshair', en: ['Apex Legends', 'Battle Royale'], zh: ['Apex 英雄', '大逃杀'], hr: 'Diamond' },
  { ic: 'crosshair', en: ['Counter-Strike 2', 'Tactical FPS'], zh: ['CS2', '战术射击'], hr: '450+ h' },
  { ic: 'swords', en: ['Monster Hunter: World', 'Action · Co-op'], zh: ['怪物猎人：世界', '动作·合作'], hr: '450+ h' },
  { ic: 'swords', en: ['WoW Classic', 'MMORPG · TBC'], zh: ['魔兽世界·怀旧服', 'MMORPG'], hr: 'TBC' },
  { ic: 'pickaxe', en: ['Terraria & Minecraft', 'Sandbox · Survival'], zh: ['泰拉瑞亚 & 我的世界', '沙盒·生存'], hr: '∞' },
];

const SONGS = [
  ['QZKago Requiem', 't+pazolite'], ['the EmpErroR', 'sasakure.UK'],
  ['躯樹の墓守', '隣の庭は青い'], ['Xaleid◆scopiX', 'xi'],
  ['Estahv', 'Feryquitous'], ["World's end loneliness", '打打だいず'],
  ["World's end BLACKBOX", '打打だいず'], ['raputa', 'sasakure.UK'],
];

const GOALS = [
  { done: true, en: ['Launch personal portfolio', 'jeffiiii.github.io/jeffi'], zh: ['上线个人作品集', 'jeffiiii.github.io/jeffi'] },
  { done: true, en: ['Reach 15000 maimai Rating', 'Achieved! Current: 15,303'], zh: ['maimai Rating 达到 15000', '已达成！当前：15,303'] },
  { done: false, en: ['Ship Elysia VTuber on the web', 'Live2D + voice chat'], zh: ['上线网页版 Elysia VTuber', 'Live2D + 语音聊天'] },
  { done: false, en: ['Ship maimai Fan Hub v1.0', 'Rating optimizer + song catalog'], zh: ['发布 maimai 粉丝站 v1.0', 'Rating 优化器 + 歌曲库'] },
  { done: false, en: ['Release first fan game demo', 'Built with Godot 4'], zh: ['发布首个同人游戏 Demo', '使用 Godot 4 开发'] },
  { done: false, en: ['Learn backend development', 'Node.js / Python'], zh: ['学习后端开发', 'Node.js / Python'] },
];

function GamesPlay({ lang }) {
  const L = lang === 'zh' ? 'zh' : 'en';
  return (
    <section id="games" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <window.SecHead n="02" eyebrow={lang === 'zh' ? '游戏生活' : 'Gaming Life'} title={lang === 'zh' ? '我玩的游戏' : 'What I Play'} kana="ゲーム" />

      <p style={{ textAlign: 'center', color: 'var(--site-text-muted)', fontSize: '0.86rem', margin: '0 0 6px' }}>{lang === 'zh' ? '\u9760\u8fd1\u8bbe\u5907\u770b\u770b\u2014\u2014\u70b9\u51fb\u56fe\u6807\u67e5\u770b\u8be6\u60c5' : 'Lean in to a device \u2014 click an icon for the details'}</p>
      <window.PlayedDevices lang={lang} />

      {/* fav songs + goals */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
        <Card tone="surface" padding="20px 22px">
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--site-text)', marginBottom: 14 }}><window.Icon name="music" size={19} style={{ color: 'var(--site-text-muted)' }} />{lang === 'zh' ? '最爱曲目' : 'Favourite Songs'}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8 }}>
            {SONGS.map((s, i) => (
              <div key={i} style={{ padding: '9px 12px', borderRadius: 11, background: 'var(--site-chip-bg)', border: '1px solid var(--site-chip-border)' }}>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: 'var(--site-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s[0]}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--site-text-faint)', fontWeight: 600 }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card tone="surface" padding="20px 22px">
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--site-text)', marginBottom: 14 }}><window.Icon name="target" size={19} style={{ color: 'var(--site-text-muted)' }} />{lang === 'zh' ? '我的目标' : 'My Goals'}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {GOALS.map((g, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 11, padding: '9px 12px', borderRadius: 12, background: 'var(--site-chip-bg)', border: '1px solid var(--site-chip-border)' }}>
                <span style={{ width: 22, height: 22, borderRadius: 7, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 900, marginTop: 1, background: g.done ? 'rgba(63,185,138,0.2)' : 'var(--site-chip-bg)', border: g.done ? '1.5px solid var(--success)' : '1.5px solid var(--site-chip-border)', color: g.done ? 'var(--success)' : 'var(--site-text-faint)' }}>{g.done ? '✓' : '○'}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.86rem', color: 'var(--site-text)' }}>{g[L][0]}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--site-text-faint)', fontWeight: 600, marginTop: 1 }}>{g[L][1]}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
window.GamesPlay = GamesPlay;
