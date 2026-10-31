Ruscha.addTopic({
  id: "kasb-sotuvchi",
  section: "kasblar",
  title: "Sotuvchi",
  icon: "🛒",
  templates: [
    { ru: "Сейчас принесу ...", pr: "Sichas prinisu ...", uz: "Hozir ... olib kelaman", ex: ["Сейчас принесу другой размер.", "Сейчас принесу со склада."] },
    { ru: "У нас есть ...", pr: "U nas yest ...", uz: "Bizda ... bor", ex: ["У нас есть скидка.", "У нас есть доставка."] },
    { ru: "С вас ...", pr: "S vas ...", uz: "... bo‘ladi (to‘lashingiz kerak)", ex: ["С вас триста рублей.", "С вас тысяча двести."] }
  ],
  phrases: [
    { ru: "Здравствуйте! Вам помочь?", pr: "Zdrastvuyte! Vam pamoch?", uz: "Assalomu alaykum! Yordam beraymi?", sit: "Do‘konga xaridor kirdi va javonlarga qarab turibdi." },
    { ru: "Что вы ищете?", pr: "Shto vi ishite?", uz: "Nima qidiryapsiz?" },
    { ru: "Сейчас принесу другой размер.", pr: "Sichas prinisu drugoy razmer.", uz: "Hozir boshqa o‘lchamini olib kelaman.", sit: "Xaridorga kiyim kichiklik qildi." },
    { ru: "Сейчас принесу со склада.", pr: "Sichas prinisu sa sklada.", uz: "Hozir ombordan olib kelaman.", sit: "Xaridor so‘ragan mahsulot javonda qolmagan." },
    { ru: "Этого нет в наличии.", pr: "Etava net v nalichii.", uz: "Bu hozir sotuvda yo‘q." },
    { ru: "Будет завтра.", pr: "Budet zaftra.", uz: "Ertaga keladi." },
    { ru: "Примерочная там.", pr: "Primerachnaya tam.", uz: "Kiyib ko‘rish xonasi u yerda." },
    { ru: "Вам идёт!", pr: "Vam idyot!", uz: "Sizga yarashdi!" },
    { ru: "У нас есть скидка.", pr: "U nas yest skitka.", uz: "Bizda chegirma bor." },
    { ru: "У нас есть доставка.", pr: "U nas yest dastafka.", uz: "Bizda yetkazib berish xizmati bor." },
    { ru: "Всё свежее, сегодня привезли.", pr: "Fsyo svejeye, sivodnya privizli.", uz: "Hammasi yangi, bugun keltirildi.", sit: "Xaridor mevalar yangimi deb so‘radi." },
    { ru: "Попробуйте!", pr: "Paprobuyte!", uz: "Tatib ko‘ring!" },
    { ru: "Сколько вам взвесить?", pr: "Skolka vam vzvesit?", uz: "Sizga qancha tortib beray?", sit: "Xaridor olma olmoqchi, lekin qancha kerakligini aytmadi." },
    { ru: "Чуть больше килограмма, ничего?", pr: "Chut bolshe kilagrama, nichivo?", uz: "Bir kilodan sal ko‘p, mayli-mi?" },
    { ru: "С вас триста рублей.", pr: "S vas trista rubley.", uz: "Uch yuz rubl bo‘ladi." },
    { ru: "С вас тысяча двести.", pr: "S vas tisicha dvesti.", uz: "Ming ikki yuz bo‘ladi." },
    { ru: "Карта или наличные?", pr: "Karta ili nalichniye?", uz: "Karta bilanmi yoki naqdmi?" },
    { ru: "Приложите карту.", pr: "Prilajite kartu.", uz: "Kartani tekkizing.", sit: "Xaridor karta bilan to‘lamoqchi, terminal tayyor." },
    { ru: "Оплата не прошла.", pr: "Aplata ne prashla.", uz: "To‘lov o‘tmadi." },
    { ru: "Ваш чек.", pr: "Vash chek.", uz: "Chekingiz." },
    { ru: "У вас есть карта магазина?", pr: "U vas yest karta magazina?", uz: "Do‘kon kartangiz bormi?" },
    { ru: "Без чека не обменяем.", pr: "Bes cheka ne abminyayem.", uz: "Cheksiz almashtirmaymiz." },
    { ru: "Можно вернуть в течение двух недель.", pr: "Mojna virnut f techeniye dvux nidel.", uz: "Ikki hafta ichida qaytarsa bo‘ladi." },
    { ru: "Касса свободна!", pr: "Kassa svabodna!", uz: "Kassa bo‘sh!", sit: "Navbatda turganlarni bo‘sh kassaga chaqirasiz." },
    { ru: "Подойдите на вторую кассу.", pr: "Padaydite na ftaruyu kassu.", uz: "Ikkinchi kassaga keling." },
    { ru: "Мы закрываемся через десять минут.", pr: "Mi zakrivayemsa chiriz desit minut.", uz: "O‘n daqiqadan keyin yopilamiz.", sit: "Do‘kon yopilishiga oz qoldi, xaridorlarni ogohlantirasiz." },
    { ru: "Надо выложить товар.", pr: "Nada vilajit tavar.", uz: "Mahsulotni javonga terish kerak. (boshliq aytadi)" },
    { ru: "Поставь новые ценники.", pr: "Pastaf noviye tsenniki.", uz: "Yangi narx yorliqlarini qo‘y." },
    { ru: "Проверь срок годности.", pr: "Praver srok godnasti.", uz: "Yaroqlilik muddatini tekshir." },
    { ru: "Этот товар просрочен.", pr: "Etat tavar prasrochin.", uz: "Bu mahsulotning muddati o‘tgan.", sit: "Javondagi sutning muddati kecha tugaganini ko‘rdingiz, boshliqqa aytasiz." }
  ],
  dialogues: [
    {
      title: "Kiyim do‘konida",
      a: "Sotuvchi",
      b: "Xaridor",
      lines: [
        ["a", "Здравствуйте! Вам помочь?", "Zdrastvuyte! Vam pamoch?", "Assalomu alaykum! Yordam beraymi?"],
        ["b", "Да, мне нужна куртка. Есть сорок восьмой размер?", "Da, mne nujna kurtka. Yest sorak vasmoy razmer?", "Ha, menga kurtka kerak. 48-o‘lcham bormi?"],
        ["a", "Сейчас принесу со склада. Вот, пожалуйста. Примерочная там.", "Sichas prinisu sa sklada. Vot, pajalusta. Primerachnaya tam.", "Hozir ombordan olib kelaman. Mana, marhamat. Kiyib ko‘rish xonasi u yerda."],
        ["b", "Хорошо сидит. Сколько стоит?", "Xarasho sidit. Skolka stoit?", "Yaxshi tushdi. Narxi qancha?"],
        ["a", "Пять тысяч. Но у нас есть скидка двадцать процентов.", "Pyat tisich. No u nas yest skitka dvatsat pratsentaf.", "Besh ming. Lekin bizda yigirma foiz chegirma bor."],
        ["b", "Отлично, беру!", "Atlichna, biru!", "Zo‘r, olaman!"]
      ]
    },
    {
      title: "Kassada",
      a: "Kassir",
      b: "Xaridor",
      lines: [
        ["a", "Пакет нужен?", "Paket nujen?", "Paket kerakmi?"],
        ["b", "Да, один.", "Da, adin.", "Ha, bitta."],
        ["a", "С вас тысяча двести. Карта или наличные?", "S vas tisicha dvesti. Karta ili nalichniye?", "Ming ikki yuz bo‘ladi. Karta bilanmi yoki naqdmi?"],
        ["b", "Карта.", "Karta.", "Karta bilan."],
        ["a", "Приложите карту. Оплата не прошла.", "Prilajite kartu. Aplata ne prashla.", "Kartani tekkizing. To‘lov o‘tmadi."],
        ["b", "Странно. Попробую ещё раз.", "Stranna. Paprobuyu yishyo ras.", "G‘alati. Yana bir urinib ko‘raman."],
        ["a", "Прошло. Ваш чек!", "Prashlo. Vash chek!", "O‘tdi. Chekingiz!"]
      ]
    }
  ]
});
