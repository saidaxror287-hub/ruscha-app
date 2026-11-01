/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 5: the next 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2, B1 lists or from b2-part1 to b2-part4.
*/
Ruscha.addWords({
  id: "b2-part5",
  title: "B2 so‘zlar — 5-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: yurish fe’llari, kiyim va kir, imo-ishora, o‘zgarish, hayot yo‘li, inson fazilatlari, hamkorlik, hayvonlar va tomorqa.",
  groups: [
    {
      theme: "Yurish va harakat", icon: "🚶", words: [
        ["заглянуть", "zaglinut", "kirib o‘tmoq; mo‘ralamoq"],
        ["забежать", "zabijat", "yugurib kirib o‘tmoq"],
        ["заскочить", "zaskachit", "bir zumga kirib chiqmoq"],
        ["выбежать", "vibijat", "yugurib chiqmoq"],
        ["вбежать", "vbijat", "yugurib kirmoq"],
        ["отлучиться", "atluchitsa", "biroz chiqib turmoq (ish joyidan)"],
        ["отойти", "ataiti", "chetga chiqmoq, uzoqlashmoq"],
        ["обходить", "abxadit", "aylanib o‘tmoq; chetlab o‘tmoq"],
        ["объехать", "abyexat", "aylanib o‘tmoq (mashinada)"],
        ["приблизиться", "priblizitsa", "yaqinlashmoq"],
        ["удаляться", "udalyatsa", "uzoqlashmoq"],
        ["пробираться", "prabiratsa", "zo‘rg‘a o‘tib bormoq"],
        ["протискиваться", "pratiskivatsa", "siqilib o‘tmoq (olomondan)"],
        ["толкаться", "talkatsa", "turtinmoq, itarishmoq"],
        ["тащить", "tashit", "sudramoq, zo‘rg‘a ko‘tarib bormoq"],
        ["перекрыть", "pirikrit", "to‘smoq, berkitmoq (yo‘lni, suvni)"]
      ]
    },
    {
      theme: "Kiyim va kir", icon: "👕", words: [
        ["переодеться", "piriadetsa", "kiyim almashtirmoq"],
        ["раздеться", "razdetsa", "yechinmoq"],
        ["обуться", "abutsa", "oyoq kiyim kiymoq"],
        ["разуться", "razutsa", "oyoq kiyimni yechmoq"],
        ["застегнуть", "zastignut", "tugmalamoq, qadamoq"],
        ["расстегнуть", "rasstignut", "tugmasini yechmoq"],
        ["завязать", "zavizat", "bog‘lamoq"],
        ["развязать", "razvizat", "yechmoq (tugunni)"],
        ["погладить", "pagladit", "dazmollamoq; silamoq"],
        ["постирать", "pastirat", "yuvmoq (kirni)"],
        ["замочить", "zamachit", "ivitib qo‘ymoq"],
        ["отжать", "atjat", "siqmoq (kirni)"],
        ["ополоснуть", "apalasnut", "chayqamoq"],
        ["зашить", "zashit", "tikib qo‘ymoq (yirtiqni)"],
        ["пришить", "prishit", "tikib qo‘ymoq (tugmani)"],
        ["вытереть", "vitirit", "artmoq"],
        ["протереть", "pratirit", "artib chiqmoq"],
        ["сушилка", "sushilka", "quritgich"],
        ["вешалка", "veshalka", "ilgich, kiyim ilgich"],
        ["крючок", "kryuchok", "ilmoq"]
      ]
    },
    {
      theme: "Imo-ishora va ovoz", icon: "🙋", words: [
        ["кивать", "kivat", "bosh irg‘amoq"],
        ["махать", "maxat", "qo‘l silkitmoq"],
        ["пожимать плечами", "pajimat plichami", "yelka qismoq"],
        ["моргать", "margat", "ko‘z qisib-ochmoq"],
        ["подмигивать", "padmigivat", "ko‘z qismoq (ishora qilib)"],
        ["хмуриться", "xmuritsa", "qovoq solmoq"],
        ["усмехаться", "usmixatsa", "kinoya bilan jilmaymoq"],
        ["хохотать", "xaxatat", "qah-qah urib kulmoq"],
        ["рыдать", "ridat", "ho‘ng-ho‘ng yig‘lamoq"],
        ["всхлипывать", "fsxlipivat", "hiqillab yig‘lamoq"],
        ["вздыхать", "vzdixat", "xo‘rsinmoq"],
        ["вздох", "vzdox", "xo‘rsinish"],
        ["шёпот", "shopat", "pichirlash"],
        ["орать", "arat", "baqirmoq, o‘shqirmoq"],
        ["бормотать", "barmatat", "g‘o‘ldiramoq"],
        ["заикаться", "zaikatsa", "duduqlanmoq"],
        ["жест", "jest", "imo-ishora"],
        ["мимика", "mimika", "yuz ifodasi"]
      ]
    },
    {
      theme: "Qarash", icon: "👀", words: [
        ["взгляд", "vzglyat", "nigoh, qarash; nuqtai nazar"],
        ["взглянуть", "vzglinut", "qarab qo‘ymoq"],
        ["глядеть", "glidet", "qaramoq, tikilmoq"],
        ["уставиться", "ustavitsa", "tikilib qolmoq"],
        ["разглядывать", "razglyadivat", "sinchiklab qaramoq"],
        ["подглядывать", "padglyadivat", "yashirincha qaramoq, mo‘ralamoq"],
        ["оглядываться", "aglyadivatsa", "orqasiga qaramoq; atrofga qaramoq"]
      ]
    },
    {
      theme: "O‘zgarish va jarayon", icon: "📈", words: [
        ["изменение", "izmineniye", "o‘zgarish"],
        ["изменяться", "izminyatsa", "o‘zgarmoq"],
        ["перемены", "piremeni", "o‘zgarishlar"],
        ["развитие", "razvitiye", "rivojlanish"],
        ["прогресс", "pragress", "taraqqiyot"],
        ["улучшение", "uluchsheniye", "yaxshilanish"],
        ["ухудшение", "uxutsheniye", "yomonlashish"],
        ["снижение", "snijeniye", "pasayish"],
        ["падение", "padeniye", "tushish, qulash"],
        ["подъём", "padyom", "ko‘tarilish; erta turish"],
        ["процесс", "pratsess", "jarayon"],
        ["этап", "etap", "bosqich"],
        ["стадия", "stadiya", "bosqich, davr"],
        ["продолжение", "pradaljeniye", "davomi"],
        ["окончание", "akanchaniye", "tugash, oxiri"],
        ["завершение", "zavirsheniye", "yakunlash"],
        ["состояние", "sastayaniye", "holat, ahvol"],
        ["явление", "yivleniye", "hodisa"]
      ]
    },
    {
      theme: "Hayot yo‘li", icon: "🌱", words: [
        ["юность", "yunast", "yoshlik"],
        ["зрелость", "zrelast", "yetuklik"],
        ["старость", "starast", "qarilik"],
        ["взросление", "vzrasleniye", "ulg‘ayish"],
        ["пенсионный возраст", "pinsionniy vozrast", "pensiya yoshi"],
        ["воспоминание", "vaspaminaniye", "xotira, esdalik"],
        ["вечность", "vechnast", "abadiyat"],
        ["погибнуть", "pagibnut", "halok bo‘lmoq"],
        ["гибель", "gibil", "halokat, o‘lim"],
        ["похоронить", "paxaranit", "dafn etmoq"],
        ["могила", "magila", "qabr"],
        ["образ жизни", "obraz jizni", "turmush tarzi"],
        ["уровень жизни", "uravin jizni", "turmush darajasi"],
        ["качество жизни", "kachistva jizni", "hayot sifati"],
        ["быт", "bit", "turmush, maishiy hayot"],
        ["повседневный", "pafsidnevniy", "kundalik"]
      ]
    },
    {
      theme: "Qachongi? Qanday muddat?", icon: "🗓️", words: [
        ["ближайший", "blijayshiy", "eng yaqin"],
        ["дальнейший", "dalneyshiy", "keyingi, bundan keyingi"],
        ["предыдущий", "prididushiy", "oldingi"],
        ["очередной", "achiridnoy", "navbatdagi"],
        ["прежний", "prejniy", "avvalgi, oldingi"],
        ["нынешний", "nineshniy", "hozirgi"],
        ["недавний", "nidavniy", "yaqindagi"],
        ["давний", "davniy", "qadimgi, ko‘pdan beri"],
        ["старинный", "starinniy", "qadimiy, eski"],
        ["вечный", "vechniy", "abadiy"],
        ["длительный", "dlitilniy", "uzoq davom etadigan"],
        ["продолжительный", "pradaljitilniy", "uzoq, davomli"],
        ["мгновенный", "mgnavenniy", "bir zumlik"],
        ["сезонный", "sizonniy", "mavsumiy"],
        ["еженедельный", "yejinidelniy", "haftalik"],
        ["ежемесячный", "yejimesichniy", "oylik"],
        ["ежегодный", "yejigodniy", "yillik"]
      ]
    },
    {
      theme: "Fazilat va nuqsonlar", icon: "⚖️", words: [
        ["уверенность", "uverennast", "ishonch (o‘ziga)"],
        ["неуверенность", "niuverennast", "o‘ziga ishonchsizlik"],
        ["решительность", "rishitilnast", "qat’iyat"],
        ["нерешительность", "nirishitilnast", "ikkilanuvchanlik"],
        ["смелость", "smelast", "jasorat"],
        ["храбрость", "xrabrast", "botirlik"],
        ["трусость", "trusast", "qo‘rqoqlik"],
        ["скромность", "skromnast", "kamtarlik"],
        ["щедрость", "shedrast", "saxiylik"],
        ["жадность", "jadnast", "xasislik, ochko‘zlik"],
        ["грубость", "grubast", "qo‘pollik"],
        ["застенчивость", "zastenchivast", "tortinchoqlik"],
        ["верность", "vernast", "sadoqat"],
        ["преданность", "predannast", "sadoqat, fidoyilik"],
        ["привязанность", "privyazannast", "bog‘lanib qolish, mehr"],
        ["симпатия", "simpatiya", "xayrixohlik, yoqtirish"],
        ["неприязнь", "nipriyazn", "yoqtirmaslik"],
        ["вражда", "vrajda", "adovat, dushmanlik"]
      ]
    },
    {
      theme: "Qanaqa odam?", icon: "🧑", words: [
        ["болтун", "baltun", "vaysaqi"],
        ["врун", "vrun", "yolg‘onchi"],
        ["лжец", "ljets", "yolg‘onchi (qattiqroq)"],
        ["обманщик", "abmanshik", "aldoqchi"],
        ["хвастун", "xvastun", "maqtanchoq"],
        ["лентяй", "lintyay", "dangasa"],
        ["трус", "trus", "qo‘rqoq"],
        ["зануда", "zanuda", "ezma, zerikarli odam"],
        ["сплетник", "spletnik", "g‘iybatchi"],
        ["самоуверенный", "samauverenniy", "o‘ziga haddan ortiq ishongan"],
        ["дружелюбный", "drujilyubniy", "do‘stona, xushmuomala"],
        ["враждебный", "vrajdebniy", "dushmanona"],
        ["приезжий", "priyejjiy", "kelgindi, boshqa joydan kelgan"],
        ["коренной", "karinnoy", "tub (aholi); asosiy"]
      ]
    },
    {
      theme: "Ish va hamkorlik", icon: "🤝", words: [
        ["сотрудничать", "satrudnichat", "hamkorlik qilmoq"],
        ["взаимодействие", "vzaimadeystviye", "o‘zaro hamkorlik"],
        ["участие", "uchastiye", "ishtirok"],
        ["инициатива", "initsiativa", "tashabbus"],
        ["обязательство", "abizatilstva", "majburiyat"],
        ["выполнение", "vipalneniye", "bajarish"],
        ["достижение", "dastijeniye", "yutuq"],
        ["итог", "itok", "yakun"],
        ["партнёр", "partnyor", "sherik"],
        ["представитель", "pritstavitil", "vakil"],
        ["соглашение", "saglasheniye", "kelishuv, bitim"],
        ["условие", "usloviye", "shart"],
        ["деловой", "dilavoy", "ishbilarmon; ishga oid"],
        ["служебный", "slujebniy", "xizmat (…i)"],
        ["неофициальный", "niafitsialniy", "norasmiy"],
        ["общественный", "apshestvenniy", "jamoat (…i), ijtimoiy"],
        ["зарубежный", "zarubejniy", "chet el (…i)"],
        ["отечественный", "atechestvenniy", "mahalliy (o‘z yurtimizda ishlab chiqarilgan)"]
      ]
    },
    {
      theme: "Ma’lumot va dalil", icon: "🔎", words: [
        ["данные", "danniye", "ma’lumotlar"],
        ["источник", "istochnik", "manba"],
        ["сведения", "svedeniya", "ma’lumot"],
        ["доказательство", "dakazatilstva", "dalil, isbot"],
        ["эксперимент", "eksperiment", "tajriba"],
        ["сенсация", "sinsatsiya", "shov-shuvli xabar"]
      ]
    },
    {
      theme: "Hayvonlar", icon: "🦔", words: [
        ["ёж", "yosh", "tipratikan"],
        ["олень", "alen", "bug‘u"],
        ["лягушка", "lyagushka", "qurbaqa"],
        ["муравей", "muravey", "chumoli"],
        ["паук", "pauk", "o‘rgimchak"],
        ["таракан", "tarakan", "suvarak"],
        ["крыса", "krisa", "kalamush"],
        ["голубь", "golup", "kaptar"],
        ["воробей", "varabey", "chumchuq"],
        ["ворона", "varona", "qarg‘a"],
        ["сова", "sava", "boyo‘g‘li"],
        ["орёл", "aryol", "burgut"],
        ["стая", "staya", "gala, to‘da"],
        ["стадо", "stada", "poda"],
        ["корм", "korm", "yem, ozuqa"],
        ["порода", "paroda", "zot"],
        ["ветеринар", "vitirinar", "veterinar"],
        ["дрессировать", "drisiravat", "o‘rgatmoq (hayvonni)"],
        ["приручить", "priruchit", "qo‘lga o‘rgatmoq"]
      ]
    },
    {
      theme: "Tomorqa va bog‘", icon: "🌻", words: [
        ["грядка", "gryatka", "jo‘yak, egat"],
        ["теплица", "tiplitsa", "issiqxona"],
        ["клумба", "klumba", "gulzor"],
        ["куст", "kust", "buta"],
        ["сорняк", "sarnyak", "begona o‘t"],
        ["сажать", "sajat", "ekmoq"],
        ["поливать", "palivat", "sug‘ormoq"],
        ["выращивать", "virashivat", "yetishtirmoq"],
        ["собирать урожай", "sabirat urajay", "hosil yig‘moq"],
        ["семена", "simina", "urug‘lar"],
        ["удобрение", "udabreniye", "o‘g‘it"],
        ["грабли", "grabli", "xaskash"],
        ["шланг", "shlank", "shlang"]
      ]
    }
  ]
});
