import React from 'react';

/**
 * EmotionPill — shows Elysia's current expression (from aivtuber/emotion.py:
 * happy, playful, shy, sad, surprised, neutral) with its accent colour + glyph.
 */
const EMO = {
  happy:     { c: 'var(--emo-happy)',     g: '😊', en: 'happy',     zh: '开心' },
  playful:   { c: 'var(--emo-playful)',   g: '😏', en: 'playful',   zh: '调皮' },
  shy:       { c: 'var(--emo-shy)',       g: '☺️', en: 'shy',       zh: '害羞' },
  sad:       { c: 'var(--emo-sad)',       g: '🥺', en: 'sad',       zh: '难过' },
  surprised: { c: 'var(--emo-surprised)', g: '😮', en: 'surprised', zh: '惊讶' },
  neutral:   { c: 'var(--emo-neutral)',   g: '🌸', en: 'neutral',   zh: '平静' },
};

export function EmotionPill({ emotion = 'neutral', lang = 'en', style = {} }) {
  const e = EMO[emotion] || EMO.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '4px 12px 4px 9px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)', fontSize: 'var(--fs-tiny)', fontWeight: 'var(--w-heavy)',
      color: '#fff', background: e.c,
      boxShadow: `0 4px 14px ${e.c}66`,
      ...style,
    }}>
      <span style={{ fontSize: '0.95rem', lineHeight: 1 }}>{e.g}</span>
      {lang === 'zh' ? e.zh : e.en}
    </span>
  );
}

EmotionPill.emotions = Object.keys(EMO);
