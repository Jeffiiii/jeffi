/* maimai judgement cursor — taps spawn note-rings + a judgement.
   When a beat is active (window.maiBeat.start(bpm)), the judgement is ranked by
   how close the tap lands to the beat; otherwise it falls back to weighted random.
   Self-contained; drop on any page. */
(function () {
  if (window.__maiCursor) return; window.__maiCursor = true;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;

  // ── beat engine ──
  var beat = { bpm: 102, t0: performance.now(), active: true };
  window.maiBeat = {
    start: function (bpm) { if (bpm) beat.bpm = bpm; beat.t0 = performance.now(); beat.active = true; },
    stop: function () { beat.active = false; },
    setBpm: function (b) { if (b) beat.bpm = b; },
    sync: function () { beat.t0 = performance.now(); },
    get state() { return beat; }
  };
  function period() { return 60000 / beat.bpm; }
  function judge(now) {
    if (!beat.active) { var r = Math.random() * 100; return r <= 70 ? J.PERFECT : (r <= 93 ? J.GREAT : J.GOOD); }
    var p = period(); var ph = (((now - beat.t0) % p) + p) % p; var off = Math.min(ph, p - ph);
    if (off <= 34) return J.CRIT;
    if (off <= 82) return J.PERFECT;
    if (off <= 150) return J.GREAT;
    if (off <= 225) return J.GOOD;
    return J.MISS;
  }
  var J = {
    CRIT: { t: 'CRITICAL', c: '#ffe66d', big: true },
    PERFECT: { t: 'PERFECT', c: '#ffd86b' },
    GREAT: { t: 'GREAT', c: '#2dd4bf' },
    GOOD: { t: 'GOOD', c: '#8fd3e8' },
    MISS: { t: 'MISS', c: '#9a8aa6', miss: true },
  };

  var css = ''
    + '.mai-layer{position:fixed;inset:0;z-index:9998;pointer-events:none;overflow:hidden;}'
    + '.mai-ring{position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;'
    + 'border:2.5px solid var(--c);box-shadow:0 0 14px var(--c);animation:maiRing .56s cubic-bezier(.2,.7,.3,1) forwards;}'
    + '.mai-ring.r2{animation-duration:.66s;border-width:1.5px;opacity:.7;}'
    + '@keyframes maiRing{0%{transform:scale(.2);opacity:0;}15%{opacity:1;}100%{transform:scale(6.6);opacity:0;}}'
    + '.mai-flash{position:absolute;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;'
    + 'background:radial-gradient(circle,#fff,var(--c) 60%,transparent 72%);animation:maiFlash .34s ease-out forwards;}'
    + '@keyframes maiFlash{0%{transform:scale(.4);opacity:1;}100%{transform:scale(1.7);opacity:0;}}'
    + '.mai-judge{position:absolute;transform:translate(-50%,0);font-family:var(--font-mono,monospace);'
    + 'font-weight:700;font-size:.74rem;letter-spacing:.18em;white-space:nowrap;animation:maiJudge .62s cubic-bezier(.2,.7,.3,1) forwards;}'
    + '.mai-judge.big{font-size:.92rem;letter-spacing:.22em;}'
    + '@keyframes maiJudge{0%{transform:translate(-50%,4px) scale(.7);opacity:0;}20%{transform:translate(-50%,-6px) scale(1.08);opacity:1;}100%{transform:translate(-50%,-28px) scale(1);opacity:0;}}'
    + '.mai-spark{position:absolute;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:50%;animation:maiSpark .5s ease-out forwards;}'
    + '@keyframes maiSpark{0%{transform:translate(0,0) scale(1);opacity:1;}100%{transform:translate(var(--mx),var(--my)) scale(0);opacity:0;}}'
    + '.mai-follow{position:absolute;top:0;left:0;width:26px;height:26px;border-radius:50%;'
    + 'border:1.5px solid var(--site-accent,#2dd4bf);opacity:0;box-shadow:0 0 10px rgba(45,212,191,.35);mix-blend-mode:screen;transition:opacity .3s;}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function mount() {
    if (!document.body) return setTimeout(mount, 50);
    var layer = document.createElement('div'); layer.className = 'mai-layer'; document.body.appendChild(layer);
    function el(cls, x, y) { var d = document.createElement('div'); d.className = cls; d.style.left = x + 'px'; d.style.top = y + 'px'; return d; }

    function hit(x, y, j) {
      var r1 = el('mai-ring', x, y); r1.style.setProperty('--c', j.c);
      var r2 = el('mai-ring r2', x, y); r2.style.setProperty('--c', j.c);
      var fl = el('mai-flash', x, y); fl.style.setProperty('--c', j.c);
      var lab = el('mai-judge' + (j.big ? ' big' : ''), x, y - 18); lab.textContent = j.t; lab.style.color = j.c; lab.style.textShadow = '0 0 12px ' + j.c + 'cc';
      layer.appendChild(r1); layer.appendChild(r2); layer.appendChild(fl); layer.appendChild(lab);
      var nodes = [r1, r2, fl, lab];
      if (!reduce && !j.miss) {
        var cnt = j.big ? 10 : 7;
        for (var i = 0; i < cnt; i++) {
          var s = el('mai-spark', x, y); var ang = (Math.PI * 2 * i / cnt) + Math.random(); var d = 22 + Math.random() * (j.big ? 38 : 26);
          s.style.setProperty('--mx', Math.cos(ang) * d + 'px'); s.style.setProperty('--my', Math.sin(ang) * d + 'px');
          s.style.background = j.c; s.style.boxShadow = '0 0 6px ' + j.c; layer.appendChild(s); nodes.push(s);
        }
      }
      setTimeout(function () { nodes.forEach(function (n) { n.remove(); }); }, 700);
    }

    document.addEventListener('pointerdown', function (e) {
      if (e.target && e.target.closest && e.target.closest('.elysia-zone, .rift, .rift-open, input, textarea, button, a')) return;
      hit(e.clientX, e.clientY, judge(performance.now()));
    }, { passive: true });

    if (fine && !reduce) {
      var f = document.createElement('div'); f.className = 'mai-follow'; layer.appendChild(f);
      var fx = 0, fy = 0, tx = 0, ty = 0, shown = false, lastBeat = -1, pulse = 0;
      document.addEventListener('pointermove', function (e) { tx = e.clientX; ty = e.clientY; if (!shown) { shown = true; f.style.opacity = '.85'; } });
      (function loop() {
        fx += (tx - fx) * 0.2; fy += (ty - fy) * 0.2;
        if (beat.active) { var bi = Math.floor((performance.now() - beat.t0) / period()); if (bi !== lastBeat) { lastBeat = bi; pulse = 1; } }
        pulse *= 0.86;
        var sc = 1 + pulse * 0.6; var op = beat.active ? (0.5 + pulse * 0.5) : 0.85;
        if (shown) f.style.opacity = op;
        f.style.transform = 'translate(' + (fx - 13) + 'px,' + (fy - 13) + 'px) scale(' + sc + ')';
        requestAnimationFrame(loop);
      })();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
