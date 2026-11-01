/*
  Omborchi — job pack (Kasblar). One part per tab:
    boshlangich = Boshlang‘ich (A1–A2) · orta = O‘rta (B1) · yuqori = Yuqori (B2+).
  A tab without a part is shown as "Tez orada". See README.md → "Add a job pack".
  Never change "id" or a published "ru": saved progress depends on them.
*/
Ruscha.addJob({ id: "kasb-omborchi", title: "Omborchi", icon: "📦" });

/* ==================== Boshlang‘ich (A1–A2) ==================== */
Ruscha.addJobTab("kasb-omborchi", "boshlangich", {
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

/* ==================== O‘rta (B1) ==================== */
Ruscha.addJobTab("kasb-omborchi", "orta", {
  phrases: [
    { ru: "Сканер разрядился.", pr: "Skanir razridilsa.", uz: "Skanerning quvvati tugadi." },
    { ru: "Пришёл не тот товар.", pr: "Prishol ne tot tovar.", uz: "Noto‘g‘ri tovar kelibdi." },
    { ru: "В накладной одно, а в коробке другое.", pr: "V nakladnoy adno, a f karopke drugoye.", uz: "Yuk xatida bir narsa yozilgan, qutida esa boshqa narsa.", sit: "Qutini ochdingiz, ichidagi tovar hujjatdagidan boshqacha." },
    { ru: "Погрузчик не заводится.", pr: "Pagruschik ne zavoditsa.", uz: "Yuklagich o‘t olmayapti." },
    { ru: "Я уронил коробку, кажется, там всё разбилось.", pr: "Ya uranil karopku, kajitsa, tam fsyo razbilas.", uz: "Qutini tushirib yubordim, ichidagi hammasi singanga o‘xshaydi. (ayol aytsa: «Я уронила коробку, кажется, там всё разбилось»)", sit: "Qutini ko‘tarib ketayotganda qo‘lingizdan tushib ketdi, ichidan shisha ovozi chiqdi." },
    { ru: "Машина опаздывает на два часа.", pr: "Mashina apazdivayet na dva chisa.", uz: "Mashina ikki soatga kechikyapti." },
    { ru: "Я не успею собрать все заказы до обеда.", pr: "Ya ne uspeyu sabrat fse zakazi da abeda.", uz: "Hamma buyurtmalarni tushlikkacha yig‘ib ulgurmayman." },
    { ru: "Что сначала: разгрузка или сборка?", pr: "Shto snachala: razgruska ili sborka?", uz: "Avval nima qilay: yuk tushirishmi yoki buyurtma yig‘ishmi?" },
    { ru: "Почему мне поставили прогул?", pr: "Pachimu mne pastavili pragul?", uz: "Nega meni sababsiz ishga kelmagan deb belgilashdi?", sit: "Bir kun kasal bo‘lib keldingiz, ish jadvalida «sababsiz» deb yozilgan." },
    { ru: "Я предупреждал, что опоздаю.", pr: "Ya priduprijdal, shto apazdayu.", uz: "Kechikishimni oldindan aytgan edim. (ayol aytsa: «Я предупреждала, что опоздаю»)" },
    { ru: "Мне нужно обучение на погрузчик.", pr: "Mne nujna abucheniye na pagruschik.", uz: "Menga yuklagich bo‘yicha o‘qish kerak." },
    { ru: "Ходи только по жёлтой линии.", pr: "Xadi tolka pa jyoltay linii.", uz: "Faqat sariq chiziq bo‘ylab yur." },
    { ru: "Не поднимай больше двадцати килограммов.", pr: "Ne padnimay bolshe dvatsati kilagramaf.", uz: "Yigirma kilogrammdan og‘ir narsani ko‘tarma." },
    { ru: "Поднимай ногами, а не спиной.", pr: "Padnimay nagami, a ne spinoy.", uz: "Bel bilan emas, oyoq kuchi bilan ko‘tar." },
    { ru: "Не ходи под поднятым грузом.", pr: "Ne xadi pat podnitim gruzam.", uz: "Ko‘tarilgan yuk tagidan yurma." },
    { ru: "Обувь должна быть с защитой.", pr: "Obuf daljna bit s zashitay.", uz: "Poyabzal himoyali bo‘lishi kerak." },
    { ru: "Ночная смена — с восьми вечера до восьми утра.", pr: "Nachnaya smena — s vasmi vechira da vasmi utra.", uz: "Tungi smena — kechki sakkizdan ertalabki sakkizgacha." },
    { ru: "На следующей неделе я в ночь.", pr: "Na sleduyushey nidele ya v noch.", uz: "Kelasi hafta tungi smenadaman." },
    { ru: "Сколько у нас перерывов за смену?", pr: "Skolka u nas piririvaf za smenu?", uz: "Bir smenada nechta tanaffusimiz bor?" },
    { ru: "Переработку оплачивают отдельно?", pr: "Pirirabotku aplachivayut atdelna?", uz: "Qo‘shimcha ish alohida to‘lanadimi?" }
  ],
  dialogues: [
    {
      title: "Yuk xatida xato",
      a: "Omborchi",
      b: "Smena boshlig‘i",
      lines: [
        ["a", "Начальник, в накладной одно, а в коробке другое.", "Nachalnik, v nakladnoy adno, a f karopke drugoye.", "Boshliq, yuk xatida bir narsa yozilgan, qutida esa boshqa narsa."],
        ["b", "Что именно?", "Shto imenna?", "Aniq nima?"],
        ["a", "Написано сто чайников, а в коробках утюги.", "Napisana sto chaynikaf, a f karopkax utyugi.", "Yuzta choynak deb yozilgan, qutilarda esa dazmollar."],
        ["b", "Сколько коробок с утюгами?", "Skolka karopak s utyugami?", "Dazmolli qutilar nechta?"],
        ["a", "Десять. Я пересчитал два раза.", "Desit. Ya pirishital dva raza.", "O‘nta. Ikki marta qayta sanadim."],
        ["b", "Хорошо. Не принимай этот товар, отложи в сторону.", "Xarasho. Ne prinimay etat tovar, atlaji f staranu.", "Yaxshi. Bu tovarni qabul qilma, chetga qo‘y."],
        ["a", "А накладную подписывать?", "A nakladnuyu patpisivat?", "Yuk xatiga imzo qo‘yaymi?"],
        ["b", "Нет, не подписывай. Я сам позвоню поставщику.", "Net, ne patpisivay. Ya sam pazvanyu pastafshiku.", "Yo‘q, imzolama. Yetkazib beruvchiga o‘zim qo‘ng‘iroq qilaman."],
        ["a", "Понял. Тогда я пока займусь сборкой заказов.", "Ponil. Tagda ya paka zaymus sborkay zakazaf.", "Tushundim. Unda hozircha buyurtmalarni yig‘ish bilan shug‘ullanaman."]
      ]
    },
    {
      title: "Tungi smena",
      a: "Omborchi",
      b: "Kadrlar menejeri",
      lines: [
        ["a", "Здравствуйте. У меня вопрос по графику.", "Zdrastvuyte. U minya vapros pa grafiku.", "Assalomu alaykum. Ish jadvali bo‘yicha savolim bor."],
        ["b", "Слушаю вас.", "Slushayu vas.", "Eshitaman."],
        ["a", "На следующей неделе я в ночь. Переработку оплачивают отдельно?", "Na sleduyushey nidele ya v noch. Pirirabotku aplachivayut atdelna?", "Kelasi hafta tungi smenadaman. Qo‘shimcha ish alohida to‘lanadimi?"],
        ["b", "Да. Ночные часы и переработка оплачиваются в полтора раза больше.", "Da. Nachniye chisi i pirirabotka aplachivayutsa f poltara raza bolshe.", "Ha. Tungi soatlar va qo‘shimcha ish bir yarim barobar ko‘p to‘lanadi."],
        ["a", "А сколько у нас перерывов за смену?", "A skolka u nas piririvaf za smenu?", "Bir smenada nechta tanaffusimiz bor?"],
        ["b", "Два по пятнадцать минут и обед — полчаса.", "Dva pa pitnatsat minut i abet — polchisa.", "O‘n besh daqiqadan ikkita va tushlik — yarim soat."],
        ["a", "Понятно. И ещё: мне нужно обучение на погрузчик.", "Panyatna. I yishyo: mne nujna abucheniye na pagruschik.", "Tushunarli. Yana: menga yuklagich bo‘yicha o‘qish kerak."],
        ["b", "Запишу вас на курс. Он будет в начале месяца.", "Zapishu vas na kurs. On budit v nachale mesitsa.", "Sizni kursga yozib qo‘yaman. U oy boshida bo‘ladi."]
      ]
    }
  ]
});

/* ==================== Yuqori (B2+) ==================== */
/* Tez orada: Ruscha.addJobTab("kasb-omborchi", "yuqori", { phrases: [...], dialogues: [...] }); */
