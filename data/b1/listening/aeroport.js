Ruscha.addListening({
  id: "b1-l-aeroport",
  title: "Aeroportdagi e’lonlar",
  icon: "✈️",
  about: "Aeroportda reys kechikadi. E’lonlarni va ikki yo‘lovchining suhbatini tinglang.",
  lines: [
    ["Уважаемые пассажиры! Начинается регистрация на рейс номер двести пятьдесят Москва — Ташкент.", "Uvajayemiye passajiri! Nachinayetsa rigistratsiya na reys nomir dvesti pitdisyat Maskva — Tashkent.", "Hurmatli yo‘lovchilar! 250-raqamli Moskva — Toshkent reysiga ro‘yxatdan o‘tish boshlanmoqda."],
    ["Регистрация проходит у стоек с двадцать первой по двадцать пятую.", "Rigistratsiya praxodit u stoyek z dvatsat pervay pa dvatsat pyatuyu.", "Ro‘yxatdan o‘tish 21-dan 25-gacha bo‘lgan peshtaxtalarda o‘tkaziladi."],
    ["Напоминаем, что бесплатно можно провезти одно место багажа весом до двадцати трёх килограммов.", "Napaminayem, shto bisplatna mojna pravisti adno mesta bagaja vesam da dvatsati tryox kilagrammaf.", "Eslatamiz, yigirma uch kilogrammgacha bo‘lgan bitta yukni bepul olib o‘tish mumkin."],
    ["За каждый лишний килограмм нужно будет доплатить.", "Za kajdiy lishniy kilagram nujna budit daplatit.", "Har bir ortiqcha kilogramm uchun qo‘shimcha to‘lash kerak bo‘ladi."],
    ["Жидкости в ручной клади должны быть в ёмкостях не больше ста миллилитров.", "Jitkasti f ruchnoy kladi doljni bit v yomkastyax ne bolshe sta millilitraf.", "Qo‘l yukidagi suyuqliklar yuz millilitrdan oshmaydigan idishlarda bo‘lishi kerak."],
    ["— Слышишь, Нодир, регистрация уже началась. Пойдём скорее.", "— Slishish, Nodir, rigistratsiya uje nachalas. Paydyom skareye.", "— Eshityapsanmi, Nodir, ro‘yxatdan o‘tish boshlandi. Tezroq yur."],
    ["— Подожди, у меня, кажется, перевес. Я везу маме столько подарков!", "— Padajdi, u minya, kajitsa, pirives. Ya vizu mame stolka padarkaf!", "— Shoshma, menimcha, yukim og‘ir. Onamga shuncha sovg‘a olib ketyapman!"],
    ["— Давай переложим часть вещей в мой чемодан, у меня только пятнадцать килограммов.", "— Davay pirilojim chast veshey v moy chimodan, u minya tolka pitnatsat kilagrammaf.", "— Kel, narsalarning bir qismini mening chamadonimga o‘tkazamiz, meniki bor-yo‘g‘i o‘n besh kilogramm."],
    ["— Отличная идея, спасибо!", "— Atlichnaya ideya, spasiba!", "— Zo‘r fikr, rahmat!"],
    ["Внимание! Рейс номер двести пятьдесят Москва — Ташкент задерживается.", "Vnimaniye! Reys nomir dvesti pitdisyat Maskva — Tashkent zadirjivayetsa.", "Diqqat! 250-raqamli Moskva — Toshkent reysi kechiktirilmoqda."],
    ["Причина задержки — плохие погодные условия в аэропорту Ташкента.", "Prichina zadershki — ploxiye pagodniye uslaviya v aerapartu Tashkenta.", "Kechikish sababi — Toshkent aeroportidagi yomon ob-havo sharoiti."],
    ["Новое время вылета — восемнадцать часов сорок минут.", "Novaye vremya vileta — vasimnatsat chisof sorak minut.", "Yangi uchish vaqti — soat o‘n sakkizu qirq daqiqa."],
    ["Приносим извинения за доставленные неудобства.", "Prinosim izvineniya za dastavlenniye niudopstva.", "Yetkazilgan noqulayliklar uchun uzr so‘raymiz."],
    ["— Вот не повезло! Задержка почти на три часа.", "— Vot ne pavizlo! Zadershka pachti na tri chisa.", "— Mana omadsizlik! Deyarli uch soatga kechikish."],
    ["— Ничего, зато успеем спокойно пообедать. Я очень голодный.", "— Nichivo, zato uspeyem spakoyna paabedat. Ya ochen golodniy.", "— Hechqisi yo‘q, buning o‘rniga bemalol tushlik qilishga ulguramiz. Juda ochman."],
    ["— Только нужно позвонить брату, чтобы он встречал нас позже.", "— Tolka nujna pazvanit bratu, shtobi on fstrichal nas pozje.", "— Faqat akamga qo‘ng‘iroq qilish kerak, bizni kechroq kutib olsin."],
    ["Уважаемые пассажиры рейса двести пятьдесят! Объявляется посадка.", "Uvajayemiye passajiri reysa dvesti pitdisyat! Abyavlyayetsa pasatka.", "250-reys yo‘lovchilari! Samolyotga chiqish e’lon qilinadi."],
    ["Посадка проходит через выход номер четырнадцать.", "Pasatka praxodit cheris vixat nomir chitirnatsat.", "Chiqish 14-raqamli eshik orqali amalga oshiriladi."],
    ["Пожалуйста, приготовьте посадочные талоны и паспорта. Желаем вам приятного полёта!", "Pajalusta, prigatovte pasadachniye taloni i pasparta. Jilayem vam priyatnava palyota!", "Iltimos, bortga chiqish talonlari va pasportlarni tayyorlang. Parvozingiz yoqimli o‘tsin!"]
  ],
  questions: [
    { q: "Qancha yukni bepul olib o‘tish mumkin?", options: ["23 kilogrammgacha bitta yuk", "15 kilogrammgacha", "Ikkita yuk"], answer: 0, line: 2 },
    { q: "Nodirning muammosi nima edi?", options: ["Pasportini unutdi", "Yuki og‘ir edi", "Chiptasi yo‘q edi"], answer: 1, line: 6 },
    { q: "Reys nima uchun kechikmoqda?", options: ["Texnik nosozlik tufayli", "Uchuvchi kechikdi", "Toshkentda ob-havo yomon"], answer: 2, line: 10 },
    { q: "Yangi uchish vaqti qachon?", options: ["15:40", "18:40", "20:00"], answer: 1, line: 11 },
    { q: "Samolyotga chiqish qaysi eshikdan?", options: ["14-eshikdan", "21-eshikdan", "4-eshikdan"], answer: 0, line: 17 }
  ]
});
