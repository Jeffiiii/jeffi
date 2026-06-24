import React from 'react';
import { AvatarStage } from './AvatarStage.jsx';

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
  l2d:  'https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.4.0/dist/cubism4.min.js',
};

// emotion (chat) -> model expression name (see changli.model3.json Expressions)
const EXPR = {
  happy: 'blush',
  playful: 'heart',
  shy: 'blush',
  sad: null,
  surprised: null,
  neutral: null,
  angry: 'angry',
};

let _loaderPromise = null;
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if ([...document.scripts].some((s) => s.src === src)) return resolve();
    const el = document.createElement('script');
    el.src = src; el.crossOrigin = 'anonymous';
    el.onload = resolve; el.onerror = () => reject(new Error('load failed: ' + src));
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

export function Live2DStage({
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
  style = {},
}) {
  const wrapRef = React.useRef(null);
  const appRef = React.useRef(null);
  const modelRef = React.useRef(null);
  const speakingRef = React.useRef(speaking);
  const poseRef = React.useRef({ nx: 0, ny: 0, last: 0, ax: 0, ay: 0, ex: 0, ey: 0, bx: 0 });
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
          autoDensity: true,
        });
        appRef.current = app;
        const view = app.view;
        view.style.position = 'absolute';
        view.style.inset = '0';
        view.style.width = '100%';
        view.style.height = '100%';
        wrapRef.current.appendChild(view);

        const model = await L2D.Live2DModel.from(modelUrl, { autoInteract: false });
        if (cancelled) { model.destroy(); return; }
        modelRef.current = model;
        app.stage.addChild(model);

        const layout = () => {
          if (!wrapRef.current) return;
          const r = wrapRef.current.getBoundingClientRect();
          const w = Math.max(1, Math.round(r.width));
          const h = Math.max(1, Math.round(r.height));
          app.renderer.resize(w, h);
          const s = (h / model.internalModel.height) * (zoom / 0.42) * 1.9;
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
          try { cm.setParameterValueById('ParamMouthOpenY', v); } catch (e) {}
        };
        app.ticker.add(mouthTicker);

        // cursor / section awareness + idle life (head, eyes, body lean)
        const onMove = (e) => {
          const p = poseRef.current;
          p.nx = (e.clientX / window.innerWidth) * 2 - 1;
          p.ny = (e.clientY / window.innerHeight) * 2 - 1;
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
          let tx = p.nx, ty = p.ny;
          if (idle) { tx = Math.sin(pt * 0.5) * 0.42; ty = Math.sin(pt * 0.33) * 0.22 - 0.05; }
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
      try { if (mouthTicker && appRef.current) appRef.current.ticker.remove(mouthTicker); } catch (e) {}
      try { if (poseTicker && appRef.current) appRef.current.ticker.remove(poseTicker); } catch (e) {}
      try { if (modelRef.current && modelRef.current._omMove) window.removeEventListener('pointermove', modelRef.current._omMove); } catch (e) {}
      try { if (modelRef.current && modelRef.current._omRO) modelRef.current._omRO.disconnect(); } catch (e) {}
      try { if (modelRef.current) modelRef.current.destroy(); } catch (e) {}
      try { if (appRef.current) { try { if (appRef.current.view && appRef.current.view.parentNode) appRef.current.view.parentNode.removeChild(appRef.current.view); } catch (e) {} appRef.current.destroy(true); } } catch (e) {}
      appRef.current = null; modelRef.current = null;
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
      if (name) m.expression(name);
      else if (m.internalModel && m.internalModel.motionManager && m.internalModel.motionManager.expressionManager) {
        m.internalModel.motionManager.expressionManager.resetExpression();
      }
    } catch (e) {}
  }, [emotion, status]);

  // SVG fallback on failure
  if (status === 'error') {
    const poster = modelUrl.replace(/[^/]+\.model3\.json$/, 'icon.png');
    return <AvatarStage poster={poster} frameBg={frameBg} emotion={emotion} speaking={speaking} name={name} live={live} height={height} style={style}>{children}</AvatarStage>;
  }

  return (
    <div ref={wrapRef} style={{
      position: 'relative', height, borderRadius: 'var(--radius-xl)', overflow: 'hidden',
      background: frameBg,
      border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
      ...style,
    }}>
      {/* speaking glow */}
      <div style={{
        position: 'absolute', left: '50%', top: '8%', width: '64%', aspectRatio: '1',
        transform: `translateX(-50%) scale(${speaking ? 1.08 : 1})`,
        borderRadius: '50%', filter: 'blur(10px)', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(242,90,158,0.30), transparent 65%)',
        transition: 'transform 0.3s var(--ease-out)',
      }} />

      {status === 'loading' && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 10,
          alignItems: 'center', justifyContent: 'center', color: 'var(--elysia-300)',
        }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', border: '3px solid rgba(255,158,203,0.25)', borderTopColor: 'var(--elysia-300)', animation: 'l2dspin 0.8s linear infinite' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.78rem', color: 'rgba(255,233,244,0.7)' }}>Summoning Elysia ♪</span>
          <style>{'@keyframes l2dspin{to{transform:rotate(360deg)}}'}</style>
        </div>
      )}

      {/* name label */}
      <div style={{
        position: 'absolute', bottom: 12, left: 14, display: 'flex', alignItems: 'center', gap: '8px',
        padding: '5px 12px 5px 7px', borderRadius: 'var(--radius-pill)',
        background: 'rgba(26,16,32,0.55)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)',
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: live ? 'var(--brand)' : 'var(--success)', boxShadow: live ? '0 0 8px var(--brand)' : 'none' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: '#ffe9f4' }}>{name}</span>
        {live && <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--elysia-300)' }}>LIVE</span>}
      </div>
      {children}
    </div>
  );
}
