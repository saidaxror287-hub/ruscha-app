/* Rusbek — app logic. Plain JavaScript, no build step. */
(function () {
  "use strict";

  /* =====================================================================
     Content registry. Each file in data/ calls Ruscha.addTopic, addWords, addListening or addTest.
     Everything a file adds belongs to the level that file is listed under in data/levels.js
     (Kasblar files belong to no level and are shown at every level).
     ===================================================================== */
  const R = (window.Ruscha = {
    levels: window.RUSCHA_LEVELS || [], levelById: {},
    topics: [], topicById: {}, lists: [], listById: {}, listening: [], listeningById: {}, tests: {},
    items: {}, loadErrors: []
  });
  R.levels.forEach(l => { R.levelById[l.id] = l; });
  let loadingLevel = ""; // level of the file being loaded right now

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

  function addItem(kind, ru, pr, uz, sit, src) {
    const id = kind + ":" + sn(ru);
    if (R.items[id]) return R.items[id];
    const it = { id, kind, ru, pr: pr || "", uz: uz || "", sit: sit || "", src, level: src.level };
    it.search = sn(ru + " " + it.pr + " " + it.uz);
    R.items[id] = it;
    return it;
  }

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
    t.soon = t.items.length === 0;
    R.topics.push(t);
    R.topicById[t.id] = t;
  };

  R.addWords = function (l) {
    if (!l || !l.id || R.listById[l.id]) return;
    l.kind = "w";
    l.level = loadingLevel;
    l.items = [];
    l.groups = (l.groups || []).map(g => {
      const items = g.words.map(w => addItem("w", w[0], w[1], w[2], "", l));
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
    x.questions = x.questions || [];
    R.listening.push(x);
    R.listeningById[x.id] = x;
  };

  /* Level test: questions [{ q, audio?, text?, options, answer, full?, pr, uz }]. */
  R.addTest = function (x) {
    if (!x || !loadingLevel) return;
    x.level = loadingLevel;
    R.tests[loadingLevel] = x;
  };

  /* Load every file from data/levels.js, one after another (works from file://). */
  function loadFiles(done) {
    const files = (window.RUSCHA_SHARED || []).map(f => ({ f, level: "" }))
      .concat(...R.levels.map(l => l.files.map(f => ({ f, level: l.id }))));
    let i = 0;
    (function next() {
      if (i >= files.length) { loadingLevel = ""; return done(); }
      const f = files[i].f;
      loadingLevel = files[i++].level;
      const s = document.createElement("script");
      s.src = f;
      s.onload = next;
      s.onerror = () => { R.loadErrors.push(f); next(); };
      document.body.appendChild(s);
    })();
  }

  /* =====================================================================
     Progress (localStorage) and spaced repetition (SM-2 style)
     ===================================================================== */
  const KEY = "ruscha_progress_v1";
  function blank() { return { cards: {}, streak: 0, lastDay: -1, lessonDay: -1 }; }
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
      .filter(id => R.items[id] && S.cards[id].d <= t)
      .sort((a, b) => S.cards[a].d - S.cards[b].d)
      .map(id => R.items[id]);
  }
  function learnedCount() { return Object.keys(S.cards).filter(id => R.items[id]).length; }
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
  function newView() { viewTok++; Speech.stopAll(); }
  function show() {
    app.textContent = "";
    add(app, Array.from(arguments));
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

  function toast(text) {
    const old = document.querySelector(".toast");
    if (old) old.remove();
    const t = h("div", { class: "toast", role: "status" }, text);
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
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
  function phraseBox(it, big) {
    return h("div", { class: "phrase" + (big ? " big" : "") },
      h("div", { class: "ru", lang: "ru" }, it.ru),
      it.pr ? h("div", { class: "pr" }, h("span", { class: "lbl" }, "Aytilishi: "), it.pr) : null,
      it.uz ? h("div", { class: "uz" }, h("span", { class: "lbl" }, "Ma’nosi: "), it.uz) : null);
  }
  function itemRow(it, note) {
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
    return kind === "w" ? R.listById[id] : R.topicById[id];
  }
  function backOf(s) { return s.kind === "l" ? "#/test" : s.kind === "w" ? "#/words/" + s.id : "#/topic/" + s.id; }
  function noun(s) { return s.kind === "w" ? "so‘z" : "ibora"; }

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
    const own = shuffle(it.src.items.slice());
    const all = shuffle(Object.values(R.items).filter(x => x.kind === it.kind && x.src !== it.src));
    return pickOthers(it, own.concat(all), keyFn, 3);
  }

  function qListen(it) {
    const opts = [it].concat(distractors(it, x => sn(x.uz)));
    return {
      title: "🎧 Tinglang va ma’nosini tanlang",
      audio: it.ru,
      options: shuffle(opts.map(x => ({ text: x.uz, ok: x === it }))),
      reveal: it
    };
  }
  function qSituation(it) {
    const opts = [it].concat(distractors(it, x => sn(x.uz)));
    return {
      title: "🤔 Bu vaziyatda nima deysiz?",
      prompt: h("div", { class: "situation" }, "📍 ", it.sit),
      options: shuffle(opts.map(x => ({ text: x.ru, sub: x.pr, ok: x === it, ru: true }))),
      reveal: it
    };
  }
  function qTranslate(it) {
    const opts = [it].concat(distractors(it, x => sn(x.uz)));
    return {
      title: "🔤 Ruscha qanday bo‘ladi?",
      prompt: h("div", { class: "ask-uz" }, "«" + it.uz + "»"),
      options: shuffle(opts.map(x => ({ text: x.ru, sub: x.pr, ok: x === it, ru: true }))),
      reveal: it
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
      reveal: p.a
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
      micWidget(it.ru)
    ];
  }

  function cardView(it, onGrade) {
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
        h("p", { class: "hint" }, "Buni qanchalik yaxshi bilasiz?"),
        h("div", { class: "grades" },
          btn("✅", "Bilaman", () => onGrade(5), "ok big"),
          btn("🤔", "Qiyin", () => onGrade(3), "warn big"),
          btn("❌", "Bilmayman", () => onGrade(1), "bad big"))
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
    if (q.audio) {
      top.push(soundRow(q.audio, q.role));
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
    const st = { i: 0, steps: cfg.steps, ok: 0, asked: 0, grades: { 5: 0, 3: 0, 1: 0 }, requeued: {} };
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
          const times = st.requeued[s.item.id] || 0;
          if (q === 1 && times < 2) {
            st.requeued[s.item.id] = times + 1;
            st.steps.splice(Math.min(st.i + 4, st.steps.length), 0, { type: "card", item: s.item, repeat: true });
          }
          next();
        }));
      } else {
        frame(quizView(s.q, ok => { st.asked++; if (ok) st.ok++; markActive(); }, next));
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
  function hasContent(L) { return levelItems(L).length > 0 || ofLevel(L, R.listening).length > 0 || !!R.tests[L.id]; }
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

  function planLesson() {
    const L = level();
    if (!hasContent(L)) return { reviews: [], fresh: [] };
    const reviews = dueItems().filter(i => inLevel(i, L)).slice(0, 15);
    const phrases = levelTopics(L).concat(R.topics.filter(t => !t.level)).flatMap(t => t.items).filter(i => !S.cards[i.id]);
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
    if (s.kind === "w") return [levelName(s.level) + " · So‘zlar", s.title];
    return placeOf(s).crumbs.concat(s.title);
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
        h("span", { class: "lvl-sub" }, hasContent(L) ? levelPct(L) + "%" : "Tez orada"))));
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
    const jobs = R.topics.filter(t => t.section === "kasblar");
    const test = R.tests[L.id];
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
        h("span", { class: "continue-text" }, "Davom ettirish: " + last.title),
        h("span", { class: "continue-arrow", "aria-hidden": "true" }, "→")) : null,
      h("p", { class: "section-label" }, L.name + " · Bo‘limlar"),
      ready ? null : soonBox(L),
      h("div", { class: "home-nav" },
        topics.length ? navButton("📂", "Mavzular", topics.length + " ta mavzu: " + topics.slice(0, 3).map(t => t.title.split(" ")[0]).join(", ") + "…",
          "#/topics", "O‘rganilgan: " + seenIn(topicItems) + " / " + topicItems.length) : null,
        lists.length ? navButton("📚", "So‘zlar", wordItems.length + " ta eng kerakli so‘z (" + L.name + ")",
          "#/words", "O‘rganilgan: " + seenIn(wordItems) + " / " + wordItems.length) : null,
        texts.length || dialogs ? navButton("🎧", "Tinglash",
          [texts.length ? texts.length + " ta matn" : "", dialogs ? dialogs + " ta suhbat" : ""].filter(Boolean).join(" · "), "#/listen") : null,
        ready ? navButton("✅", "Test", test ? test.questions.length + " savollik daraja testi va mashqlar" : "Aralash mashq testi", "#/test",
          S.tests && S.tests[L.id] != null ? "Eng yaxshi natija: " + S.tests[L.id] + "%" : null) : null,
        jobs.length ? navButton("👷", "Kasblar", jobs.length + " ta kasb: quruvchi, kuryer, taksi… (barcha darajalar uchun)", "#/jobs") : null),
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
    show(header("👷 Kasblar", "#/"),
      h("p", { class: "hint" }, "Kasbingizni tanlang: ishda eshitadigan va aytadigan iboralar."),
      h("div", { class: "tiles" }, R.topics.filter(t => t.section === "kasblar").map(topicTile)));
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

  function listenText(id) {
    const x = R.listeningById[id];
    if (!x) return redirect("#/listen");
    const v = viewTok;
    let playTok = 0;
    const rows = x.lines.map(l => {
      const b = h("div", { class: "bubble a", role: "button", tabindex: "0" },
        h("div", { class: "ru", lang: "ru" }, l.ru),
        h("div", { class: "pr" }, l.pr),
        h("div", { class: "uz" }, l.uz));
      b.addEventListener("click", () => { playTok++; Speech.speak(l.ru); });
      return b;
    });
    const text = h("div", { class: "chat", hidden: true }, rows);
    async function playAll(slow) {
      const my = ++playTok;
      for (let k = 0; k < rows.length; k++) {
        if (my !== playTok || v !== viewTok) return;
        rows.forEach(e => e.classList.remove("active"));
        rows[k].classList.add("active");
        if (!text.hidden) rows[k].scrollIntoView({ block: "nearest", behavior: "smooth" });
        await Speech.speak(x.lines[k].ru, { slow });
        await wait(350);
      }
      if (my === playTok) rows.forEach(e => e.classList.remove("active"));
    }
    const toggleLabel = h("span", null, "Matnni ko‘rsatish");
    const toggle = h("button", { type: "button", class: "btn", onclick: () => {
      text.hidden = !text.hidden;
      toggleLabel.textContent = text.hidden ? "Matnni ko‘rsatish" : "Matnni yashirish";
    } }, h("span", { class: "ic", "aria-hidden": "true" }, "👁"), toggleLabel);
    show(header((x.icon || "📻") + " " + x.title, "#/listen", [levelName(x.level) + " · Tinglash"]),
      x.about ? h("p", { class: "hint" }, x.about) : null,
      h("p", { class: "hint" }, "1. Matnni tinglang (bir necha marta bo‘lsa ham). 2. Savollarga javob bering. Qiyin bo‘lsa, matnni oching."),
      btn("▶", "Matnni tinglash", () => playAll(false), "primary big"),
      h("div", { class: "grid2" },
        btn("🐢", "Sekin tinglash", () => playAll(true)),
        toggle),
      text,
      x.questions.length ? btn("✅", "Savollarga javob berish (" + x.questions.length + " ta)", () => go("#/lq/" + x.id), "ok big") : null);
  }

  /* A question written in a data file: { q, audio?, text?, options, answer } → quizView format. */
  function fileQuestion(q, reveal) {
    return {
      title: q.q,
      audio: q.audio || null,
      prompt: q.text ? h("div", { class: "ask-uz", lang: "ru" }, q.text) : null,
      options: shuffle(q.options.map((o, k) => ({ text: o, ok: k === q.answer, ru: /[а-яё]/i.test(o) }))),
      reveal
    };
  }

  function listenQuiz(id) {
    const x = R.listeningById[id];
    if (!x || !x.questions.length) return redirect("#/listen");
    runSession({
      title: "✅ Savollar",
      back: "#/listen/" + x.id,
      crumbs: [levelName(x.level) + " · Tinglash", x.title],
      steps: x.questions.map(q => ({ type: "quiz", q: fileQuestion(q, x.lines[q.line] || x.lines[0]) })),
      finish: st => {
        S.listen = S.listen || {};
        S.listen[x.id] = Math.max(S.listen[x.id] || 0, st.ok);
        save();
        return doneView("🏁", "Barakalla!", [
          h("p", { class: "score" }, st.ok + " / " + st.asked),
          st.ok === st.asked ? "Hammasi to‘g‘ri! 🌟" : "Matnni yana bir marta tinglab, qaytadan urinib ko‘ring."
        ], [
          btn("🎧", "Matnni qayta tinglash", () => goBack("#/listen/" + x.id), "primary big"),
          btn("📻", "Boshqa matnlar", () => go("#/listen"))
        ]);
      }
    });
  }

  /* ✅ Test: the level test (data/<level>/test.js) and a mixed practice test from the level's items. */
  function testScreen() {
    const L = level();
    const T = R.tests[L.id];
    const items = levelItems(L);
    const head = header("✅ Test", "#/", [L.name]);
    if (!T && !items.length) return show(head, soonBox(L));
    const best = S.tests && S.tests[L.id];
    show(head,
      T ? navButton("🎓", L.name + " daraja testi", T.questions.length + " ta savol: tinglash va to‘g‘ri javobni tanlash",
        "#/leveltest/" + L.id, best != null ? "Eng yaxshi natija: " + best + "%" : null) : null,
      items.length ? navButton("🔀", "Aralash mashq", "10 ta savol — " + L.name + " iboralari va so‘zlaridan", "#/quiz/l/" + L.id) : null,
      h("p", { class: "hint" }, "Test faqat o‘zingiz uchun. Hech narsa yopilmaydi — xohlagan darajani o‘rganishingiz mumkin."));
  }

  function levelTestRoute(id) {
    const L = R.levelById[id];
    const T = R.tests[id];
    if (!L || !T || !T.questions.length) return redirect("#/test");
    runSession({
      title: "🎓 " + L.name + " daraja testi",
      back: "#/test",
      crumbs: [L.name + " · Test"],
      steps: T.questions.map(q => ({ type: "quiz", q: fileQuestion(q, { ru: q.full || q.audio || q.text || "", pr: q.pr || "", uz: q.uz || "" }) })),
      finish: st => {
        const pct = st.asked ? Math.round((st.ok / st.asked) * 100) : 0;
        S.tests = S.tests || {};
        S.tests[id] = Math.max(S.tests[id] || 0, pct);
        save();
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
      here.forEach(it => add(results, itemRow(it, "📂 " + it.src.title)));
      if (other.length) {
        add(results, h("p", { class: "results-head" }, "Boshqa darajalarda: " + other.length + " ta"));
        other.forEach(it => add(results, itemRow(it, "📂 " + levelName(it.level) + " · " + it.src.title)));
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

  /* Fixed bottom bar, shown on every screen. */
  const NAV = [
    ["home", "🏠", "Bosh sahifa", "#/"],
    ["review", "🔁", "Takrorlash", "#/review"],
    ["search", "🔍", "Qidirish", "#/search"],
    ["help", "❓", "Yordam", "#/help"]
  ];
  const navBtns = {};
  let dueBadge = null;
  function buildBottomNav() {
    const nav = h("nav", { class: "bottom-nav", "aria-label": "Asosiy menyu" });
    NAV.forEach(([key, icon, label, hash]) => {
      const badge = key === "review" ? (dueBadge = h("span", { class: "badge", hidden: true })) : null;
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
      h("p", { class: "topic-progress" }, "O‘rganilgan: " + seen + " / " + t.items.length),
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
    const items = group ? group.items : nextChunk(s.items, 10);
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
        group ? null : btn("➜", "Yana 10 ta", () => route()),
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
        "Qiyin so‘zlar ertaga yana chiqadi."
      ], [
        btn("✅", "Test topshirish", () => go("#/quiz/" + kind + "/" + id), "primary big"),
        btn("⬅", "Orqaga", () => goBack(backOf(s)))
      ])
    });
  }

  function quizRoute(kind, id) {
    const s = srcOf(kind, id);
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
        btn("▶", "Suhbatni tinglash", () => playAll(false), "primary big"),
        btn("🐢", "Sekin tinglash", () => playAll(true)),
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

    show(header("❓ Yordam", "#/"),
      h("h2", null, "Matn o‘lchami"),
      h("div", { class: "size-picker", role: "group", "aria-label": "Matn o‘lchami" }, sizeBtns),
      h("h2", null, "Qanday o‘rganish kerak?"),
      h("ol", { class: "steps" },
        h("li", null, "Yuqoridagi A1, A2, B1… tugmalari bilan darajangizni tanlang. Hech narsa yopilmagan."),
        h("li", null, "Har kuni «Bugungi dars» tugmasini bosing. 10 daqiqa yetarli."),
        h("li", null, "🔊 Tinglang, keyin ovoz chiqarib takrorlang. 🐢 tugmasi sekin aytadi."),
        h("li", null, "🎤 «Gapiring» tugmasini bosib, ruscha ayting — dastur sizni tekshiradi."),
        h("li", null, "Kartochkalarda halol javob bering: «Bilaman», «Qiyin» yoki «Bilmayman». Qiyin iboralar tez-tez qaytadi."),
        h("li", null, "Mavzulardagi «Suhbatlar»da rol o‘ynab, haqiqiy vaziyatga tayyorlaning."),
        h("li", null, "Pastdagi tugmalar har doim ko‘rinadi: 🏠 Bosh sahifa, 🔁 Takrorlash, 🔍 Qidirish, ❓ Yordam. «⬅ Orqaga» bir qadam orqaga qaytaradi.")),
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
      h("h2", null, "Natijalaringiz"),
      h("p", null, "Natijalaringiz faqat shu qurilmada, shu brauzerda saqlanadi. Ro‘yxatdan o‘tish shart emas. Dastur bepul."),
      resetBox);
  }

  /* =====================================================================
     Router
     ===================================================================== */
  let ready = false;
  function route() {
    if (!ready) return;
    newView();
    window.scrollTo(0, 0);
    const p = (location.hash || "").replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    updateBottomNav(p[0] || "home");
    switch (p[0]) {
      case "topics": return topicsScreen();
      case "group": return groupScreen(p[1]);
      case "jobs": return jobsScreen();
      case "search": return searchScreen();
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
      case "test": return testScreen();
      case "leveltest": return levelTestRoute(p[1]);
      case "lesson": return lessonRoute();
      case "ai": return aiScreen();
      case "help": return helpScreen();
      default: return home();
    }
  }

  loadFiles(() => {
    buildBottomNav();
    ready = true;
    route();
  });
})();
