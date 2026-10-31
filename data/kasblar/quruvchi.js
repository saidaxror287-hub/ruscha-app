Ruscha.addTopic({
  id: "kasb-quruvchi",
  section: "kasblar",
  title: "Quruvchi",
  icon: "🧱",
  templates: [
    { ru: "Принеси ...", pr: "Prinisi ...", uz: "... olib kel", ex: ["Принеси цемент.", "Принеси молоток.", "Принеси лестницу."] },
    { ru: "Надо ...", pr: "Nada ...", uz: "... kerak", ex: ["Надо замешать раствор.", "Надо покрасить стену."] },
    { ru: "Сколько нужно ...?", pr: "Skolka nujna ...?", uz: "Qancha ... kerak?", ex: ["Сколько нужно мешков?", "Сколько нужно кирпича?"] }
  ],
  phrases: [
    { ru: "Надень каску.", pr: "Nadin kasku.", uz: "Kaskani kiy. (brigadir aytadi)" },
    { ru: "Где моя каска?", pr: "Gde maya kaska?", uz: "Kaskam qayerda?", sit: "Ish boshlanyapti, lekin kaskangizni topolmayapsiz." },
    { ru: "Принеси цемент.", pr: "Prinisi tsiment.", uz: "Sement olib kel." },
    { ru: "Принеси молоток.", pr: "Prinisi malatok.", uz: "Bolg‘ani olib kel." },
    { ru: "Принеси лестницу.", pr: "Prinisi lesnitsu.", uz: "Narvonni olib kel." },
    { ru: "Надо замешать раствор.", pr: "Nada zamishat rastvor.", uz: "Qorishma qorish kerak." },
    { ru: "Надо покрасить стену.", pr: "Nada pakrasit stinu.", uz: "Devorni bo‘yash kerak." },
    { ru: "Раствор готов.", pr: "Rastvor gatof.", uz: "Qorishma tayyor.", sit: "Qorishmani qorib bo‘ldingiz, ustaga aytasiz." },
    { ru: "Сколько нужно мешков?", pr: "Skolka nujna mishkof?", uz: "Necha qop kerak?", sit: "Sement tashishingiz kerak, lekin qanchasini olib kelishni bilmaysiz." },
    { ru: "Сколько нужно кирпича?", pr: "Skolka nujna kirpicha?", uz: "Qancha g‘isht kerak?" },
    { ru: "Где лежат инструменты?", pr: "Gde lijat instrumenti?", uz: "Asboblar qayerda turadi?", sit: "Ishni boshlash uchun asbob kerak, lekin ular qayerdaligini bilmaysiz." },
    { ru: "Подай мне уровень.", pr: "Paday mne uroven.", uz: "Menga daraja o‘lchagichni uzat." },
    { ru: "Держи крепче.", pr: "Dirji krepche.", uz: "Mahkamroq ushla." },
    { ru: "Осторожно, сверху!", pr: "Astarojna, sverxu!", uz: "Ehtiyot bo‘l, tepadan!", sit: "Tepadan nimadir tushayotganini ko‘rdingiz, pastdagi hamkasbni ogohlantirasiz." },
    { ru: "Не стой под краном.", pr: "Ne stoy pat kranam.", uz: "Kran ostida turma." },
    { ru: "Здесь нужно сверлить?", pr: "Zdes nujna svirlit?", uz: "Shu yerni parmalash kerakmi?", sit: "Devorga belgi qo‘yilgan, teshik ochish kerakmi — so‘raysiz." },
    { ru: "Дрель не работает.", pr: "Drel ne rabotayet.", uz: "Drel ishlamayapti.", sit: "Ish paytida drel to‘xtab qoldi." },
    { ru: "Нужен удлинитель.", pr: "Nujen udlinitel.", uz: "Uzaytirgich kabel kerak." },
    { ru: "Покажи на чертеже.", pr: "Pakaji na chirteje.", uz: "Chizmada ko‘rsat.", sit: "Usta qayerga devor qurishni tushuntirdi, siz tushunmadingiz." },
    { ru: "Какая длина?", pr: "Kakaya dlina?", uz: "Uzunligi qancha?" },
    { ru: "Отрежь вот так.", pr: "Atrej vot tak.", uz: "Mana bunday kes." },
    { ru: "Залей бетон до вечера.", pr: "Zaley biton da vechira.", uz: "Kechgacha beton quy." },
    { ru: "Проверь, ровно или нет.", pr: "Praver, rovna ili net.", uz: "Tekismi yoki yo‘qmi, tekshir." },
    { ru: "Леса надёжные?", pr: "Lisa nadyojniye?", uz: "Havozalar mustahkammi?", sit: "Baland havozaga chiqishingiz kerak, lekin u qimirlayapti." },
    { ru: "Пристегнись!", pr: "Pristignis!", uz: "Xavfsizlik kamarini tak!" },
    { ru: "Мешок очень тяжёлый, помоги.", pr: "Meshok ochin tijoliy, pamagi.", uz: "Qop juda og‘ir, yordam ber.", sit: "Sement qopini yolg‘iz ko‘tarolmayapsiz." },
    { ru: "Я упал, ударил ногу.", pr: "Ya upal, udaril nogu.", uz: "Yiqildim, oyog‘imni urib oldim. (ayol aytsa: «Я упала, ударила ногу»)", sit: "Narvondan tushayotib yiqildingiz." },
    { ru: "Завтра привезут материалы.", pr: "Zaftra privizut matiriali.", uz: "Ertaga materiallarni olib kelishadi." },
    { ru: "Убери за собой.", pr: "Ubiri za saboy.", uz: "O‘zingdan keyin yig‘ishtir." },
    { ru: "Работаем до темноты.", pr: "Rabotayem da timnati.", uz: "Qorong‘i tushguncha ishlaymiz." }
  ],
  dialogues: [
    {
      title: "Ish boshlanishi",
      a: "Brigadir",
      b: "Sherzod",
      lines: [
        ["a", "Шерзод, надень каску и принеси цемент.", "Sherzod, nadin kasku i prinisi tsiment.", "Sherzod, kaskani kiy va sement olib kel."],
        ["b", "Сколько нужно мешков?", "Skolka nujna mishkof?", "Necha qop kerak?"],
        ["a", "Десять. Потом замешай раствор.", "Desit. Patom zamishay rastvor.", "O‘nta. Keyin qorishma qor."],
        ["b", "Хорошо. А где лежат инструменты?", "Xarasho. A gde lijat instrumenti?", "Xo‘p. Asboblar qayerda turadi?"],
        ["a", "В вагончике. Ключ у меня.", "V vagonchike. Klyuch u minya.", "Vagonchada. Kalit menda."],
        ["b", "Понял.", "Ponyal.", "Tushundim."]
      ]
    },
    {
      title: "Drel buzildi",
      a: "Sherzod",
      b: "Usta",
      lines: [
        ["a", "Мастер, дрель не работает.", "Mastir, drel ne rabotayet.", "Usta, drel ishlamayapti."],
        ["b", "Батарея села?", "Batareya sela?", "Batareyasi tugadimi?"],
        ["a", "Нет, она от сети. Наверное, сломалась.", "Net, ana at seti. Naverna, slamalas.", "Yo‘q, u tokdan ishlaydi. Shekilli, buzilgan."],
        ["b", "Возьми другую в вагончике.", "Vazmi druguyu v vagonchike.", "Vagonchadan boshqasini ol."],
        ["a", "Хорошо. Здесь нужно сверлить?", "Xarasho. Zdes nujna svirlit?", "Xo‘p. Shu yerni parmalash kerakmi?"],
        ["b", "Да, четыре дырки по этой линии.", "Da, chitiri dirki pa etay linii.", "Ha, shu chiziq bo‘ylab to‘rtta teshik."]
      ]
    }
  ]
});
