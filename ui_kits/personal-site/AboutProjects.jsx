// About + Projects sections — real content from the original jeffi site.
const { Card, Badge, Tag } = window.ElysiaJeffiDesignSystem_f13e8e;

function About({ lang }) {
  return (
    <section id="about" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(40px,7vh,72px) clamp(16px,4vw,40px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)', gap: 'clamp(24px,5vw,56px)', alignItems: 'center' }} className="resp-2col">
        <div>
          <div className="ds-eyebrow" style={{ color: 'var(--site-accent)' }}>{lang === 'zh' ? '你好呀' : 'Hello there'}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: 'var(--site-text)', margin: '8px 0 18px' }}>
            {lang === 'zh' ? '我是 Jeffi' : "I'm Jeffi"}
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--site-text-soft)', margin: '0 0 16px', textWrap: 'pretty' }}>
            {lang === 'zh'
              ? '一名学生开发者，热爱把代码、游戏和动漫融合在一起。我做全栈 Web 应用、玩音游（maimai 主玩），也在打造我自己的 AI VTuber —— Elysia。'
              : "A student developer who loves blending code, games, and anime. I build full-stack web apps, main rhythm games (maimai), and I'm building my own AI VTuber — Elysia."}
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--site-text-soft)', margin: '0 0 24px', textWrap: 'pretty' }}>
            {lang === 'zh'
              ? '这个网站是我的小天地 —— 项目、游戏、音乐、动漫，还有一个能和你聊天的她。'
              : "This site is my little corner — projects, games, music, anime, and a her who can chat with you."}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Badge tone="jeffi">{lang === 'zh' ? '多伦多大学' : 'UofT Mississauga'}</Badge>
            <Badge tone="crystal">{lang === 'zh' ? '全栈开发' : 'Full-stack Dev'}</Badge>
            <Badge tone="brand">{lang === 'zh' ? 'VTuber 创作者' : 'VTuber Maker'}</Badge>
            <Badge tone="mint">{lang === 'zh' ? '音游玩家' : 'Rhythm Gamer'}</Badge>
          </div>
        </div>
        <Card tone="surface" padding="26px">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { k: lang === 'zh' ? '所在地' : 'Based in', v: lang === 'zh' ? '加拿大 · 多伦多' : 'Toronto, Canada' },
              { k: lang === 'zh' ? '专注于' : 'Focused on', v: lang === 'zh' ? 'Web + AI + 游戏' : 'Web + AI + Games' },
              { k: lang === 'zh' ? '正在学' : 'Learning', v: lang === 'zh' ? '后端 · React · Godot' : 'Backend · React · Godot' },
              { k: lang === 'zh' ? '语言' : 'Languages', v: 'English · 中文' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, paddingBottom: 12, borderBottom: i < 3 ? '1px solid var(--site-hairline)' : 'none' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--site-text-faint)' }}>{r.k}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--site-text)', textAlign: 'right' }}>{r.v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

const PROJECTS = [
  { cat: 'web', status: 'live', featured: true, ic: 'cap', grad: 'linear-gradient(135deg,#2dd4bf,#0d9488)', tags: ['React', 'Node.js', 'Python', 'DeepSeek AI', 'Git', 'Jira'], live: 'https://utmcssaaiagent.com/',
    en: { t: 'UTMCSSA Web Platform', s: 'Live', o: 'Full-stack student platform with an AI assistant', d: 'A full-stack platform for the UTMCSSA student association supporting incoming Chinese international students at UofT. Python backend for course data, a React + Node.js front end, and an integrated DeepSeek AI assistant — built collaboratively with Git & Jira.' },
    zh: { t: 'UTMCSSA 网络平台', s: '已上线', o: '带 AI 助手的全栈学生平台', d: '为多伦多大学密西沙加分校中国学生学者联合会打造的全栈平台。Python 后端实现课程数据接口，前端采用 React + Node.js，并集成 DeepSeek AI 助手。团队使用 Git 与 Jira 协作。' } },
  { cat: 'web', status: 'wip', ic: 'music', grad: 'linear-gradient(135deg,#8fd3e8,#2dd4bf)', tags: ['React', 'JavaScript', 'CSS', 'Public API'], live: '#',
    en: { t: 'maimai Fan Hub', s: 'In Progress', o: 'Rating optimizer & song catalog', d: 'A fan site for maimai DX players — a real-time rating optimizer, the full song catalog with difficulty filters, player stats, and a "maimai Wrapped" year-in-review.' },
    zh: { t: 'maimai 粉丝站', s: '开发中', o: 'Rating 优化器与歌曲库', d: '专为 maimai DX 玩家打造 —— 实时 Rating 优化器、带难度筛选的完整歌曲库、玩家数据统计及年度回顾功能。' } },
  { cat: 'tool', status: 'live', ic: 'box', grad: 'linear-gradient(135deg,#c4a8e8,#8fd3e8)', tags: ['ArcGIS Pro', 'ERDAS', 'Remote Sensing', 'GIS', 'DJI Mini 4 Pro'], live: '#',
    en: { t: 'Drone Survey Project', s: 'Completed', o: 'Remote-sensing campus mapping', d: 'High-resolution drone imagery of campus for remote-sensing analysis — 3D building models, vegetation maps, and GIS land-cover analysis.' },
    zh: { t: '无人机测绘项目', s: '已完成', o: '遥感校园测绘与三维建模', d: '采集校园高分辨率无人机影像用于遥感分析 —— 三维建筑模型、植被分布图与 GIS 地表覆盖分析。' } },
  { cat: 'game', status: 'live', ic: 'swords', grad: 'linear-gradient(135deg,#a8ddd0,#8fd3e8)', tags: ['Unity', 'JavaScript', 'Game Dev', 'Agile'], live: '#',
    en: { t: '2D Adventure Game', s: 'Completed', o: 'Unity course project — led delivery', d: 'A 2D adventure built with Unity + JavaScript for a course project. Led core gameplay and UI delivery in an agile workflow after much of the team withdrew.' },
    zh: { t: '2D 冒险游戏', s: '已完成', o: 'Unity 课程项目 · 主导交付', d: '使用 Unity + JavaScript 开发的 2D 冒险课程项目。在团队大幅缩减后主导完成核心玩法与 UI 交付。' } },
  { cat: 'game', status: 'soon', ic: 'gamepad', grad: 'linear-gradient(135deg,#5eead4,#0d9488)', tags: ['Godot 4', 'GDScript', 'Game Dev', 'Collab'], live: '#',
    en: { t: 'Fan Game Project', s: 'Coming Soon', o: '2D platformer in Godot 4', d: 'A 2D fan game inspired by a favourite anime — platformer mechanics with original collaborator art. Built with Godot 4, planned for itch.io.' },
    zh: { t: '同人游戏项目', s: '即将推出', o: 'Godot 4 的 2D 平台游戏', d: '受最爱动漫启发的 2D 同人游戏 —— 横版平台机制与合作者原创美术。使用 Godot 4 开发，计划在 itch.io 发布。' } },
  { cat: 'web', status: 'live', ic: 'sparkles', grad: 'linear-gradient(135deg,#ff9ecb,#c4a8e8)', tags: ['HTML', 'CSS', 'JavaScript', 'Design System'], live: '#',
    en: { t: 'This Portfolio', s: 'Live', o: 'Bilingual portfolio + embedded AI VTuber', d: "The site you're on — a bilingual portfolio with a music player, gallery, and an embedded AI VTuber. Built on the Elysia × Jeffi design system." },
    zh: { t: '个人作品集网站', s: '已上线', o: '双语作品集 + 内嵌 AI VTuber', d: '就是你正在浏览的网站 —— 双语作品集，含音乐播放器、相册与内嵌 AI VTuber。基于 Elysia × Jeffi 设计系统构建。' } },
];

const STATUS_C = { live: 'var(--success)', wip: '#f0a93a', soon: 'var(--site-text-faint)' };

// inline .execute() loader shown inside the expanding detail block
function MiniExec({ label, lang }) {
  const [n, setN] = React.useState(0);
  const lines = ['$ open ' + JSON.stringify(label), '> compiling view…', '> .execute() ✓'];
  React.useEffect(() => {
    const ts = lines.map((_, i) => setTimeout(() => setN(i + 1), 110 + i * 230));
    return () => ts.forEach(clearTimeout);
  }, []);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '20px 0 24px' }}>
      <svg className="pj-spin" width="38" height="38" viewBox="0 0 100 100" fill="none" stroke="var(--site-accent)" strokeWidth="3" strokeLinejoin="round" style={{ flexShrink: 0, filter: 'drop-shadow(0 0 10px rgba(45,212,191,.55))' }}>
        <polygon points="50,8 84,40 50,92 16,40" /><polygon points="50,8 67,40 50,56 33,40" opacity="0.85" /><circle cx="50" cy="40" r="3" fill="var(--site-accent)" stroke="none" />
      </svg>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: 1.8, color: 'var(--site-text-muted)' }}>
        {lines.slice(0, n).map((l, i) => <div key={i} style={{ color: i === 2 ? 'var(--success)' : (i === 0 ? 'var(--site-accent)' : 'inherit') }}>{l}</div>)}
        {n < lines.length && <span style={{ color: 'var(--site-accent)', animation: 'pjBlink 1s steps(1) infinite' }}>█</span>}
      </div>
    </div>
  );
}

