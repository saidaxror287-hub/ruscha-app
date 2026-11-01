/*
  Kuryer — job pack (Kasblar). One part per tab:
    boshlangich = Boshlang‘ich (A1–A2) · orta = O‘rta (B1) · yuqori = Yuqori (B2+).
  A tab without a part is shown as "Tez orada". See README.md → "Add a job pack".
  Never change "id" or a published "ru": saved progress depends on them.
*/
Ruscha.addJob({ id: "kasb-kuryer", title: "Kuryer", icon: "🛵" });

/* ==================== Boshlang‘ich (A1–A2) ==================== */
Ruscha.addJobTab("kasb-kuryer", "boshlangich", {
  templates: [
    { ru: "Вы заказывали ...?", pr: "Vi zakazivali ...?", uz: "Siz ... buyurtma qilganmisiz?", ex: ["Вы заказывали пиццу?", "Вы заказывали продукты?"] },
    { ru: "Я буду через ...", pr: "Ya budu chiriz ...", uz: "...da yetib boraman", ex: ["Я буду через десять минут.", "Я буду через пять минут."] },
    { ru: "Какой ...?", pr: "Kakoy ...?", uz: "Qaysi ...? / ... qanaqa?", ex: ["Какой подъезд?", "Какой код домофона?"] }
  ],
  phrases: [
    { ru: "Здравствуйте, я курьер.", pr: "Zdrastvuyte, ya kuryer.", uz: "Assalomu alaykum, men kuryerman.", sit: "Buyurtma olib keldingiz, mijoz eshikni ochdi." },
    { ru: "Я из доставки.", pr: "Ya iz dastafki.", uz: "Yetkazib berish xizmatidanman." },
    { ru: "Вы заказывали пиццу?", pr: "Vi zakazivali pitsu?", uz: "Pitsa buyurtma qilganmisiz?" },
    { ru: "Вы заказывали продукты?", pr: "Vi zakazivali pradukti?", uz: "Oziq-ovqat buyurtma qilganmisiz?" },
    { ru: "Я буду через десять минут.", pr: "Ya budu chiriz desit minut.", uz: "O‘n daqiqada yetib boraman.", sit: "Mijoz qo‘ng‘iroq qilib, qachon kelasiz deb so‘radi." },
    { ru: "Я буду через пять минут.", pr: "Ya budu chiriz pyat minut.", uz: "Besh daqiqada yetib boraman." },
    { ru: "Какой подъезд?", pr: "Kakoy padyest?", uz: "Qaysi podyezd?" },
    { ru: "Какая квартира?", pr: "Kakaya kvartira?", uz: "Qaysi xonadon?" },
    { ru: "Какой код домофона?", pr: "Kakoy kot damafona?", uz: "Domofon kodi qanaqa?", sit: "Binoga kirolmayapsiz, eshik kod bilan ochiladi." },
    { ru: "Домофон не работает.", pr: "Damafon ne rabotayet.", uz: "Domofon ishlamayapti." },
    { ru: "Откройте, пожалуйста, дверь.", pr: "Atkroyte, pajalusta, dver.", uz: "Iltimos, eshikni oching." },
    { ru: "Я не могу найти ваш дом.", pr: "Ya ne magu nayti vash dom.", uz: "Uyingizni topolmayapman.", sit: "Navigator noto‘g‘ri ko‘rsatyapti, mijozga qo‘ng‘iroq qilasiz." },
    { ru: "Я стою у подъезда.", pr: "Ya stayu u padyezda.", uz: "Podyezd oldida turibman." },
    { ru: "Спуститесь, пожалуйста.", pr: "Spustites, pajalusta.", uz: "Iltimos, pastga tushing." },
    { ru: "Ваш заказ.", pr: "Vash zakas.", uz: "Buyurtmangiz." },
    { ru: "Проверьте, пожалуйста, заказ.", pr: "Praverte, pajalusta, zakas.", uz: "Iltimos, buyurtmani tekshiring." },
    { ru: "Распишитесь здесь.", pr: "Raspishites zdes.", uz: "Shu yerga imzo qo‘ying." },
    { ru: "Заказ уже оплачен.", pr: "Zakas uje aplachin.", uz: "Buyurtma allaqachon to‘langan." },
    { ru: "У меня есть терминал, можно картой.", pr: "U minya yest tirminal, mojna kartay.", uz: "Menda terminal bor, karta bilan to‘lasa bo‘ladi.", sit: "Mijoz naqd pulim yo‘q, faqat karta bor dedi." },
    { ru: "У меня нет сдачи.", pr: "U minya net sdachi.", uz: "Menda qaytim yo‘q.", sit: "Mijoz katta pul berdi, lekin sizda mayda pul yo‘q." },
    { ru: "Извините за опоздание.", pr: "Izvinite za apazdaniye.", uz: "Kechikkanim uchun kechirasiz.", sit: "Tirbandlik tufayli buyurtmani yarim soat kech olib keldingiz." },
    { ru: "Пробки, я немного опаздываю.", pr: "Probki, ya nimnoga apazdivayu.", uz: "Tirbandlik, sal kechikyapman." },
    { ru: "Можно оставить у двери?", pr: "Mojna astavit u dviri?", uz: "Eshik oldida qoldirsam bo‘ladimi?", sit: "Mijoz uyda yo‘q, lekin telefonni ko‘tardi." },
    { ru: "Вас не было дома.", pr: "Vas ne bila doma.", uz: "Uyda yo‘q edingiz." },
    { ru: "Чего-то не хватает в заказе.", pr: "Chivo-ta ne xvatayet v zakaze.", uz: "Buyurtmada nimadir yetishmayapti. (mijoz aytadi)" },
    { ru: "Я позвоню в поддержку.", pr: "Ya pazvanyu f paddershku.", uz: "Qo‘llab-quvvatlash xizmatiga qo‘ng‘iroq qilaman.", sit: "Mijoz buyurtmada mahsulot yetishmayotganidan shikoyat qildi." },
    { ru: "Поставьте, пожалуйста, хорошую оценку.", pr: "Pastafte, pajalusta, xaroshuyu atsenku.", uz: "Iltimos, yaxshi baho qo‘ying." },
    { ru: "Мне нужно забрать заказ.", pr: "Mne nujna zabrat zakas.", uz: "Buyurtmani olib ketishim kerak.", sit: "Restoranga buyurtmani olishga keldingiz." },
    { ru: "Заказ ещё не готов?", pr: "Zakas yishyo ne gatof?", uz: "Buyurtma hali tayyor emasmi?" },
    { ru: "Хорошего дня!", pr: "Xaroshiva dnya!", uz: "Kuningiz yaxshi o‘tsin!", sit: "Buyurtmani topshirdingiz va xayrlashyapsiz." }
  ],
  dialogues: [
    {
      title: "Eshik oldida",
      a: "Kuryer",
      b: "Mijoz",
      lines: [
        ["a", "Здравствуйте, я из доставки. Вы заказывали продукты?", "Zdrastvuyte, ya iz dastafki. Vi zakazivali pradukti?", "Assalomu alaykum, men yetkazib berish xizmatidanman. Oziq-ovqat buyurtma qilganmisiz?"],
        ["b", "Да, спасибо. Заказ уже оплачен?", "Da, spasiba. Zakas uje aplachin?", "Ha, rahmat. Buyurtma to‘langanmi?"],
        ["a", "Да, оплачен. Проверьте, пожалуйста, заказ.", "Da, aplachin. Praverte, pajalusta, zakas.", "Ha, to‘langan. Iltimos, buyurtmani tekshiring."],
        ["b", "Всё на месте.", "Fsyo na meste.", "Hammasi joyida."],
        ["a", "Поставьте, пожалуйста, хорошую оценку. Хорошего дня!", "Pastafte, pajalusta, xaroshuyu atsenku. Xaroshiva dnya!", "Iltimos, yaxshi baho qo‘ying. Kuningiz yaxshi o‘tsin!"],
        ["b", "Обязательно! До свидания.", "Abizatilna! Da svidaniya.", "Albatta! Xayr."]
      ]
    },
    {
      title: "Uyni topolmayapman",
      a: "Kuryer",
      b: "Mijoz",
      lines: [
        ["a", "Алло, это курьер. Я не могу найти ваш дом.", "Alo, eta kuryer. Ya ne magu nayti vash dom.", "Allo, bu kuryer. Uyingizni topolmayapman."],
        ["b", "Вы где сейчас?", "Vi gde sichas?", "Hozir qayerdasiz?"],
        ["a", "Я у большого магазина, на углу.", "Ya u balshova magazina, na uglu.", "Muyulishdagi katta do‘kon oldidaman."],
        ["b", "Наш дом прямо за магазином. Второй подъезд.", "Nash dom pryama za magazinam. Ftaroy padyest.", "Uyimiz do‘konning naq orqasida. Ikkinchi podyezd."],
        ["a", "Какой код домофона?", "Kakoy kot damafona?", "Domofon kodi qanaqa?"],
        ["b", "Сорок пять. Квартира двенадцать.", "Sorak pyat. Kvartira dvinatsat.", "Qirq besh. O‘n ikkinchi xonadon."]
      ]
    }
  ]
});

