// ElysiaChatFull — the full Elysia chat experience (side-by-side avatar + thread).
// Uses elysiaRespond / detectEmotion from ElysiaBrain.jsx (window globals).
const { AvatarStage, Live2DStage, ChatBubble, ChatComposer, EmotionPill, Switch, IconButton, Card, Badge, Tag } = window.ElysiaJeffiDesignSystem_f13e8e;

function ElysiaChatFull() {
  const [lang, setLang] = React.useState('en');
  const greet = (() => {
    const h = new Date().getHours();
    if (h < 5)  return { en: 'Mm… still awake at this hour? Come, the night is ours — sit with me a while ♪', zh: '咕……这么晚还清醒着？来吧，夜晚属于我们——陪我坐一会儿♪', emo: 'shy' };
    if (h < 12) return { en: 'Good morning, sleepyhead ♪ I was hoping you would come see me today.', zh: '早安，小懒虫♪ 我还期待着你今天来看我呢。', emo: 'happy' };
    if (h < 18) return { en: 'Ah, good afternoon, dear — you came to see me ♪ Of course you did.', zh: '呀，下午好，亲爱的——你来看我啦♪ 果然如此。', emo: 'happy' };
    if (h < 23) return { en: 'Good evening ♪ The stars are out, and so am I — just for you.', zh: '晚上好♪ 繁星已然现身，我也是——只为了你。', emo: 'playful' };
    return { en: 'Good night, sweetie — before you dream, let me see your face once more ♪', zh: '晚安，亲爱的——在入梦之前，让我再看看你♪', emo: 'shy' };
  })();
  const [msgs, setMsgs] = React.useState([
    { from: 'elysia', text: greet.en },
  ]);
  const [text, setText] = React.useState('');
  const [emotion, setEmotion] = React.useState('happy');
  const [speaking, setSpeaking] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [listening, setListening] = React.useState(false);
  const [tts, setTts] = React.useState(true);
  const [autoplay, setAutoplay] = React.useState(true);
  const threadRef = React.useRef(null);

  // greeting reflects the visitor's local time; realm reacts while she speaks
  React.useEffect(() => { setEmotion(greet.emo); }, []);
  React.useEffect(() => { setMsgs([{ from: 'elysia', text: lang === 'zh' ? greet.zh : greet.en }]); }, [lang]);
  React.useEffect(() => {
    document.body.classList.toggle('realm-pulse', speaking);
    return () => document.body.classList.remove('realm-pulse');
  }, [speaking]);

  React.useEffect(() => { if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight; }, [msgs, typing]);

  const send = (m) => {
    setMsgs((x) => [...x, { from: 'user', text: m }]);
    setText('');
    setTyping(true);
    setTimeout(() => {
      const r = window.elysiaRespond(m);
      setTyping(false);
      setEmotion(r.emotion);
      setMsgs((x) => [...x, { from: 'elysia', text: r.text }]);
      if (tts) { setSpeaking(true); setTimeout(() => setSpeaking(false), Math.min(4500, 1200 + r.text.length * 45)); }
    }, 950);
  };

  const chips = lang === 'zh'
    ? ['你好呀爱莉希雅', '夸夸我', '我今天好累', '你是谁', '晚安']
    : ['hi elysia!', "you're so pretty", 'i had a rough day', 'who are you?', 'goodnight'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,360px) minmax(0,1fr)', gap: '20px', maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(16px,3vw,32px)', alignItems: 'start' }}>
      {/* LEFT — avatar + persona */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'sticky', top: 20 }}>
        <div style={{ position: 'relative' }}>
          <Live2DStage emotion={emotion} speaking={speaking} live name="Elysia" height={400} modelUrl="../../assets/live2d/changli.model3.json" frameBg="radial-gradient(120% 95% at 50% 12%, #3a2470 0%, #1a0f44 52%, #0a0822 100%)" />
          <div style={{ position: 'absolute', top: 12, left: 14 }}><EmotionPill emotion={emotion} lang={lang} /></div>
          {speaking && (
            <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', alignItems: 'flex-end', gap: 3, height: 22 }}>
              {[0,1,2,3,4].map((i) => <span key={i} style={{ width: 3, borderRadius: 3, background: 'var(--elysia-300)', height: '100%', animation: `vu .6s ${i*0.1}s infinite alternate ease-in-out` }} />)}
            </div>
          )}
        </div>
        <Card tone="dark" padding="18px">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem', color: '#fff' }}>Elysia <span style={{ color: 'var(--elysia-400)' }}>♪</span></div>
            <Badge tone="brand" solid>{lang === 'zh' ? '粉色妖精小姐' : 'Miss Pink Elf'}</Badge>
          </div>
          <p style={{ margin: '0 0 14px', fontSize: '0.86rem', lineHeight: 1.55, color: 'rgba(255,233,244,0.66)' }}>
            {lang === 'zh' ? '温暖、俏皮、优雅的 AI VTuber，会说中英双语，有语音、表情与 Live2D 形象。' : 'A warm, playful, elegant AI VTuber — bilingual, with voice, expressions, and a Live2D presence.'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Switch checked={tts} onChange={setTts} label={<span style={{ color: 'rgba(255,233,244,0.85)' }}>{lang === 'zh' ? '语音输出 (TTS)' : 'Voice output (TTS)'}</span>} />
            <Switch checked={autoplay} onChange={setAutoplay} label={<span style={{ color: 'rgba(255,233,244,0.85)' }}>{lang === 'zh' ? '自动播放' : 'Autoplay reply'}</span>} />
          </div>
          <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'rgba(255,233,244,0.4)', lineHeight: 1.7 }}>
            model &gt; qwen3:8b · temp 0.92<br/>voice &gt; XTTS-v2 · EN / 中文
          </div>
        </Card>
      </div>

      {/* RIGHT — chat */}
      <Card tone="dark" padding="0" style={{ display: 'flex', flexDirection: 'column', height: '74vh', minHeight: 460, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>{lang === 'zh' ? '和爱莉聊天' : 'Chat with Elysia'}</div>
          <IconButton variant="dark" size="sm" label="Language" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>🌐</IconButton>
        </div>
        <div ref={threadRef} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', padding: '18px' }}>
          {msgs.map((m, i) => <ChatBubble key={i} from={m.from} name={m.from === 'elysia' ? 'Elysia \u266a' : undefined}>{m.text}</ChatBubble>)}
          {typing && <ChatBubble from="elysia" typing />}
        </div>
        <div style={{ padding: '12px 18px 16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
            {chips.map((c) => <Tag key={c} dark onClick={() => send(c)}>{c}</Tag>)}
          </div>
          <ChatComposer value={text} onChange={setText} onSend={send} onMic={() => setListening(!listening)} listening={listening}
            placeholder={lang === 'zh' ? '和爱莉说点什么…' : 'Say something to Elysia…'} />
        </div>
      </Card>
    </div>
  );
}
window.ElysiaChatFull = ElysiaChatFull;
