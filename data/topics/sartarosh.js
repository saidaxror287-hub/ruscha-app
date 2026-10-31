Ruscha.addTopic({
  id: "sartarosh",
  title: "Sartaroshxona",
  icon: "💈",
  templates: [
    { ru: "Можно записаться на ...?", pr: "Mojna zapisatsa na ...?", uz: "...ga yozilsa bo‘ladimi?", ex: ["Можно записаться на завтра?", "Можно записаться на шесть часов?"] },
    { ru: "Сколько стоит ...?", pr: "Skolka stoit ...?", uz: "... qancha turadi?", ex: ["Сколько стоит стрижка?", "Сколько стоит покраска?"] },
    { ru: "Сделайте ...", pr: "Zdelayte ...", uz: "... qiling", ex: ["Сделайте покороче.", "Сделайте как на фото."] }
  ],
  phrases: [
    { ru: "Можно записаться на завтра?", pr: "Mojna zapisatsa na zaftra?", uz: "Ertaga yozilsa bo‘ladimi?", sit: "Sartaroshxonaga qo‘ng‘iroq qilib, ertaga kelmoqchisiz." },
    { ru: "Можно записаться на шесть часов?", pr: "Mojna zapisatsa na shest chisof?", uz: "Soat oltiga yozilsa bo‘ladimi?" },
    { ru: "Можно без записи?", pr: "Mojna bez zapisi?", uz: "Oldindan yozilmasdan bo‘ladimi?", sit: "Sartaroshxonaga oldindan yozilmasdan kirdingiz." },
    { ru: "Долго ждать?", pr: "Dolga jdat?", uz: "Uzoq kutish kerakmi?" },
    { ru: "Сколько стоит стрижка?", pr: "Skolka stoit strijka?", uz: "Soch olish qancha turadi?" },
    { ru: "Сколько стоит покраска?", pr: "Skolka stoit pakraska?", uz: "Soch bo‘yash qancha turadi?" },
    { ru: "Мне нужна мужская стрижка.", pr: "Mne nujna mujskaya strijka.", uz: "Menga erkaklar soch olishi kerak." },
    { ru: "Как будем стричься?", pr: "Kak budem strichsa?", uz: "Sochni qanday olamiz? (sartarosh so‘raydi)" },
    { ru: "Сделайте покороче.", pr: "Zdelayte pakaroche.", uz: "Kaltaroq qiling.", sit: "Sochingiz uzun bo‘lib ketgan, kaltaroq bo‘lishini xohlaysiz." },
    { ru: "Сделайте как на фото.", pr: "Zdelayte kak na fota.", uz: "Rasmdagidek qiling.", sit: "Telefoningizda yoqqan soch turmagining rasmi bor." },
    { ru: "Сбоку коротко, сверху длиннее.", pr: "Zboku korotka, sverxu dlinneye.", uz: "Yon tomoni kalta, tepasi uzunroq." },
    { ru: "Немного подровняйте.", pr: "Nimnoga padravnyayte.", uz: "Sal tekislab qo‘ying.", sit: "Sochingizni ko‘p kaltalatmoqchi emassiz, faqat uchlarini olish kerak." },
    { ru: "Не очень коротко, пожалуйста.", pr: "Ne ochen korotka, pajalusta.", uz: "Iltimos, juda kalta emas." },
    { ru: "Машинкой, на три миллиметра.", pr: "Mashinkay, na tri milimetra.", uz: "Mashinka bilan, uch millimetr." },
    { ru: "Подстригите бороду.", pr: "Patstrigite borodu.", uz: "Soqolni tekislab qo‘ying." },
    { ru: "Побрейте, пожалуйста.", pr: "Pabreyte, pajalusta.", uz: "Iltimos, soqolimni oling." },
    { ru: "Чёлку не трогайте.", pr: "Chyolku ne trogayte.", uz: "Peshonadagi sochga tegmang." },
    { ru: "Помыть голову?", pr: "Pamit golavu?", uz: "Boshni yuvaymi? (sartarosh so‘raydi)" },
    { ru: "Да, помойте, пожалуйста.", pr: "Da, pamoyte, pajalusta.", uz: "Ha, yuvib qo‘ying, iltimos." },
    { ru: "Вода не горячая?", pr: "Vada ne garyachaya?", uz: "Suv issiq emasmi? (sartarosh so‘raydi)" },
    { ru: "Чуть горячо.", pr: "Chut garyacho.", uz: "Sal issiq." },
    { ru: "Так нормально?", pr: "Tak narmalna?", uz: "Shunday bo‘ldimi? (sartarosh so‘raydi)" },
    { ru: "Да, отлично, спасибо!", pr: "Da, atlichna, spasiba!", uz: "Ha, zo‘r, rahmat!", sit: "Sartarosh ko‘zguni ko‘rsatib, yoqdimi deb so‘radi." },
    { ru: "Можно ещё короче сзади?", pr: "Mojna yishyo karoche szadi?", uz: "Orqa tomonini yana kaltaroq qilsa bo‘ladimi?" },
    { ru: "Я хочу покрасить волосы.", pr: "Ya xachu pakrasit volasi.", uz: "Sochimni bo‘yatmoqchiman.", sit: "Soch rangingizni o‘zgartirmoqchisiz." },
    { ru: "В какой цвет?", pr: "F kakoy tsvet?", uz: "Qaysi rangga?" },
    { ru: "Мне нужна укладка.", pr: "Mne nujna ukladka.", uz: "Menga soch turmagi kerak." },
    { ru: "Я хочу маникюр.", pr: "Ya xachu manikyur.", uz: "Manikyur qildirmoqchiman." },
    { ru: "Детская стрижка есть?", pr: "Detskaya strijka yest?", uz: "Bolalar soch olishi bormi?", sit: "O‘g‘lingizni sartaroshga olib keldingiz." },
    { ru: "Можно оплатить переводом?", pr: "Mojna aplatit pirivodam?", uz: "O‘tkazma bilan to‘lasa bo‘ladimi?" }
  ],
  dialogues: [
    {
      title: "Soch oldirish",
      a: "Sartarosh",
      b: "Mijoz",
      lines: [
        ["a", "Здравствуйте! Как будем стричься?", "Zdrastvuyte! Kak budem strichsa?", "Assalomu alaykum! Sochni qanday olamiz?"],
        ["b", "Сбоку коротко, сверху длиннее. И подстригите бороду.", "Zboku korotka, sverxu dlinneye. I patstrigite borodu.", "Yon tomoni kalta, tepasi uzunroq. Soqolni ham tekislang."],
        ["a", "Сбоку машинкой, на три миллиметра?", "Zboku mashinkay, na tri milimetra?", "Yon tomonini mashinka bilan, uch millimetrmi?"],
        ["b", "Да. Только не очень коротко.", "Da. Tolka ne ochen korotka.", "Ha. Faqat juda kalta emas."],
        ["a", "Так нормально?", "Tak narmalna?", "Shunday bo‘ldimi?"],
        ["b", "Да, отлично, спасибо! Сколько с меня?", "Da, atlichna, spasiba! Skolka s minya?", "Ha, zo‘r, rahmat! Qancha to‘layman?"]
      ]
    },
    {
      title: "Telefonda yozilish",
      a: "Nigora",
      b: "Administrator",
      lines: [
        ["a", "Здравствуйте! Можно записаться на завтра?", "Zdrastvuyte! Mojna zapisatsa na zaftra?", "Assalomu alaykum! Ertaga yozilsa bo‘ladimi?"],
        ["b", "Да. Что будем делать?", "Da. Shto budem delat?", "Ha. Nima qilamiz?"],
        ["a", "Я хочу покрасить волосы. Сколько стоит покраска?", "Ya xachu pakrasit volasi. Skolka stoit pakraska?", "Sochimni bo‘yatmoqchiman. Bo‘yash qancha turadi?"],
        ["b", "От трёх тысяч. Есть время в два часа.", "At tryox tisich. Yest vremya v dva chisa.", "Uch mingdan boshlab. Soat ikkida vaqt bor."],
        ["a", "Отлично, запишите меня.", "Atlichna, zapishite minya.", "Zo‘r, meni yozib qo‘ying."],
        ["b", "Ваше имя?", "Vashe imya?", "Ismingiz?"],
        ["a", "Нигора.", "Nigora.", "Nigora."]
      ]
    }
  ]
});
