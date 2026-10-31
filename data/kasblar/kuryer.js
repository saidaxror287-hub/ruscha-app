Ruscha.addTopic({
  id: "kasb-kuryer",
  section: "kasblar",
  title: "Kuryer",
  icon: "🛵",
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
