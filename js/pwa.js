/* Installable app support: registers the service worker (sw.js) and shows
   "Yangi versiya bor" when a new version has been downloaded. */
(function () {
  "use strict";

  // Service workers only work on a real website (https or localhost), not from a file on disk.
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;

  let userAskedReload = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (userAskedReload) location.reload(); // progress is in localStorage, so it survives the reload
  });

  function showUpdate(worker) {
    if (document.querySelector(".update-bar")) return;
    const bar = document.createElement("div");
    bar.className = "update-bar";
    bar.setAttribute("role", "status");

    const text = document.createElement("span");
    text.textContent = "Yangi versiya bor";

    const go = document.createElement("button");
    go.type = "button";
    go.textContent = "Yangilash";
    go.onclick = () => {
      userAskedReload = true;
      go.disabled = true;
      worker.postMessage("skipWaiting");
    };

    const close = document.createElement("button");
    close.type = "button";
    close.className = "x";
    close.textContent = "✕";
    close.setAttribute("aria-label", "Yopish");
    close.onclick = () => bar.remove();

    bar.append(text, go, close);
    document.body.appendChild(bar);
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(reg => {
      if (reg.waiting && navigator.serviceWorker.controller) showUpdate(reg.waiting);
      reg.addEventListener("updatefound", () => {
        const w = reg.installing;
        if (!w) return;
        w.addEventListener("statechange", () => {
          if (w.state === "installed" && navigator.serviceWorker.controller) showUpdate(w);
        });
      });
      // Look for a new version whenever the app comes back to the screen.
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") reg.update().catch(() => {});
      });
    }).catch(() => { /* app still works, just not offline */ });
  });
})();
