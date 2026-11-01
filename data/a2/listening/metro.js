Ruscha.addListening({
  id: "a2-l-metro",
  title: "Metrodagi e’lon",
  icon: "🚇",
  about: "Metro poyezdida va bekatda yangraydigan e’lonlar.",
  lines: [
    ["Осторожно, двери закрываются! Следующая станция — «Курская».", "Astarojna, dveri zakrivayutsa! Sleduyushaya stantsiya — «Kurskaya».", "Ehtiyot bo‘ling, eshiklar yopilmoqda! Keyingi bekat — «Kurskaya»."],
    ["Станция «Курская». Переход на Кольцевую линию и к Курскому вокзалу.", "Stantsiya «Kurskaya». Pirixot na Kaltsevuyu liniyu i k Kurskamu vagzalu.", "«Kurskaya» bekati. Halqa liniyasiga va Kursk vokzaliga o‘tish."],
    ["Уважаемые пассажиры, будьте вежливы, уступайте места пожилым людям и пассажирам с детьми.", "Uvajayemiye passajiri, butte vejlivi, ustupayte mesta pajilim lyudyam i passajiram z detmi.", "Hurmatli yo‘lovchilar, odobli bo‘ling, keksalarga va bolali yo‘lovchilarga joy bering."],
    ["Внимание! Из-за ремонта станция «Бауманская» закрыта до пятнадцатого ноября.", "Vnimaniye! Iz-za rimonta stantsiya «Baumanskaya» zakrita da pitnatsatava nayabrya.", "Diqqat! Ta’mir sababli «Baumanskaya» bekati 15-noyabrgacha yopiq."],
    ["Поезда проходят эту станцию без остановки.", "Payezda praxodyat etu stantsiyu biz astanofki.", "Poyezdlar bu bekatdan to‘xtamasdan o‘tadi."],
    ["Если вам нужна «Бауманская», выходите на станции «Электрозаводская».", "Yesli vam nujna «Baumanskaya», vixadite na stantsii «Elektrazavodskaya».", "Agar sizga «Baumanskaya» kerak bo‘lsa, «Elektrozavodskaya» bekatida tushing."],
    ["Оттуда можно доехать на автобусе или дойти пешком за пятнадцать минут.", "Attuda mojna dayexat na aftobuse ili dayti pishkom za pitnatsat minut.", "U yerdan avtobusda borish yoki piyoda o‘n besh daqiqada yetib borish mumkin."],
    ["При выходе из поезда не забывайте свои вещи.", "Pri vixade is poyezda ne zabivayte svai veshi.", "Poyezddan tushayotganda narsalaringizni unutmang."],
    ["Если вы увидели подозрительный предмет, сообщите машинисту или полиции.", "Yesli vi uvideli padazritelniy pridmet, saapshite mashinistu ili palitsii.", "Shubhali buyumni ko‘rsangiz, mashinistga yoki politsiyaga xabar bering."],
    ["Приятной поездки!", "Priyatnay payestki!", "Yoqimli safar!"]
  ],
  questions: [
    { q: "«Kurskaya» bekatida qayerga o‘tish mumkin?", options: ["Halqa liniyasiga va vokzalga", "Aeroportga", "Faqat avtobusga"], answer: 0, line: 1 },
    { q: "Qaysi bekat yopiq?", options: ["Kurskaya", "Baumanskaya", "Elektrozavodskaya"], answer: 1, line: 3 },
    { q: "Bekat qachongacha yopiq?", options: ["5-noyabrgacha", "15-dekabrgacha", "15-noyabrgacha"], answer: 2, line: 3 },
    { q: "«Elektrozavodskaya»dan piyoda qancha yuriladi?", options: ["5 daqiqa", "15 daqiqa", "50 daqiqa"], answer: 1, line: 6 }
  ]
});