/* ==================== O‘rta (B1) ==================== */
Ruscha.addJobTab("kasb-kuryer", "orta", {
  phrases: [
    { ru: "Приложение зависло, я не вижу адрес.", pr: "Prilajeniye zavisla, ya ne viju adris.", uz: "Ilova qotib qoldi, manzilni ko‘rmayapman.", sit: "Yo‘lda ketayotganingizda telefondagi ilova ishlamay qoldi." },
    { ru: "Я попал в небольшую аварию.", pr: "Ya papal v nibalshuyu avariyu.", uz: "Kichik avariyaga uchradim. (ayol aytsa: «Я попала в небольшую аварию»)", sit: "Velosipedda yiqildingiz va operatorga qo‘ng‘iroq qilyapsiz." },
    { ru: "Упаковка порвалась по дороге.", pr: "Upakofka parvalas pa daroge.", uz: "Yo‘lda qadoq yirtilib ketdi." },
    { ru: "Клиент не отвечает уже десять минут.", pr: "Kliyent ne atvichayet uje desit minut.", uz: "Mijoz o‘n daqiqadan beri javob bermayapti.", sit: "Manzilga keldingiz, mijoz telefonni ko‘tarmayapti, qo‘llab-quvvatlashga yozasiz." },
    { ru: "Что мне делать с заказом?", pr: "Shto mne delat s zakazam?", uz: "Buyurtmani nima qilay?" },
    { ru: "У меня сел телефон.", pr: "U minya sel tilifon.", uz: "Telefonimning quvvati tugadi." },
    { ru: "Можно поговорить с менеджером?", pr: "Mojna pagavarit s menedjiram?", uz: "Menejer bilan gaplashsam bo‘ladimi?" },
    { ru: "Мне не засчитали заказ.", pr: "Mne ne zashitali zakas.", uz: "Buyurtmani hisobimga yozishmadi." },
    { ru: "Почему у меня штраф?", pr: "Pachimu u minya shtraf?", uz: "Nega menga jarima solindi?", sit: "Ilovada maoshingizdan pul ushlab qolinganini ko‘rdingiz." },
    { ru: "Я не виноват, ресторан задержал заказ.", pr: "Ya ne vinavat, ristaran zadirjal zakas.", uz: "Men aybdor emasman, restoran buyurtmani kechiktirdi. (ayol aytsa: «Я не виновата, ресторан задержал заказ»)" },
    { ru: "Когда будет выплата?", pr: "Kagda budit viplata?", uz: "Pul qachon to‘lanadi?" },
    { ru: "В дождь надо ехать медленнее.", pr: "V dosht nada yexat medlinniye.", uz: "Yomg‘irda sekinroq yurish kerak." },
    { ru: "Ночью обязательно включай фары.", pr: "Nochyu abizatilna fklyuchay fari.", uz: "Kechasi chiroqlarni albatta yoq." },
    { ru: "Без шлема на смену не выходи.", pr: "Bez shlema na smenu ne vixadi.", uz: "Dubulg‘asiz smenaga chiqma." },
    { ru: "Не пользуйся телефоном за рулём.", pr: "Ne polzuysya tilifonam za rulyom.", uz: "Rul ortida telefondan foydalanma." },
    { ru: "Какой у меня график на неделю?", pr: "Kakoy u minya grafik na nidelyu?", uz: "Mening haftalik ish jadvalim qanaqa?" },
    { ru: "Можно взять слот на выходные?", pr: "Mojna vzyat slot na vixadniye?", uz: "Dam olish kunlariga slot olsam bo‘ladimi?" },
    { ru: "Я хочу поменять смену.", pr: "Ya xachu paminyat smenu.", uz: "Smenamni almashtirmoqchiman." },
    { ru: "Завтра я не смогу выйти, я заболел.", pr: "Zaftra ya ne smagu viyti, ya zabalel.", uz: "Ertaga ishga chiqolmayman, kasal bo‘lib qoldim. (ayol aytsa: «Завтра я не смогу выйти, я заболела»)", sit: "Isitmangiz chiqdi, ertangi smena haqida menejerga yozyapsiz." },
    { ru: "Сколько заказов в час в среднем?", pr: "Skolka zakazaf f chas f srednim?", uz: "O‘rtacha soatiga nechta buyurtma bo‘ladi?" }
  ],
  dialogues: [
    {
      title: "Avariyadan keyin",
      a: "Kuryer",
      b: "Operator",
      lines: [
        ["a", "Алло, поддержка? Это курьер, номер сорок два.", "Alo, paddershka? Eta kuryer, nomir sorak dva.", "Allo, qo‘llab-quvvatlashmi? Bu kuryer, raqami qirq ikki."],
        ["b", "Слушаю вас. Что случилось?", "Slushayu vas. Shto sluchilas?", "Eshitaman. Nima bo‘ldi?"],
        ["a", "Я упал с велосипеда, заказ немного пострадал.", "Ya upal s vilasipeda, zakas nimnoga pastradal.", "Velosipeddan yiqildim, buyurtma biroz shikastlandi."],
        ["b", "Вы сами в порядке? Нужна помощь?", "Vi sami f paryatke? Nujna pomash?", "O‘zingiz yaxshimisiz? Yordam kerakmi?"],
        ["a", "Со мной всё нормально, только колено болит.", "Sa mnoy fsyo narmalna, tolka kalena balit.", "Men yaxshiman, faqat tizzam og‘riyapti."],
        ["b", "Сфотографируйте заказ и отправьте нам в чат.", "Sfatagrafiruyte zakas i atpravte nam f chat.", "Buyurtmani suratga olib, bizga chatga yuboring."],
        ["a", "Хорошо. А штрафа не будет?", "Xarasho. A shtrafa ne budit?", "Xo‘p. Jarima bo‘lmaydimi?"],
        ["b", "Нет, это не ваша вина. Клиенту отправим новый заказ.", "Net, eta ne vasha vina. Kliyentu atpravim novi zakas.", "Yo‘q, bu sizning aybingiz emas. Mijozga yangi buyurtma yuboramiz."],
        ["a", "Спасибо. Я могу продолжить смену?", "Spasiba. Ya magu pradoljit smenu?", "Rahmat. Smenani davom ettirsam bo‘ladimi?"],
        ["b", "Если чувствуете себя хорошо — да. Будьте осторожны.", "Yesli chustvuyite sibya xarasho — da. Butte astarojni.", "Agar o‘zingizni yaxshi his qilsangiz — ha. Ehtiyot bo‘ling."]
      ]
    },
    {
      title: "Ish jadvali haqida",
      a: "Kuryer",
      b: "Menejer",
      lines: [
        ["a", "Здравствуйте! Можно с вами поговорить о графике?", "Zdrastvuyte! Mojna s vami pagavarit a grafike?", "Assalomu alaykum! Siz bilan ish jadvali haqida gaplashsam bo‘ladimi?"],
        ["b", "Да, конечно. Что вы хотите?", "Da, kanyeshna. Shto vi xatite?", "Ha, albatta. Nima xohlaysiz?"],
        ["a", "Я хочу работать по вечерам, утром я учусь.", "Ya xachu rabotat pa vicheram, utram ya uchus.", "Kechqurunlari ishlamoqchiman, ertalab o‘qiyman."],
        ["b", "Вечером много заказов, это хорошо. С шести до двенадцати подойдёт?", "Vecheram mnoga zakazaf, eta xarasho. S shesti da dvinatsati padaydyot?", "Kechqurun buyurtma ko‘p, bu yaxshi. Oltidan o‘n ikkigacha to‘g‘ri keladimi?"],
        ["a", "Да, подойдёт. А в выходные?", "Da, padaydyot. A v vixadniye?", "Ha, to‘g‘ri keladi. Dam olish kunlari-chi?"],
        ["b", "В субботу нужны курьеры на весь день.", "F subotu nujni kuryeri na ves den.", "Shanba kuni kun bo‘yi kuryerlar kerak."],
        ["a", "Хорошо, в субботу я могу. Когда будет выплата?", "Xarasho, f subotu ya magu. Kagda budit viplata?", "Yaxshi, shanba kuni chiqa olaman. Pul qachon to‘lanadi?"],
        ["b", "Каждую неделю, по понедельникам.", "Kajduyu nidelyu, pa panidelnikam.", "Har hafta, dushanba kunlari."]
      ]
    }
  ]
});

/* ==================== Yuqori (B2+) ==================== */
/* Tez orada: Ruscha.addJobTab("kasb-kuryer", "yuqori", { phrases: [...], dialogues: [...] }); */
