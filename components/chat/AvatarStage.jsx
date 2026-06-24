import React from 'react';

/**
 * AvatarStage — clean dark "window" used as the static stand-in / fallback for
 * Elysia's avatar (when the Live2D rig can't load). Shows the model's portrait
 * image (`poster`) framed in the stream window with a soft speaking glow — or a
 * minimal monogram if no poster is given. No cartoon faces.
 */
export function AvatarStage({ poster, frameBg = 'radial-gradient(120% 90% at 50% 12%, #3a1f38 0%, #241630 55%, #160d1c 100%)', emotion = 'neutral', speaking = false, name = 'Elysia', live = false, height = 320, children, style = {} }) {
  return (
    <div style={{
      position: 'relative', height, borderRadius: 'var(--radius-xl)', overflow: 'hidden',
      background: frameBg,
      border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', ...style,
    }}>
      {/* soft glow halo */}
      <div style={{
        position: 'absolute', left: '50%', top: '6%', width: '70%', aspectRatio: '1',
        transform: `translateX(-50%) scale(${speaking ? 1.07 : 1})`,
        borderRadius: '50%', filter: 'blur(12px)', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(242,90,158,0.32), transparent 66%)',
        transition: 'transform 0.3s var(--ease-out)',
      }} />

      {poster ? (
        <img src={poster} alt={name} style={{
          position: 'relative', maxHeight: '92%', maxWidth: '88%', objectFit: 'contain',
          filter: speaking ? 'saturate(1.06)' : 'none',
          transform: speaking ? 'translateY(-2px)' : 'none',
          transition: 'transform 0.3s var(--ease-out), filter 0.3s var(--ease)',
        }} />
      ) : (
        <div style={{
          position: 'relative', width: Math.min(height * 0.42, 150), height: Math.min(height * 0.42, 150),
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(150deg, #ffd9ec, #ff9ecb 55%, #d6337a)',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: Math.min(height * 0.2, 72),
          color: '#fff', border: '2px solid rgba(255,255,255,0.6)',
        }}>{(name || 'E').charAt(0)}</div>
      )}

      {/* name label */}
      <div style={{
        position: 'absolute', bottom: 12, left: 14, display: 'flex', alignItems: 'center', gap: '8px',
        padding: '5px 12px 5px 7px', borderRadius: 'var(--radius-pill)',
        background: 'rgba(22,13,28,0.6)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)',
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: live ? 'var(--brand)' : 'var(--success)', boxShadow: live ? '0 0 8px var(--brand)' : 'none' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#ffe9f4' }}>{name}</span>
        {live && <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--elysia-300)' }}>LIVE</span>}
      </div>

      {children}
    </div>
  );
}
