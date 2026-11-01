/*
  Service worker: keeps a copy of every app file on the phone, so the app opens without internet.

  IMPORTANT: change VERSION every time you publish changes. That is how phones notice
  the update and show "Yangi versiya bor". Saved progress (localStorage) is never touched here.
*/
const VERSION = "2026-11-01-4";
const CACHE = "ruscha-" + VERSION;

importScripts("data/build/levels.js"); // defines RUSCHA_BUNDLES: one content file per level (made by tools/build-data.js)

/* The app itself, plus the content bundles (a new bundle has a new ?v=, so no old copy is ever used). */
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/style.css",
  "fonts/manrope-latin.woff2",
  "fonts/manrope-latin-ext.woff2",
  "fonts/manrope-cyrillic.woff2",
  "js/speech.js",
  "js/app.js",
  "js/pwa.js",
  "data/build/levels.js",
  "icons/favicon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png"
].concat((self.RUSCHA_BUNDLES || []).map(b => b.file + "?v=" + b.v));

/* Put all files into a new cache. The new version waits until the user taps "Yangilash".
   First visit: js/pwa.js starts this only after the app has loaded every level, so the files are
   taken from the browser's own cache (nothing is downloaded twice, the first screen is not slowed down).
   Update: fresh copies are downloaded in the background while the old version keeps working. */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      const update = keys.some(k => k.startsWith("ruscha-"));
      return caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: update ? "reload" : "default" }))));
    })
  );
});

/* Delete caches of older versions. */
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("ruscha-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* js/pwa.js sends this when the user taps "Yangilash". */
self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

/* Answer from the cache first; fall back to the internet (and remember the answer). */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(c =>
      c.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req)
        .then(res => {
          if (res.ok) c.put(req, res.clone());
          return res;
        })
        .catch(() => (req.mode === "navigate" ? c.match("index.html") : Response.error())))
    )
  );
});
