// XFade — bilingual micro-transition. When `text` changes (EN ↔ 中文), each
// glyph cross-fades in with a small blur + rise, staggered, so switching the
// site language reads as a crafted reveal rather than a hard swap.
// Also runs once on mount as a gentle entrance.
function XFade({ text, as = 'span', className = '', style, charDelay = 24 }) {
  const t = text == null ? '' : String(text);
  const [chars, setChars] = React.useState(() => t.split(''));
  const [gen, setGen] = React.useState(0);
  const prev = React.useRef(t);
  React.useEffect(() => {
    if (prev.current === t) return;
    prev.current = t;
    setChars(t.split(''));
    setGen((g) => g + 1);
  }, [t]);
  const Tag = as;
  return (
    <Tag className={'xf ' + className} style={style} aria-label={t}>
      {chars.map((c, i) => (
        <span
          key={gen + '-' + i}
          aria-hidden="true"
          className="xf-c"
          style={{ animationDelay: (i * charDelay) + 'ms' }}
        >{c === ' ' ? '\u00a0' : c}</span>
      ))}
    </Tag>
  );
}
window.XFade = XFade;
