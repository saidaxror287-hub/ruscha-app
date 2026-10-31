/*
  Every content file the app loads, in this order (topics appear on the home screen in this order).

  To add a new topic:     create data/topics/<name>.js (copy an existing topic file) and add one line below.
  To add a new job pack:  create data/kasblar/<name>.js (copy quruvchi.js, keep section: "kasblar") and add one line below.
  To add a new word list: create data/words/<name>.js (copy a1-part1.js) and add one line below.

  A topic file with an empty "phrases" list is shown as "Tez orada".
*/
var RUSCHA_FILES = [
  "data/topics/tanishuv.js",
  "data/topics/raqamlar.js",
  "data/topics/bozor.js",
  "data/topics/dokon.js",
  "data/topics/kafe.js",
  "data/topics/transport.js",
  "data/topics/yol-sorash.js",
  "data/topics/shifokor.js",
  "data/topics/ish.js",
  "data/topics/uy-ijarasi.js",
  "data/topics/bank.js",
  "data/topics/telefon.js",
  "data/topics/hujjatlar.js",
  "data/topics/oila.js",
  "data/topics/ob-havo.js",
  "data/topics/favqulodda.js",
  "data/topics/aeroport.js",
  "data/topics/mehmonxona.js",
  "data/topics/pochta.js",
  "data/topics/sartarosh.js",
  "data/topics/maktab.js",
  "data/topics/bayramlar.js",

  "data/kasblar/quruvchi.js",
  "data/kasblar/kuryer.js",
  "data/kasblar/taksi.js",
  "data/kasblar/sotuvchi.js",
  "data/kasblar/oshpaz.js",
  "data/kasblar/farrosh.js",
  "data/kasblar/omborchi.js",

  "data/words/a1-part1.js",
  "data/words/a1-part2.js",
  "data/words/a1-part3.js",
  "data/words/a1-part4.js"
];
