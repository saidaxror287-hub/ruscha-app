Ruscha.addTopic({
  id: "aeroport",
  title: "Aeroport va poyezd",
  icon: "✈️",
  templates: [
    { ru: "Мне нужен билет до ...", pr: "Mne nujen bilet da ...", uz: "Menga ...gacha chipta kerak", ex: ["Мне нужен билет до Москвы.", "Мне нужен билет до Казани."] },
    { ru: "Где находится ...?", pr: "Gde naxoditsa ...?", uz: "... qayerda joylashgan?", ex: ["Где находится регистрация?", "Где находится выход номер пять?"] },
    { ru: "Когда ...?", pr: "Kagda ...?", uz: "... qachon?", ex: ["Когда посадка?", "Когда отправляется поезд?"] }
  ],
  phrases: [
    { ru: "Мне нужен билет до Москвы.", pr: "Mne nujen bilet da Maskvi.", uz: "Menga Moskvagacha chipta kerak.", sit: "Vokzal kassasidasiz, Moskvaga bormoqchisiz." },
    { ru: "Мне нужен билет до Казани.", pr: "Mne nujen bilet da Kazani.", uz: "Menga Qozongacha chipta kerak." },
    { ru: "Билет в одну сторону.", pr: "Bilet v adnu storanu.", uz: "Bir tomonga chipta." },
    { ru: "Туда и обратно.", pr: "Tuda i abratna.", uz: "Borish-qaytish." },
    { ru: "Есть места на завтра?", pr: "Yest mista na zaftra?", uz: "Ertaga joy bormi?", sit: "Ertangi poyezdga chipta qolganini bilmoqchisiz." },
    { ru: "Нижнее место, пожалуйста.", pr: "Nijneye mesta, pajalusta.", uz: "Pastki o‘rin, iltimos.", sit: "Poyezdda tepadagi o‘ringa chiqish siz uchun qiyin." },
    { ru: "Где находится регистрация?", pr: "Gde naxoditsa rigistratsiya?", uz: "Reysga ro‘yxatdan o‘tish joyi qayerda?", sit: "Aeroportga kirdingiz, reysga ro‘yxatdan o‘tish joyini qidiryapsiz." },
    { ru: "Где находится выход номер пять?", pr: "Gde naxoditsa vixat nomir pyat?", uz: "Beshinchi chiqish qayerda?" },
    { ru: "Когда посадка?", pr: "Kagda pasatka?", uz: "Samolyotga chiqish qachon?" },
    { ru: "Когда отправляется поезд?", pr: "Kagda atpravlyayetsa poyest?", uz: "Poyezd qachon jo‘naydi?", sit: "Chipta oldingiz, endi jo‘nash vaqtini bilmoqchisiz." },
    { ru: "С какого пути?", pr: "S kakova puti?", uz: "Qaysi yo‘ldan?" },
    { ru: "Ваш паспорт и билет, пожалуйста.", pr: "Vash paspart i bilet, pajalusta.", uz: "Pasport va chiptangizni ko‘rsating. (xodim aytadi)" },
    { ru: "Сколько можно провезти багажа?", pr: "Skolka mojna pravisti bagaja?", uz: "Qancha yuk olib o‘tsa bo‘ladi?" },
    { ru: "Это ручная кладь.", pr: "Eta ruchnaya klat.", uz: "Bu qo‘l yuki." },
    { ru: "Сдать багаж здесь?", pr: "Zdat bagash zdes?", uz: "Yuk shu yerda topshiriladimi?" },
    { ru: "У меня перевес?", pr: "U minya pirives?", uz: "Yukim ortiqchami?", sit: "Chamadoningiz tarozida og‘ir chiqdi." },
    { ru: "Положите вещи в лоток.", pr: "Palajite veshi v latok.", uz: "Narsalaringizni lotokka qo‘ying. (xavfsizlik xodimi aytadi)" },
    { ru: "Снимите ремень и обувь.", pr: "Snimite rimen i obuf.", uz: "Kamar va oyoq kiyimingizni yeching." },
    { ru: "Рейс задерживается.", pr: "Reys zadirjivayetsa.", uz: "Reys kechikyapti." },
    { ru: "Рейс отменили.", pr: "Reys atminili.", uz: "Reys bekor qilindi." },
    { ru: "Я опоздал на рейс.", pr: "Ya apazdal na reys.", uz: "Reysga kechikib qoldim. (ayol aytsa: «Я опоздала на рейс»)", sit: "Aeroportga yetib keldingiz, lekin samolyot uchib ketibdi." },
    { ru: "Где получить багаж?", pr: "Gde paluchit bagash?", uz: "Yukni qayerdan olsa bo‘ladi?", sit: "Samolyotdan tushdingiz, chamadoningizni olishingiz kerak." },
    { ru: "Мой чемодан не пришёл.", pr: "Moy chimadan ne prishol.", uz: "Chamadonim kelmadi.", sit: "Hamma yuklar chiqdi, lekin sizning chamadoningiz yo‘q." },
    { ru: "Какой у меня вагон?", pr: "Kakoy u minya vagon?", uz: "Vagonim nechanchi?" },
    { ru: "Это моё место.", pr: "Eta mayo mesta.", uz: "Bu mening joyim.", sit: "Poyezdda joyingizga boshqa odam o‘tirib olibdi." },
    { ru: "Можно поменяться местами?", pr: "Mojna paminyatsa mistami?", uz: "Joy almashsak bo‘ladimi?" },
    { ru: "Принесите, пожалуйста, бельё.", pr: "Prinisite, pajalusta, bilyo.", uz: "Iltimos, choyshab olib keling. (poyezdda provodnikka)" },
    { ru: "Сколько минут стоим?", pr: "Skolka minut stoim?", uz: "Necha daqiqa turamiz?", sit: "Poyezd bekatda to‘xtadi, tushib suv olmoqchisiz." },
    { ru: "Какая следующая станция?", pr: "Kakaya sleduyushaya stantsiya?", uz: "Keyingi stansiya qaysi?" },
    { ru: "Я лечу в Ташкент.", pr: "Ya lichu f Tashkent.", uz: "Toshkentga uchyapman." }
  ],
  dialogues: [
    {
      title: "Vokzal kassasida",
      a: "Yo‘lovchi",
      b: "Kassir",
      lines: [
        ["a", "Здравствуйте! Мне нужен билет до Казани на завтра.", "Zdrastvuyte! Mne nujen bilet da Kazani na zaftra.", "Assalomu alaykum! Ertaga Qozongacha chipta kerak."],
        ["b", "В одну сторону?", "V adnu storanu?", "Bir tomongami?"],
        ["a", "Туда и обратно. Нижнее место, пожалуйста.", "Tuda i abratna. Nijneye mesta, pajalusta.", "Borish-qaytish. Pastki o‘rin, iltimos."],
        ["b", "Есть нижнее в седьмом вагоне. Ваш паспорт.", "Yest nijneye f sidmom vagone. Vash paspart.", "Yettinchi vagonda pastki o‘rin bor. Pasportingiz."],
        ["a", "Вот. Когда отправляется поезд?", "Vot. Kagda atpravlyayetsa poyest?", "Mana. Poyezd qachon jo‘naydi?"],
        ["b", "В восемь тридцать, с третьего пути.", "V vosim tritsat, s tretiva puti.", "Soat sakkiz o‘ttizda, uchinchi yo‘ldan."]
      ]
    },
    {
      title: "Aeroportda",
      a: "Xodim",
      b: "Yo‘lovchi",
      lines: [
        ["a", "Ваш паспорт и билет, пожалуйста.", "Vash paspart i bilet, pajalusta.", "Pasport va chiptangizni ko‘rsating."],
        ["b", "Вот, пожалуйста. Это ручная кладь.", "Vot, pajalusta. Eta ruchnaya klat.", "Mana, marhamat. Bu qo‘l yuki."],
        ["a", "Чемодан ставьте сюда. Перевес три килограмма.", "Chimadan stafte syuda. Pirives tri kilagrama.", "Chamadonni bu yerga qo‘ying. Uch kilo ortiqcha."],
        ["b", "Сколько нужно доплатить?", "Skolka nujna daplatit?", "Qancha qo‘shimcha to‘lash kerak?"],
        ["a", "Две тысячи рублей. Посадка через час, выход номер пять.", "Dve tisichi rubley. Pasatka chiriz chas, vixat nomir pyat.", "Ikki ming rubl. Samolyotga chiqish bir soatdan keyin, beshinchi chiqish."],
        ["b", "Спасибо!", "Spasiba!", "Rahmat!"]
      ]
    }
  ]
});
