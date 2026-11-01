# Rusbek — rus tili o‘zbeklar uchun

A simple Russian course app for Uzbek speakers. Plain HTML + JavaScript, no build step.
It works offline on phones (PWA) and is published on GitHub Pages.

## How the content is organised

```
data/
  levels.js          ← the list of levels and of every content file (start here)
  a1/
    topics/          phrase topics      (Ruscha.addTopic)
    words/           word lists         (Ruscha.addWords)
    listening/       listening texts    (Ruscha.addListening)
    test.js          level test         (Ruscha.addTest) — optional
  a2/  …same folders…
  b1/, b2/, c1/      (create them when you add content)
  kasblar/           job packs (one file per job, 3 tabs inside) — shown at every level
```

**Rules that keep users' saved progress working:**

- Never change the Russian text (`ru`) of a phrase or word that is already published:
  progress is saved under that text. Fixing `pr`, `uz` or `sit` is fine.
- Never use the same Russian phrase twice, not even in two different levels.
- Never change the storage key `ruscha_progress_v1` in `js/app.js`.

**Text rules:** `uz`, `pr` and `sit` are in Uzbek **Latin** only. If a phrase changes when a woman
says it, add a note at the end of `uz`, for example: `(ayol aytsa: «Я опоздала»)`.

---

## Add a topic

1. Copy a topic file of the same level, e.g. `data/a2/topics/uy-joy.js`, to a new name
   (`data/a2/topics/bozorda.js`).
2. Change `id` (unique, e.g. `"a2-bozor"`), `title`, `icon`, then the phrases and dialogues:
   - phrase: `{ ru, pr, uz, sit }` — `sit` (situation) is optional;
   - dialogue: `{ title, a, b, lines: [["a", ru, pr, uz], ["b", ru, pr, uz], …] }`;
   - template: `{ ru, pr, uz, ex: [...] }` — every `ex` must be one of the phrases, written exactly the same.
3. Add the file path to that level's `files` list in `data/levels.js`.
4. Only for A1: add the topic `id` to one of the `groups` in `data/levels.js`
   (levels without `groups` show their topics directly).

## Add a word list

1. Copy `data/a2/words/a2-part1.js` to e.g. `data/a2/words/a2-part2.js`.
2. Change `id` and `title`; fill `groups: [{ theme, icon, words: [[ru, pr, uz], …] }]`.
3. Add the path to the level's `files` list in `data/levels.js`.

## Add a listening text

1. Copy `data/a2/listening/kvartira.js` to a new file in the level's `listening` folder.
2. Change `id`, `title`, `icon`, `about`, the `lines` (`[ru, pr, uz]`) and the `questions`:
   `{ q, options: [...], answer, line }` — `answer` and `line` count from **0**
   (0 = first option / first line). The app shuffles the options.
3. Add the path to the level's `files` list in `data/levels.js`.

## Add or change a level test

`data/<level>/test.js` holds one test (see `data/a2/test.js`). Each question has `q`, `options`,
`answer`, plus either `audio` (a Russian sentence read aloud) or `text` (a sentence with `...`)
and `full` (the complete right sentence), and `pr` / `uz` for the explanation.
Add the file path to the level's `files` list.

A test can also be split into parts that are taken separately (see `data/b1/test.js`):
use `parts: [{ id, title, icon, desc, comments: { top, good, mid, low }, questions }]`
instead of `questions`. Each part has its own best score and an Uzbek comment by result
(85%+ / 70%+ / 50%+ / lower). A long `text` (a notice, a message) is shown as a reading passage.

## Add speaking tasks (🗣 Fikr bildiring)

`data/<level>/speaking/*.js` call `Ruscha.addSpeaking([...])` with tasks
`{ id, title, icon, q: [ru, pr, uz], phrases: [[ru, pr, uz], ...], sample: [[ru, pr, uz], ...] }`
(see `data/b1/speaking/fikr-1.js`). The section appears on the level's home screen as soon as the
level has tasks. The user records 30–60 seconds; the recording stays in memory only and is never
saved or sent. Only the longest recording time per task is stored in progress (`speak`).

## Add a new level (B1, B2, C1)

The levels are already listed in `data/levels.js` with empty `files` (shown as "Tez orada").

1. Create the folders `data/b1/topics`, `data/b1/words`, `data/b1/listening`.
2. Put files there (copy the A2 files as examples).
3. List every file in the `files` of `{ id: "b1", … }` in `data/levels.js`.

That's all: the level switch, sections, search and progress pick it up automatically.
To add a completely new level, add one more line like
`{ id: "c2", name: "C2", color: "#0f766e", desc: "…", files: [] }`.

## Job packs (Kasblar)

There is one "👷 Kasblar" button and one file per job in `data/kasblar/` (e.g. `kuryer.js`).
Inside each job there are 3 tabs, and each tab is its own part of the file:

| Tab key        | Shown as       | For levels | Topic id (progress)   |
|----------------|----------------|------------|-----------------------|
| `boshlangich`  | Boshlang‘ich   | A1–A2      | `kasb-kuryer`         |
| `orta`         | O‘rta          | B1         | `kasb-kuryer-orta`    |
| `yuqori`       | Yuqori         | B2 and up  | `kasb-kuryer-yuqori`  |

A job opens on the tab that matches the user's level; the user can switch tabs freely.
Every tab has its own progress, learning, cards, test and dialogues. A tab with no part shows "Tez orada".
(The tabs and their levels are listed in `JOB_TABS` at the top of `js/app.js`.)

A job file looks like this:

```js
Ruscha.addJob({ id: "kasb-kuryer", title: "Kuryer", icon: "🛵" });

Ruscha.addJobTab("kasb-kuryer", "boshlangich", { templates: [...], phrases: [...], dialogues: [...] });
Ruscha.addJobTab("kasb-kuryer", "orta", { phrases: [...], dialogues: [...] });
// Ruscha.addJobTab("kasb-kuryer", "yuqori", { ... });   <- not written yet
```

Phrases, dialogues and templates use the same format as topics (see "Add a topic").

**Fill a tab** (e.g. Yuqori): in the job's file, replace the `Tez orada` comment at the end with
`Ruscha.addJobTab("kasb-<job>", "yuqori", { phrases: [...], dialogues: [...] });`.
Don't repeat phrases from the job's other tabs (or anywhere else in the app).

**Add a new job:** copy `data/kasblar/quruvchi.js` to a new name, change the `id` (starting with `kasb-`)
in `addJob` and in every `addJobTab`, change `title`, `icon` and the content, then add the path to
`RUSCHA_SHARED` in `data/levels.js`.

**Never change** a job's `id` or the `ru` of a published phrase: saved progress depends on them.

---

## Try it on your computer

```
python -m http.server 8766
```

Then open http://localhost:8766 in Chrome or Edge.

## Publish an update

1. In `sw.js`, change `VERSION` (for example to today's date). Phones then show "Yangi versiya bor".
2. Commit and push to GitHub. GitHub Pages updates in about a minute.

Every file listed in `data/levels.js` must exist — if one is missing, phones cannot download the update.
