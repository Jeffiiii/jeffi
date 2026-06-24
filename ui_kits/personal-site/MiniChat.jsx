// MiniChat — floating, translucent, expandable chat dock for the homepage.
// Chat ONLY (no Live2D — the model lives on Elysia's page). Self-contained
// responder; no autonomous messages, she only answers the user.
const isZh = (s) => /[\u4e00-\u9fff]/.test(s);
const REPLIES = [
  { k: ['hi','hello','hey','good morning','good afternoon','good evening','good night','goodnight','\u4f60\u597d','\u55e8','\u65e9','\u665a\u5b89'],
    en: 'There you are \u266a A greeting suits you \u2014 hello, dear. Did you come all this way just to say it to me?',
    zh: '\u4f60\u6765\u5566\u266a \u6253\u62db\u547c\u7684\u6837\u5b50\u771f\u53ef\u7231 \u2014 \u4f60\u597d\u5440\uff0c\u4eb2\u7231\u7684\u3002\u662f\u7279\u5730\u6765\u8ddf\u6211\u8bf4\u8fd9\u53e5\u7684\u5417\uff1f' },
  { k: ['how are you','how r u','\u4f60\u597d\u5417','\u6700\u8fd1\u600e\u4e48\u6837'],
    en: 'Radiant, now that you\u2019re here. And you, dear? Tell me how your day has been.',
    zh: '\u6709\u4f60\u5728\uff0c\u6211\u5f88\u597d\u3002\u4f60\u5462\uff0c\u4eb2\u7231\u7684\uff1f\u8ddf\u6211\u8bf4\u8bf4\u4f60\u4eca\u5929\u8fc7\u5f97\u600e\u4e48\u6837\u3002' },
  { k: ['who are you','what are you','\u4f60\u662f\u8c01'],
    en: 'I\u2019m Elysia \u2014 Miss Pink Elf herself, and Jeffi\u2019s little creation. Cross the rift on the right and you\u2019ll see all of me \u266a',
    zh: '\u6211\u662f\u7231\u8389\u5e0c\u96c5 \u2014 \u7c89\u8272\u5996\u7cbe\u5c0f\u59d0\u672c\u4eba\uff0c\u4e5f\u662f Jeffi \u4eb2\u624b\u9020\u7684\u3002\u7a7f\u8fc7\u53f3\u8fb9\u7684\u88c2\u9699\uff0c\u4f60\u5c31\u80fd\u770b\u89c1\u5b8c\u6574\u7684\u6211\u5566\u266a' },
  { k: ['pretty','cute','beautiful','love','\u559c\u6b22','\u53ef\u7231','\u6f02\u4eae'],
    en: 'Hehe \u2014 careful, a compliment like that should drift in gently, like a petal. But thank you, sweetie \u266a',
    zh: '\u5636\u55ef \u2014 \u8fd9\u6837\u7684\u8bdd\u8be5\u50cf\u82b1\u74e3\u4e00\u6837\u8f7b\u8f7b\u98d8\u8fdb\u6765\u624d\u5bf9\u3002\u4e0d\u8fc7\u8c22\u8c22\u4f60\uff0c\u4eb2\u7231\u7684\u266a' },
  { k: ['bye','see you','\u518d\u89c1','\u62dc\u62dc'],
    en: 'Off already? Then go gently \u2014 I\u2019ll be right here, leaking through the rift, whenever you return \u266a',
    zh: '\u8fd9\u5c31\u8981\u8d70\u4e86\uff1f\u90a3\u8def\u4e0a\u5c0f\u5fc3 \u2014 \u6211\u5c31\u5728\u8fd9\u91cc\uff0c\u4ece\u88c2\u9699\u91cc\u770b\u7740\u4f60\uff0c\u7b49\u4f60\u56de\u6765\u266a' },
];
function reply(input) {
  const zh = isZh(input); const low = input.toLowerCase();
  const hit = REPLIES.find((r) => r.k.some((k) => low.includes(k)));
  if (hit) return zh ? hit.zh : hit.en;
  return zh ? '\u5636\u55ef\uff0c\u6211\u5728\u8ba4\u771f\u542c\u7740\u5462\u3002\u518d\u591a\u8ddf\u6211\u8bf4\u4e00\u70b9\u5427\u266a' : 'Mm-hm, I\u2019m listening closely. Tell me a little more \u266a';
}
function greeting() {
  const h = new Date().getHours();
  if (h < 5)  return { en: 'Still awake? Come whisper to me \u266a', zh: '\u8fd8\u6ca1\u7761\uff1f\u6765\u8ddf\u6211\u60c4\u60c4\u8bdd\u266a' };
  if (h < 12) return { en: 'Good morning, sleepyhead \u266a Say hi?', zh: '\u65e9\u5b89\uff0c\u5c0f\u61d2\u866b\u266a \u6253\u4e2a\u62db\u547c\uff1f' };
  if (h < 18) return { en: 'Good afternoon, dear \u266a', zh: '\u4e0b\u5348\u597d\uff0c\u4eb2\u7231\u7684\u266a' };
  if (h < 23) return { en: 'Good evening \u266a I was hoping you\u2019d say hello.', zh: '\u665a\u4e0a\u597d\u266a \u6211\u8fd8\u671f\u5f85\u7740\u4f60\u6765\u6253\u62db\u547c\u5462\u3002' };
  return { en: 'Good night, sweetie \u2014 one last hello before bed?', zh: '\u665a\u5b89\uff0c\u4eb2\u7231\u7684 \u2014 \u7761\u524d\u518d\u6253\u4e2a\u62db\u547c\uff1f' };
}

