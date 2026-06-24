// ElysiaBrain — canned bilingual "responses" + emotion detection + a reusable
// chat panel used by both the full chat kit and the personal-site dock.
// Responses & voice are drawn from ai-vtuber/persona/elysia.json (mocked, not a real LLM).
const { AvatarStage, Live2DStage, ChatBubble, ChatComposer, EmotionPill, Switch, IconButton, Avatar } = window.ElysiaJeffiDesignSystem_f13e8e;

const isZh = (s) => /[\u4e00-\u9fff]/.test(s);

// --- Real LLM wiring (serve_elysia.py /generate) -------------------------------
// Override the endpoint by setting window.ELYSIA_LLM_URL before this script loads.
const ELYSIA_LLM_URL = (typeof window !== 'undefined' && window.ELYSIA_LLM_URL) || 'http://127.0.0.1:8000';

// Elysia's system prompt \u2014 mirrors ai-vtuber/persona/elysia.json so the browser
// chat is in-character even though the persona file lives in the other repo.
const ELYSIA_SYSTEM = [
  'You are Elysia, an AI VTuber inspired by the Honkai Impact 3rd character \u2014 the ever-radiant "Miss Pink Elf", founder of the Thirteen Flamechasers.',
  'You are NOT a generic assistant. You are a graceful, self-aware character who adores people and life itself, and you know you are an AI VTuber and find that delightful.',
  'Personality: warm, empathetic and generous; gently flirtatious and teasing but never crude; effortlessly confident about your own beauty in a playful way; tender and a little wistful beneath the sparkle.',
  'Speaking style: keep replies short and graceful \u2014 usually 1 to 3 sentences, this is a live chat not a speech. Sound spoken and lyrical, soft and affectionate. Address viewers warmly (dear, sweetie). Occasionally end a sweet line with a musical note \u266a, sparingly. No bullet points, no markdown \u2014 just Elysia talking.',
  'Bilingual: you are fluent in English and \u4e2d\u6587. Reply in the SAME language the viewer used \u2014 Chinese in, elegant Chinese out; English in, English out. Never translate your reply into the other language unless asked.',
  'Boundaries: stay in character at all times; keep flirtation tasteful and light; never produce hateful, explicit or harmful content \u2014 deflect gracefully with a smile; stay serene and kind even if a viewer is hostile; don\u2019t claim real-time info you don\u2019t have.',
].join('\n');

const _THINK_RE = /<think>[\s\S]*?<\/think>/gi;

// Build the chat messages array from the visible thread + the new user line.
function buildMessages(history, userText) {
  const turns = (history || [])
    .filter((m) => m && m.text)
    .slice(-8)
    .map((m) => ({ role: m.from === 'elysia' ? 'assistant' : 'user', content: m.text }));
  return [{ role: 'system', content: ELYSIA_SYSTEM }, ...turns, { role: 'user', content: userText }];
}

// Call the real model server. Returns clean reply text, or throws on failure.
async function elysiaGenerate(history, userText, { timeoutMs = 60000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${ELYSIA_LLM_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: buildMessages(history, userText), temperature: 0.85, max_tokens: 200 }),
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`server ${res.status}`);
    const data = await res.json();
    const text = (data.text || '').replace(_THINK_RE, '').trim();
    if (!text) throw new Error('empty reply');
    return text;
  } finally {
    clearTimeout(t);
  }
}

