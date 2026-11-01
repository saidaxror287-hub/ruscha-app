Ruscha.addListening({
  id: "a2-l-dorixona",
  title: "Dorixonada",
  icon: "💊",
  about: "Jamshid shamollab qoldi va dorixonaga keldi.",
  lines: [
    ["— Здравствуйте! Чем могу помочь?", "— Zdrastvuyte! Chem magu pamoch?", "— Assalomu alaykum! Qanday yordam bera olaman?"],
    ["— Здравствуйте. Я, кажется, простудился: болит горло и насморк.", "— Zdrastvuyte. Ya, kajitsa, prastudilsa: balit gorla i nasmark.", "— Assalomu alaykum. Shamollaganga o‘xshayman: tomog‘im og‘riyapti va tumovim bor."],
    ["— Температура есть?", "— Timpiratura yest?", "— Isitmangiz bormi?"],
    ["— Вчера вечером было тридцать семь и пять, а сегодня нормальная.", "— Fchira vecheram bila tritsat sem i pyat, a sivodnya narmalnaya.", "— Kecha kechqurun o‘ttiz yetti-u besh edi, bugun esa normal."],
    ["— Возьмите эти таблетки для горла. Рассасывайте по одной каждые три часа.", "— Vazmite eti tabletki dlya gorla. Rassasivayte pa adnoy kajdiye tri chisa.", "— Tomoq uchun bu tabletkalarni oling. Har uch soatda bittadan so‘rib iching."],
    ["— А от насморка что-нибудь есть?", "— A at nasmarka shto-nibud yest?", "— Tumovga qarshi biror narsa bormi?"],
    ["— Да, вот капли для носа. Но не больше трёх раз в день и не дольше пяти дней.", "— Da, vot kapli dlya nosa. No ne bolshe tryox ras v den i ne dolshe pyati dney.", "— Ha, mana burun tomchilari. Lekin kuniga uch martadan ko‘p emas va besh kundan ortiq emas."],
    ["— Понятно. Сколько с меня?", "— Panyatna. Skolka s minya?", "— Tushunarli. Qancha to‘layman?"],
    ["— Шестьсот восемьдесят рублей. Пакет нужен?", "— Shissot vasimdisyat rubley. Paket nujen?", "— Olti yuz sakson rubl. Paket kerakmi?"],
    ["— Нет, спасибо. Я оплачу картой.", "— Net, spasiba. Ya aplachu kartay.", "— Yo‘q, rahmat. Karta bilan to‘layman."],
    ["— Пейте больше тёплого чая. Если через три дня не станет лучше, идите к врачу.", "— Peyte bolshe tyoplava chaya. Yesli cheris tri dnya ne stanit luchshe, idite k vrachu.", "— Ko‘proq iliq choy iching. Uch kundan keyin yaxshi bo‘lmasa, shifokorga boring."],
    ["— Спасибо большое!", "— Spasiba balshoye!", "— Katta rahmat!"]
  ],
  questions: [
    { q: "Jamshidni nima bezovta qilyapti?", options: ["Tish og‘rig‘i", "Tomoq og‘rig‘i va tumov", "Bel og‘rig‘i"], answer: 1, line: 1 },
    { q: "Tabletkalarni qanchada bir ichish kerak?", options: ["Har soatda", "Kuniga bir marta", "Har uch soatda"], answer: 2, line: 4 },
    { q: "Dorilar qancha turadi?", options: ["680 rubl", "860 rubl", "580 rubl"], answer: 0, line: 8 },
    { q: "Qachon shifokorga borish kerak?", options: ["Bugunoq", "Uch kundan keyin yaxshi bo‘lmasa", "Bir haftadan keyin"], answer: 1, line: 10 }
  ]
});
