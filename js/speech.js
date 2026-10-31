/* Speech helpers: Russian text-to-speech (speechSynthesis) and forgiving speech check (SpeechRecognition). */
var Speech = (function () {
  "use strict";

  const synth = window.speechSynthesis || null;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  let ruVoices = [];
  let voicesLoaded = false;
  let pendingFinish = null; // resolves the promise of the utterance currently playing
  const keep = []; // keeps utterances referenced (Chrome may drop onend otherwise)
  let rec = null;

  function loadVoices() {
    if (!synth) return;
    const all = synth.getVoices() || [];
    if (all.length) voicesLoaded = true;
    const score = v =>
      (/google|online|natural|neural/i.test(v.name) ? 2 : 0) +
      (v.lang.replace("_", "-").toLowerCase() === "ru-ru" ? 1 : 0);
    ruVoices = all.filter(v => /^ru([-_]|$)/i.test(v.lang)).sort((a, b) => score(b) - score(a));
  }
  if (synth) {
    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }

  /* Speak Russian text. opts: { slow: bool, role: "a" | "b" }. Returns a Promise that resolves when done. */
  function speak(text, opts) {
    opts = opts || {};
    return new Promise(resolve => {
      if (!synth || !text) return resolve();
      stopListening();
      if (pendingFinish) pendingFinish();
      synth.cancel();
      if (!ruVoices.length) loadVoices();

      const clean = String(text).replace(/\.\.\.|…/g, " ").replace(/\s+/g, " ").trim();
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = "ru-RU";
      const second = opts.role === "b" && ruVoices.length > 1;
      const v = second ? ruVoices[1] : ruVoices[0];
      if (v) u.voice = v;
      u.rate = opts.slow ? 0.55 : 0.9;
      u.pitch = opts.role === "b" && !second ? 0.8 : 1;

      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        if (pendingFinish === finish) pendingFinish = null;
        resolve();
      };
      const timer = setTimeout(finish, 2500 + clean.length * (opts.slow ? 260 : 150));
      u.onend = finish;
      u.onerror = finish;
      pendingFinish = finish;
      keep.push(u);
      if (keep.length > 20) keep.shift();
      setTimeout(() => {
        if (done) return;
        try { synth.resume(); } catch (e) { /* ignore */ }
        synth.speak(u);
      }, 60);
    });
  }

  function stopSpeaking() {
    if (pendingFinish) pendingFinish();
    if (synth) synth.cancel();
  }

  function canListen() { return !!SR; }

  /* Listen once in Russian. Resolves { alts: [strings], error: string|null }. */
  function listen() {
    return new Promise(resolve => {
      if (!SR) return resolve({ alts: [], error: "unsupported" });
      stopSpeaking();
      stopListening();
      const r = new SR();
      r.lang = "ru-RU";
      r.interimResults = false;
      r.continuous = false;
      r.maxAlternatives = 5;
      const alts = [];
      let err = null;
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        if (rec === r) rec = null;
        resolve({ alts, error: alts.length ? null : err || "no-speech" });
      };
      r.onresult = e => {
        for (let i = 0; i < e.results.length; i++) {
          for (let j = 0; j < e.results[i].length; j++) alts.push(e.results[i][j].transcript);
        }
      };
      r.onerror = e => { err = e.error; };
      r.onend = finish;
      const timer = setTimeout(() => { try { r.stop(); } catch (e) { finish(); } }, 9000);
      rec = r;
      try { r.start(); } catch (e) { err = "start"; finish(); }
    });
  }

  function stopListening() {
    if (rec) { try { rec.abort(); } catch (e) { /* ignore */ } rec = null; }
  }

  function stopAll() { stopSpeaking(); stopListening(); }

  /* ---------- Loose comparison ---------- */
  const UNITS = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять",
    "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать",
    "восемнадцать", "девятнадцать"];
  const TENS = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
  const HUNDREDS = ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

  function under1000(n, fem) {
    const out = [];
    const unit = u => (fem && u === 1 ? "одна" : fem && u === 2 ? "две" : UNITS[u]);
    if (Math.floor(n / 100)) out.push(HUNDREDS[Math.floor(n / 100)]);
    const r = n % 100;
    if (r >= 20) {
      out.push(TENS[Math.floor(r / 10)]);
      if (r % 10) out.push(unit(r % 10));
    } else if (r > 0) out.push(unit(r));
    return out.join(" ");
  }

  /* Recognizers often return digits ("5 минут"); turn them into words so they match the phrase. */
  function numToRu(n) {
    if (n === 0) return "ноль";
    if (n >= 1000000) return String(n);
    const th = Math.floor(n / 1000);
    const rest = n % 1000;
    const out = [];
    if (th) {
      const last2 = th % 100, last = th % 10;
      const word = last2 >= 11 && last2 <= 14 ? "тысяч" : last === 1 ? "тысяча" : last >= 2 && last <= 4 ? "тысячи" : "тысяч";
      out.push(th === 1 ? "тысяча" : under1000(th, true) + " " + word);
    }
    if (rest) out.push(under1000(rest, false));
    return out.join(" ");
  }

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/\d+/g, d => " " + numToRu(parseInt(d, 10)) + " ")
      .replace(/[^a-zа-я0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  function similarity(expected, heard) {
    const a = norm(expected), b = norm(heard);
    if (!a || !b) return 0;
    if (a === b) return 1;
    let s = 1 - lev(a, b) / Math.max(a.length, b.length);
    const a2 = a.replace(/ /g, ""), b2 = b.replace(/ /g, "");
    s = Math.max(s, 1 - lev(a2, b2) / Math.max(a2.length, b2.length));
    // Every expected word heard (extra words are fine): treat as very good.
    const aw = a.split(" "), bw = b.split(" ");
    const hits = aw.filter(w => bw.some(x => x === w || (w.length > 3 && lev(w, x) <= 1))).length;
    s = Math.max(s, (hits / aw.length) * 0.95);
    return s;
  }

  /* Best match among recognizer alternatives: { sim: 0..1, heard: string }. */
  function score(expected, alts) {
    let best = { sim: 0, heard: alts[0] || "" };
    alts.forEach(t => {
      const sim = similarity(expected, t);
      if (sim > best.sim) best = { sim, heard: t };
    });
    return best;
  }

  function status() {
    if (synth && !ruVoices.length) loadVoices();
    return { tts: !!synth, loaded: voicesLoaded, ru: ruVoices.length > 0, listen: !!SR };
  }

  return { speak, stopAll, canListen, listen, score, norm, status };
})();