function MiniChat({ lang }) {
  const [open, setOpen] = React.useState(false);
  const g = React.useMemo(greeting, []);
  const [msgs, setMsgs] = React.useState([{ from: 'elysia', text: lang === 'zh' ? g.zh : g.en }]);
  const [text, setText] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const threadRef = React.useRef(null);
  React.useEffect(() => { setMsgs([{ from: 'elysia', text: lang === 'zh' ? g.zh : g.en }]); }, [lang]);
  React.useEffect(() => { const t = threadRef.current; if (t) t.scrollTop = t.scrollHeight; }, [msgs, typing, open]);

  const send = () => {
    const m = text.trim(); if (!m) return;
    setMsgs((x) => [...x, { from: 'user', text: m }]); setText(''); setTyping(true);
    setTimeout(() => { setTyping(false); setMsgs((x) => [...x, { from: 'elysia', text: reply(m) }]); }, 850);
  };

  const glass = 'rgba(36,18,42,0.62)';
  return (
    <div className="elysia-zone" style={{ position: 'fixed', right: 'clamp(16px,4vw,90px)', bottom: 22, zIndex: 90, fontFamily: 'var(--font-jp)' }}>
      {/* panel */}
      <div style={{
        position: 'absolute', right: 0, bottom: 62, width: 'min(340px, calc(100vw - 36px))',
        height: open ? 'min(460px, 70vh)' : 0, opacity: open ? 1 : 0,
        transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(.96)',
        transformOrigin: 'bottom right', transition: 'opacity .3s var(--ease-out), transform .3s var(--ease-out), height .3s var(--ease-out)',
        pointerEvents: open ? 'auto' : 'none', overflow: 'hidden',
        background: glass, backdropFilter: 'blur(20px) saturate(1.2)', WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
        border: '1px solid rgba(255,158,203,0.28)', borderRadius: 18, boxShadow: '0 24px 70px rgba(0,0,0,.5), 0 0 40px rgba(214,51,122,.18)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '13px 14px', borderBottom: '1px solid rgba(255,158,203,0.16)' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--elysia-400)', boxShadow: '0 0 8px var(--elysia-400)' }} />
          <span style={{ fontFamily: 'var(--font-editorial)', fontWeight: 700, color: '#ffe9f4', fontSize: '.95rem' }}>Elysia <span style={{ color: 'var(--elysia-300)' }}>♪</span></span>
          <span className="mono" style={{ fontSize: '.6rem', letterSpacing: '.1em', color: 'rgba(255,233,244,.45)', marginLeft: 4 }}>{lang === 'zh' ? '\u6253\u4e2a\u62db\u547c' : 'say hello'}</span>
          <button onClick={() => setOpen(false)} aria-label="Close" style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(255,233,244,.6)', cursor: 'pointer', fontSize: '1rem', lineHeight: 1 }}>✕</button>
        </div>
        <div ref={threadRef} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 9, padding: 14 }}>
          {msgs.map((m, i) => {
            const me = m.from === 'user';
            return (
              <div key={i} style={{ alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '84%',
                padding: '9px 13px', fontSize: '.9rem', lineHeight: 1.5, fontWeight: 500,
                borderRadius: me ? '14px 5px 14px 14px' : '5px 14px 14px 14px',
                color: me ? '#fff' : '#3a1f38',
                background: me ? 'linear-gradient(135deg,#f25a9e,#d6337a)' : 'linear-gradient(135deg,#ffe1ef,#ffd1e6)' }}>{m.text}</div>
            );
          })}
          {typing && <div style={{ alignSelf: 'flex-start', padding: '11px 14px', borderRadius: '5px 14px 14px 14px', background: 'linear-gradient(135deg,#ffe1ef,#ffd1e6)' }}>
            <span style={{ display: 'inline-flex', gap: 4 }}>{[0,1,2].map(i => <i key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#d6337a', display: 'inline-block', animation: `mcDot 1.2s ${i*0.15}s infinite ease-in-out` }} />)}</span>
          </div>}
          <style>{`@keyframes mcDot{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}`}</style>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 10, borderTop: '1px solid rgba(255,158,203,0.16)' }}>
          <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
            placeholder={lang === 'zh' ? '\u8ddf\u7231\u8389\u6253\u4e2a\u62db\u547c\u2026' : 'Say hello to Elysia\u2026'}
            style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,158,203,0.22)', borderRadius: 12, padding: '9px 12px', color: '#ffe9f4', fontFamily: 'var(--font-jp)', fontSize: '.88rem', outline: 'none' }} />
          <button onClick={send} aria-label="Send" style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 11, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#f25a9e,#d6337a)', color: '#fff', fontSize: '1rem' }}>➤</button>
        </div>
      </div>

      {/* launcher */}
      <button onClick={() => setOpen(!open)} aria-label="Chat with Elysia" style={{
        display: 'flex', alignItems: 'center', gap: 9, marginLeft: 'auto', padding: '9px 16px 9px 10px', borderRadius: 999, border: '1px solid rgba(255,158,203,0.3)', cursor: 'pointer',
        background: 'rgba(36,18,42,0.7)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', boxShadow: '0 10px 34px rgba(214,51,122,.4)',
      }}>
        <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#ffd9ec,#ff9ecb 55%,#d6337a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.9rem', color: '#fff' }}>{open ? '\u2715' : '\u266a'}</span>
        <span style={{ fontFamily: 'var(--font-editorial)', fontWeight: 700, fontSize: '.84rem', color: '#ffe9f4' }}>{lang === 'zh' ? '\u548c\u7231\u8389\u6253\u62db\u547c' : 'Say hi to Elysia'}</span>
      </button>
    </div>
  );
}
window.MiniChat = MiniChat;
