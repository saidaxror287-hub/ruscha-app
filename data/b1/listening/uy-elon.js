Ruscha.addListening({
  id: "b1-l-uy-elon",
  title: "Boshqaruv kompaniyasining e’loni",
  icon: "🏢",
  about: "Uy boshqaruv kompaniyasi aholiga liftda ovozli e’lon qiladi, keyin ikki qo‘shni uni muhokama qiladi.",
  lines: [
    ["Уважаемые жители дома номер семь по улице Мира!", "Uvajayemiye jiteli doma nomir sem pa ulitse Mira!", "Mir ko‘chasidagi 7-uy aholisi, hurmatli qo‘shnilar!"],
    ["Управляющая компания сообщает о плановых работах.", "Upravlyayushaya kampaniya saapshayet a planavix rabotax.", "Boshqaruv kompaniyasi rejali ishlar haqida xabar beradi."],
    ["С двадцатого по двадцать второе ноября в доме будет отключена горячая вода.", "Z dvatsatava pa dvatsat ftaroye nayabrya v dome budit atklyuchena garyachaya vada.", "20-noyabrdan 22-noyabrgacha uyda issiq suv o‘chiriladi."],
    ["Это связано с заменой старых труб в подвале.", "Eta svyazana s zamenay starix trup f padvale.", "Bu podvaldagi eski quvurlarni almashtirish bilan bog‘liq."],
    ["Кроме того, двадцать первого ноября с десяти до шестнадцати часов не будет электричества.", "Kromi tavo, dvatsat pervava nayabrya z disyati da shisnatsati chisof ne budit elektrichestva.", "Bundan tashqari, 21-noyabr kuni soat o‘ndan o‘n oltigacha elektr bo‘lmaydi."],
    ["В это время лифты работать не будут.", "V eta vremya lifti rabotat ne budut.", "Bu vaqtda liftlar ishlamaydi."],
    ["Просим жителей отключить электроприборы от сети.", "Prosim jiteley atklyuchit elektrapribori at seti.", "Aholidan elektr asboblarini tarmoqdan uzib qo‘yishlarini so‘raymiz."],
    ["Также напоминаем: в субботу в одиннадцать часов во дворе пройдёт общее собрание жильцов.", "Takje napaminayem: f subotu v adinatsat chisof va dvare praydyot opsheye sabraniye jiltsof.", "Shuningdek, eslatamiz: shanba kuni soat o‘n birda hovlida aholining umumiy yig‘ilishi bo‘ladi."],
    ["Будем обсуждать ремонт детской площадки и установку камер в подъездах.", "Budim apsujdat rimont detskay plashatki i ustanofku kamir f padyezdax.", "Bolalar maydonchasini ta’mirlash va podyezdlarga kameralar o‘rnatishni muhokama qilamiz."],
    ["Просим не оставлять мусор у подъезда, для этого есть контейнеры.", "Prosim ne astavlyat musar u padyezda, dlya etava yest kantyeyniri.", "Chiqindini podyezd oldida qoldirmasligingizni so‘raymiz, buning uchun konteynerlar bor."],
    ["Спасибо за понимание!", "Spasiba za panimaniye!", "Tushunganingiz uchun rahmat!"],
    ["— Галина Ивановна, вы слышали объявление? Опять три дня без горячей воды!", "— Galina Ivanavna, vi slishali abyavleniye? Apyat tri dnya bis garyachey vadi!", "— Galina Ivanovna, e’lonni eshitdingizmi? Yana uch kun issiq suvsiz!"],
    ["— Слышала, Шахноза. Но трубы правда очень старые, в прошлом месяце в подвале был потоп.", "— Slishala, Shaxnoza. No trubi pravda ochen stariye, f proshlam mesitse f padvale bil patop.", "— Eshitdim, Shahnoza. Lekin quvurlar haqiqatan juda eski, o‘tgan oy podvalni suv bosgan edi."],
    ["— Это понятно. Но у меня маленький ребёнок, как я буду его купать?", "— Eta panyatna. No u minya malinkiy ribyonak, kak ya budu yevo kupat?", "— Bu tushunarli. Lekin mening kichkina bolam bor, uni qanday cho‘miltiraman?"],
    ["— Можно греть воду в чайнике или в кастрюле. Мы так всегда делаем.", "— Mojna gret vodu f chaynike ili f kastryule. Mi tak fsigda delayem.", "— Suvni choynakda yoki kastryulda isitsa bo‘ladi. Biz doim shunday qilamiz."],
    ["— А вы пойдёте на собрание в субботу?", "— A vi paydyote na sabraniye f subotu?", "— Shanba kungi yig‘ilishga borasizmi?"],
    ["— Обязательно. Я давно говорю, что площадка в ужасном состоянии.", "— Abizatelna. Ya davno gavaryu, shto plashatka v ujasnam sastayanii.", "— Albatta. Anchadan beri maydoncha ahvoli dahshatli deb aytib kelyapman."],
    ["— Согласна. И камеры нужны: недавно у соседа украли велосипед.", "— Saglasna. I kamiri nujni: nidavna u saseda ukrali vilasiped.", "— Qo‘shilaman. Kameralar ham kerak: yaqinda qo‘shnining velosipedini o‘g‘irlab ketishdi."],
    ["— Тогда увидимся в субботу во дворе!", "— Tagda uvidimsya f subotu va dvare!", "— Unda shanba kuni hovlida ko‘rishamiz!"]
  ],
  questions: [
    { q: "Issiq suv nima uchun o‘chiriladi?", options: ["Qarz uchun", "Eski quvurlar almashtiriladi", "Qozonxona yopiladi"], answer: 1, line: 3 },
    { q: "21-noyabr kuni nima bo‘lmaydi?", options: ["Elektr", "Gaz", "Internet"], answer: 0, line: 4 },
    { q: "Yig‘ilishda nimalar muhokama qilinadi?", options: ["Ijara narxi", "Yangi uy qurish", "Bolalar maydonchasi va kameralar"], answer: 2, line: 8 },
    { q: "Galina Ivanovna Shahnozaga nima maslahat berdi?", options: ["Do‘stlarinikida cho‘milish", "Suvni choynak yoki kastryulda isitish", "Hammomga borish"], answer: 1, line: 14 },
    { q: "Nega kameralar kerak?", options: ["Qo‘shnining velosipedi o‘g‘irlandi", "Bolalar shovqin qiladi", "Chiqindi tashlashadi"], answer: 0, line: 17 }
  ]
});
