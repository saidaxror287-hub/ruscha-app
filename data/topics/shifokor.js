Ruscha.addTopic({
  id: "shifokor",
  title: "Shifokor va dorixona",
  icon: "💊",
  templates: [
    { ru: "У меня болит ...", pr: "U minya balit ...", uz: "Mening ... og‘riyapti", ex: ["У меня болит голова.", "У меня болит живот.", "У меня болит зуб.", "У меня болит горло."] },
    { ru: "Дайте что-нибудь от ...", pr: "Dayte shto-nibud at ...", uz: "...ga qarshi biror dori bering", ex: ["Дайте что-нибудь от головной боли.", "Дайте что-нибудь от кашля.", "Дайте что-нибудь от температуры."] },
    { ru: "У меня ...", pr: "U minya ...", uz: "Menda ... bor", ex: ["У меня температура.", "У меня кашель.", "У меня диабет."] }
  ],
  phrases: [
    { ru: "Мне плохо.", pr: "Mne ploxa.", uz: "Ahvolim yomon.", sit: "Ko‘chada to‘satdan o‘zingizni yomon his qildingiz." },
    { ru: "Мне нужно к врачу.", pr: "Mne nujna k vrachu.", uz: "Menga shifokorga borish kerak.", sit: "Ishxonada boshliqqa shifokorga borishingiz kerakligini aytasiz." },
    { ru: "Я хочу записаться к врачу.", pr: "Ya xachu zapisatsa k vrachu.", uz: "Shifokor qabuliga yozilmoqchiman.", sit: "Poliklinikaga qo‘ng‘iroq qilib, qabulga yozilmoqchisiz." },
    { ru: "Где регистратура?", pr: "Gde rigistratura?", uz: "Ro‘yxatga olish joyi qayerda?", sit: "Poliklinikaga keldingiz va qayerga yozilishni bilmaysiz." },
    { ru: "У меня есть полис.", pr: "U minya yest polis.", uz: "Mening tibbiy sug‘urta polisim bor." },
    { ru: "У меня болит голова.", pr: "U minya balit galava.", uz: "Boshim og‘riyapti.", sit: "Shifokor nima og‘riyotganini so‘radi. Boshingiz og‘riyapti." },
    { ru: "У меня болит живот.", pr: "U minya balit jivot.", uz: "Qornim og‘riyapti.", sit: "Shifokorga qorningiz og‘riyotganini aytasiz." },
    { ru: "У меня болит зуб.", pr: "U minya balit zup.", uz: "Tishim og‘riyapti." },
    { ru: "У меня болит горло.", pr: "U minya balit gorla.", uz: "Tomog‘im og‘riyapti." },
    { ru: "Болит здесь.", pr: "Balit zdes.", uz: "Shu yerim og‘riyapti.", sit: "Og‘riyotgan joyni qo‘lingiz bilan ko‘rsatasiz." },
    { ru: "У меня температура.", pr: "U minya timpiratura.", uz: "Isitmam bor.", sit: "Tanangiz qizib ketgan, buni shifokorga aytasiz." },
    { ru: "У меня кашель.", pr: "U minya kashil.", uz: "Yo‘talyapman." },
    { ru: "У меня насморк.", pr: "U minya nasmark.", uz: "Tumov bo‘lib qoldim." },
    { ru: "Меня тошнит.", pr: "Minya tashnit.", uz: "Ko‘nglim aynayapti." },
    { ru: "У меня кружится голова.", pr: "U minya krujitsa galava.", uz: "Boshim aylanyapti." },
    { ru: "Уже три дня.", pr: "Uje tri dnya.", uz: "Uch kundan beri.", sit: "Shifokor kasallik qachondan beri ekanini so‘radi. Uch kun bo‘ldi." },
    { ru: "У меня аллергия.", pr: "U minya alergiya.", uz: "Menda allergiya bor." },
    { ru: "У меня диабет.", pr: "U minya diabet.", uz: "Menda qand kasalligi bor." },
    { ru: "Я беременна.", pr: "Ya biremina.", uz: "Men homiladorman." },
    { ru: "Мне нужна справка.", pr: "Mne nujna spravka.", uz: "Menga ma’lumotnoma kerak.", sit: "Ishga borolmaganingiz uchun shifokordan hujjat so‘raysiz." },
    { ru: "Нужен рецепт?", pr: "Nujin ritsept?", uz: "Retsept kerakmi?", sit: "Dorixonada bu dori uchun retsept kerak-kerakmasligini so‘raysiz." },
    { ru: "Вот рецепт.", pr: "Vot ritsept.", uz: "Mana retsept." },
    { ru: "Дайте что-нибудь от головной боли.", pr: "Dayte shto-nibud at galavnoy boli.", uz: "Bosh og‘rig‘iga biror dori bering.", sit: "Dorixonadasiz, boshingiz og‘riyapti." },
    { ru: "Дайте что-нибудь от кашля.", pr: "Dayte shto-nibud at kashlya.", uz: "Yo‘talga biror dori bering." },
    { ru: "Дайте что-нибудь от температуры.", pr: "Dayte shto-nibud at timpiraturi.", uz: "Isitmani tushiradigan biror dori bering." },
    { ru: "Как принимать?", pr: "Kak prinimat?", uz: "Qanday ichish kerak?", sit: "Dori oldingiz, lekin uni qanday ichishni bilmaysiz." },
    { ru: "Сколько раз в день?", pr: "Skolka ras v den?", uz: "Kuniga necha marta?" },
    { ru: "До еды или после еды?", pr: "Da yidi ili posli yidi?", uz: "Ovqatdan oldinmi yoki keyinmi?", sit: "Dorini ovqatdan oldin yoki keyin ichishni so‘raysiz." },
    { ru: "Есть дешевле?", pr: "Yest dishevle?", uz: "Arzonrog‘i bormi?", sit: "Dori qimmat ekan, arzonrog‘ini so‘raysiz." },
    { ru: "Мне уже лучше, спасибо.", pr: "Mne uje luchshe, spasiba.", uz: "Endi yaxshiroqman, rahmat." }
  ],
  dialogues: [
    {
      title: "Shifokor qabulida",
      a: "Shifokor",
      b: "Bemor",
      lines: [
        ["a", "Здравствуйте! Что вас беспокоит?", "Zdrastvuyte! Shto vas bispakoit?", "Assalomu alaykum! Sizni nima bezovta qilyapti?"],
        ["b", "У меня болит горло и температура.", "U minya balit gorla i timpiratura.", "Tomog‘im og‘riyapti va isitmam bor."],
        ["a", "Давно?", "Davno?", "Ancha bo‘ldimi?"],
        ["b", "Уже три дня.", "Uje tri dnya.", "Uch kundan beri."],
        ["a", "Откройте рот, пожалуйста.", "Atkroyte rot, pajalusta.", "Iltimos, og‘zingizni oching."],
        ["b", "Это серьёзно?", "Eta siryozna?", "Bu jiddiymi?"]
      ]
    },
    {
      title: "Dorixonada",
      a: "Xaridor",
      b: "Farmatsevt",
      lines: [
        ["a", "Здравствуйте! Дайте что-нибудь от кашля.", "Zdrastvuyte! Dayte shto-nibud at kashlya.", "Assalomu alaykum! Yo‘talga biror dori bering."],
        ["b", "Вот сироп. Рецепт не нужен.", "Vot sirop. Ritsept ne nujin.", "Mana sirop. Retsept kerak emas."],
        ["a", "Как принимать?", "Kak prinimat?", "Qanday ichish kerak?"],
        ["b", "Три раза в день после еды.", "Tri raza v den posli yidi.", "Kuniga uch marta, ovqatdan keyin."],
        ["a", "Сколько стоит?", "Skolka stoit?", "Qancha turadi?"],
        ["b", "Триста пятьдесят рублей.", "Trista pidisyat rubley.", "Uch yuz ellik rubl."]
      ]
    }
  ]
});
