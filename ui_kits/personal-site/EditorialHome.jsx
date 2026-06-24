// EditorialHome — lean editorial homepage. Rows expand or redirect via an
// .execute() loading screen; the rift (right edge) is Elysia's entry.
const PROJECTS = [
  { id: 'utmcssa', status: ['live', 'var(--success)'], tags: ['React', 'Node.js', 'Python', 'DeepSeek AI', 'Git', 'Jira'], live: 'https://utmcssaaiagent.com/',
    en: { t: 'UTMCSSA Web Platform', o: 'Full-stack student platform with an AI assistant', d: 'A full-stack platform for the UTMCSSA student association supporting incoming Chinese international students at UofT. Python backend for course data, a React + Node.js front end, and an integrated DeepSeek AI assistant — built collaboratively with Git & Jira.' },
    zh: { t: 'UTMCSSA \u7f51\u7edc\u5e73\u53f0', o: '\u5e26 AI \u52a9\u624b\u7684\u5168\u6808\u5b66\u751f\u5e73\u53f0', d: '\u4e3a\u591a\u4f26\u591a\u5927\u5b66\u5bc6\u897f\u6c99\u52a0\u5206\u6821\u4e2d\u56fd\u5b66\u751f\u5b66\u8005\u8054\u5408\u4f1a\u6253\u9020\u7684\u5168\u6808\u5e73\u53f0\u3002Python \u540e\u7aef\u5904\u7406\u8bfe\u7a0b\u6570\u636e\uff0cReact + Node.js \u524d\u7aef\uff0c\u96c6\u6210 DeepSeek AI \u52a9\u624b\u2014\u2014\u56e2\u961f\u4f7f\u7528 Git \u4e0e Jira \u534f\u4f5c\u3002' } },
  { id: 'maihub', status: ['in progress', '#f0a93a'], tags: ['React', 'JavaScript', 'CSS', 'Public API'], live: null,
    en: { t: 'maimai Fan Hub', o: 'Rating optimizer, song catalog, year-in-review', d: 'A fan site for maimai DX players \u2014 a real-time rating optimizer, the full song catalog with difficulty filters, personal player stats, and a \u201cmaimai Wrapped\u201d year-in-review.' },
    zh: { t: 'maimai \u7c89\u4e1d\u7ad9', o: 'Rating \u4f18\u5316\u5668 \u00b7 \u6b4c\u66f2\u5e93 \u00b7 \u5e74\u5ea6\u56de\u987e', d: '\u4e3a maimai DX \u73a9\u5bb6\u6253\u9020 \u2014 \u5b9e\u65f6 Rating \u4f18\u5316\u5668\u3001\u5e26\u96be\u5ea6\u7b5b\u9009\u7684\u5b8c\u6574\u6b4c\u66f2\u5e93\u3001\u4e2a\u4eba\u6570\u636e\u7edf\u8ba1\u53ca\u201cmaimai Wrapped\u201d\u5e74\u5ea6\u56de\u987e\u3002' } },
  { id: 'drone', status: ['completed', 'var(--crystal)'], tags: ['ArcGIS Pro', 'ERDAS', 'GIS', 'DJI Mini 4 Pro'], live: null,
    en: { t: 'Drone Survey Project', o: 'Remote-sensing campus mapping & 3D models', d: 'High-resolution drone imagery of campus for remote-sensing analysis \u2014 3D building models, vegetation maps, and GIS land-cover analysis delivered for environmental and campus-planning use.' },
    zh: { t: '\u65e0\u4eba\u673a\u6d4b\u7ed8\u9879\u76ee', o: '\u9065\u611f\u6821\u56ed\u6d4b\u7ed8\u4e0e\u4e09\u7ef4\u6a21\u578b', d: '\u91c7\u96c6\u6821\u56ed\u9ad8\u5206\u8fa8\u7387\u65e0\u4eba\u673a\u5f71\u50cf\u7528\u4e8e\u9065\u611f\u5206\u6790 \u2014 \u4e09\u7ef4\u5efa\u7b51\u6a21\u578b\u3001\u690d\u88ab\u5206\u5e03\u56fe\u4e0e GIS \u5730\u8868\u8986\u76d6\u5206\u6790\u3002' } },
  { id: 'adventure', status: ['completed', 'var(--crystal)'], tags: ['Unity', 'JavaScript', 'Game Dev', 'Agile'], live: null,
    en: { t: '2D Adventure Game', o: 'Unity course project — led delivery', d: 'A 2D adventure built with Unity + JavaScript for a course project. Led core gameplay and UI delivery in an agile workflow after much of the team withdrew mid-project.' },
    zh: { t: '2D \u5192\u9669\u6e38\u620f', o: 'Unity \u8bfe\u7a0b\u9879\u76ee \u2014 \u4e3b\u5bfc\u4ea4\u4ed8', d: '\u4f7f\u7528 Unity + JavaScript \u5f00\u53d1\u7684 2D \u5192\u9669\u8bfe\u7a0b\u9879\u76ee\u3002\u5728\u56e2\u961f\u5927\u5e45\u7f29\u51cf\u540e\u4e3b\u5bfc\u5b8c\u6210\u6838\u5fc3\u73a9\u6cd5\u4e0e UI \u4ea4\u4ed8\u3002' } },
  { id: 'fangame', status: ['coming soon', 'var(--site-text-faint)'], tags: ['Godot 4', 'GDScript', 'Game Dev', 'Collab'], live: null,
    en: { t: 'Fan Game Project', o: '2D platformer in Godot 4', d: 'A 2D fan game inspired by a favourite anime \u2014 platformer mechanics with original collaborator art. Built with Godot 4, planned for itch.io.' },
    zh: { t: '\u540c\u4eba\u6e38\u620f\u9879\u76ee', o: 'Godot 4 \u6253\u9020\u7684 2D \u5e73\u53f0\u6e38\u620f', d: '\u53d7\u6700\u7231\u52a8\u6f2b\u542f\u53d1\u7684 2D \u540c\u4eba\u6e38\u620f \u2014 \u6a2a\u7248\u5e73\u53f0\u673a\u5236\u4e0e\u5408\u4f5c\u8005\u539f\u521b\u7f8e\u672f\u3002\u4f7f\u7528 Godot 4\uff0c\u8ba1\u5212\u5728 itch.io \u53d1\u5e03\u3002' } },
];
const GAMES = [
  { ic: 'music', en: 'maimai DX', zh: '\u821e\u840c DX', m: 'Main' },
  { ic: 'crosshair', en: 'Apex Legends', zh: 'Apex \u82f1\u96c4', m: 'Diamond' },
  { ic: 'dice', en: 'Path of Exile 2', zh: '\u6d41\u653e\u4e4b\u8def2', m: '600h+' },
  { ic: 'swords', en: 'Monster Hunter', zh: '\u602a\u7269\u730e\u4eba', m: '450h+' },
  { ic: 'crosshair', en: 'Rainbow Six Siege', zh: '\u5f69\u8679\u516d\u53f7', m: '700h+' },
  { ic: 'pickaxe', en: 'Terraria & Minecraft', zh: '\u6cf0\u62c9\u745e\u4e9a & \u6211\u7684\u4e16\u754c', m: '\u221e' },
];
const SONGS = [['JANE DOE', 'Kenshi Yonezu, Hikaru Utada'], ['\u94c1\u82b1\u98de', 'Mili'], ['the EmpErroR', 'sasakure.UK'], ['Garakuta', 'Kenshi Yonezu']];

