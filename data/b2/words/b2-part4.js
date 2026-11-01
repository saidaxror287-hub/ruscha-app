/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 4: the next 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2, B1 lists or from b2-part1 to b2-part3.
*/
Ruscha.addWords({
  id: "b2-part4",
  title: "B2 so‘zlar — 4-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: baholash va jonli nutq, vaqt va ketma-ketlik, omad va taqdir, uydagi kichik falokatlar, uyqu, diqqat, OAV va internet.",
  groups: [
    {
      theme: "Zo‘r yoki yomon?", icon: "👍", words: [
        ["потрясающий", "patrisayushiy", "ajoyib, hayratlanarli"],
        ["замечательный", "zamichatilniy", "ajoyib, juda yaxshi"],
        ["великолепный", "vilikalepniy", "zo‘r, a’lo darajadagi"],
        ["восхитительный", "vasxititilniy", "maftunkor, mazali (juda)"],
        ["превосходный", "privasxodniy", "a’lo, benuqson"],
        ["удивительный", "udivitilniy", "ajablanarli"],
        ["поразительный", "parazitilniy", "hayratomuz"],
        ["захватывающий", "zaxvativayushiy", "maroqli, o‘ziga tortadigan"],
        ["увлекательный", "uvlikatilniy", "qiziqarli, maroqli"],
        ["забавный", "zabavniy", "kulgili, qiziq"],
        ["посредственный", "pasretstvenniy", "o‘rtacha, unchalik emas"],
        ["занудный", "zanudniy", "zerikarli, ezma"],
        ["противный", "prativniy", "jirkanch, yoqimsiz"],
        ["отвратительный", "atvratitilniy", "jirkanch, juda yomon"]
      ]
    },
    {
      theme: "Jonli nutq", icon: "🗯️", words: [
        ["так себе", "tak sibe", "unchalik emas, o‘rtacha"],
        ["ерунда", "yirunda", "bema’nilik; arzimas narsa"],
        ["чепуха", "chipuxa", "safsata, bo‘lmag‘ur gap"],
        ["пустяк", "pustyak", "arzimagan narsa"],
        ["мелочь", "meloch", "mayda narsa; mayda pul"],
        ["безобразие", "bizabraziye", "bema’nilik, sharmandalik!"],
        ["возмутительно", "vazmutitilna", "g‘azablanarli!"],
        ["кошмар", "kashmar", "dahshat!; dahshatli tush"],
        ["бардак", "bardak", "betartiblik, chalkashlik"],
        ["хаос", "xaos", "tartibsizlik, xaos"],
        ["скандал", "skandal", "janjal"]
      ]
    },
    {
      theme: "Fikrni tushuntirish", icon: "💡", words: [
        ["короче говоря", "karoche gavarya", "qisqasi"],
        ["иными словами", "inimi slavami", "boshqacha aytganda"],
        ["в частности", "f chasnasti", "xususan"],
        ["прежде всего", "prejdi fsivo", "avvalambor"],
        ["суть", "sut", "mohiyat"],
        ["смысл", "smisl", "ma’no, mazmun"],
        ["значение", "znacheniye", "ma’no; ahamiyat"],
        ["подробность", "padrobnast", "tafsilot"],
        ["деталь", "dital", "tafsilot; detal"],
        ["сравнение", "sravneniye", "taqqoslash"],
        ["разница", "raznitsa", "farq"],
        ["сходство", "sxotstva", "o‘xshashlik"],
        ["отличие", "atlichiye", "farq, tafovut"],
        ["особенность", "asobinnast", "o‘ziga xoslik"],
        ["признак", "priznak", "belgi, alomat"]
      ]
    },
    {
      theme: "Vaqt va ketma-ketlik", icon: "⏳", words: [
        ["до сих пор", "da six por", "hozirgacha, haligacha"],
        ["всё ещё", "fsyo ishyo", "hali ham"],
        ["заново", "zanava", "qaytadan, boshidan"],
        ["напоследок", "napasledak", "oxirida, xayrlashuv oldidan"],
        ["пока не", "paka ni", "…guncha (…maguncha)"],
        ["после того как", "posli tavo kak", "…gandan keyin"],
        ["до того как", "da tavo kak", "…dan oldin"],
        ["с тех пор как", "s tex por kak", "…gandan beri"],
        ["в то время как", "f to vremya kak", "…gan paytda; holbuki"],
        ["тогда как", "tagda kak", "holbuki"],
        ["между тем", "mejdu tem", "shu orada"],
        ["тем временем", "tem vremenim", "bu orada"]
      ]
    },
    {
      theme: "Qanchalik?", icon: "📏", words: [
        ["полностью", "polnastyu", "to‘liq"],
        ["целиком", "tselikom", "butunlay, yaxlit"],
        ["наполовину", "napalavinu", "yarmigacha, chala"],
        ["вдвое", "vdvoye", "ikki baravar"],
        ["поровну", "poravnu", "teng (bo‘lib)"],
        ["ничуть", "nichut", "zarracha ham (…emas)"],
        ["нисколько", "niskolka", "aslo, sira (…emas)"],
        ["вовсе", "vofsi", "umuman, sira (…emas)"],
        ["никак", "nikak", "hech qanday; hech ham"],
        ["еле-еле", "yeli-yeli", "zo‘rg‘a-zo‘rg‘a"],
        ["кое-как", "koye-kak", "arang; chala-chulpa"],
        ["с трудом", "s trudom", "qiyinchilik bilan"],
        ["с удовольствием", "s udavolstviyem", "bajonidil, mamnuniyat bilan"],
        ["охотно", "axotna", "jon deb, xohish bilan"],
        ["неохотно", "niaxotna", "istar-istamas"]
      ]
    },
    {
      theme: "Qanday qilib?", icon: "🤫", words: [
        ["нечаянно", "nichayanna", "bilmasdan, beixtiyor"],
        ["невольно", "nivolna", "beixtiyor"],
        ["тайком", "taykom", "yashirincha"],
        ["украдкой", "ukratkay", "o‘g‘rincha, bildirmay"],
        ["наедине", "naidine", "yolg‘iz (ikki kishi), xoli"],
        ["отдельно", "atdelna", "alohida"],
        ["врозь", "vros", "alohida-alohida, ayri"],
        ["сообща", "saapsha", "birgalikda"],
        ["заодно", "zaadno", "yo‘l-yo‘lakay; bir yo‘la"]
      ]
    },
    {
      theme: "Kimdir, nimadir", icon: "❓", words: [
        ["кое-что", "koye-shto", "bir narsa (aniq)"],
        ["кое-кто", "koye-kto", "kimdir (aniq bir odam)"],
        ["где-нибудь", "gde-nibut", "biror joyda"],
        ["откуда-то", "atkuda-ta", "qayerdandir"],
        ["почему-то", "pachimu-ta", "negadir"],
        ["некуда", "nekuda", "boradigan joy yo‘q"]
      ]
    },
    {
      theme: "Omad va taqdir", icon: "🍀", words: [
        ["судьба", "sudba", "taqdir"],
        ["удача", "udacha", "omad"],
        ["везение", "viziniye", "omad, baxt kulishi"],
        ["невезение", "niviziniye", "omadsizlik"],
        ["повезти", "pavisti", "omadi kelmoq, omad kulib boqmoq"],
        ["случайность", "sluchaynast", "tasodif"],
        ["совпадение", "safpadeniye", "mos kelish, tasodif"],
        ["чудо", "chuda", "mo‘jiza"],
        ["примета", "primeta", "irim, belgi"],
        ["суеверие", "suiveriye", "irim-sirim, xurofot"],
        ["тайна", "tayna", "sir"],
        ["секрет", "sikret", "sir"],
        ["загадка", "zagatka", "topishmoq; jumboq"],
        ["догадка", "dagatka", "taxmin, fahm"],
        ["подсказка", "patskaska", "maslahat, ishora (javobga)"]
      ]
    },
    {
      theme: "Urinish va qiyinchilik", icon: "🧗", words: [
        ["намерение", "namereniye", "niyat"],
        ["замысел", "zamisil", "g‘oya, reja"],
        ["попытка", "papitka", "urinish"],
        ["усилие", "usiliye", "kuch, harakat"],
        ["старание", "staraniye", "tirishqoqlik, jon kuydirish"],
        ["трудность", "trudnast", "qiyinchilik"],
        ["препятствие", "pripyatstviye", "to‘siq"],
        ["помеха", "pamexa", "xalaqit, to‘siq"],
        ["неприятность", "nipriyatnast", "ko‘ngilsizlik, noxushlik"],
        ["беда", "bida", "baxtsizlik, falokat"],
        ["несчастье", "nishastye", "baxtsizlik"],
        ["катастрофа", "katastrofa", "halokat, falokat"]
      ]
    },
    {
      theme: "Uydagi kichik falokatlar", icon: "💥", words: [
        ["разбить", "razbit", "sindirmoq (idishni)"],
        ["разбиться", "razbitsa", "sinmoq; urilib ketmoq"],
        ["уронить", "uranit", "tushirib yubormoq"],
        ["пролить", "pralit", "to‘kib yubormoq (suyuqlik)"],
        ["рассыпать", "rassipat", "sochib yubormoq"],
        ["порвать", "parvat", "yirtmoq"],
        ["порваться", "parvatsa", "yirtilmoq"],
        ["испачкать", "ispachkat", "kir qilmoq, bulg‘amoq"],
        ["испачкаться", "ispachkatsa", "kir bo‘lmoq, bulg‘anmoq"],
        ["царапать", "tsarapat", "tirnamoq"],
        ["пятно", "pitno", "dog‘"],
        ["дырка", "dirka", "teshik"],
        ["трещина", "treshina", "yoriq, darz"]
      ]
    },
    {
      theme: "Miqdor va o‘lchov", icon: "📐", words: [
        ["уровень", "uravin", "daraja, saviya"],
        ["степень", "stepin", "daraja"],
        ["масштаб", "mashtap", "ko‘lam, miqyos"],
        ["объём", "abyom", "hajm"],
        ["глубина", "glubina", "chuqurlik"],
        ["расстояние", "rasstayaniye", "masofa"],
        ["направление", "napravleniye", "yo‘nalish"],
        ["поворот", "pavarot", "burilish"],
        ["середина", "siridina", "o‘rta, o‘rtasi"],
        ["край", "kray", "chet, qirg‘oq; o‘lka"],
        ["множество", "mnojistva", "ko‘plab, son-sanoqsiz"],
        ["остаток", "astatak", "qoldiq"],
        ["нехватка", "nixvatka", "yetishmovchilik, kamchil"],
        ["избыток", "izbitak", "ortiqcha miqdor"],
        ["запас", "zapas", "zaxira"]
      ]
    },
    {
      theme: "Uyqu va tana holati", icon: "😴", words: [
        ["выспаться", "vispatsa", "to‘yib uxlamoq"],
        ["проспать", "praspat", "uxlab qolmoq (vaqtni o‘tkazib)"],
        ["засыпать", "zasipat", "uxlab qolmoq, uyquga ketmoq"],
        ["просыпаться", "prasipatsa", "uyg‘onmoq"],
        ["зевать", "zivat", "esnamoq"],
        ["храпеть", "xrapet", "xurrak otmoq"],
        ["сниться", "snitsa", "tushiga kirmoq"],
        ["сонный", "sonniy", "uyqusiragan"],
        ["бодрый", "bodriy", "tetik, bardam"],
        ["вялый", "vyaliy", "lanj, holsiz"],
        ["вспотеть", "fspatet", "terlamoq"],
        ["замёрзнуть", "zamyorznut", "sovqotmoq, muzlab qolmoq"],
        ["согреться", "sagretsa", "isinmoq"],
        ["промокнуть", "pramoknut", "ho‘l bo‘lmoq (yomg‘irda)"],
        ["высохнуть", "visaxnut", "qurimoq"],
        ["простыть", "prastit", "shamollamoq"]
      ]
    },
    {
      theme: "Diqqat va xayol", icon: "🧠", words: [
        ["сосредоточиться", "sasridatochitsa", "diqqatni jamlamoq"],
        ["отвлекаться", "atvlikatsa", "chalg‘imoq"],
        ["запомнить", "zapomnit", "eslab qolmoq"],
        ["напоминание", "napaminaniye", "eslatma"],
        ["интересоваться", "intirisavatsa", "qiziqmoq"],
        ["увлекаться", "uvlikatsa", "berilib ketmoq, qiziqmoq"],
        ["представить", "pritstavit", "tasavvur qilmoq; tanishtirmoq"],
        ["воображать", "vaabrajat", "tasavvur qilmoq; o‘zini katta tutmoq"],
        ["воображение", "vaabrajeniye", "tasavvur, xayol"],
        ["фантазия", "fantaziya", "xayol, fantaziya"],
        ["ощущение", "ashusheniye", "his, tuyg‘u"],
        ["впечатлять", "fpichatlyat", "taassurot qoldirmoq"]
      ]
    },
    {
      theme: "Qanday joy, qanday holat?", icon: "🏡", words: [
        ["уютно", "uyutna", "shinam"],
        ["тесно", "tesna", "tor, siqilib"],
        ["просторно", "prastorna", "keng"],
        ["душно", "dushna", "dim"],
        ["прохладно", "praxladna", "salqin"],
        ["одиноко", "adinoka", "yolg‘iz, yolg‘izlik his qilib"],
        ["заметно", "zametna", "sezilarli"],
        ["незаметно", "nizametna", "sezdirmay, bilinmay"],
        ["привычный", "privichniy", "odatiy, ko‘nikkan"],
        ["посторонний", "pastaronniy", "begona"],
        ["чужой", "chujoy", "begona, o‘zganiki"],
        ["бесполезный", "bispalezniy", "foydasiz"],
        ["доступный", "dastupniy", "arzon, hamyonbop; ochiq"],
        ["недоступный", "nidastupniy", "yetib bo‘lmaydigan, qimmat"],
        ["неудобный", "niudobniy", "noqulay"]
      ]
    },
    {
      theme: "OAV, tomosha va sport", icon: "📺", words: [
        ["выпуск", "vipusk", "son (gazeta); ko‘rsatuv soni"],
        ["прямой эфир", "primoy efir", "jonli efir"],
        ["серия", "seriya", "qism (serialda)"],
        ["эпизод", "epizot", "epizod, lavha"],
        ["сюжет", "syujet", "syujet, voqealar rivoji; reportaj"],
        ["персонаж", "pirsonash", "qahramon, personaj"],
        ["премьера", "primyera", "premyera"],
        ["зрелище", "zrelishe", "tomosha, manzara"],
        ["знаменитость", "znamenitast", "mashhur odam"],
        ["комментарий", "kamintariy", "izoh, sharh"],
        ["лайк", "layk", "layk"],
        ["репост", "ripost", "repost, ulashish"],
        ["обсуждение", "apsujdeniye", "muhokama"],
        ["опрос", "apros", "so‘rovnoma"],
        ["голосование", "galasavaniye", "ovoz berish"],
        ["рейтинг", "reyting", "reyting"],
        ["устаревший", "ustarefshiy", "eskirgan"],
        ["старомодный", "staramodniy", "eski urfdagi"],
        ["ничья", "nichya", "durang"],
        ["поражение", "parajeniye", "mag‘lubiyat"]
      ]
    }
  ]
});
