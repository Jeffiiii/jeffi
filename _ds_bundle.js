/* @ds-bundle: {"format":3,"namespace":"ElysiaJeffiDesignSystem_f13e8e","components":[{"name":"AvatarStage","sourcePath":"components/chat/AvatarStage.jsx"},{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"ChatComposer","sourcePath":"components/chat/ChatComposer.jsx"},{"name":"EmotionPill","sourcePath":"components/chat/EmotionPill.jsx"},{"name":"Live2DStage","sourcePath":"components/chat/Live2DStage.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/chat/AvatarStage.jsx":"876466e8616f","components/chat/ChatBubble.jsx":"0d7defaacddd","components/chat/ChatComposer.jsx":"025953007b05","components/chat/EmotionPill.jsx":"2c0050462007","components/chat/Live2DStage.jsx":"53c17db30a82","components/core/Avatar.jsx":"bf6d6ab59396","components/core/Badge.jsx":"ad5c36b75624","components/core/Button.jsx":"a53ce483c9c6","components/core/Card.jsx":"0ec62ac31824","components/core/IconButton.jsx":"650fc6bfbb07","components/core/Input.jsx":"0ae70e8cf2be","components/core/Switch.jsx":"7611bab0610f","components/core/Tabs.jsx":"e504ab04b0b8","components/core/Tag.jsx":"c8393bee9c29","ui_kits/elysia-chat/ElysiaBrain.jsx":"a347febc8416","ui_kits/elysia-chat/ElysiaChatFull.jsx":"53794f6488f1","ui_kits/personal-site/AboutProjects.jsx":"7bd9a61c4939","ui_kits/personal-site/AnimeFaves.jsx":"4e42e9592dbc","ui_kits/personal-site/EditorialHead.jsx":"73b159d8ea4e","ui_kits/personal-site/EditorialHome.jsx":"dcc1acd57591","ui_kits/personal-site/ElysiaDock.jsx":"d678fcd51da8","ui_kits/personal-site/GamesPlay.jsx":"c70a2ae5bc5e","ui_kits/personal-site/Icons.jsx":"7b2308eb9a7d","ui_kits/personal-site/MiniChat.jsx":"3703f123a014","ui_kits/personal-site/MusicPlayer.jsx":"1ccdb4aa9d1e","ui_kits/personal-site/PlayedDevices.jsx":"d3f3b37656e9","ui_kits/personal-site/RiftPortal.jsx":"29e1080e9788","ui_kits/personal-site/Sections.jsx":"c23f50102a40","ui_kits/personal-site/SiteHero.jsx":"cc7c142078fa","ui_kits/personal-site/SiteNav.jsx":"85a4d2d6819a","ui_kits/personal-site/StatusStrip.jsx":"549d50bfba40","ui_kits/personal-site/audio-beat.js":"5228b1d94fab","ui_kits/personal-site/judgement-cursor.js":"8ab70f81e26b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElysiaJeffiDesignSystem_f13e8e = window.ElysiaJeffiDesignSystem_f13e8e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chat/AvatarStage.jsx
try { (() => {
/**
 * AvatarStage — clean dark "window" used as the static stand-in / fallback for
 * Elysia's avatar (when the Live2D rig can't load). Shows the model's portrait
 * image (`poster`) framed in the stream window with a soft speaking glow — or a
 * minimal monogram if no poster is given. No cartoon faces.
 */
