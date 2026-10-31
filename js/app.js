/* Rusbek — app logic. Plain JavaScript, no build step. */
(function () {
  "use strict";

  /* =====================================================================
     Content registry. Each file in data/ calls Ruscha.addTopic or Ruscha.addWords.
     ===================================================================== */
  const R = (window.Ruscha = { topics: [], topicById: {}, lists: [], listById: {}, items: {}, loadErrors: [] });

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
    const it = { id, kind, ru, pr: pr || "", uz: uz || "", sit: sit || "", src };
    it.search = sn(ru + " " + it.pr + " " + it.uz);
    R.items[id] = it;
    return it;
  }

  R.addTopic = function (t) {
    if (!t || !t.id || R.topicById[t.id]) return;
    t.kind = "t";
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
    l.items = [];
    l.groups = (l.groups || []).map(g => {
      const items = g.words.map(w => addItem("w", w[0], w[1], w[2], "", l));
      l.items.push(...items);
      return { theme: g.theme, icon: g.icon || "", items };
    });
    R.lists.push(l);
    R.listById[l.id] = l;
  };

  /* Load every file listed in data/index.js, one after another (works from file://). */
  function loadFiles(files, done) {
    let i = 0;
    (function next() {
      if (i >= files.length) return done();
      const f = files[i++];
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
  }
  function later(fn, ms) {
    const v = viewTok;
    setTimeout(() => { if (v === viewTok) fn(); }, ms);
  }
  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function header(title, back) {
    return h("header", { class: "top" },
      back ? h("button", { type: "button", class: "back", onclick: () => go(back) }, "⬅ Orqaga") : null,
      h("h1", null, title));
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
  function srcOf(kind, id) { return kind === "w" ? R.listById[id] : R.topicById[id]; }
  function backOf(s) { return s.kind === "w" ? "#/words/" + s.id : "#/topic/" + s.id; }
  function noun(s) { return s.kind === "w" ? "so‘z" : "ibora"; }

  /* =====================================================================
     Speaking check
     ===================================================================== */
  function judge(expected, res) {
    if (res.error) {
      if (res.error === "aborted") return { cls: "", nodes: [] };
      const denied = "🎤 Mikrofonga ruxsat berilmagan. Brauzer so‘raganda «Ruxsat berish» (Allow) tugmasini bosing.";
      const msg = {
        "not-allowed": denied,
        "service-not-allowed": denied,
        "network": "🌐 Ovozni tekshirish uchun internet kerak.",
        "audio-capture": "🎤 Mikrofon topilmadi. Mikrofon ulanganini tekshiring.",
        "no-speech": "🙉 Ovoz eshitilmadi. Mikrofonga yaqinroq bo‘lib, balandroq gapiring."
      }[res.error] || "🙉 Ovozni tanib bo‘lmadi. Qaytadan urinib ko‘ring.";
      return { cls: "warn", nodes: [msg] };
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
      show(header(cfg.title, cfg.back), progressBar(pct),
        h("p", { class: "count" }, (st.i + 1) + " / " + st.steps.length), body);
    }
    function next() { st.i++; render(); }
    function render() {
      newView();
      window.scrollTo(0, 0);
      if (st.i >= st.steps.length) {
        show(header(cfg.title, cfg.back), cfg.finish(st));
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
  function planLesson() {
    const reviews = dueItems().slice(0, 15);
    const phrases = R.topics.flatMap(t => t.items).filter(i => !S.cards[i.id]);
    const words = R.lists.flatMap(l => l.items).filter(i => !S.cards[i.id]);
    let nP = Math.min(4, phrases.length);
    let nW = Math.min(2, words.length);
    if (nW < 2) nP = Math.min(6 - nW, phrases.length);
    if (nP < 4) nW = Math.min(6 - nP, words.length);
    return { reviews, fresh: phrases.slice(0, nP).concat(words.slice(0, nW)) };
  }

  function home() {
    const plan = planLesson();
    const doneToday = S.lessonDay === today();
    let sub;
    if (!plan.reviews.length && !plan.fresh.length) sub = "Hamma narsa takrorlandi! Ertaga yana keling.";
    else if (doneToday) sub = "✓ Bugungi dars bajarildi. Yana mashq qilsangiz bo‘ladi.";
    else sub = plan.reviews.length + " ta takrorlash · " + plan.fresh.length + " ta yangi ibora";

    const voiceNote = h("div");
    later(() => {
      const st = Speech.status();
      if (!st.tts) {
        add(voiceNote, h("p", { class: "note" }, "🔇 Bu brauzer ovoz chiqara olmaydi. Ilovani Google Chrome yoki Microsoft Edge brauzerida oching."));
      } else if (st.loaded && !st.ru) {
        add(voiceNote, h("p", { class: "note" }, "🔇 Ruscha ovoz topilmadi. Google Chrome yoki Microsoft Edge brauzerida, internetga ulangan holda oching."));
      }
    }, 1500);

    const input = h("input", { type: "search", id: "search", placeholder: "Masalan: rahmat yoki спасибо", autocomplete: "off" });
    const results = h("div", { class: "results" });
    const main = h("div");
    let timer = null;
    function runSearch() {
      const q = sn(input.value);
      results.textContent = "";
      main.hidden = !!q;
      clearBtn.hidden = !input.value;
      if (!q) return;
      const found = Object.values(R.items).filter(it => it.search.includes(q)).slice(0, 50);
      add(results, h("p", { class: "results-head" },
        found.length ? "🔍 Topildi: " + found.length + " ta" : "🔍 Hech narsa topilmadi. Boshqacha yozib ko‘ring."));
      found.forEach(it => add(results, itemRow(it, "📂 " + it.src.title)));
    }
    input.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(runSearch, 150); });
    const clearBtn = btn("✕", "Tozalash", () => { input.value = ""; runSearch(); input.focus(); }, "small");
    clearBtn.hidden = true;

    const topicTile = t => h("button", {
      type: "button", class: "tile" + (t.soon ? " soon" : ""), onclick: () => go("#/topic/" + t.id)
    },
      h("span", { class: "tile-ic", "aria-hidden": "true" }, t.icon || "📁"),
      h("span", { class: "tile-title" }, t.title),
      h("span", { class: "tile-sub" }, t.soon ? "⏳ Tez orada" : seenIn(t.items) + " / " + t.items.length));
    const jobs = R.topics.filter(t => t.section === "kasblar");

    add(main, [
      h("h2", null, "📂 Mavzular"),
      h("div", { class: "tiles" }, R.topics.filter(t => !t.section).map(topicTile)),
      jobs.length ? h("h2", null, "👷 Kasblar") : null,
      jobs.length ? h("div", { class: "tiles" }, jobs.map(topicTile)) : null,
      R.lists.length ? h("h2", null, "📚 So‘zlar") : null,
      R.lists.map(l => h("button", { type: "button", class: "tile wide", onclick: () => go("#/words/" + l.id) },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, l.icon || "📚"),
        h("span", { class: "tile-title" }, l.title),
        h("span", { class: "tile-sub" }, seenIn(l.items) + " / " + l.items.length + " ta so‘z"))),
      h("h2", null, "✨ Qo‘shimcha"),
      h("button", { type: "button", class: "tile wide", onclick: () => go("#/ai") },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, "🤖"),
        h("span", { class: "tile-title" }, "AI suhbatdosh"),
        h("span", { class: "tile-sub" }, "⏳ Tez orada")),
      R.loadErrors.length ? h("p", { class: "note" }, "⚠️ Ba’zi fayllar yuklanmadi: " + R.loadErrors.join(", ")) : null
    ]);

    show(
      h("header", { class: "top" },
        h("h1", null, "📘 Rusbek"),
        h("button", { type: "button", class: "help-link", onclick: () => go("#/help") }, "❓ Yordam")),
      h("p", { class: "subtitle" }, "Tinglang → Takrorlang → Gapiring → Takrorlab turing"),
      voiceNote,
      h("button", { type: "button", class: "lesson-btn", onclick: () => go("#/lesson") },
        h("span", { class: "lesson-title" }, "▶ Bugungi dars (10 daqiqa)"),
        h("span", { class: "lesson-sub" }, sub)),
      h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", null, String(learnedCount())), "📖 O‘rganilgan so‘zlar"),
        h("div", { class: "stat" }, h("b", null, String(streakNow())), "🔥 Ketma-ket kunlar")),
      h("div", { class: "search" },
        h("label", { for: "search" }, "🔍 Qidirish (ruscha yoki o‘zbekcha)"),
        h("div", { class: "search-row" }, input, clearBtn)),
      results,
      main);
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
    if (!t) return go("#/");
    const title = (t.icon || "") + " " + t.title;
    if (t.soon) {
      show(header(title, "#/"),
        h("div", { class: "soon-box" },
          h("div", { class: "big-ic", "aria-hidden": "true" }, "⏳"),
          h("h2", null, "Tez orada"),
          h("p", null, "Bu mavzu ustida ishlayapmiz. Hozircha boshqa mavzularni o‘rganing.")),
        btn("🏠", "Bosh sahifa", () => go("#/"), "primary big"));
      return;
    }
    const seen = seenIn(t.items);
    show(header(title, "#/"),
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
    if (!s || !s.items.length) return go("#/");
    const group = g != null && s.groups ? s.groups[+g] : null;
    const items = group ? group.items : nextChunk(s.items, 10);
    runSession({
      title: "🎧 " + (group ? group.theme : s.title),
      back: backOf(s),
      steps: items.map(item => ({ type: "learn", item })),
      finish: () => doneView("🎉", "Barakalla!", [
        items.length + " ta " + noun(s) + " tingladingiz va takrorladingiz.",
        "Endi kartochkalar bilan mustahkamlang."
      ], [
        btn("🃏", "Kartochkalar bilan takrorlash", () => go("#/cards/" + kind + "/" + id), "primary big"),
        group ? null : btn("➜", "Yana 10 ta", () => route()),
        btn("⬅", "Orqaga", () => go(backOf(s)))
      ])
    });
  }

  function cardsRoute(kind, id) {
    const s = srcOf(kind, id);
    if (!s || !s.items.length) return go("#/");
    const t = today();
    const due = s.items.filter(i => S.cards[i.id] && S.cards[i.id].d <= t);
    const fresh = s.items.filter(i => !S.cards[i.id]).slice(0, 10);
    const rest = s.items.filter(i => S.cards[i.id] && S.cards[i.id].d > t).sort((a, b) => S.cards[a.id].d - S.cards[b.id].d);
    const list = due.concat(fresh, rest).slice(0, 15);
    runSession({
      title: "🃏 " + s.title,
      back: backOf(s),
      steps: list.map(item => ({ type: "card", item })),
      finish: st => doneView("🎉", "Kartochkalar tugadi!", [
        "✅ Bilaman: " + st.grades[5] + " · 🤔 Qiyin: " + st.grades[3] + " · ❌ Bilmayman: " + st.grades[1],
        "Qiyin so‘zlar ertaga yana chiqadi."
      ], [
        btn("✅", "Test topshirish", () => go("#/quiz/" + kind + "/" + id), "primary big"),
        btn("⬅", "Orqaga", () => go(backOf(s)))
      ])
    });
  }

  function quizRoute(kind, id) {
    const s = srcOf(kind, id);
    if (!s || !s.items.length) return go("#/");
    const qs = buildQuiz(s.items, kind === "t" ? [s] : [], 10);
    runSession({
      title: "✅ Test: " + s.title,
      back: backOf(s),
      steps: qs.map(q => ({ type: "quiz", q })),
      finish: st => {
        const r = st.asked ? st.ok / st.asked : 0;
        const msg = r >= 0.8 ? "Ajoyib natija! 🌟" : r >= 0.5 ? "Yaxshi! Yana biroz mashq qiling." :
          "Hechqisi yo‘q! Iboralarni yana tinglab, qaytadan urinib ko‘ring.";
        return doneView("🏁", "Test tugadi!", [h("p", { class: "score" }, st.ok + " / " + st.asked), msg], [
          btn("🔁", "Yana test", () => route(), "primary big"),
          btn("⬅", "Orqaga", () => go(backOf(s)))
        ]);
      }
    });
  }

  function dialogsList(id) {
    const t = R.topicById[id];
    if (!t || !t.dialogues.length) return go("#/topic/" + id);
    show(header("💬 Suhbatlar", "#/topic/" + id),
      h("p", { class: "hint" }, "Suhbatni tanlang. Avval tinglang, keyin bitta rolni o‘zingiz gapiring."),
      t.dialogues.map((d, n) => h("button", { type: "button", class: "tile wide", onclick: () => go("#/dialog/" + id + "/" + n) },
        h("span", { class: "tile-ic", "aria-hidden": "true" }, "💬"),
        h("span", { class: "tile-title" }, d.title),
        h("span", { class: "tile-sub" }, d.a + " va " + d.b + " · " + d.lines.length + " ta gap"))));
  }

  function dialogScreen(id, n) {
    const t = R.topicById[id];
    const d = t && t.dialogues[n];
    if (!d) return go("#/");
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
      show(header("💬 " + d.title, back),
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
      show(header("🎭 Siz — " + name(me), back),
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
    if (!l) return go("#/");
    const seen = seenIn(l.items);
    show(header((l.icon || "📚") + " " + l.title, "#/"),
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
    show(header("🤖 AI suhbatdosh", "#/"),
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
    show(header("❓ Yordam", "#/"),
      h("h2", null, "Qanday o‘rganish kerak?"),
      h("ol", { class: "steps" },
        h("li", null, "Har kuni «Bugungi dars» tugmasini bosing. 10 daqiqa yetarli."),
        h("li", null, "🔊 Tinglang, keyin ovoz chiqarib takrorlang. 🐢 tugmasi sekin aytadi."),
        h("li", null, "🎤 «Gapiring» tugmasini bosib, ruscha ayting — dastur sizni tekshiradi."),
        h("li", null, "Kartochkalarda halol javob bering: «Bilaman», «Qiyin» yoki «Bilmayman». Qiyin iboralar tez-tez qaytadi."),
        h("li", null, "Mavzulardagi «Suhbatlar»da rol o‘ynab, haqiqiy vaziyatga tayyorlaning.")),
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
  function route() {
    newView();
    window.scrollTo(0, 0);
    const p = (location.hash || "").replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    switch (p[0]) {
      case "topic": return topicScreen(p[1]);
      case "learn": return learnRoute(p[1], p[2], p[3]);
      case "cards": return cardsRoute(p[1], p[2]);
      case "quiz": return quizRoute(p[1], p[2]);
      case "dialogs": return dialogsList(p[1]);
      case "dialog": return dialogScreen(p[1], +p[2]);
      case "words": return wordsScreen(p[1]);
      case "lesson": return lessonRoute();
      case "ai": return aiScreen();
      case "help": return helpScreen();
      default: return home();
    }
  }

  loadFiles(window.RUSCHA_FILES || [], () => {
    window.addEventListener("hashchange", route);
    route();
  });
})();
