// Reveal — fade + rise children once when scrolled into view. Used to give
// otherwise-static sections (About) a sense of arrival. Honors reduced-motion.
function Reveal({ children, delay = 0, y = 16, as = 'div', className = '', style = {} }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setShown(true); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={{
      ...style,
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: `opacity .6s var(--ease-out) ${delay}ms, transform .6s var(--ease-out) ${delay}ms`,
    }}>{children}</Tag>
  );
}
window.Reveal = Reveal;
