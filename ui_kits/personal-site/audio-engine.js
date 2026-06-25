/* audio-engine.js — flexible real audio for the site.
   ONE controller, three source kinds, picked automatically per track:
     • 'audio'  a real file or direct URL  → <audio> + Web Audio AnalyserNode
                (REAL frequency spectrum + level drive the visuals)
     • 'yt'     a YouTube link             → YT IFrame API (real playback/seek;
                spectrum is approximated from BPM since YT audio is cross-origin)
     • 'synth'  no media (preset demo)     → synthesized metronome (audio-beat.js)
   Always drives window.maiBeat so the judgement cursor grades against the real
   playback position. Subscribe with audioEngine.on('tick'|'state', cb).
   Flexible by design: addTrack() at runtime from a file pick or a pasted URL —
   no hosting, no rebuild, no preset list required. */
(function () {
  if (window.audioEngine) return;

  var subs = { tick: [], state: [] };
  function emit(ev) { (subs[ev] || []).forEach(function (f) { try { f(E); } catch (e) {} }); }

  var audio = new Audio();
  audio.crossOrigin = 'anonymous';   // lets the analyser read CORS-enabled URLs
  audio.preload = 'metadata';

  var actx, analyser, srcNode, freqData, connected = false;
  function ensureCtx() {
    if (actx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    actx = new AC();
  }
  function connectGraph() {
    if (connected) return;
    ensureCtx();
    srcNode = actx.createMediaElementSource(audio);
    analyser = actx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.78;
    freqData = new Uint8Array(analyser.frequencyBinCount);
    srcNode.connect(analyser); analyser.connect(actx.destination);
    connected = true;
  }

  var cur = null, mode = 'synth', ytPlayer = null, ytReady = false, ytId = null;

  function ytIdFrom(url) {
    var m = String(url).match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/);
    return m ? m[1] : (/^[\w-]{11}$/.test(url) ? url : null);
  }
  function kindOf(src) {
    if (!src) return 'synth';
    if (ytIdFrom(src)) return 'yt';
    return 'audio';
  }

  // ── YouTube ──
  var ytApiLoading = false;
  function loadYTApi(cb) {
    if (window.YT && window.YT.Player) return cb();
    if (!ytApiLoading) {
      ytApiLoading = true;
      var s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
    }
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () { if (prev) prev(); cb(); };
    var iv = setInterval(function () { if (window.YT && window.YT.Player) { clearInterval(iv); cb(); } }, 120);
    setTimeout(function () { clearInterval(iv); }, 8000);
  }
  function ensureYT(cb) {
    loadYTApi(function () {
      if (ytPlayer) return cb();
      var host = document.getElementById('yt-host');
      if (!host) { host = document.createElement('div'); host.id = 'yt-host';
        host.style.cssText = 'position:fixed;width:1px;height:1px;left:-9999px;top:0;opacity:0;pointer-events:none;'; document.body.appendChild(host); }
      ytPlayer = new window.YT.Player('yt-host', {
        height: '1', width: '1', playerVars: { autoplay: 0, controls: 0, disablekb: 1, playsinline: 1 },
        events: {
          onReady: function () { ytReady = true; cb(); },
          onStateChange: function (e) {
            var YTS = window.YT.PlayerState;
            if (e.data === YTS.PLAYING) { state.playing = true; tick(); }
            else if (e.data === YTS.PAUSED || e.data === YTS.ENDED) { state.playing = false; emit('state'); }
          }
        }
      });
    });
  }

  var state = { playing: false, duration: 0, currentTime: 0, progress: 0, title: '', artist: '', mode: 'synth', loading: false };

  function setMeta(t) { state.title = t ? (t.title || '') : ''; state.artist = t ? (t.artist || '') : ''; state.mode = mode; }

  function load(track, autoplay) {
    cur = track; mode = kindOf(track && track.url);
    state.mode = mode; setMeta(track); state.currentTime = 0; state.progress = 0; state.duration = 0;
    // stop everything first
    try { audio.pause(); } catch (e) {}
    if (ytPlayer && ytReady) { try { ytPlayer.stopVideo(); } catch (e) {} }
    if (window.songBeat) window.songBeat.pause();

    if (mode === 'audio') {
      audio.src = track.url;
      audio.load();
      if (autoplay) play();
    } else if (mode === 'yt') {
      ytId = ytIdFrom(track.url);
      state.loading = true; emit('state');
      ensureYT(function () { state.loading = false; ytPlayer.cueVideoById(ytId); if (autoplay) play(); else emit('state'); });
    }
    emit('state');
  }

  function play() {
    if (!cur) return;
    if (mode === 'audio') {
      ensureCtx(); if (actx.state === 'suspended') actx.resume();
      connectGraph();
      audio.play().then(function () { state.playing = true; startBeat(); emit('state'); tick(); })
                  .catch(function (err) { console.warn('[audioEngine] play blocked/failed:', err && err.message); });
    } else if (mode === 'yt') {
      if (ytReady) { ytPlayer.playVideo(); state.playing = true; startBeat(); tick(); }
    } else {
      if (window.songBeat) window.songBeat.play(cur.bpm);
      state.playing = true; startBeat(); tick();
    }
    emit('state');
  }
  function pause() {
    state.playing = false;
    if (mode === 'audio') audio.pause();
    else if (mode === 'yt' && ytReady) ytPlayer.pauseVideo();
    if (window.songBeat) window.songBeat.pause();
    if (window.maiBeat) window.maiBeat.stop();
    emit('state');
  }
  function toggle() { state.playing ? pause() : play(); }
  function seek(frac) {
    var d = state.duration || (mode === 'yt' && ytReady ? ytPlayer.getDuration() : audio.duration) || 0;
    var t = Math.max(0, Math.min(1, frac)) * d;
    if (mode === 'audio') audio.currentTime = t;
    else if (mode === 'yt' && ytReady) ytPlayer.seekTo(t, true);
    state.currentTime = t; state.progress = d ? t / d : 0; emit('tick');
  }

  // ── beat lock: align maiBeat's clock to true playback position ──
  function startBeat() { if (window.maiBeat && cur && cur.bpm) window.maiBeat.start(cur.bpm); }
  function lockBeat() {
    if (!window.maiBeat || !cur || !cur.bpm) return;
    var st = window.maiBeat.state; if (!st) return;
    // t0 so the beat grid sits on the real audio time (offset = first-beat phase, default 0)
    st.t0 = performance.now() - (state.currentTime - (cur.beatOffset || 0)) * 1000;
    st.bpm = cur.bpm; st.active = true;
  }

  var rafing = false, lastTs = 0;
  function tick() {
    if (rafing) return; rafing = true; lastTs = performance.now();
    var iv = setInterval(function () {
      if (!state.playing) { clearInterval(iv); rafing = false; return; }
      var now = performance.now(), dt = (now - lastTs) / 1000; lastTs = now;
      if (mode === 'audio') {
        state.currentTime = audio.currentTime || 0; state.duration = audio.duration || 0;
      } else if (mode === 'yt' && ytReady) {
        try { state.currentTime = ytPlayer.getCurrentTime() || 0; state.duration = ytPlayer.getDuration() || 0; } catch (e) {}
      } else { // synth: advance a virtual clock by real elapsed time
        state.currentTime += dt; state.duration = cur && cur.len ? cur.len : 0;
        if (state.duration && state.currentTime >= state.duration) state.currentTime = 0;
      }
      state.progress = state.duration ? Math.min(1, state.currentTime / state.duration) : 0;
      lockBeat();
      emit('tick');
    }, 120);
  }
  audio.addEventListener('ended', function () { state.playing = false; if (window.maiBeat) window.maiBeat.stop(); emit('state'); E.emitEnded(); });
  audio.addEventListener('loadedmetadata', function () { state.duration = audio.duration || 0; emit('tick'); });

  // ── real / synthetic spectrum ──
  function spectrum(bars, out) {
    bars = bars || 48; out = out || new Float32Array(bars);
    if (mode === 'audio' && analyser) {
      analyser.getByteFrequencyData(freqData);
      var n = freqData.length, useful = Math.floor(n * 0.7); // skip the empty top end
      for (var i = 0; i < bars; i++) {
        var idx = Math.floor(Math.pow(i / bars, 1.35) * useful);
        out[i] = freqData[idx] / 255;
      }
    } else {
      // synthetic: pulse the bars on the beat for yt/synth modes
      var phase = 0, p = window.maiBeat && window.maiBeat.state;
      if (p && p.active) { var per = 60000 / p.bpm; phase = (((performance.now() - p.t0) % per) + per) % per / per; }
      var env = state.playing ? (0.55 + 0.45 * Math.pow(1 - phase, 2.2)) : 0.06;
      for (var j = 0; j < bars; j++) {
        var shape = Math.sin((j / bars) * Math.PI);
        out[j] = state.playing ? Math.max(0.04, env * shape * (0.7 + 0.3 * Math.sin(j * 1.7 + performance.now() / 140))) : 0.04 * shape;
      }
    }
    return out;
  }
  function level() {
    if (mode === 'audio' && analyser) {
      analyser.getByteFrequencyData(freqData);
      var s = 0, lim = Math.floor(freqData.length * 0.5);
      for (var i = 0; i < lim; i++) s += freqData[i];
      return Math.min(1, (s / lim) / 180);
    }
    var p = window.maiBeat && window.maiBeat.state;
    if (p && p.active && state.playing) { var per = 60000 / p.bpm, ph = (((performance.now() - p.t0) % per) + per) % per / per; return 0.3 + 0.7 * Math.pow(1 - ph, 2.5); }
    return 0.1;
  }

  var endedCbs = [];
  var E = {
    load: load, play: play, pause: pause, toggle: toggle, seek: seek,
    spectrum: spectrum, level: level,
    on: function (ev, cb) { (subs[ev] || (subs[ev] = [])).push(cb); return function () { subs[ev] = subs[ev].filter(function (f) { return f !== cb; }); }; },
    onEnded: function (cb) { endedCbs.push(cb); },
    emitEnded: function () { endedCbs.forEach(function (f) { try { f(); } catch (e) {} }); },
    get state() { return state; },
    get playing() { return state.playing; },
    fmt: function (s) { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); },
    kindOf: kindOf,
  };
  window.audioEngine = E;
})();
