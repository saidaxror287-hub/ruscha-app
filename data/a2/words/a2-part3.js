/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 3: more words of the TORFL / ТРКИ A2 (basic) lexical minimum (not in A1 or A2 parts 1–2), grouped by theme.
*/
Ruscha.addWords({
  id: "a2-part3",
  title: "A2 so‘zlar — 3-qism",
  icon: "📘",
  note: "ТРКИ A2 (bazaviy daraja) leksik minimumidan yana yangi so‘zlar, mavzular bo‘yicha.",
  groups: [
    {
      theme: "Ish joyida", icon: "🛠️", words: [
        ["склад", "sklat", "ombor"],
        ["заказ", "zakas", "buyurtma"],
        ["доставка", "dastafka", "yetkazib berish"],
        ["грузчик", "grushik", "yuk tashuvchi"],
        ["уборщица", "uborshitsa", "farrosh ayol"],
        ["охранник", "axrannik", "qo‘riqchi"],
        ["электрик", "elektrik", "elektrik"],
        ["сантехник", "santexnik", "santexnik"],
        ["стройка", "stroyka", "qurilish (joyi)"],
        ["инструмент", "instrument", "asbob"],
        ["молоток", "malatok", "bolg‘a"],
        ["лопата", "lapata", "belkurak"],
        ["премия", "premiya", "mukofot puli"]
      ]
    },
    {
      theme: "Uy-ro‘zg‘or buyumlari", icon: "🧹", words: [
        ["утюг", "utyuk", "dazmol"],
        ["пылесос", "pilisos", "changyutgich"],
        ["чайник", "chaynik", "choynak"],
        ["микроволновка", "mikravalnofka", "mikroto‘lqinli pech"],
        ["посуда", "pasuda", "idish-tovoq"],
        ["сковорода", "skavarada", "tova"],
        ["ведро", "vidro", "chelak"],
        ["щётка", "shyotka", "cho‘tka"],
        ["зубная паста", "zubnaya pasta", "tish pastasi"],
        ["шампунь", "shampun", "shampun"],
        ["расчёска", "rashyoska", "taroq"],
        ["полка", "polka", "tokcha, javon"],
        ["розетка", "razetka", "rozetka"],
        ["лампочка", "lampachka", "lampochka"],
        ["батарея", "bataryeya", "isitish radiatori, batareya"],
        ["замок", "zamok", "qulf"]
      ]
    },
    {
      theme: "Sport", icon: "⚽", words: [
        ["команда", "kamanda", "jamoa"],
        ["игрок", "igrok", "o‘yinchi"],
        ["тренер", "trener", "murabbiy"],
        ["тренировка", "trinirofka", "mashg‘ulot"],
        ["матч", "match", "o‘yin, uchrashuv (sportda)"],
        ["победа", "pabeda", "g‘alaba"],
        ["мяч", "myach", "to‘p"],
        ["гол", "gol", "gol"],
        ["бег", "bek", "yugurish"],
        ["лыжи", "liji", "chang‘i"],
        ["плавание", "plavaniye", "suzish"],
        ["выигрывать", "viigrivat", "yutmoq"],
        ["проигрывать", "praigrivat", "yutqazmoq"],
        ["тренироваться", "triniravatsa", "mashq qilmoq"]
      ]
    },
    {
      theme: "Madaniyat va ommaviy axborot", icon: "📺", words: [
        ["новости", "novasti", "yangiliklar"],
        ["журнал", "jurnal", "jurnal"],
        ["программа", "pragramma", "dastur"],
        ["сериал", "serial", "serial"],
        ["актёр", "aktyor", "aktyor"],
        ["певец", "pivets", "qo‘shiqchi (erkak)"],
        ["художник", "xudojnik", "rassom"],
        ["писатель", "pisatel", "yozuvchi"],
        ["картина", "kartina", "rasm, surat"],
        ["радио", "radia", "radio"],
        ["канал", "kanal", "kanal"],
        ["реклама", "riklama", "reklama"],
        ["праздновать", "praznavat", "bayram qilmoq"],
        ["культура", "kultura", "madaniyat"]
      ]
    },
    {
      theme: "Tana va salomatlik", icon: "🫀", words: [
        ["шея", "sheya", "bo‘yin"],
        ["грудь", "grut", "ko‘krak"],
        ["локоть", "lokat", "tirsak"],
        ["ладонь", "ladon", "kaft"],
        ["лоб", "lop", "peshona"],
        ["желудок", "jiludak", "oshqozon"]
      ]
    },
    {
      theme: "Vaqt", icon: "⏳", words: [
        ["сутки", "sutki", "sutka, bir kecha-kunduz"],
        ["полгода", "polgada", "yarim yil"],
        ["ежедневно", "yijidnevna", "har kuni"],
        ["редко", "retka", "kamdan-kam"],
        ["тогда", "tagda", "o‘shanda; unda"],
        ["затем", "zatem", "so‘ngra"],
        ["однажды", "adnajdi", "bir kuni"],
        ["давно", "davno", "ancha oldin; ko‘pdan beri"],
        ["когда-нибудь", "kagda-nibut", "qachondir"],
        ["вчерашний", "fchirashniy", "kechagi"],
        ["сегодняшний", "sivodnyashniy", "bugungi"],
        ["завтрашний", "zaftrashniy", "ertangi"],
        ["ранний", "ranniy", "erta"],
        ["поздний", "pozniy", "kech"],
        ["по выходным", "pa vixadnim", "dam olish kunlari"]
      ]
    },
    {
      theme: "Joy va yo‘nalish", icon: "🧭", words: [
        ["между", "mejdu", "orasida"],
        ["около", "okala", "yonida; taxminan"],
        ["напротив", "naprotif", "qarshisida"],
        ["вокруг", "vakruk", "atrofida"],
        ["через", "cheris", "orqali; (vaqt) ...dan keyin"],
        ["после", "posli", "...dan keyin"],
        ["перед", "perit", "oldida; ...dan oldin"],
        ["до", "do", "...gacha"],
        ["от", "ot", "...dan"],
        ["по", "po", "bo‘ylab; orqali"],
        ["под", "pot", "ostida"],
        ["над", "nat", "ustida"],
        ["за", "za", "orqasida; uchun"],
        ["кроме", "krome", "...dan tashqari"],
        ["вместо", "vmesta", "o‘rniga"],
        ["сзади", "szadi", "orqada"],
        ["впереди", "fpiridi", "oldinda"]
      ]
    },
    {
      theme: "Bog‘lovchi so‘zlar", icon: "🔗", words: [
        ["поэтому", "paetamu", "shuning uchun"],
        ["хотя", "xatya", "garchi"],
        ["чтобы", "shtobi", "...ish uchun"],
        ["также", "takje", "shuningdek"],
        ["даже", "daje", "hatto"],
        ["например", "naprimer", "masalan"],
        ["во-первых", "va-pervix", "birinchidan"],
        ["во-вторых", "va-ftarix", "ikkinchidan"],
        ["кстати", "kstati", "aytgancha"],
        ["значит", "znachit", "demak"],
        ["к счастью", "k shastyu", "yaxshiyamki, baxtimizga"]
      ]
    },
    {
      theme: "Harakat fe’llari", icon: "🚶", words: [
        ["прийти", "priyti", "kelmoq (bir marta)"],
        ["уйти", "uyti", "ketmoq"],
        ["войти", "vayti", "kirmoq"],
        ["выйти", "viyti", "chiqmoq"],
        ["перейти", "piriyti", "o‘tmoq (ko‘chadan)"],
        ["подойти", "padayti", "yaqinlashmoq"],
        ["зайти", "zayti", "kirib o‘tmoq"],
        ["доехать", "dayexat", "(transportda) yetib bormoq"],
        ["отвезти", "atvisti", "olib bormoq (transportda)"],
        ["привезти", "privisti", "olib kelmoq (transportda)"],
        ["принести", "prinisti", "olib kelmoq (qo‘lda)"],
        ["вернуть", "virnut", "qaytarmoq"],
        ["положить", "palajit", "qo‘ymoq (yotqizib)"],
        ["поставить", "pastavit", "qo‘ymoq (tik)"],
        ["повесить", "pavesit", "ilmoq, osmoq"],
        ["поднимать", "padnimat", "ko‘tarmoq"],
        ["бросать", "brasat", "tashlamoq"],
        ["падать", "padat", "yiqilmoq, tushmoq"]
      ]
    },
    {
      theme: "Jamiyat va davlat", icon: "🏛️", words: [
        ["президент", "prizident", "prezident"],
        ["история", "istoriya", "tarix; voqea"]
      ]
    }
  ]
});