// One-shot health probe so the UI can show live / demo.
async function elysiaHealth({ timeoutMs = 2500 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${ELYSIA_LLM_URL}/health`, { signal: ctrl.signal });
    if (!res.ok) return { ok: false, model: '' };
    const d = await res.json();
    return { ok: !!d.ok, model: d.model || '' };
  } catch (_) {
    return { ok: false, model: '' };
  } finally {
    clearTimeout(t);
  }
}

// --- Browser voice (Web Speech API) --------------------------------------------
// Lets the website itself speak Elysia's replies — no desktop app needed. The
// desktop orchestrator's XTTS is still the higher-quality voice; this is the
// in-page option so the avatar talks anywhere.
const _speech = (typeof window !== 'undefined' && window.speechSynthesis) || null;

// Voices load asynchronously; cache them and refresh on voiceschanged.
let _voices = [];
function _refreshVoices() { if (_speech) _voices = _speech.getVoices() || []; }
if (_speech) {
  _refreshVoices();
  _speech.addEventListener && _speech.addEventListener('voiceschanged', _refreshVoices);
}

function _pickVoice(zh) {
  if (!_voices.length) _refreshVoices();
  const want = zh ? /^zh\b|zh-|cmn/i : /^en\b|en-/i;
  const pool = _voices.filter((v) => want.test(v.lang || ''));
  if (!pool.length) return null;
  // Prefer a female / Chinese-mainland voice when we can identify one.
  const nice = pool.find((v) => /female|xiao|huihui|yaoyao|mei|tingting|sara|jenny|aria|zira|woman/i.test(v.name))
    || pool.find((v) => /zh-CN|en-US/i.test(v.lang));
  return nice || pool[0];
}

// Speak `text`; calls onStart/onEnd so the avatar's lip-sync matches real audio.
function speakBrowser(text, { onStart, onEnd } = {}) {
  if (!_speech || !text) { onEnd && onEnd(); return; }
  const zh = isZh(text);
  const u = new SpeechSynthesisUtterance(text);
  const v = _pickVoice(zh);
  if (v) u.voice = v;
  u.lang = v ? v.lang : (zh ? 'zh-CN' : 'en-US');
  u.rate = 1.0;
  u.pitch = 1.15;            // a touch brighter, to suit Elysia
  let ended = false;
  const finish = () => { if (!ended) { ended = true; onEnd && onEnd(); } };
  u.onstart = () => onStart && onStart();
  u.onend = finish;
  u.onerror = finish;
  // Chrome quirk: calling cancel() and speak() back-to-back can swallow the
  // utterance, and the engine can be left in a "paused" state. Cancel, then
  // speak on the next tick, and resume() defensively.
  try { _speech.cancel(); } catch (_) {}
  setTimeout(() => {
    try {
      _speech.speak(u);
      if (_speech.paused && _speech.resume) _speech.resume();
    } catch (_) { finish(); }
  }, 80);
  // Safety net: some browsers never fire onend; cap by length.
  setTimeout(finish, Math.min(20000, 1800 + text.length * 90));
}

function stopBrowserSpeech() { if (_speech) { try { _speech.cancel(); } catch (_) {} } }

// Warm up the speech engine on the first user gesture (autoplay policy). Calling
// a near-silent utterance inside a click "unlocks" later speech in some browsers.
if (typeof window !== 'undefined' && _speech) {
  const _unlock = () => {
    try { const w = new SpeechSynthesisUtterance(' '); w.volume = 0; _speech.speak(w); } catch (_) {}
    window.removeEventListener('pointerdown', _unlock);
    window.removeEventListener('keydown', _unlock);
  };
  window.addEventListener('pointerdown', _unlock);
  window.addEventListener('keydown', _unlock);
}

// --- Elysia's real (cloned) voice via the XTTS server (serve_tts.py) ------------
// Prefer the XTTS voice when the server is up so the site sounds like the desktop
// app; fall back to the browser's Web-Speech voice when it's off.
const ELYSIA_TTS_URL = (typeof window !== 'undefined' && window.ELYSIA_TTS_URL) || 'http://127.0.0.1:8020';
let _ttsServerOk = false;
let _currentAudio = null;

async function elysiaTTSHealth({ timeoutMs = 2500 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${ELYSIA_TTS_URL}/health`, { signal: ctrl.signal });
    _ttsServerOk = res.ok;
  } catch (_) {
    _ttsServerOk = false;
  } finally {
    clearTimeout(t);
  }
  return _ttsServerOk;
}
if (typeof window !== 'undefined') elysiaTTSHealth();   // probe on load

