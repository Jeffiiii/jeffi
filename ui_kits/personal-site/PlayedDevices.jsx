// PlayedDevices — Jeffi's desk. A monitor, a phone, and a book on a bookstand
// sit together in one scene. Click a device and the "camera" zooms in close,
// like you're sitting down to use it; click a game icon for its detail.
// (Extensible: add desk props — keyboard, mug, figures — around the items later.)
const PC = [
  { id: 'apex', n: 'Apex Legends', ic: 'crosshair', c: '#e0413a', genre: 'Battle Royale', meta: 'Diamond', d: 'Fast, vertical hero battle-royale — mained to Diamond. Movement is the whole game.' },
  { id: 'poe2', n: 'Path of Exile 2', ic: 'dice', c: '#4a8ebe', genre: 'Dark-fantasy ARPG', meta: '600h+', d: 'Endless build-crafting and loot in a brutal world. The skill-gem system is a rabbit hole I never left.' },
  { id: 'mhw', n: 'Monster Hunter: World', ic: 'swords', c: '#e8620a', genre: 'Action · Co-op', meta: '450h+', d: 'Hunting colossal beasts with friends — every weapon is a different game.' },
  { id: 'r6', n: 'Rainbow Six Siege', ic: 'crosshair', c: '#ff6b00', genre: 'Tactical FPS', meta: '700h+', d: 'Destructible, methodical 5v5. Reading the round is everything.' },
  { id: 'cs2', n: 'Counter-Strike 2', ic: 'crosshair', c: '#e8c840', genre: 'Tactical FPS', meta: '450h+', d: 'The classic — clutch or get clutched. Pure mechanics and nerve.' },
  { id: 'wf', n: 'Warframe', ic: 'target', c: '#00c4c4', genre: 'Action RPG', meta: '1200h+', d: 'Space ninjas and an endless grind I happily disappear into.' },
];
const MOBILE = [
  { id: 'pjsk', n: 'Project Sekai', ic: 'music', c: '#33ccbb', genre: 'Rhythm', meta: '★ Fav', d: 'Colorful Stage — my pocket rhythm fix, feat. Hatsune Miku and the units I adore.' },
  { id: 'ak', n: 'Arknights', ic: 'target', c: '#e8820a', genre: 'Tower Defense', meta: 'Gacha', d: '明日方舟 — tense tower-defense with stunning operator design.' },
  { id: 'hsr', n: 'Honkai: Star Rail', ic: 'sparkles', c: '#ffb830', genre: 'Turn-based RPG', meta: 'Gacha', d: 'A cosmic turn-based RPG — gorgeous worlds and a cast I keep pulling for.' },
];
const BOOK = [
  { id: 'maimai', n: 'maimai DX', ic: 'music', c: '#ff1483', genre: 'Arcade Rhythm', meta: '★ Main · 15,303', d: 'My main — a SEGA arcade cabinet. Rating 15,303 and still climbing.', link: 'https://aquadx.net/u/Jeffi/mai2' },
  { id: 'terra', n: 'Terraria & Minecraft', ic: 'pickaxe', c: '#5aad29', genre: 'Sandbox · Survival', meta: '∞', d: 'Build anything, forever. The comfort games I always come back to.' },
  { id: 'wow', n: 'WoW Classic', ic: 'swords', c: '#c8a84b', genre: 'MMORPG · TBC', meta: 'TBC', d: 'Azeroth in its Burning Crusade days — the world that taught me what an MMO could be.' },
];
const POS = { book: [20, 60], pc: [48, 44], phone: [74, 62] };
const ZOOM = 2.6;

function GTile({ g, onPick, kind }) {
  const I = window.Icon;
  return (
    <button className={'g-tile ' + kind} onClick={(e) => { e.stopPropagation(); onPick(g); }} title={g.n}>
      <span className="g-ic" style={{ background: g.c }}>{I && <I name={g.ic} size={kind === 'app' ? 21 : 19} stroke="#fff" strokeWidth={1.8} />}</span>
      <span className="g-name">{g.n}</span>
    </button>
  );
}

