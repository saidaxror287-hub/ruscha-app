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
Ruscha.addJobTab("kasb-omborchi", "yuqori", {
  phrases: [
    { ru: "Сверхурочные у нас оплачиваются в полуторном размере?", pr: "Sverxurochniye u nas aplachivayutsa f palutornam razmere?", uz: "Bizda qo‘shimcha soatlar bir yarim baravar to‘lanadimi?" },
    { ru: "По закону ночные часы оплачиваются выше.", pr: "Pa zakonu nachniye chasi aplachivayutsa visshe.", uz: "Qonun bo‘yicha tungi soatlar yuqoriroq to‘lanadi." },
    { ru: "В расчётном листке не указаны ночные смены.", pr: "F rashotnam listke ne ukazani nachniye smeni.", uz: "Hisob varag‘ida tungi smenalar ko‘rsatilmagan.", sit: "Oylik hisob varag‘ini oldingiz, lekin summa kutganingizdan ancha kam." },
    { ru: "Меня оформили через агентство, а не напрямую.", pr: "Minya afarmili chiriz agentstva, a ne napryamuyu.", uz: "Meni to‘g‘ridan-to‘g‘ri emas, agentlik orqali rasmiylashtirishdi." },
    { ru: "Когда закончится мой испытательный срок?", pr: "Kagda zakonchitsa moy ispitatilniy srok?", uz: "Sinov muddatim qachon tugaydi?" },
    { ru: "Я не согласен с недостачей, пересчёт делали без меня.", pr: "Ya ne saglasen s nidastachey, pirishot delali biz minya.", uz: "Kamomadga rozi emasman, qayta sanashni mensiz o‘tkazishdi. (ayol aytsa: «Я не согласна с недостачей, пересчёт делали без меня»)", sit: "Inventarizatsiyadan keyin sizdan kamomad pulini to‘lashni talab qilishyapti." },
    { ru: "Недостачу нельзя просто вычесть из зарплаты.", pr: "Nidastachu nilzya prosta vichest iz zarplati.", uz: "Kamomadni shunchaki maoshdan ushlab qolib bo‘lmaydi." },
    { ru: "Разве я подписывал договор о материальной ответственности?", pr: "Razvi ya padpisival dagavor a matirialnay atvetstvinnasti?", uz: "Men moddiy javobgarlik shartnomasini imzolaganmidim? (ayol aytsa: «Разве я подписывала договор о материальной ответственности?»)" },
    { ru: "Норму подняли, а зарплату оставили прежней.", pr: "Normu padnyali, a zarplatu astavili prejney.", uz: "Normani oshirishdi, maoshni esa o‘sha-o‘shaligicha qoldirishdi." },
    { ru: "Выполнить такую норму без нарушений невозможно.", pr: "Vipolnit takuyu normu biz narusheniy nivazmojna.", uz: "Bunday normani qoidalarni buzmasdan bajarib bo‘lmaydi." },
    { ru: "Начальник смены разговаривает с нами на повышенных тонах.", pr: "Nachalnik smeni razgavarivayet s nami na pavishennix tonax.", uz: "Smena boshlig‘i biz bilan baland ovozda gaplashadi." },
    { ru: "Я хочу подать жалобу на начальника смены.", pr: "Ya xachu padat jalobu na nachalnika smeni.", uz: "Smena boshlig‘i ustidan shikoyat bermoqchiman." },
    { ru: "Погрузчик неисправен, и работать на нём я не буду.", pr: "Pagruschik niisprafen, i rabotat na nyom ya ne budu.", uz: "Yuklagich nosoz, men unda ishlamayman.", sit: "Smena boshlig‘i tormozi yomon yuklagichda ishlashga majburlayapti." },
    { ru: "Я сообщал о неисправности ещё на прошлой неделе.", pr: "Ya saapshal a niispravnasti yisho na proshlay nidele.", uz: "Nosozlik haqida o‘tgan haftadayoq xabar berganman. (ayol aytsa: «Я сообщала о неисправности ещё на прошлой неделе»)" },
    { ru: "Мы работаем в холоде, а тёплую спецодежду так и не выдали.", pr: "Mi rabotayem f xolade, a tyopluyu spetsodejdu tak i ne vidali.", uz: "Sovuqda ishlaymiz, lekin issiq maxsus kiyimni hali ham berishmadi." },
    { ru: "Магазин жалуется, что мы путаем заказы.", pr: "Magazin jaluyetsa, shto mi putayem zakazi.", uz: "Do‘kon buyurtmalarni adashtiryapsizlar deb shikoyat qilyapti." },
    { ru: "Ошибка не наша: в накладной был указан другой артикул.", pr: "Ashipka ne nasha: v nakladnoy bil ukazan drugoy artikul.", uz: "Xato bizniki emas: yuk xatida boshqa artikul ko‘rsatilgan edi." },
    { ru: "Я бы хотел пройти обучение на кладовщика.", pr: "Ya bi xatel prayti abucheniye na kladafshika.", uz: "Kladovshik (ombor hisobchisi) bo‘lish uchun o‘qishni o‘tmoqchi edim. (ayol aytsa: «Я бы хотела пройти обучение на кладовщика»)" },
    { ru: "Я давно выполняю обязанности бригадира, но получаю как комплектовщик.", pr: "Ya davno vipalnyayu abyazannasti brigadira, no paluchayu kak kamplektofshik.", uz: "Ancha vaqtdan beri brigadir vazifasini bajaryapman, lekin buyurtma yig‘uvchi kabi maosh olaman." },
    { ru: "Давайте зафиксируем договорённость письменно.", pr: "Davayte zafiksiruyem dagavaryonnast pismenna.", uz: "Kelishuvni yozma ravishda qayd etaylik." }
  ],
  dialogues: [
    {
      title: "Kamomad",
      a: "Jasur",
      b: "Ombor mudiri",
      lines: [
        ["b", "Жасур, по итогам инвентаризации у тебя недостача на сорок тысяч.", "Jasur, pa itogam inventarizatsii u tibya nidastacha na sorak tisich.", "Jasur, inventarizatsiya natijasiga ko‘ra sende qirq ming kamomad bor."],
        ["a", "Как это? Я не согласен с недостачей, пересчёт делали без меня.", "Kak eta? Ya ne saglasen s nidastachey, pirishot delali biz minya.", "Qanday qilib? Kamomadga rozi emasman, qayta sanashni mensiz o‘tkazishgan."],
        ["b", "Ты был на больничном, ждать мы не могли.", "Ti bil na balnichnam, zhdat mi ne magli.", "Sen kasallik varaqasida eding, kutib turolmasdik."],
        ["a", "Тогда как вы можете требовать с меня? Ключи от склада были не только у меня.", "Tagda kak vi mojete trebavat s minya? Klyuchi at sklada bili ne tolka u minya.", "Unda qanday qilib mendan talab qila olasiz? Ombor kalitlari faqat menda emas edi."],
        ["b", "Но договор о материальной ответственности подписывал ты.", "No dagavor a matirialnay atvetstvinnasti padpisival ti.", "Lekin moddiy javobgarlik shartnomasini sen imzolagansan."],
        ["a", "Договор — да. Но недостачу нельзя просто вычесть из зарплаты.", "Dagavor — da. No nidastachu nilzya prosta vichest iz zarplati.", "Shartnoma — ha. Lekin kamomadni shunchaki maoshdan ushlab bo‘lmaydi."],
        ["b", "А что ты предлагаешь?", "A shto ti pridlagayesh?", "Sen nima taklif qilasan?"],
        ["a", "Давайте сделаем повторную инвентаризацию при мне.", "Davayte zdelayem paftornuyu inventarizatsiyu pri mne.", "Keling, mening ishtirokimda qayta inventarizatsiya qilaylik."],
        ["b", "Это займёт целый день.", "Eta zaymyot tseliy den.", "Bu butun bir kunni oladi."],
        ["a", "Я готов остаться после смены. И нужно проверить, что отгружали, пока я болел.", "Ya gatof astatsa posle smeni. I nujna praverit, shto atgrujali, paka ya balel.", "Smenadan keyin qolishga tayyorman. Kasal bo‘lganimda nima jo‘natilganini ham tekshirish kerak."],
        ["b", "Хорошо, в субботу пересчитаем вместе.", "Xarasho, f subotu pirishitayem vmeste.", "Yaxshi, shanba kuni birga qayta sanaymiz."],
        ["a", "И если недостачи не будет, прошу убрать это из моего личного дела.", "I isli nidastachi ne budit, prashu ubrat eta iz mayevo lichnava dela.", "Agar kamomad chiqmasa, buni shaxsiy ishimdan olib tashlashingizni so‘rayman."],
        ["b", "Договорились. Всё зафиксируем в акте.", "Dagavarilis. Fsyo zafiksiruyem v akte.", "Kelishdik. Hammasini dalolatnomada qayd etamiz."]
      ]
    },
    {
      title: "Brigadir maoshi",
      a: "Omborchi",
      b: "Ombor mudiri",
      lines: [
        ["a", "Можно вас на минуту? Я хотел обсудить свою зарплату.", "Mojna vas na minutu? Ya xatel absudit svayu zarplatu.", "Bir daqiqaga mumkinmi? Maoshim haqida gaplashmoqchi edim."],
        ["b", "Слушаю.", "Slushayu.", "Eshitaman."],
        ["a", "Уже три месяца я фактически работаю бригадиром: распределяю заказы, обучаю новичков.", "Uje tri mesitsa ya faktichiski rabotayu brigadiram: raspridilyayu zakazi, abuchayu navichkof.", "Uch oydan beri amalda brigadir bo‘lib ishlayapman: buyurtmalarni taqsimlayman, yangilarni o‘rgataman."],
        ["b", "Да, я вижу, смена стала работать лучше.", "Da, ya vizhu, smena stala rabotat luchshe.", "Ha, ko‘ryapman, smena yaxshiroq ishlay boshladi."],
        ["a", "Но получаю я по-прежнему как комплектовщик.", "No paluchayu ya pa-prejnimu kak kamplektofshik.", "Lekin maoshni hamon buyurtma yig‘uvchi sifatida olaman."],
        ["b", "Ставку бригадира должна утвердить дирекция.", "Stafku brigadira dalzhna utverdit direktsiya.", "Brigadir stavkasini direksiya tasdiqlashi kerak."],
        ["a", "Тогда прошу передать им моё заявление. Вот, я его уже написал.", "Tagda prashu piridat im mayo zayavleniye. Vot, ya yivo uje napisal.", "Unda arizamni ularga topshirishingizni so‘rayman. Mana, yozib qo‘ydim."],
        ["b", "Хорошо, передам. Что-то ещё?", "Xarasho, piridam. Shto-ta yisho?", "Yaxshi, yetkazaman. Yana nimadir bormi?"],
        ["a", "Да. В прошлом месяце нам не оплатили сверхурочные в полуторном размере.", "Da. F proshlam mesitse nam ne aplatili sverxurochniye f palutornam razmere.", "Ha. O‘tgan oy qo‘shimcha soatlarni bir yarim baravar to‘lashmadi."],
        ["b", "Вы уверены? Все часы есть в табеле.", "Vi uvereni? Fse chasi yest f tabele.", "Ishonchingiz komilmi? Hamma soatlar tabelda bor."],
        ["a", "Часы есть, но оплачены по обычной ставке. Вот мой расчётный листок.", "Chasi yest, no aplacheni pa abichnay stafke. Vot moy rashotniy listok.", "Soatlar bor, lekin oddiy stavkada to‘langan. Mana hisob varag‘im."],
        ["b", "Действительно, ошибка. Сегодня же напишу в бухгалтерию.", "Deystvitelna, ashipka. Sivodnya je napishu v buxgaltiriyu.", "Haqiqatan ham xato. Bugunoq buxgalteriyaga yozaman."],
        ["a", "Спасибо. Когда ждать ответа по должности?", "Spasiba. Kagda zhdat atveta pa doljnasti?", "Rahmat. Lavozim bo‘yicha javobni qachon kutay?"],
        ["b", "Дирекция собирается в конце месяца. Думаю, шансы хорошие.", "Direktsiya sabirayetsa f kantse mesitsa. Dumayu, shansi xaroshiye.", "Direksiya oy oxirida yig‘iladi. Menimcha, imkoniyat yaxshi."]
      ]
    }
  ]
});
