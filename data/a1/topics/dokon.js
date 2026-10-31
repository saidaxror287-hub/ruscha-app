Ruscha.addTopic({
  id: "dokon",
  title: "Do‘kon",
  icon: "🛒",
  templates: [
    { ru: "Где у вас ...?", pr: "Gde u vas ...?", uz: "... qayerda?", ex: ["Где у вас молоко?", "Где у вас хлеб?"] },
    { ru: "У вас есть ...?", pr: "U vas yest ...?", uz: "Sizda ... bormi?", ex: ["У вас есть свежий хлеб?", "У вас есть размер побольше?"] },
    { ru: "Я ищу ...", pr: "Ya ishu ...", uz: "Men ... qidiryapman", ex: ["Я ищу обувь."] }
  ],
  phrases: [
    { ru: "Где у вас молоко?", pr: "Gde u vas malako?", uz: "Sut qayerda?", sit: "Supermarketda sut qayerda turganini topa olmayapsiz." },
    { ru: "Где у вас хлеб?", pr: "Gde u vas xlep?", uz: "Non qayerda?" },
    { ru: "У вас есть свежий хлеб?", pr: "U vas yest svejiy xlep?", uz: "Sizda yangi non bormi?", sit: "Bugun yopilgan non bor-yo‘qligini bilmoqchisiz." },
    { ru: "Вам помочь?", pr: "Vam pamoch?", uz: "Sizga yordam kerakmi? (sotuvchi so‘raydi)" },
    { ru: "Я ищу обувь.", pr: "Ya ishu obuf.", uz: "Men poyabzal qidiryapman.", sit: "Do‘konga oyoq kiyim olgani kirdingiz. Sotuvchi nima kerakligini so‘radi." },
    { ru: "Я просто смотрю, спасибо.", pr: "Ya prosta smatryu, spasiba.", uz: "Shunchaki ko‘ryapman, rahmat.", sit: "Sotuvchi yordam taklif qildi, lekin siz hozircha faqat ko‘ryapsiz." },
    { ru: "Покажите, пожалуйста, эту куртку.", pr: "Pakajite, pajalusta, etu kurtku.", uz: "Iltimos, mana bu kurtkani ko‘rsating.", sit: "Peshtaxta ortidagi kurtkani yaqindan ko‘rmoqchisiz." },
    { ru: "Можно примерить?", pr: "Mojna primerit?", uz: "Kiyib ko‘rsam bo‘ladimi?", sit: "Shimni sotib olishdan oldin kiyib ko‘rmoqchisiz." },
    { ru: "Где примерочная?", pr: "Gde primerachnaya?", uz: "Kiyib ko‘rish xonasi qayerda?" },
    { ru: "Какой это размер?", pr: "Kakoy eta razmer?", uz: "Bu qaysi o‘lcham?" },
    { ru: "У вас есть размер побольше?", pr: "U vas yest razmer pabolshe?", uz: "Kattaroq o‘lchami bormi?", sit: "Ko‘ylak sizga tor keldi." },
    { ru: "А поменьше есть?", pr: "A pamenshe yest?", uz: "Kichikrog‘i-chi, bormi?", sit: "Kurtka sizga katta keldi." },
    { ru: "Мне не подходит.", pr: "Mne ne padxodit.", uz: "Menga to‘g‘ri kelmadi." },
    { ru: "Есть другой цвет?", pr: "Yest drugoy tsvet?", uz: "Boshqa rangi bormi?", sit: "Sumka yoqdi, lekin rangi yoqmadi." },
    { ru: "Есть скидка?", pr: "Yest skitka?", uz: "Chegirma bormi?", sit: "Narxi qimmat, balki chegirma bordir — so‘raysiz." },
    { ru: "Это по акции?", pr: "Eta pa aktsii?", uz: "Bu aksiyadami? (arzonlashtirilganmi?)" },
    { ru: "Я возьму это.", pr: "Ya vazmu eta.", uz: "Shuni olaman.", sit: "Tanlab bo‘ldingiz, shu narsani sotib olasiz." },
    { ru: "Где касса?", pr: "Gde kassa?", uz: "Kassa qayerda?", sit: "Xarid tugadi, to‘lash uchun kassani qidiryapsiz." },
    { ru: "Где корзинки?", pr: "Gde karzinki?", uz: "Savatchalar qayerda?" },
    { ru: "Пакет нужен?", pr: "Paket nujin?", uz: "Paket kerakmi? (kassir so‘raydi)" },
    { ru: "Да, один пакет.", pr: "Da, adin paket.", uz: "Ha, bitta paket.", sit: "Kassir paket kerakmi deb so‘radi. Sizga bitta paket kerak." },
    { ru: "Оплата картой или наличными?", pr: "Aplata kartay ili nalichnimi?", uz: "Karta bilan to‘laysizmi yoki naqd? (kassir so‘raydi)" },
    { ru: "Наличными.", pr: "Nalichnimi.", uz: "Naqd pul bilan.", sit: "Kassir qanday to‘lashingizni so‘radi. Siz naqd to‘laysiz." },
    { ru: "Дайте, пожалуйста, чек.", pr: "Dayte, pajalusta, chek.", uz: "Iltimos, chekni bering.", sit: "To‘lov qildingiz, endi chekni olmoqchisiz." },
    { ru: "Здесь написано сто рублей.", pr: "Zdes napisana sto rubley.", uz: "Bu yerda yuz rubl deb yozilgan.", sit: "Kassada narx peshtaxtada yozilganidan qimmat chiqdi." },
    { ru: "Это сломано.", pr: "Eta slomana.", uz: "Bu buzilgan." },
    { ru: "Я хочу вернуть товар.", pr: "Ya xachu virnut tovar.", uz: "Mahsulotni qaytarmoqchiman.", sit: "Kecha olgan narsangiz buzuq chiqdi, uni do‘konga qaytarmoqchisiz." },
    { ru: "Можно обменять?", pr: "Mojna abminyat?", uz: "Almashtirsa bo‘ladimi?", sit: "Olgan ko‘ylagingiz kichik keldi, boshqasiga almashtirmoqchisiz." },
    { ru: "Вот чек.", pr: "Vot chek.", uz: "Mana chek." },
    { ru: "Спасибо, до свидания!", pr: "Spasiba, da svidaniya!", uz: "Rahmat, xayr!" }
  ],
  dialogues: [
    {
      title: "Kiyim do‘konida",
      a: "Sotuvchi",
      b: "Xaridor",
      lines: [
        ["a", "Здравствуйте! Вам помочь?", "Zdrastvuyte! Vam pamoch?", "Assalomu alaykum! Sizga yordam kerakmi?"],
        ["b", "Да. Можно примерить эту куртку?", "Da. Mojna primerit etu kurtku?", "Ha. Mana bu kurtkani kiyib ko‘rsam bo‘ladimi?"],
        ["a", "Конечно. Примерочная там.", "Kanyeshna. Primerachnaya tam.", "Albatta. Kiyib ko‘rish xonasi u yerda."],
        ["b", "Она маленькая. У вас есть размер побольше?", "Ana malenkaya. U vas yest razmer pabolshe?", "U kichik ekan. Kattaroq o‘lchami bormi?"],
        ["a", "Да, вот, пожалуйста.", "Da, vot, pajalusta.", "Ha, mana, marhamat."],
        ["b", "Отлично! Я возьму её.", "Atlichna! Ya vazmu yeyo.", "Zo‘r! Shuni olaman."]
      ]
    },
    {
      title: "Kassada",
      a: "Kassir",
      b: "Xaridor",
      lines: [
        ["a", "Пакет нужен?", "Paket nujin?", "Paket kerakmi?"],
        ["b", "Да, один пакет.", "Da, adin paket.", "Ha, bitta paket."],
        ["a", "С вас пятьсот двадцать рублей.", "S vas pitsot dvatsat rubley.", "Besh yuz yigirma rubl bo‘ladi."],
        ["b", "Картой, пожалуйста.", "Kartay, pajalusta.", "Karta bilan, iltimos."],
        ["a", "Приложите карту. Чек нужен?", "Prilajite kartu. Chek nujin?", "Kartani tekkizing. Chek kerakmi?"],
        ["b", "Да, спасибо.", "Da, spasiba.", "Ha, rahmat."]
      ]
    }
  ]
});
