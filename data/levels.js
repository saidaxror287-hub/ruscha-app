/*
  Levels and every content file the app loads. See README.md for step-by-step instructions.

  Each level has the same folders:
    data/<level>/topics/      phrase topics      (Ruscha.addTopic)
    data/<level>/words/       word lists         (Ruscha.addWords)
    data/<level>/listening/   listening texts    (Ruscha.addListening)
    data/<level>/test.js      level test         (Ruscha.addTest)

  A level with an empty "files" list is shown as "Tez orada".
  Topics appear in the order they are listed here.
  "groups" (optional) sorts a level's topics into big tiles on the Mavzular screen.
*/
var RUSCHA_LEVELS = [
  {
    id: "a1", name: "A1", color: "#15803d", desc: "Yashab qolish",
    groups: [
      { id: "kundalik", icon: "🏡", title: "Kundalik hayot", topics: ["tanishuv", "raqamlar", "oila", "ob-havo", "bayramlar"] },
      { id: "xarid", icon: "🛍️", title: "Xarid va ovqat", topics: ["bozor", "dokon", "kafe"] },
      { id: "shahar", icon: "🏙️", title: "Shahar va safar", topics: ["transport", "yol-sorash", "aeroport", "mehmonxona", "pochta", "sartarosh"] },
      { id: "salomatlik", icon: "🩺", title: "Sog‘liq va xavfsizlik", topics: ["shifokor", "favqulodda"] },
      { id: "hujjat", icon: "📄", title: "Hujjatlar va pul", topics: ["hujjatlar", "bank", "telefon", "uy-ijarasi", "ish", "maktab"] }
    ],
    files: [
      "data/a1/topics/tanishuv.js",
      "data/a1/topics/raqamlar.js",
      "data/a1/topics/bozor.js",
      "data/a1/topics/dokon.js",
      "data/a1/topics/kafe.js",
      "data/a1/topics/transport.js",
      "data/a1/topics/yol-sorash.js",
      "data/a1/topics/shifokor.js",
      "data/a1/topics/ish.js",
      "data/a1/topics/uy-ijarasi.js",
      "data/a1/topics/bank.js",
      "data/a1/topics/telefon.js",
      "data/a1/topics/hujjatlar.js",
      "data/a1/topics/oila.js",
      "data/a1/topics/ob-havo.js",
      "data/a1/topics/favqulodda.js",
      "data/a1/topics/aeroport.js",
      "data/a1/topics/mehmonxona.js",
      "data/a1/topics/pochta.js",
      "data/a1/topics/sartarosh.js",
      "data/a1/topics/maktab.js",
      "data/a1/topics/bayramlar.js",

      "data/a1/words/a1-part1.js",
      "data/a1/words/a1-part2.js",
      "data/a1/words/a1-part3.js",
      "data/a1/words/a1-part4.js"
    ]
  },
  {
    id: "a2", name: "A2", color: "#0a53c4", desc: "Kundalik hayot",
    files: [
      "data/a2/topics/ish-kasb.js",
      "data/a2/topics/uy-joy.js",
      "data/a2/topics/soglik.js",
      "data/a2/topics/sayohat.js",
      "data/a2/topics/dostlar.js",
      "data/a2/topics/telefonda.js",
      "data/a2/topics/bank-hujjatlar.js",
      "data/a2/topics/xarid-qaytarish.js",
      "data/a2/topics/kafe-mehmon.js",
      "data/a2/topics/shahar-transport.js",
      "data/a2/topics/havo-fasllar.js",
      "data/a2/topics/talim-kurslar.js",
      "data/a2/topics/oila-bayramlar.js",
      "data/a2/topics/sport-salomatlik.js",
      "data/a2/topics/internet-xarid.js",
      "data/a2/topics/muammo-shikoyat.js",

      "data/a2/words/a2-part1.js",
      "data/a2/words/a2-part2.js",
      "data/a2/words/a2-part3.js",
      "data/a2/words/a2-part4.js",

      "data/a2/listening/yangi-ish.js",
      "data/a2/listening/kvartira.js",
      "data/a2/listening/shifokorda.js",
      "data/a2/listening/dam-olish.js",
      "data/a2/listening/qongiroq.js",
      "data/a2/listening/vokzal.js",
      "data/a2/listening/metro.js",
      "data/a2/listening/supermarket.js",
      "data/a2/listening/dost-xabari.js",
      "data/a2/listening/ustaxona.js",
      "data/a2/listening/dorixona.js",
      "data/a2/listening/kuryer-kuni.js",
      "data/a2/listening/maktabdan.js",
      "data/a2/listening/kuryer-xabari.js",
      "data/a2/listening/tugilgan-kun.js",

      "data/a2/test.js"
    ]
  },
  { id: "b1", name: "B1", color: "#7c3aed", desc: "Erkin muloqot", files: [
      "data/b1/words/b1-part1.js",
      "data/b1/words/b1-part2.js",
      "data/b1/words/b1-part3.js",
      "data/b1/words/b1-part4.js",
      "data/b1/words/b1-part5.js"
    ] },
  { id: "b2", name: "B2", color: "#c2410c", desc: "Ishonchli", files: [] },
  { id: "c1", name: "C1", color: "#be123c", desc: "Mukammal", files: [] }
];

/* Job phrase packs (Kasblar): shown at every level. Keep section: "kasblar" in these files. */
var RUSCHA_SHARED = [
  "data/kasblar/quruvchi.js",
  "data/kasblar/kuryer.js",
  "data/kasblar/taksi.js",
  "data/kasblar/sotuvchi.js",
  "data/kasblar/oshpaz.js",
  "data/kasblar/farrosh.js",
  "data/kasblar/omborchi.js"
];

/* All files together (the offline copy in sw.js uses this list). */
var RUSCHA_FILES = RUSCHA_LEVELS.reduce(function (all, l) { return all.concat(l.files); }, RUSCHA_SHARED.slice());
