// MusicPlayer — HoYo/Arknights-EP-style circular visualizer + persistent mini bar.
// Real audio via window.audioEngine: a reactive frequency ring, a glowing progress
// arc you can scrub, and runtime loading of ANY local file / direct URL / YouTube link.
const { Card, IconButton } = window.ElysiaJeffiDesignSystem_f13e8e;

const TRACKS = [
  { title: 'JANE DOE', artist: 'Kenshi Yonezu, Hikaru Utada', src: 'SPOTIFY', len: 218, bpm: 128 },
  { title: '铁花飞', artist: 'Mili', src: 'NETEASE', len: 252, bpm: 150 },
  { title: 'Hopes and Dreams', artist: 'Toby Fox', src: 'YOUTUBE', len: 174, bpm: 115 },
  { title: 'Garakuta', artist: 'Kenshi Yonezu', src: 'SPOTIFY', len: 201, bpm: 140 },
];
// preset rows carry a label in `src`; runtime-added tracks carry a real media URL in `url`.
const SRC_COLOR = { SPOTIFY: '#1DB954', NETEASE: '#C20C0C', YOUTUBE: '#FF0000', BILIBILI: '#00AEEC', FILE: '#2dd4bf', URL: '#8fd3e8', LINK: '#FF0000' };
const fmt = (s) => window.audioEngine ? window.audioEngine.fmt(s) : '0:00';
const kindLabel = (t) => t.url ? (window.audioEngine.kindOf(t.url) === 'yt' ? 'LINK' : (t._file ? 'FILE' : 'URL')) : t.src;

