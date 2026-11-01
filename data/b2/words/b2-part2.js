/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 2: the next 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2, B1 lists or from b2-part1.
*/
Ruscha.addWords({
  id: "b2-part2",
  title: "B2 so‘zlar — 2-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: vaziyat va natija, maqsad, his-tuyg‘ular, nizolar, kundalik hayot, tashqi ko‘rinish, yo‘l, o‘qish va huquq.",
  groups: [
    {
      theme: "Vaziyat va natija", icon: "🧭", words: [
        ["ситуация", "situatsiya", "vaziyat"],
        ["положение", "palajeniye", "ahvol, holat; qoida"],
        ["обстановка", "apstanofka", "vaziyat, muhit; jihozlar"],
        ["обстоятельства", "apstayatilstva", "sharoit, holatlar"],
        ["последствие", "pasletstviye", "oqibat"],
        ["преимущество", "priimushestva", "ustunlik, afzallik"],
        ["недостаток", "nidastatak", "kamchilik; yetishmovchilik"],
        ["польза", "polza", "foyda, naf"],
        ["вред", "vret", "zarar"],
        ["риск", "risk", "tavakkal, xavf"],
        ["опасность", "apasnast", "xavf, xatar"],
        ["успех", "uspex", "muvaffaqiyat"],
        ["неудача", "niudacha", "omadsizlik, muvaffaqiyatsizlik"],
        ["провал", "praval", "barbod bo‘lish, muvaffaqiyatsizlik"]
      ]
    },
    {
      theme: "Maqsad va qobiliyat", icon: "🎯", words: [
        ["цель", "tsel", "maqsad"],
        ["мечта", "michta", "orzu"],
        ["привычка", "privichka", "odat"],
        ["навык", "navik", "ko‘nikma, malaka"],
        ["умение", "umeniye", "mahorat, qila bilish"],
        ["способность", "spasobnast", "qobiliyat"],
        ["талант", "talant", "iste’dod"],
        ["достоинство", "dastoinstva", "fazilat; qadr-qimmat"],
        ["вдохновение", "vdaxnaveniye", "ilhom"],
        ["отношение", "atnasheniye", "munosabat"],
        ["поведение", "pavideniye", "xulq, o‘zini tutish"],
        ["поступок", "pastupak", "qilmish, ish (qilingan ish)"]
      ]
    },
    {
      theme: "Bog‘lovchi so‘zlar", icon: "🔗", words: [
        ["в целом", "f tselam", "umuman olganda, yaxlit"],
        ["по сути", "pa suti", "aslida, mohiyatan"],
        ["причём", "prichyom", "buning ustiga, yana"],
        ["помимо", "pamima", "…dan tashqari"],
        ["ради", "radi", "…uchun, …ning hurmatiga"],
        ["вопреки", "vapriki", "…ga qaramay, …ga zid"],
        ["насчёт", "nashot", "…haqida, …to‘g‘risida"],
        ["по поводу", "pa povadu", "…yuzasidan, …munosabati bilan"],
        ["в связи с", "f svyazi s", "…munosabati bilan, …sababli"],
        ["как будто", "kak buta", "go‘yo, xuddi …dek"],
        ["словно", "slovna", "xuddi, go‘yo"],
        ["мол", "mol", "emish, deydi (birovning gapi)"]
      ]
    },
    {
      theme: "Qanchalik?", icon: "📏", words: [
        ["практически", "praktichiski", "deyarli; amalda"],
        ["фактически", "faktichiski", "aslida, haqiqatda"],
        ["буквально", "bukvalna", "tom ma’noda; rosa, sal kam"],
        ["отчасти", "atchasti", "qisman"],
        ["абсолютно", "apsalyutna", "mutlaqo, butunlay"],
        ["весьма", "visma", "ancha, juda"],
        ["довольно", "davolna", "ancha, yetarlicha"],
        ["крайне", "krayni", "nihoyatda, o‘ta"],
        ["слегка", "slixka", "sal, biroz"],
        ["всерьёз", "fsiryos", "jiddiy, chindan"],
        ["напрасно", "naprasna", "bekorga, behuda"],
        ["наугад", "naugat", "taxminan, tavakkaliga"]
      ]
    },
    {
      theme: "His-tuyg‘ular", icon: "🎭", words: [
        ["взволнованный", "vzvalnovanniy", "hayajonlangan"],
        ["обеспокоенный", "abispakoyenniy", "xavotirdagi, tashvishlangan"],
        ["раздражённый", "razdrajonniy", "asabiy, jahli chiqqan"],
        ["разочарованный", "razacharovanniy", "hafsalasi pir bo‘lgan"],
        ["подавленный", "padavlenniy", "ezilgan, tushkun"],
        ["благодарный", "blagadarniy", "minnatdor"],
        ["испуг", "ispuk", "qo‘rquv, cho‘chish"],
        ["ужас", "ujas", "dahshat"],
        ["паника", "panika", "vahima"],
        ["злость", "zlost", "jahl, g‘azab"],
        ["любопытство", "lyubapitstva", "qiziqish"],
        ["недовольство", "nidavolstva", "norozilik"],
        ["восхищение", "vasxisheniye", "hayrat, qoyil qolish"],
        ["ненависть", "nenavist", "nafrat"],
        ["страсть", "strast", "ishtiyoq, ehtiros"]
      ]
    },
    {
      theme: "Tuyg‘u fe’llari", icon: "💓", words: [
        ["злиться", "zlitsa", "jahli chiqmoq"],
        ["пугать", "pugat", "qo‘rqitmoq"],
        ["пугаться", "pugatsa", "qo‘rqib ketmoq, cho‘chimoq"],
        ["волновать", "valnavat", "hayajonlantirmoq; tashvishga solmoq"],
        ["тревожить", "trivojit", "bezovta qilmoq, tashvishlantirmoq"],
        ["огорчать", "agarchat", "xafa qilmoq, ranjitmoq"],
        ["огорчаться", "agarchatsa", "xafa bo‘lmoq, ranjimoq"],
        ["расстраиваться", "rasstraivatsa", "xafa bo‘lmoq, ko‘ngli cho‘kmoq"],
        ["успокаивать", "uspakaivat", "tinchlantirmoq"],
        ["успокаиваться", "uspakaivatsa", "tinchlanmoq"],
        ["утешать", "utishat", "taskin bermoq, ovutmoq"]
      ]
    },
    {
      theme: "Nizo va kechirim", icon: "⚖️", words: [
        ["вина", "vina", "ayb, gunoh"],
        ["виноватый", "vinavatiy", "aybdor"],
        ["упрёк", "upryok", "ta’na, gina"],
        ["оправдание", "apravdaniye", "bahona; oqlanish"],
        ["обман", "abman", "aldov, yolg‘on"],
        ["подозревать", "padazrivat", "gumon qilmoq, shubha qilmoq"],
        ["оскорблять", "askarblyat", "haqorat qilmoq"],
        ["оскорбление", "askarbleniye", "haqorat"],
        ["унижать", "unijat", "kamsitmoq, xo‘rlamoq"],
        ["хамить", "xamit", "qo‘pollik qilmoq"],
        ["хамство", "xamstva", "qo‘pollik, beadablik"],
        ["презирать", "prizirat", "nafratlanib qaramoq, mensimaslik"],
        ["месть", "mest", "qasos, o‘ch"],
        ["мстить", "mstit", "qasos olmoq, o‘ch olmoq"],
        ["раскаиваться", "raskaivatsa", "pushaymon bo‘lmoq, tavba qilmoq"],
        ["соболезнование", "sabaleznavaniye", "ta’ziya, hamdardlik"]
      ]
    },
    {
      theme: "Oila", icon: "👪", words: [
        ["вдовец", "vdavets", "beva erkak (xotini vafot etgan)"],
        ["усыновить", "usinavit", "farzandlikka olmoq"],
        ["приёмный", "priyomniy", "asrandi, asrab olingan (bola, ota-ona)"],
        ["опекун", "apikun", "vasiy, homiy"],
        ["сводный", "svodniy", "o‘gay (aka-uka, opa-singil)"],
        ["сват", "svat", "quda; sovchi"],
        ["наследник", "naslednik", "merosxo‘r"],
        ["баловать", "balavat", "erkalatib buzmoq, arzanda qilmoq"]
      ]
    },
    {
      theme: "Fikr va bahs", icon: "💬", words: [
        ["критика", "kritika", "tanqid"],
        ["опровергать", "apravirgat", "rad etmoq, inkor qilmoq"],
        ["отстаивать", "atstaivat", "himoya qilmoq (fikrini)"],
        ["рассуждать", "rassujdat", "mulohaza yuritmoq"],
        ["размышлять", "razmishlyat", "o‘ylamoq, fikr yuritmoq"],
        ["решаться", "rishatsa", "jur’at qilmoq, qaror qilmoq"],
        ["договорённость", "dagavaryonnast", "kelishuv"],
        ["стереотип", "stiriatip", "stereotip, qotib qolgan fikr"],
        ["предрассудок", "pridrassudak", "xurofot, eskicha qarash"],
        ["упрямство", "upryamstva", "o‘jarlik"]
      ]
    },
    {
      theme: "Kundalik fe’llar", icon: "🔄", words: [
        ["путать", "putat", "adashtirmoq, chalkashtirmoq"],
        ["перепутать", "piriputat", "adashtirib qo‘ymoq"],
        ["различать", "razlichat", "farqlamoq, ajratmoq"],
        ["переносить", "pirinasit", "boshqa vaqtga ko‘chirmoq; chidamoq"],
        ["догонять", "daganyat", "quvib yetmoq"],
        ["обгонять", "abganyat", "quvib o‘tmoq"],
        ["отставать", "atstavat", "orqada qolmoq"],
        ["осваивать", "asvaivat", "o‘zlashtirmoq"],
        ["приспосабливаться", "prispasablivatsa", "moslashmoq"],
        ["увеличивать", "uvilichivat", "ko‘paytirmoq, oshirmoq"],
        ["уменьшать", "uminshat", "kamaytirmoq"],
        ["возникать", "vaznikat", "paydo bo‘lmoq, chiqib qolmoq"],
        ["исчезать", "ishizat", "g‘oyib bo‘lmoq, yo‘qolmoq"],
        ["разрушать", "razrushat", "buzmoq, vayron qilmoq"],
        ["восстанавливать", "vasstanavlivat", "tiklamoq"],
        ["жертвовать", "jertvavat", "qurbon qilmoq; xayriya qilmoq"],
        ["исключать", "isklyuchat", "chiqarib yubormoq; istisno qilmoq"],
        ["обеспечивать", "abispechivat", "ta’minlamoq"],
        ["приводить", "privadit", "olib kelmoq; …ga olib kelmoq (natija)"],
        ["состоять", "sastayat", "…dan iborat bo‘lmoq; …da turmoq (a’zo)"],
        ["применять", "priminyat", "qo‘llamoq, ishlatmoq"]
      ]
    },
    {
      theme: "Kundalik hayot", icon: "🗓️", words: [
        ["будни", "budni", "ish kunlari; oddiy kunlar"],
        ["досуг", "dasuk", "bo‘sh vaqt"],
        ["суета", "suita", "g‘ala-g‘ovur, tashvish"],
        ["хлопоты", "xlopati", "tashvish, yugur-yugur"],
        ["распорядок", "rasparyadak", "kun tartibi"],
        ["развлечение", "razvlicheniye", "ko‘ngilochar mashg‘ulot"],
        ["лень", "len", "dangasalik"],
        ["сбой", "zboy", "nosozlik, uzilish (tizimda)"],
        ["подписка", "patpiska", "obuna"],
        ["устанавливать", "ustanavlivat", "o‘rnatmoq"]
      ]
    },
    {
      theme: "Tashqi ko‘rinish", icon: "🪞", words: [
        ["симпатичный", "simpatichniy", "yoqimtoy, chiroyli"],
        ["привлекательный", "privlikatilniy", "jozibali"],
        ["стройный", "stroyniy", "qaddi-qomatli, xushbichim"],
        ["ухоженный", "uxojenniy", "ozoda, o‘ziga qaraydigan"],
        ["нарядный", "naryadniy", "yasangan, bayramona"],
        ["лысый", "lisiy", "kal"],
        ["кудрявый", "kudryaviy", "jingalak sochli"],
        ["морщина", "marshina", "ajin"],
        ["мятый", "myatiy", "g‘ijim"],
        ["фасон", "fason", "bichim, fason"],
        ["каблук", "kabluk", "poshna"]
      ]
    },
    {
      theme: "Ovqat", icon: "🍲", words: [
        ["перекус", "pirikus", "yengil tamaddi"],
        ["приправа", "priprava", "ziravor"],
        ["нарезать", "narezat", "to‘g‘ramoq"],
        ["запекать", "zapikat", "pishirmoq (duxovkada)"],
        ["тушить", "tushit", "dimlamoq; o‘chirmoq (olovni)"],
        ["кислый", "kisliy", "nordon"],
        ["горький", "gorkiy", "achchiq (taxir)"],
        ["пресный", "presniy", "tuzsiz, bemaza"],
        ["просроченный", "prasrochenniy", "muddati o‘tgan"]
      ]
    },
    {
      theme: "Yo‘l va ob-havo", icon: "🚗", words: [
        ["затор", "zator", "tirbandlik"],
        ["обочина", "abochina", "yo‘l chekkasi"],
        ["столкновение", "stalknaveniye", "to‘qnashuv"],
        ["превышение скорости", "privisheniye skorasti", "tezlikni oshirish"],
        ["техосмотр", "texasmotr", "texnik ko‘rik"],
        ["тормоз", "tormas", "tormoz"],
        ["шина", "shina", "shina, g‘ildirak rezinasi"],
        ["гололёд", "galalyot", "yaxmalak"],
        ["метель", "mitel", "bo‘ron, qor bo‘roni"],
        ["оттепель", "ottipel", "iliq kunlar (qor erishi)"]
      ]
    },
    {
      theme: "O‘qish", icon: "🎓", words: [
        ["репетитор", "ripititar", "repetitor, xususiy o‘qituvchi"],
        ["успеваемость", "uspivayemast", "o‘zlashtirish (baholar)"],
        ["отличник", "atlichnik", "a’lochi"],
        ["конспект", "kanspekt", "konspekt"],
        ["семинар", "siminar", "seminar"],
        ["шпаргалка", "shpargalka", "shpargalka"],
        ["списывать", "spisivat", "ko‘chirmoq (birovdan)"],
        ["прогуливать", "pragulivat", "dars qoldirmoq"]
      ]
    },
    {
      theme: "Huquq va jamiyat", icon: "🏛️", words: [
        ["требование", "trebavaniye", "talab"],
        ["претензия", "pritenziya", "da’vo, e’tiroz"],
        ["запрет", "zapret", "taqiq"],
        ["ограничение", "agranicheniye", "cheklov"],
        ["соблюдать", "sablyudat", "rioya qilmoq"],
        ["добровольный", "dabravolniy", "ixtiyoriy"],
        ["лицензия", "litsenziya", "litsenziya, ruxsatnoma"],
        ["арест", "arest", "hibsga olish"],
        ["судья", "sudya", "sudya"],
        ["приговор", "prigavor", "hukm"],
        ["хулиган", "xuligan", "bezori"],
        ["коррупция", "karruptsiya", "korrupsiya, poraxo‘rlik"],
        ["мэр", "mer", "mer, shahar hokimi"]
      ]
    },
    {
      theme: "Mulk va pul", icon: "💰", words: [
        ["имущество", "imushestva", "mol-mulk"],
        ["собственность", "sopstvennast", "mulk"],
        ["собственник", "sopstvennik", "mulkdor, egasi"],
        ["арендатор", "arindatar", "ijarachi"],
        ["завещание", "zavishaniye", "vasiyatnoma"],
        ["страховка", "straxofka", "sug‘urta"],
        ["возмещать", "vazmishat", "qoplamoq (zararni)"],
        ["дефект", "difekt", "nuqson"]
      ]
    }
  ]
});
