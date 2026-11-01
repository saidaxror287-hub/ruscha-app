// Rusbek Telegram bot — a Cloudflare Worker.
//
// Routes:
//   POST /webhook        Telegram sends updates here (checked with secret_token)
//   GET  /setup-webhook  Points Telegram at this Worker, sets commands + menu button
//   anything else        404
//
// Secrets: only BOT_TOKEN, stored with `npx wrangler secret put BOT_TOKEN`.
// The webhook secret is derived from BOT_TOKEN, so there is nothing else to manage.
// No user data is stored anywhere: each message is answered and forgotten.

const APP_URL = "https://saidaxror287-hub.github.io/ruscha-app/";
const BROWSER_URL = APP_URL + "?from=bot";
const BUTTON_TEXT = "📚 Ilovani ochish"; // other messages: one button
const TG_BUTTON_TEXT = "📚 Telegramda ochish";
const BROWSER_BUTTON_TEXT = "🔊 Brauzerda ochish (ovoz va mashq)";

const WELCOME = (ism) => `Assalomu alaykum, ${ism}! 👋

Rusbek — rus tilini bepul va grammatikasiz o‘rganing:

🎧 Tinglang, takrorlang, gapiring — kundalik hayot iboralari
📚 A1 dan B2 gacha: 70 mavzu va 4300+ so‘z
👷 Kasblar uchun iboralar: quruvchi, kuryer, haydovchi va boshqalar
🎤 Talaffuz va gapirish mashqlari, darajalar bo‘yicha testlar

🔊 Ovozli mashqlar uchun «Brauzerda ochish» tugmasini bosing (Chrome yoki Edge).

Boshlash uchun «Ilovani ochish» tugmasini bosing.`;

const APP_TEXT = "Rusbek ilovasini ochish uchun pastdagi tugmani bosing 👇";

const HELP_TEXT = `ℹ️ Rusbek’dan qanday foydalanish:

1️⃣ «Telegramda ochish» tugmasini yoki chap pastdagi menyu tugmasini bosing — ilova shu yerning o‘zida, Telegram ichida ochiladi.
2️⃣ Darajangizni tanlang: A1 (boshlang‘ich) dan B2 gacha. Mavzuni oching, iboralarni tinglang va takrorlang.
3️⃣ Yoqqan ibora yoki so‘zni ⭐ bilan saqlang — ular «⭐ Saqlanganlar» bo‘limida turadi, keyin takrorlab olasiz.
4️⃣ 🔊 Ovoz va 🎤 gapirish mashqlari Telegram ichida ishlamasligi mumkin. Ular uchun «Brauzerda ochish» tugmasini bosing — ilova Chrome yoki Edge’da ochiladi.

Buyruqlar:
/start — boshlash
/app — ilovani ochish
/help — yordam`;

const OTHER_TEXT = `Rahmat! 😊 Men faqat ilovani ochishga yordam beraman.
Rus tilini o‘rganish uchun pastdagi tugmani bosing 👇`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!env.BOT_TOKEN) {
      return new Response("BOT_TOKEN secret is not set", { status: 500 });
    }

    if (url.pathname === "/webhook" && request.method === "POST") {
      return handleWebhook(request, env);
    }

    if (url.pathname === "/setup-webhook" && request.method === "GET") {
      return setupWebhook(url, env);
    }

    return new Response("Not found", { status: 404 });
  },
};

async function handleWebhook(request, env) {
  // Only Telegram knows the secret, because we gave it to Telegram in setWebhook.
  const expected = await webhookSecret(env.BOT_TOKEN);
  const got = request.headers.get("X-Telegram-Bot-Api-Secret-Token") || "";
  if (!safeEqual(got, expected)) {
    return new Response("Forbidden", { status: 403 });
  }

  let update;
  try {
    update = await request.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  try {
    const msg = update.message;
    if (msg && msg.chat) {
      await answer(msg, env);
    }
  } catch (err) {
    // Log only the error, never the message content.
    console.error("reply failed:", err && err.message);
  }
  // Always 200, otherwise Telegram keeps re-sending the same update.
  return new Response("ok");
}

async function answer(msg, env) {
  const text = typeof msg.text === "string" ? msg.text.trim() : "";
  // "/start", "/start payload", "/start@RusbekBot" -> "start"
  const command = text.startsWith("/")
    ? text.slice(1).split(/[\s@]/)[0].toLowerCase()
    : "";

  let reply;
  let twoButtons = true;
  if (command === "start") {
    const ism = (msg.from && msg.from.first_name) || "do‘stim";
    reply = WELCOME(ism);
  } else if (command === "app") {
    reply = APP_TEXT;
  } else if (command === "help") {
    reply = HELP_TEXT;
  } else {
    reply = OTHER_TEXT;
    twoButtons = false;
  }

  await tg(env, "sendMessage", {
    chat_id: msg.chat.id,
    text: reply,
    reply_markup: twoButtons ? appButtons(msg.chat.type) : appButton(msg.chat.type),
  });
}

function appButton(chatType) {
  // Mini App (web_app) buttons only work in private chats; in groups use a link.
  const button =
    chatType === "private"
      ? { text: BUTTON_TEXT, web_app: { url: APP_URL } }
      : { text: BUTTON_TEXT, url: APP_URL };
  return { inline_keyboard: [[button]] };
}

// Two buttons, one per row: open inside Telegram, or in Chrome/Edge (sound + speaking work there).
function appButtons(chatType) {
  const inTelegram =
    chatType === "private"
      ? { text: TG_BUTTON_TEXT, web_app: { url: APP_URL } }
      : { text: TG_BUTTON_TEXT, url: APP_URL };
  return {
    inline_keyboard: [[inTelegram], [{ text: BROWSER_BUTTON_TEXT, url: BROWSER_URL }]],
  };
}

async function setupWebhook(url, env) {
  const webhookUrl = `${url.origin}/webhook`;
  const results = {};

  results.setWebhook = await tg(env, "setWebhook", {
    url: webhookUrl,
    secret_token: await webhookSecret(env.BOT_TOKEN),
    allowed_updates: ["message"],
    drop_pending_updates: true,
  });

  results.setMyCommands = await tg(env, "setMyCommands", {
    commands: [
      { command: "start", description: "Boshlash" },
      { command: "app", description: "Ilovani ochish" },
      { command: "help", description: "Yordam" },
    ],
  });

  results.setChatMenuButton = await tg(env, "setChatMenuButton", {
    menu_button: { type: "web_app", text: "Ilova", web_app: { url: APP_URL } },
  });

  const ok = Object.values(results).every((r) => r && r.ok);
  return new Response(
    JSON.stringify({ ok, webhook: webhookUrl, results }, null, 2),
    { status: ok ? 200 : 502, headers: { "content-type": "application/json; charset=utf-8" } },
  );
}

async function tg(env, method, payload) {
  const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({ ok: false, description: "bad response" }));
  if (!data.ok) console.error(`${method} failed:`, data.description);
  // Return only ok/description/result — never anything containing the token.
  return { ok: !!data.ok, description: data.description, result: data.result };
}

// Webhook secret = first 48 hex chars of SHA-256("rusbek-webhook:" + token).
// Telegram allows A-Z a-z 0-9 _ - in secret_token, so hex is fine.
async function webhookSecret(token) {
  const bytes = new TextEncoder().encode("rusbek-webhook:" + token);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 48);
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