// ── reactive circular visualizer (canvas) ──
function CircleVisualizer({ size = 260, progress, playing, accent, onSeek }) {
  const ref = React.useRef(null);
  const dragRef = React.useRef(false);
  const stateRef = React.useRef({ progress, playing });
  stateRef.current = { progress, playing };

  React.useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cvs.width = size * dpr; cvs.height = size * dpr;
    const ctx = cvs.getContext('2d'); ctx.scale(dpr, dpr);
    const BARS = 72;
    const buf = new Float32Array(BARS);
    const cx = size / 2, cy = size / 2;
    const R = size * 0.34, maxLen = size * 0.12;
    const smooth = new Float32Array(BARS);
    let raf;
    const acc = accent || '#2dd4bf';

    function draw() {
      ctx.clearRect(0, 0, size, size);
      const E = window.audioEngine;
      const lvl = E ? E.level() : 0.1;
      if (E) E.spectrum(BARS, buf);
      // base ring
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 2; ctx.stroke();
      // center glow pulse
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      g.addColorStop(0, hexA(acc, 0.10 + lvl * 0.28)); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      // radial spectrum bars
      ctx.lineCap = 'round';
      for (let i = 0; i < BARS; i++) {
        smooth[i] += ((buf[i] || 0) - smooth[i]) * 0.35;
        const v = smooth[i];
        const ang = (i / BARS) * Math.PI * 2 - Math.PI / 2;
        const r0 = R + 5, r1 = r0 + Math.max(1.5, v * maxLen);
        const ca = Math.cos(ang), sa = Math.sin(ang);
        ctx.beginPath();
        ctx.moveTo(cx + ca * r0, cy + sa * r0);
        ctx.lineTo(cx + ca * r1, cy + sa * r1);
        ctx.strokeStyle = hexA(acc, 0.35 + v * 0.65);
        ctx.lineWidth = 2.4; ctx.stroke();
      }
      // progress arc
      const p = stateRef.current.progress || 0;
      const a0 = -Math.PI / 2, a1 = a0 + p * Math.PI * 2;
      ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1);
      ctx.strokeStyle = acc; ctx.lineWidth = 3.2; ctx.lineCap = 'round';
      ctx.shadowColor = acc; ctx.shadowBlur = 14; ctx.stroke(); ctx.shadowBlur = 0;
      // handle
      const hx = cx + Math.cos(a1) * R, hy = cy + Math.sin(a1) * R;
      ctx.beginPath(); ctx.arc(hx, hy, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff'; ctx.shadowColor = acc; ctx.shadowBlur = 12; ctx.fill(); ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, [size, accent]);

  const seekFromEvent = (e) => {
    const cvs = ref.current; const rect = cvs.getBoundingClientRect();
    const px = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left - size / 2;
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top - size / 2;
    let frac = (Math.atan2(py, px) + Math.PI / 2) / (Math.PI * 2);
    if (frac < 0) frac += 1;
    onSeek && onSeek(frac);
  };
  return (
    <canvas ref={ref} style={{ width: size, height: size, cursor: 'pointer', touchAction: 'none' }}
      onPointerDown={(e) => { dragRef.current = true; e.currentTarget.setPointerCapture(e.pointerId); seekFromEvent(e); }}
      onPointerMove={(e) => { if (dragRef.current) seekFromEvent(e); }}
      onPointerUp={() => { dragRef.current = false; }} />
  );
}

function hexA(hex, a) {
  if (hex[0] !== '#') return hex;
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

// ── runtime loader: file pick OR paste any direct/YouTube URL ──
function AddTrack({ lang, onAdd }) {
  const [openInput, setOpenInput] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const fileRef = React.useRef(null);
  const pick = (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    onAdd({ title: f.name.replace(/\.[^.]+$/, ''), artist: lang === 'zh' ? '本地文件' : 'Local file', url: URL.createObjectURL(f), _file: true, bpm: 120 });
  };
  const addUrl = () => {
    const u = url.trim(); if (!u) return;
    const yt = window.audioEngine.kindOf(u) === 'yt';
    onAdd({ title: yt ? 'YouTube' : (u.split('/').pop() || 'Track').split('?')[0], artist: yt ? (lang === 'zh' ? '链接' : 'Link') : (lang === 'zh' ? '网络音频' : 'Web audio'), url: u, bpm: 120 });
    setUrl(''); setOpenInput(false);
  };
  return (
    <div style={{ marginTop: 12 }}>
      {!openInput ? (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={() => fileRef.current.click()} style={loaderBtn}>+ {lang === 'zh' ? '本地文件' : 'Local file'}</button>
          <button onClick={() => setOpenInput(true)} style={loaderBtn}>{lang === 'zh' ? '粘贴链接' : 'Paste URL / YouTube'}</button>
          <input ref={fileRef} type="file" accept="audio/*" onChange={pick} style={{ display: 'none' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          <input autoFocus value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') addUrl(); if (e.key === 'Escape') setOpenInput(false); }}
            placeholder={lang === 'zh' ? '音频直链或 YouTube 链接…' : 'Direct audio URL or YouTube link…'}
            style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid var(--site-card-border)', borderRadius: 'var(--radius-xs)', padding: '9px 12px', color: 'var(--site-text)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', outline: 'none' }} />
          <button onClick={addUrl} style={{ ...loaderBtn, color: '#fff', background: 'var(--site-accent)', borderColor: 'transparent' }}>{lang === 'zh' ? '加载' : 'Load'}</button>
        </div>
      )}
    </div>
  );
}
const loaderBtn = { fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.04em', color: 'var(--site-text-soft)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--site-card-border)', borderRadius: 'var(--radius-xs)', padding: '8px 13px', cursor: 'pointer' };

function MusicSection({ lang, tracks, cur, setCur, playing, progress, onToggle, onSeek, onAdd }) {
  const t = tracks[cur] || TRACKS[0];
  const accent = t.url && window.audioEngine.kindOf(t.url) === 'yt' ? '#ff4d6d' : '#2dd4bf';
  const dur = window.audioEngine ? window.audioEngine.state.duration : (t.len || 0);
  const elapsed = (progress || 0) * (dur || t.len || 0);
  return (
    <section id="music" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <window.SecHead n="03" eyebrow={lang === 'zh' ? '我在听的' : 'Things I Listen To'} title={lang === 'zh' ? '音乐' : 'Music'} kana="ミュージック" />
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* EP-style visualizer panel (always dark for drama) */}
        <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 14,
          background: 'radial-gradient(120% 100% at 50% 0%, #1a1330 0%, #120d1f 55%, #0c0814 100%)',
          border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
            background: `radial-gradient(60% 50% at 50% 42%, ${hexA(accent, 0.18)}, transparent 70%)` }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'clamp(26px,4vw,40px)' }}>
            <div style={{ position: 'relative', width: 260, height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircleVisualizer size={260} progress={progress} playing={playing} accent={accent} onSeek={onSeek} />
              <div style={{ position: 'absolute', textAlign: 'center', pointerEvents: 'none', maxWidth: 180 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: hexA(accent, 0.9), marginBottom: 8 }}>{playing ? (lang === 'zh' ? '播放中' : 'Now Playing') : (lang === 'zh' ? '已暂停' : 'Paused')}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.1, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.artist}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 18 }}>
              <button onClick={() => setCur((cur - 1 + tracks.length) % tracks.length)} style={ctrlBtn} aria-label="Prev">⏮</button>
              <button onClick={onToggle} aria-label="Play/Pause" style={{ ...ctrlBtn, width: 56, height: 56, fontSize: '1.2rem', background: accent, color: '#0c0814', boxShadow: `0 8px 24px ${hexA(accent, 0.5)}` }}>{playing ? '❚❚' : '▶'}</button>
              <button onClick={() => setCur((cur + 1) % tracks.length)} style={ctrlBtn} aria-label="Next">⏭</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 'min(300px,80%)', marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>
              <span>{fmt(elapsed)}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: SRC_COLOR[kindLabel(t)] || accent }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: SRC_COLOR[kindLabel(t)] || accent }} />{kindLabel(t)}</span>
              <span>{fmt(dur || t.len)}</span>
            </div>
          </div>
        </div>

        {/* tracklist */}
        <Card tone="surface" padding="6px">
          {tracks.map((tr, i) => {
            const on = i === cur;
            return (
              <div key={i} onClick={() => setCur(i)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 16px', cursor: 'pointer', borderRadius: 'var(--radius-xs)', background: on ? 'var(--site-row-hover)' : 'transparent', boxShadow: on ? 'inset 2px 0 0 var(--site-accent)' : 'none', transition: 'background var(--dur) var(--ease)' }}
                onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'var(--site-row-hover)'; }}
                onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ width: 22, display: 'flex', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: on ? 'var(--site-accent)' : 'var(--site-text-faint)' }}>{on && playing ? '♪' : String(i + 1).padStart(2, '0')}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--site-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tr.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--site-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tr.artist}</div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--site-text-faint)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: SRC_COLOR[kindLabel(tr)] || 'var(--site-text-faint)' }} />{kindLabel(tr)}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--site-text-faint)', width: 38, textAlign: 'right' }}>{fmt(tr.len)}</span>
              </div>
            );
          })}
          <AddTrack lang={lang} onAdd={onAdd} />
        </Card>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--site-text-faint)', textAlign: 'center', marginTop: 12 }}>
          {lang === 'zh' ? '提示：预设曲目为演示节拍 — 加载本地文件 / 直链 / YouTube 即可真正播放，并驱动节奏光标。' : 'Tip: preset rows are demo beats — load a file / direct URL / YouTube to actually play (and drive the rhythm cursor).'}
        </p>
      </div>
    </section>
  );
}
const ctrlBtn = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.95rem', transition: 'transform .15s' };