function Execute({ title, onDone }) {
  const [n, setN] = React.useState(0);
  const lines = [
    { c: 'cmd', s: 'jeffi@portfolio:~$ open ' + JSON.stringify(title) },
    { c: '', s: '> resolving modules\u2026' },
    { c: '', s: '> compiling view\u2026' },
    { c: 'ok', s: '> .execute() \u2713' },
  ];
  React.useEffect(() => {
    const ts = lines.map((_, i) => setTimeout(() => setN(i + 1), 130 + i * 200));
    ts.push(setTimeout(onDone, 1120));
    return () => ts.forEach(clearTimeout);
  }, []);
  return (
    <div className="exec">
      <div className="exec-box">
        <svg className="crystal-spin" width="78" height="78" viewBox="0 0 100 100" fill="none" stroke="var(--site-accent)" strokeWidth="2" strokeLinejoin="round">
          <polygon points="50,6 86,38 50,94 14,38" />
          <polygon points="50,6 68,38 50,58 32,38" opacity="0.85" />
          <path d="M14 38 H86 M50 6 L50 58 M32 38 L50 58 L68 38" opacity="0.55" />
          <circle cx="50" cy="38" r="3" fill="var(--site-accent)" stroke="none" />
        </svg>
        <div className="exec-term">
          {lines.slice(0, n).map((l, i) => <div key={i} className={'ln ' + l.c}>{l.s}</div>)}
          {n < lines.length && <div className="ln"><span className="cur">█</span></div>}
        </div>
        <div className="exec-bar"><i></i></div>
      </div>
    </div>
  );
}

