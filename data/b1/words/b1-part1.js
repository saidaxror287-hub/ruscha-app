/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 1: B1 words — moved here from the A2 lists because they are not in the TORFL / ТРКИ A2 lexical minimum.
  Their Russian text is unchanged, so saved progress for these words is kept.
*/
Ruscha.addWords({
  id: "b1-part1",
  title: "B1 so‘zlar — 1-qism",
  icon: "📙",
  note: "ТРКИ B1 (birinchi sertifikat darajasi) so‘zlari: rasmiy, mavhum va maxsus so‘zlar, mavzular bo‘yicha.",
  groups: [
    {
      theme: "Ish va kasb", icon: "💼", words: [
        ["предприятие", "pridpriyatiye", "korxona"],
        ["должность", "doljnast", "lavozim"],
        ["юрист", "yurist", "yurist, huquqshunos"],
        ["увольняться", "uvalnyatsa", "ishdan bo‘shamoq"],
        ["карьера", "karyera", "martaba, karyera"],
        ["сварщик", "svarshik", "payvandchi"],
        ["механик", "mixanik", "mexanik, usta"],
        ["бригада", "brigada", "brigada, guruh"],
        ["бригадир", "brigadir", "brigadir"],
        ["каска", "kaska", "kaska, himoya dubulg‘asi"],
        ["обязанность", "abyazannast", "majburiyat, vazifa"],
        ["условия", "usloviya", "sharoit; shartlar"]
      ]
    },
    {
      theme: "Uy va ro‘zg‘or", icon: "🏠", words: [
        ["занавеска", "zanaveska", "parda"],
        ["раковина", "rakavina", "rakovina, qo‘l yuvgich"],
        ["отопление", "atapleniye", "isitish tizimi"],
        ["крыша", "krisha", "tom"],
        ["потолок", "patalok", "shift"],
        ["веник", "venik", "supurgi"],
        ["тряпка", "tryapka", "latta"],
        ["швабра", "shvabra", "pol yuvgich (shvabra)"],
        ["тумбочка", "tumbachka", "tumbochka"],
        ["нитка", "nitka", "ip"],
        ["иголка", "igolka", "igna"],
        ["верёвка", "viryofka", "arqon"],
        ["гвоздь", "gvost", "mix"],
        ["мешок", "mishok", "qop"]
      ]
    },
    {
      theme: "Tana va sog‘liq", icon: "🩺", words: [
        ["выздоравливать", "vizdaravlivat", "tuzalmoq, sog‘aymoq"],
        ["диагноз", "diagnas", "tashxis"],
        ["хирург", "xirurk", "jarroh"],
        ["бинт", "bint", "bint"],
        ["сироп", "sirop", "sirop (suyuq dori)"],
        ["мазь", "mas", "malham, surtma dori"],
        ["осмотр", "asmotr", "ko‘rik (tibbiy ko‘rik)"],
        ["слабость", "slabast", "holsizlik"],
        ["щека", "shika", "yonoq"],
        ["губа", "guba", "lab"],
        ["бровь", "brof", "qosh"],
        ["кожа", "koja", "teri"],
        ["кость", "kost", "suyak"],
        ["печень", "pechin", "jigar"],
        ["почка", "pochka", "buyrak"],
        ["лёгкие", "lyoxkiye", "o‘pka"],
        ["мышца", "mishtsa", "muskul, mushak"],
        ["зрение", "zreniye", "ko‘rish qobiliyati"],
        ["слух", "slux", "eshitish qobiliyati"],
        ["синяк", "sinyak", "ko‘kargan joy"],
        ["рана", "rana", "jarohat"],
        ["ожог", "ajok", "kuyish (kuygan joy)"]
      ]
    },
    {
      theme: "Shahar, yo‘l va xizmatlar", icon: "🏙️", words: [
        ["достопримечательность", "dastaprimichatelnast", "diqqatga sazovor joy"],
        ["вылет", "vilet", "uchib ketish"],
        ["прилёт", "prilyot", "uchib kelish"],
        ["таможня", "tamojnya", "bojxona"],
        ["абонент", "abanent", "abonent"],
        ["автоответчик", "aftaatvetchik", "avtojavob beruvchi"],
        ["гудок", "gudok", "gudok (qo‘ng‘iroq ovozi)"],
        ["обслуживание", "abslujivaniye", "xizmat ko‘rsatish"],
        ["отделение", "atdileniye", "bo‘lim, filial"],
        ["химчистка", "ximchistka", "kimyoviy tozalash"],
        ["ателье", "atelye", "tikuvchilik ustaxonasi"],
        ["тротуар", "tratuar", "piyodalar yo‘lagi"],
        ["набережная", "naberijnaya", "sohil bo‘yi ko‘chasi"],
        ["мастерская", "mastirskaya", "ustaxona"],
        ["пригород", "prigarat", "shahar atrofi"],
        ["окраина", "akraina", "shahar chekkasi"],
        ["переулок", "piriulak", "tor ko‘cha"],
        ["бульвар", "bulvar", "xiyobon, bulvar"],
        ["сквер", "skver", "kichik bog‘, skver"],
        ["фонтан", "fantan", "favvora"],
        ["кондуктор", "kanduktar", "konduktor"],
        ["контролёр", "kantralyor", "nazoratchi"],
        ["турникет", "turniket", "turniket"],
        ["табло", "tablo", "e’lonlar taxtasi, tablo"],
        ["указатель", "ukazatel", "ko‘rsatkich belgi"],
        ["движение", "dvijeniye", "harakat (yo‘l harakati)"]
      ]
    },
    {
      theme: "Xarid, ovqat va kiyim", icon: "🛍️", words: [
        ["витрина", "vitrina", "vitrina"],
        ["качество", "kachistva", "sifat"],
        ["гарантия", "garantiya", "kafolat"],
        ["возврат", "vazvrat", "qaytarish (tovarni)"],
        ["акция", "aktsiya", "aksiya, chegirmali savdo"],
        ["распродажа", "raspradaja", "arzon savdo, sotuv"],
        ["упаковка", "upakofka", "qadoq"],
        ["крупа", "krupa", "yorma"],
        ["изюм", "izyum", "mayiz"],
        ["специи", "spetsii", "ziravorlar"],
        ["уксус", "uksus", "sirka"],
        ["тесто", "testa", "xamir"],
        ["соус", "sous", "sous"],
        ["бульон", "bulyon", "sho‘rva suvi, bulyon"],
        ["печь", "pech", "yopmoq (non, pirog)"],
        ["пуговица", "pugavitsa", "tugma"],
        ["ремень", "rimen", "kamar"],
        ["галстук", "galstuk", "galstuk"],
        ["серьги", "serki", "isirg‘a"],
        ["усы", "usi", "mo‘ylov"],
        ["причёска", "prichyoska", "soch turmagi"]
      ]
    },
    {
      theme: "Oila va odamlar", icon: "👨‍👩‍👧", words: [
        ["племянник", "plimyannik", "jiyan (o‘g‘il)"],
        ["племянница", "plimyannitsa", "jiyan (qiz)"],
        ["двоюродный брат", "dvayuradniy brat", "amakivachcha, xolavachcha (o‘g‘il)"],
        ["свекровь", "svikrof", "qaynona (erning onasi)"],
        ["тёща", "tyosha", "qaynona (xotinning onasi)"],
        ["зять", "zyat", "kuyov (qizning eri)"],
        ["невестка", "nivestka", "kelin"],
        ["близнецы", "bliznitsi", "egizaklar"],
        ["подросток", "padrostak", "o‘smir"],
        ["молодёжь", "maladyosh", "yoshlar"],
        ["холостой", "xalastoy", "uylanmagan"]
      ]
    },
    {
      theme: "Bo‘sh vaqt va madaniyat", icon: "🎭", words: [
        ["увлечение", "uvlicheniye", "qiziqish, mashg‘ulot"],
        ["чемпионат", "chimpianat", "chempionat"],
        ["болельщик", "balelshik", "ishqiboz"],
        ["коньки", "kanki", "konki"],
        ["бокс", "boks", "boks"],
        ["борьба", "barba", "kurash"],
        ["соревнование", "sarivnavaniye", "musobaqa"],
        ["передача", "piridacha", "ko‘rsatuv, eshittirish"],
        ["поэт", "paet", "shoir"],
        ["спектакль", "spiktakl", "spektakl"],
        ["зритель", "zritel", "tomoshabin"],
        ["традиция", "traditsiya", "an’ana"],
        ["обычай", "abichay", "odat, urf-odat"]
      ]
    },
    {
      theme: "Tabiat", icon: "🌦️", words: [
        ["гроза", "graza", "momaqaldiroq, chaqmoqli yomg‘ir"],
        ["климат", "klimat", "iqlim"],
        ["остров", "ostraf", "orol"],
        ["пустыня", "pustinya", "cho‘l"],
        ["огород", "agarot", "tomorqa, poliz"],
        ["урожай", "urajay", "hosil"],
        ["петух", "pitux", "xo‘roz"]
      ]
    },
    {
      theme: "Hujjat va pul", icon: "💳", words: [
        ["разрешение", "razrisheniye", "ruxsat; ruxsatnoma"],
        ["продлевать", "pradlivat", "uzaytirmoq (muddatni)"],
        ["оформлять", "afarmlyat", "rasmiylashtirmoq"],
        ["налог", "nalok", "soliq"],
        ["квитанция", "kvitantsiya", "kvitansiya, to‘lov qog‘ozi"],
        ["кредит", "kridit", "kredit, qarz"],
        ["долг", "dolk", "qarz"],
        ["комиссия", "kamissiya", "komissiya (to‘lov uchun haq)"],
        ["валюта", "valyuta", "valyuta"],
        ["курс", "kurs", "kurs (valyuta kursi)"],
        ["копить", "kapit", "jamg‘armoq"],
        ["занимать", "zanimat", "qarz olmoq"],
        ["штамп", "shtamp", "shtamp, muhr"]
      ]
    },
    {
      theme: "Jamiyat, ta’lim va davlat", icon: "🏛️", words: [
        ["лекция", "lektsiya", "ma’ruza"],
        ["диктант", "diktant", "diktant"],
        ["диплом", "diplom", "diplom"],
        ["контрольная работа", "kantrolnaya rabota", "nazorat ishi"],
        ["государство", "gasudarstva", "davlat"],
        ["правительство", "pravitelstva", "hukumat"],
        ["закон", "zakon", "qonun"],
        ["суд", "sut", "sud"],
        ["армия", "armiya", "armiya"],
        ["война", "vayna", "urush"],
        ["выборы", "vibari", "saylov"],
        ["право", "prava", "huquq"],
        ["гражданство", "grajdanstva", "fuqarolik"],
        ["население", "naseleniye", "aholi"],
        ["житель", "jitel", "aholi vakili, yashovchi"],
        ["мигрант", "migrant", "migrant"],
        ["событие", "sabitiye", "voqea, hodisa"],
        ["политика", "palitika", "siyosat"],
        ["экономика", "ekanomika", "iqtisodiyot"],
        ["религия", "riligiya", "din"],
        ["национальность", "natsianalnast", "millat"],
        ["общество", "obshestva", "jamiyat"]
      ]
    },
    {
      theme: "Fe’llar", icon: "🔄", words: [
        ["запрещать", "zaprishat", "taqiqlamoq"],
        ["отказываться", "atkazivatsa", "rad etmoq, voz kechmoq"],
        ["жаловаться", "jalavatsa", "shikoyat qilmoq"],
        ["привыкать", "privikat", "ko‘nikmoq"],
        ["благодарить", "blagadarit", "minnatdorchilik bildirmoq"],
        ["мешать", "mishat", "xalaqit bermoq; aralashtirmoq"],
        ["исправлять", "ispravlyat", "tuzatmoq (xatoni)"],
        ["обсуждать", "absujdat", "muhokama qilmoq"],
        ["сравнивать", "sravnivat", "solishtirmoq"],
        ["участвовать", "uchastvavat", "qatnashmoq"],
        ["ссориться", "ssoritsa", "urishmoq, janjallashmoq"],
        ["обижаться", "abijatsa", "xafa bo‘lmoq"],
        ["толкать", "talkat", "itarmoq"],
        ["тянуть", "tinut", "tortmoq"],
        ["развестись", "razvistis", "ajrashmoq"],
        ["бриться", "britsa", "soqol olmoq"],
        ["ошибаться", "ashibatsa", "xato qilmoq, adashmoq"]
      ]
    },
    {
      theme: "Sifat, fikr va tuyg‘ular", icon: "💭", words: [
        ["честный", "chesniy", "halol, rostgo‘y"],
        ["ленивый", "liniviy", "dangasa"],
        ["трудолюбивый", "trudalyubiviy", "mehnatkash"],
        ["необходимый", "niabxadimiy", "zarur"],
        ["срочный", "srochniy", "shoshilinch"],
        ["заранее", "zaraniye", "oldindan"],
        ["впечатление", "fpichatleniye", "taassurot"],
        ["причина", "prichina", "sabab"],
        ["возможность", "vazmojnast", "imkoniyat"],
        ["желание", "jelaniye", "istak"],
        ["надежда", "nadejda", "umid"],
        ["отношения", "atnasheniya", "munosabatlar"],
        ["характер", "xarakter", "fe’l-atvor, xarakter"],
        ["твёрдый", "tvyordiy", "qattiq"],
        ["глубокий", "glubokiy", "chuqur"],
        ["лишний", "lishniy", "ortiqcha"],
        ["похожий", "paxojiy", "o‘xshash"],
        ["одинаковый", "adinakaviy", "bir xil"],
        ["странный", "stranniy", "g‘alati"],
        ["злой", "zloy", "jahldor, yovuz"],
        ["ужасный", "ujasniy", "dahshatli"],
        ["сердитый", "sirditiy", "jahli chiqqan"],
        ["удивлённый", "udivlyonniy", "hayron qolgan"],
        ["расстроенный", "rasstroyenniy", "xafa, ko‘ngli cho‘kkan"],
        ["нервный", "nervniy", "asabiy"],
        ["обидно", "abidna", "alam qiladi"]
      ]
    },
    {
      theme: "Bog‘lovchi va yordamchi so‘zlar", icon: "🔗", words: [
        ["ежегодно", "yijigodna", "har yili"],
        ["постоянно", "pastayanna", "doimo"],
        ["вскоре", "fskore", "tez orada, ko‘p o‘tmay"],
        ["будущее", "budushiye", "kelajak"],
        ["прошлое", "proshlaye", "o‘tmish"],
        ["среди", "sridi", "orasida (ko‘p narsa orasida)"],
        ["снаружи", "snaruji", "tashqarida"],
        ["посередине", "pasiridine", "o‘rtada"],
        ["кроме того", "krome tavo", "bundan tashqari"],
        ["однако", "adnaka", "biroq"],
        ["зато", "zato", "lekin buning o‘rniga"],
        ["либо", "liba", "yoki"],
        ["именно", "imenna", "aynan"],
        ["всё-таки", "fsyo-taki", "baribir"],
        ["то есть", "to yest", "ya’ni"],
        ["в общем", "v obshem", "umuman olganda"],
        ["наоборот", "naabarot", "aksincha"],
        ["сотый", "sotiy", "yuzinchi"],
        ["треть", "tret", "uchdan bir"],
        ["десяток", "disyatak", "o‘ntalik, o‘nta"],
        ["сотня", "sotnya", "yuztalik, yuzta"],
        ["ничей", "nichey", "hech kimniki emas"],
        ["некогда", "nekagda", "vaqt yo‘q"],
        ["негде", "negdi", "(...gani) joy yo‘q"],
        ["настолько", "nastolka", "shunchalik"],
        ["достаточно", "dastatachna", "yetarli"],
        ["специально", "spitsialna", "atayin, maxsus"],
        ["случайно", "sluchayna", "tasodifan"]
      ]
    }
  ]
});
