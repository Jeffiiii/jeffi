// SecHead — editorial numbered section header: index number, top rule, eyebrow,
// oversized title, and a vertical kana accent. Replaces the centered headers.
function SecHead({ n, eyebrow, title, kana }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{n}</span>
      <div className="sec-head-main">
        <div className="ds-eyebrow" style={{ color: 'var(--site-accent)' }}><window.XFade text={eyebrow} /></div>
        <h2 className="sec-title"><window.XFade text={title} /></h2>
      </div>
      {kana && <span className="sec-kana" aria-hidden="true">{kana}</span>}
    </div>
  );
}
window.SecHead = SecHead;
