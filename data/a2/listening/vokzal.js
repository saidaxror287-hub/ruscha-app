Ruscha.addListening({
  id: "a2-l-vokzal",
  title: "Vokzaldagi e’lon",
  icon: "🚆",
  about: "Vokzalda poyezdlar haqida e’lonlar eshitiladi.",
  lines: [
    ["Уважаемые пассажиры!", "Uvajayemiye passajiri!", "Hurmatli yo‘lovchilar!"],
    ["Скорый поезд номер сто двенадцать Москва — Самара отправляется с третьего пути.", "Skoriy poyezd nomir sto dvenatsat Maskva — Samara atpravlyayetsa s tretyiva puti.", "Moskva — Samara yo‘nalishidagi 112-raqamli tezyurar poyezd uchinchi yo‘ldan jo‘naydi."],
    ["Посадка на поезд уже началась.", "Pasatka na poyezd uje nachalas.", "Poyezdga chiqish boshlandi."],
    ["Нумерация вагонов начинается с головы поезда.", "Numiratsiya vagonaf nachinayetsa z galavi poyezda.", "Vagonlar raqami poyezdning boshidan boshlanadi."],
    ["Пожалуйста, приготовьте билеты и паспорта.", "Pajalusta, prigatovte bileti i pasparta.", "Iltimos, chiptalar va pasportlarni tayyorlab qo‘ying."],
    ["Внимание! Поезд номер сорок пять Москва — Ташкент опаздывает на сорок минут.", "Vnimaniye! Poyezd nomir sorak pyat Maskva — Tashkent apazdivayet na sorak minut.", "Diqqat! 45-raqamli Moskva — Toshkent poyezdi qirq daqiqaga kechikmoqda."],
    ["Он прибудет на пятый путь в восемнадцать часов двадцать минут.", "On pribudit na pyatiy put v vasimnatsat chisof dvatsat minut.", "U soat 18:20 da beshinchi yo‘lga keladi."],
    ["Приносим извинения за задержку.", "Prinosim izvineniya za zadershku.", "Kechikish uchun uzr so‘raymiz."],
    ["Пассажиров с детьми просим пройти в зал ожидания на втором этаже.", "Passajiraf z detmi prosim prayti v zal ajidaniya na ftarom etaje.", "Bolali yo‘lovchilardan ikkinchi qavatdagi kutish zaliga o‘tishlarini so‘raymiz."],
    ["Не оставляйте свои вещи без присмотра.", "Ne astavlyayte svai veshi bis prismotra.", "Narsalaringizni qarovsiz qoldirmang."],
    ["Желаем вам счастливого пути!", "Jilayem vam shislivava puti!", "Sizga oq yo‘l tilaymiz!"]
  ],
  questions: [
    { q: "Samara poyezdi qaysi yo‘ldan jo‘naydi?", options: ["Birinchi yo‘ldan", "Uchinchi yo‘ldan", "Beshinchi yo‘ldan"], answer: 1, line: 1 },
    { q: "Toshkent poyezdi qancha kechikmoqda?", options: ["20 daqiqa", "40 daqiqa", "1 soat"], answer: 1, line: 5 },
    { q: "Toshkent poyezdi soat nechada keladi?", options: ["18:20 da", "16:40 da", "20:18 da"], answer: 0, line: 6 },
    { q: "Bolali yo‘lovchilar qayerda kutishlari mumkin?", options: ["Kassalar yonida", "Birinchi qavatda", "Ikkinchi qavatdagi kutish zalida"], answer: 2, line: 8 }
  ]
});
