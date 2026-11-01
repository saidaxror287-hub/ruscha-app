/*
  Sotuvchi — job pack (Kasblar). One part per tab:
    boshlangich = Boshlang‘ich (A1–A2) · orta = O‘rta (B1) · yuqori = Yuqori (B2+).
  A tab without a part is shown as "Tez orada". See README.md → "Add a job pack".
  Never change "id" or a published "ru": saved progress depends on them.
*/
Ruscha.addJob({ id: "kasb-sotuvchi", title: "Sotuvchi", icon: "🛒" });

/* ==================== Boshlang‘ich (A1–A2) ==================== */
Ruscha.addJobTab("kasb-sotuvchi", "boshlangich", {
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

/* ==================== O‘rta (B1) ==================== */
Ruscha.addJobTab("kasb-sotuvchi", "orta", {
  phrases: [
    { ru: "Касса зависла, подождите минуту.", pr: "Kassa zavisla, padajdite minutu.", uz: "Kassa qotib qoldi, bir daqiqa kuting.", sit: "Mijozning xaridini urayotganingizda kassa ishlamay qoldi." },
    { ru: "Цена на полке не совпадает с ценой на кассе.", pr: "Tsena na polke ne savpadayet s tsenay na kasse.", uz: "Javondagi narx kassadagi narx bilan mos kelmayapti.", sit: "Mijoz kassada narx boshqacha chiqdi deb shikoyat qilyapti." },
    { ru: "Покупатель просит жалобную книгу.", pr: "Pakupatil prosit jalabnuyu knigu.", uz: "Xaridor shikoyat daftarini so‘rayapti." },
    { ru: "Я вызову старшего продавца.", pr: "Ya vizavu starshiva pradavtsa.", uz: "Katta sotuvchini chaqiraman." },
    { ru: "Кажется, этот человек что-то украл.", pr: "Kajitsa, etat chilavek shto-ta ukral.", uz: "Menimcha, bu odam nimadir o‘g‘irladi.", sit: "Bir xaridor tovarni cho‘ntagiga solib, kassadan o‘tmay chiqib ketyapti." },
    { ru: "В кассе не хватает денег.", pr: "F kasse ne xvatayet denik.", uz: "Kassada pul yetishmayapti." },
    { ru: "Можно мне сегодня уйти пораньше?", pr: "Mojna mne sivodnya uyti paranshe?", uz: "Bugun ertaroq ketsam bo‘ladimi?" },
    { ru: "Я не успеваю один на кассе.", pr: "Ya ne uspivayu adin na kasse.", uz: "Kassada yolg‘iz o‘zim ulgurmayapman. (ayol aytsa: «Я не успеваю одна на кассе»)", sit: "Kassa oldida uzun navbat, boshqa kassir yo‘q, mudirga aytasiz." },
    { ru: "Нужен ещё один человек на смену.", pr: "Nujen yishyo adin chilavek na smenu.", uz: "Smenaga yana bir kishi kerak." },
    { ru: "Когда привезут новый товар?", pr: "Kagda privizut novi tovar?", uz: "Yangi tovar qachon keladi?" },
    { ru: "Я ошибся со сдачей.", pr: "Ya ashipsya sa sdachey.", uz: "Qaytimda adashib ketdim. (ayol aytsa: «Я ошиблась со сдачей»)" },
    { ru: "Не оставляй кассу открытой.", pr: "Ne astavlyay kassu atkritay.", uz: "Kassani ochiq qoldirma." },
    { ru: "Крупные купюры проверяй на детекторе.", pr: "Krupniye kupyuri praviryay na ditektare.", uz: "Katta pullarni detektorda tekshir." },
    { ru: "Алкоголь продаём только с восемнадцати лет.", pr: "Alkagol pradayom tolka s vasimnatsati let.", uz: "Spirtli ichimlikni faqat o‘n sakkiz yoshdan sotamiz." },
    { ru: "Покажите, пожалуйста, документ, подтверждающий возраст.", pr: "Pakajite, pajalusta, dakument, pattvirjdayushi vozrast.", uz: "Iltimos, yoshingizni tasdiqlovchi hujjatni ko‘rsating.", sit: "Yosh yigit pivo olmoqchi, unga o‘n sakkiz yosh bormi-yo‘qmi bilmaysiz." },
    { ru: "Аварийный выход нельзя загораживать.", pr: "Avariyni vixat nilzya zagarajivat.", uz: "Favqulodda chiqish yo‘lini to‘sib qo‘yish mumkin emas." },
    { ru: "У меня два дня работы, два дня отдыха.", pr: "U minya dva dnya raboti, dva dnya otdixa.", uz: "Ikki kun ishlayman, ikki kun dam olaman." },
    { ru: "Можно я поменяюсь сменой с коллегой?", pr: "Mojna ya paminyayus smenay s kalegay?", uz: "Hamkasbim bilan smenani almashsam bo‘ladimi?" },
    { ru: "Обед у меня с часу до двух.", pr: "Abet u minya s chasu da dvux.", uz: "Tushlik tanaffusim birdan ikkigacha." },
    { ru: "Кто сегодня закрывает магазин?", pr: "Kto sivodnya zakrivayet magazin?", uz: "Bugun do‘konni kim yopadi?" }
  ],
  dialogues: [
    {
      title: "Narx mos kelmadi",
      a: "Sotuvchi",
      b: "Xaridor",
      lines: [
        ["b", "Извините, на полке цена девяносто девять рублей, а на кассе сто двадцать.", "Izvinite, na polke tsena divinosta devit rubley, a na kasse sto dvatsat.", "Kechirasiz, javonda narx to‘qson to‘qqiz rubl, kassada esa bir yuz yigirma."],
        ["a", "Сейчас проверю. Покажите, пожалуйста, какой товар.", "Sichas praveryu. Pakajite, pajalusta, kakoy tovar.", "Hozir tekshiraman. Iltimos, qaysi tovarligini ko‘rsating."],
        ["b", "Вот этот сок. Ценник висит прямо под ним.", "Vot etat sok. Tsennik visit pryama pat nim.", "Mana shu sharbat. Narx yorlig‘i naq tagida turibdi."],
        ["a", "Да, вы правы. Ценник старый, акция уже закончилась.", "Da, vi pravi. Tsennik stari, aktsiya uje zakonchilas.", "Ha, haqsiz. Yorliq eski, aksiya allaqachon tugagan."],
        ["b", "Но это не моя проблема. Я хочу купить по цене на полке.", "No eta ne maya prablema. Ya xachu kupit pa tsene na polke.", "Lekin bu mening muammom emas. Javondagi narxda sotib olmoqchiman."],
        ["a", "Я вызову старшего продавца, подождите минуту.", "Ya vizavu starshiva pradavtsa, padajdite minutu.", "Katta sotuvchini chaqiraman, bir daqiqa kuting."],
        ["b", "Хорошо, жду.", "Xarasho, jdu.", "Xo‘p, kutaman."],
        ["a", "Старший продавец разрешил: с вас девяносто девять рублей.", "Starshi pradavets razrishil: s vas divinosta devit rubley.", "Katta sotuvchi ruxsat berdi: to‘qson to‘qqiz rubl to‘laysiz."],
        ["b", "Спасибо. И поменяйте, пожалуйста, ценник.", "Spasiba. I paminyayte, pajalusta, tsennik.", "Rahmat. Iltimos, yorliqni ham almashtiring."]
      ]
    },
    {
      title: "Mudir bilan",
      a: "Dilnoza (sotuvchi)",
      b: "Do‘kon mudiri",
      lines: [
        ["a", "Анна Петровна, можно вас на минуту?", "Anna Pitrovna, mojna vas na minutu?", "Anna Petrovna, bir daqiqaga mumkinmi?"],
        ["b", "Да, что такое?", "Da, shto takoye?", "Ha, nima gap?"],
        ["a", "В пятницу у меня экзамен. Можно поменяться сменами с Олей?", "F pyatnitsu u minya ekzamin. Mojna paminyatsa smenami s Oley?", "Juma kuni imtihonim bor. Olya bilan smenalarni almashtirsak bo‘ladimi?"],
        ["b", "Если Оля согласна — пожалуйста. Тогда она выйдет в пятницу, а вы — в воскресенье.", "Yesli Olya saglasna — pajalusta. Tagda ana viydit f pyatnitsu, a vi — v vaskrisenye.", "Agar Olya rozi bo‘lsa — marhamat. Unda u juma kuni chiqadi, siz esa yakshanba kuni."],
        ["a", "Она согласна. И ещё: в субботу я не успеваю одна на кассе.", "Ana saglasna. I yishyo: f subotu ya ne uspivayu adna na kasse.", "U rozi. Yana bir gap: shanba kuni kassada yolg‘iz ulgurmayapman."],
        ["b", "Понимаю, по субботам много покупателей. Я поставлю второго кассира.", "Panimayu, pa subotam mnoga pakupatiley. Ya pastavlyu ftarova kassira.", "Tushunaman, shanba kunlari xaridor ko‘p. Ikkinchi kassirni qo‘yaman."],
        ["a", "Спасибо большое!", "Spasiba balshoye!", "Katta rahmat!"],
        ["b", "Не за что. Только не забывайте: кассу открытой не оставлять.", "Ne za shta. Tolka ne zabivayte: kassu atkritay ne astavlyat.", "Arzimaydi. Faqat unutmang: kassani ochiq qoldirmang."]
      ]
    }
  ]
});

/* ==================== Yuqori (B2+) ==================== */
Ruscha.addJobTab("kasb-sotuvchi", "yuqori", {
  phrases: [
    { ru: "Мне платят процент с продаж, но план постоянно повышают.", pr: "Mne platyat protsent s pradash, no plan pastayanna pavishayut.", uz: "Menga sotuvdan foiz to‘lashadi, lekin rejani doim oshirishadi." },
    { ru: "Премию сняли из-за одной жалобы покупателя.", pr: "Premiyu snyali iz-za adnoy jaloby pakupatilya.", uz: "Bitta xaridor shikoyati tufayli mukofot pulini olib qo‘yishdi." },
    { ru: "Недостачу в кассе делят на всех продавцов — это незаконно.", pr: "Nidastachu f kase delyat na fsex pradavtsof — eta nizakona.", uz: "Kassadagi kamomadni hamma sotuvchilarga bo‘lishadi — bu noqonuniy." },
    { ru: "После закрытия мы ещё час бесплатно делаем выкладку.", pr: "Posle zakritiya mi yisho chas bisplatna delayem vikladku.", uz: "Yopilgandan keyin yana bir soat bepul tovar teramiz." },
    { ru: "По договору у меня пятидневка, а ставят шесть смен.", pr: "Pa dagavoru u minya pitidnefka, a stavyat shest smen.", uz: "Shartnoma bo‘yicha besh kunlik ish haftasi, lekin olti smena qo‘yishadi." },
    { ru: "Покупатель требует вернуть деньги за товар без чека.", pr: "Pakupatil trebuyet virnut dengi za tavar bis cheka.", uz: "Xaridor cheksiz tovar uchun pulni qaytarishni talab qilyapti.", sit: "Xaridor bir hafta oldin olgan kurtkasini qaytarmoqchi, lekin cheki yo‘q." },
    { ru: "Без чека возврат возможен, если есть другое доказательство покупки.", pr: "Bis cheka vazvrat vazmojen, isli yest drugoye dakazatilstva pakupki.", uz: "Agar xaridni tasdiqlovchi boshqa dalil bo‘lsa, cheksiz ham qaytarish mumkin." },
    { ru: "Этот товар обмену и возврату не подлежит.", pr: "Etat tavar abmenu i vazvratu ne padlijit.", uz: "Bu tovarni almashtirish va qaytarib olish mumkin emas." },
    { ru: "Вы можете оставить отзыв в книге жалоб и предложений.", pr: "Vi mojete astavit otzif f knige jalop i pridlajeniy.", uz: "Shikoyat va takliflar kitobiga fikringizni yozib qoldirishingiz mumkin.", sit: "Xaridor juda norozi va «shikoyat qilaman» deb turib oldi." },
    { ru: "Пожалуйста, не снимайте меня на телефон без разрешения.", pr: "Pajalusta, ne snimayte minya na tilifon biz razrisheniya.", uz: "Iltimos, ruxsatsiz meni telefonga olmang." },
    { ru: "Я понимаю ваше недовольство, давайте найдём решение.", pr: "Ya panimayu vashe nidavolstva, davayte naydyom risheniye.", uz: "Noroziligingizni tushunaman, keling, yechim topaylik." },
    { ru: "Покупатель меня оскорбил, а замечание сделали мне.", pr: "Pakupatil minya askarbil, a zamichaniye zdelali mne.", uz: "Xaridor meni haqorat qildi, tanbehni esa menga berishdi." },
    { ru: "Я не обязан работать в свой выходной.", pr: "Ya ne abyazan rabotat f svoy vixadnoy.", uz: "Dam olish kunimda ishlashga majbur emasman. (ayol aytsa: «Я не обязана работать в свой выходной»)", sit: "Mudir kechqurun qo‘ng‘iroq qilib, ertaga dam olish kuningizda ishga chiqishni buyurdi." },
    { ru: "Тайный покупатель поставил нам низкую оценку несправедливо.", pr: "Tayniy pakupatil pastavil nam niskuyu atsenku nisprividliva.", uz: "Yashirin xaridor bizga adolatsiz past baho qo‘ydi." },
    { ru: "На записи с камеры видно, что я поздоровался с покупателем.", pr: "Na zapisi s kamiri vidna, shto ya pazdaravalsa s pakupatilim.", uz: "Kamera yozuvida xaridor bilan salomlashganim ko‘rinib turibdi. (ayol aytsa: «На записи с камеры видно, что я поздоровалась с покупателем»)" },
    { ru: "Я перевыполняю план уже полгода.", pr: "Ya pirivipalnyayu plan uje polgada.", uz: "Yarim yildan beri rejani oshirib bajaryapman." },
    { ru: "Я хотел бы занять должность старшего продавца.", pr: "Ya xatel bi zanyat doljnast starshiva pradavtsa.", uz: "Katta sotuvchi lavozimini egallamoqchi edim. (ayol aytsa: «Я хотела бы занять должность старшего продавца»)" },
    { ru: "Я могу открывать и закрывать смену, у меня есть опыт.", pr: "Ya magu atkrivat i zakrivat smenu, u minya yest opit.", uz: "Smenani ochib-yopa olaman, tajribam bor." },
    { ru: "Какая зарплата у администратора магазина?", pr: "Kakaya zarplata u administratara magazina?", uz: "Do‘kon administratorining maoshi qancha?" },
    { ru: "Прошу ответить на мою жалобу в письменном виде.", pr: "Prashu atvetit na mayu jalobu f pismennam vide.", uz: "Shikoyatimga yozma javob berishingizni so‘rayman." }
  ],
  dialogues: [
    {
      title: "Cheksiz qaytarish",
      a: "Xaridor",
      b: "Sotuvchi",
      lines: [
        ["a", "Я хочу вернуть эту куртку. Она порвалась через неделю.", "Ya xachu virnut etu kurtku. Ana parvalas chiriz nidelyu.", "Bu kurtkani qaytarmoqchiman. Bir haftada yirtilib ketdi."],
        ["b", "Давайте посмотрим. У вас сохранился чек?", "Davayte pasmotrim. U vas saxranilsa chek?", "Ko‘raylik. Chekingiz saqlanganmi?"],
        ["a", "Нет, я его выбросил. Но я покупал её здесь, честное слово.", "Net, ya yivo vibrasil. No ya pakupal yeyo zdes, chesnaye slova.", "Yo‘q, tashlab yuborganman. Lekin shu yerdan sotib olganman, chin so‘zim."],
        ["b", "Без чека возврат возможен, если есть другое доказательство покупки.", "Bis cheka vazvrat vazmojen, isli yest drugoye dakazatilstva pakupki.", "Agar xaridni tasdiqlovchi boshqa dalil bo‘lsa, cheksiz ham qaytarish mumkin."],
        ["a", "Какое ещё доказательство? Вы что, мне не верите?", "Kakoye yisho dakazatilstva? Vi shto, mne ne verite?", "Yana qanaqa dalil? Nima, menga ishonmayapsizmi?"],
        ["b", "Верю. Вы платили картой? Тогда покупку видно в банковской выписке.", "Veryu. Vi platili kartay? Tagda pakupku vidna v bankafskay vipiske.", "Ishonaman. Karta bilan to‘laganmisiz? Unda xarid bank ko‘chirmasida ko‘rinadi."],
        ["a", "Да, картой. Сейчас найду в приложении... Вот.", "Da, kartay. Sichas naydu v prilajenii... Vot.", "Ha, karta bilan. Hozir ilovadan topaman... Mana."],
        ["b", "Отлично. Но шов, похоже, порван механически. Нужна проверка качества.", "Atlichna. No shof, poxaje, porvan mixanichiski. Nujna praverka kachestva.", "Ajoyib. Lekin chok mexanik ravishda yirtilganga o‘xshaydi. Sifat tekshiruvi kerak."],
        ["a", "Я ничего не рвал! Позовите администратора.", "Ya nichivo ne rval! Pazavite administratara.", "Men hech narsani yirtmadim! Administratorni chaqiring."],
        ["b", "Конечно, позову. Но я вас не обвиняю, просто так положено по закону.", "Kanechna, pazavu. No ya vas ne abvinyayu, prosta tak palojena pa zakonu.", "Albatta, chaqiraman. Lekin sizni ayblamayapman, qonun bo‘yicha shunday qilinadi."],
        ["a", "И сколько ждать эту проверку?", "I skolka zhdat etu praverku?", "Bu tekshiruvni qancha kutish kerak?"],
        ["b", "До двадцати дней. Если брак заводской, вернём деньги полностью.", "Da dvatsati dney. Isli brak zavodskoy, virnyom dengi polnastyu.", "Yigirma kungacha. Agar zavod nuqsoni bo‘lsa, pulni to‘liq qaytaramiz."],
        ["a", "Ладно, оформляйте. Но я оставлю отзыв в книге жалоб.", "Ladna, afarmlyayte. No ya astavlyu otzif f knige jalop.", "Mayli, rasmiylashtiring. Lekin shikoyat kitobiga fikr yozib qoldiraman."],
        ["b", "Это ваше право. Вот бланк заявления.", "Eta vashe prava. Vot blank zayavleniya.", "Bu sizning haqqingiz. Mana ariza blankasi."]
      ]
    },
    {
      title: "Katta sotuvchi",
      a: "Nilufar",
      b: "Mudir",
      lines: [
        ["a", "Ирина Петровна, можно с вами поговорить после смены?", "Irina Petrovna, mojna s vami pagavarit posle smeni?", "Irina Petrovna, smenadan keyin siz bilan gaplashsam maylimi?"],
        ["b", "Да, Нилуфар, заходи. Что случилось?", "Da, Nilufar, zaxadi. Shto sluchilas?", "Ha, Nilufar, kir. Nima bo‘ldi?"],
        ["a", "Во-первых, мне сняли премию из-за жалобы тайного покупателя.", "Va-pervix, mne snyali premiyu iz-za jaloby taynava pakupatilya.", "Birinchidan, yashirin xaridorning shikoyati tufayli mukofotimni olib qo‘yishdi."],
        ["b", "Он написал, что ты с ним не поздоровалась.", "On napisal, shto ti s nim ne pazdaravalas.", "U, sen u bilan salomlashmading, deb yozibdi."],
        ["a", "Это неправда. На записи с камеры видно, что я поздоровалась и предложила помощь.", "Eta niprafda. Na zapisi s kamiri vidna, shto ya pazdaravalas i pridlajila pomash.", "Bu noto‘g‘ri. Kamera yozuvida salomlashganim va yordam taklif qilganim ko‘rinib turibdi."],
        ["b", "Хорошо, я посмотрю запись. Если ты права, премию вернём.", "Xarasho, ya pasmotryu zapis. Isli ti prava, premiyu virnyom.", "Yaxshi, yozuvni ko‘raman. Agar haq bo‘lsang, mukofotni qaytaramiz."],
        ["a", "Спасибо. Во-вторых, в этом месяце мне поставили шесть смен в неделю.", "Spasiba. Va-ftarix, v etam mesitse mne pastavili shest smen v nidelyu.", "Rahmat. Ikkinchidan, bu oy menga haftasiga olti smena qo‘yishdi."],
        ["b", "Людей не хватает, ты же знаешь.", "Lyudey ne xvatayet, ti je znayesh.", "Odam yetishmayapti, o‘zing bilasan-ku."],
        ["a", "Знаю. Но по договору у меня пять дней, и шестой должен оплачиваться вдвойне.", "Znayu. No pa dagavoru u minya pyat dney, i shestoy dolzhen aplachivatsa vdvayne.", "Bilaman. Lekin shartnoma bo‘yicha menda besh kun, oltinchisi ikki baravar to‘lanishi kerak."],
        ["b", "Справедливо. Я скажу бухгалтеру.", "Spravidliva. Ya skaju buxgaltiru.", "Adolatli. Buxgalterga aytaman."],
        ["a", "И последнее. Я полгода перевыполняю план и хотела бы стать старшим продавцом.", "I paslredneye. Ya polgada pirivipalnyayu plan i xatela bi stat starshim pradavtsom.", "Va oxirgisi. Yarim yildan beri rejani oshirib bajaryapman, katta sotuvchi bo‘lmoqchi edim."],
        ["b", "Я как раз думала об этом. Ты сможешь открывать и закрывать смену?", "Ya kak ras dumala ab etam. Ti smojesh atkrivat i zakrivat smenu?", "Aynan shu haqda o‘ylayotgandim. Smenani ochib-yopa olasanmi?"],
        ["a", "Да, я уже делала это, когда Олег был в отпуске.", "Da, ya uje delala eta, kagda Alek bil v otpuske.", "Ha, Oleg ta’tilda bo‘lganida buni qilganman."],
        ["b", "Тогда со следующего месяца ты старший продавец, и оклад на пятнадцать процентов выше.", "Tagda sa sleduyushiva mesitsa ti starshiy pradavets, i aklat na pitnatsat protsentaf visshe.", "Unda keyingi oydan katta sotuvchisan, maoshing o‘n besh foiz yuqori bo‘ladi."]
      ]
    }
  ]
});
