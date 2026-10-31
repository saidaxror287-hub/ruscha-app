Ruscha.addTopic({
  id: "oila",
  title: "Oila",
  icon: "👨‍👩‍👧",
  templates: [
    { ru: "Это мой ...", pr: "Eta moy ...", uz: "Bu mening ...im", ex: ["Это мой муж.", "Это мой сын.", "Это мой брат."] },
    { ru: "Это моя ...", pr: "Eta maya ...", uz: "Bu mening ...im", ex: ["Это моя жена.", "Это моя дочь.", "Это моя мама."] },
    { ru: "У меня ...", pr: "U minya ...", uz: "Mening ... bor", ex: ["У меня двое детей.", "У меня есть брат и сестра."] }
  ],
  phrases: [
    { ru: "Это моя семья.", pr: "Eta maya simya.", uz: "Bu mening oilam.", sit: "Telefondagi oilaviy rasmni hamkasbingizga ko‘rsatyapsiz." },
    { ru: "Это мой муж.", pr: "Eta moy muj.", uz: "Bu mening erim." },
    { ru: "Это моя жена.", pr: "Eta maya jina.", uz: "Bu mening xotinim." },
    { ru: "Это мой сын.", pr: "Eta moy sin.", uz: "Bu mening o‘g‘lim." },
    { ru: "Это моя дочь.", pr: "Eta maya doch.", uz: "Bu mening qizim." },
    { ru: "Это мой брат.", pr: "Eta moy brat.", uz: "Bu mening akam (ukam)." },
    { ru: "Это моя мама.", pr: "Eta maya mama.", uz: "Bu mening onam." },
    { ru: "Вы женаты?", pr: "Vi jinati?", uz: "Uylanganmisiz? (erkakdan so‘raladi)" },
    { ru: "Вы замужем?", pr: "Vi zamujem?", uz: "Turmushga chiqqanmisiz? (ayoldan so‘raladi)" },
    { ru: "Я женат.", pr: "Ya jinat.", uz: "Men uylanganman. (ayol aytsa: «Я замужем»)", sit: "Yangi tanishingiz oilalimisiz deb so‘radi." },
    { ru: "Я не женат.", pr: "Ya ne jinat.", uz: "Men uylanmaganman. (ayol aytsa: «Я не замужем»)" },
    { ru: "У вас есть дети?", pr: "U vas yest deti?", uz: "Farzandlaringiz bormi?", sit: "Yangi tanishingiz bilan oila haqida gaplashyapsiz." },
    { ru: "У меня двое детей.", pr: "U minya dvoye ditey.", uz: "Ikki farzandim bor." },
    { ru: "У меня есть брат и сестра.", pr: "U minya yest brat i sistra.", uz: "Akam (ukam) va opam (singlim) bor." },
    { ru: "Я старший сын.", pr: "Ya starshiy sin.", uz: "Men to‘ng‘ich o‘g‘ilman. (ayol aytsa: «Я старшая дочь»)" },
    { ru: "Сколько лет вашему сыну?", pr: "Skolka let vashimu sinu?", uz: "O‘g‘lingiz necha yoshda?" },
    { ru: "Моей дочке пять лет.", pr: "Mayey dochke pyat let.", uz: "Qizim besh yoshda.", sit: "Hamkasbingiz qizingiz necha yoshda deb so‘radi." },
    { ru: "Моя семья живёт в Узбекистане.", pr: "Maya simya jivyot v Uzbikistane.", uz: "Oilam O‘zbekistonda yashaydi.", sit: "Hamkasbingiz oilangiz ham shu yerdami deb so‘radi." },
    { ru: "Мой брат тоже работает в Москве.", pr: "Moy brat toje rabotayet v Maskve.", uz: "Akam ham Moskvada ishlaydi." },
    { ru: "Мои родители уже пожилые.", pr: "Mai raditili uje pajiliye.", uz: "Ota-onam keksayib qolgan." },
    { ru: "Я скучаю по семье.", pr: "Ya skuchayu pa simye.", uz: "Oilamni sog‘indim.", sit: "Uydan uzoqdasiz, do‘stingizga ko‘nglingizdagini aytasiz." },
    { ru: "Я каждый день звоню маме.", pr: "Ya kajdiy den zvanyu mame.", uz: "Har kuni onamga qo‘ng‘iroq qilaman." },
    { ru: "Я отправляю деньги семье.", pr: "Ya atpravlyayu dengi simye.", uz: "Oilamga pul jo‘nataman.", sit: "Do‘stingiz oyligingizni nimaga sarflashingizni so‘radi." },
    { ru: "Летом я поеду домой.", pr: "Letam ya payedu damoy.", uz: "Yozda uyga boraman.", sit: "Ta’tilda nima qilasiz deb so‘rashdi." },
    { ru: "Моя жена ждёт ребёнка.", pr: "Maya jina jdyot ribyonka.", uz: "Xotinim farzand kutyapti (homilador)." },
    { ru: "У меня родился сын!", pr: "U minya radilsa sin!", uz: "O‘g‘lim tug‘ildi!", sit: "Uydan quvonchli xabar keldi, hamkasblaringizga aytasiz." },
    { ru: "Поздравляю!", pr: "Pazdravlyayu!", uz: "Tabriklayman!", sit: "Hamkasbingizning farzandi tug‘ilibdi." },
    { ru: "Как ваша семья?", pr: "Kak vasha simya?", uz: "Oilangiz yaxshimi?" },
    { ru: "Все здоровы, спасибо.", pr: "Fse zdarovi, spasiba.", uz: "Hammasi sog‘-salomat, rahmat." },
    { ru: "Передайте привет семье.", pr: "Piridayte privet simye.", uz: "Oilangizga salom ayting.", sit: "Tanishingiz uyiga qaytyapti, xayrlashayotib oilasiga salom yo‘llaysiz." }
  ],
  dialogues: [
    {
      title: "Oila haqida suhbat",
      a: "Ivan",
      b: "Jasur",
      lines: [
        ["a", "Джасур, у тебя есть дети?", "Djasur, u tibya yest deti?", "Jasur, farzandlaring bormi?"],
        ["b", "Да, у меня двое детей: сын и дочь.", "Da, u minya dvoye ditey: sin i doch.", "Ha, ikki farzandim bor: o‘g‘il va qiz."],
        ["a", "Сколько им лет?", "Skolka im let?", "Ular necha yoshda?"],
        ["b", "Сыну семь лет, дочке три года.", "Sinu sem let, dochke tri goda.", "O‘g‘lim yetti yoshda, qizim uch yoshda."],
        ["a", "Они живут в Узбекистане?", "Ani jivut v Uzbikistane?", "Ular O‘zbekistonda yashaydimi?"],
        ["b", "Да, с женой. Я очень скучаю по семье.", "Da, s jinoy. Ya ochen skuchayu pa simye.", "Ha, xotinim bilan. Oilamni juda sog‘indim."]
      ]
    },
    {
      title: "Quvonchli xabar",
      a: "Jasur",
      b: "Ivan",
      lines: [
        ["a", "Иван, у меня родился сын!", "Ivan, u minya radilsa sin!", "Ivan, o‘g‘lim tug‘ildi!"],
        ["b", "Поздравляю! Как назвали?", "Pazdravlyayu! Kak nazvali?", "Tabriklayman! Ismini nima qo‘ydinglar?"],
        ["a", "Назвали Умар.", "Nazvali Umar.", "Umar deb qo‘ydik."],
        ["b", "Как жена?", "Kak jina?", "Xotining qalay?"],
        ["a", "Все здоровы, спасибо.", "Fse zdarovi, spasiba.", "Hammasi sog‘-salomat, rahmat."],
        ["b", "Передай привет семье!", "Piriday privet simye!", "Oilangga salom ayt!"]
      ]
    }
  ]
});
