/* Rusbek — app logic. Plain JavaScript, no build step. */
(function () {
  "use strict";

  /* =====================================================================
     Content registry. Each file in data/ calls Ruscha.addTopic, addWords, addListening or addTest.
     Everything a file adds belongs to the level that file is listed under in data/levels.js
     (Kasblar files belong to no level and are shown at every level).
     The app loads the files through bundles made by tools/build-data.js (see "Loading" below).
     ===================================================================== */
  const R = (window.Ruscha = {
    levels: window.RUSCHA_LEVELS || [], levelById: {},
    topics: [], topicById: {}, lists: [], listById: {}, listening: [], listeningById: {}, tests: {},
    speaking: [], speakingById: {},
    items: {}, lines: {}, loadErrors: []
  });
  R.levels.forEach(l => { R.levelById[l.id] = l; });
  let loadingLevel = ""; // level of the bundle being run right now
  let loadingRank = 0;   // its place in data/levels.js (Kasblar = 0, A1 = 1, …): keeps lists in that order
  let ord = 0;
  /* Order key: bundles can arrive in any order, but lists and search stay in data/levels.js order. */
  function nextOrd() { return loadingRank * 1e7 + (++ord); }

  /* Normalize text for search and comparison (Russian + Uzbek Latin, apostrophes ignored). */
  function sn(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[‘’'`ʻʼ]/g, "")
      .replace(/[^a-zа-я0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* The same Russian text twice: the first place in data/levels.js order wins, even if its level arrived later. */
  function addItem(kind, ru, pr, uz, sit, src) {
    const id = kind + ":" + sn(ru);
    const old = R.items[id];
    if (old && old._r <= loadingRank) return old;
    const it = old || {};
    delete it.theme;
    Object.assign(it, { id, kind, ru, pr: pr || "", uz: uz || "", sit: sit || "", src, level: src.level, _r: loadingRank, _o: nextOrd() });
    it.search = sn(ru + " " + it.pr + " " + it.uz);
    R.items[id] = it;
    return it;
  }

  /* Lines of dialogues, listening texts, Jonli nutq and speaking tasks. They are not cards of a topic,
     but they can be saved to ⭐ Saqlanganlar (id "d:" + text; the first place a line appears is its source).
     The line object gets .sv = its saveable item. */
  function addLine(l, src, where) {
    const id = "d:" + sn(l.ru);
    const old = R.lines[id];
    if (!old || old._r > loadingRank) {
      R.lines[id] = Object.assign(old || {}, { id, kind: "d", ru: l.ru, pr: l.pr || "", uz: l.uz || "", sit: "", src, level: src.level, where, who: l.who, _r: loadingRank, _o: nextOrd() });
    }
    l.sv = R.lines[id];
  }
  /* Any card or line by its id (undefined if that content was removed). */
  function itemOf(id) { return R.items[id] || R.lines[id]; }

  R.addTopic = function (t) {
    if (!t || !t.id || R.topicById[t.id]) return;
    t.kind = "t";
    t.level = t.section ? "" : loadingLevel;
    t.phrases = t.phrases || [];
    t.templates = t.templates || [];
    t.dialogues = (t.dialogues || []).map(d => ({
      title: d.title,
      a: d.a,
      b: d.b,
      lines: d.lines.map(l => (Array.isArray(l) ? { who: l[0], ru: l[1], pr: l[2], uz: l[3] } : l))
    }));
    t.items = t.phrases.map(p => addItem("p", p.ru, p.pr, p.uz, p.sit, t));
    t.dialogues.forEach((d, n) => d.lines.forEach(l => addLine(l, t, { dialog: n, title: d.title })));
    t.soon = t.items.length === 0;
    R.topics.push(t);
    R.topicById[t.id] = t;
  };

  /* =====================================================================
     Job packs (Kasblar). One file per job (data/kasblar/<job>.js):
       Ruscha.addJob({ id: "kasb-kuryer", title: "Kuryer", icon: "🛵" });
       Ruscha.addJobTab("kasb-kuryer", "boshlangich", { templates, phrases, dialogues });
       Ruscha.addJobTab("kasb-kuryer", "orta", { … });
     Each tab becomes its own topic. The "boshlangich" tab keeps the job's id (kasb-kuryer),
     the others get a suffix (kasb-kuryer-orta, kasb-kuryer-yuqori). A tab with no part is "Tez orada".
     "levels" = which app levels open this tab first (the last tab is used for any higher level).
     ===================================================================== */
  const JOB_TABS = [
    { key: "boshlangich", title: "Boshlang‘ich", sub: "A1–A2", color: "#15803d", suffix: "", levels: ["a1", "a2"] },
    { key: "orta", title: "O‘rta", sub: "B1", color: "#7c3aed", suffix: "-orta", levels: ["b1"] },
    { key: "yuqori", title: "Yuqori", sub: "B2+", color: "#c2410c", suffix: "-yuqori", levels: ["b2", "c1"] }
  ];
  R.jobs = [];
  R.jobById = {};
  R.addJob = function (j) {
    if (!j || !j.id || R.jobById[j.id]) return;
    j.tabs = {}; // tab key → topic
    R.jobs.push(j);
    R.jobById[j.id] = j;
  };
  R.addJobTab = function (jobId, key, part) {
    const j = R.jobById[jobId];
    const tab = JOB_TABS.find(x => x.key === key);
    if (!j || !tab || j.tabs[key]) return;
    const t = Object.assign({}, part, { id: jobId + tab.suffix, section: "kasblar", title: j.title, icon: j.icon, job: j, tab });
    R.addTopic(t);
    j.tabs[key] = t;
  };
  /* After loading: every job gets all tabs (an empty one is shown as "Tez orada"). */
  function finishJobs() {
    R.jobs.forEach(j => JOB_TABS.forEach(tab => { if (!j.tabs[tab.key]) R.addJobTab(j.id, tab.key, {}); }));
  }

  R.addWords = function (l) {
    if (!l || !l.id || R.listById[l.id]) return;
    l.kind = "w";
    l.level = loadingLevel;
    l.items = [];
    l.groups = (l.groups || []).map(g => {
      const items = g.words.map(w => addItem("w", w[0], w[1], w[2], "", l));
      items.forEach(it => { if (!it.theme) it.theme = g.theme; });
      l.items.push(...items);
      return { theme: g.theme, icon: g.icon || "", items };
    });
    R.lists.push(l);
    R.listById[l.id] = l;
  };

  /* Listening text: lines [[ru, pr, uz]], questions [{ q, options, answer, line }]. */
  R.addListening = function (x) {
    if (!x || !x.id || R.listeningById[x.id]) return;
    x.level = loadingLevel;
    x.lines = (x.lines || []).map(l => ({ ru: l[0], pr: l[1], uz: l[2] }));
    x.lines.forEach(l => addLine(l, x, { listen: true }));
    x.questions = x.questions || [];
    R.listening.push(x);
    R.listeningById[x.id] = x;
  };

  /* 🎧 Jonli nutq — listening at natural speed: { id, title, icon, kind, about, a, b,
     lines: [["a" | "b", ru, pr, uz]], questions }. "a" / "b" are the two speakers (names in a, b). */
  R.live = [];
  R.addLive = function (x) {
    if (!x || !x.id || R.listeningById[x.id]) return;
    x.level = loadingLevel;
    x.live = true;
    x.lines = (x.lines || []).map(l => (l.length > 3 ? { who: l[0], ru: l[1], pr: l[2], uz: l[3] } : { who: "a", ru: l[0], pr: l[1], uz: l[2] }));
    x.lines.forEach(l => addLine(l, x, { listen: true }));
    x.questions = x.questions || [];
    R.live.push(x);
    R.listeningById[x.id] = x;
  };

  /* 🗯 Qisqartmalar — spoken shortcuts: { id, title, icon, items: [{ full, say, pr, uz, ex: [ru, pr, uz], warn? }] }.
     "full" = how it is written, "say" = how Russians really say it (this is the card's Russian side),
     "warn" = Uzbek note when it is too informal for official situations. */
  R.shortcuts = [];
  R.shortcutById = {};
  R.addShortcuts = function (s) {
    if (!s || !s.id || R.shortcutById[s.id]) return;
    s.kind = "q";
    s.level = loadingLevel;
    s.items = (s.items || []).map(x => {
      const it = addItem("s", x.say, x.pr, x.uz, "", s);
      it.full = x.full;
      it.warn = x.warn || "";
      it.ex = x.ex ? { ru: x.ex[0], pr: x.ex[1], uz: x.ex[2] } : null;
      it.search = sn(x.say + " " + x.full + " " + it.pr + " " + it.uz);
      return it;
    });
    R.shortcuts.push(s);
    R.shortcutById[s.id] = s;
  };

  /* 🗣 Speaking tasks (one task or a list): { id, title, icon, q: [ru, pr, uz], phrases: [[ru, pr, uz]], sample: [[ru, pr, uz]] }. */
  R.addSpeaking = function (list) {
    [].concat(list || []).forEach(x => {
      if (!x || !x.id || !x.q || R.speakingById[x.id]) return;
      const row = l => ({ ru: l[0], pr: l[1], uz: l[2] });
      x.level = loadingLevel;
      x.q = row(x.q);
      x.phrases = (x.phrases || []).map(row);
      x.phrases.forEach(l => addLine(l, x, { speak: true }));
      x.sample = (x.sample || []).map(row);
      R.speaking.push(x);
      R.speakingById[x.id] = x;
    });
  };

  /* Level test: questions [{ q, audio?, text?, options, answer, full?, pr, uz }]. */
  R.addTest = function (x) {
    if (!x || !loadingLevel) return;
    x.level = loadingLevel;
    /* A test may be split into parts: parts [{ id, title, icon, desc, questions, comments? }]. */
    x.questions = x.questions || [];
    x.parts = (x.parts || []).filter(pt => pt && pt.id && pt.questions && pt.questions.length);
    R.tests[loadingLevel] = x;
  };

  /* =====================================================================
     Loading. tools/build-data.js puts all files of a level into one bundle (data/build/a1.js, a2.js, …,
     and data/build/shared.js for Kasblar), listed in RUSCHA_BUNDLES (data/build/levels.js).
     A bundle calls Ruscha.bundle(id, [[file, function], …]). Everything inside gets the level of that
     bundle, so bundles can be downloaded in parallel and arrive in any order.
     Start: Kasblar + the chosen level → the app opens; the other levels follow in the background.
     ===================================================================== */
  const BUNDLES = (window.RUSCHA_BUNDLES || []).map((b, rank) => Object.assign({}, b, { rank, state: "idle", got: 0 }));
  const bundleById = {};
  BUNDLES.forEach(b => { bundleById[b.id] = b; });
  const STALL_MS = 25000; // no new data for this long → show the error with «Qayta urinish»
  const progressFns = new Set();
  function progressChanged() { progressFns.forEach(fn => fn()); }
  function allLoaded() { return BUNDLES.every(b => b.state === "done"); }
  /* Is this level's content here yet? (A level without files has no bundle.) */
  function loaded(L) { const b = L && bundleById[L.id]; return !b || b.state === "done"; }

  R.bundle = function (id, parts) {
    const b = bundleById[id];
    if (!b || b.state === "done") return;
    loadingLevel = b.level;
    loadingRank = b.rank;
    (parts || []).forEach(p => {
      try { p[1](); } catch (e) { R.loadErrors.push(p[0]); }
    });
    if (!b.level) finishJobs(); // the shared bundle holds every job
    loadingLevel = "";
    // New entries go to their place in data/levels.js order.
    [R.topics, R.lists, R.listening, R.live, R.shortcuts, R.speaking, R.jobs].forEach(list => {
      list.forEach(x => { if (x._o == null) x._o = nextOrd(); });
      list.sort((x, y) => x._o - y._o);
    });
    const byOrd = (x, y) => x[1]._o - y[1]._o;
    R.items = Object.fromEntries(Object.entries(R.items).sort(byOrd));
    R.lines = Object.fromEntries(Object.entries(R.lines).sort(byOrd));
    b.state = "done";
    b.got = b.bytes;
    progressChanged();
    if (ready) whenAllLoaded();
  };

  /* Run a downloaded bundle (as a script, so errors point to the right file in the browser console). */
  function runBundle(text, url) {
    const s = document.createElement("script");
    s.textContent = text + "\n//# sourceURL=" + url;
    document.head.appendChild(s);
    s.remove();
  }
  /* Over http(s): fetch, so the progress bar can count the bytes as they arrive. */
  function viaFetch(b, url) {
    const ctl = window.AbortController ? new AbortController() : null;
    let timer = 0;
    const alive = () => { clearTimeout(timer); timer = setTimeout(() => { if (ctl) ctl.abort(); }, STALL_MS); };
    alive();
    return fetch(url, ctl ? { signal: ctl.signal } : undefined)
      .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        if (!res.body || !res.body.getReader || !window.TextDecoder) return res.text();
        const reader = res.body.getReader();
        const dec = new TextDecoder();
        let text = "";
        const pump = () => reader.read().then(r => {
          if (r.done) return text + dec.decode();
          alive();
          b.got += r.value.length;
          progressChanged();
          text += dec.decode(r.value, { stream: true });
          return pump();
        });
        return pump();
      })
      .then(text => { clearTimeout(timer); runBundle(text, url); }, e => { clearTimeout(timer); throw e; });
  }
  /* From a file on disk (file://) fetch is not allowed, so use a <script> tag. */
  function viaScript(b, url) {
    return new Promise((ok, fail) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = ok;
      s.onerror = () => { s.remove(); fail(new Error("not found: " + url)); };
      document.head.appendChild(s);
    });
  }
  /* Download a bundle once (a failed one is tried again on the next call). */
  function loadBundle(b) {
    if (b.state === "done") return Promise.resolve();
    if (b.promise) return b.promise;
    b.state = "loading";
    b.got = 0;
    const local = location.protocol === "file:" || !window.fetch;
    const url = local ? b.file : b.file + "?v=" + b.v; // a new version gets a new address, so no old copy is used
    b.promise = (local ? viaScript(b, url) : viaFetch(b, url))
      .then(() => { if (b.state !== "done") throw new Error("bundle did not run: " + url); })
      .catch(e => {
        if (b.state !== "done") { b.state = "error"; b.got = 0; }
        b.promise = null;
        progressChanged();
        throw e;
      });
    return b.promise;
  }
  /* The other levels, in the background (after the first screen is shown). */
  function loadRest() {
    Promise.all(BUNDLES.map(b => loadBundle(b).catch(() => {}))).then(whenAllLoaded);
  }
  window.addEventListener("online", () => { if (ready && !allLoaded()) loadRest(); });

  /* Everything is here: update the numbers that count all levels, and let js/pwa.js start the offline copy. */
  let allAnnounced = false;
  function whenAllLoaded() {
    if (allAnnounced || !allLoaded()) return;
    allAnnounced = true;
    refreshScreenAfterLoad();
    window.RusbekLoaded = true;
    window.dispatchEvent(new Event("rusbek:loaded"));
  }

  /* "⏳ Yuklanmoqda…" with a progress bar until the bundles are here, then done().
     If a download fails: an Uzbek message and «Qayta urinish». Leaving the screen cancels done(). */
  function loadingView(list, done) {
    const tok = viewTok;
    const size = b => b.bytes || 1;
    const total = list.reduce((n, b) => n + size(b), 0);
    const fill = h("span", { class: "load-fill" });
    const pct = h("span", { class: "load-pct" }, "0%");
    const bar = h("div", { class: "load-bar", role: "progressbar", "aria-label": "Yuklanmoqda", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": "0" }, fill);
    const update = () => {
      const got = list.reduce((n, b) => n + Math.min(b.state === "done" ? size(b) : b.got, size(b)), 0);
      const p = Math.min(100, Math.round((got / total) * 100));
      fill.style.width = p + "%";
      pct.textContent = p + "%";
      bar.setAttribute("aria-valuenow", String(p));
    };
    show(h("div", { class: "load-box" }, h("p", { class: "load-title" }, "⏳ Yuklanmoqda…"), bar, pct));
    progressFns.add(update);
    update();
    Promise.all(list.map(loadBundle)).then(() => {
      progressFns.delete(update);
      if (tok === viewTok) done();
    }, () => {
      progressFns.delete(update);
      if (tok !== viewTok) return;
      show(h("div", { class: "load-box load-error", role: "alert" },
        h("div", { class: "big-ic", "aria-hidden": "true" }, "📡"),
        h("h2", null, "Yuklab bo‘lmadi"),
        h("p", null, "Darslar yuklanmadi. Internet aloqasini tekshiring va qayta urinib ko‘ring."),
        h("button", { type: "button", class: "btn primary big", onclick: () => { if (tok === viewTok) loadingView(list, done); } },
          h("span", { "aria-hidden": "true" }, "🔄"), " Qayta urinish")));
    });
  }

  /* =====================================================================
     Progress (localStorage) and spaced repetition (SM-2 style)
     ===================================================================== */
  const KEY = "ruscha_progress_v1";
  /* saved: ⭐ Saqlanganlar { itemId: time saved (ms) }; autoSave: Yordam → «Qiyin so‘zlarni avtomatik saqlash». */
  function blank() { return { cards: {}, streak: 0, lastDay: -1, lessonDay: -1, saved: {}, autoSave: false }; }
  function loadState() {
    try {
      const j = JSON.parse(localStorage.getItem(KEY));
      if (j && j.cards) return Object.assign(blank(), j);
    } catch (e) { /* storage blocked or broken */ }
    return blank();
  }
  let S = loadState();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

  /* Local day number (changes at local midnight). */
  function today() {
    const d = new Date();
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }

  function markActive() {
    const t = today();
    if (S.lastDay === t) return;
    S.streak = S.lastDay === t - 1 ? S.streak + 1 : 1;
    S.lastDay = t;
    save();
  }
  function streakNow() {
    const t = today();
    return S.lastDay === t || S.lastDay === t - 1 ? S.streak : 0;
  }

  function introduce(it) {
    if (!S.cards[it.id]) S.cards[it.id] = { e: 2.5, i: 0, r: 0, d: today() };
    markActive();
    save();
  }

  /* q: 5 = Bilaman, 3 = Qiyin, 1 = Bilmayman */
  function grade(it, q) {
    const t = today();
    const c = S.cards[it.id] || { e: 2.5, i: 0, r: 0, d: t };
    if (q < 3) {
      c.r = 0;
      c.i = 1;
    } else {
      c.r += 1;
      if (c.r === 1) c.i = 1;
      else if (c.r === 2) c.i = q === 3 ? 3 : 6;
      else c.i = q === 3 ? Math.max(c.i + 1, Math.round(c.i * 1.2)) : Math.round(c.i * c.e);
    }
    c.e = Math.max(1.3, c.e + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    c.d = t + c.i;
    S.cards[it.id] = c;
    markActive();
    save();
  }

  function dueItems() {
    const t = today();
    return Object.keys(S.cards)
      .filter(id => itemOf(id) && S.cards[id].d <= t)
      .sort((a, b) => S.cards[a].d - S.cards[b].d)
      .map(id => itemOf(id));
  }
  function learnedCount() { return Object.keys(S.cards).filter(id => itemOf(id)).length; }

  /* ⭐ Saqlanganlar. An id whose content was removed later is skipped quietly. */
  function isSaved(it) { return !!(it && it.id && S.saved && S.saved[it.id]); }
  function savedList() {
    const m = S.saved || {};
    return Object.keys(m).filter(id => itemOf(id)).sort((a, b) => m[b] - m[a]).map(itemOf);
  }
  function setSaved(it, on, at) {
    if (!S.saved || typeof S.saved !== "object") S.saved = {};
    // Each save gets a later time than every other, so "newest first" stays exact even for two quick taps.
    if (on) S.saved[it.id] = at || Math.max(Date.now(), ...Object.values(S.saved).map(Number).filter(x => x > 0).map(x => x + 1), 0);
    else delete S.saved[it.id];
    save();
    refreshSavedCount();
  }
  /* Auto-save (if turned on in Yordam) for «Bilmayman» in flashcards and wrong quiz answers. */
  function autoSave(it) {
    if (!S.autoSave || !it || !it.id || !itemOf(it.id) || isSaved(it)) return;
    setSaved(it, true);
    toast("⭐ Saqlanganlarga qo‘shildi");
  }
  function seenIn(items) { return items.filter(i => S.cards[i.id]).length; }

  /* =====================================================================
     Small helpers
     ===================================================================== */
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const wait = ms => new Promise(r => setTimeout(r, ms));

  function h(tag, props) {
    const e = document.createElement(tag);
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") e.className = v;
        else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), v);
        else e.setAttribute(k, v === true ? "" : v);
      }
    }
    for (let i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) c.forEach(x => add(e, x));
    else e.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
  }

  const app = document.getElementById("app");
  let viewTok = 0;
  /* Call at the start of every new screen: stops sound and invalidates old timers. */
  const leaveFns = [];
  /* fn runs once when the user leaves the current screen (stops recordings, timers…). */
  function onLeave(fn) { leaveFns.push(fn); }
  function newView() {
    viewTok++;
    Speech.stopAll();
    leaveFns.splice(0).forEach(fn => { try { fn(); } catch (e) { /* ignore */ } });
  }
  let quietShow = false; // true: redraw the same screen without the entrance animation
  function show() {
    app.textContent = "";
    add(app, Array.from(arguments));
    if (quietShow) return;
    // Entrance animation: the screen fades up, cards follow one after another (off for "reduce motion", see CSS).
    app.classList.remove("enter");
    void app.offsetWidth;
    app.classList.add("enter");
    app.querySelectorAll(".tile, .nav-btn, .item-row, .opt, .continue-btn, .stat")
      .forEach((el, i) => el.style.setProperty("--i", Math.min(i, 10)));
  }
  function later(fn, ms) {
    const v = viewTok;
    setTimeout(() => { if (v === viewTok) fn(); }, ms);
  }
  /* =====================================================================
     Navigation. Every screen is a history entry (state.d = steps from the first screen),
     so "⬅ Orqaga" and the phone's back button both go back exactly one step.
     ===================================================================== */
  function depth() { return (history.state && history.state.d) || 0; }
  function go(hash) {
    if (location.hash === hash) return route();
    history.pushState({ d: depth() + 1 }, "", hash);
    route();
  }
  /* Open a screen in place of the current one (used when a link is broken). */
  function redirect(hash) {
    history.replaceState({ d: depth() }, "", hash);
    route();
  }
  /* One step back; if this screen was opened directly (no step to go back to), open its parent. */
  function goBack(fallback) {
    if (depth() > 0) history.back();
    else redirect(fallback || "#/");
  }

  /* A "guard" entry under the first screen: when the back button reaches it, the app shows the home
     screen instead of closing. Browsers skip entries added without a tap, so it is set up on a tap. */
  let armed = false;
  function arm() {
    if (armed) return;
    armed = true;
    if (history.state && history.state.d != null) return; // guard already below (e.g. after a reload)
    const here = location.hash || "#/";
    history.replaceState({ g: 1 }, "", "#/");
    history.pushState({ d: 0 }, "", here);
  }
  window.addEventListener("click", arm, true);
  window.addEventListener("keydown", arm, true);
  window.addEventListener("popstate", e => {
    if (e.state && e.state.g) {
      armed = false; // set up again on the next tap
      route();
      toast("🏠 Siz bosh sahifadasiz");
      return;
    }
    route();
  });

  /* Short message above the bottom bar. action = { label, fn }: a button (e.g. «Bekor qilish»), shown for 5 seconds. */
  function toast(text, action) {
    const old = document.querySelector(".toast");
    if (old) old.remove();
    const t = h("div", { class: "toast" + (action ? " has-action" : ""), role: "status" },
      h("span", null, text),
      action ? h("button", { type: "button", class: "toast-btn", onclick: () => { t.remove(); action.fn(); } }, action.label) : null);
    document.body.appendChild(t);
    setTimeout(() => t.remove(), action ? 5000 : 2500);
  }

  /* Screen title with its path above it, e.g. "Mavzular › Xarid va ovqat ›" / "Bozor". */
  function header(title, back, crumbs) {
    return h("header", { class: "top" },
      back ? h("button", { type: "button", class: "back", onclick: () => goBack(back) }, "⬅ Orqaga") : null,
      h("div", { class: "titles" },
        crumbs && crumbs.length ? h("p", { class: "crumbs" }, crumbs.join(" › ") + " ›") : null,
        h("h1", null, title)));
  }
  function btn(icon, label, onclick, cls) {
    return h("button", { type: "button", class: "btn " + (cls || ""), onclick },
      icon ? h("span", { class: "ic", "aria-hidden": "true" }, icon) : null,
      h("span", null, label));
  }
  function progressBar(pct) {
    return h("div", { class: "progress", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(pct) },
      h("div", { class: "bar", style: "width:" + pct + "%" }));
  }
  function soundRow(ru, role) {
    return h("div", { class: "row" },
      btn("🔊", "Tinglash", () => Speech.speak(ru, { role })),
      btn("🐢", "Sekin", () => Speech.speak(ru, { slow: true, role })));
  }
  /* Test audio at real-life speed (q.natural). With q.slowOnce the 🐢 button works only once per question. */
  function naturalSoundRow(q) {
    let used = false;
    const slow = btn("🐢", q.slowOnce ? "Sekin (1 marta)" : "Sekin", () => {
      if (used) return;
      if (q.slowOnce) {
        used = true;
        slow.disabled = true;
        slow.lastChild.textContent = "Sekin tinglandi";
      }
      Speech.speak(q.audio, { slow: true, role: q.role });
    });
    return h("div", { class: "row" },
      btn("🔊", "Yana tinglash", () => Speech.speak(q.audio, { natural: true, role: q.role })), slow);
  }
  function phraseBox(it, big) {
    return h("div", { class: "phrase" + (big ? " big" : "") },
      h("div", { class: "ru", lang: "ru" }, it.ru),
      it.pr ? h("div", { class: "pr" }, h("span", { class: "lbl" }, "Aytilishi: "), it.pr) : null,
      it.uz ? h("div", { class: "uz" }, h("span", { class: "lbl" }, "Ma’nosi: "), it.uz) : null,
      it.full ? h("div", { class: "full" }, h("span", { class: "lbl" }, "✍️ Yozilishi: "), h("span", { lang: "ru" }, it.full)) : null,
      it.warn ? h("div", { class: "warn-note" }, "⚠ ", it.warn) : null,
      it.ex ? exampleRow(it.ex) : null);
  }
  /* Example sentence of a spoken shortcut: tap to hear it. */
  function exampleRow(ex) {
    return h("button", { type: "button", class: "example", onclick: e => { e.stopPropagation(); Speech.speak(ex.ru, { natural: true }); } },
      h("span", { class: "play", "aria-hidden": "true" }, "🔊"),
      h("span", { class: "item-text" },
        h("span", { class: "ru", lang: "ru" }, ex.ru),
        h("span", { class: "pr" }, ex.pr),
        h("span", { class: "uz" }, ex.uz)));
  }
  /* ☆ / ⭐ button: saves the item to Saqlanganlar or removes it. labelled = wide button with text (cards). */
  function starBtn(it, labelled) {
    if (!it || !it.id || !itemOf(it.id)) return null;
    const ic = h("span", { class: "star-ic", "aria-hidden": "true" });
    const lb = labelled ? h("span", null) : null;
    const b = h("button", { type: "button", class: labelled ? "btn star-btn" : "star" }, ic, lb);
    function paint() {
      const on = isSaved(it);
      ic.textContent = on ? "⭐" : "☆";
      if (lb) lb.textContent = on ? "Saqlangan" : "Saqlash";
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", String(on));
      b.setAttribute("aria-label", on ? "Saqlangan (olib tashlash uchun bosing)" : "Saqlash");
    }
    b.addEventListener("click", e => {
      e.stopPropagation();
      const on = !isSaved(it);
      setSaved(it, on);
      paint();
      toast(on ? "Saqlandi ⭐" : "Olib tashlandi");
    });
    b.addEventListener("keydown", e => e.stopPropagation()); // Enter/Space must not also play the line around it
    paint();
    return b;
  }

  function itemRow(it, note) {
    const star = starBtn(it);
    const row = itemRowBtn(it, note);
    return star ? h("div", { class: "item-wrap" }, row, star) : row;
  }
  function itemRowBtn(it, note) {
    return h("button", { type: "button", class: "item-row", onclick: () => Speech.speak(it.ru) },
      h("span", { class: "play", "aria-hidden": "true" }, "🔊"),
      h("span", { class: "item-text" },
        h("span", { class: "ru", lang: "ru" }, it.ru),
        it.pr ? h("span", { class: "pr" }, it.pr) : null,
        it.uz ? h("span", { class: "uz" }, it.uz) : null,
        note ? h("span", { class: "src" }, note) : null),
      it.id && S.cards[it.id] ? h("span", { class: "tick", title: "O‘rganilgan", "aria-label": "O‘rganilgan" }, "✓") : null);
  }
  function srcOf(kind, id) {
    if (kind === "l") {
      const L = R.levelById[id];
      return L && { kind: "l", id, level: id, title: L.name, items: levelItems(L), topics: levelTopics(L) };
    }
    if (kind === "f") return { kind: "f", id, title: "Saqlanganlar", items: savedFiltered(id) };
    return kind === "w" ? R.listById[id] : kind === "q" ? R.shortcutById[id] : R.topicById[id];
  }
  function backOf(s) {
    return s.kind === "f" ? "#/saved" : s.kind === "l" ? "#/test" : s.kind === "w" ? "#/words/" + s.id : s.kind === "q" ? "#/short/" + s.id : "#/topic/" + s.id;
  }
  function noun(s) { return s.kind === "w" ? "so‘z" : s.kind === "q" ? "qisqartma" : s.kind === "f" ? "ibora va so‘z" : "ibora"; }

  /* =====================================================================
     Telegram Mini App. Telegram's built-in browser usually has no Russian voice and no
     speech recognition, so inside Telegram the sound and 🎤 controls are replaced by a card
     that opens the app in Chrome. Outside Telegram (inTg = false) nothing changes.
     ===================================================================== */
  const tgApp = (window.Telegram && window.Telegram.WebApp) || null;
  const inTg = (function () {
    if (tgApp && (tgApp.initData || (tgApp.platform && tgApp.platform !== "unknown"))) return true;
    try { return sessionStorage.getItem("rusbek_tg") === "1"; } catch (e) { return false; }
  })();
  if (inTg && tgApp) { try { tgApp.ready(); } catch (e) { /* ignore */ } }
  const TG_NO_SOUND = "🔊 Telegram ichida ovoz ishlamaydi. Ovoz va gapirish mashqlari uchun ilovani brauzerda oching.";
  const TG_NO_MIC = "🎤 Telegram ichida gapirish mashqlari ishlamaydi. Talaffuzni tekshirish uchun ilovani brauzerda oching.";
  function browserUrl() { return location.origin + location.pathname.replace(/index\.html$/, "") + "?from=telegram"; }
  function openInBrowser() {
    const url = browserUrl();
    if (tgApp) {
      try { tgApp.openLink(url, { try_browser: "chrome" }); return; } catch (e) { /* older Telegram */ }
      try { tgApp.openLink(url); return; } catch (e) { /* fall through */ }
    }
    window.open(url, "_blank");
  }
  function browserCard(text) {
    return h("div", { class: "tg-card", role: "note" },
      h("p", { class: "tg-card-text" }, text || TG_NO_SOUND),
      btn("🌐", "Chrome’da ochish", openInBrowser, "primary big"),
      h("p", { class: "tg-card-hint" }, h("strong", null, "Ochilmadimi? "), "Ochilgan sahifada ⋮ → «Chrome’da ochish» ni bosing."));
  }
  /* No usable Russian voice. final = voices had time to load (an empty list then means none). */
  function tgNoVoice(final) {
    const st = Speech.status();
    return !st.tts || ((final || st.loaded) && !st.ru);
  }
  /* Sound controls; inside Telegram without a Russian voice → the browser card instead.
     keep: nodes from inside `nodes` that still work without sound (e.g. «Matnni ko‘rsatish»). */
  function soundOr(nodes, keep) {
    if (!inTg) return nodes;
    const box = h("div", { class: "sound-gate" });
    const swap = () => { box.textContent = ""; add(box, [browserCard(TG_NO_SOUND), keep]); };
    if (tgNoVoice(false)) swap();
    else { add(box, nodes); later(() => { if (tgNoVoice(true)) swap(); }, 1500); }
    return box;
  }

  /* =====================================================================
     Speaking check
     ===================================================================== */
  function micError(err) {
    const denied = "🎤 Mikrofonga ruxsat berilmagan. Brauzer so‘raganda «Ruxsat berish» (Allow) tugmasini bosing.";
    return {
      "not-allowed": denied,
      "service-not-allowed": denied,
      "network": "🌐 Ovozni tekshirish uchun internet kerak.",
      "audio-capture": "🎤 Mikrofon topilmadi. Mikrofon ulanganini tekshiring.",
      "no-speech": "🙉 Ovoz eshitilmadi. Mikrofonga yaqinroq bo‘lib, balandroq gapiring."
    }[err] || "🙉 Ovozni tanib bo‘lmadi. Qaytadan urinib ko‘ring.";
  }

  function judge(expected, res) {
    if (res.error) {
      if (res.error === "aborted") return { cls: "", nodes: [] };
      return { cls: "warn", nodes: [micError(res.error)] };
    }
    const s = Speech.score(expected, res.alts);
    let text, cls;
    if (s.sim >= 0.8) { text = "🌟 Zo‘r! Juda yaxshi aytdingiz!"; cls = "good"; }
    else if (s.sim >= 0.55) { text = "👍 Yaxshi! Deyarli to‘g‘ri. Yana bir marta aytib ko‘ring."; cls = "good"; }
    else if (s.sim >= 0.3) { text = "🙂 Yaxshi urinish! Sekin tinglab, yana takrorlang."; cls = "warn"; }
    else { text = "🔁 Boshqacha eshitildi. 🐢 Sekin tinglab, qaytadan urinib ko‘ring."; cls = "warn"; }
    return {
      cls,
      nodes: [h("strong", null, text),
        h("div", { class: "heard" }, "Siz aytdingiz: ", h("span", { lang: "ru" }, "«" + s.heard + "»"))]
    };
  }

  function micWidget(expected) {
    if (!Speech.canListen()) {
      if (inTg) return browserCard(TG_NO_MIC);
      return h("p", { class: "note" },
        "🗣 Ovoz chiqarib takrorlang. Talaffuzingizni tekshirish uchun ilovani Google Chrome brauzerida oching.");
    }
    const v = viewTok;
    const fb = h("div", { class: "feedback", role: "status" });
    const label = h("span", null, "Gapiring");
    const b = h("button", { type: "button", class: "btn mic big" }, h("span", { class: "ic", "aria-hidden": "true" }, "🎤"), label);
    b.addEventListener("click", async () => {
      if (b.disabled) return;
      b.disabled = true;
      b.classList.add("listening");
      label.textContent = "Tinglayapman… gapiring";
      fb.className = "feedback";
      fb.textContent = "";
      const res = await Speech.listen();
      if (v !== viewTok) return;
      b.disabled = false;
      b.classList.remove("listening");
      label.textContent = "Yana gapiring";
      const j = judge(expected, res);
      fb.className = "feedback " + j.cls;
      add(fb, j.nodes);
      if (inTg && /not-allowed|language-not-supported|unsupported|start/.test(res.error || "")) add(fb, browserCard(TG_NO_MIC));
      if (!res.error) markActive();
    });
    return h("div", { class: "mic-wrap" }, b, fb);
  }

  /* =====================================================================
     Quiz questions
     ===================================================================== */
  /* Pick n items different from target (by keyFn), from the given candidate order. */
  function pickOthers(target, cands, keyFn, n) {
    const seen = new Set([keyFn(target)]);
    const out = [];
    for (const c of cands) {
      const k = keyFn(c);
      if (!k || seen.has(k)) continue;
      seen.add(k);
      out.push(c);
      if (out.length >= n) break;
    }
    return out;
  }
  function distractors(it, keyFn) {
    const own = shuffle((it.src.items || []).slice());
    const kind = it.kind === "d" ? "p" : it.kind; // a saved dialogue/listening line is mixed with phrases
    const all = shuffle(Object.values(R.items).filter(x => x.kind === kind && x.src !== it.src));
    return pickOthers(it, own.concat(all), keyFn, 3);
  }

  function qListen(it) {
    const opts = [it].concat(distractors(it, x => sn(x.uz)));
    return {
      title: "🎧 Tinglang va ma’nosini tanlang",
      audio: it.ru,
      role: it.who,
      options: shuffle(opts.map(x => ({ text: x.uz, ok: x === it }))),
      reveal: it,
      item: it
    };
  }
  function qSituation(it) {
    const opts = [it].concat(distractors(it, x => sn(x.uz)));
    return {
      title: "🤔 Bu vaziyatda nima deysiz?",
      prompt: h("div", { class: "situation" }, "📍 ", it.sit),
      options: shuffle(opts.map(x => ({ text: x.ru, sub: x.pr, ok: x === it, ru: true }))),
      reveal: it,
      item: it
    };
  }
  function qTranslate(it) {
    const opts = [it].concat(distractors(it, x => sn(x.uz)));
    return {
      title: "🔤 Ruscha qanday bo‘ladi?",
      prompt: h("div", { class: "ask-uz" }, "«" + it.uz + "»"),
      options: shuffle(opts.map(x => ({ text: x.ru, sub: x.pr, ok: x === it, ru: true }))),
      reveal: it,
      item: it
    };
  }
  function dialoguePairs(t) {
    const out = [];
    t.dialogues.forEach(d => {
      for (let k = 0; k < d.lines.length - 1; k++) out.push({ q: d.lines[k], a: d.lines[k + 1], t });
    });
    return out;
  }
  function allLines(t) {
    const own = [], rest = [];
    R.topics.forEach(x => x.dialogues.forEach(d => d.lines.forEach(l => (x === t ? own : rest).push(l))));
    return shuffle(own).concat(shuffle(rest));
  }
  function qReply(p) {
    const key = x => sn(x.ru);
    const cands = allLines(p.t).filter(l => key(l) !== key(p.q));
    const opts = [p.a].concat(pickOthers(p.a, cands, key, 3));
    return {
      title: "💬 Tinglang va to‘g‘ri javobni tanlang",
      audio: p.q.ru,
      role: p.q.who,
      prompt: h("div", { class: "phrase" },
        h("div", { class: "lbl" }, "Sizga aytishdi:"),
        h("div", { class: "ru", lang: "ru" }, p.q.ru),
        h("div", { class: "pr" }, p.q.pr),
        h("div", { class: "uz" }, p.q.uz)),
      options: shuffle(opts.map(x => ({ text: x.ru, sub: x.pr, ok: x === p.a, ru: true }))),
      reveal: p.a,
      item: p.a.sv
    };
  }

  /* Build n questions from items (+ dialogues of the given topics), mixing question types. */
  function buildQuiz(items, topics, n) {
    const buckets = { listen: [], sit: [], tr: [], reply: [] };
    shuffle(items.slice()).forEach(it => {
      buckets.listen.push(() => qListen(it));
      if (it.sit) buckets.sit.push(() => qSituation(it));
      if (it.kind === "w") buckets.tr.push(() => qTranslate(it));
    });
    topics.forEach(t => dialoguePairs(t).forEach(p => buckets.reply.push(() => qReply(p))));
    Object.keys(buckets).forEach(k => shuffle(buckets[k]));
    const order = shuffle(Object.keys(buckets));
    const out = [];
    while (out.length < n) {
      let added = false;
      for (const k of order) {
        const f = buckets[k].shift();
        if (!f) continue;
        const q = f();
        if (q.options.length >= 2) out.push(q);
        added = true;
        if (out.length >= n) break;
      }
      if (!added) break;
    }
    return shuffle(out);
  }

  /* =====================================================================
     Step views (used by lessons, topic practice and word lists)
     ===================================================================== */
  function learnView(it) {
    later(() => Speech.speak(it.ru), 350);
    return [
      h("p", { class: "hint" }, "🔊 Tinglang, keyin ovoz chiqarib takrorlang."),
      phraseBox(it, true),
      soundRow(it.ru),
      starBtn(it, true),
      // The recognizer writes spoken shortcuts in full (щас → сейчас), so a shortcut is checked against its written form.
      micWidget(it.full || it.ru)
    ];
  }

  /* onLearned (optional): «O‘rgandim» for a saved item — removes it from Saqlanganlar. */
  function cardView(it, onGrade, onLearned) {
    const wrap = h("div", { class: "cardview" });
    function front() {
      wrap.textContent = "";
      add(wrap, [
        h("p", { class: "hint" }, "🎧 Tinglang. Ma’nosini eslay olasizmi? O‘ylab ko‘ring, keyin javobni oching."),
        h("button", { type: "button", class: "bigsound", onclick: () => Speech.speak(it.ru) },
          "🔊", h("span", null, "Yana tinglash")),
        btn("🐢", "Sekin tinglash", () => Speech.speak(it.ru, { slow: true })),
        btn("👁", "Javobni ko‘rish", back, "primary big")
      ]);
      later(() => Speech.speak(it.ru), 350);
    }
    function back() {
      wrap.textContent = "";
      add(wrap, [
        phraseBox(it, true),
        soundRow(it.ru),
        starBtn(it, true),
        h("p", { class: "hint" }, "Buni qanchalik yaxshi bilasiz?"),
        h("div", { class: "grades" },
          btn("✅", "Bilaman", () => onGrade(5), "ok big"),
          btn("🤔", "Qiyin", () => onGrade(3), "warn big"),
          btn("❌", "Bilmayman", () => onGrade(1), "bad big"),
          onLearned && isSaved(it) ? btn("✅", "O‘rgandim", onLearned, "learned big") : null)
      ]);
      Speech.speak(it.ru);
    }
    front();
    return wrap;
  }

  function quizView(q, onResult, onNext) {
    const fb = h("div", { class: "feedback", role: "status" });
    const nextWrap = h("div");
    let answered = false;
    const buttons = q.options.map(o => {
      const b = h("button", { type: "button", class: "opt", lang: o.ru ? "ru" : null },
        h("span", { class: "opt-main" }, o.text),
        o.sub ? h("span", { class: "opt-sub" }, o.sub) : null);
      b.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        buttons.forEach((x, k) => {
          x.disabled = true;
          if (q.options[k].ok) x.classList.add("right");
        });
        if (!o.ok) b.classList.add("wrong");
        onResult(o.ok);
        fb.className = "feedback " + (o.ok ? "good" : "warn");
        add(fb, [h("strong", null, o.ok ? "✅ To‘g‘ri! Barakalla!" : "❌ Afsuski, noto‘g‘ri. To‘g‘ri javob:"), phraseBox(q.reveal)]);
        Speech.speak(q.reveal.ru, { role: q.reveal.who });
        const nb = btn("➜", "Keyingi", onNext, "primary big");
        add(nextWrap, nb);
        nb.focus();
      });
      return b;
    });
    const top = [h("h2", { class: "qtitle" }, q.title)];
    if (q.audio && q.natural) {
      top.push(soundOr(naturalSoundRow(q)));
      later(() => Speech.speak(q.audio, { natural: true, role: q.role }), 350);
    } else if (q.audio) {
      top.push(soundOr(soundRow(q.audio, q.role)));
      later(() => Speech.speak(q.audio, { role: q.role }), 350);
    }
    if (q.prompt) top.push(q.prompt);
    return top.concat([h("div", { class: "options" }, buttons), fb, nextWrap]);
  }

  function doneView(icon, title, lines, buttons) {
    return h("div", { class: "done" },
      h("div", { class: "big-ic", "aria-hidden": "true" }, icon),
      h("h2", null, title),
      lines.map(l => (typeof l === "string" ? h("p", null, l) : l)),
      buttons);
  }

  /* Runs a list of steps: { type: "learn" | "card" | "quiz", item, q }. */
  function runSession(cfg) {
    const st = { i: 0, steps: cfg.steps, ok: 0, asked: 0, grades: { 5: 0, 3: 0, 1: 0 }, requeued: {}, learned: 0 };
    function frame(body) {
      const pct = Math.round((st.i / st.steps.length) * 100);
      show(header(cfg.title, cfg.back, cfg.crumbs), progressBar(pct),
        h("p", { class: "count" }, (st.i + 1) + " / " + st.steps.length), body);
    }
    function next() { st.i++; render(); }
    function render() {
      newView();
      window.scrollTo(0, 0);
      if (st.i >= st.steps.length) {
        show(header(cfg.title, cfg.back, cfg.crumbs), cfg.finish(st));
        return;
      }
      const s = st.steps[st.i];
      if (s.type === "learn") {
        frame(learnView(s.item).concat(btn("➜", "Keyingi", () => { introduce(s.item); next(); }, "primary big")));
      } else if (s.type === "card") {
        frame(cardView(s.item, q => {
          if (!s.repeat) { st.grades[q]++; grade(s.item, q); }
          if (q === 1) autoSave(s.item);
          const times = st.requeued[s.item.id] || 0;
          if (q === 1 && times < 2) {
            st.requeued[s.item.id] = times + 1;
            st.steps.splice(Math.min(st.i + 4, st.steps.length), 0, { type: "card", item: s.item, repeat: true });
          }
          next();
        }, () => {
          // ✅ O‘rgandim: counts as «Bilaman», leaves Saqlanganlar, and its later repeats in this session are dropped.
          const it = s.item, at = S.saved[it.id];
          if (!s.repeat) { st.grades[5]++; grade(it, 5); }
          st.learned++;
          setSaved(it, false);
          for (let k = st.steps.length - 1; k > st.i; k--) if (st.steps[k].item === it) st.steps.splice(k, 1);
          toast("✅ O‘rgandim! Saqlanganlardan olib tashlandi", { label: "Bekor qilish", fn: () => { setSaved(it, true, at); toast("⭐ Qaytarildi"); } });
          next();
        }));
      } else {
        frame(quizView(s.q, ok => { st.asked++; if (ok) st.ok++; else autoSave(s.q.item); markActive(); }, next));
      }
    }
    render();
  }

  /* =====================================================================
     Screens
     ===================================================================== */
  /* =====================================================================
     Levels (A1, A2, …). The chosen level is saved on this device; progress stays in KEY.
     ===================================================================== */
  const LEVEL_KEY = "rusbek_level";
  let LV = (() => { try { return localStorage.getItem(LEVEL_KEY); } catch (e) { return null; } })();
  function level() { return R.levelById[LV] || R.levels[0] || { id: "-", name: "", desc: "", files: [] }; }
  function setLevel(id) {
    LV = id;
    try { localStorage.setItem(LEVEL_KEY, id); } catch (e) { /* private mode: remembered until reload */ }
  }
  function ofLevel(L, list) { return list.filter(x => x.level === L.id); }
  function levelTopics(L) { return ofLevel(L, R.topics); }
  function levelItems(L) { return levelTopics(L).concat(ofLevel(L, R.lists)).flatMap(s => s.items); }
  function hasContent(L) { if (!loaded(L)) return L.files.length > 0; return levelItems(L).length > 0 || ofLevel(L, R.listening).length > 0 || ofLevel(L, R.speaking).length > 0 || ofLevel(L, R.live).length > 0 || !!R.tests[L.id]; }
  function levelPct(L) {
    const items = levelItems(L);
    return items.length ? Math.round((seenIn(items) / items.length) * 100) : 0;
  }
  /* The item belongs to level L, or to Kasblar (shown at every level). */
  function inLevel(it, L) { return !it.level || it.level === L.id; }
  function levelName(id) { return R.levelById[id] ? R.levelById[id].name : ""; }

  function soonBox(L) {
    return h("div", { class: "soon-box" },
      h("div", { class: "big-ic", "aria-hidden": "true" }, "⏳"),
      h("h2", null, L.name + " — tez orada"),
      h("p", null, "«" + L.desc + "» darajasi ustida ishlayapmiz. Hozircha boshqa darajani tanlang yoki «Kasblar»ni o‘rganing."));
  }

  /* Job tab that matches the chosen level (A1/A2 → Boshlang‘ich, B1 → O‘rta, B2 and higher → Yuqori). */
  function levelTab(L) {
    return JOB_TABS.find(tab => tab.levels.includes(L.id)) || JOB_TABS[JOB_TABS.length - 1];
  }
  /* "Kuryer · O‘rta" for a job tab, the plain title for anything else. */
  function topicLabel(t) { return t.tab ? t.title + " · " + t.tab.title : t.title; }

  function planLesson() {
    const L = level();
    if (!hasContent(L)) return { reviews: [], fresh: [] };
    const reviews = dueItems().filter(i => inLevel(i, L)).slice(0, 15);
    // New job phrases only come from tabs up to the level's own tab.
    const maxTab = JOB_TABS.indexOf(levelTab(L));
    const jobTopics = R.topics.filter(t => !t.level && (!t.tab || JOB_TABS.indexOf(t.tab) <= maxTab));
    const phrases = levelTopics(L).concat(jobTopics).flatMap(t => t.items).filter(i => !S.cards[i.id]);
    const words = ofLevel(L, R.lists).flatMap(l => l.items).filter(i => !S.cards[i.id]);
    let nP = Math.min(4, phrases.length);
    let nW = Math.min(2, words.length);
    if (nW < 2) nP = Math.min(6 - nW, phrases.length);
    if (nP < 4) nW = Math.min(6 - nP, words.length);
    return { reviews, fresh: phrases.slice(0, nP).concat(words.slice(0, nW)) };
  }

  /* Big tiles on the Mavzular screen, from "groups" in data/levels.js (null if the level has none).
     A topic that is in no group goes to "Boshqa mavzular". */
  function topicGroups(L) {
    if (!L.groups) return null;
    const used = new Set();
    const groups = L.groups.map(g => {
      const list = g.topics.map(id => R.topicById[id]).filter(t => t && t.level === L.id);
      list.forEach(t => used.add(t.id));
      return { id: g.id, icon: g.icon, title: g.title, list };
    });
    const rest = levelTopics(L).filter(t => !used.has(t.id));
    if (rest.length) groups.push({ id: "boshqa", icon: "📁", title: "Boshqa mavzular", list: rest });
    return groups.filter(g => g.list.length);
  }
  /* Where a topic lives: its parent screen and the path shown above its title. */
  function placeOf(t) {
    if (!t.level) return { back: "#/jobs", crumbs: ["Kasblar"] };
    const L = R.levelById[t.level];
    const top = L.name + " · Mavzular";
    const g = (topicGroups(L) || []).find(x => x.list.includes(t));
    return g ? { back: "#/group/" + g.id, crumbs: [top, g.title] } : { back: "#/topics", crumbs: [top] };
  }
  /* Path for screens inside a topic, word list or level practice (lessons, cards, test, dialogues). */
  function crumbsOf(s) {
    if (s.kind === "l") return [s.title + " · Test"];
    if (s.kind === "f") return ["⭐ Saqlanganlar"];
    if (s.kind === "w") return [levelName(s.level) + " · So‘zlar", s.title];
    if (s.kind === "q") return [levelName(s.level) + " · Jonli nutq", s.title];
    return placeOf(s).crumbs.concat(topicLabel(s));
  }

  /* Tile on the Kasblar screen: opens the job at the tab that matches the level. */
  function jobTile(j) {
    const items = JOB_TABS.flatMap(tab => j.tabs[tab.key].items);
    return h("button", { type: "button", class: "tile", onclick: () => go("#/job/" + j.id) },
      h("span", { class: "tile-ic", "aria-hidden": "true" }, j.icon || "👷"),
      h("span", { class: "tile-title" }, j.title),
      h("span", { class: "tile-sub" }, seenIn(items) + " / " + items.length));
  }
  /* Boshlang‘ich · O‘rta · Yuqori, each with its own progress. Switching replaces the screen,
     so "⬅ Orqaga" still goes straight back to Kasblar. */
  function jobTabs(t) {
    return h("div", { class: "level-switch job-tabs", role: "group", "aria-label": "Bosqichni tanlang" },
      JOB_TABS.map(tab => {
        const x = t.job.tabs[tab.key];
        return h("button", {
          type: "button", class: "lvl", style: "--lvl:" + tab.color, "aria-pressed": String(x === t),
          onclick: () => { if (x !== t) redirect("#/topic/" + x.id); }
        },
          h("span", { class: "lvl-name" }, tab.title),
          h("span", { class: "lvl-sub" }, tab.sub + " · " + (x.soon ? "Tez orada" : seenIn(x.items) + "/" + x.items.length)));
      }));
  }
  function jobRoute(id) {
    const j = R.jobById[id];
    if (!j) return redirect("#/jobs");
    redirect("#/topic/" + j.tabs[levelTab(level()).key].id);
  }

  function topicTile(t) {
    return h("button", { type: "button", class: "tile" + (t.soon ? " soon" : ""), onclick: () => go("#/topic/" + t.id) },
      h("span", { class: "tile-ic", "aria-hidden": "true" }, t.icon || "📁"),
      h("span", { class: "tile-title" }, t.title),
      h("span", { class: "tile-sub" }, t.soon ? "⏳ Tez orada" : seenIn(t.items) + " / " + t.items.length));
  }
  /* Big button: large icon, name, one short description line (and an optional progress line). */
  function navButton(icon, title, sub, hash, extra) {
    return h("button", { type: "button", class: "nav-btn", onclick: () => go(hash) },
      h("span", { class: "nav-ic", "aria-hidden": "true" }, icon),
      h("span", { class: "nav-text" },
        h("span", { class: "nav-title" }, title),
        h("span", { class: "nav-sub" }, sub),
        extra ? h("span", { class: "nav-extra" }, extra) : null),
      h("span", { class: "nav-arrow", "aria-hidden": "true" }, "›"));
  }

  function levelSwitch(cur) {
    return h("div", { class: "level-switch", role: "group", "aria-label": "Darajani tanlang" },
      R.levels.map(L => h("button", {
        type: "button", class: "lvl", style: "--lvl:" + L.color, "aria-pressed": String(L.id === cur.id),
        onclick: () => { if (L.id !== cur.id) { setLevel(L.id); route(); } }
      },
        h("span", { class: "lvl-name" }, L.name),
        h("span", { class: "lvl-sub" }, !hasContent(L) ? "Tez orada" : loaded(L) ? levelPct(L) + "%" : "…"))));
  }

  function home() {
    const L = level();
    const ready = hasContent(L);
    const plan = planLesson();
    const doneToday = S.lessonDay === today();
    let sub;
    if (!plan.reviews.length && !plan.fresh.length) sub = "Hamma narsa takrorlandi! Ertaga yana keling.";
    else if (doneToday) sub = "✓ Bugungi dars bajarildi. Yana mashq qilsangiz bo‘ladi.";
    else sub = "10 daqiqa · " + plan.reviews.length + " ta takrorlash · " + plan.fresh.length + " ta yangi ibora";

    const voiceNote = h("div");
    later(() => {
      const st = Speech.status();
      if (inTg) {
        if (tgNoVoice(true)) add(voiceNote, browserCard(TG_NO_SOUND));
        else if (!st.listen) add(voiceNote, browserCard(TG_NO_MIC));
        return;
      }
      if (!st.tts) {
        add(voiceNote, h("p", { class: "note" }, "🔇 Bu brauzer ovoz chiqara olmaydi. Ilovani Google Chrome yoki Microsoft Edge brauzerida oching."));
      } else if (st.loaded && !st.ru) {
        add(voiceNote, h("p", { class: "note" }, "🔇 Ruscha ovoz topilmadi. Google Chrome yoki Microsoft Edge brauzerida, internetga ulangan holda oching."));
      }
    }, 1500);

    // About 70% of this level learned → suggest the next level (nothing is ever locked).
    const pct = levelPct(L);
    const nextL = R.levels[R.levels.indexOf(L) + 1];
    const suggest = ready && pct >= 70 && nextL && hasContent(nextL) ? h("div", { class: "suggest", style: "--lvl:" + nextL.color },
      h("p", { class: "suggest-title" }, "🎉 Barakalla! " + L.name + " darajasining " + pct + " foizini o‘rgandingiz."),
      h("p", null, nextL.name + " — «" + nextL.desc + "» darajasiga o‘tishga tayyorsiz. " + L.name + " ham ochiq qoladi."),
      btn("➜", nextL.name + " darajasiga o‘tish", () => { setLevel(nextL.id); route(); }, "primary")) : null;

    const last = S.lastTopic && R.topicById[S.lastTopic];
    const topics = levelTopics(L);
    const lists = ofLevel(L, R.lists);
    const texts = ofLevel(L, R.listening);
    const dialogs = topics.reduce((n, t) => n + t.dialogues.length, 0);
    const jobs = R.jobs;
    const test = R.tests[L.id];
    const speakTasks = ofLevel(L, R.speaking);
    const liveTexts = ofLevel(L, R.live);
    const shorts = ofLevel(L, R.shortcuts);
    const topicItems = topics.flatMap(t => t.items);
    const wordItems = lists.flatMap(l => l.items);

    show(
      levelSwitch(L),
      h("section", { class: "hero" },
        h("div", { class: "hero-bg", "aria-hidden": "true" },
          h("span", { class: "blob b1" }), h("span", { class: "blob b2" }), h("span", { class: "blob b3" })),
        h("span", { class: "hero-word", "aria-hidden": "true" }, "Русский"),
        h("p", { class: "eyebrow" }, L.name + " · " + L.desc),
        h("h1", null, "Rusbek"),
        h("p", { class: "hero-lead" }, "Tinglang → Takrorlang → Gapiring → Takrorlab turing"),
        h("div", { class: "hero-stats" },
          h("div", { class: "stat" }, h("b", null, String(learnedCount())), "📖 O‘rganilgan so‘zlar"),
          h("div", { class: "stat" }, h("b", null, String(streakNow())), "🔥 Ketma-ket kunlar")),
        ready ? h("button", { type: "button", class: "lesson-btn", onclick: () => go("#/lesson") },
          h("span", { class: "play-ring", "aria-hidden": "true" }, "▶"),
          h("span", { class: "lesson-text" },
            h("span", { class: "lesson-title" }, "Bugungi dars"),
            h("span", { class: "lesson-sub" }, sub))) :
          h("p", { class: "hero-soon" }, "⏳ " + L.name + " darajasi tez orada. Hozircha boshqa darajani tanlang.")),
      voiceNote,
      suggest,
      last && (!last.level || last.level === L.id) ? h("button", { type: "button", class: "continue-btn", onclick: () => go("#/topic/" + last.id) },
        h("span", { class: "continue-ic", "aria-hidden": "true" }, last.icon || "📁"),
        h("span", { class: "continue-text" }, "Davom ettirish: " + topicLabel(last)),
        h("span", { class: "continue-arrow", "aria-hidden": "true" }, "→")) : null,
      h("p", { class: "section-label" }, L.name + " · Bo‘limlar"),
      ready ? null : soonBox(L),
      h("div", { class: "home-nav" },
        topics.length ? navButton("📂", "Mavzular", topics.length + " ta mavzu: " + topics.slice(0, 3).map(t => t.title.split(" ")[0]).join(", ") + "…",
          "#/topics", "O‘rganilgan: " + seenIn(topicItems) + " / " + topicItems.length) : null,
        lists.length ? navButton("📚", "So‘zlar", wordItems.length + " ta eng kerakli so‘z (" + L.name + ")",
          "#/words", "O‘rganilgan: " + seenIn(wordItems) + " / " + wordItems.length) : null,
        savedNavButton(),
        texts.length || dialogs ? navButton("🎧", "Tinglash",
          [texts.length ? texts.length + " ta matn" : "", dialogs ? dialogs + " ta suhbat" : ""].filter(Boolean).join(" · "), "#/listen") : null,
        liveTexts.length || shorts.length ? navButton("🎧", "Jonli nutq",
          [liveTexts.length ? liveTexts.length + " ta tabiiy tezlikdagi matn" : "", shorts.length ? shorts.reduce((n, s) => n + s.items.length, 0) + " ta qisqartma (щас, чё, тыща…)" : ""].filter(Boolean).join(" · "),
          "#/live", "Tinglangan: " + liveTexts.filter(x => S.listen && S.listen[x.id] != null).length + " / " + liveTexts.length) : null,
        speakTasks.length ? navButton("🗣", "Fikr bildiring", speakTasks.length + " ta mavzu: savolga ruscha javob bering va ovozingizni yozib oling",
          "#/speak", "Gapirilgan: " + speakTasks.filter(x => S.speak && S.speak[x.id]).length + " / " + speakTasks.length) : null,
        ready ? navButton("✅", "Test", testSummary(test), "#/test", testBest(L)) : null,
        jobs.length ? navButton("👷", "Kasblar", jobs.length + " ta kasb: quruvchi, kuryer, taksi… (barcha darajalar uchun)", "#/jobs",
          "Hozir ochiladi: " + levelTab(L).title + " (" + levelTab(L).sub + ")") : null),
      R.loadErrors.length ? h("p", { class: "note" }, "⚠️ Ba’zi fayllar yuklanmadi: " + R.loadErrors.join(", ")) : null);
  }

  function topicsScreen() {
    const L = level();
    const head = header("📂 Mavzular", "#/", [L.name]);
    const topics = levelTopics(L);
    if (!topics.length) return show(head, soonBox(L));
    const groups = topicGroups(L);
    if (!groups) {
      return show(head, h("p", { class: "hint" }, "Mavzuni tanlang."), h("div", { class: "tiles" }, topics.map(topicTile)));
    }
    show(head,
      h("p", { class: "hint" }, "Bo‘limni tanlang."),
      groups.map(g => {
        const items = g.list.flatMap(t => t.items);
        return navButton(g.icon, g.title, g.list.map(t => t.title).join(", "), "#/group/" + g.id,
          "O‘rganilgan: " + seenIn(items) + " / " + items.length);
      }));
  }

  function groupScreen(id) {
    const L = level();
    const g = (topicGroups(L) || []).find(x => x.id === id);
    if (!g) return redirect("#/topics");
    show(header(g.icon + " " + g.title, "#/topics", [L.name + " · Mavzular"]),
      h("p", { class: "hint" }, "Mavzuni tanlang."),
      h("div", { class: "tiles" }, g.list.map(topicTile)));
  }

  function jobsScreen() {
    const tab = levelTab(level());
    const loose = R.topics.filter(t => t.section === "kasblar" && !t.job); // old-style single-topic packs
    show(header("👷 Kasblar", "#/"),
      h("p", { class: "hint" }, "Kasbingizni tanlang: ishda eshitadigan va aytadigan iboralar. Har bir kasbda 3 bosqich bor: " +
        JOB_TABS.map(x => x.title + " (" + x.sub + ")").join(", ") + ". Darajangizga ko‘ra «" + tab.title + "» ochiladi."),
      h("div", { class: "tiles" }, R.jobs.map(jobTile), loose.map(topicTile)));
  }

  function wordListsScreen() {
    const L = level();
    const lists = ofLevel(L, R.lists);
    const head = header("📚 So‘zlar", "#/", [L.name]);
    if (!lists.length) return show(head, soonBox(L));
    show(head,
      lists.map(l => h("button", { type: "button", class: "tile wide", onclick: () => go("#/words/" + l.id) },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, l.icon || "📚"),
        h("span", { class: "tile-title" }, l.title),
        h("span", { class: "tile-sub" }, seenIn(l.items) + " / " + l.items.length + " ta so‘z"))));
  }

  /* 🎧 Tinglash: listening texts and every dialogue of the level. */
  function listenScreen() {
    const L = level();
    const texts = ofLevel(L, R.listening);
    const dialogs = levelTopics(L).flatMap(t => t.dialogues.map((d, n) => ({ t, d, n })));
    const head = header("🎧 Tinglash", "#/", [L.name]);
    if (!texts.length && !dialogs.length) return show(head, soonBox(L));
    const done = S.listen || {};
    show(head,
      h("p", { class: "hint" }, "Avval tinglang, keyin savollarga javob bering yoki suhbatni o‘zingiz gapiring."),
      texts.length ? [
        h("h2", null, "📻 Tinglash matnlari (" + texts.length + ")"),
        h("div", { class: "tiles" }, texts.map(x => h("button", { type: "button", class: "tile", onclick: () => go("#/listen/" + x.id) },
          h("span", { class: "tile-ic", "aria-hidden": "true" }, x.icon || "📻"),
          h("span", { class: "tile-title" }, x.title),
          h("span", { class: "tile-sub" }, done[x.id] != null ? "✓ Natija: " + done[x.id] + " / " + x.questions.length : x.lines.length + " ta gap · " + x.questions.length + " ta savol"))))
      ] : null,
      dialogs.length ? [
        h("h2", null, "💬 Suhbatlar (" + dialogs.length + ")"),
        h("div", { class: "tiles" }, dialogs.map(({ t, d, n }) => h("button", { type: "button", class: "tile", onclick: () => go("#/dialog/" + t.id + "/" + n) },
          h("span", { class: "tile-ic", "aria-hidden": "true" }, t.icon || "💬"),
          h("span", { class: "tile-title" }, d.title),
          h("span", { class: "tile-sub" }, t.title))))
      ] : null);
  }

  /* A listening text. Jonli nutq texts (x.live) have two voices, play at natural speed,
     and show the Uzbek meaning of a line only when it is tapped. */
  function listenText(id) {
    const x = R.listeningById[id];
    if (!x) return redirect(location.hash.indexOf("#/live") === 0 ? "#/live" : "#/listen");
    const live = !!x.live;
    const v = viewTok;
    let playTok = 0;
    const who = l => (live ? l.who : null);
    const name = w => (w === "b" ? x.b : x.a);
    const rows = x.lines.map(l => {
      const uz = h("div", { class: "uz" }, l.uz);
      if (live) uz.hidden = true;
      const b = h("div", { class: "bubble " + (live ? l.who : "a"), role: "button", tabindex: "0" },
        starBtn(l.sv),
        live && name(l.who) ? h("div", { class: "who" }, name(l.who)) : null,
        h("div", { class: "ru", lang: "ru" }, l.ru),
        h("div", { class: "pr" }, l.pr),
        uz,
        live ? h("div", { class: "tap-uz", "aria-hidden": "true" }, "👆 Ma’nosi uchun bosing") : null);
      b.addEventListener("click", () => {
        playTok++;
        if (live) { uz.hidden = false; b.classList.add("opened"); }
        Speech.speak(l.ru, { role: who(l), natural: live });
      });
      b.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); b.click(); } });
      return b;
    });
    const text = h("div", { class: "chat" + (live ? " live" : ""), hidden: true }, rows);
    async function playAll(slow) {
      const my = ++playTok;
      for (let k = 0; k < rows.length; k++) {
        if (my !== playTok || v !== viewTok) return;
        rows.forEach(e => e.classList.remove("active"));
        rows[k].classList.add("active");
        if (!text.hidden) rows[k].scrollIntoView({ block: "nearest", behavior: "smooth" });
        await Speech.speak(x.lines[k].ru, { slow, natural: live && !slow, role: who(x.lines[k]) });
        await wait(live && !slow ? 200 : 350);
      }
      if (my === playTok) rows.forEach(e => e.classList.remove("active"));
    }
    const toggleLabel = h("span", null, "Matnni ko‘rsatish");
    const toggle = h("button", { type: "button", class: "btn", onclick: () => {
      text.hidden = !text.hidden;
      toggleLabel.textContent = text.hidden ? "Matnni ko‘rsatish" : "Matnni yashirish";
      if (allUz) allUz.hidden = text.hidden;
    } }, h("span", { class: "ic", "aria-hidden": "true" }, "👁"), toggleLabel);
    const allUz = live ? btn("🇺🇿", "Barcha tarjimalarni ochish", () => {
      rows.forEach(r => { r.querySelector(".uz").hidden = false; r.classList.add("opened"); });
    }, "small") : null;
    if (allUz) allUz.hidden = true;
    const back = live ? "#/live" : "#/listen";
    show(header((x.icon || "📻") + " " + x.title, back, [levelName(x.level) + (live ? " · Jonli nutq" : " · Tinglash")]),
      live && x.kind ? h("p", { class: "kind-tag" }, x.kind) : null,
      x.about ? h("p", { class: "hint" }, x.about) : null,
      h("p", { class: "hint" }, live
        ? "1. Avval tabiiy tezlikda tinglang — ruslar shunday gapiradi. 2. Tushunmasangiz, sekin tinglang. 3. Matnni oching: har bir gapni bossangiz, ovozi va o‘zbekcha ma’nosi chiqadi. 4. Savollarga javob bering."
        : "1. Matnni tinglang (bir necha marta bo‘lsa ham). 2. Savollarga javob bering. Qiyin bo‘lsa, matnni oching."),
      soundOr([
        btn("▶", live ? "Tabiiy tezlikda tinglash" : "Matnni tinglash", () => playAll(false), "primary big"),
        h("div", { class: "grid2" },
          btn("🐢", "Sekin tinglash", () => playAll(true)),
          toggle)], toggle),
      allUz,
      text,
      x.questions.length ? btn("✅", "Savollarga javob berish (" + x.questions.length + " ta)", () => go("#/lq/" + x.id), "ok big") : null);
  }

  /* A question written in a data file: { q, audio?, text?, options, answer } → quizView format. */
  function fileQuestion(q, reveal) {
    return {
      title: q.q,
      audio: q.audio || null,
      prompt: q.text ? h("div", { class: "ask-uz" + (q.text.length > 80 || q.text.includes("\n") ? " read-text" : ""), lang: "ru" }, q.text) : null,
      options: shuffle(q.options.map((o, k) => ({ text: o, ok: k === q.answer, ru: /[а-яё]/i.test(o) }))),
      reveal
    };
  }

  function listenQuiz(id) {
    const x = R.listeningById[id];
    if (!x || !x.questions.length) return redirect("#/listen");
    runSession({
      title: "✅ Savollar",
      back: (x.live ? "#/live/" : "#/listen/") + x.id,
      crumbs: [levelName(x.level) + (x.live ? " · Jonli nutq" : " · Tinglash"), x.title],
      steps: x.questions.map(q => {
        const line = x.lines[q.line] || x.lines[0];
        return { type: "quiz", q: Object.assign(fileQuestion(q, line), { item: line && line.sv }) };
      }),
      finish: st => {
        S.listen = S.listen || {};
        S.listen[x.id] = Math.max(S.listen[x.id] || 0, st.ok);
        save();
        return doneView("🏁", "Barakalla!", [
          h("p", { class: "score" }, st.ok + " / " + st.asked),
          st.ok === st.asked ? "Hammasi to‘g‘ri! 🌟" : "Matnni yana bir marta tinglab, qaytadan urinib ko‘ring."
        ], [
          btn("🎧", "Matnni qayta tinglash", () => goBack((x.live ? "#/live/" : "#/listen/") + x.id), "primary big"),
          btn("📻", "Boshqa matnlar", () => go(x.live ? "#/live" : "#/listen"))
        ]);
      }
    });
  }

  /* =====================================================================
     🎧 Jonli nutq: listening at natural speed + 🗯 Qisqartmalar (spoken shortcuts)
     ===================================================================== */
  function liveScreen() {
    const L = level();
    const texts = ofLevel(L, R.live);
    const shorts = ofLevel(L, R.shortcuts);
    const head = header("🎧 Jonli nutq", "#/", [L.name]);
    if (!texts.length && !shorts.length) return show(head, soonBox(L));
    const done = S.listen || {};
    show(head,
      h("p", { class: "hint" }, "Ruslar kundalik hayotda tez gapiradi va so‘zlarni qisqartiradi. Bu yerda haqiqiy tezlikdagi suhbatlarni tinglaysiz va «щас», «чё», «тыща» kabi qisqartmalarni o‘rganasiz."),
      shorts.map(s => navButton(s.icon || "🗯", s.title, s.items.length + " ta: yozilishi, aytilishi, ma’nosi va misol",
        "#/short/" + s.id, "O‘rganilgan: " + seenIn(s.items) + " / " + s.items.length)),
      texts.length ? [
        h("h2", null, "📻 Tabiiy tezlikdagi matnlar (" + texts.length + ")"),
        h("div", { class: "tiles" }, texts.map(x => h("button", { type: "button", class: "tile", onclick: () => go("#/live/" + x.id) },
          h("span", { class: "tile-ic", "aria-hidden": "true" }, x.icon || "📻"),
          h("span", { class: "tile-title" }, x.title),
          h("span", { class: "tile-sub" }, (x.kind ? x.kind + " · " : "") +
            (done[x.id] != null ? "✓ " + done[x.id] + " / " + x.questions.length : x.questions.length + " ta savol")))))
      ] : null);
  }

  function shortScreen(id) {
    const s = R.shortcutById[id] || ofLevel(level(), R.shortcuts)[0];
    if (!s) return redirect("#/live");
    const seen = seenIn(s.items);
    const best = S.short && S.short[s.id] != null ? "  · ✅ Eng yaxshi test natijasi: " + S.short[s.id] + " / 10" : "";
    show(header((s.icon || "🗯") + " " + s.title, "#/live", [levelName(s.level) + " · Jonli nutq"]),
      h("p", { class: "hint" }, "Ruslar ko‘p so‘zni gapirganda qisqartiradi: «сейчас» o‘rniga «щас», «тысяча» o‘rniga «тыща» deydi. Yozganda esa to‘liq shaklini yozing. ⚠ belgisi — rasmiy joyda (idora, shifokor, ish suhbati, politsiya) aytmang."),
      h("p", { class: "topic-progress" }, "O‘rganilgan: " + seen + " / " + s.items.length + best),
      progressBar(Math.round((seen / s.items.length) * 100)),
      btn("🎧", "Tinglash va takrorlash", () => go("#/learn/q/" + s.id), "primary big"),
      h("div", { class: "grid2" },
        btn("🃏", "Kartochkalar", () => go("#/cards/q/" + s.id)),
        btn("✅", "Test", () => go("#/sq/" + s.id))),
      h("h2", null, "📋 Barcha qisqartmalar (" + s.items.length + ")"),
      h("p", { class: "hint" }, "Qisqartmani bossangiz — o‘zini, misolni bossangiz — butun gapni eshitasiz."),
      s.items.map(it => h("div", { class: "short-row" + (it.warn ? " is-warn" : "") },
        h("div", { class: "short-top" },
        h("button", { type: "button", class: "short-main", onclick: () => Speech.speak(it.ru) },
          h("span", { class: "play", "aria-hidden": "true" }, "🔊"),
          h("span", { class: "short-forms" },
            h("span", { class: "short-full", lang: "ru" }, it.full),
            h("span", { class: "short-arrow", "aria-hidden": "true" }, " → "),
            h("span", { class: "ru", lang: "ru" }, it.ru)),
          h("span", { class: "pr" }, it.pr),
          h("span", { class: "uz" }, it.uz),
          S.cards[it.id] ? h("span", { class: "tick", title: "O‘rganilgan", "aria-label": "O‘rganilgan" }, "✓") : null),
          starBtn(it)),
        it.warn ? h("div", { class: "warn-note" }, "⚠ ", it.warn) : null,
        it.ex ? exampleRow(it.ex) : null)));
  }

  /* Short test: written ↔ spoken form, meaning, and "can I say this in an office?". */
  function shortQuestions(s, n) {
    const items = shuffle(s.items.slice());
    const others = (it, key) => pickOthers(it, shuffle(s.items.slice()), key, 3);
    const types = [
      it => ({
        title: "🎧 Tinglang: bu so‘z qanday yoziladi?",
        audio: it.ru,
        options: shuffle([it].concat(others(it, x => sn(x.full))).map(x => ({ text: x.full, ok: x === it, ru: true }))),
        reveal: it,
        item: it
      }),
      it => ({
        title: "🗯 Ruslar jonli nutqda buni qanday aytadi?",
        prompt: h("div", { class: "ask-uz", lang: "ru" }, "«" + it.full + "»"),
        options: shuffle([it].concat(others(it, x => sn(x.ru))).map(x => ({ text: x.ru, sub: x.pr, ok: x === it, ru: true }))),
        reveal: it,
        item: it
      }),
      it => ({
        title: "🎧 Tinglang va ma’nosini tanlang",
        audio: it.ex ? it.ex.ru : it.ru,
        prompt: h("div", { class: "ask-uz", lang: "ru" }, "«" + it.ru + "»"),
        options: shuffle([it].concat(others(it, x => sn(x.uz))).map(x => ({ text: x.uz, ok: x === it }))),
        reveal: it,
        item: it
      }),
      it => ({
        title: "🏛 Rasmiy vaziyatda (idorada, ish suhbatida) shunday aytsa bo‘ladimi?",
        audio: it.ru,
        prompt: h("div", { class: "ask-uz", lang: "ru" }, "«" + it.ru + "» (= " + it.full + ")"),
        options: shuffle([
          { text: "✅ Ha, bo‘ladi — bu odatiy so‘z", ok: !it.warn },
          { text: "⚠ Yo‘q, bu juda norasmiy", ok: !!it.warn }
        ]),
        reveal: it,
        item: it
      })
    ];
    return items.slice(0, n).map((it, k) => types[k % types.length](it));
  }

  function shortQuiz(id) {
    const s = R.shortcutById[id];
    if (!s || s.items.length < 4) return redirect("#/live");
    runSession({
      title: "✅ Qisqartmalar testi",
      back: "#/short/" + s.id,
      crumbs: [levelName(s.level) + " · Jonli nutq", s.title],
      steps: shortQuestions(s, 10).map(q => ({ type: "quiz", q })),
      finish: st => {
        S.short = S.short || {};
        S.short[s.id] = Math.max(S.short[s.id] || 0, st.ok);
        save();
        const r = st.asked ? st.ok / st.asked : 0;
        return doneView("🏁", "Test tugadi!", [
          h("p", { class: "score" }, st.ok + " / " + st.asked),
          r >= 0.8 ? "Ajoyib! Endi ruslarning tez nutqini yaxshiroq tushunasiz. 🌟" : "Kartochkalar bilan yana takrorlang va qaytadan urinib ko‘ring."
        ], [
          btn("🔁", "Yana test", () => route(), "primary big"),
          btn("🃏", "Kartochkalar", () => go("#/cards/q/" + s.id)),
          btn("⬅", "Orqaga", () => goBack("#/short/" + s.id))
        ]);
      }
    });
  }

  /* =====================================================================
     🗣 Fikr bildiring: speaking tasks with helpful phrases, a sample answer and a voice recorder
     ===================================================================== */
  function speakScreen() {
    const L = level();
    const tasks = ofLevel(L, R.speaking);
    const head = header("🗣 Fikr bildiring", "#/", [L.name]);
    if (!tasks.length) return show(head, soonBox(L));
    const done = S.speak || {};
    show(head,
      h("p", { class: "hint" }, "Savolni tinglang → foydali iboralarni takrorlang → namuna javobni eshiting → o‘zingiz 30–60 soniya gapirib, ovozingizni yozib oling."),
      h("div", { class: "tiles" }, tasks.map(x => h("button", { type: "button", class: "tile", onclick: () => go("#/speak/" + x.id) },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, x.icon || "🗣"),
        h("span", { class: "tile-title" }, x.title),
        h("span", { class: "tile-sub" }, done[x.id] ? "✓ Gapirildi: " + done[x.id] + " soniya" : x.phrases.length + " ta ibora · namuna javob")))));
  }

  /* Text to check with speech recognition: without "..." and "(…)" hints. */
  function sayable(ru) { return ru.replace(/\.\.\.|…/g, " ").replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim(); }

  function speakTask(id) {
    const x = R.speakingById[id];
    if (!x) return redirect("#/speak");
    const v = viewTok;
    let playTok = 0;
    const stopSample = () => { playTok++; sampleRows.forEach(r => r.classList.remove("playing")); };
    const say = (ru, opts) => { stopSample(); Speech.speak(ru, opts); };

    /* 2. Helpful phrases: tap to listen, 🎤 to repeat and check. */
    const phraseRows = x.phrases.map(it => {
      const micBox = h("div", { class: "sp-mic" });
      const row = h("div", { class: "sp-phrase" },
        h("div", { class: "item-wrap" },
          h("button", { type: "button", class: "item-row", onclick: () => say(it.ru) },
            h("span", { class: "play", "aria-hidden": "true" }, "🔊"),
            h("span", { class: "item-text" },
              h("span", { class: "ru", lang: "ru" }, it.ru),
              h("span", { class: "pr" }, it.pr),
              h("span", { class: "uz" }, it.uz))),
          starBtn(it.sv)),
        h("div", { class: "row sp-tools" },
          btn("🐢", "Sekin", () => say(it.ru, { slow: true })),
          btn("🎤", "Takrorlash", () => {
            if (micBox.firstChild) { micBox.textContent = ""; return; }
            stopSample();
            add(micBox, micWidget(sayable(it.ru)));
          })),
        micBox);
      return row;
    });

    /* 3. Sample answer, read sentence by sentence. */
    const sampleRows = x.sample.map(it => h("button", { type: "button", class: "item-row", onclick: () => say(it.ru) },
      h("span", { class: "play", "aria-hidden": "true" }, "🔊"),
      h("span", { class: "item-text" },
        h("span", { class: "ru", lang: "ru" }, it.ru),
        h("span", { class: "uz" }, it.uz))));
    async function playSample(slow) {
      stopSample();
      Speech.stopAll();
      const tok = ++playTok;
      for (let i = 0; i < x.sample.length; i++) {
        if (tok !== playTok || v !== viewTok) return;
        sampleRows.forEach((r, k) => r.classList.toggle("playing", k === i));
        sampleRows[i].scrollIntoView && sampleRows[i].scrollIntoView({ block: "nearest", behavior: "smooth" });
        await Speech.speak(x.sample[i].ru, { slow, role: "b" });
      }
      if (tok === playTok) sampleRows.forEach(r => r.classList.remove("playing"));
    }

    later(() => Speech.speak(x.q.ru), 350);
    show(header((x.icon || "🗣") + " " + x.title, "#/speak", [levelName(x.level) + " · Fikr bildiring"]),
      h("h2", null, "1. Savol"),
      phraseBox(x.q, true),
      h("div", { class: "row" },
        btn("🔊", "Tinglash", () => say(x.q.ru)),
        btn("🐢", "Sekin", () => say(x.q.ru, { slow: true }))),
      h("h2", null, "2. Foydali iboralar (" + x.phrases.length + ")"),
      h("p", { class: "hint" }, "Har birini tinglang va ovoz chiqarib takrorlang. «...» o‘rniga o‘zingiz haqingizda gapiring."),
      phraseRows,
      h("h2", null, "3. Namuna javob"),
      h("p", { class: "hint" }, "Avval tinglang. Javobingiz shunga o‘xshash bo‘lishi mumkin, lekin o‘zingiz haqingizda gapiring."),
      h("div", { class: "row wrap" },
        btn("▶", "Namunani tinglash", () => playSample(false), "primary"),
        btn("🐢", "Sekin", () => playSample(true)),
        btn("⏹", "To‘xtatish", () => { stopSample(); Speech.stopAll(); })),
      h("div", { class: "sp-sample" }, sampleRows),
      h("h2", null, "4. Endi o‘zingiz gapiring"),
      h("p", { class: "hint" }, "30–60 soniya gapiring. Iboralardan foydalaning. Keyin yozuvni tinglab, namuna bilan solishtiring."),
      recorderWidget(x, stopSample));
  }

  /* Voice recorder (30-60 s). The recording stays only in this screen's memory: it is never saved or sent anywhere. */
  function recorderWidget(task, beforeStart) {
    const MIN = 30, MAX = 60;
    const v = viewTok;
    const box = h("div", { class: "recorder" });
    const time = h("div", { class: "rec-time", "aria-live": "off" }, "0:00 / 1:00");
    const fill = h("span", { class: "rec-fill" });
    const bar = h("div", { class: "rec-bar", "aria-hidden": "true" }, h("span", { class: "rec-min" }), fill);
    const fb = h("div", { class: "feedback", role: "status" });
    const controls = h("div", { class: "rec-controls" });
    const playWrap = h("div");
    let rec = null, stream = null, timer = null, started = 0, url = null, secs = 0;
    const fmt = t => Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0");

    function cleanup() {
      clearInterval(timer);
      timer = null;
      if (rec && rec.state !== "inactive") { rec.onstop = null; try { rec.stop(); } catch (e) { /* ignore */ } }
      if (stream) stream.getTracks().forEach(t => t.stop());
      stream = null;
      rec = null;
    }
    onLeave(() => { cleanup(); if (url) URL.revokeObjectURL(url); });

    function setControls(nodes) { controls.textContent = ""; add(controls, nodes); }
    function idle(label) {
      setControls(btn("🔴", label || "Yozishni boshlash", start, "rec-btn big"));
    }
    function tick() {
      const t = (Date.now() - started) / 1000;
      time.textContent = fmt(Math.min(t, MAX)) + " / " + fmt(MAX);
      fill.style.width = Math.min(100, (t / MAX) * 100) + "%";
      fill.classList.toggle("enough", t >= MIN);
      if (t >= MAX) stop();
    }

    async function start() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
        fb.className = "feedback warn";
        if (inTg) { fb.className = "feedback"; add(fb, browserCard(TG_NO_MIC)); return; }
        fb.textContent = "🎤 Bu brauzer ovoz yozishni qo‘llamaydi. Ilovani Chrome yoki Safari brauzerining yangi versiyasida oching.";
        return;
      }
      beforeStart && beforeStart();
      Speech.stopAll();
      fb.className = "feedback";
      fb.textContent = "";
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err) {
        stream = null;
        fb.className = "feedback warn";
        fb.textContent = err && err.name === "NotFoundError"
          ? "🎤 Mikrofon topilmadi. Mikrofon ulanganini tekshiring."
          : "🎤 Mikrofonga ruxsat berilmagan. Brauzer so‘raganda «Ruxsat berish» (Allow) tugmasini bosing.";
        if (inTg) add(fb, browserCard(TG_NO_MIC));
        return;
      }
      if (v !== viewTok) { stream.getTracks().forEach(t => t.stop()); stream = null; return; }
      if (url) { URL.revokeObjectURL(url); url = null; }
      playWrap.textContent = "";
      const chunks = [];
      try { rec = new MediaRecorder(stream); } catch (e) {
        cleanup();
        fb.className = "feedback warn";
        fb.textContent = "🎤 Ovoz yozishni boshlab bo‘lmadi. Qaytadan urinib ko‘ring.";
        return;
      }
      rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
      rec.onstop = () => {
        const type = (rec && rec.mimeType) || (chunks[0] && chunks[0].type) || "audio/webm";
        cleanup();
        if (v !== viewTok) return;
        finished(new Blob(chunks, { type }));
      };
      rec.start(250);
      started = Date.now();
      box.classList.add("on");
      timer = setInterval(tick, 200);
      tick();
      setControls(btn("⏹", "To‘xtatish", stop, "rec-btn on big"));
    }

    function stop() {
      if (!rec || rec.state === "inactive") return;
      secs = Math.min(MAX, Math.round((Date.now() - started) / 1000));
      clearInterval(timer);
      timer = null;
      box.classList.remove("on");
      rec.stop();
    }

    function finished(blob) {
      url = URL.createObjectURL(blob);
      const audio = h("audio", { controls: true, preload: "auto", src: url, class: "rec-audio" });
      add(playWrap, [
        btn("▶", "Yozuvimni tinglash", () => { Speech.stopAll(); audio.currentTime = 0; audio.play().catch(() => {}); }, "primary big"),
        audio
      ]);
      if (secs >= 3) {
        S.speak = S.speak || {};
        S.speak[task.id] = Math.max(S.speak[task.id] || 0, secs);
        markActive();
        save();
      }
      fb.className = "feedback " + (secs >= MIN ? "good" : "warn");
      fb.textContent = "";
      add(fb, secs >= MIN
        ? [h("strong", null, "🌟 Barakalla! Siz " + secs + " soniya gapirdingiz."), h("div", null, "Yozuvni tinglang va namuna javob bilan solishtiring. Qaysi so‘zlarni yaxshiroq aytish mumkin?")]
        : [h("strong", null, "⏱ Siz " + secs + " soniya gapirdingiz."), h("div", null, "Kamida 30 soniya gapirishga harakat qiling: yuqoridagi iboralardan foydalanib, fikringizni kengaytiring.")]);
      idle("Qayta yozish");
    }

    idle();
    add(box, [time, bar, controls, fb, playWrap,
      h("p", { class: "hint small" }, "🔒 Yozuv faqat shu ekranda qoladi va hech qayerga yuborilmaydi.")]);
    return box;
  }

  /* Best results are kept in S.tests: "<level>" for a one-part test, "<level>:<part>" for each part. */
  function partKey(L, pt) { return pt ? L.id + ":" + pt.id : L.id; }
  function bestOf(key) { return S.tests && S.tests[key] != null ? S.tests[key] : null; }
  function testSummary(T) {
    if (!T) return "Aralash mashq testi";
    if (T.parts.length) return T.parts.length + " qismli daraja testi: " + T.parts.map(pt => pt.title.replace(/^\d+-qism\.\s*/, "")).join(", ");
    return T.questions.length + " savollik daraja testi va mashqlar";
  }
  function testBest(L) {
    const T = R.tests[L.id];
    if (!T || !T.parts.length) return bestOf(L.id) != null ? "Eng yaxshi natija: " + bestOf(L.id) + "%" : null;
    const done = T.parts.filter(pt => bestOf(partKey(L, pt)) != null);
    return done.length ? "Topshirilgan qismlar: " + done.length + " / " + T.parts.length : null;
  }

  /* ✅ Test: the level test (data/<level>/test.js) and a mixed practice test from the level's items. */
  function testScreen() {
    const L = level();
    const T = R.tests[L.id];
    const items = levelItems(L);
    const head = header("✅ Test", "#/", [L.name]);
    if (!T && !items.length) return show(head, soonBox(L));
    const best = bestOf(L.id);
    const partBtn = pt => navButton(pt.icon || "📝", pt.title, pt.questions.length + " ta savol" + (pt.desc ? ": " + pt.desc : ""),
      "#/leveltest/" + L.id + "/" + pt.id, bestOf(partKey(L, pt)) != null ? "Eng yaxshi natija: " + bestOf(partKey(L, pt)) + "%" : null);
    show(head,
      T && T.parts.length ? h("p", { class: "section-label" }, "🎓 " + (T.title || L.name + " daraja testi")) : null,
      T && T.parts.length ? T.parts.map(partBtn) : null,
      T && T.parts.length ? h("p", { class: "hint" }, "Har bir qismni alohida topshirish mumkin.") : null,
      T && !T.parts.length && T.questions.length ? navButton("🎓", L.name + " daraja testi", T.questions.length + " ta savol: tinglash va to‘g‘ri javobni tanlash",
        "#/leveltest/" + L.id, best != null ? "Eng yaxshi natija: " + best + "%" : null) : null,
      items.length ? navButton("🔀", "Aralash mashq", "10 ta savol — " + L.name + " iboralari va so‘zlaridan", "#/quiz/l/" + L.id) : null,
      h("p", { class: "hint" }, "Test faqat o‘zingiz uchun. Hech narsa yopilmaydi — xohlagan darajani o‘rganishingiz mumkin."));
  }

  function levelTestRoute(id, partId) {
    const L = R.levelById[id];
    const T = R.tests[id];
    const pt = T && partId ? T.parts.find(x => x.id === partId) : null;
    const qs = pt ? pt.questions : T && !T.parts.length ? T.questions : [];
    if (!L || !qs.length) return redirect("#/test");
    const key = partKey(L, pt);
    runSession({
      title: pt ? (pt.icon || "📝") + " " + pt.title : "🎓 " + L.name + " daraja testi",
      back: "#/test",
      crumbs: [L.name + " · Test"].concat(pt ? [T.title || "Daraja testi"] : []),
      steps: qs.map(q => ({ type: "quiz", q: Object.assign(fileQuestion(q, { ru: q.full || q.audio || q.text || "", pr: q.pr || "", uz: q.uz || "" }),
        pt && pt.natural ? { natural: true, slowOnce: !!pt.slowOnce, role: q.role } : {}) })),
      finish: st => {
        const pct = st.asked ? Math.round((st.ok / st.asked) * 100) : 0;
        S.tests = S.tests || {};
        S.tests[key] = Math.max(S.tests[key] || 0, pct);
        save();
        if (pt) {
          const c = pt.comments || {};
          const msg = pct >= 85 ? (c.top || "🌟 A’lo natija!") : pct >= 70 ? (c.good || "👍 Yaxshi natija!")
            : pct >= 50 ? (c.mid || "🙂 Yomon emas, lekin yana mashq qiling.") : (c.low || "💪 Hechqisi yo‘q! Takrorlab, qayta urinib ko‘ring.");
          const others = T.parts.filter(x => x !== pt);
          return doneView("🏁", pt.title + " — tugadi!", [h("p", { class: "score" }, st.ok + " / " + st.asked + " (" + pct + "%)"), msg], [
            btn("🔁", "Qaytadan topshirish", () => route(), "primary big")
          ].concat(others.map(x => btn(x.icon || "📝", x.title, () => go("#/leveltest/" + L.id + "/" + x.id))),
            [btn("⬅", "Orqaga", () => goBack("#/test"))]));
        }
        const next = R.levels[R.levels.indexOf(L) + 1];
        const msg = pct >= 70
          ? "🌟 Ajoyib! Siz " + L.name + " darajasini yaxshi bilasiz." + (next && hasContent(next) ? " " + next.name + " darajasini boshlashingiz mumkin." : "")
          : pct >= 50 ? "Yaxshi! " + L.name + " mavzularini yana takrorlang va testni qayta topshiring."
          : "Hechqisi yo‘q! " + L.name + " darajasini o‘rganishda davom eting, keyin yana urinib ko‘ring.";
        return doneView("🏁", "Test tugadi!", [h("p", { class: "score" }, st.ok + " / " + st.asked + " (" + pct + "%)"), msg], [
          btn("🔁", "Qaytadan topshirish", () => route(), "primary big"),
          btn("⬅", "Orqaga", () => goBack("#/test"))
        ]);
      }
    });
  }

  function searchScreen() {
    const L = level();
    const input = h("input", { type: "search", id: "search", placeholder: "Masalan: rahmat yoki спасибо", autocomplete: "off" });
    const results = h("div", { class: "results" });
    let timer = null;
    /* Shows matches for the text in the box (chosen level + Kasblar first); returns how many were found. */
    function runSearch() {
      const q = sn(input.value);
      results.textContent = "";
      clearBtn.hidden = !input.value;
      if (!q) return 0;
      const all = Object.values(R.items).filter(it => it.search.includes(q));
      const here = all.filter(it => inLevel(it, L)).slice(0, 50);
      const other = all.filter(it => !inLevel(it, L)).slice(0, 20);
      add(results, h("p", { class: "results-head" },
        here.length ? "🔍 Topildi: " + here.length + " ta" :
        other.length ? "🔍 " + L.name + " darajasida topilmadi." : "🔍 Hech narsa topilmadi. Boshqacha yozib ko‘ring."));
      here.forEach(it => add(results, itemRow(it, "📂 " + topicLabel(it.src))));
      if (other.length) {
        add(results, h("p", { class: "results-head" }, "Boshqa darajalarda: " + other.length + " ta"));
        other.forEach(it => add(results, itemRow(it, "📂 " + levelName(it.level) + " · " + topicLabel(it.src))));
      }
      return here.length + other.length;
    }
    input.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(runSearch, 150); });
    const clearBtn = btn("✕", "Tozalash", () => { input.value = ""; runSearch(); input.focus(); }, "small");
    clearBtn.hidden = true;

    /* 🎤 Voice search: Uzbek first; Russian if Uzbek is not supported, or on request when nothing matched. */
    let voice = null;
    if (Speech.canListen()) {
      const v = viewTok;
      const status = h("div", { class: "feedback", role: "status" });
      const label = h("span", null, "Ovoz bilan qidirish");
      const mic = h("button", { type: "button", class: "btn mic big" }, h("span", { class: "ic", "aria-hidden": "true" }, "🎤"), label);
      const ruBtn = btn("🎤", "Ruscha aytib ko‘ring", () => listenAndSearch("ru-RU"));
      ruBtn.hidden = true;
      const listenAndSearch = async lang => {
        if (mic.disabled) return;
        mic.disabled = true;
        mic.classList.add("listening");
        label.textContent = "Tinglayapman… gapiring";
        status.className = "feedback";
        status.textContent = "";
        ruBtn.hidden = true;
        let res = await Speech.listen(lang);
        if (v !== viewTok) return;
        if (lang === "uz-UZ" && res.error === "language-not-supported") {
          lang = "ru-RU";
          res = await Speech.listen(lang);
          if (v !== viewTok) return;
        }
        mic.disabled = false;
        mic.classList.remove("listening");
        label.textContent = "Ovoz bilan qidirish";
        if (res.error) {
          if (res.error !== "aborted") { status.className = "feedback warn"; status.textContent = micError(res.error); }
          return;
        }
        // Use the first recognised variant that finds something.
        let n = 0;
        for (const alt of res.alts) {
          input.value = alt.trim();
          n = runSearch();
          if (n) break;
        }
        if (!n) {
          input.value = res.alts[0].trim();
          runSearch();
          if (lang === "uz-UZ") ruBtn.hidden = false;
        }
      };
      mic.addEventListener("click", () => listenAndSearch("uz-UZ"));
      voice = h("div", { class: "voice" }, mic, ruBtn, status);
    }

    show(header("🔍 Qidirish", "#/", [L.name]),
      h("div", { class: "search" },
        h("label", { for: "search" }, "Ruscha yoki o‘zbekcha yozing"),
        h("div", { class: "search-row" }, input, clearBtn)),
      voice,
      results);
  }

  function reviewRoute() {
    const due = dueItems().slice(0, 20);
    if (!due.length) {
      show(header("🔁 Takrorlash", "#/"),
        doneView("🌟", "Hozircha takrorlash yo‘q", [
          "Takrorlash kerak bo‘lgan kartochkalar qolmadi.",
          "Yangi iboralarni «Bugungi dars»da o‘rganing."
        ], btn("▶", "Bugungi dars", () => go("#/lesson"), "primary big")));
      return;
    }
    runSession({
      title: "🔁 Takrorlash",
      back: "#/",
      steps: due.map(item => ({ type: "card", item })),
      finish: st => doneView("🎉", "Takrorlash tugadi!", [
        "✅ Bilaman: " + st.grades[5] + " · 🤔 Qiyin: " + st.grades[3] + " · ❌ Bilmayman: " + st.grades[1],
        "Qiyin iboralar ertaga yana chiqadi."
      ], btn("🏠", "Bosh sahifa", () => go("#/"), "primary big"))
    });
  }

  /* =====================================================================
     ⭐ Saqlanganlar: phrases, words, dialogue / listening lines and shortcuts the user saved with ☆.
     Saved ids live in the progress (S.saved). Practice uses the "f" source: #/cards/f/<filter>, #/learn/f/…, #/quiz/f/….
     ===================================================================== */
  let savedFilter = "all"; // chip chosen on the Saqlanganlar screen (kept while the app is open)
  function savedFilters() {
    const f = [
      { id: "all", label: "Hammasi" },
      { id: "p", label: "Iboralar" },
      { id: "w", label: "So‘zlar" }
    ].concat(R.levels.filter(hasContent).map(L => ({ id: L.id, label: L.name, color: L.color })));
    if (savedList().some(it => !it.level)) f.push({ id: "kasb", label: "👷 Kasblar" });
    return f;
  }
  function savedTest(f) {
    if (f === "p") return it => it.kind !== "w";
    if (f === "w") return it => it.kind === "w";
    if (f === "kasb") return it => !it.level;
    if (R.levelById[f]) return it => it.level === f;
    return () => true;
  }
  function savedFiltered(f) { return savedList().filter(savedTest(f)); }

  /* Where a saved item came from: level pill, place ("Bozor", "Tinglash · Metro"…) and the screen to open. */
  function savedSource(it) {
    const s = it.src, w = it.where || {};
    const L = R.levelById[s.level];
    let place, hash;
    if (w.dialog != null) { place = topicLabel(s) + " · 💬 " + w.title; hash = "#/dialog/" + s.id + "/" + w.dialog; }
    else if (w.listen) { place = (s.live ? "Jonli nutq" : "Tinglash") + " · " + s.title; hash = (s.live ? "#/live/" : "#/listen/") + s.id; }
    else if (w.speak) { place = "Fikr bildiring · " + s.title; hash = "#/speak/" + s.id; }
    else if (s.kind === "w") { place = "So‘zlar" + (it.theme ? " · " + it.theme : ""); hash = "#/words/" + s.id; }
    else if (s.kind === "q") { place = s.title; hash = "#/short/" + s.id; }
    else { place = topicLabel(s); hash = "#/topic/" + s.id; }
    return { lvl: L ? L.name : "Kasblar", color: L ? L.color : "#475569", place, hash };
  }

  function savedNavButton() {
    const n = savedList().length;
    return navButton("⭐", "Saqlanganlar",
      n ? "Saqlagan ibora va so‘zlaringizni alohida takrorlang" : "☆ tugmasi bilan kerakli ibora va so‘zlarni saqlang",
      "#/saved", "⭐ " + n);
  }

  function savedEmpty() {
    return h("div", { class: "done saved-empty" },
      h("div", { class: "big-ic", "aria-hidden": "true" }, "⭐"),
      h("h2", null, "Hali hech narsa saqlanmagan"),
      h("p", null, "Keyinroq takrorlamoqchi bo‘lgan ibora va so‘zlarni shu yerga saqlang."),
      h("div", { class: "star-demo", "aria-hidden": "true" },
        h("div", { class: "item-wrap" },
          h("div", { class: "item-row" },
            h("span", { class: "play" }, "🔊"),
            h("span", { class: "item-text" },
              h("span", { class: "ru", lang: "ru" }, "Спасибо!"),
              h("span", { class: "pr" }, "Spasiba!"),
              h("span", { class: "uz" }, "Rahmat!"))),
          h("span", { class: "star demo-pulse" }, h("span", { class: "star-ic" }, "☆"))),
        h("p", { class: "demo-arrow" }, "Shu ☆ tugmani bosing 👆")),
      h("p", null, "Ibora, so‘z yoki suhbatdagi gap yonidagi ☆ tugmasini bosing. U ⭐ ga aylanadi va shu yerda paydo bo‘ladi."),
      btn("📂", "Mavzularga o‘tish", () => go("#/topics"), "primary big"));
  }

  function savedScreen() {
    const body = h("div");
    show(header("⭐ Saqlan­ganlar", "#/"), body);
    const v = viewTok;

    function learned(it) {
      const at = S.saved[it.id];
      setSaved(it, false);
      render();
      toast("✅ O‘rgandim! Ro‘yxatdan olib tashlandi", { label: "Bekor qilish", fn: () => {
        setSaved(it, true, at);
        if (v === viewTok) render();
        toast("⭐ Qaytarildi");
      } });
    }

    function card(it) {
      const src = savedSource(it);
      const micBox = h("div");
      const say = slow => Speech.speak(it.ru, { slow, role: it.who });
      return h("div", { class: "saved-item" },
        h("button", { type: "button", class: "saved-main", onclick: () => say(false) },
          h("span", { class: "ru", lang: "ru" }, it.ru),
          it.full ? h("span", { class: "saved-full" }, "✍️ ", h("span", { lang: "ru" }, it.full)) : null,
          it.pr ? h("span", { class: "pr" }, it.pr) : null,
          it.uz ? h("span", { class: "uz" }, it.uz) : null),
        h("button", { type: "button", class: "saved-src", onclick: () => go(src.hash) },
          h("span", { class: "lvl-pill", style: "--lvl:" + src.color }, src.lvl),
          h("span", { class: "saved-place" }, src.place),
          h("span", { class: "saved-go", "aria-hidden": "true" }, "›")),
        h("div", { class: "saved-tools" },
          btn("🔊", "Tinglash", () => say(false)),
          btn("🐢", "Sekin", () => say(true)),
          btn("🎤", "Takrorlash", () => {
            if (micBox.firstChild) { micBox.textContent = ""; return; }
            add(micBox, micWidget(sayable(it.full || it.ru)));
          })),
        micBox,
        btn("✅", "O‘rgandim", () => learned(it), "ok big"));
    }

    function render() {
      body.textContent = "";
      if (!savedList().length) return add(body, savedEmpty());
      const filters = savedFilters();
      if (!filters.some(f => f.id === savedFilter)) savedFilter = "all";
      const list = savedFiltered(savedFilter);
      const testNote = h("div");
      add(body, [
        h("p", { class: "hint" }, "Siz saqlagan ibora va so‘zlar. Oxirgi saqlanganlar yuqorida. O‘rganib bo‘lgach, «✅ O‘rgandim»ni bosing."),
        h("div", { class: "chips", role: "group", "aria-label": "Saralash" }, filters.map(f =>
          h("button", {
            type: "button", class: "chip" + (f.color ? " lvl-chip" : ""), "aria-pressed": String(f.id === savedFilter),
            style: f.color ? "--lvl:" + f.color : null, onclick: () => { savedFilter = f.id; render(); }
          },
            h("span", null, f.label),
            h("span", { class: "chip-n" }, String(savedFiltered(f.id).length))))),
        list.length ? [
          h("h2", null, "Mashq qilish (" + list.length + " ta)"),
          btn("🃏", "Kartochkalar", () => go("#/cards/f/" + savedFilter), "primary big"),
          h("div", { class: "grid2" },
            btn("🎧", "Tinglash va takrorlash", () => go("#/learn/f/" + savedFilter)),
            btn("✅", "Test", () => {
              if (list.length >= 4) return go("#/quiz/f/" + savedFilter);
              testNote.textContent = "";
              add(testNote, h("p", { class: "note" },
                "🙂 Test uchun kamida 4 ta saqlangan ibora yoki so‘z kerak. Hozir " + list.length + " ta bor — yana " + (4 - list.length) +
                " ta saqlang (☆ tugmasi). Hozircha «🃏 Kartochkalar» bilan mashq qiling."));
            })),
          testNote,
          h("h2", null, "📋 Ro‘yxat (" + list.length + ")"),
          list.map(card)
        ] : h("p", { class: "note" }, "Bu bo‘limda hali saqlangan narsa yo‘q. «Hammasi» tugmasini bosing.")
      ]);
    }
    render();
  }


  /* Fixed bottom bar, shown on every screen. */
  /* Labels carry soft hyphens (\u00AD): on a narrow phone a long word breaks as "Saqlan-ganlar", never mid-letter. */
  const NAV = [
    ["home", "🏠", "Bosh sahifa", "#/"],
    ["review", "🔁", "Takror\u00ADlash", "#/review"],
    ["saved", "⭐", "Saqlan\u00ADganlar", "#/saved"],
    ["search", "🔍", "Qidirish", "#/search"],
    ["help", "❓", "Yordam", "#/help"]
  ];
  const navBtns = {};
  let dueBadge = null, savedBadge = null;
  /* ⭐ count on the bottom bar (called after every save / remove). */
  function refreshSavedCount() {
    if (!savedBadge) return;
    const n = savedList().length;
    savedBadge.hidden = !n;
    savedBadge.textContent = n > 99 ? "99+" : String(n);
    navBtns.saved.setAttribute("aria-label", "Saqlanganlar" + (n ? ": " + n + " ta" : ""));
  }
  function buildBottomNav() {
    const nav = h("nav", { class: "bottom-nav", "aria-label": "Asosiy menyu" });
    NAV.forEach(([key, icon, label, hash]) => {
      const badge = key === "review" ? (dueBadge = h("span", { class: "badge", hidden: true }))
        : key === "saved" ? (savedBadge = h("span", { class: "badge star-badge", hidden: true })) : null;
      navBtns[key] = h("button", { type: "button", onclick: () => go(hash) },
        h("span", { class: "bn-ic", "aria-hidden": "true" }, icon), badge,
        h("span", { class: "bn-label" }, label));
      nav.appendChild(navBtns[key]);
    });
    document.body.appendChild(nav);
  }
  function updateBottomNav(screen) {
    Object.keys(navBtns).forEach(k => {
      if (k === screen) navBtns[k].setAttribute("aria-current", "page");
      else navBtns[k].removeAttribute("aria-current");
    });
    const n = dueItems().length;
    dueBadge.hidden = !n;
    dueBadge.textContent = n > 99 ? "99+" : String(n);
    navBtns.review.setAttribute("aria-label", "Takrorlash" + (n ? ": " + n + " ta kartochka" : ""));
    refreshSavedCount();
  }

  function lessonRoute() {
    const plan = planLesson();
    if (!plan.reviews.length && !plan.fresh.length) {
      show(header("▶ Bugungi dars", "#/"),
        doneView("🌟", "Hamma narsa takrorlandi!", ["Bugun takrorlash uchun hech narsa qolmadi. Ertaga yana keling."],
          btn("🏠", "Bosh sahifa", () => go("#/"), "primary big")));
      return;
    }
    const steps = [];
    plan.fresh.forEach(it => steps.push({ type: "learn", item: it }));
    shuffle(plan.reviews.concat(plan.fresh)).forEach(it => steps.push({ type: "card", item: it }));
    const pool = plan.reviews.concat(plan.fresh);
    const topics = Array.from(new Set(pool.map(i => i.src).filter(s => s.kind === "t" && s.dialogues.length)));
    buildQuiz(pool, topics, 4).forEach(q => steps.push({ type: "quiz", q }));
    runSession({
      title: "▶ Bugungi dars",
      back: "#/",
      steps,
      finish: st => {
        S.lessonDay = today();
        markActive();
        save();
        return doneView("🎉", "Bugungi dars tugadi!", [
          "Yangi: " + plan.fresh.length + " ta · Takrorlandi: " + plan.reviews.length + " ta",
          st.asked ? "Test: " + st.ok + " / " + st.asked : "",
          "🔥 Ketma-ket kunlar: " + streakNow(),
          "Ertaga yana keling — har kuni 10 daqiqa yetarli!"
        ].filter(Boolean), btn("🏠", "Bosh sahifa", () => go("#/"), "primary big"));
      }
    });
  }

  function topicScreen(id) {
    const t = R.topicById[id];
    if (!t) return redirect("#/topics");
    const title = (t.icon || "") + " " + t.title;
    const place = placeOf(t);
    const tabs = t.job ? jobTabs(t) : null;
    if (t.soon && t.job) {
      show(header(title, place.back, place.crumbs), tabs,
        h("div", { class: "soon-box" },
          h("div", { class: "big-ic", "aria-hidden": "true" }, "⏳"),
          h("h2", null, t.tab.title + " (" + t.tab.sub + ") — tez orada"),
          h("p", null, "Bu bosqich ustida ishlayapmiz. Hozircha yuqoridagi boshqa bosqichni tanlang.")));
      return;
    }
    if (t.soon) {
      show(header(title, place.back, place.crumbs),
        h("div", { class: "soon-box" },
          h("div", { class: "big-ic", "aria-hidden": "true" }, "⏳"),
          h("h2", null, "Tez orada"),
          h("p", null, "Bu mavzu ustida ishlayapmiz. Hozircha boshqa mavzularni o‘rganing.")),
        btn("🏠", "Bosh sahifa", () => go("#/"), "primary big"));
      return;
    }
    S.lastTopic = t.id; // for "Davom ettirish" on the home screen
    save();
    const seen = seenIn(t.items);
    show(header(title, place.back, place.crumbs),
      tabs,
      h("p", { class: "topic-progress" }, (t.tab ? t.tab.title + " · " : "") + "O‘rganilgan: " + seen + " / " + t.items.length),
      progressBar(Math.round((seen / t.items.length) * 100)),
      btn("🎧", "Tinglash va takrorlash", () => go("#/learn/t/" + t.id), "primary big"),
      h("div", { class: "grid2" },
        btn("🃏", "Kartochkalar", () => go("#/cards/t/" + t.id)),
        btn("✅", "Test", () => go("#/quiz/t/" + t.id))),
      t.dialogues.length ? btn("💬", "Suhbatlar (" + t.dialogues.length + " ta)", () => go("#/dialogs/" + t.id)) : null,
      t.templates.length ? h("section", null,
        h("h2", null, "🧩 Qoliplar"),
        h("p", { class: "hint" }, "Nuqtalar (...) o‘rniga kerakli so‘zni qo‘ying."),
        t.templates.map(tp => h("div", { class: "tpl" },
          h("div", { class: "tpl-main" }, h("span", { lang: "ru" }, tp.ru), " = ", h("span", null, tp.uz)),
          tp.pr ? h("div", { class: "pr" }, h("span", { class: "lbl" }, "Aytilishi: "), tp.pr) : null,
          (tp.ex || []).map(ru => itemRow(t.items.find(i => i.ru === ru) || { ru }))))) : null,
      h("h2", null, "📋 Barcha iboralar (" + t.items.length + ")"),
      h("p", { class: "hint" }, "Iborani bossangiz, ovozini eshitasiz."),
      t.items.map(it => itemRow(it)));
  }

  /* Next n items to learn: starts at the first unseen one. */
  function nextChunk(items, n) {
    const idx = items.findIndex(i => !S.cards[i.id]);
    if (idx < 0) return shuffle(items.slice()).slice(0, n);
    return items.slice(idx, idx + n);
  }

  function learnRoute(kind, id, g) {
    const s = srcOf(kind, id);
    if (!s || !s.items.length) return redirect("#/");
    const group = g != null && s.groups ? s.groups[+g] : null;
    const items = group ? group.items : kind === "f" ? shuffle(s.items.slice()).slice(0, 10) : nextChunk(s.items, 10);
    runSession({
      title: "🎧 " + (group ? group.theme : "Tinglash va takrorlash"),
      back: backOf(s),
      crumbs: crumbsOf(s),
      steps: items.map(item => ({ type: "learn", item })),
      finish: () => doneView("🎉", "Barakalla!", [
        items.length + " ta " + noun(s) + " tingladingiz va takrorladingiz.",
        "Endi kartochkalar bilan mustahkamlang."
      ], [
        btn("🃏", "Kartochkalar bilan takrorlash", () => go("#/cards/" + kind + "/" + id), "primary big"),
        group || (kind === "f" && s.items.length <= 10) ? null : btn("➜", kind === "f" ? "Yana takrorlash" : "Yana 10 ta", () => route()),
        btn("⬅", "Orqaga", () => goBack(backOf(s)))
      ])
    });
  }

  function cardsRoute(kind, id) {
    const s = srcOf(kind, id);
    if (!s || !s.items.length) return redirect("#/");
    const t = today();
    const due = s.items.filter(i => S.cards[i.id] && S.cards[i.id].d <= t);
    const fresh = s.items.filter(i => !S.cards[i.id]).slice(0, 10);
    const rest = s.items.filter(i => S.cards[i.id] && S.cards[i.id].d > t).sort((a, b) => S.cards[a.id].d - S.cards[b.id].d);
    const list = due.concat(fresh, rest).slice(0, 15);
    runSession({
      title: "🃏 Kartochkalar",
      back: backOf(s),
      crumbs: crumbsOf(s),
      steps: list.map(item => ({ type: "card", item })),
      finish: st => doneView("🎉", "Kartochkalar tugadi!", [
        "✅ Bilaman: " + st.grades[5] + " · 🤔 Qiyin: " + st.grades[3] + " · ❌ Bilmayman: " + st.grades[1],
        st.learned ? "🎓 O‘rgandim: " + st.learned + " ta — Saqlanganlardan olib tashlandi." : "",
        "Qiyin so‘zlar ertaga yana chiqadi."
      ].filter(Boolean), [
        btn("✅", "Test topshirish", () => go("#/quiz/" + kind + "/" + id), "primary big"),
        btn("⬅", "Orqaga", () => goBack(backOf(s)))
      ])
    });
  }

  function quizRoute(kind, id) {
    const s = srcOf(kind, id);
    if (kind === "f" && s.items.length < 4) return redirect("#/saved");
    if (!s || !s.items.length) return redirect("#/");
    const qs = buildQuiz(s.items, kind === "t" ? [s] : kind === "l" ? s.topics : [], 10);
    runSession({
      title: "✅ Test",
      back: backOf(s),
      crumbs: crumbsOf(s),
      steps: qs.map(q => ({ type: "quiz", q })),
      finish: st => {
        const r = st.asked ? st.ok / st.asked : 0;
        const msg = r >= 0.8 ? "Ajoyib natija! 🌟" : r >= 0.5 ? "Yaxshi! Yana biroz mashq qiling." :
          "Hechqisi yo‘q! Iboralarni yana tinglab, qaytadan urinib ko‘ring.";
        return doneView("🏁", "Test tugadi!", [h("p", { class: "score" }, st.ok + " / " + st.asked), msg], [
          btn("🔁", "Yana test", () => route(), "primary big"),
          btn("⬅", "Orqaga", () => goBack(backOf(s)))
        ]);
      }
    });
  }

  function dialogsList(id) {
    const t = R.topicById[id];
    if (!t || !t.dialogues.length) return redirect("#/topic/" + id);
    show(header("💬 Suhbatlar", "#/topic/" + id, crumbsOf(t)),
      h("p", { class: "hint" }, "Suhbatni tanlang. Avval tinglang, keyin bitta rolni o‘zingiz gapiring."),
      t.dialogues.map((d, n) => h("button", { type: "button", class: "tile wide", onclick: () => go("#/dialog/" + id + "/" + n) },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, "💬"),
        h("span", { class: "tile-title" }, d.title),
        h("span", { class: "tile-sub" }, d.a + " va " + d.b + " · " + d.lines.length + " ta gap"))));
  }

  function dialogScreen(id, n) {
    const t = R.topicById[id];
    const d = t && t.dialogues[n];
    if (!d) return redirect("#/");
    const back = "#/dialogs/" + id;
    const name = w => (w === "a" ? d.a : d.b);
    function bubble(l) {
      return h("div", { class: "bubble " + l.who },
        starBtn(l.sv),
        h("div", { class: "who" }, name(l.who)),
        h("div", { class: "ru", lang: "ru" }, l.ru),
        h("div", { class: "pr" }, l.pr),
        h("div", { class: "uz" }, l.uz));
    }

    function viewMode() {
      newView();
      window.scrollTo(0, 0);
      const v = viewTok;
      let playTok = 0;
      const els = d.lines.map(l => {
        const b = bubble(l);
        b.setAttribute("role", "button");
        b.tabIndex = 0;
        b.addEventListener("click", () => { playTok++; Speech.speak(l.ru, { role: l.who }); });
        return b;
      });
      async function playAll(slow) {
        const my = ++playTok;
        for (let k = 0; k < d.lines.length; k++) {
          if (my !== playTok || v !== viewTok) return;
          els.forEach(e => e.classList.remove("active"));
          els[k].classList.add("active");
          els[k].scrollIntoView({ block: "nearest", behavior: "smooth" });
          await Speech.speak(d.lines[k].ru, { slow, role: d.lines[k].who });
          await wait(400);
        }
        if (my === playTok) els.forEach(e => e.classList.remove("active"));
      }
      show(header("💬 " + d.title, back, crumbsOf(t).concat("Suhbatlar")),
        h("p", { class: "hint" }, "1-qadam: suhbatni tinglang. 2-qadam: bitta rolni tanlab, o‘zingiz gapiring."),
        soundOr([
          btn("▶", "Suhbatni tinglash", () => playAll(false), "primary big"),
          btn("🐢", "Sekin tinglash", () => playAll(true))]),
        h("div", { class: "chat" }, els),
        h("h2", null, "🎭 Rolni o‘ynang"),
        h("div", { class: "grid2" },
          btn("🙋", "Men — " + d.a, () => roleMode("a")),
          btn("🙋", "Men — " + d.b, () => roleMode("b"))));
    }

    function roleMode(me) {
      newView();
      window.scrollTo(0, 0);
      const v = viewTok;
      const chat = h("div", { class: "chat" });
      const ctrl = h("div", { class: "turn" });
      let k = 0;
      show(header("🎭 Siz — " + name(me), back, crumbsOf(t).concat("Suhbatlar")),
        h("p", { class: "hint" }, "Siz «" + name(me) + "» bo‘lasiz. Navbatingiz kelganda gapiring."),
        chat, ctrl);
      function setCtrl(kids) { ctrl.textContent = ""; add(ctrl, kids); }
      async function step() {
        if (v !== viewTok) return;
        if (k >= d.lines.length) {
          markActive();
          setCtrl([
            h("div", { class: "feedback good" }, h("strong", null, "🎉 Suhbat tugadi! Barakalla!")),
            btn("🔁", "Qaytadan", () => roleMode(me), "primary big"),
            btn("🎭", "Boshqa rolni o‘ynash", () => roleMode(me === "a" ? "b" : "a")),
            btn("⬅", "Suhbatga qaytish", viewMode)
          ]);
          return;
        }
        const l = d.lines[k];
        const b = bubble(l);
        chat.appendChild(b);
        if (l.who !== me) {
          setCtrl(h("p", { class: "hint" }, "🔊 " + name(l.who) + " gapiryapti…"));
          b.scrollIntoView({ block: "nearest", behavior: "smooth" });
          await Speech.speak(l.ru, { role: l.who });
          await wait(500);
          if (v !== viewTok) return;
          k++;
          step();
        } else {
          b.classList.add("mine-turn");
          setCtrl([
            h("p", { class: "turn-title" }, "🗣 Endi siz ayting:"),
            micWidget(l.ru),
            h("div", { class: "row" },
              btn("🔊", "Namuna", () => Speech.speak(l.ru, { role: me })),
              btn("🐢", "Sekin", () => Speech.speak(l.ru, { slow: true, role: me }))),
            btn("➜", "Keyingi", () => { Speech.stopAll(); b.classList.remove("mine-turn"); k++; step(); }, "primary big")
          ]);
          ctrl.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
      step();
    }

    viewMode();
  }

  function wordsScreen(id) {
    const l = R.listById[id];
    if (!l) return redirect("#/words");
    const seen = seenIn(l.items);
    show(header((l.icon || "📚") + " " + l.title, "#/words", crumbsOf(l).slice(0, -1)),
      l.note ? h("p", { class: "hint" }, l.note) : null,
      h("p", { class: "topic-progress" }, "O‘rganilgan: " + seen + " / " + l.items.length),
      progressBar(Math.round((seen / l.items.length) * 100)),
      btn("🎧", "Tinglash va takrorlash (10 ta)", () => go("#/learn/w/" + l.id), "primary big"),
      h("div", { class: "grid2" },
        btn("🃏", "Kartochkalar", () => go("#/cards/w/" + l.id)),
        btn("✅", "Test", () => go("#/quiz/w/" + l.id))),
      l.groups.map((g, gi) => h("section", null,
        h("div", { class: "group-head" },
          h("h2", null, (g.icon ? g.icon + " " : "") + g.theme + " (" + g.items.length + ")"),
          btn("🎧", "O‘rganish", () => go("#/learn/w/" + l.id + "/" + gi), "small")),
        g.items.map(it => itemRow(it)))));
  }

  function aiScreen() {
    show(header("🤖 AI suhbatdosh", "#/help", ["Yordam"]),
      h("div", { class: "soon-box" },
        h("div", { class: "big-ic", "aria-hidden": "true" }, "🤖"),
        h("h2", null, "Tez orada!"),
        h("p", null, "Bu yerda siz sun’iy intellekt bilan ruscha gaplashib mashq qilasiz: u sizga savol beradi, siz javob berasiz."),
        h("p", null, "Hozircha mavzulardagi «Suhbatlar» bo‘limida rol o‘ynab mashq qiling.")),
      btn("🏠", "Bosh sahifa", () => go("#/"), "primary big"));
  }

  function helpScreen() {
    const st = Speech.status();
    const resetBox = h("div");
    function askReset() {
      resetBox.textContent = "";
      add(resetBox, [
        h("p", { class: "note" }, "Rostdan ham barcha natijalarni o‘chirasizmi? Buni qaytarib bo‘lmaydi."),
        h("div", { class: "row" },
          btn("🗑", "Ha, o‘chirish", () => { S = blank(); save(); go("#/"); }, "bad"),
          btn("✋", "Yo‘q", showResetButton))
      ]);
    }
    function showResetButton() {
      resetBox.textContent = "";
      add(resetBox, btn("🗑", "Natijalarni o‘chirish", askReset));
    }
    showResetButton();

    /* Text size: saved on this device (separate from progress); index.html applies it before the page draws. */
    const SIZES = [["oddiy", "Oddiy", "1rem"], ["katta", "Katta", "1.25rem"], ["juda", "Juda katta", "1.5rem"]];
    const current = document.documentElement.getAttribute("data-size") || "oddiy";
    const sizeBtns = SIZES.map(([key, label, aa]) =>
      h("button", { type: "button", class: "size-opt", "aria-pressed": String(key === current), onclick: () => setSize(key) },
        h("span", { class: "aa", style: "font-size:" + aa, "aria-hidden": "true" }, "Aa"), label));
    function setSize(key) {
      if (key === "oddiy") document.documentElement.removeAttribute("data-size");
      else document.documentElement.setAttribute("data-size", key);
      try { localStorage.setItem("rusbek_text_size", key); } catch (e) { /* private mode: applies until reload */ }
      sizeBtns.forEach((b, i) => b.setAttribute("aria-pressed", String(SIZES[i][0] === key)));
    }

    /* ⭐ Auto-save setting (off by default), kept in the progress. */
    const autoBtn = h("button", { type: "button", class: "switch-row", role: "switch", onclick: () => {
      S.autoSave = !S.autoSave;
      save();
      autoBtn.setAttribute("aria-checked", String(!!S.autoSave));
      toast(S.autoSave ? "⭐ Avtomatik saqlash yoqildi" : "Avtomatik saqlash o‘chirildi");
    } },
      h("span", { class: "switch-text" },
        h("span", { class: "switch-title" }, "Qiyin so‘zlarni avtomatik saqlash"),
        h("span", { class: "switch-sub" }, "Kartochkada «Bilmayman» desangiz yoki testda xato qilsangiz, o‘sha ibora ⭐ Saqlanganlarga o‘zi qo‘shiladi.")),
      h("span", { class: "switch", "aria-hidden": "true" }, h("span", { class: "knob" })));
    autoBtn.setAttribute("aria-checked", String(!!S.autoSave));

    show(header("❓ Yordam", "#/"),
      h("h2", null, "Matn o‘lchami"),
      h("div", { class: "size-picker", role: "group", "aria-label": "Matn o‘lchami" }, sizeBtns),
      h("h2", null, "⭐ Saqlanganlar"),
      autoBtn,
      h("h2", null, "Qanday o‘rganish kerak?"),
      h("ol", { class: "steps" },
        h("li", null, "Yuqoridagi A1, A2, B1… tugmalari bilan darajangizni tanlang. Hech narsa yopilmagan."),
        h("li", null, "Har kuni «Bugungi dars» tugmasini bosing. 10 daqiqa yetarli."),
        h("li", null, "🔊 Tinglang, keyin ovoz chiqarib takrorlang. 🐢 tugmasi sekin aytadi."),
        h("li", null, "🎤 «Gapiring» tugmasini bosib, ruscha ayting — dastur sizni tekshiradi."),
        h("li", null, "Kartochkalarda halol javob bering: «Bilaman», «Qiyin» yoki «Bilmayman». Qiyin iboralar tez-tez qaytadi."),
        h("li", null, "Mavzulardagi «Suhbatlar»da rol o‘ynab, haqiqiy vaziyatga tayyorlaning."),
        h("li", null, "Qiyin ibora yoki so‘z yonidagi ☆ tugmasini bosing — u ⭐ «Saqlanganlar»ga tushadi. U yerda ularni alohida takrorlaysiz."),
        h("li", null, "Pastdagi tugmalar har doim ko‘rinadi: 🏠 Bosh sahifa, 🔁 Takrorlash, ⭐ Saqlanganlar, 🔍 Qidirish, ❓ Yordam. «⬅ Orqaga» bir qadam orqaga qaytaradi.")),
      h("button", { type: "button", class: "tile wide", onclick: () => go("#/daraja") },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, "🎯"),
        h("span", { class: "tile-title" }, "Darajani qayta aniqlash"),
        h("span", { class: "tile-sub" }, "3 daqiqalik tekshiruv. Natijalaringiz o‘chmaydi — faqat daraja tavsiya qilinadi.")),
      h("button", { type: "button", class: "tile wide", onclick: () => go("#/ai") },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, "🤖"),
        h("span", { class: "tile-title" }, "AI suhbatdosh"),
        h("span", { class: "tile-sub" }, "⏳ Tez orada")),
      h("h2", null, "Brauzeringiz"),
      h("ul", { class: "status-list" },
        h("li", null, st.tts ? (st.ru || !st.loaded ? "🔊 Ruscha ovoz: ishlaydi" : "🔇 Ruscha ovoz topilmadi — Google Chrome yoki Microsoft Edge tavsiya etiladi") :
          "🔇 Ovoz chiqarish ishlamaydi — Google Chrome yoki Microsoft Edge tavsiya etiladi"),
        h("li", null, st.listen ? "🎤 Talaffuzni tekshirish: ishlaydi (internet kerak)" :
          "🎤 Talaffuzni tekshirish bu brauzerda yo‘q — Google Chrome tavsiya etiladi")),
      inTg && (tgNoVoice(true) || !st.listen) ? browserCard(tgNoVoice(true) ? TG_NO_SOUND : TG_NO_MIC) : null,
      h("h2", null, "Natijalaringiz"),
      h("p", null, "Natijalaringiz faqat shu qurilmada, shu brauzerda saqlanadi. Ro‘yxatdan o‘tish shart emas. Dastur bepul."),
      inTg ? h("p", { class: "note" }, "📱 Telegram ichida va Chrome’da natijalar alohida saqlanadi: Telegramda o‘rganganlaringiz Chrome’da ko‘rinmaydi (va aksincha). Qulay bo‘lsa, doim bitta joyda o‘rganing.") : null,
      resetBox);
  }

  /* =====================================================================
     🎯 Darajangizni bilib oling — short adaptive level check.
     Shown once to a brand-new user (no saved progress, no level chosen). Retake: Yordam → «Darajani qayta aniqlash».
     The result is saved inside the progress (S.placement = { level, suggested, date, how, scores }),
     so it is part of KEY. It only sets the level; it never deletes progress.
     ===================================================================== */
  const PLACE_LEVELS = ["a1", "a2", "b1", "b2"]; // never above B2
  const PLACE_PER_LEVEL = 4;
  const PLACE_ABOUT = {
    a1: "Boshidan boshlaymiz: salomlashish, raqamlar, do‘kon va transportdagi eng kerakli iboralar.",
    a2: "Siz oddiy iboralarni tushunasiz. Endi ish, uy, shifokor va telefondagi kundalik suhbatlarni o‘rganamiz.",
    b1: "Siz kundalik mavzularda gaplasha olasiz. Endi uzunroq suhbatlarni o‘rganamiz.",
    b2: "Siz rus tilini yaxshi bilasiz. Endi tabiiy tezlikdagi nutq, rasmiy vaziyatlar va murakkab mavzularni o‘rganamiz."
  };
  /* New user = nothing saved yet (no progress, no level). Decided once at start,
     so a user with progress never sees the check automatically. */
  const firstRun = (() => {
    try {
      return localStorage.getItem(KEY) === null && localStorage.getItem(LEVEL_KEY) === null;
    } catch (e) { return false; } // storage blocked: don't force the check (it could not be remembered)
  })();
  let placementPending = firstRun;

  function localDate() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  /* Save the result and open the home screen at that level. */
  function finishPlacement(levelId, how, extra) {
    S.placement = Object.assign({ level: levelId, date: localDate(), how }, extra || {});
    save();
    setLevel(levelId);
    placementPending = false;
    document.body.classList.remove("placing");
    toast("🎯 " + levelName(levelId) + " darajasi tanlandi");
    redirect("#/");
  }
  /* Uzbek meaning without the woman's-form note (that note contains the Russian answer). */
  function plainUz(uz) { return String(uz || "").replace(/\s*\(ayol aytsa:[^)]*\)/g, "").trim(); }
  function placeUsable(it) { return it.ru && it.uz && !/\.\.\.|…/.test(it.ru) && it.ru.length <= 70 && it.ru.replace(/[^а-яё]/gi, "").length >= 3; }
  function placePool(id) {
    const L = R.levelById[id];
    return L ? levelItems(L).filter(placeUsable) : [];
  }
  /* No Russian voice → listening questions show the Russian text instead. */
  function noVoice() { const st = Speech.status(); return !st.tts || (st.loaded && !st.ru); }

  /* One question: "listen" (Russian audio → 4 Uzbek meanings) or "sit" (Uzbek situation → 4 Russian answers). */
  function placeQuestion(type, it, pool) {
    const key = type === "listen" ? x => sn(plainUz(x.uz)) : x => sn(x.ru);
    const sameKind = shuffle(pool.filter(x => x.kind === it.kind && x !== it));
    const opts = shuffle([it].concat(pickOthers(it, sameKind.concat(shuffle(pool.slice())), key, 3)));
    if (type === "listen") return { type, it, options: opts.map(x => ({ text: plainUz(x.uz), ok: x === it })) };
    return { type, it, options: opts.map(x => ({ text: x.ru, sub: x.pr, ok: x === it, ru: true })) };
  }

  /* Title bar: no "Orqaga" on first launch (the user just opened the app). */
  function placeHeader(title, back) {
    return placementPending ? h("header", { class: "top" }, h("div", { class: "titles" }, h("h1", null, title)))
      : header(title, back, ["Yordam"]);
  }

  function placementIntro() {
    if (placementPending) document.body.classList.add("placing");
    const choice = (icon, label, sub, fn) =>
      h("button", { type: "button", class: "tile wide place-choice", onclick: fn },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, icon),
        h("span", { class: "tile-title" }, label),
        h("span", { class: "tile-sub" }, sub));
    show(placeHeader("🎯 Darajangizni bilib oling", "#/help"),
      h("p", { class: "place-lead" }, "Qayerdan boshlashni birga aniqlaymiz. Bu taxminan 3 daqiqa vaqt oladi."),
      h("h2", { class: "place-q" }, "Rus tilini qanchalik bilasiz?"),
      choice("🌱", "Umuman bilmayman", "A1 darajasidan boshlaymiz", () => finishPlacement("a1", "none")),
      choice("🙂", "Ozgina bilaman", "Qisqa tekshiruv A1 dan boshlanadi", () => go("#/daraja/test/a1")),
      choice("💪", "Yaxshi bilaman", "Qisqa tekshiruv A2 dan boshlanadi", () => go("#/daraja/test/a2")),
      placementPending
        ? h("button", { type: "button", class: "link-btn", onclick: () => finishPlacement("a1", "skip") }, "O‘tkazib yuborish")
        : h("p", { class: "hint" }, "Natijalaringiz o‘chmaydi — tekshiruv faqat darajani tavsiya qiladi."));
  }

  /* Adaptive check: up to 4 questions per level. 3 right → next level; 2 wrong → stop at this level. */
  function placementCheck(startId) {
    if (placementPending) document.body.classList.add("placing");
    const first = Math.max(0, PLACE_LEVELS.indexOf(startId));
    let li = first;
    const scores = {}; // level → { ok, asked }
    const used = new Set();
    let asked = 0;
    let typeFlip = Math.random() < 0.5;

    function nextQuestion() {
      const id = PLACE_LEVELS[li];
      const all = placePool(id);
      const pool = all.filter(x => !used.has(x.id));
      const phrases = pool.filter(x => x.kind === "p");
      typeFlip = !typeFlip;
      const type = typeFlip && phrases.length ? "sit" : "listen";
      // Situation questions prefer phrases with a written situation (sit); levels without them use the meaning.
      const withSit = phrases.filter(x => x.sit);
      const cands = type === "sit" ? (withSit.length && Math.random() < 0.8 ? withSit : phrases) : pool;
      if (!cands.length) return null;
      const it = cands[Math.floor(Math.random() * cands.length)];
      used.add(it.id);
      const q = placeQuestion(type, it, all);
      return q.options.length >= 2 ? q : null;
    }

    function finish() {
      placementResult(PLACE_LEVELS[li], PLACE_LEVELS.slice(first, li + 1).map(id => ({ id, s: scores[id] || { ok: 0, asked: 0 } })), first);
    }

    function answer(ok) {
      const id = PLACE_LEVELS[li];
      const s = scores[id] = scores[id] || { ok: 0, asked: 0 };
      s.asked++;
      asked++;
      if (ok) s.ok++;
      if (s.asked - s.ok >= 2) return finish();           // 2 wrong: this is the level to learn
      if (s.ok >= 3 || s.asked >= PLACE_PER_LEVEL) {       // passed this level
        if (li >= PLACE_LEVELS.length - 1) return finish(); // B2 is the top
        li++;
      }
      render();
    }

    function render() {
      newView();
      window.scrollTo(0, 0);
      const q = nextQuestion();
      if (!q) { // no usable content at this level: go on if the next level has some, otherwise stop
        if (li < PLACE_LEVELS.length - 1 && placePool(PLACE_LEVELS[li + 1]).length) { li++; return render(); }
        return finish();
      }
      const s = scores[PLACE_LEVELS[li]] || { asked: 0 };
      // Expected number of questions: 3 per level (a 4th one only after a mistake), so the count stays honest.
      const total = asked + (s.asked < 3 ? 3 - s.asked : 1) + 3 * (PLACE_LEVELS.length - 1 - li);
      let answered = false;
      const opts = q.options.concat([{ text: "🤷 Bilmayman", ok: false, dunno: true }]).map(o => {
        const b = h("button", { type: "button", class: "opt" + (o.dunno ? " opt-dunno" : ""), lang: o.ru ? "ru" : null },
          h("span", { class: "opt-main" }, o.text),
          o.sub ? h("span", { class: "opt-sub" }, o.sub) : null);
        b.addEventListener("click", () => {
          if (answered) return;
          answered = true;
          b.classList.add("picked");
          later(() => answer(o.ok), 350);
        });
        return b;
      });
      let body;
      if (q.type === "listen" && !noVoice()) {
        later(() => Speech.speak(q.it.ru), 350);
        body = [
          h("h2", { class: "qtitle" }, "🎧 Tinglang va ma’nosini tanlang"),
          h("button", { type: "button", class: "bigsound", onclick: () => Speech.speak(q.it.ru) }, "🔊", h("span", null, "Yana tinglash")),
          btn("🐢", "Sekin tinglash", () => Speech.speak(q.it.ru, { slow: true }))
        ];
      } else if (q.type === "listen") {
        body = [
          h("h2", { class: "qtitle" }, "📖 O‘qing va ma’nosini tanlang"),
          h("div", { class: "ask-uz", lang: "ru" }, q.it.ru),
          h("p", { class: "hint" }, "🔇 Ruscha ovoz topilmadi, shuning uchun matn ko‘rsatildi.")
        ];
      } else {
        body = [
          h("h2", { class: "qtitle" }, "🤔 Bu vaziyatda nima deysiz?"),
          h("div", { class: "situation" }, q.it.sit ? "📍 " + q.it.sit : "📍 Siz shuni aytmoqchisiz: «" + plainUz(q.it.uz) + "»")
        ];
      }
      show(placeHeader("🎯 Darajangizni bilib oling", "#/daraja"),
        progressBar(Math.round((asked / total) * 100)),
        h("p", { class: "count" }, (asked + 1) + " / " + total),
        body,
        h("div", { class: "options" }, opts),
        h("p", { class: "hint" }, "Vaqt cheklanmagan. Bilmasangiz, «Bilmayman»ni bosing — taxmin qilish shart emas."));
    }
    render();
  }

  function placementResult(id, rows, first) {
    newView();
    window.scrollTo(0, 0);
    const L = R.levelById[id];
    const extra = { suggested: id, scores: {} };
    rows.forEach(r => { extra.scores[r.id] = r.s.ok + "/" + r.s.asked; });
    const listBox = h("div");
    function chooseOther() {
      listBox.textContent = "";
      add(listBox, [
        h("p", { class: "section-label" }, "Darajani tanlang"),
        R.levels.filter(hasContent).map(x => h("button", { type: "button", class: "tile wide place-choice",
          onclick: () => finishPlacement(x.id, "test", extra) },
          h("span", { class: "tile-ic place-lvl", style: "background:" + x.color, "aria-hidden": "true" }, x.name),
          h("span", { class: "tile-title" }, x.name + " — " + x.desc),
          x.id === id ? h("span", { class: "tile-sub" }, "⭐ Sizga tavsiya etilgan") : null))
      ]);
      listBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    show(placeHeader("🎯 Natija", "#/daraja"),
      h("div", { class: "done" },
        h("div", { class: "big-ic", "aria-hidden": "true" }, "🎉"),
        h("p", { class: "hint" }, "Sizga tavsiya etilgan daraja:"),
        h("p", { class: "score", style: "color:" + L.color }, L.name),
        h("p", null, h("strong", null, L.name + " — " + L.desc + ": "), PLACE_ABOUT[id] || "")),
      h("ul", { class: "status-list" },
        first > 0 ? h("li", null, "A1 — tekshirilmadi («Yaxshi bilaman»)") : null,
        rows.map(r => h("li", null, levelName(r.id) + ": " + r.s.ok + " / " + r.s.asked + " to‘g‘ri" + (r.s.ok >= 3 ? " ✅" : "")))),
      btn("✅", "Shu darajadan boshlash", () => finishPlacement(id, "test", extra), "primary big"),
      btn("📋", "Boshqa darajani tanlash", chooseOther, "big"),
      listBox,
      placementPending ? null : h("p", { class: "hint" }, "Natijalaringiz o‘chmaydi. Darajani bosh sahifada xohlagan vaqt almashtirishingiz mumkin."));
  }

  function placementRoute(p) {
    if (p[1] === "test") return placementCheck(p[2]);
    return placementIntro();
  }

  /* =====================================================================
     Router
     ===================================================================== */
  let ready = false;
  let screenNow = "";

  /* Bundles a screen needs before it can be drawn. Search, ⭐ Saqlanganlar, Takrorlash and the level check
     use every level; the other screens need Kasblar + the chosen level (or the level of the opened content). */
  function needs(p) {
    const one = id => (bundleById[id] ? [bundleById[id]] : []);
    const base = one("shared").concat(one(level().id));
    const src = ["learn", "cards", "quiz"].includes(p[0]);
    if (["search", "saved", "review"].includes(p[0]) || (p[0] === "daraja" && p[1] === "test") || (src && p[1] === "f")) return BUNDLES;
    if (["daraja", "help", "ai"].includes(p[0])) return [];
    if (p[0] === "leveltest") return one(p[1]);
    if (src && p[1] === "l") return one(p[2]);
    const id = p[1];
    const known = !id ? true
      : src ? !!srcOf(p[1], p[2])
      : p[0] === "topic" || p[0] === "dialogs" || p[0] === "dialog" ? !!R.topicById[id]
      : p[0] === "job" ? !!R.jobById[id]
      : p[0] === "words" ? !!R.listById[id]
      : p[0] === "short" || p[0] === "sq" ? !!R.shortcutById[id]
      : p[0] === "listen" || p[0] === "live" || p[0] === "lq" ? !!R.listeningById[id]
      : p[0] === "speak" ? !!R.speakingById[id]
      : true;
    return known ? base : BUNDLES; // a link to another level's content: wait for everything
  }

  /* All levels arrived while the app is open: refresh the bottom badges and the home screen numbers. */
  function refreshScreenAfterLoad() {
    if (!ready) return;
    updateBottomNav(screenNow);
    if (screenNow === "home" && app.querySelector(".hero")) {
      const y = window.scrollY;
      newView();
      quietShow = true;
      try { home(); } finally { quietShow = false; }
      window.scrollTo(0, y);
    }
  }

  function route() {
    if (!ready) return;
    newView();
    window.scrollTo(0, 0);
    const p = (location.hash || "").replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    screenNow = p[0] || "home";
    updateBottomNav(screenNow);
    if (p[0] !== "daraja") document.body.classList.remove("placing");
    const wait = needs(p).filter(b => b.state !== "done");
    if (wait.length) return loadingView(wait, route);
    switch (p[0]) {
      case "daraja": return placementRoute(p);
      case "topics": return topicsScreen();
      case "group": return groupScreen(p[1]);
      case "jobs": return jobsScreen();
      case "job": return jobRoute(p[1]);
      case "search": return searchScreen();
      case "saved": return savedScreen();
      case "review": return reviewRoute();
      case "topic": return topicScreen(p[1]);
      case "learn": return learnRoute(p[1], p[2], p[3]);
      case "cards": return cardsRoute(p[1], p[2]);
      case "quiz": return quizRoute(p[1], p[2]);
      case "dialogs": return dialogsList(p[1]);
      case "dialog": return dialogScreen(p[1], +p[2]);
      case "words": return p[1] ? wordsScreen(p[1]) : wordListsScreen();
      case "listen": return p[1] ? listenText(p[1]) : listenScreen();
      case "lq": return listenQuiz(p[1]);
      case "live": return p[1] ? listenText(p[1]) : liveScreen();
      case "short": return shortScreen(p[1]);
      case "sq": return shortQuiz(p[1]);
      case "speak": return p[1] ? speakTask(p[1]) : speakScreen();
      case "test": return testScreen();
      case "leveltest": return levelTestRoute(p[1], p[2]);
      case "lesson": return lessonRoute();
      case "ai": return aiScreen();
      case "help": return helpScreen();
      default: return placementPending ? redirect("#/daraja") : home();
    }
  }

  /* Start: Kasblar + the chosen level (A1 for a new user), then the first screen, then the other levels. */
  if (!BUNDLES.length) {
    show(h("div", { class: "load-box load-error", role: "alert" },
      h("h2", null, "Yuklab bo‘lmadi"),
      h("p", null, "Darslar ro‘yxati topilmadi. Sahifani yangilang.")));
    return;
  }
  loadingView([bundleById.shared, bundleById[level().id]].filter(Boolean), () => {
    buildBottomNav();
    ready = true;
    route();
    loadRest();
  });
})();