function MiniPlayer({ tracks, cur, setCur, playing, progress, onToggle }) {
  const t = tracks[cur] || TRACKS[0];
  const accent = t.url && window.audioEngine.kindOf(t.url) === 'yt' ? '#ff4d6d' : '#2dd4bf';
  return (
    <div style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: 18, zIndex: 60, width: 'min(540px, calc(100vw - 96px))', display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 16px', borderRadius: 'var(--radius-sm)', background: 'rgba(18,11,26,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 16px 48px rgba(0,0,0,0.45)' }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent, flexShrink: 0, boxShadow: `0 0 7px ${accent}` }} />
      <div style={{ minWidth: 0, width: 150 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.84rem', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.title}</div>
        <div style={{ fontSize: '0.68rem', color: 'rgba(255,233,244,0.55)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.artist}</div>
      </div>
      <button onClick={() => setCur((cur - 1 + tracks.length) % tracks.length)} style={miniBtn} aria-label="Prev">⏮</button>
      <button onClick={onToggle} style={{ ...miniBtn, background: accent, color: '#0c0814' }} aria-label="Play">{playing ? '❚❚' : '▶'}</button>
      <button onClick={() => setCur((cur + 1) % tracks.length)} style={miniBtn} aria-label="Next">⏭</button>
      <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.14)', borderRadius: 999, overflow: 'hidden', minWidth: 40 }}>
        <div style={{ height: '100%', width: `${(progress || 0) * 100}%`, background: accent }} />
      </div>
    </div>
  );
}
const miniBtn = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.72rem', flexShrink: 0 };

Object.assign(window, { MusicSection, MiniPlayer, TRACKS });
