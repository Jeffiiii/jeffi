/* audio-beat.js — an audible rhythm track (Web Audio metronome) that plays in
   time with the now-playing bar and drives the judgement cursor's beat clock.
   Swap the synthesized ticks for an <audio> element when real song files exist;
   keep calling songBeat.play(bpm) on the downbeat so grading stays in sync. */
(function () {
  if (window.songBeat) return;
  var ctx, master, playing = false, bpm = 120, nextTick = 0, beatN = 0, lh = null;

  function ensure() {
    if (ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.16; master.connect(ctx.destination);
  }
  function tick(time, accent) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = accent ? 1500 : 900;
    o.connect(g); g.connect(master);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(accent ? 0.9 : 0.45, time + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);
    o.start(time); o.stop(time + 0.1);
  }
  function loop() {
    var period = 60 / bpm;
    while (nextTick < ctx.currentTime + 0.12) {
      tick(nextTick, beatN % 4 === 0);
      nextTick += period; beatN++;
    }
    lh = setTimeout(loop, 25);
  }

  window.songBeat = {
    play: function (b) {
      ensure(); if (ctx.state === 'suspended') ctx.resume();
      if (b) bpm = b;
      if (playing) { this.setBpm(bpm); return; }
      playing = true; beatN = 0; nextTick = ctx.currentTime + 0.07;
      if (window.maiBeat) window.maiBeat.start(bpm);
      // align the cursor's beat clock to the first audible downbeat (~70ms out)
      setTimeout(function () { if (window.maiBeat) window.maiBeat.sync(); }, 70);
      loop();
    },
    setBpm: function (b) { if (b) bpm = b; if (window.maiBeat) window.maiBeat.setBpm(bpm); },
    pause: function () { playing = false; if (lh) clearTimeout(lh); if (window.maiBeat) window.maiBeat.stop(); },
    get playing() { return playing; },
    get bpm() { return bpm; }
  };
})();
