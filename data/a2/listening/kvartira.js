Ruscha.addListening({
  id: "a2-l-kvartira",
  title: "Yangi kvartira",
  icon: "🏠",
  about: "Dilnoza oilasi bilan ko‘chib o‘tgan yangi kvartira haqida gapiradi.",
  lines: [
    ["Мы с мужем недавно переехали в новую квартиру.", "Mi s mujem nidavna pireyexali v novuyu kvartiru.", "Erim bilan yaqinda yangi kvartiraga ko‘chib o‘tdik."],
    ["Раньше мы снимали комнату в общежитии.", "Ranshe mi snimali komnatu v abshijitii.", "Ilgari yotoqxonada xona ijaraga olardik."],
    ["Теперь у нас две комнаты, кухня и балкон.", "Tiper u nas dve komnati, kuxnya i balkon.", "Endi ikki xona, oshxona va balkonimiz bor."],
    ["Квартира на третьем этаже, окна выходят в парк.", "Kvartira na tretyem etaje, okna vixodyat f park.", "Kvartira uchinchi qavatda, derazalar parkka qaragan."],
    ["Аренда стоит тридцать тысяч рублей в месяц.", "Arenda stoit tritsat tisich rubley v mesits.", "Ijara oyiga o‘ttiz ming rubl turadi."],
    ["За свет и воду мы платим отдельно.", "Za svet i vodu mi platim atdelna.", "Tok va suv uchun alohida to‘laymiz."],
    ["Хозяйка — пожилая женщина, очень добрая.", "Xazyayka — pajilaya jenshina, ochen dobraya.", "Uy egasi — keksa ayol, juda mehribon."],
    ["В первую неделю у нас сломался кран, и она сразу вызвала мастера.", "F pervuyu nidelyu u nas slamalsa kran, i ana srazu vizvala mastira.", "Birinchi haftada jo‘mrak buzildi, u darhol usta chaqirdi."],
    ["Рядом с домом есть школа, поэтому сыну удобно.", "Ryadam z domam yest shkola, paetamu sinu udobna.", "Uy yonida maktab bor, shuning uchun o‘g‘limga qulay."],
    ["Мы очень довольны нашей новой квартирой.", "Mi ochen davolni nashey novay kvartiray.", "Yangi kvartiramizdan juda mamnunmiz."]
  ],
  questions: [
    { q: "Ilgari ular qayerda yashashgan?", options: ["Mehmonxonada", "Yotoqxonada", "Qishloqda"], answer: 1, line: 1 },
    { q: "Ijara oyiga qancha turadi?", options: ["20 ming rubl", "30 ming rubl", "13 ming rubl"], answer: 1, line: 4 },
    { q: "Birinchi haftada nima buzildi?", options: ["Muzlatgich", "Eshik", "Jo‘mrak"], answer: 2, line: 7 },
    { q: "Nega o‘g‘liga qulay?", options: ["Uy yonida maktab bor", "Uy yonida park bor", "Maktab avtobusi bor"], answer: 0, line: 8 }
  ]
});
