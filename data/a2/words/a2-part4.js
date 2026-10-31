/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 4: the remaining words of the TORFL / ТРКИ A2 (basic) lexical minimum that are not in A1 or A2 parts 1–3:
  perfective verbs, ordinal numbers, pronouns, comparatives and other core words, grouped by theme.
*/
Ruscha.addWords({
  id: "a2-part4",
  title: "A2 so‘zlar — 4-qism",
  icon: "📘",
  note: "ТРКИ A2 (bazaviy daraja) leksik minimumining qolgan so‘zlari: tugallangan fe’llar, tartib sonlar, olmoshlar va boshqalar.",
  groups: [
    {
      theme: "Tugallangan fe’llar (1)", icon: "✅", words: [
        ["сказать", "skazat", "aytmoq (bir marta)"],
        ["спросить", "sprasit", "so‘ramoq (bir marta)"],
        ["ответить", "atvetit", "javob bermoq (bir marta)"],
        ["показать", "pakazat", "ko‘rsatmoq (bir marta)"],
        ["рассказать", "rasskazat", "aytib bermoq, hikoya qilmoq"],
        ["написать", "napisat", "yozmoq (oxirigacha)"],
        ["прочитать", "prachitat", "o‘qib chiqmoq"],
        ["сделать", "zdelat", "qilmoq (oxirigacha)"],
        ["посмотреть", "pasmatret", "qaramoq, ko‘rib chiqmoq"],
        ["послушать", "paslushat", "tinglab ko‘rmoq"],
        ["понять", "panyat", "tushunmoq (bir marta)"],
        ["решить", "rishit", "hal qilmoq; qaror qilmoq"],
        ["начать", "nachat", "boshlamoq (bir marta)"],
        ["закончить", "zakonchit", "tugatmoq (bir marta)"],
        ["помочь", "pamoch", "yordam bermoq (bir marta)"],
        ["получить", "paluchit", "olmoq (bir marta)"],
        ["открыть", "atkrit", "ochmoq (bir marta)"],
        ["закрыть", "zakrit", "yopmoq (bir marta)"],
        ["встретить", "fstretit", "uchratmoq, kutib olmoq"],
        ["найти", "nayti", "topmoq"]
      ]
    },
    {
      theme: "Tugallangan fe’llar (2)", icon: "☑️", words: [
        ["взять", "vzyat", "olmoq (bir marta)"],
        ["дать", "dat", "bermoq (bir marta)"],
        ["позвать", "pazvat", "chaqirmoq"],
        ["потерять", "patiryat", "yo‘qotmoq"],
        ["вспомнить", "fspomnit", "eslab qolmoq, esga olmoq"],
        ["выучить", "viuchit", "yodlab olmoq"],
        ["подумать", "padumat", "o‘ylab ko‘rmoq"],
        ["подождать", "padajdat", "kutib turmoq"],
        ["попросить", "paprasit", "iltimos qilmoq (bir marta)"],
        ["поговорить", "pagavarit", "gaplashib olmoq"],
        ["позавтракать", "pazaftrakat", "nonushta qilmoq"],
        ["пообедать", "paabedat", "tushlik qilmoq"],
        ["поужинать", "pauujinat", "kechki ovqatni yemoq"],
        ["познакомиться", "paznakomitsa", "tanishmoq (bir marta)"],
        ["заплатить", "zaplatit", "to‘lamoq (bir marta)"],
        ["продать", "pradat", "sotmoq (bir marta)"],
        ["приготовить", "prigatovit", "tayyorlamoq, pishirmoq"],
        ["отдохнуть", "atdaxnut", "dam olmoq (bir marta)"],
        ["устать", "ustat", "charchamoq"],
        ["заболеть", "zabalet", "kasal bo‘lib qolmoq"]
      ]
    },
    {
      theme: "Hayotiy fe’llar", icon: "🌱", words: [
        ["бывать", "bivat", "bo‘lib turmoq, bormoq"],
        ["пользоваться", "polzavatsa", "foydalanmoq"],
        ["становиться", "stanavitsa", "bo‘lib bormoq"],
        ["стать", "stat", "bo‘lmoq (kimdir bo‘lib)"],
        ["родиться", "raditsa", "tug‘ilmoq"],
        ["умереть", "umiret", "vafot etmoq"],
        ["жениться", "jinitsa", "uylanmoq (erkak haqida)"],
        ["выйти замуж", "viyti zamuj", "turmushga chiqmoq (ayol haqida)"],
        ["развестись", "razvistis", "ajrashmoq"],
        ["расти", "rasti", "o‘smoq"],
        ["бриться", "britsa", "soqol olmoq"],
        ["кашлять", "kashlyat", "yo‘talmoq"],
        ["лечь", "lech", "yotmoq (bir marta)"],
        ["сесть", "sest", "o‘tirmoq (bir marta)"],
        ["встать", "fstat", "turmoq (bir marta)"],
        ["проснуться", "prasnutsa", "uyg‘onmoq"],
        ["заснуть", "zasnut", "uxlab qolmoq"],
        ["опоздать", "apazdat", "kechikmoq (bir marta)"],
        ["ошибаться", "ashibatsa", "xato qilmoq, adashmoq"],
        ["случиться", "sluchitsa", "sodir bo‘lmoq"]
      ]
    },
    {
      theme: "Tartib sonlar va miqdor", icon: "🔢", words: [
        ["четвёртый", "chitvyortiy", "to‘rtinchi"],
        ["пятый", "pyatiy", "beshinchi"],
        ["шестой", "shistoy", "oltinchi"],
        ["седьмой", "sidmoy", "yettinchi"],
        ["восьмой", "vasmoy", "sakkizinchi"],
        ["девятый", "divyatiy", "to‘qqizinchi"],
        ["десятый", "disyatiy", "o‘ninchi"],
        ["одиннадцатый", "adinatsatiy", "o‘n birinchi"],
        ["двенадцатый", "dvinatsatiy", "o‘n ikkinchi"],
        ["двадцатый", "dvatsatiy", "yigirmanchi"],
        ["тридцатый", "tritsatiy", "o‘ttizinchi"],
        ["сотый", "sotiy", "yuzinchi"],
        ["четверть", "chetvirt", "chorak"],
        ["треть", "tret", "uchdan bir"],
        ["десяток", "disyatak", "o‘ntalik, o‘nta"],
        ["сотня", "sotnya", "yuztalik, yuzta"],
        ["дважды", "dvajdi", "ikki marta"],
        ["вдвоём", "vdvayom", "ikki kishi bo‘lib"],
        ["втроём", "ftrayom", "uch kishi bo‘lib"],
        ["оба", "oba", "ikkalasi"]
      ]
    },
    {
      theme: "Olmoshlar", icon: "👉", words: [
        ["кто-то", "kto-ta", "kimdir"],
        ["что-то", "shto-ta", "nimadir"],
        ["где-то", "gde-ta", "qayerdadir"],
        ["куда-то", "kuda-ta", "qayergadir"],
        ["когда-то", "kagda-ta", "qachonlardir"],
        ["какой-то", "kakoy-ta", "qandaydir"],
        ["как-нибудь", "kak-nibut", "qandaydir yo‘l bilan; bir kuni"],
        ["некоторые", "nekatoriye", "ba’zilar, ayrimlar"],
        ["такой", "takoy", "shunday"],
        ["самый", "samiy", "eng"],
        ["сам", "sam", "o‘zi (ayol haqida: «сама»)"],
        ["другой", "drugoy", "boshqa"],
        ["любой", "lyuboy", "istalgan, har qanday"],
        ["никакой", "nikakoy", "hech qanday"],
        ["ничей", "nichey", "hech kimniki emas"],
        ["нечего", "nechiva", "(qiladigan) hech narsa yo‘q"],
        ["некогда", "nekagda", "vaqt yo‘q"],
        ["негде", "negdi", "(...gani) joy yo‘q"],
        ["столько", "stolka", "shuncha"],
        ["настолько", "nastolka", "shunchalik"]
      ]
    },
    {
      theme: "Qiyoslash va ravishlar", icon: "⚖️", words: [
        ["лучше", "lutshe", "yaxshiroq"],
        ["хуже", "xuje", "yomonroq"],
        ["дальше", "dalshe", "uzoqroq; keyin"],
        ["ближе", "blije", "yaqinroq"],
        ["дороже", "daroje", "qimmatroq"],
        ["дешевле", "dishevli", "arzonroq"],
        ["выше", "vishe", "balandroq"],
        ["ниже", "nije", "pastroq"],
        ["позже", "pozje", "kechroq"],
        ["чаще", "chashe", "tez-tez, ko‘proq"],
        ["реже", "reje", "kamroq, siyrakroq"],
        ["проще", "proshe", "osonroq"],
        ["впервые", "fpirviye", "birinchi marta"],
        ["слишком", "slishkam", "haddan tashqari, juda"],
        ["достаточно", "dastatachna", "yetarli"],
        ["обязательно", "abizatilna", "albatta, majburiy"],
        ["возможно", "vazmojna", "ehtimol"],
        ["специально", "spitsialna", "atayin, maxsus"],
        ["случайно", "sluchayna", "tasodifan"],
        ["вслух", "fslux", "ovoz chiqarib"]
      ]
    },
    {
      theme: "Kerakli buyumlar", icon: "🧷", words: [
        ["зонт", "zont", "soyabon"],
        ["сигарета", "sigareta", "sigaret"],
        ["спички", "spichki", "gugurt"],
        ["зажигалка", "zajigalka", "zajigalka"],
        ["конверт", "kanvert", "konvert"],
        ["марка", "marka", "marka (pochta markasi)"],
        ["посылка", "pasilka", "posilka"],
        ["открытка", "atkritka", "otkritka"],
        ["игрушка", "igrushka", "o‘yinchoq"],
        ["коляска", "kalyaska", "bolalar aravachasi"],
        ["подгузник", "padguznik", "taglik (pampers)"],
        ["кружка", "krushka", "krujka"],
        ["салфетка", "salfetka", "salfetka"],
        ["бумага", "bumaga", "qog‘oz"],
        ["ножницы", "nojnitsi", "qaychi"],
        ["нитка", "nitka", "ip"],
        ["иголка", "igolka", "igna"],
        ["верёвка", "viryofka", "arqon"],
        ["гвоздь", "gvost", "mix"],
        ["мешок", "mishok", "qop"]
      ]
    },
    {
      theme: "Kayfiyat va holat", icon: "🙂", words: [
        ["довольный", "davolniy", "mamnun"],
        ["недовольный", "nidavolniy", "norozi"],
        ["уставший", "ustafshiy", "charchagan"],
        ["сердитый", "sirditiy", "jahli chiqqan"],
        ["удивлённый", "udivlyonniy", "hayron qolgan"],
        ["расстроенный", "rasstroyenniy", "xafa, ko‘ngli cho‘kkan"],
        ["нервный", "nervniy", "asabiy"],
        ["скучный", "skuchniy", "zerikarli"],
        ["смешной", "smishnoy", "kulgili"],
        ["страшный", "strashniy", "qo‘rqinchli"],
        ["приятный", "priyatniy", "yoqimli"],
        ["неприятный", "nipriyatniy", "yoqimsiz"],
        ["стыдно", "stidna", "uyat"],
        ["обидно", "abidna", "alam qiladi"],
        ["страшно", "strashna", "qo‘rqinchli (menga qo‘rqinchli)"],
        ["скучно", "skuchna", "zerikarli (menga zerikarli)"],
        ["грустно", "grusna", "g‘amgin, ma’yus"],
        ["жалко", "jalka", "achinarli, rahm keladi"],
        ["весело", "vesila", "quvnoq, xursandchilik"],
        ["спокойно", "spakoyna", "tinch, xotirjam"]
      ]
    }
  ]
});
