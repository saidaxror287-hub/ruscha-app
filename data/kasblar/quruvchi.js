/*
  Quruvchi — job pack (Kasblar). One part per tab:
    boshlangich = Boshlang‘ich (A1–A2) · orta = O‘rta (B1) · yuqori = Yuqori (B2+).
  A tab without a part is shown as "Tez orada". See README.md → "Add a job pack".
  Never change "id" or a published "ru": saved progress depends on them.
*/
Ruscha.addJob({ id: "kasb-quruvchi", title: "Quruvchi", icon: "🧱" });

/* ==================== Boshlang‘ich (A1–A2) ==================== */
Ruscha.addJobTab("kasb-quruvchi", "boshlangich", {
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

/* ==================== O‘rta (B1) ==================== */
Ruscha.addJobTab("kasb-quruvchi", "orta", {
  phrases: [
    { ru: "Бетономешалка сломалась.", pr: "Bitanamishalka slamalas.", uz: "Beton qorgich buzildi." },
    { ru: "Не хватает материалов на завтра.", pr: "Ne xvatayet matiryalaf na zaftra.", uz: "Ertangi kunga materiallar yetmaydi." },
    { ru: "В стене трещина.", pr: "F stine treshina.", uz: "Devorda yoriq bor.", sit: "Ishni tekshirayotganingizda yangi devorda yoriq ko‘rdingiz." },
    { ru: "Чертёж неправильный, размеры не совпадают.", pr: "Chirtyosh nipravilni, razmeri ne savpadayut.", uz: "Chizma noto‘g‘ri, o‘lchamlar mos kelmayapti." },
    { ru: "Мой напарник поранился.", pr: "Moy naparnik paranilsa.", uz: "Sherigim jarohatlandi.", sit: "Yoningizda ishlayotgan odam qo‘lini kesib oldi, brigadirga yugurasiz." },
    { ru: "Вызовите скорую, человек упал с лесов.", pr: "Vizavite skoruyu, chilavek upal s lisof.", uz: "Tez yordam chaqiring, odam havozadan yiqildi." },
    { ru: "Бригадир, что делаем сегодня?", pr: "Brigadir, shto delayem sivodnya?", uz: "Brigadir, bugun nima qilamiz?" },
    { ru: "Нам не заплатили за прошлый месяц.", pr: "Nam ne zaplatili za proshli mesits.", uz: "O‘tgan oy uchun bizga pul to‘lashmadi.", sit: "Oy boshlandi, lekin o‘tgan oyning maoshi hali berilmadi." },
    { ru: "Когда выдадут зарплату?", pr: "Kagda vidadut zarplatu?", uz: "Maoshni qachon berishadi?" },
    { ru: "Это не моя работа, я каменщик.", pr: "Eta ne maya rabota, ya kamenshik.", uz: "Bu mening ishim emas, men g‘isht teruvchiman." },
    { ru: "Я хочу работать официально, по договору.", pr: "Ya xachu rabotat afitsialna, pa dagavoru.", uz: "Rasmiy, shartnoma bo‘yicha ishlamoqchiman." },
    { ru: "Без страховки на высоту не поднимайся.", pr: "Bes straxofki na visatu ne padnimaysya.", uz: "Saqlovchi kamarsiz balandlikka chiqma." },
    { ru: "Работай в очках, летят искры.", pr: "Rabotay v achkax, letyat iskri.", uz: "Ko‘zoynakda ishla, uchqun sachrayapti." },
    { ru: "Не трогай провода, там ток.", pr: "Ne trogay pravada, tam tok.", uz: "Simlarga tegma, ularda tok bor." },
    { ru: "Сегодня инструктаж по технике безопасности.", pr: "Sivodnya instruktash pa texnike bizapasnasti.", uz: "Bugun xavfsizlik texnikasi bo‘yicha yo‘l-yo‘riq beriladi." },
    { ru: "В жару пей больше воды.", pr: "V jaru pey bolshe vadi.", uz: "Issiqda ko‘proq suv ich." },
    { ru: "Работаем с семи до семи.", pr: "Rabotayem s semi da semi.", uz: "Yettidan yettigacha ishlaymiz." },
    { ru: "Перерыв на обед — один час.", pr: "Piririf na abet — adin chas.", uz: "Tushlik tanaffusi — bir soat." },
    { ru: "В воскресенье выходной?", pr: "V vaskrisenye vixadnoy?", uz: "Yakshanba dam olish kunimi?" },
    { ru: "Объект надо сдать до конца месяца.", pr: "Abyekt nada sdat da kantsa mesitsa.", uz: "Obyektni oy oxirigacha topshirish kerak." }
  ],
  dialogues: [
    {
      title: "Devorda yoriq",
      a: "Quruvchi",
      b: "Prorab",
      lines: [
        ["a", "Прораб, можно вас? В стене трещина.", "Prorab, mojna vas? F stine treshina.", "Prorab, mumkinmi? Devorda yoriq bor."],
        ["b", "Где? Покажи.", "Gde? Pakaji.", "Qayerda? Ko‘rsat."],
        ["a", "Вот здесь, на третьем этаже, у окна.", "Vot zdes, na tretyem etaje, u akna.", "Mana shu yerda, uchinchi qavatda, deraza yonida."],
        ["b", "Да, плохо. Кто клал эту стену?", "Da, ploxa. Kto klal etu stenu?", "Ha, yomon. Bu devorni kim tergan?"],
        ["a", "Не я. Я вчера работал на втором этаже.", "Ne ya. Ya fchira rabotal na ftarom etaje.", "Men emas. Kecha ikkinchi qavatda ishladim."],
        ["b", "Ладно. Сфотографируй и пришли мне.", "Ladna. Sfatagrafiruy i prishli mne.", "Mayli. Suratga olib, menga yubor."],
        ["a", "А здесь работать можно?", "A zdes rabotat mojna?", "Bu yerda ishlasa bo‘ladimi?"],
        ["b", "Нет. Пока не приедет инженер, сюда никого не пускай.", "Net. Paka ne priyedit injiner, syuda nikavo ne puskay.", "Yo‘q. Muhandis kelmaguncha bu yerga hech kimni qo‘yma."],
        ["a", "Понял. Я пока буду на втором этаже.", "Ponil. Ya paka budu na ftarom etaje.", "Tushundim. Hozircha ikkinchi qavatda bo‘laman."]
      ]
    },
    {
      title: "Maosh va shartnoma",
      a: "Quruvchi",
      b: "Brigadir",
      lines: [
        ["a", "Бригадир, нам не заплатили за прошлый месяц.", "Brigadir, nam ne zaplatili za proshli mesits.", "Brigadir, o‘tgan oy uchun bizga pul to‘lashmadi."],
        ["b", "Знаю. Заказчик задерживает деньги.", "Znayu. Zakazchik zadirjivayet dengi.", "Bilaman. Buyurtmachi pulni kechiktiryapti."],
        ["a", "Когда выдадут зарплату? Мне нужно платить за квартиру.", "Kagda vidadut zarplatu? Mne nujna platit za kvartiru.", "Maoshni qachon berishadi? Kvartira uchun to‘lashim kerak."],
        ["b", "Обещали в пятницу. Половину дадим точно.", "Abishali f pyatnitsu. Palavinu dadim tochna.", "Juma kuniga va’da qilishdi. Yarmini aniq beramiz."],
        ["a", "А можно работать по договору? Так спокойнее.", "A mojna rabotat pa dagavoru? Tak spakoyniye.", "Shartnoma bilan ishlasa bo‘ladimi? Shunda xotirjamroq bo‘ladi."],
        ["b", "Можно. Принеси паспорт и патент, сделаем договор.", "Mojna. Prinisi paspart i patent, sdelayem dagavor.", "Bo‘ladi. Pasport va patentni olib kel, shartnoma tuzamiz."],
        ["a", "Хорошо, завтра принесу. В воскресенье работаем?", "Xarasho, zaftra prinisu. V vaskrisenye rabotayem?", "Xo‘p, ertaga olib kelaman. Yakshanba kuni ishlaymizmi?"],
        ["b", "Нет, в воскресенье выходной. В понедельник — с семи.", "Net, v vaskrisenye vixadnoy. F panidelnik — s semi.", "Yo‘q, yakshanba dam olish kuni. Dushanba — yettidan."]
      ]
    }
  ]
});

/* ==================== Yuqori (B2+) ==================== */
/* Tez orada: Ruscha.addJobTab("kasb-quruvchi", "yuqori", { phrases: [...], dialogues: [...] }); */
