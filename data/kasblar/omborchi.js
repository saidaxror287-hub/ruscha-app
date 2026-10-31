Ruscha.addTopic({
  id: "kasb-omborchi",
  section: "kasblar",
  title: "Omborchi",
  icon: "📦",
  templates: [
    { ru: "Поставь на ...", pr: "Pastaf na ...", uz: "...ga qo‘y", ex: ["Поставь на верхнюю полку.", "Поставь на поддон."] },
    { ru: "Сколько ...?", pr: "Skolka ...?", uz: "Nechta ...?", ex: ["Сколько коробок?", "Сколько штук в коробке?"] },
    { ru: "Отсканируй ...", pr: "Atskaniruy ...", uz: "...ni skanerla", ex: ["Отсканируй штрихкод.", "Отсканируй все коробки."] }
  ],
  phrases: [
    { ru: "Пришла машина, надо разгрузить.", pr: "Prishla mashina, nada razgruzit.", uz: "Mashina keldi, yukni tushirish kerak. (mudir aytadi)" },
    { ru: "Помоги загрузить машину.", pr: "Pamagi zagruzit mashinu.", uz: "Mashinaga yuk ortishga yordam ber." },
    { ru: "Сколько коробок?", pr: "Skolka karobak?", uz: "Nechta quti?", sit: "Mudir yukni tushir dedi, siz qancha quti borligini bilmoqchisiz." },
    { ru: "Сколько штук в коробке?", pr: "Skolka shtuk f karopke?", uz: "Qutida nechta dona bor?" },
    { ru: "Поставь на верхнюю полку.", pr: "Pastaf na verxnyuyu polku.", uz: "Yuqori tokchaga qo‘y." },
    { ru: "Поставь на поддон.", pr: "Pastaf na paddon.", uz: "Poddonga qo‘y." },
    { ru: "Отсканируй штрихкод.", pr: "Atskaniruy shtrixkot.", uz: "Shtrix-kodni skanerla." },
    { ru: "Отсканируй все коробки.", pr: "Atskaniruy fse karopki.", uz: "Hamma qutilarni skanerla." },
    { ru: "Сканер не читает код.", pr: "Skaner ne chitayet kot.", uz: "Skaner kodni o‘qimayapti.", sit: "Qutini bir necha marta skanerladingiz, lekin hech narsa chiqmadi." },
    { ru: "Где лежит этот товар?", pr: "Gde lijit etat tavar?", uz: "Bu mahsulot qayerda turadi?", sit: "Buyurtma ro‘yxatidagi mahsulotni topolmayapsiz." },
    { ru: "Ряд пять, полка три.", pr: "Rat pyat, polka tri.", uz: "Beshinchi qator, uchinchi tokcha." },
    { ru: "Собери заказ по списку.", pr: "Sabiri zakas pa spisku.", uz: "Ro‘yxat bo‘yicha buyurtmani yig‘." },
    { ru: "Заказ собран.", pr: "Zakas sobran.", uz: "Buyurtma yig‘ildi.", sit: "Ro‘yxatdagi hamma narsani yig‘ib bo‘ldingiz, mudirga aytasiz." },
    { ru: "Этого товара не хватает.", pr: "Etava tavara ne xvatayet.", uz: "Bu mahsulot yetishmayapti." },
    { ru: "Коробка повреждена.", pr: "Karopka pavrijdena.", uz: "Quti shikastlangan.", sit: "Tushirilgan qutilardan biri ezilgan va yirtilgan." },
    { ru: "Сфотографируй и отложи в сторону.", pr: "Sfatagrafiruy i atlaji f storanu.", uz: "Rasmga ol va bir chetga qo‘y." },
    { ru: "Это хрупкое, осторожно.", pr: "Eta xrupkaye, astarojna.", uz: "Bu sinuvchan, ehtiyot bo‘l." },
    { ru: "Не бросай коробки!", pr: "Ne brasay karopki!", uz: "Qutilarni otma!" },
    { ru: "Тяжёлое поднимаем вдвоём.", pr: "Tijoloye padnimayem vdvayom.", uz: "Og‘ir narsani ikki kishi bo‘lib ko‘taramiz." },
    { ru: "Где тележка?", pr: "Gde tilejka?", uz: "Arava qayerda?", sit: "Ko‘p qutini bir joydan boshqa joyga olib borishingiz kerak." },
    { ru: "Освободи проход.", pr: "Asvabadi praxot.", uz: "Yo‘lakni bo‘shat." },
    { ru: "Погрузчик едет, отойди!", pr: "Pagruschik yedet, ataydi!", uz: "Yuk ortgich kelyapti, chetga chiq!", sit: "Hamkasbingiz orqasidan yuk ortgich kelayotganini ko‘rmayapti." },
    { ru: "У тебя есть права на погрузчик?", pr: "U tibya yest prava na pagruschik?", uz: "Senda yuk ortgich haydash guvohnomasi bormi?" },
    { ru: "Сегодня инвентаризация.", pr: "Sivodnya invintarizatsiya.", uz: "Bugun inventarizatsiya (mollarni sanash)." },
    { ru: "Посчитай остатки.", pr: "Paschitay astatki.", uz: "Qoldiqlarni sana." },
    { ru: "Цифры не сходятся.", pr: "Tsifri ne sxodyatsa.", uz: "Raqamlar to‘g‘ri kelmayapti.", sit: "Qutilarni sanadingiz, lekin ro‘yxatdagi son bilan bir xil chiqmadi." },
    { ru: "Подпиши накладную.", pr: "Patpishi nakladnuyu.", uz: "Yuk xatiga imzo qo‘y." },
    { ru: "Куда ставить возвраты?", pr: "Kuda stavit vazvrati?", uz: "Qaytarilgan mollarni qayerga qo‘yay?", sit: "Do‘kondan qaytarilgan mollar keldi, ularni qayerga qo‘yishni bilmaysiz." },
    { ru: "Смена до восьми вечера.", pr: "Smena da vasmi vechira.", uz: "Smena kechki sakkizgacha." },
    { ru: "Мне нужна жилетка.", pr: "Mne nujna jiletka.", uz: "Menga yorqin nimcha kerak.", sit: "Omborda hamma yorqin nimcha kiyib yuradi, sizda esa yo‘q." }
  ],
  dialogues: [
    {
      title: "Yuk keldi",
      a: "Mudir",
      b: "Omborchi",
      lines: [
        ["a", "Пришла машина, надо разгрузить.", "Prishla mashina, nada razgruzit.", "Mashina keldi, yukni tushirish kerak."],
        ["b", "Сколько коробок?", "Skolka karobak?", "Nechta quti?"],
        ["a", "Сто двадцать. Поставь на поддоны и отсканируй все коробки.", "Sto dvatsat. Pastaf na paddoni i atskaniruy fse karopki.", "Bir yuz yigirmata. Poddonlarga qo‘y va hamma qutilarni skanerla."],
        ["b", "Одна коробка повреждена.", "Adna karopka pavrijdena.", "Bitta quti shikastlangan."],
        ["a", "Сфотографируй и отложи в сторону.", "Sfatagrafiruy i atlaji f storanu.", "Rasmga ol va bir chetga qo‘y."],
        ["b", "Хорошо. Где тележка?", "Xarasho. Gde tilejka?", "Xo‘p. Arava qayerda?"],
        ["a", "У ворот.", "U varot.", "Darvoza oldida."]
      ]
    },
    {
      title: "Buyurtma yig‘ish",
      a: "Omborchi",
      b: "Mudir",
      lines: [
        ["a", "Где лежит этот товар? Я не могу найти.", "Gde lijit etat tavar? Ya ne magu nayti.", "Bu mahsulot qayerda turadi? Topolmayapman."],
        ["b", "Ряд пять, полка три.", "Rat pyat, polka tri.", "Beshinchi qator, uchinchi tokcha."],
        ["a", "Там пусто. Этого товара не хватает.", "Tam pusta. Etava tavara ne xvatayet.", "U yer bo‘sh. Bu mahsulot yetishmayapti."],
        ["b", "Посмотри на втором складе.", "Pasmatri na ftarom sklade.", "Ikkinchi omborga qarab ko‘r."],
        ["a", "Нашёл! Заказ собран.", "Nashol! Zakas sobran.", "Topdim! Buyurtma yig‘ildi."],
        ["b", "Отлично. Подпиши накладную.", "Atlichna. Patpishi nakladnuyu.", "Zo‘r. Yuk xatiga imzo qo‘y."]
      ]
    }
  ]
});
