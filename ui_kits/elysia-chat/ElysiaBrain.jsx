// ElysiaBrain — canned bilingual "responses" + emotion detection + a reusable
// chat panel used by both the full chat kit and the personal-site dock.
// Responses & voice are drawn from ai-vtuber/persona/elysia.json (mocked, not a real LLM).
const { AvatarStage, Live2DStage, ChatBubble, ChatComposer, EmotionPill, Switch, IconButton, Avatar } = window.ElysiaJeffiDesignSystem_f13e8e;

const isZh = (s) => /[\u4e00-\u9fff]/.test(s);

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
  const threadRef = React.useRef(null);

  React.useEffect(() => { if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight; }, [msgs, typing]);

  const send = (m) => {
    setMsgs((x) => [...x, { from: 'user', text: m }]);
    setText('');
    setTyping(true);
    setTimeout(() => {
      const r = elysiaRespond(m);
      setTyping(false);
      setEmotion(r.emotion);
      setMsgs((x) => [...x, { from: 'elysia', text: r.text }]);
      if (tts) {
        setSpeaking(true);
        setTimeout(() => setSpeaking(false), Math.min(4500, 1200 + r.text.length * 45));
      }
    }, 900);
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
          <Switch checked={tts} onChange={setTts} label={<span style={{ color: 'rgba(255,233,244,0.8)' }}>{lang === 'zh' ? '语音 (TTS)' : 'Voice (TTS)'}</span>} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'rgba(255,233,244,0.4)' }}>qwen3:8b · EN/中文</span>
        </div>
        <ChatComposer value={text} onChange={setText} onSend={send} onMic={() => setListening(!listening)} listening={listening}
          placeholder={lang === 'zh' ? '和爱莉说点什么…' : 'Say something to Elysia…'} />
      </div>
    </div>
  );
}
Object.assign(window, { elysiaRespond, detectEmotion, ElysiaChatPanel });
