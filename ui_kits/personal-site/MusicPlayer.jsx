// MusicPlayer — editorial tracklist (liner-notes style) + persistent mini-player bar.
// No fake album art, no spinning disc — text-forward, accent used sparingly.
const { Card, IconButton } = window.ElysiaJeffiDesignSystem_f13e8e;

const TRACKS = [
  { title: 'JANE DOE', artist: 'Kenshi Yonezu, Hikaru Utada', src: 'SPOTIFY', len: 218, bpm: 128 },
  { title: '铁花飞', artist: 'Mili', src: 'NETEASE', len: 252, bpm: 150 },
  { title: 'Hopes and Dreams', artist: 'Toby Fox', src: 'YOUTUBE', len: 174, bpm: 115 },
  { title: 'Garakuta', artist: 'Kenshi Yonezu', src: 'SPOTIFY', len: 201, bpm: 140 },
];
const SRC_COLOR = { SPOTIFY: '#1DB954', NETEASE: '#C20C0C', YOUTUBE: '#FF0000', BILIBILI: '#00AEEC' };
const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

function Eq({ color = 'var(--site-accent)' }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 2, height: 12 }}>
      {[0,1,2].map(i => <span key={i} style={{ width: 2.5, borderRadius: 1, background: color, height: '100%', animation: `eqbar 0.6s ${i*0.13}s infinite alternate ease-in-out` }} />)}
    </span>
  );
}

function MusicSection({ lang, cur, setCur, playing, setPlaying, progress }) {
  const t = TRACKS[cur];
  return (
    <section id="music" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)' }}>
      <window.SecHead n="03" eyebrow={lang === 'zh' ? '我在听的' : 'Things I Listen To'} title={lang === 'zh' ? '音乐' : 'Music'} kana="ミュージック" />
      <style>{`@keyframes eqbar{from{height:25%}to{height:100%}}`}</style>

      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* now playing */}
        <Card tone="surface" padding="clamp(22px,3vw,30px)" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14, fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--site-text-faint)' }}>
            {playing ? <Eq /> : <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--site-text-faint)' }} />}
            {lang === 'zh' ? '正在播放' : 'Now Playing'}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginLeft: 'auto', color: SRC_COLOR[t.src] }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: SRC_COLOR[t.src] }} />{t.src}
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem,3.5vw,2.1rem)', letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--site-text)' }}>{t.title}</div>
          <div style={{ fontSize: '0.95rem', color: 'var(--site-text-muted)', marginTop: 5 }}>{t.artist}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <IconButton variant="ghost" size="sm" label="Prev" onClick={() => setCur((cur-1+TRACKS.length)%TRACKS.length)}>⏮</IconButton>
              <IconButton variant="solid" label="Play" onClick={() => setPlaying(!playing)}>{playing ? '❚❚' : '▶'}</IconButton>
              <IconButton variant="ghost" size="sm" label="Next" onClick={() => setCur((cur+1)%TRACKS.length)}>⏭</IconButton>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--site-text-faint)', flexShrink: 0 }}>{fmt(Math.floor(t.len*progress))}</span>
            <div style={{ flex: 1, height: 3, background: 'var(--site-hairline)', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress*100}%`, background: 'var(--site-accent)' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--site-text-faint)', flexShrink: 0 }}>{fmt(t.len)}</span>
          </div>
        </Card>

        {/* tracklist */}
        <Card tone="surface" padding="6px">
          {TRACKS.map((tr, i) => {
            const on = i === cur;
            return (
              <div key={i} onClick={() => setCur(i)} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '13px 16px',
                cursor: 'pointer', position: 'relative',
                borderRadius: 'var(--radius-xs)',
                background: on ? 'var(--site-row-hover)' : 'transparent',
                boxShadow: on ? 'inset 2px 0 0 var(--site-accent)' : 'none',
                transition: 'background var(--dur) var(--ease)',
              }}
              onMouseEnter={(e)=>{ if(!on) e.currentTarget.style.background='var(--site-row-hover)'; }}
              onMouseLeave={(e)=>{ if(!on) e.currentTarget.style.background='transparent'; }}>
                <span style={{ width: 22, display: 'flex', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: on ? 'var(--site-accent)' : 'var(--site-text-faint)' }}>
                  {on && playing ? <Eq /> : String(i+1).padStart(2,'0')}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--site-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tr.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--site-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tr.artist}</div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.64rem', letterSpacing: '0.08em', color: 'var(--site-text-faint)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: SRC_COLOR[tr.src] }} />{tr.src}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--site-text-faint)', width: 38, textAlign: 'right' }}>{fmt(tr.len)}</span>
              </div>
            );
          })}
        </Card>
      </div>
    </section>
  );
}

function MiniPlayer({ cur, setCur, playing, setPlaying, progress }) {
  const t = TRACKS[cur];
  return (
    <div style={{
      position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: 18, zIndex: 60,
      width: 'min(540px, calc(100vw - 32px))',
      display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 16px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(20,13,26,0.86)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 16px 48px rgba(0,0,0,0.45)',
    }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: SRC_COLOR[t.src], flexShrink: 0, boxShadow: `0 0 7px ${SRC_COLOR[t.src]}` }} />
      <div style={{ minWidth: 0, width: 150 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.84rem', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.title}</div>
        <div style={{ fontSize: '0.68rem', color: 'rgba(255,233,244,0.55)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.artist}</div>
      </div>
      <IconButton variant="dark" size="sm" label="Prev" onClick={() => setCur((cur-1+TRACKS.length)%TRACKS.length)}>⏮</IconButton>
      <IconButton variant="solid" size="sm" label="Play" onClick={() => setPlaying(!playing)}>{playing ? '❚❚' : '▶'}</IconButton>
      <IconButton variant="dark" size="sm" label="Next" onClick={() => setCur((cur+1)%TRACKS.length)}>⏭</IconButton>
      <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.14)', borderRadius: 999, overflow: 'hidden', minWidth: 40 }}>
        <div style={{ height: '100%', width: `${progress*100}%`, background: 'var(--site-accent)' }} />
      </div>
    </div>
  );
}
Object.assign(window, { MusicSection, MiniPlayer, TRACKS });
