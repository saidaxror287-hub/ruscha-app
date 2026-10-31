/*
  Topic file format:
    phrases:   { ru: Russian, pr: pronunciation in Uzbek Latin, uz: meaning, sit: (optional) situation for the quiz }
    templates: { ru, pr, uz, ex: [Russian phrases from this topic that follow the pattern] }
    dialogues: { title, a: role A name, b: role B name, lines: [["a" | "b", Russian, pronunciation, meaning], ...] }
*/
Ruscha.addTopic({
  id: "tanishuv",
  title: "Tanishuv va salomlashish",
  icon: "👋",
  templates: [
    { ru: "Меня зовут ...", pr: "Minya zavut ...", uz: "Mening ismim ...", ex: ["Меня зовут Алишер."] },
    { ru: "Я из ...", pr: "Ya iz ...", uz: "Men ...danman", ex: ["Я из Узбекистана.", "Я из Самарканда."] },
    { ru: "Мне ... лет", pr: "Mne ... let", uz: "Men ... yoshdaman", ex: ["Мне сорок лет."] }
  ],
  phrases: [
    { ru: "Здравствуйте!", pr: "Zdrastvuyte!", uz: "Assalomu alaykum! (hurmat bilan)", sit: "Katta yoshdagi yoki notanish odam bilan salomlashasiz." },
    { ru: "Привет!", pr: "Privet!", uz: "Salom! (do‘st va tanishlarga)", sit: "Do‘stingizni ko‘rib qoldingiz va salomlashasiz." },
    { ru: "Доброе утро!", pr: "Dobraye utra!", uz: "Xayrli tong!", sit: "Ertalab ishga keldingiz va hammaga salom berasiz." },
    { ru: "Добрый день!", pr: "Dobriy den!", uz: "Xayrli kun!" },
    { ru: "Добрый вечер!", pr: "Dobriy vecher!", uz: "Xayrli kech!", sit: "Kechqurun qo‘shningizni uchratib qoldingiz." },
    { ru: "Как дела?", pr: "Kak dela?", uz: "Ishlaringiz qalay?", sit: "Tanishingizdan ahvolini so‘ramoqchisiz." },
    { ru: "Хорошо, спасибо. А у вас?", pr: "Xarasho, spasiba. A u vas?", uz: "Yaxshi, rahmat. O‘zingizda-chi?", sit: "Sizdan «Как дела?» deb so‘rashdi. Javob berib, o‘zingiz ham so‘raysiz." },
    { ru: "Нормально.", pr: "Narmalna.", uz: "Yomon emas. Joyida." },
    { ru: "Как вас зовут?", pr: "Kak vas zavut?", uz: "Ismingiz nima?", sit: "Yangi odamning ismini bilmoqchisiz." },
    { ru: "Меня зовут Алишер.", pr: "Minya zavut Alisher.", uz: "Mening ismim Alisher.", sit: "Sizdan ismingizni so‘rashdi. Ismingiz — Alisher." },
    { ru: "Очень приятно!", pr: "Ochen priyatna!", uz: "Tanishganimdan juda xursandman!", sit: "Yangi odam bilan tanishdingiz va xursand ekaningizni aytasiz." },
    { ru: "Взаимно!", pr: "Vzaimna!", uz: "Men ham xursandman!" },
    { ru: "Откуда вы?", pr: "Atkuda vi?", uz: "Qayerdansiz?", sit: "Yangi tanishingiz qaysi yurtdan ekanini bilmoqchisiz." },
    { ru: "Я из Узбекистана.", pr: "Ya iz Uzbekistana.", uz: "Men O‘zbekistondanman.", sit: "Sizdan qayerdan ekaningizni so‘rashdi." },
    { ru: "Я из Самарканда.", pr: "Ya iz Samarkanda.", uz: "Men Samarqanddanman." },
    { ru: "Сколько вам лет?", pr: "Skolka vam let?", uz: "Yoshingiz nechada?" },
    { ru: "Мне сорок лет.", pr: "Mne sorak let.", uz: "Men qirq yoshdaman." },
    { ru: "Я плохо говорю по-русски.", pr: "Ya ploxa gavaryu pa-ruski.", uz: "Men ruschani yomon gapiraman.", sit: "Rus tilini hali yaxshi bilmasligingizni aytmoqchisiz." },
    { ru: "Я немного понимаю по-русски.", pr: "Ya nimnoga panimayu pa-ruski.", uz: "Men ruschani biroz tushunaman." },
    { ru: "Говорите медленнее, пожалуйста.", pr: "Gavarite medlinneye, pajalusta.", uz: "Iltimos, sekinroq gapiring.", sit: "Odam juda tez gapiryapti, siz tushunmayapsiz." },
    { ru: "Повторите, пожалуйста.", pr: "Paftarite, pajalusta.", uz: "Iltimos, takrorlang.", sit: "Gapni eshitmay qoldingiz, yana bir marta aytishlarini so‘raysiz." },
    { ru: "Я не понимаю.", pr: "Ya ne panimayu.", uz: "Men tushunmayapman.", sit: "Sizga nimadir deyishdi, lekin siz hech narsa tushunmadingiz." },
    { ru: "Вы говорите по-узбекски?", pr: "Vi gavarite pa-uzbekski?", uz: "Siz o‘zbekcha gapirasizmi?", sit: "O‘zbekcha biladigan odam qidiryapsiz." },
    { ru: "Я здесь работаю.", pr: "Ya zdes rabotayu.", uz: "Men shu yerda ishlayman." },
    { ru: "Спасибо!", pr: "Spasiba!", uz: "Rahmat!", sit: "Sizga yordam berishdi." },
    { ru: "Пожалуйста.", pr: "Pajalusta.", uz: "Arzimaydi. / Marhamat.", sit: "Sizga «Спасибо!» deyishdi. Javob qaytarasiz." },
    { ru: "Извините.", pr: "Izvinite.", uz: "Kechirasiz.", sit: "Avtobusda bilmasdan birovni turtib yubordingiz." },
    { ru: "До свидания!", pr: "Da svidaniya!", uz: "Xayr! (hurmat bilan)", sit: "Idoradan chiqib ketyapsiz va xodim bilan xayrlashasiz." },
    { ru: "Пока!", pr: "Paka!", uz: "Xayr! (do‘st va tanishlarga)" },
    { ru: "Увидимся завтра!", pr: "Uvidimsya zavtra!", uz: "Ertaga ko‘rishamiz!", sit: "Ishdan ketyapsiz, hamkasbingizni ertaga yana ko‘rasiz." }
  ],
  dialogues: [
    {
      title: "Ish joyida tanishuv",
      a: "Ivan",
      b: "Alisher",
      lines: [
        ["a", "Здравствуйте! Меня зовут Иван.", "Zdrastvuyte! Minya zavut Ivan.", "Assalomu alaykum! Mening ismim Ivan."],
        ["b", "Здравствуйте! Меня зовут Алишер.", "Zdrastvuyte! Minya zavut Alisher.", "Assalomu alaykum! Mening ismim Alisher."],
        ["a", "Очень приятно! Откуда вы?", "Ochen priyatna! Atkuda vi?", "Tanishganimdan xursandman! Qayerdansiz?"],
        ["b", "Я из Узбекистана, из Ташкента.", "Ya iz Uzbekistana, iz Tashkenta.", "Men O‘zbekistondanman, Toshkentdan."],
        ["a", "Вы хорошо говорите по-русски!", "Vi xarasho gavarite pa-ruski!", "Siz ruschani yaxshi gapirar ekansiz!"],
        ["b", "Спасибо! Я ещё учусь.", "Spasiba! Ya yishyo uchus.", "Rahmat! Hali o‘rganyapman."]
      ]
    },
    {
      title: "Yangi qo‘shni",
      a: "Mariya",
      b: "Dilnoza",
      lines: [
        ["a", "Добрый вечер! Как дела?", "Dobriy vecher! Kak dela?", "Xayrli kech! Ishlaringiz qalay?"],
        ["b", "Хорошо, спасибо. А у вас?", "Xarasho, spasiba. A u vas?", "Yaxshi, rahmat. O‘zingizda-chi?"],
        ["a", "Тоже хорошо. Вы наша новая соседка?", "Toje xarasho. Vi nasha novaya sasedka?", "Menda ham yaxshi. Siz yangi qo‘shnimizmisiz?"],
        ["b", "Да. Меня зовут Дильноза.", "Da. Minya zavut Dilnoza.", "Ha. Mening ismim Dilnoza."],
        ["a", "Очень приятно! Я Мария.", "Ochen priyatna! Ya Mariya.", "Tanishganimdan xursandman! Men Mariyaman."],
        ["b", "Взаимно! До свидания!", "Vzaimna! Da svidaniya!", "Men ham xursandman! Xayr!"]
      ]
    }
  ]
});
