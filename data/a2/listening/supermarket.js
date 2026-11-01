Ruscha.addListening({
  id: "a2-l-supermarket",
  title: "Supermarketdagi e’lon",
  icon: "🛒",
  about: "Supermarketda radio orqali xaridorlarga e’lon qilinadi.",
  lines: [
    ["Уважаемые покупатели! Добрый вечер!", "Uvajayemiye pakupateli! Dobriy vecher!", "Hurmatli xaridorlar! Xayrli kech!"],
    ["Сегодня в нашем магазине большая распродажа.", "Sivodnya v nashem magazine balshaya raspradaja.", "Bugun do‘konimizda katta chegirmali savdo."],
    ["На все молочные продукты скидка тридцать процентов.", "Na fse malochniye pradukti skitka tritsat pratsentaf.", "Barcha sut mahsulotlariga o‘ttiz foiz chegirma."],
    ["При покупке двух пачек чая третья — в подарок.", "Pri pakupke dvux pachek chaya tretya — v padarak.", "Ikki quti choy olsangiz, uchinchisi sovg‘a."],
    ["Свежие овощи и фрукты вы найдёте справа от входа.", "Svejiye ovashi i frukti vi naydyote sprava at vxoda.", "Yangi sabzavot va mevalarni kirish eshigining o‘ng tomonida topasiz."],
    ["В отделе выпечки только что появился горячий хлеб.", "V atdele vipichki tolka shto payavilsa garyachiy xlep.", "Pishiriqlar bo‘limida hozirgina issiq non keldi."],
    ["Владельцы карты постоянного покупателя получают двойные баллы.", "Vladeltsi karti pastayannava pakupatelya paluchayut dvoyniye balli.", "Doimiy xaridor kartasi egalari ikki baravar ball oladi."],
    ["Внимание! Потерялся мальчик, его зовут Тимур, ему шесть лет.", "Vnimaniye! Patiryalsa malchik, yevo zavut Timur, yemu shest let.", "Diqqat! Timur ismli olti yoshli bola yo‘qolib qoldi."],
    ["На нём синяя куртка и красная шапка.", "Na nyom sinyaya kurtka i krasnaya shapka.", "Ustida ko‘k kurtka va qizil shapka bor."],
    ["Тимур, твоя мама ждёт тебя у кассы номер пять.", "Timur, tvaya mama jdyot tibya u kassi nomir pyat.", "Timur, onang seni beshinchi kassa yonida kutyapti."],
    ["Магазин работает до двадцати трёх часов. Спасибо за покупки!", "Magazin rabotayet da dvatsati tryox chisof. Spasiba za pakupki!", "Do‘kon soat 23:00 gacha ishlaydi. Xaridingiz uchun rahmat!"]
  ],
  questions: [
    { q: "Sut mahsulotlariga qancha chegirma bor?", options: ["10 foiz", "30 foiz", "50 foiz"], answer: 1, line: 2 },
    { q: "Ikki quti choy olsangiz nima bo‘ladi?", options: ["Uchinchisi sovg‘a", "Non sovg‘a", "20 foiz chegirma"], answer: 0, line: 3 },
    { q: "Timurning onasi qayerda kutyapti?", options: ["Kirish eshigida", "Non bo‘limida", "Beshinchi kassa yonida"], answer: 2, line: 9 },
    { q: "Do‘kon soat nechagacha ishlaydi?", options: ["21:00 gacha", "22:00 gacha", "23:00 gacha"], answer: 2, line: 10 }
  ]
});