function ProjItem({ p, lang, featured, openId, loadId, onToggle }) {
  const d = p[lang === 'zh' ? 'zh' : 'en'];
  const isOpen = openId === p.id; const isLoad = loadId === p.id;
  return (
    <article className="pj" onClick={() => onToggle(p)} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onToggle(p); } }}
      style={{ breakInside: 'avoid', WebkitColumnBreakInside: 'avoid', marginBottom: featured ? 0 : 22, cursor: 'pointer', position: 'relative', paddingTop: 18, borderTop: '1px solid var(--site-hairline)' }}>
      <div style={{ position: 'absolute', top: -1, left: 0, width: featured ? 72 : 44, height: 2, background: p.grad }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ color: 'var(--site-text-soft)', display: 'inline-flex' }}><window.Icon name={p.ic} size={featured ? 22 : 18} /></span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: STATUS_C[p.status] }}>{d.s}</span>
        <span style={{ marginLeft: 'auto', color: 'var(--site-text-faint)', display: 'inline-flex', transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform .3s var(--ease-out)' }}><window.Icon name="code" size={15} /></span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: featured ? 'clamp(1.6rem,3vw,2.3rem)' : '1.25rem', letterSpacing: '-0.03em', color: 'var(--site-text)', margin: '0 0 6px', lineHeight: 1.05 }}>{d.t}</h3>
      <p style={{ fontSize: featured ? '1rem' : '0.9rem', color: 'var(--site-text-muted)', margin: 0, lineHeight: 1.5 }}>{d.o}</p>
      <div style={{ overflow: 'hidden', maxHeight: (isOpen || isLoad) ? 340 : 0, opacity: (isOpen || isLoad) ? 1 : 0, transition: 'max-height .45s var(--ease-out), opacity .3s' }}>
        {isLoad
          ? <MiniExec label={d.t} lang={lang} />
          : <div style={{ padding: '14px 0 6px' }}>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--site-text-soft)', margin: '0 0 14px', textWrap: 'pretty' }}>{d.d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 14 }}>
                {p.tags.map(t => <i key={t} style={{ fontStyle: 'normal', fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--site-text-muted)', padding: '3px 9px', border: '1px solid var(--site-hairline)', borderRadius: 3 }}>{t}</i>)}
              </div>
              {p.live && p.live !== '#' && <a href={p.live} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--site-accent)', textDecoration: 'none', borderBottom: '1px solid var(--site-accent)', paddingBottom: 2 }}>{lang === 'zh' ? '访问线上' : 'Visit live'} ↗</a>}
            </div>}
      </div>
    </article>
  );
}

function Projects({ lang }) {
  const [filter, setFilter] = React.useState('all');
  const [openId, setOpenId] = React.useState(null);
  const [loadId, setLoadId] = React.useState(null);
  const timer = React.useRef(null);
  const filters = [
    { k: 'all', en: 'All', zh: '全部' }, { k: 'web', en: 'Web', zh: '网页' },
    { k: 'game', en: 'Games', zh: '游戏' }, { k: 'tool', en: 'Tools', zh: '工具' },
  ];
  const items = PROJECTS.map((p, i) => ({ ...p, id: p.id || ('p' + i) }));
  const toggle = (p) => {
    clearTimeout(timer.current);
    if (openId === p.id) { setOpenId(null); return; }
    setOpenId(null); setLoadId(p.id);
    timer.current = setTimeout(() => { setLoadId(null); setOpenId(p.id); }, 920);
  };
  const featured = filter === 'all' ? items.find(p => p.featured) : null;
  const rest = (filter === 'all' ? items.filter(p => !p.featured) : items.filter(p => p.cat === filter));

  return (
    <section id="projects" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <style>{'@keyframes pjBlink{50%{opacity:0}}@keyframes pjSpin{to{transform:rotate(360deg)}}.pj-spin{animation:pjSpin 2.4s linear infinite;transform-origin:50% 50%}.pj:hover h3{color:var(--site-accent)!important}.pj h3{transition:color .25s}'}</style>
      <window.SecHead n="01" eyebrow={lang === 'zh' ? '我的作品' : 'My Work'} title={lang === 'zh' ? '项目' : 'Projects'} kana="プロジェクト" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'clamp(26px,4vh,40px)' }}>
        {filters.map(f => <Tag key={f.k} dark active={filter === f.k} onClick={() => { setFilter(f.k); setOpenId(null); }}>{lang === 'zh' ? f.zh : f.en}</Tag>)}
      </div>
      {featured && (
        <div style={{ marginBottom: 30, paddingBottom: 30, borderBottom: '1px solid var(--site-hairline)' }}>
          <ProjItem p={featured} lang={lang} featured openId={openId} loadId={loadId} onToggle={toggle} />
        </div>
      )}
      <div style={{ columnWidth: '300px', columnGap: '40px' }}>
        {rest.map(p => <ProjItem key={p.id} p={p} lang={lang} openId={openId} loadId={loadId} onToggle={toggle} />)}
      </div>
    </section>
  );
}
Object.assign(window, { About, Projects });
