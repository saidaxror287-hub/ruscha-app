Ruscha.addTopic({
  id: "favqulodda",
  title: "Favqulodda holatlar",
  icon: "🚨",
  templates: [
    { ru: "Вызовите ...!", pr: "Vizavite ...!", uz: "... chaqiring!", ex: ["Вызовите скорую!", "Вызовите полицию!", "Вызовите пожарных!"] },
    { ru: "У меня украли ...", pr: "U minya ukrali ...", uz: "Mening ...imni o‘g‘irlashdi", ex: ["У меня украли телефон.", "У меня украли кошелёк.", "У меня украли документы."] },
    { ru: "Где ближайшая ...?", pr: "Gde blijayshaya ...?", uz: "Eng yaqin ... qayerda?", ex: ["Где ближайшая больница?", "Где ближайшая аптека?"] }
  ],
  phrases: [
    { ru: "Помогите!", pr: "Pamagite!", uz: "Yordam bering!", sit: "Ko‘chada sizga hujum qilishdi." },
    { ru: "Осторожно!", pr: "Astarojna!", uz: "Ehtiyot bo‘ling!" },
    { ru: "Вызовите скорую!", pr: "Vizavite skoruyu!", uz: "Tez yordam chaqiring!", sit: "Ko‘chada bir odam yiqilib, hushidan ketdi." },
    { ru: "Вызовите полицию!", pr: "Vizavite palitsiyu!", uz: "Politsiya chaqiring!" },
    { ru: "Вызовите пожарных!", pr: "Vizavite pajarnix!", uz: "O‘t o‘chiruvchilarni chaqiring!" },
    { ru: "Звоните сто двенадцать!", pr: "Zvanite sto dvinatsat!", uz: "112 ga qo‘ng‘iroq qiling! (Rossiyadagi yagona favqulodda raqam)" },
    { ru: "Пожар!", pr: "Pajar!", uz: "Yong‘in!", sit: "Binodan tutun chiqayotganini ko‘rdingiz." },
    { ru: "Выходите, быстро!", pr: "Vixadite, bistra!", uz: "Tezda chiqing!" },
    { ru: "Здесь пахнет газом.", pr: "Zdes paxnit gazam.", uz: "Bu yerda gaz hidi kelyapti.", sit: "Uyga kirdingiz va gaz hidini sezdingiz." },
    { ru: "Мы застряли в лифте.", pr: "Mi zastryali v lifte.", uz: "Liftda qolib ketdik.", sit: "Lift qavatlar orasida to‘xtab qoldi, tugma orqali dispetcherga gapiryapsiz." },
    { ru: "Человеку плохо!", pr: "Chilaveku ploxa!", uz: "Odamning ahvoli yomon!" },
    { ru: "Он не дышит.", pr: "On ne dishit.", uz: "U nafas olmayapti." },
    { ru: "Здесь авария.", pr: "Zdes avariya.", uz: "Bu yerda avariya bo‘ldi.", sit: "Ko‘z oldingizda ikki mashina to‘qnashdi, 112 ga qo‘ng‘iroq qildingiz." },
    { ru: "Есть раненые.", pr: "Yest raniniye.", uz: "Yaradorlar bor." },
    { ru: "Я поранился.", pr: "Ya paranilsa.", uz: "Jarohatlanib qoldim. (ayol aytsa: «Я поранилась»)", sit: "Ishda qo‘lingizni kesib oldingiz." },
    { ru: "Мой адрес: улица Мира, дом десять.", pr: "Moy adres: ulitsa Mira, dom desit.", uz: "Manzilim: Mir ko‘chasi, 10-uy.", sit: "Tez yordamga qo‘ng‘iroq qildingiz, operator manzilni so‘radi." },
    { ru: "Приезжайте быстрее!", pr: "Priyejjayte bistreye!", uz: "Tezroq keling!" },
    { ru: "Где ближайшая больница?", pr: "Gde blijayshaya balnitsa?", uz: "Eng yaqin kasalxona qayerda?" },
    { ru: "Где ближайшая аптека?", pr: "Gde blijayshaya apteka?", uz: "Eng yaqin dorixona qayerda?" },
    { ru: "У меня украли телефон.", pr: "U minya ukrali tilefon.", uz: "Telefonimni o‘g‘irlashdi.", sit: "Metroda cho‘ntagingizni tekshirdingiz — telefon yo‘q." },
    { ru: "У меня украли кошелёк.", pr: "U minya ukrali kashilyok.", uz: "Hamyonimni o‘g‘irlashdi." },
    { ru: "У меня украли документы.", pr: "U minya ukrali dakumenti.", uz: "Hujjatlarimni o‘g‘irlashdi." },
    { ru: "Я хочу написать заявление.", pr: "Ya xachu napisat zayavleniye.", uz: "Ariza yozmoqchiman.", sit: "O‘g‘irlik haqida politsiyaga ariza bermoqchisiz." },
    { ru: "Мой ребёнок потерялся.", pr: "Moy ribyonak patiryalsa.", uz: "Bolam yo‘qolib qoldi.", sit: "Bozorda bolangiz ko‘zdan g‘oyib bo‘ldi." },
    { ru: "Меня избили.", pr: "Minya izbili.", uz: "Meni urishdi." },
    { ru: "Мне угрожают.", pr: "Mne ugrajayut.", uz: "Menga tahdid qilishyapti." },
    { ru: "Не трогайте меня!", pr: "Ne trogayte minya!", uz: "Menga tegmang!" },
    { ru: "Отпустите меня!", pr: "Atpustite minya!", uz: "Meni qo‘yib yuboring!" },
    { ru: "Я ничего не сделал.", pr: "Ya nichivo ne zdelal.", uz: "Men hech narsa qilmadim. (ayol aytsa: «Я ничего не сделала»)" },
    { ru: "Я имею право позвонить.", pr: "Ya imeyu prava pazvanit.", uz: "Qo‘ng‘iroq qilishga haqqim bor.", sit: "Sizni politsiya bo‘limiga olib kelishdi, konsullikka qo‘ng‘iroq qilmoqchisiz." }
  ],
  dialogues: [
    {
      title: "112 ga qo‘ng‘iroq",
      a: "Operator",
      b: "Bobur",
      lines: [
        ["a", "Сто двенадцать, слушаю вас.", "Sto dvinatsat, slushayu vas.", "112, eshitaman."],
        ["b", "Здравствуйте! Здесь авария. Есть раненые.", "Zdrastvuyte! Zdes avariya. Yest raniniye.", "Assalomu alaykum! Bu yerda avariya bo‘ldi. Yaradorlar bor."],
        ["a", "Какой адрес?", "Kakoy adres?", "Manzil qanaqa?"],
        ["b", "Улица Мира, дом десять.", "Ulitsa Mira, dom desit.", "Mir ko‘chasi, 10-uy."],
        ["a", "Человек дышит?", "Chilavek dishit?", "Odam nafas olyaptimi?"],
        ["b", "Да, дышит. Приезжайте быстрее!", "Da, dishit. Priyejjayte bistreye!", "Ha, nafas olyapti. Tezroq keling!"],
        ["a", "Скорая уже едет.", "Skoraya uje yedet.", "Tez yordam yo‘lda."]
      ]
    },
    {
      title: "Telefon o‘g‘irlandi",
      a: "Bobur",
      b: "Politsiyachi",
      lines: [
        ["a", "Помогите, пожалуйста! У меня украли телефон.", "Pamagite, pajalusta! U minya ukrali tilefon.", "Iltimos, yordam bering! Telefonimni o‘g‘irlashdi."],
        ["b", "Где это случилось?", "Gde eta sluchilas?", "Bu qayerda sodir bo‘ldi?"],
        ["a", "В метро, полчаса назад.", "V mitro, polchisa nazat.", "Metroda, yarim soat oldin."],
        ["b", "Ваши документы, пожалуйста.", "Vashi dakumenti, pajalusta.", "Hujjatlaringiz, iltimos."],
        ["a", "Вот мой паспорт. Я хочу написать заявление.", "Vot moy paspart. Ya xachu napisat zayavleniye.", "Mana pasportim. Ariza yozmoqchiman."],
        ["b", "Хорошо, пройдёмте со мной.", "Xarasho, praydyomte sa mnoy.", "Yaxshi, men bilan yuring."]
      ]
    }
  ]
});