function EditorialHome() {
  const [lang, setLang] = React.useState('en');
  const [theme, setTheme] = React.useState(() => { try { return localStorage.getItem('jeffi-theme') || 'dark'; } catch (e) { return 'dark'; } });
  const [open, setOpen] = React.useState(null);
  const [exec, setExec] = React.useState(null);
  const I = window.Icon;
  const L = lang === 'zh' ? 'zh' : 'en';

  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); try { localStorage.setItem('jeffi-theme', theme); } catch (e) {} }, [theme]);

  const run = (title, action) => setExec({ title, action });
  const meta = lang === 'zh' ? ['\u5f00\u53d1\u8005', '\u73a9\u5bb6', '\u97f3\u4e50', '\u52a8\u6f2b'] : ['Developer', 'Gamer', 'Music', 'Anime'];

  return (
    <React.Fragment>
      {exec && <Execute title={exec.title} onDone={() => { const a = exec.action; setExec(null); if (a) a(); }} />}
      <window.RiftPortal lang={lang} />
      <window.MiniChat lang={lang} />

      <div className="shell">
        <nav className="nav">
          <span className="lg">Jeffi<span style={{ color: 'var(--site-accent)' }}>.</span></span>
          <div className="links">
            {[['work', lang === 'zh' ? '\u9879\u76ee' : 'work'], ['play', lang === 'zh' ? '\u6e38\u620f' : 'play'], ['about', lang === 'zh' ? '\u5173\u4e8e' : 'about']].map(x => (
              <a key={x[0]} href={'#' + x[0]} onClick={(e) => { e.preventDefault(); const el = document.getElementById(x[0]); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' }); }}>{x[1]}</a>
            ))}
          </div>
          <button className="tg" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">{theme === 'dark' ? '\u2600 light' : '\u263d dark'}</button>
          <button className="tg" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} aria-label="Toggle language">{lang === 'en' ? '\u4e2d\u6587' : 'EN'}</button>
        </nav>

        <header className="hero">
          <div className="kick"><span className="ln"></span><span>{lang === 'zh' ? '\u4e2a\u4eba\u4e3b\u9875 / 2026' : 'Personal Site / 2026'}</span></div>
          <h1>{lang === 'zh' ? <span>\u6211\u9020\u7269\uff0c<br />\u4e5f\u9020\u4e86<span className="ac">\u5979\u3002</span></span> : <span>I build things,<br />and I built <span className="ac">her.</span></span>}</h1>
          <p className="lead">{lang === 'zh' ? '\u4e00\u540d\u5b66\u751f\u5f00\u53d1\u8005\uff0c\u505a\u5168\u6808 Web\u3001\u4e3b\u73a9\u97f3\u6e38\uff0c\u4e5f\u5728\u4eb2\u624b\u6253\u9020\u4e00\u4f4d AI VTuber \u2014\u2014 Elysia\u3002' : 'A student developer building full-stack web, maining maimai, and hand-crafting an AI VTuber \u2014 Elysia.'}</p>
          <div className="meta">{meta.map((m, i) => <span key={m}><b>{String(i + 1).padStart(2, '0')}</b>{m}</span>)}</div>
          <div className="rift-hint"><span className="dot"></span>{lang === 'zh' ? 'Elysia \u6b63\u4ece\u88c2\u9699\u4e2d\u6e17\u51fa \u2014 \u770b\u53f3\u8fb9 \u2192' : 'Elysia is leaking through the rift \u2014 to your right \u2192'}</div>
        </header>

        <section className="spread" id="work">
          <div className="ed-head"><span className="n">01</span><h2>{lang === 'zh' ? '\u9879\u76ee' : 'Work'}</h2><span className="kana">\u30d7\u30ed\u30b8\u30a7\u30af\u30c8</span></div>
          {PROJECTS.map((p, i) => {
            const d = p[L]; const isOpen = open === p.id;
            return (
              <div key={p.id}>
                <div className={'row' + (isOpen ? ' open' : '')} onClick={() => run(d.t, () => setOpen(isOpen ? null : p.id))} role="button" tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); run(d.t, () => setOpen(isOpen ? null : p.id)); } }}>
                  <span className="rn">{String(i + 1).padStart(2, '0')}</span>
                  <div><div className="rt">{d.t}</div><div className="ro">{d.o}</div></div>
                  <div className="rs"><span className="status" style={{ color: p.status[1] }}>{p.status[0]}</span><span className="chev">{I && <I name="code" size={16} />}</span></div>
                </div>
                <div className={'detail' + (isOpen ? ' open' : '')}>
                  <div className="detail-in">
                    <p>{d.d}</p>
                    <div className="tags">{p.tags.map(t => <i key={t}>{t}</i>)}</div>
                    {p.live && <div><button className="golink" onClick={() => run(p.live.replace(/^https?:\/\//, '').replace(/\/$/, ''), () => window.open(p.live, '_blank', 'noopener'))}>{lang === 'zh' ? '\u8bbf\u95ee\u7ebf\u4e0a' : 'Visit live'} \u2197</button></div>}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="spread" id="play">
          <div className="ed-head"><span className="n">02</span><h2>{lang === 'zh' ? '\u6e38\u620f\u4e0e\u97f3\u4e50' : 'Play & Hear'}</h2><span className="kana">\u30d7\u30ec\u30a4</span></div>
          <div className="two">
            <div>
              <div className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--site-text-faint)' }}>maimai DX \u00b7 {lang === 'zh' ? '\u8bc4\u7ea7' : 'rating'}</div>
              <div className="rating" style={{ margin: '6px 0 10px' }}>15,303</div>
              <p style={{ color: 'var(--site-text-soft)', fontSize: '0.95rem', lineHeight: 1.65, margin: '0 0 20px', maxWidth: '40ch' }}>{lang === 'zh' ? '\u8282\u594f\u662f\u8d2f\u7a7f\u7ebf \u2014 \u81ea 2024 \u5e74\u51ac\u4e3b\u73a9 maimai\uff0c\u8fd8\u6709 Apex\u3001\u6d41\u653e\u4e4b\u8def\u3001\u602a\u7269\u730e\u4eba\u3002' : 'Rhythm is the throughline \u2014 maimai since Winter 2024, plus Apex, Path of Exile, Monster Hunter.'}</p>
              {GAMES.map((g, i) => (
                <div key={i} className="list-row"><span className="li">{I && <I name={g.ic} size={17} />}</span><span className="lt">{g[L]}</span><span className="lm">{g.m}</span></div>
              ))}
            </div>
            <div>
              <div className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--site-text-faint)', marginBottom: '14px' }}>{lang === 'zh' ? '\u5faa\u73af\u64ad\u653e' : 'On Repeat'}</div>
              {SONGS.map((s, i) => (
                <div key={i} className="list-row"><span className="lm" style={{ color: 'var(--site-accent)', width: 22 }}>{String(i + 1).padStart(2, '0')}</span><span className="lt">{s[0]}</span><span className="lm">{s[1]}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="spread" id="about">
          <div className="ed-head"><span className="n">03</span><h2>{lang === 'zh' ? '\u5173\u4e8e' : 'About'}</h2><span className="kana">\u30a2\u30d0\u30a6\u30c8</span></div>
          <p style={{ fontSize: 'clamp(1.05rem,2vw,1.4rem)', lineHeight: 1.65, color: 'var(--site-text-soft)', maxWidth: '40ch', margin: 0 }}>
            {lang === 'zh' ? '\u6211\u662f Jeffi \u2014 \u591a\u4f26\u591a\u7684\u5b66\u751f\u5f00\u53d1\u8005\uff0c\u70ed\u7231\u628a\u4ee3\u7801\u3001\u6e38\u620f\u548c\u52a8\u6f2b\u878d\u5728\u4e00\u8d77\u3002\u8fd9\u4e2a\u7f51\u7ad9\u662f\u6211\u7684\u5c0f\u5929\u5730 \u2014 \u4ee5\u53ca\u4e00\u4f4d\u80fd\u548c\u4f60\u804a\u5929\u7684\u5979\u3002' : 'I\u2019m Jeffi \u2014 a student developer in Toronto who loves blending code, games, and anime. This site is my little corner \u2014 and a her who can chat with you.'}
          </p>
        </section>

        <footer>
          <span>{lang === 'zh' ? '\u7531 Jeffi \u5236\u4f5c \u00b7 2026' : 'Made by Jeffi \u00b7 2026'}</span>
          <a href="https://github.com/Jeffiiii" target="_blank" rel="noopener">GitHub</a>
          <a href="https://aquadx.net/u/Jeffi/mai2" target="_blank" rel="noopener">maimai</a>
          <button className="golink" style={{ marginLeft: 'auto' }} onClick={() => { const r = document.querySelector('.rift'); if (r) r.click(); }}>{lang === 'zh' ? '\u8fdb\u5165 Elysia \u7684\u4e16\u754c \u2192' : "Enter Elysia's world \u2192"}</button>
        </footer>
      </div>
    </React.Fragment>
  );
}
window.EditorialHome = EditorialHome;