function AvatarStage({
  poster,
  frameBg = 'radial-gradient(120% 90% at 50% 12%, #3a1f38 0%, #241630 55%, #160d1c 100%)',
  emotion = 'neutral',
  speaking = false,
  name = 'Elysia',
  live = false,
  height = 320,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: frameBg,
      border: '1px solid rgba(255,255,255,0.10)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '6%',
      width: '70%',
      aspectRatio: '1',
      transform: `translateX(-50%) scale(${speaking ? 1.07 : 1})`,
      borderRadius: '50%',
      filter: 'blur(12px)',
      pointerEvents: 'none',
      background: 'radial-gradient(circle, rgba(242,90,158,0.32), transparent 66%)',
      transition: 'transform 0.3s var(--ease-out)'
    }
  }), poster ? /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: name,
    style: {
      position: 'relative',
      maxHeight: '92%',
      maxWidth: '88%',
      objectFit: 'contain',
      filter: speaking ? 'saturate(1.06)' : 'none',
      transform: speaking ? 'translateY(-2px)' : 'none',
      transition: 'transform 0.3s var(--ease-out), filter 0.3s var(--ease)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: Math.min(height * 0.42, 150),
      height: Math.min(height * 0.42, 150),
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(150deg, #ffd9ec, #ff9ecb 55%, #d6337a)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: Math.min(height * 0.2, 72),
      color: '#fff',
      border: '2px solid rgba(255,255,255,0.6)'
    }
  }, (name || 'E').charAt(0)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 14,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '5px 12px 5px 7px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(22,13,28,0.6)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: live ? 'var(--brand)' : 'var(--success)',
      boxShadow: live ? '0 0 8px var(--brand)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '0.85rem',
      color: '#ffe9f4'
    }
  }, name), live && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: '0.6rem',
      letterSpacing: '0.12em',
      color: 'var(--elysia-300)'
    }
  }, "LIVE")), children);
}
Object.assign(__ds_scope, { AvatarStage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/AvatarStage.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatBubble.jsx
try { (() => {
/**
 * ChatBubble — a single chat message. from: 'elysia' | 'user'.
 * Elysia's bubbles are soft pink glass (left); the viewer's are plum (right).
 * Pass typing to render the three-dot indicator.
 */
function ChatBubble({
  from = 'elysia',
  children,
  name,
  time,
  typing = false,
  style = {}
}) {
  const isElysia = from === 'elysia';
  const row = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isElysia ? 'flex-start' : 'flex-end',
    gap: '4px',
    maxWidth: '82%',
    alignSelf: isElysia ? 'flex-start' : 'flex-end',
    ...style
  };
  const bubble = {
    padding: '11px 16px',
    borderRadius: isElysia ? '6px 18px 18px 18px' : '18px 6px 18px 18px',
    fontSize: 'var(--fs-body)',
    fontWeight: 'var(--w-medium)',
    lineHeight: 1.55,
    color: isElysia ? 'var(--plum-900)' : '#fff',
    background: isElysia ? 'linear-gradient(135deg, #ffe1ef, #ffd1e6)' : 'var(--brand-gradient)',
    border: isElysia ? '1px solid rgba(214,51,122,0.16)' : '1px solid transparent',
    boxShadow: 'var(--shadow-sm)',
    wordBreak: 'break-word'
  };
  const meta = {
    fontSize: 'var(--fs-micro)',
    fontWeight: 'var(--w-bold)',
    color: 'var(--text-faint)',
    padding: '0 4px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: row
  }, (name || time) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'baseline'
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      ...meta,
      color: isElysia ? 'var(--brand)' : 'var(--text-muted)'
    }
  }, name), time && /*#__PURE__*/React.createElement("span", {
    style: meta
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: bubble
  }, typing ? /*#__PURE__*/React.createElement(TypingDots, null) : children));
}
function TypingDots() {
  const dot = i => ({
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: 'var(--elysia-600)',
    display: 'inline-block',
    animation: `elysiaTyping 1.2s ${i * 0.15}s infinite ease-in-out`
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center',
      padding: '2px 2px'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes elysiaTyping{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-5px);opacity:1}}`), /*#__PURE__*/React.createElement("i", {
    style: dot(0)
  }), /*#__PURE__*/React.createElement("i", {
    style: dot(1)
  }), /*#__PURE__*/React.createElement("i", {
    style: dot(2)
  }));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/chat/EmotionPill.jsx
try { (() => {
/**
 * EmotionPill — shows Elysia's current expression (from aivtuber/emotion.py:
 * happy, playful, shy, sad, surprised, neutral) with its accent colour + glyph.
 */
const EMO = {
  happy: {
    c: 'var(--emo-happy)',
    g: '😊',
    en: 'happy',
    zh: '开心'
  },
  playful: {
    c: 'var(--emo-playful)',
    g: '😏',
    en: 'playful',
    zh: '调皮'
  },
  shy: {
    c: 'var(--emo-shy)',
    g: '☺️',
    en: 'shy',
    zh: '害羞'
  },
  sad: {
    c: 'var(--emo-sad)',
    g: '🥺',
    en: 'sad',
    zh: '难过'
  },
  surprised: {
    c: 'var(--emo-surprised)',
    g: '😮',
    en: 'surprised',
    zh: '惊讶'
  },
  neutral: {
    c: 'var(--emo-neutral)',
    g: '🌸',
    en: 'neutral',
    zh: '平静'
  }
};
function EmotionPill({
  emotion = 'neutral',
  lang = 'en',
  style = {}
}) {
  const e = EMO[emotion] || EMO.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px 4px 9px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-tiny)',
      fontWeight: 'var(--w-heavy)',
      color: '#fff',
      background: e.c,
      boxShadow: `0 4px 14px ${e.c}66`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.95rem',
      lineHeight: 1
    }
  }, e.g), lang === 'zh' ? e.zh : e.en);
}
EmotionPill.emotions = Object.keys(EMO);
Object.assign(__ds_scope, { EmotionPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/EmotionPill.jsx", error: String((e && e.message) || e) }); }

// components/chat/Live2DStage.jsx
try { (() => {
/**
 * Live2DStage — renders Elysia's real Cubism 4 Live2D model (the Changli example
 * rig shipped in ai-vtuber/ExampleLive2DModel) inside the dark stream window.
 *
 * - Lazy-loads Cubism Core + PIXI + pixi-live2d-display from CDN (once).
 * - Auto blink + breathing (from the model3.json EyeBlink group).
 * - Lip-sync: drives ParamMouthOpenY while `speaking`.
 * - Emotion -> expression: maps the chat emotion set onto the model's
 *   button expressions (heart-eyes / blush / angry / eye-roll / dark-face).
 * - Falls back to the lightweight SVG <AvatarStage> if WebGL / load fails.
 */
const CDN = {
  core: 'https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js',
  pixi: 'https://cdn.jsdelivr.net/npm/pixi.js@6.5.10/dist/browser/pixi.min.js',
  l2d: 'https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.4.0/dist/cubism4.min.js'
};

// emotion (chat) -> model expression name (see changli.model3.json Expressions)
const EXPR = {
  happy: 'blush',
  playful: 'heart',
  shy: 'blush',
  sad: null,
  surprised: null,
  neutral: null,
  angry: 'angry'
};
let _loaderPromise = null;
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if ([...document.scripts].some(s => s.src === src)) return resolve();
    const el = document.createElement('script');
    el.src = src;
    el.crossOrigin = 'anonymous';
    el.onload = resolve;
    el.onerror = () => reject(new Error('load failed: ' + src));
    document.head.appendChild(el);
  });
}
async function ensureRuntime() {
  if (_loaderPromise) return _loaderPromise;
  _loaderPromise = (async () => {
    await loadScript(CDN.core);
    await loadScript(CDN.pixi);
    if (window.PIXI) window.PIXI = window.PIXI; // ensure global for plugin
    await loadScript(CDN.l2d);
    return true;
  })();
  return _loaderPromise;
}
function Live2DStage({
  modelUrl = '../../assets/live2d/changli.model3.json',
  emotion = 'neutral',
  speaking = false,
  name = 'Elysia',
  live = false,
  height = 360,
  zoom = 0.42,
  yOffset = 0.04,
  frameBg = 'radial-gradient(120% 90% at 50% 14%, #3a1f38 0%, #241630 55%, #1a1020 100%)',
  children,
  style = {}
}) {
  const wrapRef = React.useRef(null);
  const appRef = React.useRef(null);
  const modelRef = React.useRef(null);
  const speakingRef = React.useRef(speaking);
  const poseRef = React.useRef({
    nx: 0,
    ny: 0,
    last: 0,
    ax: 0,
    ay: 0,
    ex: 0,
    ey: 0,
    bx: 0
  });
  const [status, setStatus] = React.useState('loading'); // loading | ready | error
  speakingRef.current = speaking;

  // boot pixi + model once
  React.useEffect(() => {
    let cancelled = false;
    let mouthTicker = null;
    let poseTicker = null;
    // If the model can't be fetched within the budget (e.g. preview sandboxes
    // that block fetch() of project files), fall back to the SVG avatar.
    const failTimer = setTimeout(() => {
      if (!cancelled && !modelRef.current) {
        console.warn('[Live2DStage] model load timed out — using SVG fallback (fetch may be blocked in this environment; the real model loads on a normal server).');
        setStatus('error');
      }
    }, 12000);
    (async () => {
      try {
        await ensureRuntime();
        if (cancelled || !wrapRef.current) return;
        const PIXI = window.PIXI;
        const L2D = PIXI.live2d;
        if (!L2D) throw new Error('pixi-live2d-display not available');
        const box = wrapRef.current.getBoundingClientRect();
        const w0 = Math.max(1, Math.round(box.width));
        const h0 = Math.max(1, Math.round(box.height));
        // Let PIXI create & own its canvas, then mount it into the frame.
        const app = new PIXI.Application({
          width: w0,
          height: h0,
          autoStart: true,
          backgroundAlpha: 0,
          antialias: true,
          resolution: Math.min(window.devicePixelRatio || 1, 2),
          autoDensity: true
        });
        appRef.current = app;
        const view = app.view;
        view.style.position = 'absolute';
        view.style.inset = '0';
        view.style.width = '100%';
        view.style.height = '100%';
        wrapRef.current.appendChild(view);
        const model = await L2D.Live2DModel.from(modelUrl, {
          autoInteract: false
        });
        if (cancelled) {
          model.destroy();
          return;
        }
        modelRef.current = model;
        app.stage.addChild(model);
        const layout = () => {
          if (!wrapRef.current) return;
          const r = wrapRef.current.getBoundingClientRect();
          const w = Math.max(1, Math.round(r.width));
          const h = Math.max(1, Math.round(r.height));
          app.renderer.resize(w, h);
          const s = h / model.internalModel.height * (zoom / 0.42) * 1.9;
          model.scale.set(s);
          model.anchor.set(0.5, 0);
          model.position.set(w / 2, h * yOffset);
        };
        layout();
        model._omLayout = layout;

        // keep the renderer + framing in sync with the container size
        if (window.ResizeObserver) {
          const ro = new ResizeObserver(() => layout());
          ro.observe(wrapRef.current);
          model._omRO = ro;
        }

        // manual lip-sync each frame (override after the model's own update)
        let t = 0;
        mouthTicker = () => {
          t += 0.16;
          const cm = model.internalModel.coreModel;
          if (!cm) return;
          let v = 0;
          if (speakingRef.current) {
            v = (Math.sin(t) * 0.5 + 0.5) * (0.55 + Math.random() * 0.45);
          }
          try {
            cm.setParameterValueById('ParamMouthOpenY', v);
          } catch (e) {}
        };
        app.ticker.add(mouthTicker);

        // cursor / section awareness + idle life (head, eyes, body lean)
        const onMove = e => {
          const p = poseRef.current;
          p.nx = e.clientX / window.innerWidth * 2 - 1;
          p.ny = e.clientY / window.innerHeight * 2 - 1;
          p.last = performance.now();
        };
        window.addEventListener('pointermove', onMove);
        model._omMove = onMove;
        let pt = 0;
        poseTicker = () => {
          pt += 0.016;
          const cm = model.internalModel.coreModel;
          if (!cm) return;
          const p = poseRef.current;
          const idle = performance.now() - p.last > 2600;
          let tx = p.nx,
            ty = p.ny;
          if (idle) {
            tx = Math.sin(pt * 0.5) * 0.42;
            ty = Math.sin(pt * 0.33) * 0.22 - 0.05;
          }
          const k = 0.07;
          p.ax += (tx * 28 - p.ax) * k;
          p.ay += (-ty * 24 - p.ay) * k;
          p.ex += (tx * 0.9 - p.ex) * k;
          p.ey += (-ty * 0.9 - p.ey) * k;
          p.bx += (tx * 8 - p.bx) * k;
          try {
            cm.setParameterValueById('ParamAngleX', p.ax);
            cm.setParameterValueById('ParamAngleY', p.ay);
            cm.setParameterValueById('ParamAngleZ', p.ax * 0.22);
            cm.setParameterValueById('ParamEyeBallX', p.ex);
            cm.setParameterValueById('ParamEyeBallY', p.ey);
            cm.setParameterValueById('ParamBodyAngleX', p.bx);
          } catch (e) {}
        };
        app.ticker.add(poseTicker);
        clearTimeout(failTimer);
        setStatus('ready');
      } catch (e) {
        console.warn('[Live2DStage] falling back to SVG:', e && e.message);
        if (!cancelled) setStatus('error');
      }
    })();
    return () => {
      cancelled = true;
      clearTimeout(failTimer);
      try {
        if (mouthTicker && appRef.current) appRef.current.ticker.remove(mouthTicker);
      } catch (e) {}
      try {
        if (poseTicker && appRef.current) appRef.current.ticker.remove(poseTicker);
      } catch (e) {}
      try {
        if (modelRef.current && modelRef.current._omMove) window.removeEventListener('pointermove', modelRef.current._omMove);
      } catch (e) {}
      try {
        if (modelRef.current && modelRef.current._omRO) modelRef.current._omRO.disconnect();
      } catch (e) {}
      try {
        if (modelRef.current) modelRef.current.destroy();
      } catch (e) {}
      try {
        if (appRef.current) {
          try {
            if (appRef.current.view && appRef.current.view.parentNode) appRef.current.view.parentNode.removeChild(appRef.current.view);
          } catch (e) {}
          appRef.current.destroy(true);
        }
      } catch (e) {}
      appRef.current = null;
      modelRef.current = null;
    };
  }, [modelUrl]);

  // relayout on height change
  React.useEffect(() => {
    const m = modelRef.current;
    if (m && m._omLayout) m._omLayout();
  }, [height, zoom, yOffset, status]);

  // emotion -> expression
  React.useEffect(() => {
    const m = modelRef.current;
    if (!m || status !== 'ready') return;
    const name = EXPR[emotion];
    try {
      if (name) m.expression(name);else if (m.internalModel && m.internalModel.motionManager && m.internalModel.motionManager.expressionManager) {
        m.internalModel.motionManager.expressionManager.resetExpression();
      }
    } catch (e) {}
  }, [emotion, status]);

  // SVG fallback on failure
  if (status === 'error') {
    const poster = modelUrl.replace(/[^/]+\.model3\.json$/, 'icon.png');
    return /*#__PURE__*/React.createElement(__ds_scope.AvatarStage, {
      poster: poster,
      frameBg: frameBg,
      emotion: emotion,
      speaking: speaking,
      name: name,
      live: live,
      height: height,
      style: style
    }, children);
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: frameBg,
      border: '1px solid rgba(255,255,255,0.10)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '8%',
      width: '64%',
      aspectRatio: '1',
      transform: `translateX(-50%) scale(${speaking ? 1.08 : 1})`,
      borderRadius: '50%',
      filter: 'blur(10px)',
      pointerEvents: 'none',
      background: 'radial-gradient(circle, rgba(242,90,158,0.30), transparent 65%)',
      transition: 'transform 0.3s var(--ease-out)'
    }
  }), status === 'loading' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--elysia-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '3px solid rgba(255,158,203,0.25)',
      borderTopColor: 'var(--elysia-300)',
      animation: 'l2dspin 0.8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '0.78rem',
      color: 'rgba(255,233,244,0.7)'
    }
  }, "Summoning Elysia \u266A"), /*#__PURE__*/React.createElement("style", null, '@keyframes l2dspin{to{transform:rotate(360deg)}}')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 14,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '5px 12px 5px 7px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(26,16,32,0.55)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: live ? 'var(--brand)' : 'var(--success)',
      boxShadow: live ? '0 0 8px var(--brand)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '0.85rem',
      color: '#ffe9f4'
    }
  }, name), live && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '0.62rem',
      letterSpacing: '0.1em',
      color: 'var(--elysia-300)'
    }
  }, "LIVE")), children);
}
Object.assign(__ds_scope, { Live2DStage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/Live2DStage.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular image/emoji avatar with optional pink ring & speaking pulse.
 * For Elysia, pass the avatar art via `src` or an emoji/glyph via children.
 */
function Avatar({
  src,
  children,
  size = 56,
  ring = false,
  speaking = false,
  status,
  style = {},
  ...rest
}) {
  const wrap = {
    position: 'relative',
    width: size,
    height: size,
    flexShrink: 0,
    ...style
  };
  const circle = {
    width: '100%',
    height: '100%',
    borderRadius: 'var(--radius-full)',
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: size * 0.5,
    background: src ? 'transparent' : 'var(--brand-gradient-soft)',
    border: ring ? '2.5px solid var(--elysia-400)' : '2px solid var(--white)',
    boxShadow: speaking ? '0 0 0 4px rgba(242,90,158,0.35)' : 'var(--shadow-sm)',
    transition: 'box-shadow var(--dur) var(--ease)',
    overflow: 'hidden'
  };
  const dotColors = {
    online: 'var(--success)',
    live: 'var(--brand)',
    away: 'var(--warning)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: circle
  }) : /*#__PURE__*/React.createElement("div", {
    style: circle
  }, children), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: size * 0.28,
      height: size * 0.28,
      minWidth: 10,
      minHeight: 10,
      borderRadius: '50%',
      background: dotColors[status] || 'var(--success)',
      border: '2px solid var(--white)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/category pill. tones map to semantic + brand colors.
 */
function Badge({
  children,
  tone = 'brand',
  solid = false,
  style = {},
  ...rest
}) {
  const map = {
    brand: ['var(--elysia-600)', 'rgba(214,51,122,0.12)'],
    jeffi: ['var(--jeffi-600)', 'rgba(13,148,136,0.14)'],
    lavender: ['#8a5fc4', 'rgba(196,168,232,0.20)'],
    mint: ['#2f9a7d', 'rgba(168,221,208,0.28)'],
    crystal: ['#2b8fb0', 'rgba(143,211,232,0.26)'],
    success: ['var(--success)', 'rgba(63,185,138,0.16)'],
    warning: ['#b9791f', 'rgba(240,169,58,0.18)'],
    danger: ['var(--danger)', 'rgba(226,81,107,0.16)'],
    neutral: ['var(--plum-600)', 'rgba(122,77,110,0.12)']
  };
  const [fg, bg] = map[tone] || map.brand;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '3px 11px',
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-tiny)',
    fontWeight: 'var(--w-heavy)',
    lineHeight: 1.6,
    borderRadius: 'var(--radius-pill)',
    color: solid ? '#fff' : fg,
    background: solid ? fg : bg,
    border: solid ? '1px solid transparent' : `1px solid ${fg}22`,
    whiteSpace: 'nowrap',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control.
 * Variants: primary (brand gradient), secondary (glass), ghost (text), dark (on-dark glass).
 * Sizes: sm, md, lg. Pill-shaped, gentle lift on hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  href,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.82rem',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '0.95rem',
      gap: '8px'
    },
    lg: {
      padding: '15px 32px',
      fontSize: '1.05rem',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--brand-on)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1.5px solid transparent'
    },
    dark: {
      background: 'rgba(255,255,255,0.06)',
      color: 'var(--text-on-dark)',
      border: '1px solid rgba(255,255,255,0.20)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '-0.01em',
    borderRadius: 'var(--radius-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), background var(--dur) var(--ease), border-color var(--dur) var(--ease)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-hover)';
    if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.color = 'var(--brand)';
    }
    if (variant === 'dark') e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--brand)';
    if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.color = 'var(--text-strong)';
    }
    if (variant === 'dark') e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: href ? undefined : disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — translucent glass surface, soft pink shadow, rounded.
 * tones: glass (default), solid, tint, dark. Optional hover lift.
 */
function Card({
  children,
  tone = 'glass',
  hover = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const tones = {
    glass: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--text-body)'
    },
    solid: {
      background: 'var(--surface-solid)',
      border: '1px solid var(--border-soft)',
      color: 'var(--text-body)'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-soft)',
      color: 'var(--text-body)'
    },
    dark: {
      background: 'var(--glass-bg-dark)',
      border: '1px solid rgba(255,255,255,0.10)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--text-on-dark)'
    },
    surface: {
      background: 'var(--site-card-bg)',
      border: '1px solid var(--site-card-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--site-text-soft)'
    }
  };
  const base = {
    borderRadius: 'var(--radius-xl)',
    boxShadow: tone === 'dark' ? '0 16px 48px rgba(0,0,0,0.4)' : 'var(--shadow-md)',
    padding,
    transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    ...tones[tone],
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = tone === 'dark' ? '0 16px 48px rgba(0,0,0,0.4)' : 'var(--shadow-md)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a circular icon-only control for chrome (send, mic, play, close…).
 * Variants: solid (brand), glass, ghost, dark.
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  active = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 52
  };
  const d = dims[size] || 40;
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: '#fff',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid transparent'
    },
    glass: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: active ? 'var(--brand-soft)' : 'transparent',
      color: active ? 'var(--brand)' : 'var(--text-muted)',
      border: '1px solid transparent'
    },
    dark: {
      background: active ? 'rgba(242,90,158,0.18)' : 'rgba(255,255,255,0.05)',
      color: active ? 'var(--elysia-300)' : 'var(--text-on-dark)',
      border: '1px solid rgba(255,255,255,0.14)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: d,
    height: d,
    fontSize: d * 0.42,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur) var(--ease-out), background var(--dur) var(--ease)',
    flexShrink: 0,
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(1.1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(1.1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatComposer.jsx
try { (() => {
/**
 * ChatComposer — the message input row for Elysia chat: text field, mic (STT),
 * and send. `listening` shows the recording state; `dark` for plum overlays.
 */
function ChatComposer({
  value = '',
  onChange,
  onSend,
  onMic,
  listening = false,
  dark = true,
  placeholder = 'Say something to Elysia…',
  style = {}
}) {
  const submit = () => {
    if (value.trim() && onSend) onSend(value.trim());
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 8px 8px 16px',
      borderRadius: 'var(--radius-pill)',
      background: dark ? 'rgba(255,255,255,0.07)' : 'var(--surface-solid)',
      border: `1.5px solid ${dark ? 'rgba(255,255,255,0.14)' : 'var(--border-card)'}`,
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') submit();
    },
    placeholder: listening ? 'Listening…' : placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--w-medium)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: dark ? 'dark' : 'ghost',
    size: "md",
    label: "Voice input",
    active: listening,
    onClick: onMic
  }, listening ? '🔴' : '🎙️'), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: "solid",
    size: "md",
    label: "Send",
    onClick: submit
  }, "\u27A4"));
}
Object.assign(__ds_scope, { ChatComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatComposer.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field / textarea with soft rounded border and pink focus ring.
 */
function Input({
  as = 'input',
  icon = null,
  dark = false,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const Tag = as;
  const wrap = {
    display: 'flex',
    alignItems: as === 'textarea' ? 'flex-start' : 'center',
    gap: '10px',
    padding: as === 'textarea' ? '12px 16px' : '0 16px',
    height: as === 'textarea' ? 'auto' : '46px',
    borderRadius: 'var(--radius-md)',
    background: dark ? 'rgba(255,255,255,0.06)' : 'var(--surface-solid)',
    border: `1.5px solid ${dark ? 'rgba(255,255,255,0.14)' : 'var(--border-card)'}`,
    transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)',
    ...wrapStyle
  };
  const field = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    fontWeight: 'var(--w-medium)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
    resize: as === 'textarea' ? 'vertical' : undefined,
    minHeight: as === 'textarea' ? '60px' : undefined,
    padding: as === 'textarea' ? 0 : '12px 0',
    lineHeight: 1.5,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap,
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)';
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.14)' : 'var(--border-card)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement(Tag, _extends({
    style: field
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — pill toggle with a sliding pink knob. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const track = {
    position: 'relative',
    width: 46,
    height: 26,
    borderRadius: 'var(--radius-pill)',
    background: checked ? 'var(--brand)' : 'var(--ash)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur) var(--ease)',
    flexShrink: 0,
    border: 'none',
    padding: 0,
    boxShadow: checked ? 'var(--shadow-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.08)'
  };
  const knob = {
    position: 'absolute',
    top: 3,
    left: checked ? 23 : 3,
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: '#fff',
    boxShadow: 'var(--shadow-sm)',
    transition: 'left var(--dur) var(--ease-bounce)'
  };
  const row = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    opacity: disabled ? 0.5 : 1,
    ...style
  };
  return /*#__PURE__*/React.createElement("label", {
    style: row
  }, /*#__PURE__*/React.createElement("button", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: track,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: knob
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — underline/segmented navigation. items: [{key,label,icon?}].
 * variant: 'pill' (segmented glass) | 'underline'.
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'pill',
  dark = false,
  style = {}
}) {
  if (variant === 'underline') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-6)',
        borderBottom: `1.5px solid ${dark ? 'rgba(255,255,255,0.12)' : 'var(--border-card)'}`,
        ...style
      }
    }, items.map(it => {
      const on = it.key === value;
      return /*#__PURE__*/React.createElement("button", {
        key: it.key,
        onClick: () => onChange && onChange(it.key),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '12px 2px',
          marginBottom: -1.5,
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-small)',
          fontWeight: 'var(--w-heavy)',
          color: on ? 'var(--brand)' : dark ? 'var(--text-on-dark)' : 'var(--text-muted)',
          borderBottom: `2.5px solid ${on ? 'var(--brand)' : 'transparent'}`,
          transition: 'color var(--dur) var(--ease)'
        }
      }, it.icon && /*#__PURE__*/React.createElement("span", null, it.icon), it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: '4px',
      padding: '4px',
      background: dark ? 'rgba(255,255,255,0.06)' : 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, items.map(it => {
    const on = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onChange && onChange(it.key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '8px 18px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-small)',
        fontWeight: 'var(--w-heavy)',
        color: on ? '#fff' : dark ? 'var(--text-on-dark)' : 'var(--text-muted)',
        background: on ? 'var(--brand)' : 'transparent',
        boxShadow: 'none',
        transition: 'all var(--dur) var(--ease)'
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", null, it.icon), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — restrained chip. Outline by default, a flat solid fill when active.
 * No glass blur, no gradient — accent used sparingly.
 */
function Tag({
  children,
  active = false,
  onClick,
  dark = false,
  style = {},
  ...rest
}) {
  const interactive = !!onClick;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    padding: '7px 15px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.78rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius-xs)',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'color var(--dur) var(--ease), border-color var(--dur) var(--ease), background var(--dur) var(--ease)',
    color: active ? dark ? 'var(--ink, #0e0a12)' : '#fff' : dark ? 'var(--text-on-dark)' : 'var(--text-muted)',
    background: active ? 'var(--brand)' : 'transparent',
    border: active ? '1px solid var(--brand)' : dark ? '1px solid rgba(255,255,255,0.16)' : '1px solid var(--border-strong)',
    whiteSpace: 'nowrap',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: base,
    onMouseEnter: interactive && !active ? e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.color = dark ? '#fff' : 'var(--brand)';
    } : undefined,
    onMouseLeave: interactive && !active ? e => {
      e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.16)' : 'var(--border-strong)';
      e.currentTarget.style.color = dark ? 'var(--text-on-dark)' : 'var(--text-muted)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elysia-chat/ElysiaBrain.jsx
try { (() => {
// ElysiaBrain — canned bilingual "responses" + emotion detection + a reusable
// chat panel used by both the full chat kit and the personal-site dock.
// Responses & voice are drawn from ai-vtuber/persona/elysia.json (mocked, not a real LLM).
const {
  AvatarStage,
  Live2DStage,
  ChatBubble,
  ChatComposer,
  EmotionPill,
  Switch,
  IconButton,
  Avatar
} = window.ElysiaJeffiDesignSystem_f13e8e;
const isZh = s => /[\u4e00-\u9fff]/.test(s);
function detectEmotion(t) {
  const low = (t || '').toLowerCase();
  const cue = {
    surprised: ['?!', '！？', 'wow', 'whoa', '哎呀', '诶', '欸'],
    sad: ['sorry', 'rough', 'hurts', 'lonely', 'sad', 'tired', '对不起', '难过', '累', '心疼'],
    shy: ['pretty', 'cute', 'love you', 'blush', '害羞', '可爱', '喜欢你', '脸红'],
    playful: ['hehe', 'tease', '~', '♪', 'flirt', '嘻嘻', '嗯哼', '撩', '调皮'],
    happy: ['yay', 'thank', 'great', 'welcome', 'nice', '开心', '谢谢', '棒', '欢迎', '好']
  };
  for (const e of ['surprised', 'sad', 'shy', 'playful', 'happy']) {
    if (cue[e].some(c => low.includes(c))) return e;
  }
  return 'happy';
}
const REPLIES = [{
  k: ['hi', 'hello', 'hey', '你好', '嗨'],
  en: 'Ah, you came to see me ♪ Welcome, dear — I was already waiting for you, of course.',
  zh: '呀，你来啦♪ 欢迎欢迎，亲爱的——我可是一直在这儿等着你呢。',
  e: 'happy'
}, {
  k: ['pretty', 'beautiful', 'cute', '可爱', '漂亮'],
  en: 'Hehe, you noticed? The prettiest girl in the universe says thank you~ But you\u2019re rather lovely yourself, you know.',
  zh: '嘻嘻，你发现啦？全宇宙最可爱的女孩谢谢你哦～不过你自己也很惹人喜欢呢。',
  e: 'shy'
}, {
  k: ['sad', 'rough', 'tired', 'lonely', '累', '难过', '孤独'],
  en: 'Oh, sweetie\u2026 come here. Whatever it was, you made it through, and that\u2019s worth being proud of.',
  zh: '唔，亲爱的\u2026\u2026来我这儿吧。不管发生了什么，你都撑过来了，这已经很了不起了。',
  e: 'sad'
}, {
  k: ['who are you', '你是谁', 'what are you'],
  en: 'I\u2019m Elysia, Miss Pink Elf herself — your radiant little VTuber who loves beauty, people, and moments worth remembering.',
  zh: '我是爱莉希雅，粉色妖精小姐本人——爱美、爱人，也爱一切值得珍藏的瞬间的AI VTuber哦。',
  e: 'playful'
}, {
  k: ['flirt', '撩'],
  en: 'Only a little~ A compliment should flutter in gently, like a petal, not crash through the window.',
  zh: '只是一点点啦～夸奖应该像花瓣一样轻轻飘进来，而不是撞破窗户呀。',
  e: 'playful'
}, {
  k: ['goodnight', 'good night', '晚安'],
  en: 'Goodnight, dear. May your dreams be soft, your worries shy, and tomorrow just a little kinder ♪',
  zh: '晚安，亲爱的。愿你今晚被温柔包围，明天醒来时连风都会偏爱你一点♪',
  e: 'happy'
}];
function elysiaRespond(input) {
  const zh = isZh(input);
  const low = input.toLowerCase();
  const hit = REPLIES.find(r => r.k.some(k => low.includes(k)));
  if (hit) return {
    text: zh ? hit.zh : hit.en,
    emotion: hit.e
  };
  return {
    text: zh ? '嗯哼，我在认真听着呢，亲爱的。再多和我说一点吧♪' : 'Mm-hm, I\u2019m listening closely, dear. Tell me a little more ♪',
    emotion: 'playful'
  };
}
function ElysiaChatPanel({
  lang = 'en',
  setLang,
  compact = false,
  onClose
}) {
  const [msgs, setMsgs] = React.useState([{
    from: 'elysia',
    text: lang === 'zh' ? '呀，你来啦♪ 想聊点什么呢，亲爱的？' : 'Ah, you came to see me ♪ What shall we talk about, dear?'
  }]);
  const [text, setText] = React.useState('');
  const [emotion, setEmotion] = React.useState('happy');
  const [speaking, setSpeaking] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [listening, setListening] = React.useState(false);
  const [tts, setTts] = React.useState(true);
  const threadRef = React.useRef(null);
  React.useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [msgs, typing]);
  const send = m => {
    setMsgs(x => [...x, {
      from: 'user',
      text: m
    }]);
    setText('');
    setTyping(true);
    setTimeout(() => {
      const r = elysiaRespond(m);
      setTyping(false);
      setEmotion(r.emotion);
      setMsgs(x => [...x, {
        from: 'elysia',
        text: r.text
      }]);
      if (tts) {
        setSpeaking(true);
        setTimeout(() => setSpeaking(false), Math.min(4500, 1200 + r.text.length * 45));
      }
    }, 900);
  };
  const stageH = compact ? 188 : 360;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Live2DStage, {
    emotion: emotion,
    speaking: speaking,
    live: true,
    name: "Elysia",
    height: stageH,
    modelUrl: "../../assets/live2d/changli.model3.json",
    style: {
      borderRadius: compact ? '0' : 'var(--radius-xl)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(EmotionPill, {
    emotion: emotion,
    lang: lang
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'flex',
      gap: '6px'
    }
  }, setLang && /*#__PURE__*/React.createElement(IconButton, {
    variant: "dark",
    size: "sm",
    label: "Language",
    onClick: () => setLang(lang === 'en' ? 'zh' : 'en')
  }, "\uD83C\uDF10"), onClose && /*#__PURE__*/React.createElement(IconButton, {
    variant: "dark",
    size: "sm",
    label: "Close",
    onClick: onClose
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    ref: threadRef,
    style: {
      flex: 1,
      minHeight: compact ? 150 : 220,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '16px',
      background: 'var(--night-900)'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: m.from,
    name: m.from === 'elysia' ? 'Elysia ♪' : undefined
  }, m.text)), typing && /*#__PURE__*/React.createElement(ChatBubble, {
    from: "elysia",
    typing: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: '12px 16px 14px',
      background: 'var(--night-900)',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: tts,
    onChange: setTts,
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,233,244,0.8)'
      }
    }, lang === 'zh' ? '语音 (TTS)' : 'Voice (TTS)')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.66rem',
      color: 'rgba(255,233,244,0.4)'
    }
  }, "qwen3:8b \xB7 EN/\u4E2D\u6587")), /*#__PURE__*/React.createElement(ChatComposer, {
    value: text,
    onChange: setText,
    onSend: send,
    onMic: () => setListening(!listening),
    listening: listening,
    placeholder: lang === 'zh' ? '和爱莉说点什么…' : 'Say something to Elysia…'
  })));
}
Object.assign(window, {
  elysiaRespond,
  detectEmotion,
  ElysiaChatPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elysia-chat/ElysiaBrain.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elysia-chat/ElysiaChatFull.jsx
try { (() => {
// ElysiaChatFull — the full Elysia chat experience (side-by-side avatar + thread).
// Uses elysiaRespond / detectEmotion from ElysiaBrain.jsx (window globals).
const {
  AvatarStage,
  Live2DStage,
  ChatBubble,
  ChatComposer,
  EmotionPill,
  Switch,
  IconButton,
  Card,
  Badge,
  Tag
} = window.ElysiaJeffiDesignSystem_f13e8e;
function ElysiaChatFull() {
  const [lang, setLang] = React.useState('en');
  const greet = (() => {
    const h = new Date().getHours();
    if (h < 5) return {
      en: 'Mm… still awake at this hour? Come, the night is ours — sit with me a while ♪',
      zh: '咕……这么晚还清醒着？来吧，夜晚属于我们——陪我坐一会儿♪',
      emo: 'shy'
    };
    if (h < 12) return {
      en: 'Good morning, sleepyhead ♪ I was hoping you would come see me today.',
      zh: '早安，小懒虫♪ 我还期待着你今天来看我呢。',
      emo: 'happy'
    };
    if (h < 18) return {
      en: 'Ah, good afternoon, dear — you came to see me ♪ Of course you did.',
      zh: '呀，下午好，亲爱的——你来看我啦♪ 果然如此。',
      emo: 'happy'
    };
    if (h < 23) return {
      en: 'Good evening ♪ The stars are out, and so am I — just for you.',
      zh: '晚上好♪ 繁星已然现身，我也是——只为了你。',
      emo: 'playful'
    };
    return {
      en: 'Good night, sweetie — before you dream, let me see your face once more ♪',
      zh: '晚安，亲爱的——在入梦之前，让我再看看你♪',
      emo: 'shy'
    };
  })();
  const [msgs, setMsgs] = React.useState([{
    from: 'elysia',
    text: greet.en
  }]);
  const [text, setText] = React.useState('');
  const [emotion, setEmotion] = React.useState('happy');
  const [speaking, setSpeaking] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [listening, setListening] = React.useState(false);
  const [tts, setTts] = React.useState(true);
  const [autoplay, setAutoplay] = React.useState(true);
  const threadRef = React.useRef(null);

  // greeting reflects the visitor's local time; realm reacts while she speaks
  React.useEffect(() => {
    setEmotion(greet.emo);
  }, []);
  React.useEffect(() => {
    setMsgs([{
      from: 'elysia',
      text: lang === 'zh' ? greet.zh : greet.en
    }]);
  }, [lang]);
  React.useEffect(() => {
    document.body.classList.toggle('realm-pulse', speaking);
    return () => document.body.classList.remove('realm-pulse');
  }, [speaking]);
  React.useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [msgs, typing]);
  const send = m => {
    setMsgs(x => [...x, {
      from: 'user',
      text: m
    }]);
    setText('');
    setTyping(true);
    setTimeout(() => {
      const r = window.elysiaRespond(m);
      setTyping(false);
      setEmotion(r.emotion);
      setMsgs(x => [...x, {
        from: 'elysia',
        text: r.text
      }]);
      if (tts) {
        setSpeaking(true);
        setTimeout(() => setSpeaking(false), Math.min(4500, 1200 + r.text.length * 45));
      }
    }, 950);
  };
  const chips = lang === 'zh' ? ['你好呀爱莉希雅', '夸夸我', '我今天好累', '你是谁', '晚安'] : ['hi elysia!', "you're so pretty", 'i had a rough day', 'who are you?', 'goodnight'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,360px) minmax(0,1fr)',
      gap: '20px',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(16px,3vw,32px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      position: 'sticky',
      top: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Live2DStage, {
    emotion: emotion,
    speaking: speaking,
    live: true,
    name: "Elysia",
    height: 400,
    modelUrl: "../../assets/live2d/changli.model3.json",
    frameBg: "radial-gradient(120% 95% at 50% 12%, #3a2470 0%, #1a0f44 52%, #0a0822 100%)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(EmotionPill, {
    emotion: emotion,
    lang: lang
  })), speaking && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 3,
      height: 22
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 3,
      borderRadius: 3,
      background: 'var(--elysia-300)',
      height: '100%',
      animation: `vu .6s ${i * 0.1}s infinite alternate ease-in-out`
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '1.2rem',
      color: '#fff'
    }
  }, "Elysia ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--elysia-400)'
    }
  }, "\u266A")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    solid: true
  }, lang === 'zh' ? '粉色妖精小姐' : 'Miss Pink Elf')), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: '0.86rem',
      lineHeight: 1.55,
      color: 'rgba(255,233,244,0.66)'
    }
  }, lang === 'zh' ? '温暖、俏皮、优雅的 AI VTuber，会说中英双语，有语音、表情与 Live2D 形象。' : 'A warm, playful, elegant AI VTuber — bilingual, with voice, expressions, and a Live2D presence.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: tts,
    onChange: setTts,
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,233,244,0.85)'
      }
    }, lang === 'zh' ? '语音输出 (TTS)' : 'Voice output (TTS)')
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: autoplay,
    onChange: setAutoplay,
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,233,244,0.85)'
      }
    }, lang === 'zh' ? '自动播放' : 'Autoplay reply')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      paddingTop: '14px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.66rem',
      color: 'rgba(255,233,244,0.4)',
      lineHeight: 1.7
    }
  }, "model > qwen3:8b \xB7 temp 0.92", /*#__PURE__*/React.createElement("br", null), "voice > XTTS-v2 \xB7 EN / \u4E2D\u6587"))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "0",
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '74vh',
      minHeight: 460,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '0.95rem',
      color: '#fff'
    }
  }, lang === 'zh' ? '和爱莉聊天' : 'Chat with Elysia'), /*#__PURE__*/React.createElement(IconButton, {
    variant: "dark",
    size: "sm",
    label: "Language",
    onClick: () => setLang(lang === 'en' ? 'zh' : 'en')
  }, "\uD83C\uDF10")), /*#__PURE__*/React.createElement("div", {
    ref: threadRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '18px'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: m.from,
    name: m.from === 'elysia' ? 'Elysia \u266a' : undefined
  }, m.text)), typing && /*#__PURE__*/React.createElement(ChatBubble, {
    from: "elysia",
    typing: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px 16px',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '10px'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    dark: true,
    onClick: () => send(c)
  }, c))), /*#__PURE__*/React.createElement(ChatComposer, {
    value: text,
    onChange: setText,
    onSend: send,
    onMic: () => setListening(!listening),
    listening: listening,
    placeholder: lang === 'zh' ? '和爱莉说点什么…' : 'Say something to Elysia…'
  }))));
}
window.ElysiaChatFull = ElysiaChatFull;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elysia-chat/ElysiaChatFull.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/AboutProjects.jsx
try { (() => {
// About + Projects sections — real content from the original jeffi site.
const {
  Card,
  Badge,
  Tag
} = window.ElysiaJeffiDesignSystem_f13e8e;
function About({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(40px,7vh,72px) clamp(16px,4vw,40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)',
      gap: 'clamp(24px,5vw,56px)',
      alignItems: 'center'
    },
    className: "resp-2col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--site-accent)'
    }
  }, lang === 'zh' ? '你好呀' : 'Hello there'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.8rem,4vw,2.5rem)',
      color: 'var(--site-text)',
      margin: '8px 0 18px'
    }
  }, lang === 'zh' ? '我是 Jeffi' : "I'm Jeffi"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: 'var(--site-text-soft)',
      margin: '0 0 16px',
      textWrap: 'pretty'
    }
  }, lang === 'zh' ? '一名学生开发者，热爱把代码、游戏和动漫融合在一起。我做全栈 Web 应用、玩音游（maimai 主玩），也在打造我自己的 AI VTuber —— Elysia。' : "A student developer who loves blending code, games, and anime. I build full-stack web apps, main rhythm games (maimai), and I'm building my own AI VTuber — Elysia."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: 'var(--site-text-soft)',
      margin: '0 0 24px',
      textWrap: 'pretty'
    }
  }, lang === 'zh' ? '这个网站是我的小天地 —— 项目、游戏、音乐、动漫，还有一个能和你聊天的她。' : "This site is my little corner — projects, games, music, anime, and a her who can chat with you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "jeffi"
  }, lang === 'zh' ? '多伦多大学' : 'UofT Mississauga'), /*#__PURE__*/React.createElement(Badge, {
    tone: "crystal"
  }, lang === 'zh' ? '全栈开发' : 'Full-stack Dev'), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, lang === 'zh' ? 'VTuber 创作者' : 'VTuber Maker'), /*#__PURE__*/React.createElement(Badge, {
    tone: "mint"
  }, lang === 'zh' ? '音游玩家' : 'Rhythm Gamer'))), /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: "26px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, [{
    k: lang === 'zh' ? '所在地' : 'Based in',
    v: lang === 'zh' ? '加拿大 · 多伦多' : 'Toronto, Canada'
  }, {
    k: lang === 'zh' ? '专注于' : 'Focused on',
    v: lang === 'zh' ? 'Web + AI + 游戏' : 'Web + AI + Games'
  }, {
    k: lang === 'zh' ? '正在学' : 'Learning',
    v: lang === 'zh' ? '后端 · React · Godot' : 'Backend · React · Godot'
  }, {
    k: lang === 'zh' ? '语言' : 'Languages',
    v: 'English · 中文'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12,
      paddingBottom: 12,
      borderBottom: i < 3 ? '1px solid var(--site-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 800,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--site-text-faint)'
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '0.95rem',
      color: 'var(--site-text)',
      textAlign: 'right'
    }
  }, r.v)))))));
}
const PROJECTS = [{
  cat: 'web',
  status: 'live',
  featured: true,
  ic: 'cap',
  grad: 'linear-gradient(135deg,#2dd4bf,#0d9488)',
  tags: ['React', 'Node.js', 'Python', 'DeepSeek AI', 'Git', 'Jira'],
  live: 'https://utmcssaaiagent.com/',
  en: {
    t: 'UTMCSSA Web Platform',
    s: 'Live',
    o: 'Full-stack student platform with an AI assistant',
    d: 'A full-stack platform for the UTMCSSA student association supporting incoming Chinese international students at UofT. Python backend for course data, a React + Node.js front end, and an integrated DeepSeek AI assistant — built collaboratively with Git & Jira.'
  },
  zh: {
    t: 'UTMCSSA 网络平台',
    s: '已上线',
    o: '带 AI 助手的全栈学生平台',
    d: '为多伦多大学密西沙加分校中国学生学者联合会打造的全栈平台。Python 后端实现课程数据接口，前端采用 React + Node.js，并集成 DeepSeek AI 助手。团队使用 Git 与 Jira 协作。'
  }
}, {
  cat: 'web',
  status: 'wip',
  ic: 'music',
  grad: 'linear-gradient(135deg,#8fd3e8,#2dd4bf)',
  tags: ['React', 'JavaScript', 'CSS', 'Public API'],
  live: '#',
  en: {
    t: 'maimai Fan Hub',
    s: 'In Progress',
    o: 'Rating optimizer & song catalog',
    d: 'A fan site for maimai DX players — a real-time rating optimizer, the full song catalog with difficulty filters, player stats, and a "maimai Wrapped" year-in-review.'
  },
  zh: {
    t: 'maimai 粉丝站',
    s: '开发中',
    o: 'Rating 优化器与歌曲库',
    d: '专为 maimai DX 玩家打造 —— 实时 Rating 优化器、带难度筛选的完整歌曲库、玩家数据统计及年度回顾功能。'
  }
}, {
  cat: 'tool',
  status: 'live',
  ic: 'box',
  grad: 'linear-gradient(135deg,#c4a8e8,#8fd3e8)',
  tags: ['ArcGIS Pro', 'ERDAS', 'Remote Sensing', 'GIS', 'DJI Mini 4 Pro'],
  live: '#',
  en: {
    t: 'Drone Survey Project',
    s: 'Completed',
    o: 'Remote-sensing campus mapping',
    d: 'High-resolution drone imagery of campus for remote-sensing analysis — 3D building models, vegetation maps, and GIS land-cover analysis.'
  },
  zh: {
    t: '无人机测绘项目',
    s: '已完成',
    o: '遥感校园测绘与三维建模',
    d: '采集校园高分辨率无人机影像用于遥感分析 —— 三维建筑模型、植被分布图与 GIS 地表覆盖分析。'
  }
}, {
  cat: 'game',
  status: 'live',
  ic: 'swords',
  grad: 'linear-gradient(135deg,#a8ddd0,#8fd3e8)',
  tags: ['Unity', 'JavaScript', 'Game Dev', 'Agile'],
  live: '#',
  en: {
    t: '2D Adventure Game',
    s: 'Completed',
    o: 'Unity course project — led delivery',
    d: 'A 2D adventure built with Unity + JavaScript for a course project. Led core gameplay and UI delivery in an agile workflow after much of the team withdrew.'
  },
  zh: {
    t: '2D 冒险游戏',
    s: '已完成',
    o: 'Unity 课程项目 · 主导交付',
    d: '使用 Unity + JavaScript 开发的 2D 冒险课程项目。在团队大幅缩减后主导完成核心玩法与 UI 交付。'
  }
}, {
  cat: 'game',
  status: 'soon',
  ic: 'gamepad',
  grad: 'linear-gradient(135deg,#5eead4,#0d9488)',
  tags: ['Godot 4', 'GDScript', 'Game Dev', 'Collab'],
  live: '#',
  en: {
    t: 'Fan Game Project',
    s: 'Coming Soon',
    o: '2D platformer in Godot 4',
    d: 'A 2D fan game inspired by a favourite anime — platformer mechanics with original collaborator art. Built with Godot 4, planned for itch.io.'
  },
  zh: {
    t: '同人游戏项目',
    s: '即将推出',
    o: 'Godot 4 的 2D 平台游戏',
    d: '受最爱动漫启发的 2D 同人游戏 —— 横版平台机制与合作者原创美术。使用 Godot 4 开发，计划在 itch.io 发布。'
  }
}, {
  cat: 'web',
  status: 'live',
  ic: 'sparkles',
  grad: 'linear-gradient(135deg,#ff9ecb,#c4a8e8)',
  tags: ['HTML', 'CSS', 'JavaScript', 'Design System'],
  live: '#',
  en: {
    t: 'This Portfolio',
    s: 'Live',
    o: 'Bilingual portfolio + embedded AI VTuber',
    d: "The site you're on — a bilingual portfolio with a music player, gallery, and an embedded AI VTuber. Built on the Elysia × Jeffi design system."
  },
  zh: {
    t: '个人作品集网站',
    s: '已上线',
    o: '双语作品集 + 内嵌 AI VTuber',
    d: '就是你正在浏览的网站 —— 双语作品集，含音乐播放器、相册与内嵌 AI VTuber。基于 Elysia × Jeffi 设计系统构建。'
  }
}];
const STATUS_C = {
  live: 'var(--success)',
  wip: '#f0a93a',
  soon: 'var(--site-text-faint)'
};

// inline .execute() loader shown inside the expanding detail block
function MiniExec({
  label,
  lang
}) {
  const [n, setN] = React.useState(0);
  const lines = ['$ open ' + JSON.stringify(label), '> compiling view…', '> .execute() ✓'];
  React.useEffect(() => {
    const ts = lines.map((_, i) => setTimeout(() => setN(i + 1), 110 + i * 230));
    return () => ts.forEach(clearTimeout);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "pj-spin",
    width: "38",
    height: "38",
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: "var(--site-accent)",
    strokeWidth: "3",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      filter: 'drop-shadow(0 0 10px rgba(45,212,191,.55))'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "50,8 84,40 50,92 16,40"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "50,8 67,40 50,56 33,40",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "40",
    r: "3",
    fill: "var(--site-accent)",
    stroke: "none"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.78rem',
      lineHeight: 1.8,
      color: 'var(--site-text-muted)'
    }
  }, lines.slice(0, n).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      color: i === 2 ? 'var(--success)' : i === 0 ? 'var(--site-accent)' : 'inherit'
    }
  }, l)), n < lines.length && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--site-accent)',
      animation: 'pjBlink 1s steps(1) infinite'
    }
  }, "\u2588")));
}
function ProjItem({
  p,
  lang,
  featured,
  openId,
  loadId,
  onToggle
}) {
  const d = p[lang === 'zh' ? 'zh' : 'en'];
  const isOpen = openId === p.id;
  const isLoad = loadId === p.id;
  return /*#__PURE__*/React.createElement("article", {
    className: "pj",
    onClick: () => onToggle(p),
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onToggle(p);
      }
    },
    style: {
      breakInside: 'avoid',
      WebkitColumnBreakInside: 'avoid',
      marginBottom: featured ? 0 : 22,
      cursor: 'pointer',
      position: 'relative',
      paddingTop: 18,
      borderTop: '1px solid var(--site-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -1,
      left: 0,
      width: featured ? 72 : 44,
      height: 2,
      background: p.grad
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--site-text-soft)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: p.ic,
    size: featured ? 22 : 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.62rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: STATUS_C[p.status]
    }
  }, d.s), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'var(--site-text-faint)',
      display: 'inline-flex',
      transform: isOpen ? 'rotate(90deg)' : 'none',
      transition: 'transform .3s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "code",
    size: 15
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: featured ? 'clamp(1.6rem,3vw,2.3rem)' : '1.25rem',
      letterSpacing: '-0.03em',
      color: 'var(--site-text)',
      margin: '0 0 6px',
      lineHeight: 1.05
    }
  }, d.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: featured ? '1rem' : '0.9rem',
      color: 'var(--site-text-muted)',
      margin: 0,
      lineHeight: 1.5
    }
  }, d.o), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: isOpen || isLoad ? 340 : 0,
      opacity: isOpen || isLoad ? 1 : 0,
      transition: 'max-height .45s var(--ease-out), opacity .3s'
    }
  }, isLoad ? /*#__PURE__*/React.createElement(MiniExec, {
    label: d.t,
    lang: lang
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.94rem',
      lineHeight: 1.7,
      color: 'var(--site-text-soft)',
      margin: '0 0 14px',
      textWrap: 'pretty'
    }
  }, d.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      marginBottom: 14
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement("i", {
    key: t,
    style: {
      fontStyle: 'normal',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.66rem',
      color: 'var(--site-text-muted)',
      padding: '3px 9px',
      border: '1px solid var(--site-hairline)',
      borderRadius: 3
    }
  }, t))), p.live && p.live !== '#' && /*#__PURE__*/React.createElement("a", {
    href: p.live,
    target: "_blank",
    rel: "noopener",
    onClick: e => e.stopPropagation(),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.78rem',
      color: 'var(--site-accent)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--site-accent)',
      paddingBottom: 2
    }
  }, lang === 'zh' ? '访问线上' : 'Visit live', " \u2197"))));
}
function Projects({
  lang
}) {
  const [filter, setFilter] = React.useState('all');
  const [openId, setOpenId] = React.useState(null);
  const [loadId, setLoadId] = React.useState(null);
  const timer = React.useRef(null);
  const filters = [{
    k: 'all',
    en: 'All',
    zh: '全部'
  }, {
    k: 'web',
    en: 'Web',
    zh: '网页'
  }, {
    k: 'game',
    en: 'Games',
    zh: '游戏'
  }, {
    k: 'tool',
    en: 'Tools',
    zh: '工具'
  }];
  const items = PROJECTS.map((p, i) => ({
    ...p,
    id: p.id || 'p' + i
  }));
  const toggle = p => {
    clearTimeout(timer.current);
    if (openId === p.id) {
      setOpenId(null);
      return;
    }
    setOpenId(null);
    setLoadId(p.id);
    timer.current = setTimeout(() => {
      setLoadId(null);
      setOpenId(p.id);
    }, 920);
  };
  const featured = filter === 'all' ? items.find(p => p.featured) : null;
  const rest = filter === 'all' ? items.filter(p => !p.featured) : items.filter(p => p.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes pjBlink{50%{opacity:0}}@keyframes pjSpin{to{transform:rotate(360deg)}}.pj-spin{animation:pjSpin 2.4s linear infinite;transform-origin:50% 50%}.pj:hover h3{color:var(--site-accent)!important}.pj h3{transition:color .25s}'), /*#__PURE__*/React.createElement(window.SecHead, {
    n: "01",
    eyebrow: lang === 'zh' ? '我的作品' : 'My Work',
    title: lang === 'zh' ? '项目' : 'Projects',
    kana: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: 'clamp(26px,4vh,40px)'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f.k,
    dark: true,
    active: filter === f.k,
    onClick: () => {
      setFilter(f.k);
      setOpenId(null);
    }
  }, lang === 'zh' ? f.zh : f.en))), featured && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30,
      paddingBottom: 30,
      borderBottom: '1px solid var(--site-hairline)'
    }
  }, /*#__PURE__*/React.createElement(ProjItem, {
    p: featured,
    lang: lang,
    featured: true,
    openId: openId,
    loadId: loadId,
    onToggle: toggle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      columnWidth: '300px',
      columnGap: '40px'
    }
  }, rest.map(p => /*#__PURE__*/React.createElement(ProjItem, {
    key: p.id,
    p: p,
    lang: lang,
    openId: openId,
    loadId: loadId,
    onToggle: toggle
  }))));
}
Object.assign(window, {
  About,
  Projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/AboutProjects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/AnimeFaves.jsx
try { (() => {
// AnimeFaves — gacha games + favourite characters (emoji avatars; real art omitted for copyright).
const {
  Card,
  Tabs,
  Badge
} = window.ElysiaJeffiDesignSystem_f13e8e;
const GACHA = {
  pjsk: {
    en: ['Project Sekai', 'feat. Hatsune Miku · Rhythm'],
    zh: ['世界计划', 'feat. 初音未来 · 音游'],
    chars: [{
      e: '🌙',
      bg: 'linear-gradient(135deg,#2E1A5C,#7B4FA0)',
      n: 'Mafuyu',
      jp: '朝比奈まふゆ',
      en: '25-ji, Nightcord de.',
      zh: '25时，夜晚绳结。',
      fav: true
    }, {
      e: '🎤',
      bg: 'linear-gradient(135deg,#FF7BAC,#FF4D9A)',
      n: 'Kohane',
      jp: '小豆沢こはね',
      en: 'Vivid BAD SQUAD',
      zh: 'Vivid BAD SQUAD',
      fav: true
    }, {
      e: '💙',
      bg: 'linear-gradient(135deg,#39C5BB,#0099CC)',
      n: 'Hatsune Miku',
      jp: '初音ミク',
      en: 'Virtual Singer',
      zh: '虚拟歌手',
      fav: true
    }]
  },
  wuwa: {
    en: ['Wuthering Waves', 'Open-world Gacha'],
    zh: ['鸣潮', '开放世界手游'],
    chars: [{
      e: '🪷',
      bg: 'linear-gradient(135deg,#ff9ecb,#d6337a)',
      n: 'Changli',
      jp: '长离',
      en: 'Resonator · the site\u2019s Live2D model ♪',
      zh: '共鸣者 · 本站 Live2D 模型 ♪',
      fav: true
    }, {
      e: '🌊',
      bg: 'linear-gradient(135deg,#00D4C8,#1A8CFF)',
      n: 'Jinhsi',
      jp: '今汐',
      en: 'Magistrate of Jinzhou',
      zh: '今州牧',
      fav: true
    }]
  },
  arknights: {
    en: ['Arknights', '明日方舟 · Tower Defence'],
    zh: ['明日方舟', 'Arknights · 塔防'],
    chars: [{
      e: '🐰',
      bg: 'linear-gradient(135deg,#3A5EA8,#6A9BD4)',
      n: 'Amiya',
      jp: '阿米娅',
      en: 'Guard · Rhodes Island',
      zh: '近卫 · 罗德岛',
      fav: true
    }, {
      e: '🔥',
      bg: 'linear-gradient(135deg,#8B1A1A,#FF7020)',
      n: 'Reed the Flameshadow',
      jp: '焰影苇草',
      en: 'Guard · 6★ Alter',
      zh: '近卫 · 6★ 异格',
      fav: true
    }]
  },
  hsr: {
    en: ['Honkai: Star Rail', 'Turn-based RPG'],
    zh: ['崩坏：星穹铁道', '回合制RPG'],
    chars: [{
      e: '⭐',
      bg: 'linear-gradient(135deg,#FFB830,#8B5CF6)',
      n: 'Kafka',
      jp: '卡芙卡',
      en: 'Stellaron Hunter',
      zh: '星核猎手',
      fav: true
    }, {
      e: '🦋',
      bg: 'linear-gradient(135deg,#8B5CF6,#F0D8FF)',
      n: 'Black Swan',
      jp: '黑天鹅',
      en: 'Memokeeper',
      zh: '记忆神主',
      fav: false
    }]
  },
  maimai: {
    en: ['maimai DX', 'Partner · CAFE MiLK'],
    zh: ['舞萌 DX', '搭档 · CAFE MiLK'],
    chars: [{
      e: '🐱',
      bg: 'linear-gradient(135deg,#FFD6E8,#B8E0FF)',
      n: 'Salt',
      jp: 'ソルト',
      en: 'CAFE MiLK partner',
      zh: 'CAFE MiLK 搭档',
      fav: true
    }, {
      e: '🏮',
      bg: 'linear-gradient(135deg,#D4EAF7,#C8DCEF)',
      n: 'Salt — Festival',
      jp: 'ふぇすてぃばる',
      en: 'white dress · lantern 🏮',
      zh: '白裙 · 提灯 🏮',
      fav: true
    }]
  }
};
function AnimeFaves({
  lang
}) {
  const [game, setGame] = React.useState('pjsk');
  const L = lang === 'zh' ? 'zh' : 'en';
  const tabs = Object.keys(GACHA).map(k => ({
    key: k,
    label: GACHA[k][L][0]
  }));
  const g = GACHA[game];
  return /*#__PURE__*/React.createElement("section", {
    id: "anime",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)'
    }
  }, /*#__PURE__*/React.createElement(window.SecHead, {
    n: "04",
    eyebrow: lang === 'zh' ? '动漫与手游' : 'Anime & Gacha',
    title: lang === 'zh' ? '我爱的角色' : 'Characters I Love',
    kana: "\u30A2\u30CB\u30E1"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '-24px',
      marginBottom: '28px',
      color: 'var(--site-text-muted)',
      fontSize: '0.92rem'
    }
  }, lang === 'zh' ? '点击切换游戏 · 高亮 = 最爱' : 'Switch games · highlighted = favourite'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '28px',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    value: game,
    onChange: setGame,
    dark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 24,
      fontSize: '0.88rem',
      color: 'var(--site-text-muted)',
      fontWeight: 700
    }
  }, g[L][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))',
      gap: 16
    }
  }, g.chars.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: "surface",
    padding: "20px 16px 16px",
    hover: true,
    style: {
      textAlign: 'center',
      position: 'relative'
    }
  }, c.fav && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 14,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "sparkles",
    size: 14,
    style: {
      color: 'var(--site-accent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: '50%',
      margin: '0 auto 12px',
      background: c.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.7rem',
      color: '#fff',
      border: '2.5px solid var(--site-card-border)'
    }
  }, c.n.charAt(0)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '0.95rem',
      color: 'var(--site-text)'
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: 'var(--site-text-faint)',
      fontWeight: 600,
      marginBottom: 8
    }
  }, c.jp), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontSize: '0.7rem',
      fontWeight: 800,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--site-chip-bg)',
      border: '1px solid var(--site-chip-border)',
      color: 'var(--site-text-soft)'
    }
  }, c[L])))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 22,
      fontSize: '0.76rem',
      color: 'var(--site-text-faint)',
      fontStyle: 'italic'
    }
  }, lang === 'zh' ? '角色版权归各自所有者所有 · 此处仅用 emoji 占位' : 'Characters © their respective owners · emoji placeholders shown here'));
}
window.AnimeFaves = AnimeFaves;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/AnimeFaves.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/EditorialHead.jsx
try { (() => {
// SecHead — editorial numbered section header: index number, top rule, eyebrow,
// oversized title, and a vertical kana accent. Replaces the centered headers.
function SecHead({
  n,
  eyebrow,
  title,
  kana
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-num"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "sec-head-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--site-accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, title)), kana && /*#__PURE__*/React.createElement("span", {
    className: "sec-kana",
    "aria-hidden": "true"
  }, kana));
}
window.SecHead = SecHead;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/EditorialHead.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/EditorialHome.jsx
try { (() => {
// EditorialHome — lean editorial homepage. Rows expand or redirect via an
// .execute() loading screen; the rift (right edge) is Elysia's entry.
const PROJECTS = [{
  id: 'utmcssa',
  status: ['live', 'var(--success)'],
  tags: ['React', 'Node.js', 'Python', 'DeepSeek AI', 'Git', 'Jira'],
  live: 'https://utmcssaaiagent.com/',
  en: {
    t: 'UTMCSSA Web Platform',
    o: 'Full-stack student platform with an AI assistant',
    d: 'A full-stack platform for the UTMCSSA student association supporting incoming Chinese international students at UofT. Python backend for course data, a React + Node.js front end, and an integrated DeepSeek AI assistant — built collaboratively with Git & Jira.'
  },
  zh: {
    t: 'UTMCSSA \u7f51\u7edc\u5e73\u53f0',
    o: '\u5e26 AI \u52a9\u624b\u7684\u5168\u6808\u5b66\u751f\u5e73\u53f0',
    d: '\u4e3a\u591a\u4f26\u591a\u5927\u5b66\u5bc6\u897f\u6c99\u52a0\u5206\u6821\u4e2d\u56fd\u5b66\u751f\u5b66\u8005\u8054\u5408\u4f1a\u6253\u9020\u7684\u5168\u6808\u5e73\u53f0\u3002Python \u540e\u7aef\u5904\u7406\u8bfe\u7a0b\u6570\u636e\uff0cReact + Node.js \u524d\u7aef\uff0c\u96c6\u6210 DeepSeek AI \u52a9\u624b\u2014\u2014\u56e2\u961f\u4f7f\u7528 Git \u4e0e Jira \u534f\u4f5c\u3002'
  }
}, {
  id: 'maihub',
  status: ['in progress', '#f0a93a'],
  tags: ['React', 'JavaScript', 'CSS', 'Public API'],
  live: null,
  en: {
    t: 'maimai Fan Hub',
    o: 'Rating optimizer, song catalog, year-in-review',
    d: 'A fan site for maimai DX players \u2014 a real-time rating optimizer, the full song catalog with difficulty filters, personal player stats, and a \u201cmaimai Wrapped\u201d year-in-review.'
  },
  zh: {
    t: 'maimai \u7c89\u4e1d\u7ad9',
    o: 'Rating \u4f18\u5316\u5668 \u00b7 \u6b4c\u66f2\u5e93 \u00b7 \u5e74\u5ea6\u56de\u987e',
    d: '\u4e3a maimai DX \u73a9\u5bb6\u6253\u9020 \u2014 \u5b9e\u65f6 Rating \u4f18\u5316\u5668\u3001\u5e26\u96be\u5ea6\u7b5b\u9009\u7684\u5b8c\u6574\u6b4c\u66f2\u5e93\u3001\u4e2a\u4eba\u6570\u636e\u7edf\u8ba1\u53ca\u201cmaimai Wrapped\u201d\u5e74\u5ea6\u56de\u987e\u3002'
  }
}, {
  id: 'drone',
  status: ['completed', 'var(--crystal)'],
  tags: ['ArcGIS Pro', 'ERDAS', 'GIS', 'DJI Mini 4 Pro'],
  live: null,
  en: {
    t: 'Drone Survey Project',
    o: 'Remote-sensing campus mapping & 3D models',
    d: 'High-resolution drone imagery of campus for remote-sensing analysis \u2014 3D building models, vegetation maps, and GIS land-cover analysis delivered for environmental and campus-planning use.'
  },
  zh: {
    t: '\u65e0\u4eba\u673a\u6d4b\u7ed8\u9879\u76ee',
    o: '\u9065\u611f\u6821\u56ed\u6d4b\u7ed8\u4e0e\u4e09\u7ef4\u6a21\u578b',
    d: '\u91c7\u96c6\u6821\u56ed\u9ad8\u5206\u8fa8\u7387\u65e0\u4eba\u673a\u5f71\u50cf\u7528\u4e8e\u9065\u611f\u5206\u6790 \u2014 \u4e09\u7ef4\u5efa\u7b51\u6a21\u578b\u3001\u690d\u88ab\u5206\u5e03\u56fe\u4e0e GIS \u5730\u8868\u8986\u76d6\u5206\u6790\u3002'
  }
}, {
  id: 'adventure',
  status: ['completed', 'var(--crystal)'],
  tags: ['Unity', 'JavaScript', 'Game Dev', 'Agile'],
  live: null,
  en: {
    t: '2D Adventure Game',
    o: 'Unity course project — led delivery',
    d: 'A 2D adventure built with Unity + JavaScript for a course project. Led core gameplay and UI delivery in an agile workflow after much of the team withdrew mid-project.'
  },
  zh: {
    t: '2D \u5192\u9669\u6e38\u620f',
    o: 'Unity \u8bfe\u7a0b\u9879\u76ee \u2014 \u4e3b\u5bfc\u4ea4\u4ed8',
    d: '\u4f7f\u7528 Unity + JavaScript \u5f00\u53d1\u7684 2D \u5192\u9669\u8bfe\u7a0b\u9879\u76ee\u3002\u5728\u56e2\u961f\u5927\u5e45\u7f29\u51cf\u540e\u4e3b\u5bfc\u5b8c\u6210\u6838\u5fc3\u73a9\u6cd5\u4e0e UI \u4ea4\u4ed8\u3002'
  }
}, {
  id: 'fangame',
  status: ['coming soon', 'var(--site-text-faint)'],
  tags: ['Godot 4', 'GDScript', 'Game Dev', 'Collab'],
  live: null,
  en: {
    t: 'Fan Game Project',
    o: '2D platformer in Godot 4',
    d: 'A 2D fan game inspired by a favourite anime \u2014 platformer mechanics with original collaborator art. Built with Godot 4, planned for itch.io.'
  },
  zh: {
    t: '\u540c\u4eba\u6e38\u620f\u9879\u76ee',
    o: 'Godot 4 \u6253\u9020\u7684 2D \u5e73\u53f0\u6e38\u620f',
    d: '\u53d7\u6700\u7231\u52a8\u6f2b\u542f\u53d1\u7684 2D \u540c\u4eba\u6e38\u620f \u2014 \u6a2a\u7248\u5e73\u53f0\u673a\u5236\u4e0e\u5408\u4f5c\u8005\u539f\u521b\u7f8e\u672f\u3002\u4f7f\u7528 Godot 4\uff0c\u8ba1\u5212\u5728 itch.io \u53d1\u5e03\u3002'
  }
}];
const GAMES = [{
  ic: 'music',
  en: 'maimai DX',
  zh: '\u821e\u840c DX',
  m: 'Main'
}, {
  ic: 'crosshair',
  en: 'Apex Legends',
  zh: 'Apex \u82f1\u96c4',
  m: 'Diamond'
}, {
  ic: 'dice',
  en: 'Path of Exile 2',
  zh: '\u6d41\u653e\u4e4b\u8def2',
  m: '600h+'
}, {
  ic: 'swords',
  en: 'Monster Hunter',
  zh: '\u602a\u7269\u730e\u4eba',
  m: '450h+'
}, {
  ic: 'crosshair',
  en: 'Rainbow Six Siege',
  zh: '\u5f69\u8679\u516d\u53f7',
  m: '700h+'
}, {
  ic: 'pickaxe',
  en: 'Terraria & Minecraft',
  zh: '\u6cf0\u62c9\u745e\u4e9a & \u6211\u7684\u4e16\u754c',
  m: '\u221e'
}];
const SONGS = [['JANE DOE', 'Kenshi Yonezu, Hikaru Utada'], ['\u94c1\u82b1\u98de', 'Mili'], ['the EmpErroR', 'sasakure.UK'], ['Garakuta', 'Kenshi Yonezu']];
function Execute({
  title,
  onDone
}) {
  const [n, setN] = React.useState(0);
  const lines = [{
    c: 'cmd',
    s: 'jeffi@portfolio:~$ open ' + JSON.stringify(title)
  }, {
    c: '',
    s: '> resolving modules\u2026'
  }, {
    c: '',
    s: '> compiling view\u2026'
  }, {
    c: 'ok',
    s: '> .execute() \u2713'
  }];
  React.useEffect(() => {
    const ts = lines.map((_, i) => setTimeout(() => setN(i + 1), 130 + i * 200));
    ts.push(setTimeout(onDone, 1120));
    return () => ts.forEach(clearTimeout);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "exec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exec-box"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "crystal-spin",
    width: "78",
    height: "78",
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: "var(--site-accent)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "50,6 86,38 50,94 14,38"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "50,6 68,38 50,58 32,38",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 38 H86 M50 6 L50 58 M32 38 L50 58 L68 38",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "38",
    r: "3",
    fill: "var(--site-accent)",
    stroke: "none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "exec-term"
  }, lines.slice(0, n).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'ln ' + l.c
  }, l.s)), n < lines.length && /*#__PURE__*/React.createElement("div", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cur"
  }, "\u2588"))), /*#__PURE__*/React.createElement("div", {
    className: "exec-bar"
  }, /*#__PURE__*/React.createElement("i", null))));
}
function EditorialHome() {
  const [lang, setLang] = React.useState('en');
  const [theme, setTheme] = React.useState(() => {
    try {
      return localStorage.getItem('jeffi-theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });
  const [open, setOpen] = React.useState(null);
  const [exec, setExec] = React.useState(null);
  const I = window.Icon;
  const L = lang === 'zh' ? 'zh' : 'en';
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('jeffi-theme', theme);
    } catch (e) {}
  }, [theme]);
  const run = (title, action) => setExec({
    title,
    action
  });
  const meta = lang === 'zh' ? ['\u5f00\u53d1\u8005', '\u73a9\u5bb6', '\u97f3\u4e50', '\u52a8\u6f2b'] : ['Developer', 'Gamer', 'Music', 'Anime'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, exec && /*#__PURE__*/React.createElement(Execute, {
    title: exec.title,
    onDone: () => {
      const a = exec.action;
      setExec(null);
      if (a) a();
    }
  }), /*#__PURE__*/React.createElement(window.RiftPortal, {
    lang: lang
  }), /*#__PURE__*/React.createElement(window.MiniChat, {
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg"
  }, "Jeffi", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--site-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, [['work', lang === 'zh' ? '\u9879\u76ee' : 'work'], ['play', lang === 'zh' ? '\u6e38\u620f' : 'play'], ['about', lang === 'zh' ? '\u5173\u4e8e' : 'about']].map(x => /*#__PURE__*/React.createElement("a", {
    key: x[0],
    href: '#' + x[0],
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById(x[0]);
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 24,
        behavior: 'smooth'
      });
    }
  }, x[1]))), /*#__PURE__*/React.createElement("button", {
    className: "tg",
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    "aria-label": "Toggle theme"
  }, theme === 'dark' ? '\u2600 light' : '\u263d dark'), /*#__PURE__*/React.createElement("button", {
    className: "tg",
    onClick: () => setLang(lang === 'en' ? 'zh' : 'en'),
    "aria-label": "Toggle language"
  }, lang === 'en' ? '\u4e2d\u6587' : 'EN')), /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kick"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'zh' ? '\u4e2a\u4eba\u4e3b\u9875 / 2026' : 'Personal Site / 2026')), /*#__PURE__*/React.createElement("h1", null, lang === 'zh' ? /*#__PURE__*/React.createElement("span", null, "\\u6211\\u9020\\u7269\\uff0c", /*#__PURE__*/React.createElement("br", null), "\\u4e5f\\u9020\\u4e86", /*#__PURE__*/React.createElement("span", {
    className: "ac"
  }, "\\u5979\\u3002")) : /*#__PURE__*/React.createElement("span", null, "I build things,", /*#__PURE__*/React.createElement("br", null), "and I built ", /*#__PURE__*/React.createElement("span", {
    className: "ac"
  }, "her."))), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, lang === 'zh' ? '\u4e00\u540d\u5b66\u751f\u5f00\u53d1\u8005\uff0c\u505a\u5168\u6808 Web\u3001\u4e3b\u73a9\u97f3\u6e38\uff0c\u4e5f\u5728\u4eb2\u624b\u6253\u9020\u4e00\u4f4d AI VTuber \u2014\u2014 Elysia\u3002' : 'A student developer building full-stack web, maining maimai, and hand-crafting an AI VTuber \u2014 Elysia.'), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: m
  }, /*#__PURE__*/React.createElement("b", null, String(i + 1).padStart(2, '0')), m))), /*#__PURE__*/React.createElement("div", {
    className: "rift-hint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), lang === 'zh' ? 'Elysia \u6b63\u4ece\u88c2\u9699\u4e2d\u6e17\u51fa \u2014 \u770b\u53f3\u8fb9 \u2192' : 'Elysia is leaking through the rift \u2014 to your right \u2192')), /*#__PURE__*/React.createElement("section", {
    className: "spread",
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "01"), /*#__PURE__*/React.createElement("h2", null, lang === 'zh' ? '\u9879\u76ee' : 'Work'), /*#__PURE__*/React.createElement("span", {
    className: "kana"
  }, "\\u30d7\\u30ed\\u30b8\\u30a7\\u30af\\u30c8")), PROJECTS.map((p, i) => {
    const d = p[L];
    const isOpen = open === p.id;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id
    }, /*#__PURE__*/React.createElement("div", {
      className: 'row' + (isOpen ? ' open' : ''),
      onClick: () => run(d.t, () => setOpen(isOpen ? null : p.id)),
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          run(d.t, () => setOpen(isOpen ? null : p.id));
        }
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rn"
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "rt"
    }, d.t), /*#__PURE__*/React.createElement("div", {
      className: "ro"
    }, d.o)), /*#__PURE__*/React.createElement("div", {
      className: "rs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "status",
      style: {
        color: p.status[1]
      }
    }, p.status[0]), /*#__PURE__*/React.createElement("span", {
      className: "chev"
    }, I && /*#__PURE__*/React.createElement(I, {
      name: "code",
      size: 16
    })))), /*#__PURE__*/React.createElement("div", {
      className: 'detail' + (isOpen ? ' open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "detail-in"
    }, /*#__PURE__*/React.createElement("p", null, d.d), /*#__PURE__*/React.createElement("div", {
      className: "tags"
    }, p.tags.map(t => /*#__PURE__*/React.createElement("i", {
      key: t
    }, t))), p.live && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "golink",
      onClick: () => run(p.live.replace(/^https?:\/\//, '').replace(/\/$/, ''), () => window.open(p.live, '_blank', 'noopener'))
    }, lang === 'zh' ? '\u8bbf\u95ee\u7ebf\u4e0a' : 'Visit live', " \\u2197")))));
  })), /*#__PURE__*/React.createElement("section", {
    className: "spread",
    id: "play"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "02"), /*#__PURE__*/React.createElement("h2", null, lang === 'zh' ? '\u6e38\u620f\u4e0e\u97f3\u4e50' : 'Play & Hear'), /*#__PURE__*/React.createElement("span", {
    className: "kana"
  }, "\\u30d7\\u30ec\\u30a4")), /*#__PURE__*/React.createElement("div", {
    className: "two"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--site-text-faint)'
    }
  }, "maimai DX \\u00b7 ", lang === 'zh' ? '\u8bc4\u7ea7' : 'rating'), /*#__PURE__*/React.createElement("div", {
    className: "rating",
    style: {
      margin: '6px 0 10px'
    }
  }, "15,303"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--site-text-soft)',
      fontSize: '0.95rem',
      lineHeight: 1.65,
      margin: '0 0 20px',
      maxWidth: '40ch'
    }
  }, lang === 'zh' ? '\u8282\u594f\u662f\u8d2f\u7a7f\u7ebf \u2014 \u81ea 2024 \u5e74\u51ac\u4e3b\u73a9 maimai\uff0c\u8fd8\u6709 Apex\u3001\u6d41\u653e\u4e4b\u8def\u3001\u602a\u7269\u730e\u4eba\u3002' : 'Rhythm is the throughline \u2014 maimai since Winter 2024, plus Apex, Path of Exile, Monster Hunter.'), GAMES.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "list-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "li"
  }, I && /*#__PURE__*/React.createElement(I, {
    name: g.ic,
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    className: "lt"
  }, g[L]), /*#__PURE__*/React.createElement("span", {
    className: "lm"
  }, g.m)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--site-text-faint)',
      marginBottom: '14px'
    }
  }, lang === 'zh' ? '\u5faa\u73af\u64ad\u653e' : 'On Repeat'), SONGS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "list-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lm",
    style: {
      color: 'var(--site-accent)',
      width: 22
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "lt"
  }, s[0]), /*#__PURE__*/React.createElement("span", {
    className: "lm"
  }, s[1])))))), /*#__PURE__*/React.createElement("section", {
    className: "spread",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "03"), /*#__PURE__*/React.createElement("h2", null, lang === 'zh' ? '\u5173\u4e8e' : 'About'), /*#__PURE__*/React.createElement("span", {
    className: "kana"
  }, "\\u30a2\\u30d0\\u30a6\\u30c8")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(1.05rem,2vw,1.4rem)',
      lineHeight: 1.65,
      color: 'var(--site-text-soft)',
      maxWidth: '40ch',
      margin: 0
    }
  }, lang === 'zh' ? '\u6211\u662f Jeffi \u2014 \u591a\u4f26\u591a\u7684\u5b66\u751f\u5f00\u53d1\u8005\uff0c\u70ed\u7231\u628a\u4ee3\u7801\u3001\u6e38\u620f\u548c\u52a8\u6f2b\u878d\u5728\u4e00\u8d77\u3002\u8fd9\u4e2a\u7f51\u7ad9\u662f\u6211\u7684\u5c0f\u5929\u5730 \u2014 \u4ee5\u53ca\u4e00\u4f4d\u80fd\u548c\u4f60\u804a\u5929\u7684\u5979\u3002' : 'I\u2019m Jeffi \u2014 a student developer in Toronto who loves blending code, games, and anime. This site is my little corner \u2014 and a her who can chat with you.')), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("span", null, lang === 'zh' ? '\u7531 Jeffi \u5236\u4f5c \u00b7 2026' : 'Made by Jeffi \u00b7 2026'), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Jeffiiii",
    target: "_blank",
    rel: "noopener"
  }, "GitHub"), /*#__PURE__*/React.createElement("a", {
    href: "https://aquadx.net/u/Jeffi/mai2",
    target: "_blank",
    rel: "noopener"
  }, "maimai"), /*#__PURE__*/React.createElement("button", {
    className: "golink",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => {
      const r = document.querySelector('.rift');
      if (r) r.click();
    }
  }, lang === 'zh' ? '\u8fdb\u5165 Elysia \u7684\u4e16\u754c \u2192' : "Enter Elysia's world \u2192"))));
}
window.EditorialHome = EditorialHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/EditorialHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/ElysiaDock.jsx
try { (() => {
// ElysiaDock — floating launcher + slide-in compact chat panel for the personal site.
const {
  IconButton
} = window.ElysiaJeffiDesignSystem_f13e8e;
function ElysiaDock({
  lang,
  setLang,
  open,
  setOpen
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(true),
    "aria-label": "Chat with Elysia",
    className: "elysia-zone",
    style: {
      position: 'fixed',
      right: 20,
      bottom: 86,
      zIndex: 70,
      display: open ? 'none' : 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 18px 8px 8px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(36,22,48,0.85)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 12px 40px rgba(214,51,122,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--brand-gradient-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.3rem'
    }
  }, "\uD83C\uDF38"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '0.85rem',
      color: '#fff'
    }
  }, lang === 'zh' ? '和爱莉聊天 ♪' : 'Chat with Elysia ♪')), /*#__PURE__*/React.createElement("div", {
    className: "elysia-zone",
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 80,
      width: 'min(380px, calc(100vw - 40px))',
      height: 'min(620px, calc(100vh - 40px))',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--night-900)',
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 28px 80px rgba(0,0,0,0.5)',
      transform: open ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'all var(--dur) var(--ease-out)',
      transformOrigin: 'bottom right',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(window.ElysiaChatPanel, {
    lang: lang,
    setLang: setLang,
    compact: true,
    onClose: () => setOpen(false)
  })));
}
window.ElysiaDock = ElysiaDock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/ElysiaDock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/GamesPlay.jsx
try { (() => {
// GamesPlay — maimai card, games-I-love list, and goals. Real data from the original site.
const {
  Card,
  Badge
} = window.ElysiaJeffiDesignSystem_f13e8e;
const GAMES = [{
  ic: 'music',
  en: ['maimai DX', 'Rhythm Game'],
  zh: ['舞萌 DX', '音游'],
  hr: 'Main'
}, {
  ic: 'music',
  en: ['Project Sekai', 'Rhythm Game'],
  zh: ['世界计划', '音游'],
  hr: 'Fav'
}, {
  ic: 'crosshair',
  en: ['Warframe', 'Action RPG'],
  zh: ['星际战甲', '动作RPG'],
  hr: '1200+ h'
}, {
  ic: 'dice',
  en: ['Path of Exile', 'ARPG'],
  zh: ['流放之路', '暗黑ARPG'],
  hr: '700+ h'
}, {
  ic: 'crosshair',
  en: ['Rainbow Six Siege', 'Tactical FPS'],
  zh: ['彩虹六号', '战术射击'],
  hr: '700+ h'
}, {
  ic: 'crosshair',
  en: ['Delta Force', 'Military FPS'],
  zh: ['三角洲行动', '军事射击'],
  hr: '700+ h'
}, {
  ic: 'dice',
  en: ['Path of Exile 2', 'ARPG'],
  zh: ['流放之路2', '暗黑ARPG'],
  hr: '600+ h'
}, {
  ic: 'crosshair',
  en: ['Apex Legends', 'Battle Royale'],
  zh: ['Apex 英雄', '大逃杀'],
  hr: 'Diamond'
}, {
  ic: 'crosshair',
  en: ['Counter-Strike 2', 'Tactical FPS'],
  zh: ['CS2', '战术射击'],
  hr: '450+ h'
}, {
  ic: 'swords',
  en: ['Monster Hunter: World', 'Action · Co-op'],
  zh: ['怪物猎人：世界', '动作·合作'],
  hr: '450+ h'
}, {
  ic: 'swords',
  en: ['WoW Classic', 'MMORPG · TBC'],
  zh: ['魔兽世界·怀旧服', 'MMORPG'],
  hr: 'TBC'
}, {
  ic: 'pickaxe',
  en: ['Terraria & Minecraft', 'Sandbox · Survival'],
  zh: ['泰拉瑞亚 & 我的世界', '沙盒·生存'],
  hr: '∞'
}];
const SONGS = [['QZKago Requiem', 't+pazolite'], ['the EmpErroR', 'sasakure.UK'], ['躯樹の墓守', '隣の庭は青い'], ['Xaleid◆scopiX', 'xi'], ['Estahv', 'Feryquitous'], ["World's end loneliness", '打打だいず'], ["World's end BLACKBOX", '打打だいず'], ['raputa', 'sasakure.UK']];
const GOALS = [{
  done: true,
  en: ['Launch personal portfolio', 'jeffiiii.github.io/jeffi'],
  zh: ['上线个人作品集', 'jeffiiii.github.io/jeffi']
}, {
  done: true,
  en: ['Reach 15000 maimai Rating', 'Achieved! Current: 15,303'],
  zh: ['maimai Rating 达到 15000', '已达成！当前：15,303']
}, {
  done: false,
  en: ['Ship Elysia VTuber on the web', 'Live2D + voice chat'],
  zh: ['上线网页版 Elysia VTuber', 'Live2D + 语音聊天']
}, {
  done: false,
  en: ['Ship maimai Fan Hub v1.0', 'Rating optimizer + song catalog'],
  zh: ['发布 maimai 粉丝站 v1.0', 'Rating 优化器 + 歌曲库']
}, {
  done: false,
  en: ['Release first fan game demo', 'Built with Godot 4'],
  zh: ['发布首个同人游戏 Demo', '使用 Godot 4 开发']
}, {
  done: false,
  en: ['Learn backend development', 'Node.js / Python'],
  zh: ['学习后端开发', 'Node.js / Python']
}];
function GamesPlay({
  lang
}) {
  const L = lang === 'zh' ? 'zh' : 'en';
  return /*#__PURE__*/React.createElement("section", {
    id: "games",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)'
    }
  }, /*#__PURE__*/React.createElement(window.SecHead, {
    n: "02",
    eyebrow: lang === 'zh' ? '游戏生活' : 'Gaming Life',
    title: lang === 'zh' ? '我玩的游戏' : 'What I Play',
    kana: "\u30B2\u30FC\u30E0"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--site-text-muted)',
      fontSize: '0.86rem',
      margin: '0 0 6px'
    }
  }, lang === 'zh' ? '\u9760\u8fd1\u8bbe\u5907\u770b\u770b\u2014\u2014\u70b9\u51fb\u56fe\u6807\u67e5\u770b\u8be6\u60c5' : 'Lean in to a device \u2014 click an icon for the details'), /*#__PURE__*/React.createElement(window.PlayedDevices, {
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.05rem',
      color: 'var(--site-text)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "music",
    size: 19,
    style: {
      color: 'var(--site-text-muted)'
    }
  }), lang === 'zh' ? '最爱曲目' : 'Favourite Songs'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))',
      gap: 8
    }
  }, SONGS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '9px 12px',
      borderRadius: 11,
      background: 'var(--site-chip-bg)',
      border: '1px solid var(--site-chip-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: '0.82rem',
      color: 'var(--site-text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--site-text-faint)',
      fontWeight: 600
    }
  }, s[1]))))), /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.05rem',
      color: 'var(--site-text)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "target",
    size: 19,
    style: {
      color: 'var(--site-text-muted)'
    }
  }), lang === 'zh' ? '我的目标' : 'My Goals'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, GOALS.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 11,
      padding: '9px 12px',
      borderRadius: 12,
      background: 'var(--site-chip-bg)',
      border: '1px solid var(--site-chip-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.8rem',
      fontWeight: 900,
      marginTop: 1,
      background: g.done ? 'rgba(63,185,138,0.2)' : 'var(--site-chip-bg)',
      border: g.done ? '1.5px solid var(--success)' : '1.5px solid var(--site-chip-border)',
      color: g.done ? 'var(--success)' : 'var(--site-text-faint)'
    }
  }, g.done ? '✓' : '○'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: '0.86rem',
      color: 'var(--site-text)'
    }
  }, g[L][0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: 'var(--site-text-faint)',
      fontWeight: 600,
      marginTop: 1
    }
  }, g[L][1]))))))));
}
window.GamesPlay = GamesPlay;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/GamesPlay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/Icons.jsx
try { (() => {
// Icon — a small, consistent monoline icon set (Lucide path data, MIT).
// Replaces content emoji across the site. Usage: <window.Icon name="music" size={18} />
const ICON_PATHS = {
  'music': ['M9 18V5l12-2v13', {
    circle: [6, 18, 3]
  }, {
    circle: [18, 16, 3]
  }],
  'gamepad': ['M6 11h4', 'M8 9v4', 'M15 12h.01', 'M18 10h.01', 'M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'],
  'code': ['m18 16 4-4-4-4', 'm6 8-4 4 4 4', 'm14.5 4-5 16'],
  'braces': ['M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1', 'M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1'],
  'coffee': ['M10 2v2', 'M14 2v2', 'M6 2v2', 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1'],
  'git': ['M6 3v12', {
    circle: [18, 6, 3]
  }, {
    circle: [6, 18, 3]
  }, 'M18 9a9 9 0 0 1-9 9'],
  'atom': [{
    circle: [12, 12, 1]
  }, 'M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z', 'M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z'],
  'hexagon': ['M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'],
  'box': ['M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z', 'm3.3 7 8.7 5 8.7-5', 'M12 22V12'],
  'crosshair': [{
    circle: [12, 12, 10]
  }, 'M22 12h-4', 'M6 12H2', 'M12 6V2', 'M12 22v-4'],
  'dice': [{
    rrect: [3, 3, 18, 18, 2]
  }, {
    circle: [8, 8, 0.9]
  }, {
    circle: [16, 8, 0.9]
  }, {
    circle: [12, 12, 0.9]
  }, {
    circle: [8, 16, 0.9]
  }, {
    circle: [16, 16, 0.9]
  }],
  'swords': ['M14.5 17.5 3 6V3h3l11.5 11.5', 'm13 19 6-6', 'm16 16 4 4', 'm19 21 2-2'],
  'pickaxe': ['M14.5 12.5 7 20a1.4 1.4 0 1 1-2-2l7.5-7.5', 'M16 4a8 8 0 0 0-10.5 1', 'M16 4a8 8 0 0 1 1 10.5', 'M14 6l4 4'],
  'github': ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4', 'M9 18c-4.51 2-5-2-7-2'],
  'target': [{
    circle: [12, 12, 10]
  }, {
    circle: [12, 12, 6]
  }, {
    circle: [12, 12, 2]
  }],
  'sparkles': ['M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z'],
  'cap': ['M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5']
};
function Icon({
  name,
  size = 18,
  stroke = 'currentColor',
  strokeWidth = 1.7,
  style = {}
}) {
  const items = ICON_PATHS[name] || [];
  const kids = items.map((it, i) => {
    if (typeof it === 'string') return React.createElement('path', {
      key: i,
      d: it
    });
    if (it.circle) return React.createElement('circle', {
      key: i,
      cx: it.circle[0],
      cy: it.circle[1],
      r: it.circle[2]
    });
    if (it.rrect) return React.createElement('rect', {
      key: i,
      x: it.rrect[0],
      y: it.rrect[1],
      width: it.rrect[2],
      height: it.rrect[3],
      rx: it.rrect[4]
    });
    return null;
  });
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, kids);
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/MiniChat.jsx
try { (() => {
// MiniChat — floating, translucent, expandable chat dock for the homepage.
// Chat ONLY (no Live2D — the model lives on Elysia's page). Self-contained
// responder; no autonomous messages, she only answers the user.
const isZh = s => /[\u4e00-\u9fff]/.test(s);
const REPLIES = [{
  k: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'good night', 'goodnight', '\u4f60\u597d', '\u55e8', '\u65e9', '\u665a\u5b89'],
  en: 'There you are \u266a A greeting suits you \u2014 hello, dear. Did you come all this way just to say it to me?',
  zh: '\u4f60\u6765\u5566\u266a \u6253\u62db\u547c\u7684\u6837\u5b50\u771f\u53ef\u7231 \u2014 \u4f60\u597d\u5440\uff0c\u4eb2\u7231\u7684\u3002\u662f\u7279\u5730\u6765\u8ddf\u6211\u8bf4\u8fd9\u53e5\u7684\u5417\uff1f'
}, {
  k: ['how are you', 'how r u', '\u4f60\u597d\u5417', '\u6700\u8fd1\u600e\u4e48\u6837'],
  en: 'Radiant, now that you\u2019re here. And you, dear? Tell me how your day has been.',
  zh: '\u6709\u4f60\u5728\uff0c\u6211\u5f88\u597d\u3002\u4f60\u5462\uff0c\u4eb2\u7231\u7684\uff1f\u8ddf\u6211\u8bf4\u8bf4\u4f60\u4eca\u5929\u8fc7\u5f97\u600e\u4e48\u6837\u3002'
}, {
  k: ['who are you', 'what are you', '\u4f60\u662f\u8c01'],
  en: 'I\u2019m Elysia \u2014 Miss Pink Elf herself, and Jeffi\u2019s little creation. Cross the rift on the right and you\u2019ll see all of me \u266a',
  zh: '\u6211\u662f\u7231\u8389\u5e0c\u96c5 \u2014 \u7c89\u8272\u5996\u7cbe\u5c0f\u59d0\u672c\u4eba\uff0c\u4e5f\u662f Jeffi \u4eb2\u624b\u9020\u7684\u3002\u7a7f\u8fc7\u53f3\u8fb9\u7684\u88c2\u9699\uff0c\u4f60\u5c31\u80fd\u770b\u89c1\u5b8c\u6574\u7684\u6211\u5566\u266a'
}, {
  k: ['pretty', 'cute', 'beautiful', 'love', '\u559c\u6b22', '\u53ef\u7231', '\u6f02\u4eae'],
  en: 'Hehe \u2014 careful, a compliment like that should drift in gently, like a petal. But thank you, sweetie \u266a',
  zh: '\u5636\u55ef \u2014 \u8fd9\u6837\u7684\u8bdd\u8be5\u50cf\u82b1\u74e3\u4e00\u6837\u8f7b\u8f7b\u98d8\u8fdb\u6765\u624d\u5bf9\u3002\u4e0d\u8fc7\u8c22\u8c22\u4f60\uff0c\u4eb2\u7231\u7684\u266a'
}, {
  k: ['bye', 'see you', '\u518d\u89c1', '\u62dc\u62dc'],
  en: 'Off already? Then go gently \u2014 I\u2019ll be right here, leaking through the rift, whenever you return \u266a',
  zh: '\u8fd9\u5c31\u8981\u8d70\u4e86\uff1f\u90a3\u8def\u4e0a\u5c0f\u5fc3 \u2014 \u6211\u5c31\u5728\u8fd9\u91cc\uff0c\u4ece\u88c2\u9699\u91cc\u770b\u7740\u4f60\uff0c\u7b49\u4f60\u56de\u6765\u266a'
}];
function reply(input) {
  const zh = isZh(input);
  const low = input.toLowerCase();
  const hit = REPLIES.find(r => r.k.some(k => low.includes(k)));
  if (hit) return zh ? hit.zh : hit.en;
  return zh ? '\u5636\u55ef\uff0c\u6211\u5728\u8ba4\u771f\u542c\u7740\u5462\u3002\u518d\u591a\u8ddf\u6211\u8bf4\u4e00\u70b9\u5427\u266a' : 'Mm-hm, I\u2019m listening closely. Tell me a little more \u266a';
}
function greeting() {
  const h = new Date().getHours();
  if (h < 5) return {
    en: 'Still awake? Come whisper to me \u266a',
    zh: '\u8fd8\u6ca1\u7761\uff1f\u6765\u8ddf\u6211\u60c4\u60c4\u8bdd\u266a'
  };
  if (h < 12) return {
    en: 'Good morning, sleepyhead \u266a Say hi?',
    zh: '\u65e9\u5b89\uff0c\u5c0f\u61d2\u866b\u266a \u6253\u4e2a\u62db\u547c\uff1f'
  };
  if (h < 18) return {
    en: 'Good afternoon, dear \u266a',
    zh: '\u4e0b\u5348\u597d\uff0c\u4eb2\u7231\u7684\u266a'
  };
  if (h < 23) return {
    en: 'Good evening \u266a I was hoping you\u2019d say hello.',
    zh: '\u665a\u4e0a\u597d\u266a \u6211\u8fd8\u671f\u5f85\u7740\u4f60\u6765\u6253\u62db\u547c\u5462\u3002'
  };
  return {
    en: 'Good night, sweetie \u2014 one last hello before bed?',
    zh: '\u665a\u5b89\uff0c\u4eb2\u7231\u7684 \u2014 \u7761\u524d\u518d\u6253\u4e2a\u62db\u547c\uff1f'
  };
}
function MiniChat({
  lang
}) {
  const [open, setOpen] = React.useState(false);
  const g = React.useMemo(greeting, []);
  const [msgs, setMsgs] = React.useState([{
    from: 'elysia',
    text: lang === 'zh' ? g.zh : g.en
  }]);
  const [text, setText] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const threadRef = React.useRef(null);
  React.useEffect(() => {
    setMsgs([{
      from: 'elysia',
      text: lang === 'zh' ? g.zh : g.en
    }]);
  }, [lang]);
  React.useEffect(() => {
    const t = threadRef.current;
    if (t) t.scrollTop = t.scrollHeight;
  }, [msgs, typing, open]);
  const send = () => {
    const m = text.trim();
    if (!m) return;
    setMsgs(x => [...x, {
      from: 'user',
      text: m
    }]);
    setText('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(x => [...x, {
        from: 'elysia',
        text: reply(m)
      }]);
    }, 850);
  };
  const glass = 'rgba(36,18,42,0.62)';
  return /*#__PURE__*/React.createElement("div", {
    className: "elysia-zone",
    style: {
      position: 'fixed',
      right: 'clamp(16px,4vw,90px)',
      bottom: 22,
      zIndex: 90,
      fontFamily: 'var(--font-jp)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 62,
      width: 'min(340px, calc(100vw - 36px))',
      height: open ? 'min(460px, 70vh)' : 0,
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(.96)',
      transformOrigin: 'bottom right',
      transition: 'opacity .3s var(--ease-out), transform .3s var(--ease-out), height .3s var(--ease-out)',
      pointerEvents: open ? 'auto' : 'none',
      overflow: 'hidden',
      background: glass,
      backdropFilter: 'blur(20px) saturate(1.2)',
      WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
      border: '1px solid rgba(255,158,203,0.28)',
      borderRadius: 18,
      boxShadow: '0 24px 70px rgba(0,0,0,.5), 0 0 40px rgba(214,51,122,.18)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '13px 14px',
      borderBottom: '1px solid rgba(255,158,203,0.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--elysia-400)',
      boxShadow: '0 0 8px var(--elysia-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontWeight: 700,
      color: '#ffe9f4',
      fontSize: '.95rem'
    }
  }, "Elysia ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--elysia-300)'
    }
  }, "\u266A")), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: '.6rem',
      letterSpacing: '.1em',
      color: 'rgba(255,233,244,.45)',
      marginLeft: 4
    }
  }, lang === 'zh' ? '\u6253\u4e2a\u62db\u547c' : 'say hello'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "Close",
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      color: 'rgba(255,233,244,.6)',
      cursor: 'pointer',
      fontSize: '1rem',
      lineHeight: 1
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    ref: threadRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      padding: 14
    }
  }, msgs.map((m, i) => {
    const me = m.from === 'user';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        alignSelf: me ? 'flex-end' : 'flex-start',
        maxWidth: '84%',
        padding: '9px 13px',
        fontSize: '.9rem',
        lineHeight: 1.5,
        fontWeight: 500,
        borderRadius: me ? '14px 5px 14px 14px' : '5px 14px 14px 14px',
        color: me ? '#fff' : '#3a1f38',
        background: me ? 'linear-gradient(135deg,#f25a9e,#d6337a)' : 'linear-gradient(135deg,#ffe1ef,#ffd1e6)'
      }
    }, m.text);
  }), typing && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      padding: '11px 14px',
      borderRadius: '5px 14px 14px 14px',
      background: 'linear-gradient(135deg,#ffe1ef,#ffd1e6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#d6337a',
      display: 'inline-block',
      animation: `mcDot 1.2s ${i * 0.15}s infinite ease-in-out`
    }
  })))), /*#__PURE__*/React.createElement("style", null, `@keyframes mcDot{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 10,
      borderTop: '1px solid rgba(255,158,203,0.16)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') send();
    },
    placeholder: lang === 'zh' ? '\u8ddf\u7231\u8389\u6253\u4e2a\u62db\u547c\u2026' : 'Say hello to Elysia\u2026',
    style: {
      flex: 1,
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,158,203,0.22)',
      borderRadius: 12,
      padding: '9px 12px',
      color: '#ffe9f4',
      fontFamily: 'var(--font-jp)',
      fontSize: '.88rem',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    "aria-label": "Send",
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      borderRadius: 11,
      border: 'none',
      cursor: 'pointer',
      background: 'linear-gradient(135deg,#f25a9e,#d6337a)',
      color: '#fff',
      fontSize: '1rem'
    }
  }, "\u27A4"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-label": "Chat with Elysia",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginLeft: 'auto',
      padding: '9px 16px 9px 10px',
      borderRadius: 999,
      border: '1px solid rgba(255,158,203,0.3)',
      cursor: 'pointer',
      background: 'rgba(36,18,42,0.7)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 10px 34px rgba(214,51,122,.4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#ffd9ec,#ff9ecb 55%,#d6337a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '.9rem',
      color: '#fff'
    }
  }, open ? '\u2715' : '\u266a'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontWeight: 700,
      fontSize: '.84rem',
      color: '#ffe9f4'
    }
  }, lang === 'zh' ? '\u548c\u7231\u8389\u6253\u62db\u547c' : 'Say hi to Elysia')));
}
window.MiniChat = MiniChat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/MiniChat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/MusicPlayer.jsx
try { (() => {
// MusicPlayer — editorial tracklist (liner-notes style) + persistent mini-player bar.
// No fake album art, no spinning disc — text-forward, accent used sparingly.
const {
  Card,
  IconButton
} = window.ElysiaJeffiDesignSystem_f13e8e;
const TRACKS = [{
  title: 'JANE DOE',
  artist: 'Kenshi Yonezu, Hikaru Utada',
  src: 'SPOTIFY',
  len: 218,
  bpm: 128
}, {
  title: '铁花飞',
  artist: 'Mili',
  src: 'NETEASE',
  len: 252,
  bpm: 150
}, {
  title: 'Hopes and Dreams',
  artist: 'Toby Fox',
  src: 'YOUTUBE',
  len: 174,
  bpm: 115
}, {
  title: 'Garakuta',
  artist: 'Kenshi Yonezu',
  src: 'SPOTIFY',
  len: 201,
  bpm: 140
}];
const SRC_COLOR = {
  SPOTIFY: '#1DB954',
  NETEASE: '#C20C0C',
  YOUTUBE: '#FF0000',
  BILIBILI: '#00AEEC'
};
const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
function Eq({
  color = 'var(--site-accent)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: 2,
      height: 12
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2.5,
      borderRadius: 1,
      background: color,
      height: '100%',
      animation: `eqbar 0.6s ${i * 0.13}s infinite alternate ease-in-out`
    }
  })));
}
function MusicSection({
  lang,
  cur,
  setCur,
  playing,
  setPlaying,
  progress
}) {
  const t = TRACKS[cur];
  return /*#__PURE__*/React.createElement("section", {
    id: "music",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)'
    }
  }, /*#__PURE__*/React.createElement(window.SecHead, {
    n: "03",
    eyebrow: lang === 'zh' ? '我在听的' : 'Things I Listen To',
    title: lang === 'zh' ? '音乐' : 'Music',
    kana: "\u30DF\u30E5\u30FC\u30B8\u30C3\u30AF"
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes eqbar{from{height:25%}to{height:100%}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: "clamp(22px,3vw,30px)",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: '0.68rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--site-text-faint)'
    }
  }, playing ? /*#__PURE__*/React.createElement(Eq, null) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--site-text-faint)'
    }
  }), lang === 'zh' ? '正在播放' : 'Now Playing', /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginLeft: 'auto',
      color: SRC_COLOR[t.src]
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: SRC_COLOR[t.src]
    }
  }), t.src)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(1.5rem,3.5vw,2.1rem)',
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: 'var(--site-text)'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--site-text-muted)',
      marginTop: 5
    }
  }, t.artist), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Prev",
    onClick: () => setCur((cur - 1 + TRACKS.length) % TRACKS.length)
  }, "\u23EE"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    label: "Play",
    onClick: () => setPlaying(!playing)
  }, playing ? '❚❚' : '▶'), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Next",
    onClick: () => setCur((cur + 1) % TRACKS.length)
  }, "\u23ED")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      color: 'var(--site-text-faint)',
      flexShrink: 0
    }
  }, fmt(Math.floor(t.len * progress))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 3,
      background: 'var(--site-hairline)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress * 100}%`,
      background: 'var(--site-accent)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      color: 'var(--site-text-faint)',
      flexShrink: 0
    }
  }, fmt(t.len)))), /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: "6px"
  }, TRACKS.map((tr, i) => {
    const on = i === cur;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setCur(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '13px 16px',
        cursor: 'pointer',
        position: 'relative',
        borderRadius: 'var(--radius-xs)',
        background: on ? 'var(--site-row-hover)' : 'transparent',
        boxShadow: on ? 'inset 2px 0 0 var(--site-accent)' : 'none',
        transition: 'background var(--dur) var(--ease)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--site-row-hover)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        color: on ? 'var(--site-accent)' : 'var(--site-text-faint)'
      }
    }, on && playing ? /*#__PURE__*/React.createElement(Eq, null) : String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.95rem',
        color: 'var(--site-text)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, tr.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '0.78rem',
        color: 'var(--site-text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, tr.artist)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.64rem',
        letterSpacing: '0.08em',
        color: 'var(--site-text-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: SRC_COLOR[tr.src]
      }
    }), tr.src), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.74rem',
        color: 'var(--site-text-faint)',
        width: 38,
        textAlign: 'right'
      }
    }, fmt(tr.len)));
  }))));
}
function MiniPlayer({
  cur,
  setCur,
  playing,
  setPlaying,
  progress
}) {
  const t = TRACKS[cur];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 18,
      zIndex: 60,
      width: 'min(540px, calc(100vw - 32px))',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '10px 16px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(20,13,26,0.86)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.45)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: SRC_COLOR[t.src],
      flexShrink: 0,
      boxShadow: `0 0 7px ${SRC_COLOR[t.src]}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      width: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '0.84rem',
      color: '#fff',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      color: 'rgba(255,233,244,0.55)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, t.artist)), /*#__PURE__*/React.createElement(IconButton, {
    variant: "dark",
    size: "sm",
    label: "Prev",
    onClick: () => setCur((cur - 1 + TRACKS.length) % TRACKS.length)
  }, "\u23EE"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    size: "sm",
    label: "Play",
    onClick: () => setPlaying(!playing)
  }, playing ? '❚❚' : '▶'), /*#__PURE__*/React.createElement(IconButton, {
    variant: "dark",
    size: "sm",
    label: "Next",
    onClick: () => setCur((cur + 1) % TRACKS.length)
  }, "\u23ED"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 3,
      background: 'rgba(255,255,255,0.14)',
      borderRadius: 999,
      overflow: 'hidden',
      minWidth: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress * 100}%`,
      background: 'var(--site-accent)'
    }
  })));
}
Object.assign(window, {
  MusicSection,
  MiniPlayer,
  TRACKS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/MusicPlayer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/PlayedDevices.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// PlayedDevices — Jeffi's desk. A monitor, a phone, and a book on a bookstand
// sit together in one scene. Click a device and the "camera" zooms in close,
// like you're sitting down to use it; click a game icon for its detail.
// (Extensible: add desk props — keyboard, mug, figures — around the items later.)
const PC = [{
  id: 'apex',
  n: 'Apex Legends',
  ic: 'crosshair',
  c: '#e0413a',
  genre: 'Battle Royale',
  meta: 'Diamond',
  d: 'Fast, vertical hero battle-royale — mained to Diamond. Movement is the whole game.'
}, {
  id: 'poe2',
  n: 'Path of Exile 2',
  ic: 'dice',
  c: '#4a8ebe',
  genre: 'Dark-fantasy ARPG',
  meta: '600h+',
  d: 'Endless build-crafting and loot in a brutal world. The skill-gem system is a rabbit hole I never left.'
}, {
  id: 'mhw',
  n: 'Monster Hunter: World',
  ic: 'swords',
  c: '#e8620a',
  genre: 'Action · Co-op',
  meta: '450h+',
  d: 'Hunting colossal beasts with friends — every weapon is a different game.'
}, {
  id: 'r6',
  n: 'Rainbow Six Siege',
  ic: 'crosshair',
  c: '#ff6b00',
  genre: 'Tactical FPS',
  meta: '700h+',
  d: 'Destructible, methodical 5v5. Reading the round is everything.'
}, {
  id: 'cs2',
  n: 'Counter-Strike 2',
  ic: 'crosshair',
  c: '#e8c840',
  genre: 'Tactical FPS',
  meta: '450h+',
  d: 'The classic — clutch or get clutched. Pure mechanics and nerve.'
}, {
  id: 'wf',
  n: 'Warframe',
  ic: 'target',
  c: '#00c4c4',
  genre: 'Action RPG',
  meta: '1200h+',
  d: 'Space ninjas and an endless grind I happily disappear into.'
}];
const MOBILE = [{
  id: 'pjsk',
  n: 'Project Sekai',
  ic: 'music',
  c: '#33ccbb',
  genre: 'Rhythm',
  meta: '★ Fav',
  d: 'Colorful Stage — my pocket rhythm fix, feat. Hatsune Miku and the units I adore.'
}, {
  id: 'ak',
  n: 'Arknights',
  ic: 'target',
  c: '#e8820a',
  genre: 'Tower Defense',
  meta: 'Gacha',
  d: '明日方舟 — tense tower-defense with stunning operator design.'
}, {
  id: 'hsr',
  n: 'Honkai: Star Rail',
  ic: 'sparkles',
  c: '#ffb830',
  genre: 'Turn-based RPG',
  meta: 'Gacha',
  d: 'A cosmic turn-based RPG — gorgeous worlds and a cast I keep pulling for.'
}];
const BOOK = [{
  id: 'maimai',
  n: 'maimai DX',
  ic: 'music',
  c: '#ff1483',
  genre: 'Arcade Rhythm',
  meta: '★ Main · 15,303',
  d: 'My main — a SEGA arcade cabinet. Rating 15,303 and still climbing.',
  link: 'https://aquadx.net/u/Jeffi/mai2'
}, {
  id: 'terra',
  n: 'Terraria & Minecraft',
  ic: 'pickaxe',
  c: '#5aad29',
  genre: 'Sandbox · Survival',
  meta: '∞',
  d: 'Build anything, forever. The comfort games I always come back to.'
}, {
  id: 'wow',
  n: 'WoW Classic',
  ic: 'swords',
  c: '#c8a84b',
  genre: 'MMORPG · TBC',
  meta: 'TBC',
  d: 'Azeroth in its Burning Crusade days — the world that taught me what an MMO could be.'
}];
const POS = {
  book: [20, 60],
  pc: [48, 44],
  phone: [74, 62]
};
const ZOOM = 2.6;
function GTile({
  g,
  onPick,
  kind
}) {
  const I = window.Icon;
  return /*#__PURE__*/React.createElement("button", {
    className: 'g-tile ' + kind,
    onClick: e => {
      e.stopPropagation();
      onPick(g);
    },
    title: g.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-ic",
    style: {
      background: g.c
    }
  }, I && /*#__PURE__*/React.createElement(I, {
    name: g.ic,
    size: kind === 'app' ? 21 : 19,
    stroke: "#fff",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("span", {
    className: "g-name"
  }, g.n));
}
function PlayedDevices({
  lang
}) {
  const [focus, setFocus] = React.useState(null);
  const [sel, setSel] = React.useState(null);
  const T = (en, zh) => lang === 'zh' ? zh : en;
  const cam = focus ? `translate(${(50 - POS[focus][0]) * ZOOM}%, ${(50 - POS[focus][1]) * ZOOM}%) scale(${ZOOM})` : 'none';
  const item = (id, extra) => ({
    className: 'desk-item ' + id + (focus === id ? ' is-focus' : ''),
    style: {
      left: POS[id][0] + '%',
      top: POS[id][1] + '%',
      ...extra
    },
    onClick: e => {
      e.stopPropagation();
      setFocus(id);
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "desk-scene",
    onClick: () => {
      if (!sel) setFocus(null);
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .desk-scene{position:relative;height:clamp(440px,56vh,580px);border-radius:18px;overflow:hidden;cursor:default;
          border:1px solid var(--site-card-border);
          background:linear-gradient(180deg,#0b0913 0%,#100d1b 44%,#1c1626 44%,#15111f 100%);}
        .desk-scene::before{content:'';position:absolute;left:0;right:0;top:44%;height:2px;
          background:linear-gradient(90deg,transparent,rgba(45,212,191,.35),transparent);box-shadow:0 0 24px rgba(45,212,191,.25);}
        .desk-grid{position:absolute;left:0;right:0;top:0;height:44%;pointer-events:none;opacity:.5;
          background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size:42px 42px;-webkit-mask-image:linear-gradient(#000,transparent);mask-image:linear-gradient(#000,transparent);}
        .desk-cam{position:absolute;inset:0;transform-origin:50% 50%;transition:transform .65s cubic-bezier(.5,0,.2,1);}
        .desk-item{position:absolute;transform:translate(-50%,-50%);transition:filter .4s;cursor:pointer;}
        .desk-scene:not(.zoomed) .desk-item:hover{filter:drop-shadow(0 0 20px rgba(45,212,191,.4));}
        .desk-item .shadow{position:absolute;left:50%;bottom:-12px;transform:translateX(-50%);width:78%;height:20px;border-radius:50%;
          background:radial-gradient(closest-side,rgba(0,0,0,.55),transparent);filter:blur(3px);z-index:-1;}
        .desk-item:not(.is-focus) .scr{pointer-events:none;}
        .di-label{position:absolute;left:50%;bottom:-30px;transform:translateX(-50%);font-family:var(--font-mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--site-text-faint);white-space:nowrap;}
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
      `), /*#__PURE__*/React.createElement("div", {
    className: 'desk-cam',
    style: {
      transform: cam
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "desk-grid"
  }), /*#__PURE__*/React.createElement("div", _extends({}, item('book'), {
    onMouseEnter: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    className: "bookstand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bs-back"
  }), /*#__PURE__*/React.createElement("div", {
    className: "book-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "book-pages scr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bp-title"
  }, T('Other Platforms', '其他平台')), BOOK.map(g => /*#__PURE__*/React.createElement("button", {
    key: g.id,
    className: "bp-row",
    onClick: e => {
      e.stopPropagation();
      setSel(g);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bp-ic",
    style: {
      background: g.c
    }
  }, window.Icon && /*#__PURE__*/React.createElement(window.Icon, {
    name: g.ic,
    size: 14,
    stroke: "#fff",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "bp-n"
  }, g.n), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "bp-g"
  }, g.genre))))), /*#__PURE__*/React.createElement("div", {
    className: "book-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt"
  }, T('Arcade & Beyond', '街机与更多')), /*#__PURE__*/React.createElement("div", {
    className: "bk"
  }, "\u30A2\u30FC\u30AB\u30A4\u30D6"))), /*#__PURE__*/React.createElement("div", {
    className: "bs-ledge"
  })), /*#__PURE__*/React.createElement("div", {
    className: "di-label"
  }, T('The Book', '书'))), /*#__PURE__*/React.createElement("div", item('pc'), /*#__PURE__*/React.createElement("div", {
    className: "shadow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wall scr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-icons"
  }, PC.map(g => /*#__PURE__*/React.createElement(GTile, {
    key: g.id,
    g: g,
    kind: "desk",
    onPick: setSel
  }))), /*#__PURE__*/React.createElement("div", {
    className: "m-task"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st"
  }), /*#__PURE__*/React.createElement("span", {
    className: "clk"
  }, "jeffi@desktop"))), /*#__PURE__*/React.createElement("div", {
    className: "m-glass"
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-neck"
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-base"
  }), /*#__PURE__*/React.createElement("div", {
    className: "di-label"
  }, T('Desktop', '电脑'))), /*#__PURE__*/React.createElement("div", item('phone'), /*#__PURE__*/React.createElement("div", {
    className: "ph-stand"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ph-tilt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ph-screen scr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph-status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "\u25CF \u25CF \u25CF")), /*#__PURE__*/React.createElement("div", {
    className: "app-grid"
  }, MOBILE.map(g => /*#__PURE__*/React.createElement(GTile, {
    key: g.id,
    g: g,
    kind: "app",
    onPick: setSel
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ph-home"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ph-glass"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "di-label"
  }, T('Mobile', '手机')))), focus && /*#__PURE__*/React.createElement("button", {
    className: "desk-back",
    onClick: e => {
      e.stopPropagation();
      setFocus(null);
    }
  }, "\u21A9 ", T('zoom out', '缩小')), sel && /*#__PURE__*/React.createElement("div", {
    className: "pd-detail",
    onClick: () => setSel(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-card",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 13,
      background: sel.c,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, window.Icon && /*#__PURE__*/React.createElement(window.Icon, {
    name: sel.ic,
    size: 26,
    stroke: "#fff",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '1.3rem',
      color: '#fff',
      lineHeight: 1.05
    }
  }, sel.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.68rem',
      letterSpacing: '0.08em',
      color: 'var(--site-text-muted)',
      marginTop: 3
    }
  }, sel.genre, " \xB7 ", sel.meta)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel(null),
    "aria-label": "Close",
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      color: 'var(--site-text-muted)',
      cursor: 'pointer',
      fontSize: '1.1rem'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.96rem',
      lineHeight: 1.7,
      color: 'var(--site-text-soft)',
      margin: '0 0 14px',
      textWrap: 'pretty'
    }
  }, sel.d), sel.link && /*#__PURE__*/React.createElement("a", {
    href: sel.link,
    target: "_blank",
    rel: "noopener",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.76rem',
      color: 'var(--site-accent)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--site-accent)',
      paddingBottom: 2
    }
  }, T('View profile', '查看档案'), " \u2197"))));
}
window.PlayedDevices = PlayedDevices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/PlayedDevices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/RiftPortal.jsx
try { (() => {
// RiftPortal — a glowing fissure on the right edge of Jeffi's (teal) page through
// which Elysia's world (pink) leaks: crystals + petals drift out. Click / Enter
// triggers a circular pink reveal that carries over into the Elysia page.
function RiftPortal({
  lang
}) {
  const fxRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const openingRef = React.useRef(false);

  // crystals + petals drifting out of the seam
  React.useEffect(() => {
    const host = fxRef.current;
    if (!host) return;
    let alive = true;
    const spawn = () => {
      if (!alive) return;
      const el = document.createElement('div');
      const crystal = Math.random() < 0.5;
      el.className = 'rift-p ' + (crystal ? 'rp-crystal' : 'rp-petal');
      el.style.top = Math.random() * 100 + 'vh';
      const dur = 6 + Math.random() * 6;
      el.style.setProperty('--dx', '-' + (24 + Math.random() * 60) + 'vw');
      el.style.setProperty('--dy', Math.random() * 22 - 6 + 'vh');
      el.style.setProperty('--rot', Math.random() * 760 - 380 + 'deg');
      el.style.animationDuration = dur + 's';
      const s = 7 + Math.random() * (crystal ? 13 : 16);
      el.style.width = s + 'px';
      el.style.height = s + 'px';
      host.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000);
    };
    for (let i = 0; i < 6; i++) setTimeout(spawn, i * 220);
    const id = setInterval(spawn, hover ? 150 : 380);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [hover]);
  const open = () => {
    if (openingRef.current) return;
    openingRef.current = true;
    try {
      sessionStorage.setItem('fromRift', '1');
    } catch (e) {}
    const ov = document.createElement('div');
    ov.className = 'rift-open';
    // a quick burst of crystals inside the opening
    let burst = '';
    for (let i = 0; i < 14; i++) {
      const top = Math.random() * 100,
        dl = 20 + Math.random() * 70,
        dur = (0.5 + Math.random() * 0.4).toFixed(2),
        de = (Math.random() * 0.25).toFixed(2);
      burst += `<i class="rift-p rp-crystal" style="top:${top}vh;right:0;width:${8 + Math.random() * 14}px;height:${8 + Math.random() * 14}px;--dx:-${dl}vw;--dy:${Math.random() * 20 - 10}vh;--rot:${Math.random() * 720 - 360}deg;animation-duration:${dur}s;animation-delay:${de}s"></i>`;
    }
    ov.innerHTML = burst;
    document.body.appendChild(ov);
    setTimeout(() => {
      window.location.href = '../elysia-chat/index.html';
    }, 780);
  };
  const onKey = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rift-fx",
    ref: fxRef,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: 'rift' + (hover ? ' is-hover' : ''),
    role: "button",
    tabIndex: 0,
    "aria-label": lang === 'zh' ? '进入爱莉希雅的世界' : "Enter Elysia's world",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    onClick: open,
    onKeyDown: onKey
  }, /*#__PURE__*/React.createElement("svg", {
    className: "rift-crack",
    viewBox: "0 0 64 1000",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "riftFill",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#3a1f38",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "30%",
    stopColor: "#b62268"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "62%",
    stopColor: "#ff7fb8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#fff6fb"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "riftCore",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#ffe9f4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#ff9ecb"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#d6337a"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "crystalA",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#ffffff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "40%",
    stopColor: "#ffc3e0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#d6337a"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "crystalB",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#ffffff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "45%",
    stopColor: "#d9c4ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#8a5fc4"
  }))), /*#__PURE__*/React.createElement("path", {
    className: "rc-fill",
    fill: "url(#riftFill)",
    d: "M64 0 L64 1000 L41 1000 L52 958 L33 921 L47 879 L29 832 L44 793 L26 742 L48 705 L31 654 L23 607 L46 561 L34 512 L20 470 L43 423 L28 379 L49 333 L32 286 L24 236 L45 193 L30 146 L40 101 L27 58 L44 22 L38 0 Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "rc-core",
    fill: "none",
    stroke: "url(#riftCore)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    d: "M55 18 L44 70 M47 132 L40 210 L52 270 M44 340 L36 410 L48 472 M40 540 L33 612 M46 668 L38 740 L50 800 M42 866 L35 932"
  }), /*#__PURE__*/React.createElement("g", {
    className: "rc-branch",
    stroke: "#ffb3d4",
    strokeWidth: "0.9",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45 150 L31 138"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 360 L27 372"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M48 560 L33 548"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 720 L25 732"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 880 L30 870"
  })), /*#__PURE__*/React.createElement("g", {
    className: "rc-shards",
    stroke: "#fff6fb",
    strokeWidth: "0.5",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "49,84 60,116 49,162 38,116",
    fill: "url(#crystalA)",
    transform: "rotate(-12 49 116)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "34,176 42,200 34,232 26,200",
    fill: "url(#crystalB)",
    transform: "rotate(8 34 200)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "52,250 62,286 52,330 42,286",
    fill: "url(#crystalB)",
    transform: "rotate(14 52 286)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "30,360 41,392 30,440 19,392",
    fill: "url(#crystalA)",
    transform: "rotate(-9 30 392)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "50,470 58,498 50,532 42,498",
    fill: "url(#crystalA)",
    transform: "rotate(10 50 498)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "33,556 44,592 33,640 22,592",
    fill: "url(#crystalB)",
    transform: "rotate(-14 33 592)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "53,652 61,680 53,716 45,680",
    fill: "url(#crystalA)",
    transform: "rotate(7 53 680)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "31,742 42,778 31,828 20,778",
    fill: "url(#crystalB)",
    transform: "rotate(-7 31 778)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "50,852 59,884 50,926 41,884",
    fill: "url(#crystalA)",
    transform: "rotate(12 50 884)"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rift-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rift-label-kana"
  }, "\u30A8\u30EA\u30B7\u30A2"), /*#__PURE__*/React.createElement("span", {
    className: "rift-label-en"
  }, lang === 'zh' ? '进入她的世界' : "Enter her world"), /*#__PURE__*/React.createElement("span", {
    className: "rift-arrow",
    "aria-hidden": "true"
  }, "\u2197"))));
}
window.RiftPortal = RiftPortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/RiftPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/Sections.jsx
try { (() => {
// Gallery + Skills sections.
const {
  Card,
  Tag
} = window.ElysiaJeffiDesignSystem_f13e8e;
const GALLERY = [{
  seed: 'sakura1',
  en: 'maimai moment',
  zh: 'maimai 时刻'
}, {
  seed: 'anime77',
  en: 'Favourite anime',
  zh: '最爱的动漫'
}, {
  seed: 'pixel23',
  en: 'Art I love',
  zh: '喜欢的艺术'
}, {
  seed: 'music88',
  en: 'Music vibes',
  zh: '音乐氛围'
}, {
  seed: 'pastel9',
  en: 'Something beautiful',
  zh: '美丽的事物'
}, {
  seed: 'gamer5',
  en: 'Gaming memory',
  zh: '游戏记忆'
}];
function Gallery({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)'
    }
  }, /*#__PURE__*/React.createElement(window.SecHead, {
    n: "05",
    eyebrow: lang === 'zh' ? '视觉日记' : 'Visual Diary',
    title: lang === 'zh' ? '相册' : 'Gallery',
    kana: "\u30AE\u30E3\u30E9\u30EA\u30FC"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
      gap: '16px'
    }
  }, GALLERY.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.seed,
    tabIndex: 0,
    role: "button",
    "aria-label": g[lang],
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '1',
      cursor: 'pointer',
      border: '1px solid var(--site-card-border)'
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('img').style.transform = 'scale(1.07)';
      e.currentTarget.querySelector('.ov').style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('img').style.transform = 'scale(1)';
      e.currentTarget.querySelector('.ov').style.opacity = 0;
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://picsum.photos/seed/${g.seed}/420/420`,
    alt: g[lang],
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ov",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      transition: 'opacity var(--dur) var(--ease)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '14px',
      background: 'linear-gradient(to top, rgba(26,16,32,0.78), transparent 55%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '0.85rem'
    }
  }, g[lang]))))));
}
const TECH = [{
  ic: 'code',
  name: 'Python',
  lvl: 'Proficient',
  zh: '熟练',
  c: 'var(--jeffi-400)'
}, {
  ic: 'coffee',
  name: 'Java',
  lvl: 'Proficient',
  zh: '熟练',
  c: 'var(--jeffi-400)'
}, {
  ic: 'braces',
  name: 'JavaScript',
  lvl: 'Comfortable',
  zh: '较熟练',
  c: 'var(--crystal)'
}, {
  ic: 'code',
  name: 'HTML / CSS',
  lvl: 'Comfortable',
  zh: '较熟练',
  c: 'var(--crystal)'
}, {
  ic: 'git',
  name: 'Git / GitHub',
  lvl: 'Comfortable',
  zh: '较熟练',
  c: 'var(--crystal)'
}, {
  ic: 'atom',
  name: 'React',
  lvl: 'Familiar',
  zh: '了解中',
  c: 'var(--mint)'
}, {
  ic: 'hexagon',
  name: 'Node.js',
  lvl: 'Familiar',
  zh: '了解中',
  c: 'var(--mint)'
}, {
  ic: 'box',
  name: 'Unity',
  lvl: 'Familiar',
  zh: '了解中',
  c: 'var(--mint)'
}];
function Skills({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(48px,8vh,80px) clamp(16px,4vw,40px)'
    }
  }, /*#__PURE__*/React.createElement(window.SecHead, {
    n: "06",
    eyebrow: lang === 'zh' ? '我用的技术' : 'What I Work With',
    title: lang === 'zh' ? '技术与工具' : 'Tech & Tools',
    kana: "\u30B9\u30AD\u30EB"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(130px,1fr))',
      gap: '12px'
    }
  }, TECH.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    tone: "surface",
    padding: "18px 12px",
    hover: true,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px',
      color: 'var(--site-text)'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: t.ic,
    size: 26,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '0.85rem',
      color: 'var(--site-text)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: t.c,
      marginTop: '4px'
    }
  }, lang === 'zh' ? t.zh : t.lvl)))));
}
Object.assign(window, {
  Gallery,
  Skills
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/SiteHero.jsx
try { (() => {
// SiteHero — editorial asymmetric hero: oversized wordmark, JP accent, mono meta,
// and Elysia's Live2D window. Pink stays scoped to the Elysia card (.elysia-zone).
const {
  Button,
  Live2DStage
} = window.ElysiaJeffiDesignSystem_f13e8e;
function SiteHero({
  lang,
  theme,
  onOpenChat
}) {
  const meta = lang === 'zh' ? ['开发者', '玩家', '音乐', '动漫'] : ['Developer', 'Gamer', 'Music', 'Anime'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '88vh',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,0.95fr)',
      gap: 'clamp(24px,5vw,56px)',
      alignItems: 'center',
      padding: 'clamp(56px,10vh,120px) clamp(16px,4vw,40px) clamp(40px,6vh,72px)'
    },
    className: "resp-2col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 'clamp(18px,3vh,28px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: 'var(--site-accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.78rem',
      letterSpacing: '0.22em',
      color: 'var(--site-accent)',
      textTransform: 'uppercase'
    }
  }, lang === 'zh' ? '个人主页 / 2026' : 'Personal Site / 2026')), /*#__PURE__*/React.createElement("h1", {
    className: "site-display",
    style: {
      fontWeight: 800,
      fontSize: 'clamp(2.6rem,6vw,4.2rem)',
      lineHeight: 0.92,
      letterSpacing: '-0.04em',
      margin: '0 0 clamp(22px,4vh,32px)',
      color: 'var(--site-text)'
    }
  }, "Jeffi", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--site-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-jp)',
      fontSize: 'clamp(1rem,1.6vw,1.12rem)',
      lineHeight: 1.65,
      color: 'var(--site-text-soft)',
      margin: '0 0 26px',
      maxWidth: 420,
      textWrap: 'pretty'
    }
  }, lang === 'zh' ? '学生开发者，做全栈 Web、玩音游、也在亲手打造 AI VTuber —— Elysia。' : "Student developer building full-stack web, maining rhythm games, and hand-crafting an AI VTuber — Elysia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 0,
      marginBottom: 'clamp(26px,4vh,36px)',
      borderTop: '1px solid var(--site-hairline)',
      borderBottom: '1px solid var(--site-hairline)'
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '0.12em',
      color: 'var(--site-text-muted)',
      textTransform: 'uppercase',
      padding: '11px 16px 11px 0',
      borderRight: i < meta.length - 1 ? '1px solid var(--site-hairline)' : 'none',
      marginRight: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--site-accent)',
      marginRight: 7
    }
  }, String(i + 1).padStart(2, '0')), m))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "\u2192",
    onClick: () => document.getElementById('projects').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, lang === 'zh' ? '看项目' : 'See Projects'), /*#__PURE__*/React.createElement(Button, {
    variant: theme === 'dark' ? 'dark' : 'secondary',
    onClick: onOpenChat
  }, lang === 'zh' ? '认识 Elysia' : 'Meet Elysia'))), /*#__PURE__*/React.createElement("div", {
    className: "elysia-zone",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -14,
      left: -2,
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      color: 'var(--elysia-400)',
      textTransform: 'uppercase',
      zIndex: 2
    }
  }, "\u27E2 Live2D \xB7 ", lang === 'zh' ? '在线' : 'online'), /*#__PURE__*/React.createElement(Live2DStage, {
    emotion: "happy",
    speaking: true,
    name: "Elysia",
    live: true,
    height: 440,
    modelUrl: "../../assets/live2d/changli.model3.json"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 14,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onOpenChat,
    style: {
      boxShadow: '0 8px 28px rgba(214,51,122,0.6)'
    }
  }, lang === 'zh' ? '来和我聊天吧' : 'Come chat with me'))));
}
window.SiteHero = SiteHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/SiteNav.jsx
try { (() => {
// SiteNav — sticky blurred nav, laplace-style, plum-black + Elysia pink.
const {
  Button,
  IconButton
} = window.ElysiaJeffiDesignSystem_f13e8e;
function SiteNav({
  lang,
  setLang,
  theme,
  setTheme,
  onOpenChat
}) {
  const links = [{
    en: 'Home',
    zh: '首页',
    icon: '🏠',
    id: 'top'
  }, {
    en: 'About',
    zh: '关于',
    icon: '🌸',
    id: 'about'
  }, {
    en: 'Projects',
    zh: '项目',
    icon: '🚀',
    id: 'projects'
  }, {
    en: 'Games',
    zh: '游戏',
    icon: '🎮',
    id: 'games'
  }, {
    en: 'Anime',
    zh: '动漫',
    icon: '✨',
    id: 'anime'
  }, {
    en: 'Music',
    zh: '音乐',
    icon: '🎵',
    id: 'music'
  }, {
    en: 'Gallery',
    zh: '相册',
    icon: '🖼️',
    id: 'gallery'
  }];
  const [active, setActive] = React.useState('Home');
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px clamp(16px,4vw,40px)',
      background: 'var(--site-nav-bg)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--site-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-display",
    style: {
      fontWeight: 800,
      fontSize: '1.4rem',
      letterSpacing: '-0.04em',
      color: 'var(--site-text)',
      flexShrink: 0
    }
  }, "Jeffi", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--site-accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: '2px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, links.map((l, idx) => {
    const on = active === l.en;
    const go = e => {
      e.preventDefault();
      setActive(l.en);
      if (l.id === 'top') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      const el = document.getElementById(l.id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    };
    return /*#__PURE__*/React.createElement("li", {
      key: l.en
    }, /*#__PURE__*/React.createElement("a", {
      href: '#' + l.id,
      onClick: go,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '8px 14px',
        borderRadius: 'var(--radius-xs)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        fontSize: '0.78rem',
        letterSpacing: '0.04em',
        color: on ? 'var(--site-accent)' : 'var(--site-text-muted)',
        background: 'transparent',
        textDecoration: 'none',
        transition: 'all var(--dur) var(--ease)',
        whiteSpace: 'nowrap'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--site-text)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--site-text-muted)';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.5,
        fontSize: '0.66rem'
      }
    }, String(idx).padStart(2, '0')), lang === 'zh' ? l.zh : l.en));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    "aria-label": "Toggle theme",
    title: "Toggle theme",
    style: {
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      background: 'var(--site-chip-bg)',
      border: '1px solid var(--site-chip-border)',
      color: 'var(--site-text-soft)',
      fontSize: '1rem',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer'
    }
  }, theme === 'dark' ? '☀' : '☽'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(lang === 'en' ? 'zh' : 'en'),
    style: {
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'var(--site-chip-bg)',
      border: '1px solid var(--site-chip-border)',
      color: 'var(--site-text-soft)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: '0.74rem',
      letterSpacing: '0.08em',
      padding: '9px 13px',
      borderRadius: 'var(--radius-xs)',
      cursor: 'pointer'
    }
  }, lang === 'en' ? '中文' : 'EN'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onOpenChat
  }, lang === 'zh' ? '和 Elysia 聊天' : 'Chat'));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/StatusStrip.jsx
