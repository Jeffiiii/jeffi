// RiftPortal — a glowing fissure on the right edge of Jeffi's (teal) page through
// which Elysia's world (pink) leaks: crystals + petals drift out. Click / Enter
// triggers a circular pink reveal that carries over into the Elysia page.
function RiftPortal({ lang }) {
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
      el.style.top = (Math.random() * 100) + 'vh';
      const dur = 6 + Math.random() * 6;
      el.style.setProperty('--dx', '-' + (24 + Math.random() * 60) + 'vw');
      el.style.setProperty('--dy', (Math.random() * 22 - 6) + 'vh');
      el.style.setProperty('--rot', (Math.random() * 760 - 380) + 'deg');
      el.style.animationDuration = dur + 's';
      const s = 7 + Math.random() * (crystal ? 13 : 16);
      el.style.width = s + 'px';
      el.style.height = s + 'px';
      host.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000);
    };
    for (let i = 0; i < 6; i++) setTimeout(spawn, i * 220);
    const id = setInterval(spawn, hover ? 150 : 380);
    return () => { alive = false; clearInterval(id); };
  }, [hover]);

  const open = () => {
    if (openingRef.current) return;
    openingRef.current = true;
    try { sessionStorage.setItem('fromRift', '1'); } catch (e) {}
    const ov = document.createElement('div');
    ov.className = 'rift-open';
    // a quick burst of crystals inside the opening
    let burst = '';
    for (let i = 0; i < 14; i++) {
      const top = Math.random() * 100, dl = 20 + Math.random() * 70, dur = (0.5 + Math.random() * 0.4).toFixed(2), de = (Math.random() * 0.25).toFixed(2);
      burst += `<i class="rift-p rp-crystal" style="top:${top}vh;right:0;width:${8 + Math.random()*14}px;height:${8 + Math.random()*14}px;--dx:-${dl}vw;--dy:${Math.random()*20-10}vh;--rot:${Math.random()*720-360}deg;animation-duration:${dur}s;animation-delay:${de}s"></i>`;
    }
    ov.innerHTML = burst;
    document.body.appendChild(ov);
    setTimeout(() => { window.location.href = '../elysia-chat/index.html'; }, 780);
  };

  const onKey = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } };

  return (
    <React.Fragment>
      <div className="rift-fx" ref={fxRef} aria-hidden="true"></div>
      <div
        className={'rift' + (hover ? ' is-hover' : '')}
        role="button"
        tabIndex={0}
        aria-label={lang === 'zh' ? '进入爱莉希雅的世界' : "Enter Elysia's world"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        onClick={open}
        onKeyDown={onKey}
      >
        <svg className="rift-crack" viewBox="0 0 64 1000" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="riftFill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3a1f38" stopOpacity="0" />
              <stop offset="30%" stopColor="#b62268" />
              <stop offset="62%" stopColor="#ff7fb8" />
              <stop offset="100%" stopColor="#fff6fb" />
            </linearGradient>
            <linearGradient id="riftCore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe9f4" />
              <stop offset="50%" stopColor="#ff9ecb" />
              <stop offset="100%" stopColor="#d6337a" />
            </linearGradient>
            <linearGradient id="crystalA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#ffc3e0" />
              <stop offset="100%" stopColor="#d6337a" />
            </linearGradient>
            <linearGradient id="crystalB" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#d9c4ff" />
              <stop offset="100%" stopColor="#8a5fc4" />
            </linearGradient>
          </defs>
          <path className="rc-fill" fill="url(#riftFill)" d="M64 0 L64 1000 L41 1000 L52 958 L33 921 L47 879 L29 832 L44 793 L26 742 L48 705 L31 654 L23 607 L46 561 L34 512 L20 470 L43 423 L28 379 L49 333 L32 286 L24 236 L45 193 L30 146 L40 101 L27 58 L44 22 L38 0 Z" />
          <path className="rc-core" fill="none" stroke="url(#riftCore)" strokeWidth="2.4" strokeLinecap="round" d="M55 18 L44 70 M47 132 L40 210 L52 270 M44 340 L36 410 L48 472 M40 540 L33 612 M46 668 L38 740 L50 800 M42 866 L35 932" />
          <g className="rc-branch" stroke="#ffb3d4" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.7">
            <path d="M45 150 L31 138" /><path d="M40 360 L27 372" /><path d="M48 560 L33 548" />
            <path d="M38 720 L25 732" /><path d="M44 880 L30 870" />
          </g>
          <g className="rc-shards" stroke="#fff6fb" strokeWidth="0.5" strokeLinejoin="round">
            <polygon points="49,84 60,116 49,162 38,116" fill="url(#crystalA)" transform="rotate(-12 49 116)" />
            <polygon points="34,176 42,200 34,232 26,200" fill="url(#crystalB)" transform="rotate(8 34 200)" />
            <polygon points="52,250 62,286 52,330 42,286" fill="url(#crystalB)" transform="rotate(14 52 286)" />
            <polygon points="30,360 41,392 30,440 19,392" fill="url(#crystalA)" transform="rotate(-9 30 392)" />
            <polygon points="50,470 58,498 50,532 42,498" fill="url(#crystalA)" transform="rotate(10 50 498)" />
            <polygon points="33,556 44,592 33,640 22,592" fill="url(#crystalB)" transform="rotate(-14 33 592)" />
            <polygon points="53,652 61,680 53,716 45,680" fill="url(#crystalA)" transform="rotate(7 53 680)" />
            <polygon points="31,742 42,778 31,828 20,778" fill="url(#crystalB)" transform="rotate(-7 31 778)" />
            <polygon points="50,852 59,884 50,926 41,884" fill="url(#crystalA)" transform="rotate(12 50 884)" />
          </g>
        </svg>
        <div className="rift-label">
          <span className="rift-label-kana">エリシア</span>
          <span className="rift-label-en">{lang === 'zh' ? '进入她的世界' : "Enter her world"}</span>
          <span className="rift-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </React.Fragment>
  );
}
window.RiftPortal = RiftPortal;
