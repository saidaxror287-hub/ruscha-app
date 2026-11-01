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
Ruscha.addJobTab("kasb-kuryer", "yuqori", {
  phrases: [
    { ru: "За доставку в дождь и снег должна быть надбавка.", pr: "Za dastafku v dosht i snek dalzhna bit nadbafka.", uz: "Yomg‘ir va qorda yetkazib berganga ustama haq bo‘lishi kerak." },
    { ru: "Мне начислили меньше, чем показывает приложение.", pr: "Mne nachislili menshe, chem pakazivayet prilajeniye.", uz: "Ilova ko‘rsatganidan kamroq hisoblab berishdi.", sit: "Haftalik to‘lov keldi, lekin summa ilovadagidan kam." },
    { ru: "Я работаю как самозанятый или по трудовому договору?", pr: "Ya rabotayu kak samazanyatiy ili pa trudavomu dagavoru?", uz: "O‘zini o‘zi band qilgan sifatida ishlaymanmi yoki mehnat shartnomasi bo‘yichami? (ayol aytsa: «Я работаю как самозанятая или по трудовому договору?»)" },
    { ru: "Кто отвечает, если заказ повредится в дороге?", pr: "Kto atvichayet, isli zakas pavriditsa v daroge?", uz: "Buyurtma yo‘lda shikastlansa, kim javob beradi?" },
    { ru: "В договоре нет ни слова о страховке.", pr: "V dagavore net ni slova a strafofke.", uz: "Shartnomada sug‘urta haqida bir og‘iz ham gap yo‘q." },
    { ru: "Клиент обвиняет меня в том, чего я не делал.", pr: "Kliyent abvinyayet minya f tom, chivo ya ne delal.", uz: "Mijoz meni qilmagan ishimda ayblayapti. (ayol aytsa: «Клиент обвиняет меня в том, чего я не делала»)" },
    { ru: "Пакет был запечатан, я его не открывал.", pr: "Paket bil zapichatan, ya yivo ne atkrival.", uz: "Paket muhrlangan edi, men uni ochmaganman. (ayol aytsa: «Пакет был запечатан, я его не открывала»)", sit: "Mijoz paketdan bir narsa yo‘qolgan deb sizni ayblayapti." },
    { ru: "Вы не имеете права требовать с меня деньги за чужую ошибку.", pr: "Vi ne imeyete prava trebavat s minya dengi za chujuyu ashipku.", uz: "Boshqaning xatosi uchun mendan pul talab qilishga haqqingiz yo‘q." },
    { ru: "Ресторан задержал заказ на сорок минут, а штраф получил я.", pr: "Ristaran zadirjal zakas na sorak minut, a shtraf paluchil ya.", uz: "Restoran buyurtmani qirq daqiqa kechiktirdi, jarimani esa men oldim. (ayol aytsa: «Ресторан задержал заказ на сорок минут, а штраф получила я»)" },
    { ru: "Прошу снять штраф, вот скриншоты с временем.", pr: "Prashu snyat shtraf, vot skrinshati s vremenim.", uz: "Jarimani olib tashlashingizni so‘rayman, mana vaqti ko‘rsatilgan skrinshotlar." },
    { ru: "Служба поддержки не отвечает уже третий день.", pr: "Sluzhba padderzhki ne atvichayet uje tretiy den.", uz: "Qo‘llab-quvvatlash xizmati uchinchi kundan beri javob bermayapti." },
    { ru: "Я хочу написать официальную претензию.", pr: "Ya xachu napisat afitsialnuyu pritenziyu.", uz: "Rasmiy da’vo xati yozmoqchiman." },
    { ru: "Сколько платят за час, если заказов нет?", pr: "Skolka platyat za chas, isli zakazaf net?", uz: "Buyurtma bo‘lmasa, soatiga qancha to‘lashadi?" },
    { ru: "Гарантированный минимум мне так и не выплатили.", pr: "Garantiravanniy minimum mne tak i ne viplatili.", uz: "Kafolatlangan eng kam haqni menga baribir to‘lashmadi." },
    { ru: "Велосипед компании сломался не по моей вине.", pr: "Vilasiped kampanii slamalsa ne pa mayey vine.", uz: "Kompaniya velosipedi mening aybim bilan buzilgani yo‘q.", sit: "Menejer buzilgan velosiped ta’miri pulini maoshingizdan ushlamoqchi." },
    { ru: "Почему меня всё время ставят на самые дальние районы?", pr: "Pachimu minya fsyo vremya stavyat na samiye dalniye rayoni?", uz: "Nega meni doim eng uzoq tumanlarga qo‘yishadi?" },
    { ru: "Я хотел бы стать старшим курьером.", pr: "Ya xatel bi stat starshim kuryeram.", uz: "Katta kuryer bo‘lishni xohlardim. (ayol aytsa: «Я хотела бы стать старшим курьером»)" },
    { ru: "За полгода у меня ни одного опоздания.", pr: "Za polgada u minya ni adnavo apazdaniya.", uz: "Yarim yil davomida birorta ham kechikishim yo‘q." },
    { ru: "Я знаю все районы и могу помогать новичкам.", pr: "Ya znayu fse rayoni i magu pamagat navichkam.", uz: "Barcha tumanlarni bilaman, yangi kelganlarga yordam bera olaman." },
    { ru: "Если условия не изменятся, мне придётся искать другую работу.", pr: "Isli uslaviya ne izmenyatsa, mne pridyotsa iskat druguyu rabotu.", uz: "Agar sharoit o‘zgarmasa, boshqa ish qidirishga majbur bo‘laman." }
  ],
  dialogues: [
    {
      title: "Singan piyola",
      a: "Mijoz",
      b: "Kuryer",
      lines: [
        ["a", "Подождите! Коробка помята, а внутри разбитая чашка.", "Padajdite! Karopka pamyata, a vnutri razbitaya chashka.", "To‘xtang! Quti majaqlangan, ichida esa singan piyola."],
        ["b", "Мне очень жаль. Но коробку мне выдали уже такой.", "Mne ochin jal. No karopku mne vidali uje takoy.", "Juda afsusdaman. Lekin qutini menga shu holda berishgan."],
        ["a", "Не надо врать! Вы её уронили, а теперь оправдываетесь.", "Ne nada vrat! Vi yeyo uranili, a tipere apravdivayetis.", "Yolg‘on gapirmang! Uni tushirib yubordingiz, endi bahona qilyapsiz."],
        ["b", "Пожалуйста, не повышайте голос. Давайте разберёмся спокойно.", "Pajalusta, ne pavishayte golas. Davayte razbiryomsa spakoyna.", "Iltimos, ovozingizni ko‘tarmang. Keling, xotirjam hal qilaylik."],
        ["a", "Что тут разбираться? Верните мне деньги за чашку.", "Shto tut razbiratsa? Virnite mne dengi za chashku.", "Bu yerda nimani hal qilish kerak? Piyolaning pulini qaytaring."],
        ["b", "Я не могу вернуть деньги сам. Это делает служба поддержки.", "Ya ne magu virnut dengi sam. Eta delayet sluzhba padderzhki.", "Pulni o‘zim qaytara olmayman. Buni qo‘llab-quvvatlash xizmati qiladi."],
        ["a", "И что мне теперь делать?", "I shto mne tipere delat?", "Endi nima qilay?"],
        ["b", "Сфотографируйте коробку и чашку, пока я здесь.", "Sfatagrafiruyte karopku i chashku, paka ya zdes.", "Men shu yerdaligimda qutini va piyolani suratga oling."],
        ["a", "Хорошо. А вы подтвердите, что коробка была мятая?", "Xarasho. A vi padtverdite, shto karopka bila myataya?", "Yaxshi. Quti majaqlangan bo‘lganini tasdiqlaysizmi?"],
        ["b", "Да, я отмечу это в приложении и напишу комментарий.", "Da, ya atmechu eta v prilajenii i napishu kamentariy.", "Ha, buni ilovada belgilab, izoh yozaman."],
        ["a", "А если они откажут?", "A isli ani atkajut?", "Agar ular rad etsa-chi?"],
        ["b", "Тогда можно подать претензию магазину: упаковка была плохая.", "Tagda mojna padat pritenziyu magazinu: upakofka bila ploxaya.", "Unda do‘konga da’vo yuborish mumkin: qadoq yomon bo‘lgan."],
        ["a", "Ладно. Извините за грубость.", "Ladna. Izvinite za grubast.", "Mayli. Qo‘polligim uchun kechirasiz."]
      ]
    },
    {
      title: "Katta kuryer",
      a: "Kuryer",
      b: "Menejer",
      lines: [
        ["a", "Здравствуйте. У меня два вопроса: про оплату и про мою должность.", "Zdrastvuyte. U minya dva vaprosa: pra aplatu i pra mayu doljnast.", "Assalomu alaykum. Ikki savolim bor: to‘lov va lavozimim haqida."],
        ["b", "Давайте начнём с оплаты.", "Davayte nachnyom s aplati.", "To‘lovdan boshlaylik."],
        ["a", "На прошлой неделе я работал шестьдесят часов, а гарантированный минимум мне не выплатили.", "Na proshlay nidele ya rabotal shizdisyat chisof, a garantiravanniy minimum mne ne viplatili.", "O‘tgan hafta oltmish soat ishladim, lekin kafolatlangan minimumni to‘lashmadi."],
        ["b", "Минимум платят, только если вы не отказывались от заказов.", "Minimum platyat, tolka isli vi ne atkazivalis at zakazaf.", "Minimum faqat buyurtmalardan voz kechmagan bo‘lsangiz to‘lanadi."],
        ["a", "Я отказался от двух, потому что меня отправляли за двадцать километров на велосипеде.", "Ya atkazalsa at dvux, patamushta minya atpravlyali za dvatsat kilametraf na vilasipede.", "Ikkitasidan voz kechdim, chunki meni velosipedda yigirma kilometr uzoqqa jo‘natishgan edi."],
        ["b", "Это действительно слишком далеко. Я попрошу бухгалтерию всё пересчитать.", "Eta deystvitelna slishkam dalyoko. Ya paprashu buxgaltiriyu fsyo pirishitat.", "Bu haqiqatan ham juda uzoq. Buxgalteriyadan hammasini qayta hisoblashni so‘rayman."],
        ["a", "Спасибо. Теперь про должность: я хотел бы стать старшим курьером.", "Spasiba. Tipere pra doljnast: ya xatel bi stat starshim kuryeram.", "Rahmat. Endi lavozim haqida: katta kuryer bo‘lishni xohlardim."],
        ["b", "А почему вы считаете, что готовы?", "A pachimu vi shitayete, shto gatovi?", "Nega o‘zingizni tayyor deb hisoblaysiz?"],
        ["a", "За полгода у меня ни одного опоздания, и я знаю все районы.", "Za polgada u minya ni adnavo apazdaniya, i ya znayu fse rayoni.", "Yarim yilda birorta kechikishim yo‘q, barcha tumanlarni bilaman."],
        ["b", "Старший курьер ещё отвечает за смену и решает конфликты с клиентами.", "Starshiy kuryer yisho atvichayet za smenu i rishayet kanflikti s kliyentami.", "Katta kuryer yana smenaga javob beradi va mijozlar bilan nizolarni hal qiladi."],
        ["a", "Я с этим справлюсь. Новички и так часто звонят мне за советом.", "Ya s etim spravlyus. Navichki i tak chasta zvanyat mne za savetam.", "Uddalayman. Yangilar shundoq ham ko‘pincha mendan maslahat so‘rab qo‘ng‘iroq qilishadi."],
        ["b", "Хорошо. Месяц испытательного срока, потом поговорим о зарплате.", "Xarasho. Mesits ispitatilnava sroka, potam pagavarim a zarplate.", "Yaxshi. Bir oy sinov muddati, keyin maosh haqida gaplashamiz."],
        ["a", "А на испытательном сроке будет доплата?", "A na ispitatilnam sroke budit daplata?", "Sinov muddatida qo‘shimcha haq bo‘ladimi?"],
        ["b", "Будет, десять процентов. Начинаем с понедельника.", "Budit, desit protsentaf. Nachinayem s panidelnika.", "Bo‘ladi, o‘n foiz. Dushanbadan boshlaymiz."]
      ]
    }
  ]
});