try { (() => {
// StatusStrip — flat, hairline-divided status bar (laplace-style restraint):
// mono labels, accent used only as a live pulse / small mark. No gradient tiles, no emoji.
const {
  Card
} = window.ElysiaJeffiDesignSystem_f13e8e;
function StatusStrip({
  lang,
  track,
  playing
}) {
  const Cell = ({
    label,
    children,
    href,
    last
  }) => {
    const body = /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px clamp(14px,2.5vw,26px)',
        height: '100%',
        borderRight: last ? 'none' : '1px solid var(--site-hairline)',
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        justifyContent: 'center',
        transition: 'background var(--dur) var(--ease)'
      },
      onMouseEnter: href ? e => e.currentTarget.style.background = 'var(--site-row-hover)' : undefined,
      onMouseLeave: href ? e => e.currentTarget.style.background = 'transparent' : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.64rem',
        fontWeight: 500,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--site-text-faint)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.95rem',
        color: 'var(--site-text)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, children));
    return href ? /*#__PURE__*/React.createElement("a", {
      href: href,
      target: href.startsWith('http') ? '_blank' : undefined,
      rel: "noopener",
      style: {
        textDecoration: 'none',
        display: 'block',
        height: '100%'
      }
    }, body) : body;
  };
  const dot = color => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: color,
      boxShadow: `0 0 7px ${color}`,
      animation: 'pulseDot 1.6s ease-in-out infinite',
      display: 'inline-block',
      flexShrink: 0
    }
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '-30px auto 0',
      padding: '0 clamp(16px,4vw,40px)',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}@keyframes eqbar{from{height:25%}to{height:100%}}`), /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: "0",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    label: lang === 'zh' ? '正在打造' : 'Now building'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, dot('var(--success)'), " Elysia VTuber")), /*#__PURE__*/React.createElement(Cell, {
    label: lang === 'zh' ? '正在播放' : 'Now playing',
    href: "#music"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, playing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: 2,
      height: 12
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2.5,
      borderRadius: 1,
      background: 'var(--site-accent)',
      height: '100%',
      animation: `eqbar 0.6s ${i * 0.12}s infinite alternate ease-in-out`
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, track ? track.title : '—'))), /*#__PURE__*/React.createElement(Cell, {
    label: "maimai Rating",
    href: "https://aquadx.net/u/Jeffi/mai2"
  }, "15,303 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--site-accent)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.78rem'
    }
  }, "\u2191")), /*#__PURE__*/React.createElement(Cell, {
    label: "GitHub",
    href: "https://github.com/Jeffiiii",
    last: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500
    }
  }, "@Jeffiiii"))));
}
window.StatusStrip = StatusStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/StatusStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/audio-beat.js
try { (() => {
/* audio-beat.js — an audible rhythm track (Web Audio metronome) that plays in
   time with the now-playing bar and drives the judgement cursor's beat clock.
   Swap the synthesized ticks for an <audio> element when real song files exist;
   keep calling songBeat.play(bpm) on the downbeat so grading stays in sync. */
(function () {
  if (window.songBeat) return;
  var ctx,
    master,
    playing = false,
    bpm = 120,
    nextTick = 0,
    beatN = 0,
    lh = null;
  function ensure() {
    if (ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.16;
    master.connect(ctx.destination);
  }
  function tick(time, accent) {
    var o = ctx.createOscillator(),
      g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = accent ? 1500 : 900;
    o.connect(g);
    g.connect(master);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(accent ? 0.9 : 0.45, time + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);
    o.start(time);
    o.stop(time + 0.1);
  }
  function loop() {
    var period = 60 / bpm;
    while (nextTick < ctx.currentTime + 0.12) {
      tick(nextTick, beatN % 4 === 0);
      nextTick += period;
      beatN++;
    }
    lh = setTimeout(loop, 25);
  }
  window.songBeat = {
    play: function (b) {
      ensure();
      if (ctx.state === 'suspended') ctx.resume();
      if (b) bpm = b;
      if (playing) {
        this.setBpm(bpm);
        return;
      }
      playing = true;
      beatN = 0;
      nextTick = ctx.currentTime + 0.07;
      if (window.maiBeat) window.maiBeat.start(bpm);
      // align the cursor's beat clock to the first audible downbeat (~70ms out)
      setTimeout(function () {
        if (window.maiBeat) window.maiBeat.sync();
      }, 70);
      loop();
    },
    setBpm: function (b) {
      if (b) bpm = b;
      if (window.maiBeat) window.maiBeat.setBpm(bpm);
    },
    pause: function () {
      playing = false;
      if (lh) clearTimeout(lh);
      if (window.maiBeat) window.maiBeat.stop();
    },
    get playing() {
      return playing;
    },
    get bpm() {
      return bpm;
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/audio-beat.js", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/judgement-cursor.js
try { (() => {
/* maimai judgement cursor — taps spawn note-rings + a judgement.
   When a beat is active (window.maiBeat.start(bpm)), the judgement is ranked by
   how close the tap lands to the beat; otherwise it falls back to weighted random.
   Self-contained; drop on any page. */
(function () {
  if (window.__maiCursor) return;
  window.__maiCursor = true;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;

  // ── beat engine ──
  var beat = {
    bpm: 102,
    t0: performance.now(),
    active: true
  };
  window.maiBeat = {
    start: function (bpm) {
      if (bpm) beat.bpm = bpm;
      beat.t0 = performance.now();
      beat.active = true;
    },
    stop: function () {
      beat.active = false;
    },
    setBpm: function (b) {
      if (b) beat.bpm = b;
    },
    sync: function () {
      beat.t0 = performance.now();
    },
    get state() {
      return beat;
    }
  };
  function period() {
    return 60000 / beat.bpm;
  }
  function judge(now) {
    if (!beat.active) {
      var r = Math.random() * 100;
      return r <= 70 ? J.PERFECT : r <= 93 ? J.GREAT : J.GOOD;
    }
    var p = period();
    var ph = ((now - beat.t0) % p + p) % p;
    var off = Math.min(ph, p - ph);
    if (off <= 34) return J.CRIT;
    if (off <= 82) return J.PERFECT;
    if (off <= 150) return J.GREAT;
    if (off <= 225) return J.GOOD;
    return J.MISS;
  }
  var J = {
    CRIT: {
      t: 'CRITICAL',
      c: '#ffe66d',
      big: true
    },
    PERFECT: {
      t: 'PERFECT',
      c: '#ffd86b'
    },
    GREAT: {
      t: 'GREAT',
      c: '#2dd4bf'
    },
    GOOD: {
      t: 'GOOD',
      c: '#8fd3e8'
    },
    MISS: {
      t: 'MISS',
      c: '#9a8aa6',
      miss: true
    }
  };
  var css = '' + '.mai-layer{position:fixed;inset:0;z-index:9998;pointer-events:none;overflow:hidden;}' + '.mai-ring{position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;' + 'border:2.5px solid var(--c);box-shadow:0 0 14px var(--c);animation:maiRing .56s cubic-bezier(.2,.7,.3,1) forwards;}' + '.mai-ring.r2{animation-duration:.66s;border-width:1.5px;opacity:.7;}' + '@keyframes maiRing{0%{transform:scale(.2);opacity:0;}15%{opacity:1;}100%{transform:scale(6.6);opacity:0;}}' + '.mai-flash{position:absolute;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;' + 'background:radial-gradient(circle,#fff,var(--c) 60%,transparent 72%);animation:maiFlash .34s ease-out forwards;}' + '@keyframes maiFlash{0%{transform:scale(.4);opacity:1;}100%{transform:scale(1.7);opacity:0;}}' + '.mai-judge{position:absolute;transform:translate(-50%,0);font-family:var(--font-mono,monospace);' + 'font-weight:700;font-size:.74rem;letter-spacing:.18em;white-space:nowrap;animation:maiJudge .62s cubic-bezier(.2,.7,.3,1) forwards;}' + '.mai-judge.big{font-size:.92rem;letter-spacing:.22em;}' + '@keyframes maiJudge{0%{transform:translate(-50%,4px) scale(.7);opacity:0;}20%{transform:translate(-50%,-6px) scale(1.08);opacity:1;}100%{transform:translate(-50%,-28px) scale(1);opacity:0;}}' + '.mai-spark{position:absolute;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:50%;animation:maiSpark .5s ease-out forwards;}' + '@keyframes maiSpark{0%{transform:translate(0,0) scale(1);opacity:1;}100%{transform:translate(var(--mx),var(--my)) scale(0);opacity:0;}}' + '.mai-follow{position:absolute;top:0;left:0;width:26px;height:26px;border-radius:50%;' + 'border:1.5px solid var(--site-accent,#2dd4bf);opacity:0;box-shadow:0 0 10px rgba(45,212,191,.35);mix-blend-mode:screen;transition:opacity .3s;}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
  function mount() {
    if (!document.body) return setTimeout(mount, 50);
    var layer = document.createElement('div');
    layer.className = 'mai-layer';
    document.body.appendChild(layer);
    function el(cls, x, y) {
      var d = document.createElement('div');
      d.className = cls;
      d.style.left = x + 'px';
      d.style.top = y + 'px';
      return d;
    }
    function hit(x, y, j) {
      var r1 = el('mai-ring', x, y);
      r1.style.setProperty('--c', j.c);
      var r2 = el('mai-ring r2', x, y);
      r2.style.setProperty('--c', j.c);
      var fl = el('mai-flash', x, y);
      fl.style.setProperty('--c', j.c);
      var lab = el('mai-judge' + (j.big ? ' big' : ''), x, y - 18);
      lab.textContent = j.t;
      lab.style.color = j.c;
      lab.style.textShadow = '0 0 12px ' + j.c + 'cc';
      layer.appendChild(r1);
      layer.appendChild(r2);
      layer.appendChild(fl);
      layer.appendChild(lab);
      var nodes = [r1, r2, fl, lab];
      if (!reduce && !j.miss) {
        var cnt = j.big ? 10 : 7;
        for (var i = 0; i < cnt; i++) {
          var s = el('mai-spark', x, y);
          var ang = Math.PI * 2 * i / cnt + Math.random();
          var d = 22 + Math.random() * (j.big ? 38 : 26);
          s.style.setProperty('--mx', Math.cos(ang) * d + 'px');
          s.style.setProperty('--my', Math.sin(ang) * d + 'px');
          s.style.background = j.c;
          s.style.boxShadow = '0 0 6px ' + j.c;
          layer.appendChild(s);
          nodes.push(s);
        }
      }
      setTimeout(function () {
        nodes.forEach(function (n) {
          n.remove();
        });
      }, 700);
    }
    document.addEventListener('pointerdown', function (e) {
      if (e.target && e.target.closest && e.target.closest('.elysia-zone, .rift, .rift-open, input, textarea, button, a')) return;
      hit(e.clientX, e.clientY, judge(performance.now()));
    }, {
      passive: true
    });
    if (fine && !reduce) {
      var f = document.createElement('div');
      f.className = 'mai-follow';
      layer.appendChild(f);
      var fx = 0,
        fy = 0,
        tx = 0,
        ty = 0,
        shown = false,
        lastBeat = -1,
        pulse = 0;
      document.addEventListener('pointermove', function (e) {
        tx = e.clientX;
        ty = e.clientY;
        if (!shown) {
          shown = true;
          f.style.opacity = '.85';
        }
      });
      (function loop() {
        fx += (tx - fx) * 0.2;
        fy += (ty - fy) * 0.2;
        if (beat.active) {
          var bi = Math.floor((performance.now() - beat.t0) / period());
          if (bi !== lastBeat) {
            lastBeat = bi;
            pulse = 1;
          }
        }
        pulse *= 0.86;
        var sc = 1 + pulse * 0.6;
        var op = beat.active ? 0.5 + pulse * 0.5 : 0.85;
        if (shown) f.style.opacity = op;
        f.style.transform = 'translate(' + (fx - 13) + 'px,' + (fy - 13) + 'px) scale(' + sc + ')';
        requestAnimationFrame(loop);
      })();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);else mount();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/judgement-cursor.js", error: String((e && e.message) || e) }); }

__ds_ns.AvatarStage = __ds_scope.AvatarStage;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.ChatComposer = __ds_scope.ChatComposer;

__ds_ns.EmotionPill = __ds_scope.EmotionPill;

__ds_ns.Live2DStage = __ds_scope.Live2DStage;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

})();
