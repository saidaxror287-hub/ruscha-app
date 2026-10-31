/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 2: the next 200 words of the TORFL / ТРКИ A2 (basic) lexical minimum (not in A1 or A2 part 1), grouped by theme.
*/
Ruscha.addWords({
  id: "a2-part2",
  title: "A2 so‘zlar — 2-qism",
  icon: "📘",
  note: "ТРКИ A2 (bazaviy daraja) leksik minimumidan keyingi 200 ta yangi so‘z, mavzular bo‘yicha.",
  groups: [
    {
      theme: "Shahar va yo‘l", icon: "🚇", words: [
        ["пригород", "prigarat", "shahar atrofi"],
        ["окраина", "akraina", "shahar chekkasi"],
        ["проспект", "praspekt", "shoh ko‘cha, prospekt"],
        ["переулок", "piriulak", "tor ko‘cha"],
        ["бульвар", "bulvar", "xiyobon, bulvar"],
        ["сквер", "skver", "kichik bog‘, skver"],
        ["фонтан", "fantan", "favvora"],
        ["электричка", "elektrichka", "shahar atrofi poyezdi (elektrichka)"],
        ["вагон", "vagon", "vagon"],
        ["кондуктор", "kanduktar", "konduktor"],
        ["контролёр", "kantralyor", "nazoratchi"],
        ["эскалатор", "eskalatar", "eskalator"],
        ["турникет", "turniket", "turniket"],
        ["табло", "tablo", "e’lonlar taxtasi, tablo"],
        ["пересаживаться", "pirisajivatsa", "boshqa transportga o‘tmoq"],
        ["добираться", "dabiratsa", "yetib bormoq"],
        ["указатель", "ukazatel", "ko‘rsatkich belgi"],
        ["движение", "dvijeniye", "harakat (yo‘l harakati)"],
        ["пешеход", "pishixot", "piyoda"],
        ["авария", "avariya", "avariya, halokat"]
      ]
    },
    {
      theme: "Xarid", icon: "🛒", words: [
        ["покупатель", "pakupatel", "xaridor"],
        ["продавщица", "pradafshitsa", "sotuvchi ayol"],
        ["примерочная", "primirachnaya", "kiyim o‘lchab ko‘rish xonasi"],
        ["витрина", "vitrina", "vitrina"],
        ["товар", "tavar", "tovar, mol"],
        ["качество", "kachistva", "sifat"],
        ["гарантия", "garantiya", "kafolat"],
        ["возврат", "vazvrat", "qaytarish (tovarni)"],
        ["акция", "aktsiya", "aksiya, chegirmali savdo"],
        ["распродажа", "raspradaja", "arzon savdo, sotuv"],
        ["упаковка", "upakofka", "qadoq"],
        ["вес", "ves", "og‘irlik, vazn"],
        ["килограмм", "kilagram", "kilogramm"],
        ["литр", "litr", "litr"],
        ["штука", "shtuka", "dona"],
        ["пачка", "pachka", "pachka, quti"],
        ["банка", "banka", "banka (shisha idish)"],
        ["коробка", "karopka", "quti"],
        ["примерять", "primiryat", "kiyib ko‘rmoq"],
        ["выбирать", "vibirat", "tanlamoq"]
      ]
    },
    {
      theme: "Ovqat va oshxona", icon: "🍳", words: [
        ["крупа", "krupa", "yorma"],
        ["гречка", "grechka", "grechka"],
        ["фарш", "farsh", "qiyma"],
        ["сосиски", "sasiski", "sosiskalar"],
        ["пельмени", "pilmeni", "chuchvara (pelmeni)"],
        ["блины", "blini", "quymoq (blinlar)"],
        ["варенье", "varenye", "murabbo"],
        ["мёд", "myot", "asal"],
        ["орехи", "arexi", "yong‘oqlar"],
        ["изюм", "izyum", "mayiz"],
        ["перец", "perits", "qalampir"],
        ["специи", "spetsii", "ziravorlar"],
        ["уксус", "uksus", "sirka"],
        ["тесто", "testa", "xamir"],
        ["соус", "sous", "sous"],
        ["бульон", "bulyon", "sho‘rva suvi, bulyon"],
        ["жарить", "jarit", "qovurmoq"],
        ["варить", "varit", "qaynatmoq, pishirmoq"],
        ["резать", "rezat", "kesmoq, to‘g‘ramoq"],
        ["печь", "pech", "yopmoq (non, pirog)"]
      ]
    },
    {
      theme: "Kiyim va tashqi ko‘rinish", icon: "👕", words: [
        ["кофта", "kofta", "kofta"],
        ["майка", "mayka", "mayka"],
        ["шорты", "shorti", "shortik"],
        ["халат", "xalat", "xalat, chopon"],
        ["пуговица", "pugavitsa", "tugma"],
        ["карман", "karman", "cho‘ntak"],
        ["ремень", "rimen", "kamar"],
        ["галстук", "galstuk", "galstuk"],
        ["туфли", "tufli", "tufli"],
        ["тапочки", "tapachki", "shippak"],
        ["кольцо", "kaltso", "uzuk"],
        ["серьги", "serki", "isirg‘a"],
        ["рост", "rost", "bo‘y (odamning)"],
        ["толстый", "tolstiy", "semiz; qalin"],
        ["худой", "xudoy", "ozg‘in"],
        ["борода", "barada", "soqol"],
        ["усы", "usi", "mo‘ylov"],
        ["причёска", "prichyoska", "soch turmagi"],
        ["носить", "nasit", "kiyib yurmoq; tashimoq"],
        ["надевать", "nadivat", "kiymoq"]
      ]
    },
    {
      theme: "Oila va odamlar", icon: "👨‍👩‍👧", words: [
        ["внучка", "vnuchka", "nevara (qiz)"],
        ["племянник", "plimyannik", "jiyan (o‘g‘il)"],
        ["племянница", "plimyannitsa", "jiyan (qiz)"],
        ["родственник", "rotstvinnik", "qarindosh"],
        ["двоюродный брат", "dvayuradniy brat", "amakivachcha, xolavachcha (o‘g‘il)"],
        ["свекровь", "svikrof", "qaynona (erning onasi)"],
        ["тёща", "tyosha", "qaynona (xotinning onasi)"],
        ["зять", "zyat", "kuyov (qizning eri)"],
        ["невестка", "nivestka", "kelin"],
        ["жених", "jinix", "kuyov (to‘yda)"],
        ["невеста", "nivesta", "kelin (to‘yda)"],
        ["близнецы", "bliznitsi", "egizaklar"],
        ["взрослый", "vzrosliy", "katta yoshli, voyaga yetgan"],
        ["подросток", "padrostak", "o‘smir"],
        ["пожилой", "pajiloy", "keksa, yoshi ulug‘"],
        ["молодёжь", "maladyosh", "yoshlar"],
        ["пенсионер", "pinsianer", "nafaqaxo‘r"],
        ["холостой", "xalastoy", "uylanmagan"],
        ["замужем", "zamujem", "turmushga chiqqan (ayol haqida)"],
        ["женат", "jinat", "uylangan (erkak haqida)"]
      ]
    },
    {
      theme: "O‘qish", icon: "📖", words: [
        ["учебник", "uchebnik", "darslik"],
        ["тетрадь", "titrat", "daftar"],
        ["карандаш", "karandash", "qalam"],
        ["словарь", "slavar", "lug‘at"],
        ["доска", "daska", "doska"],
        ["класс", "klass", "sinf"],
        ["оценка", "atsenka", "baho"],
        ["экзамен", "ekzamen", "imtihon"],
        ["курсы", "kursi", "kurslar"],
        ["преподаватель", "pripadavatel", "o‘qituvchi (oliy o‘quv yurtida, kursda)"],
        ["ученик", "uchenik", "o‘quvchi"],
        ["лекция", "lektsiya", "ma’ruza"],
        ["грамматика", "gramatika", "grammatika"],
        ["упражнение", "uprajneniye", "mashq"],
        ["диктант", "diktant", "diktant"],
        ["диплом", "diplom", "diplom"],
        ["сдавать", "zdavat", "topshirmoq (imtihon)"],
        ["изучать", "izuchat", "o‘rganmoq"],
        ["запоминать", "zapaminat", "eslab qolmoq"],
        ["контрольная работа", "kantrolnaya rabota", "nazorat ishi"]
      ]
    },
    {
      theme: "Tabiat va ob-havo", icon: "🌦️", words: [
        ["облако", "oblaka", "bulut"],
        ["туман", "tuman", "tuman"],
        ["гроза", "graza", "momaqaldiroq, chaqmoqli yomg‘ir"],
        ["мороз", "maros", "ayoz, qattiq sovuq"],
        ["лёд", "lyot", "muz"],
        ["жара", "jara", "jazirama issiq"],
        ["прогноз", "pragnos", "bashorat (ob-havo)"],
        ["климат", "klimat", "iqlim"],
        ["природа", "priroda", "tabiat"],
        ["остров", "ostraf", "orol"],
        ["берег", "berik", "qirg‘oq"],
        ["пустыня", "pustinya", "cho‘l"],
        ["трава", "trava", "o‘t, maysa"],
        ["лист", "list", "barg; varaq"],
        ["животное", "jivotnaye", "hayvon"],
        ["сад", "sat", "bog‘"],
        ["огород", "agarot", "tomorqa, poliz"],
        ["урожай", "urajay", "hosil"],
        ["петух", "pitux", "xo‘roz"],
        ["солнечный", "solnichniy", "quyoshli"]
      ]
    },
    {
      theme: "Hujjat va pul", icon: "💳", words: [
        ["регистрация", "rigistratsiya", "ro‘yxatdan o‘tish (propiska)"],
        ["патент", "patent", "patent (ishlash uchun ruxsat)"],
        ["разрешение", "razrisheniye", "ruxsat; ruxsatnoma"],
        ["срок", "srok", "muddat"],
        ["продлевать", "pradlivat", "uzaytirmoq (muddatni)"],
        ["оформлять", "afarmlyat", "rasmiylashtirmoq"],
        ["налог", "nalok", "soliq"],
        ["квитанция", "kvitantsiya", "kvitansiya, to‘lov qog‘ozi"],
        ["перевод", "pirivot", "pul o‘tkazmasi; tarjima"],
        ["кредит", "kridit", "kredit, qarz"],
        ["долг", "dolk", "qarz"],
        ["комиссия", "kamissiya", "komissiya (to‘lov uchun haq)"],
        ["банкомат", "bankamat", "bankomat"],
        ["сумма", "summa", "summa"],
        ["валюта", "valyuta", "valyuta"],
        ["курс", "kurs", "kurs (valyuta kursi)"],
        ["тратить", "tratit", "sarflamoq"],
        ["копить", "kapit", "jamg‘armoq"],
        ["занимать", "zanimat", "qarz olmoq"],
        ["штамп", "shtamp", "shtamp, muhr"]
      ]
    },
    {
      theme: "Fe’llar", icon: "🔁", words: [
        ["вспоминать", "fspaminat", "eslamoq"],
        ["мешать", "mishat", "xalaqit bermoq; aralashtirmoq"],
        ["менять", "minyat", "almashtirmoq"],
        ["проверять", "praviryat", "tekshirmoq"],
        ["исправлять", "ispravlyat", "tuzatmoq (xatoni)"],
        ["обсуждать", "absujdat", "muhokama qilmoq"],
        ["сравнивать", "sravnivat", "solishtirmoq"],
        ["участвовать", "uchastvavat", "qatnashmoq"],
        ["продолжать", "pradaljat", "davom ettirmoq"],
        ["заканчивать", "zakanchivat", "tugatmoq"],
        ["здороваться", "zdaravatsa", "salomlashmoq"],
        ["прощаться", "prashatsa", "xayrlashmoq"],
        ["улыбаться", "ulibatsa", "jilmaymoq"],
        ["смеяться", "smiyatsa", "kulmoq"],
        ["плакать", "plakat", "yig‘lamoq"],
        ["ссориться", "ssoritsa", "urishmoq, janjallashmoq"],
        ["обижаться", "abijatsa", "xafa bo‘lmoq"],
        ["верить", "verit", "ishonmoq"],
        ["приносить", "prinasit", "olib kelmoq"],
        ["принимать", "prinimat", "qabul qilmoq; (dori) ichmoq"]
      ]
    },
    {
      theme: "Sifatlar", icon: "🎨", words: [
        ["тёмный", "tyomniy", "qorong‘i; to‘q (rang)"],
        ["светлый", "svetliy", "yorug‘; och (rang)"],
        ["яркий", "yarkiy", "yorqin"],
        ["мягкий", "myaxkiy", "yumshoq"],
        ["твёрдый", "tvyordiy", "qattiq"],
        ["глубокий", "glubokiy", "chuqur"],
        ["мокрый", "mokriy", "ho‘l"],
        ["сухой", "suxoy", "quruq"],
        ["круглый", "krugliy", "dumaloq"],
        ["лишний", "lishniy", "ortiqcha"],
        ["похожий", "paxojiy", "o‘xshash"],
        ["разный", "razniy", "har xil"],
        ["одинаковый", "adinakaviy", "bir xil"],
        ["тихий", "tixiy", "jim, sokin"],
        ["громкий", "gromkiy", "baland (ovoz)"],
        ["странный", "stranniy", "g‘alati"],
        ["грустный", "grusniy", "g‘amgin"],
        ["злой", "zloy", "jahldor, yovuz"],
        ["ужасный", "ujasniy", "dahshatli"],
        ["прекрасный", "prikrasniy", "ajoyib, go‘zal"]
      ]
    }
  ]
});