function PlayedDevices({ lang }) {
  const [focus, setFocus] = React.useState(null);
  const [sel, setSel] = React.useState(null);
  const T = (en, zh) => (lang === 'zh' ? zh : en);
  const cam = focus ? `translate(${(50 - POS[focus][0]) * ZOOM}%, ${(50 - POS[focus][1]) * ZOOM}%) scale(${ZOOM})` : 'none';
  const item = (id, extra) => ({
    className: 'desk-item ' + id + (focus === id ? ' is-focus' : ''),
    style: { left: POS[id][0] + '%', top: POS[id][1] + '%', ...extra },
    onClick: (e) => { e.stopPropagation(); setFocus(id); },
  });

  return (
    <div className="desk-scene" onClick={() => { if (!sel) setFocus(null); }}>
      <style>{`
        .desk-scene{position:relative;height:clamp(440px,56vh,580px);border-radius:18px;overflow:hidden;cursor:default;
          border:1px solid var(--site-card-border);
          background:linear-gradient(180deg,#0b0913 0%,#100d1b 44%,#1c1626 44%,#15111f 100%);}
        .desk-scene::before{content:'';position:absolute;left:0;right:0;top:44%;height:2px;
          background:linear-gradient(90deg,transparent,rgba(45,212,191,.22),transparent);box-shadow:0 0 14px rgba(45,212,191,.13);}
        .desk-grid{position:absolute;left:0;right:0;top:0;height:44%;pointer-events:none;opacity:.5;
          background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size:42px 42px;-webkit-mask-image:linear-gradient(#000,transparent);mask-image:linear-gradient(#000,transparent);}
        .desk-cam{position:absolute;inset:0;transform-origin:50% 50%;transition:transform .65s cubic-bezier(.5,0,.2,1);}
        .desk-item{position:absolute;transform:translate(-50%,-50%);transition:filter .4s;cursor:pointer;}
        .desk-scene:not(.zoomed) .desk-item:hover{filter:drop-shadow(0 0 20px rgba(45,212,191,.4));}
        .desk-item .shadow{position:absolute;left:50%;bottom:-12px;transform:translateX(-50%);width:78%;height:20px;border-radius:50%;
          background:radial-gradient(closest-side,rgba(0,0,0,.55),transparent);filter:blur(3px);z-index:-1;}
        .desk-item:not(.is-focus) .scr{pointer-events:none;}
        .di-label{position:absolute;left:50%;bottom:-30px;transform:translateX(-50%);font-family:var(--font-mono);font-size:.66rem;letter-spacing:.2em;text-transform:uppercase;color:var(--site-text-faint);white-space:nowrap;}
        /* ── monitor ── */
        .m-screen{width:300px;aspect-ratio:16/10;border-radius:12px;background:#06060d;border:9px solid #0d0c13;position:relative;overflow:hidden;
          box-shadow:0 24px 54px rgba(0,0,0,.6),inset 0 0 0 1px rgba(255,255,255,.05),0 0 0 1px #000;}
        .m-wall{position:absolute;inset:0;background:radial-gradient(120% 90% at 72% 0,#1a4b48,#0c1322 58%,#080810);padding:14px 14px 0;}
        .m-glass{position:absolute;inset:0;pointer-events:none;background:linear-gradient(118deg,rgba(255,255,255,.1) 0 14%,transparent 26%);}
        .m-icons{display:grid;grid-template-columns:repeat(3,1fr);gap:12px 6px;}
        .m-task{position:absolute;left:0;right:0;bottom:0;height:26px;background:rgba(8,10,18,.72);backdrop-filter:blur(6px);border-top:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:8px;padding:0 10px;}
        .m-task .st{width:13px;height:13px;border-radius:3px;background:var(--site-accent);opacity:.85;}
        .m-task .clk{margin-left:auto;font-family:var(--font-mono);font-size:.54rem;color:rgba(255,255,255,.5);}
        .m-neck{width:26px;height:34px;margin:-3px auto 0;background:linear-gradient(#1a1822,#0c0b12);}
        .m-base{width:128px;height:13px;margin:0 auto;border-radius:50%/9px;background:linear-gradient(#15131c,#0c0b12);box-shadow:0 12px 22px rgba(0,0,0,.5);}
        /* ── phone ── */
        .ph-tilt{transform:rotate(-5deg);}
        .ph-frame{width:128px;aspect-ratio:1/2.06;border-radius:24px;background:linear-gradient(135deg,#1c1a24,#0e0d13);padding:7px;position:relative;
          box-shadow:0 20px 48px rgba(0,0,0,.55),inset 0 0 0 1px rgba(255,255,255,.06);}
        .ph-frame::before,.ph-frame::after{content:'';position:absolute;left:-2px;width:2px;border-radius:2px;background:#26232e;}
        .ph-frame::before{top:54px;height:26px;} .ph-frame::after{top:90px;height:40px;}
        .ph-screen{position:absolute;inset:7px;border-radius:18px;overflow:hidden;background:radial-gradient(120% 70% at 50% 0,#2a1a5a,#140c30 60%,#0a0820);padding:22px 11px 12px;}
        .ph-glass{position:absolute;inset:0;pointer-events:none;background:linear-gradient(125deg,rgba(255,255,255,.12) 0 12%,transparent 24%);}
        .ph-notch{position:absolute;top:8px;left:50%;transform:translateX(-50%);width:42px;height:12px;border-radius:0 0 9px 9px;background:#0e0d13;z-index:3;}
        .ph-status{position:absolute;top:6px;left:13px;right:13px;display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:.5rem;color:rgba(255,255,255,.6);z-index:2;}
        .app-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:13px 4px;margin-top:6px;}
        .ph-home{position:absolute;bottom:7px;left:50%;transform:translateX(-50%);width:40px;height:4px;border-radius:3px;background:rgba(255,255,255,.4);}
        .ph-stand{position:absolute;left:50%;bottom:-8px;transform:translateX(-50%);width:70px;height:20px;border-radius:0 0 8px 8px;
          background:linear-gradient(#15131c,#0c0b12);box-shadow:0 10px 18px rgba(0,0,0,.45);z-index:-1;}
        /* ── tiles ── */
        .g-tile{display:flex;flex-direction:column;align-items:center;gap:5px;background:none;border:none;cursor:pointer;padding:2px;}
        .g-ic{display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.4);}
        .g-tile.desk .g-ic{width:38px;height:38px;border-radius:9px;}
        .g-tile.app .g-ic{width:42px;height:42px;border-radius:11px;}
        .g-name{font-family:var(--font-jp);font-size:.5rem;font-weight:600;color:rgba(255,255,255,.82);text-align:center;line-height:1.15;max-width:52px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
        .g-tile.app .g-name{max-width:44px;}
        .g-tile:hover .g-ic{transform:translateY(-2px);transition:transform .2s;}
        /* ── book on stand ── */
        .bookstand{position:relative;width:172px;height:206px;transform:rotate(-3deg);}
        .bs-ledge{position:absolute;left:-8px;right:-8px;bottom:-6px;height:16px;border-radius:5px;background:linear-gradient(#2a2233,#15111d);box-shadow:0 12px 20px rgba(0,0,0,.5);}
        .bs-back{position:absolute;left:8px;right:8px;bottom:6px;top:-6px;border-radius:6px;background:linear-gradient(#221b2c,#140f1c);transform:perspective(400px) rotateX(6deg);transform-origin:bottom;}
        .book-wrap{position:absolute;inset:6px 10px 14px;transform-style:preserve-3d;}
        .book-cover{position:absolute;inset:0;border-radius:5px 9px 9px 5px;background:linear-gradient(135deg,#3a2470,#1a0f44);
          border:1px solid rgba(255,158,203,.25);box-shadow:0 10px 30px rgba(0,0,0,.5),inset 7px 0 0 rgba(0,0,0,.32);
          display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:18px;
          transform-origin:left center;transition:transform .6s var(--ease-out),opacity .4s;backface-visibility:hidden;}
        .desk-item.book.is-focus .book-cover{transform:rotateY(-122deg);opacity:.2;}
        .book-cover .bt{font-family:var(--font-editorial);font-weight:800;font-size:.98rem;color:#ffe9f4;text-align:center;letter-spacing:-.02em;}
        .book-cover .bk{font-family:var(--font-jp);font-size:.66rem;letter-spacing:.3em;color:var(--elysia-300);}
        .book-pages{position:absolute;inset:0;border-radius:5px 9px 9px 5px;background:#fdf6ef;box-shadow:0 10px 30px rgba(0,0,0,.5);
          padding:15px 13px;display:flex;flex-direction:column;gap:6px;opacity:0;transition:opacity .4s .18s;overflow:hidden;}
        .desk-item.book.is-focus .book-pages{opacity:1;}
        .bp-title{font-family:var(--font-editorial);font-weight:700;font-size:.74rem;color:#3a1f38;border-bottom:1px solid rgba(58,31,56,.18);padding-bottom:5px;}
        .bp-row{display:flex;align-items:center;gap:9px;background:none;border:none;cursor:pointer;padding:5px 4px;border-radius:6px;text-align:left;width:100%;}
        .bp-row:hover{background:rgba(214,51,122,.08);}
        .bp-ic{width:25px;height:25px;border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .bp-n{font-family:var(--font-jp);font-weight:700;font-size:.72rem;color:#3a1f38;line-height:1.1;}
        .bp-g{font-family:var(--font-mono);font-size:.54rem;color:#9a6f90;}
        /* zoom-out hint + detail */
        .desk-back{position:absolute;top:12px;left:12px;z-index:25;font-family:var(--font-mono);font-size:.7rem;letter-spacing:.06em;
          color:var(--site-text-soft);background:rgba(10,8,16,.7);border:1px solid var(--site-card-border);border-radius:8px;padding:7px 12px;cursor:pointer;backdrop-filter:blur(8px);}
        .pd-detail{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:30;background:rgba(8,6,12,.62);backdrop-filter:blur(7px);animation:pdIn .25s ease;}
        @keyframes pdIn{from{opacity:0}to{opacity:1}}
        .pd-card{width:min(420px,90%);background:var(--glass-bg-dark);border:1px solid var(--site-card-border);border-radius:16px;padding:24px;box-shadow:0 24px 70px rgba(0,0,0,.5);}
        @media(max-width:640px){.m-screen{width:240px}.bookstand{transform:scale(.85) rotate(-3deg)}}
        @media(max-width:480px){.m-screen{width:184px}.ph-frame{width:104px}.bookstand{transform:scale(.66) rotate(-3deg)}.di-label{font-size:.56rem;bottom:-22px}.desk-scene{height:clamp(380px,52vh,520px)}}
      `}</style>

      <div className={'desk-cam'} style={{ transform: cam }}>
        <div className="desk-grid"></div>

        {/* book — left, on a stand */}
        <div {...item('book')} onMouseEnter={() => {}}>
          <div className="bookstand">
            <div className="bs-back"></div>
            <div className="book-wrap">
              <div className="book-pages scr">
                <div className="bp-title">{T('Other Platforms', '其他平台')}</div>
                {BOOK.map(g => (
                  <button key={g.id} className="bp-row" onClick={(e) => { e.stopPropagation(); setSel(g); }}>
                    <span className="bp-ic" style={{ background: g.c }}>{window.Icon && <window.Icon name={g.ic} size={14} stroke="#fff" strokeWidth={1.9} />}</span>
                    <span><span className="bp-n">{g.n}</span><br /><span className="bp-g">{g.genre}</span></span>
                  </button>
                ))}
              </div>
              <div className="book-cover"><div className="bt">{T('Arcade & Beyond', '街机与更多')}</div><div className="bk">アーカイブ</div></div>
            </div>
            <div className="bs-ledge"></div>
          </div>
          <div className="di-label">{T('The Book', '书')}</div>
        </div>

        {/* monitor — centre */}
        <div {...item('pc')}>
          <div className="shadow"></div>
          <div className="m-screen"><div className="m-wall scr">
            <div className="m-icons">{PC.map(g => <GTile key={g.id} g={g} kind="desk" onPick={setSel} />)}</div>
            <div className="m-task"><span className="st"></span><span className="clk">jeffi@desktop</span></div>
          </div><div className="m-glass"></div></div>
          <div className="m-neck"></div><div className="m-base"></div>
          <div className="di-label">{T('Desktop', '电脑')}</div>
        </div>

        {/* phone — right, tilted on a stand */}
        <div {...item('phone')}>
          <div className="ph-stand"></div>
          <div className="ph-tilt"><div className="ph-frame"><div className="ph-notch"></div>
            <div className="ph-screen scr">
              <div className="ph-status"><span>9:41</span><span>● ● ●</span></div>
              <div className="app-grid">{MOBILE.map(g => <GTile key={g.id} g={g} kind="app" onPick={setSel} />)}</div>
              <div className="ph-home"></div>
            </div><div className="ph-glass"></div></div></div>
          <div className="di-label">{T('Mobile', '手机')}</div>
        </div>
      </div>

      {focus && <button className="desk-back" onClick={(e) => { e.stopPropagation(); setFocus(null); }}>↩ {T('zoom out', '缩小')}</button>}

      {sel && (
        <div className="pd-detail" onClick={() => setSel(null)}>
          <div className="pd-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <span style={{ width: 52, height: 52, borderRadius: 13, background: sel.c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{window.Icon && <window.Icon name={sel.ic} size={26} stroke="#fff" strokeWidth={1.8} />}</span>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: '#fff', lineHeight: 1.05 }}>{sel.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--site-text-muted)', marginTop: 3 }}>{sel.genre} · {sel.meta}</div></div>
              <button onClick={() => setSel(null)} aria-label="Close" style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--site-text-muted)', cursor: 'pointer', fontSize: '1.1rem' }}>✕</button>
            </div>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: 'var(--site-text-soft)', margin: '0 0 14px', textWrap: 'pretty' }}>{sel.d}</p>
            {sel.link && <a href={sel.link} target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--site-accent)', textDecoration: 'none', borderBottom: '1px solid var(--site-accent)', paddingBottom: 2 }}>{T('View profile', '查看档案')} ↗</a>}
          </div>
        </div>
      )}
    </div>
  );
}
window.PlayedDevices = PlayedDevices;