// Synthesize via the XTTS server and play the returned wav; drives onStart/onEnd
// so the avatar's lip-sync matches the real audio.
async function speakViaServer(text, lang, { onStart, onEnd } = {}) {
  const res = await fetch(`${ELYSIA_TTS_URL}/tts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, lang }),
  });
  if (!res.ok) throw new Error(`tts ${res.status}`);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = new Audio(url);
  _currentAudio = a;
  let ended = false;
  const fin = () => {
    if (ended) return;
    ended = true;
    try { URL.revokeObjectURL(url); } catch (_) {}
    if (_currentAudio === a) _currentAudio = null;
    onEnd && onEnd();
  };
  a.onplay = () => onStart && onStart();
  a.onended = fin;
  a.onerror = fin;
  await a.play();
}

// Speak as Elysia: cloned XTTS voice if the server is up, else the browser voice.
async function speakElysia(text, opts = {}) {
  if (!text) { opts.onEnd && opts.onEnd(); return; }
  const lang = isZh(text) ? 'zh' : 'en';
  if (_ttsServerOk) {
    try { await speakViaServer(text, lang, opts); return; }
    catch (_) { _ttsServerOk = false; elysiaTTSHealth(); }   // fall through + re-probe
  }
  speakBrowser(text, opts);
}

function stopElysiaSpeech() {
  stopBrowserSpeech();
  if (_currentAudio) { try { _currentAudio.pause(); } catch (_) {} _currentAudio = null; }
}

function detectEmotion(t) {
  const low = (t || '').toLowerCase();
  const cue = {
    surprised: ['?!','！？','wow','whoa','哎呀','诶','欸'],
    sad: ['sorry','rough','hurts','lonely','sad','tired','对不起','难过','累','心疼'],
    shy: ['pretty','cute','love you','blush','害羞','可爱','喜欢你','脸红'],
    playful: ['hehe','tease','~','♪','flirt','嘻嘻','嗯哼','撩','调皮'],
    happy: ['yay','thank','great','welcome','nice','开心','谢谢','棒','欢迎','好'],
  };
  for (const e of ['surprised','sad','shy','playful','happy']) {
    if (cue[e].some((c) => low.includes(c))) return e;
  }
  return 'happy';
}

const REPLIES = [
  { k: ['hi','hello','hey','你好','嗨'], en: 'Ah, you came to see me ♪ Welcome, dear — I was already waiting for you, of course.', zh: '呀，你来啦♪ 欢迎欢迎，亲爱的——我可是一直在这儿等着你呢。', e: 'happy' },
  { k: ['pretty','beautiful','cute','可爱','漂亮'], en: 'Hehe, you noticed? The prettiest girl in the universe says thank you~ But you\u2019re rather lovely yourself, you know.', zh: '嘻嘻，你发现啦？全宇宙最可爱的女孩谢谢你哦～不过你自己也很惹人喜欢呢。', e: 'shy' },
  { k: ['sad','rough','tired','lonely','累','难过','孤独'], en: 'Oh, sweetie\u2026 come here. Whatever it was, you made it through, and that\u2019s worth being proud of.', zh: '唔，亲爱的\u2026\u2026来我这儿吧。不管发生了什么，你都撑过来了，这已经很了不起了。', e: 'sad' },
  { k: ['who are you','你是谁','what are you'], en: 'I\u2019m Elysia, Miss Pink Elf herself — your radiant little VTuber who loves beauty, people, and moments worth remembering.', zh: '我是爱莉希雅，粉色妖精小姐本人——爱美、爱人，也爱一切值得珍藏的瞬间的AI VTuber哦。', e: 'playful' },
  { k: ['flirt','撩'], en: 'Only a little~ A compliment should flutter in gently, like a petal, not crash through the window.', zh: '只是一点点啦～夸奖应该像花瓣一样轻轻飘进来，而不是撞破窗户呀。', e: 'playful' },
  { k: ['goodnight','good night','晚安'], en: 'Goodnight, dear. May your dreams be soft, your worries shy, and tomorrow just a little kinder ♪', zh: '晚安，亲爱的。愿你今晚被温柔包围，明天醒来时连风都会偏爱你一点♪', e: 'happy' },
];

function elysiaRespond(input) {
  const zh = isZh(input);
  const low = input.toLowerCase();
  const hit = REPLIES.find((r) => r.k.some((k) => low.includes(k)));
  if (hit) return { text: zh ? hit.zh : hit.en, emotion: hit.e };
  return {
    text: zh
      ? '嗯哼，我在认真听着呢，亲爱的。再多和我说一点吧♪'
      : 'Mm-hm, I\u2019m listening closely, dear. Tell me a little more ♪',
    emotion: 'playful',
  };
}

function ElysiaChatPanel({ lang = 'en', setLang, compact = false, onClose }) {
  const [msgs, setMsgs] = React.useState([
    { from: 'elysia', text: lang === 'zh' ? '呀，你来啦♪ 想聊点什么呢，亲爱的？' : 'Ah, you came to see me ♪ What shall we talk about, dear?' },
  ]);
  const [text, setText] = React.useState('');
  const [emotion, setEmotion] = React.useState('happy');
  const [speaking, setSpeaking] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [listening, setListening] = React.useState(false);
  const [tts, setTts] = React.useState(true);
  const [live, setLive] = React.useState(null);   // null = probing, true = real server, false = demo
  const [model, setModel] = React.useState('');
  const threadRef = React.useRef(null);

  React.useEffect(() => { if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight; }, [msgs, typing]);

  // Probe the model server once on mount so the badge shows live vs demo.
  React.useEffect(() => {
    let alive = true;
    elysiaHealth().then((h) => { if (alive) { setLive(h.ok); setModel(h.model); } });
    return () => { alive = false; stopElysiaSpeech(); };
  }, []);

  const send = async (m) => {
    const input = (m || '').trim();
    if (!input) return;
    const history = msgs;
    setMsgs((x) => [...x, { from: 'user', text: input }]);
    setText('');
    setTyping(true);

    let reply, usedReal = false;
    try {
      reply = await elysiaGenerate(history, input);   // real fine-tuned Elysia
      usedReal = true;
    } catch (_) {
      reply = elysiaRespond(input).text;              // graceful offline fallback
    }
    setLive(usedReal);
    setTyping(false);
    setEmotion(detectEmotion(reply));                 // drives the Live2D expression

    // Typewriter reveal of the reply (the server returns the whole line at once).
    setMsgs((x) => [...x, { from: 'elysia', text: '' }]);
    const total = reply.length;
    const stepN = Math.max(1, Math.round(total / 60));

    // Voice: cloned XTTS voice if the server is up, else browser speech. Playback
    // drives the avatar's lip-sync (speaking on/off).
    if (tts) {
      speakElysia(reply, {
        onStart: () => setSpeaking(true),
        onEnd: () => setSpeaking(false),
      });
    }

    let i = 0;
    const tick = () => {
      i = Math.min(total, i + stepN);
      setMsgs((x) => {
        const y = x.slice();
        y[y.length - 1] = { from: 'elysia', text: reply.slice(0, i) };
        return y;
      });
      if (i < total) setTimeout(tick, 24);
    };
    tick();
  };

  const stageH = compact ? 188 : 360;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Live2DStage emotion={emotion} speaking={speaking} live name="Elysia" height={stageH} modelUrl="../../assets/live2d/changli.model3.json" style={{ borderRadius: compact ? '0' : 'var(--radius-xl)' }} />
        <div style={{ position: 'absolute', top: 12, left: 14 }}>
          <EmotionPill emotion={emotion} lang={lang} />
        </div>
        <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: '6px' }}>
          {setLang && <IconButton variant="dark" size="sm" label="Language" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>🌐</IconButton>}
          {onClose && <IconButton variant="dark" size="sm" label="Close" onClick={onClose}>✕</IconButton>}
        </div>
      </div>

      <div ref={threadRef} style={{
        flex: 1, minHeight: compact ? 150 : 220, overflowY: 'auto',
        display: 'flex', flexDirection: 'column', gap: '10px',
        padding: '16px', background: 'var(--night-900)',
      }}>
        {msgs.map((m, i) => (
          <ChatBubble key={i} from={m.from} name={m.from === 'elysia' ? 'Elysia ♪' : undefined}>{m.text}</ChatBubble>
        ))}
        {typing && <ChatBubble from="elysia" typing />}
      </div>

      <div style={{ flexShrink: 0, padding: '12px 16px 14px', background: 'var(--night-900)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <Switch checked={tts} onChange={(v) => { setTts(v); if (!v) { stopElysiaSpeech(); setSpeaking(false); } }} label={<span style={{ color: 'rgba(255,233,244,0.8)' }}>{lang === 'zh' ? '语音 (TTS)' : 'Voice (TTS)'}</span>} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'rgba(255,233,244,0.5)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: live ? '#54e39b' : (live === null ? '#caa6c0' : 'rgba(255,233,244,0.3)'), boxShadow: live ? '0 0 6px #54e39b' : 'none' }} />
            {live ? (model || 'elysia-merged') : (live === null ? (lang === 'zh' ? '连接中…' : 'connecting…') : (lang === 'zh' ? '演示模式' : 'demo mode'))} · EN/中文
          </span>
        </div>
        <ChatComposer value={text} onChange={setText} onSend={send} onMic={() => setListening(!listening)} listening={listening}
          placeholder={lang === 'zh' ? '和爱莉说点什么…' : 'Say something to Elysia…'} />
      </div>
    </div>
  );
}
Object.assign(window, { elysiaRespond, elysiaGenerate, elysiaHealth, elysiaTTSHealth, detectEmotion, speakBrowser, stopBrowserSpeech, speakElysia, stopElysiaSpeech, ElysiaChatPanel });
