/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 3: the next 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2, B1 lists or from b2-part1 and b2-part2.
*/
Ruscha.addWords({
  id: "b2-part3",
  title: "B2 so‘zlar — 3-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: ta’m va hid, charchoq va asab, odamlar va xarakter, mehmondorchilik, telefon, pul, ish, sog‘liq, sayohat va tabiat.",
  groups: [
    {
      theme: "Ta’m va hid", icon: "👃", words: [
        ["вкус", "fkus", "ta’m, maza; did"],
        ["запах", "zapax", "hid"],
        ["аромат", "aramat", "xushbo‘y hid"],
        ["пахнуть", "paxnut", "hid kelmoq, hidi bor"],
        ["вонять", "vanyat", "sasimoq, badbo‘y hid chiqarmoq"],
        ["аппетит", "apitit", "ishtaha"],
        ["свежесть", "svejist", "yangilik, tozalik (havo, ovqat)"],
        ["испорченный", "isporchenniy", "buzilgan, aynigan"],
        ["тухлый", "tuxliy", "sasib qolgan, aynigan"],
        ["гнилой", "gniloy", "chirigan"],
        ["чёрствый", "chorstviy", "qotib qolgan (non); bag‘ritosh"],
        ["спелый", "speliy", "pishgan (meva)"],
        ["незрелый", "nizreliy", "xom, pishmagan"],
        ["сочный", "sochniy", "suvli, sersuv"],
        ["жирный", "jirniy", "yog‘li"]
      ]
    },
    {
      theme: "Charchoq va asab", icon: "😮‍💨", words: [
        ["усталость", "ustalast", "charchoq"],
        ["переутомление", "piriutamleniye", "haddan tashqari charchash"],
        ["стресс", "stres", "stress, ruhiy zo‘riqish"],
        ["нервы", "nervi", "asab"],
        ["нервничать", "nervnichat", "asabiylashmoq, hayajonlanmoq"],
        ["психолог", "psixolak", "psixolog"],
        ["дышать", "dishat", "nafas olmoq"],
        ["дыхание", "dixaniye", "nafas"],
        ["голодать", "galadat", "och qolmoq, och yurmoq"],
        ["переедать", "piriyidat", "ko‘p yeb qo‘ymoq"]
      ]
    },
    {
      theme: "Kundalik fe’llar", icon: "🔄", words: [
        ["заставлять", "zastavlyat", "majbur qilmoq"],
        ["вынуждать", "vinujdat", "majbur qilmoq (sharoit)"],
        ["позволять", "pazvalyat", "ruxsat bermoq, yo‘l qo‘ymoq"],
        ["настаивать", "nastaivat", "turib olmoq, talab qilmoq"],
        ["отговаривать", "atgavarivat", "aynitmoq, fikridan qaytarmoq"],
        ["предостерегать", "pridastirigat", "ogohlantirmoq"],
        ["отказывать", "atkazivat", "rad etmoq, yo‘q demoq"],
        ["полагаться", "palagatsa", "ishonmoq, suyanmoq"],
        ["сдерживать", "zderjivat", "tiyib turmoq; (va’dani) bajarmoq"],
        ["поощрять", "paashryat", "rag‘batlantirmoq"],
        ["наказывать", "nakazivat", "jazolamoq"],
        ["капризничать", "kapriznichat", "injiqlik qilmoq"],
        ["просить прощения", "prasit prasheniya", "kechirim so‘ramoq"]
      ]
    },
    {
      theme: "Odamlar", icon: "🧑‍🤝‍🧑", words: [
        ["приятель", "priyatil", "oshna, tanish do‘st"],
        ["знакомство", "znakomstva", "tanishuv"],
        ["свидание", "svidaniye", "uchrashuv (sevishganlar)"],
        ["расставание", "rasstavaniye", "ajralish, xayrlashish"],
        ["сверстник", "sverstnik", "tengdosh"],
        ["соперник", "sapernik", "raqib"],
        ["противник", "prativnik", "raqib, dushman; qarshi odam"],
        ["союзник", "sayuznik", "ittifoqchi, tarafdor"],
        ["прохожий", "praxojiy", "yo‘lovchi (ko‘chadagi)"],
        ["поклонник", "paklonnik", "muxlis; oshiq"],
        ["бездетный", "bizdetniy", "farzandsiz"],
        ["многодетный", "mnagadetniy", "ko‘p bolali"]
      ]
    },
    {
      theme: "Yaxshi fazilatlar", icon: "🌟", words: [
        ["отзывчивый", "atzivchiviy", "yordamga tayyor, mehribon"],
        ["чуткий", "chutkiy", "e’tiborli, ko‘ngilchan"],
        ["гостеприимный", "gastipriimniy", "mehmondo‘st"],
        ["воспитанный", "vaspitanniy", "tarbiyali, odobli"],
        ["послушный", "paslushniy", "itoatkor, gapga kiradigan"],
        ["находчивый", "naxotchiviy", "topqir"],
        ["сообразительный", "saabrazitilniy", "zehnli, tez tushunadigan"],
        ["остроумный", "astraumniy", "hazilkash, so‘zamol"],
        ["способный", "spasobniy", "qobiliyatli"],
        ["мудрый", "mudriy", "dono, oqil"],
        ["уважаемый", "uvajayemiy", "hurmatli"]
      ]
    },
    {
      theme: "Yomon xislatlar", icon: "🌩️", words: [
        ["забывчивый", "zabifchiviy", "unutuvchan"],
        ["наивный", "naivniy", "sodda, go‘l"],
        ["доверчивый", "daverchiviy", "ishonuvchan"],
        ["подозрительный", "padazritilniy", "shubhali; gumonsirovchi"],
        ["завистливый", "zavistliviy", "hasadgo‘y"],
        ["высокомерный", "visakamerniy", "kibrli, manman"],
        ["жестокий", "jistokiy", "shafqatsiz"],
        ["избалованный", "izbalovanniy", "erka, arzanda (buzilgan)"],
        ["непослушный", "nipaslushniy", "gapga kirmaydigan, sho‘x"]
      ]
    },
    {
      theme: "Qadriyatlar", icon: "⚖️", words: [
        ["совесть", "sovist", "vijdon"],
        ["справедливость", "spravidlivast", "adolat"],
        ["несправедливый", "nispravidliviy", "adolatsiz, nohaq"],
        ["милосердие", "milaserdiye", "rahm-shafqat"],
        ["сострадание", "sastradaniye", "hamdardlik, rahm"],
        ["жестокость", "jistokast", "shafqatsizlik"],
        ["гостеприимство", "gastipriimstva", "mehmondo‘stlik"],
        ["глупость", "glupast", "ahmoqlik, bema’ni ish"],
        ["позор", "pazor", "sharmandalik, isnod"],
        ["стыдиться", "stiditsa", "uyalmoq, or qilmoq"]
      ]
    },
    {
      theme: "Mehmon va bayram", icon: "🎉", words: [
        ["застолье", "zastolye", "ziyofat, dasturxon atrofidagi yig‘in"],
        ["угощение", "ugasheniye", "mehmon uchun taom, siylov"],
        ["накрывать на стол", "nakrivat na stol", "dasturxon yozmoq"],
        ["скатерть", "skatirt", "dasturxon"],
        ["поднос", "padnos", "patnis"],
        ["тост", "tost", "qadah so‘zi"],
        ["поздравление", "pazdravleniye", "tabrik"],
        ["сюрприз", "syurpris", "kutilmagan sovg‘a, syurpriz"],
        ["ожидание", "ajidaniye", "kutish"]
      ]
    },
    {
      theme: "Oshxona va uy", icon: "🍳", words: [
        ["духовка", "duxofka", "duxovka"],
        ["морозилка", "marazilka", "muzlatkich (morozilka)"],
        ["кипятить", "kipitit", "qaynatmoq"],
        ["кипяток", "kipitok", "qaynoq suv"],
        ["разогревать", "razagrivat", "isitmoq (ovqatni)"],
        ["размораживать", "razmarajivat", "muzdan tushirmoq"],
        ["остывать", "astivat", "sovumoq"],
        ["провод", "provat", "sim"],
        ["удлинитель", "udlinitil", "uzaytirgich (elektr)"],
        ["выбрасывать", "vibrasivat", "tashlab yubormoq (chiqindini)"],
        ["вывоз мусора", "vivas musara", "chiqindi olib ketish"],
        ["переработка", "pirirabotka", "qayta ishlash"]
      ]
    },
    {
      theme: "Telefon va internet", icon: "📱", words: [
        ["аккумулятор", "akumulyatar", "akkumulyator, batareya"],
        ["разрядиться", "razriditsa", "zaryadi tugamoq"],
        ["зарядить", "zaridit", "zaryad qilmoq"],
        ["перезагрузить", "pirizagruzit", "qayta yoqmoq (o‘chirib yoqmoq)"],
        ["настройки", "nastroyki", "sozlamalar"],
        ["переписка", "piripiska", "yozishma"],
        ["сигнал", "signal", "signal, aloqa"],
        ["роуминг", "rouming", "rouming"],
        ["спам", "spam", "spam, keraksiz xabarlar"],
        ["блокировать", "blakiravat", "bloklamoq"],
        ["взламывать", "vzlamivat", "buzib kirmoq (sahifaga)"],
        ["гаджет", "gajet", "gadjet, qurilma"]
      ]
    },
    {
      theme: "Pul va to‘lov", icon: "💳", words: [
        ["наличка", "nalichka", "naqd pul (so‘zlashuvda)"],
        ["безналичный", "biznalichniy", "naqd pulsiz (karta orqali)"],
        ["перевести деньги", "pirivisti dengi", "pul o‘tkazmoq"],
        ["снять деньги", "snyat dengi", "pul yechmoq"],
        ["пополнить", "papolnit", "to‘ldirmoq (hisobni)"],
        ["кэшбэк", "keshbek", "keshbek (qaytgan pul)"],
        ["скидочная карта", "skidachnaya karta", "chegirma kartasi"],
        ["тариф", "tarif", "tarif"],
        ["абонемент", "abaniment", "abonement, oylik chipta"],
        ["расчёт", "rashot", "hisob-kitob"],
        ["сервис", "servis", "xizmat ko‘rsatish"]
      ]
    },
    {
      theme: "Ish joyida", icon: "💼", words: [
        ["собеседование", "sabisedavaniye", "ishga qabul suhbati"],
        ["соискатель", "saiskatil", "nomzod (ishga)"],
        ["дедлайн", "didlayn", "oxirgi muddat"],
        ["планёрка", "planyorka", "qisqa ish yig‘ilishi"],
        ["инструкция", "instruktsiya", "yo‘riqnoma"],
        ["распоряжение", "rasparijeniye", "farmoyish, buyruq"],
        ["подчиняться", "padchinyatsa", "bo‘ysunmoq"],
        ["руководить", "rukavadit", "rahbarlik qilmoq"],
        ["тренинг", "trening", "trening, o‘quv mashg‘ulot"],
        ["повышение квалификации", "pavisheniye kvalifikatsii", "malaka oshirish"],
        ["занятость", "zanyatast", "bandlik"],
        ["отпуск за свой счёт", "otpusk za svoy shot", "maoshsiz ta’til"],
        ["заказчик", "zakashik", "buyurtmachi"],
        ["выгода", "vigada", "foyda, manfaat"],
        ["эффективный", "efiktivniy", "samarali"],
        ["прибыльный", "pribilniy", "foydali (daromadli)"],
        ["убыточный", "ubitachniy", "zarar keltiruvchi"]
      ]
    },
    {
      theme: "Kasallik belgilari", icon: "🤒", words: [
        ["озноб", "aznop", "et uvishishi, titroq"],
        ["лихорадка", "lixaratka", "bezgak, isitma"],
        ["ломота", "lamota", "lohaslik, suyak og‘rig‘i"],
        ["изжога", "izjoga", "jig‘ildon qaynashi"],
        ["рвота", "rvota", "qusish"],
        ["понос", "panos", "ich ketishi"],
        ["запор", "zapor", "ich qotishi"],
        ["отравиться", "atravitsa", "zaharlanmoq"],
        ["опухать", "apuxat", "shishmoq"],
        ["отёк", "atyok", "shish"],
        ["чесаться", "chisatsa", "qichimoq"],
        ["задыхаться", "zadixatsa", "bo‘g‘ilmoq, nafasi qisilmoq"]
      ]
    },
    {
      theme: "Jarohat va dori", icon: "🩹", words: [
        ["порез", "pares", "kesilgan joy"],
        ["царапина", "tsarapina", "tirnalgan joy"],
        ["шрам", "shram", "chandiq"],
        ["кровотечение", "kravatichiniye", "qon ketishi"],
        ["пластырь", "plastir", "plastir"],
        ["обезболивающее", "abizbolivayushiye", "og‘riq qoldiruvchi dori"],
        ["снотворное", "snatvornaye", "uyqu dori"],
        ["успокоительное", "uspakaitilnaye", "tinchlantiruvchi dori"],
        ["антибиотик", "antibiotik", "antibiotik"]
      ]
    },
    {
      theme: "Tana holati", icon: "🧍", words: [
        ["осанка", "asanka", "qad-qomat, gavda tutishi"],
        ["сутулиться", "sutulitsa", "bukchaymoq"],
        ["хромать", "xramat", "oqsamoq"],
        ["слепой", "slipoy", "ko‘r"],
        ["глухой", "gluxoy", "kar"],
        ["немой", "nimoy", "soqov"],
        ["инвалидность", "invalidnast", "nogironlik"]
      ]
    },
    {
      theme: "Sayohat", icon: "🧳", words: [
        ["заселение", "zaseleniye", "joylashish (mehmonxonaga)"],
        ["выселение", "viseleniye", "chiqish (mehmonxonadan); ko‘chirish"],
        ["досмотр", "dasmotr", "ko‘rikdan o‘tkazish (yuk, odam)"],
        ["задержка рейса", "zaderjka reysa", "reys kechikishi"],
        ["путеводитель", "putivaditil", "yo‘lko‘rsatkich kitob"],
        ["экскурсовод", "ekskursavot", "gid, ekskursiya boshlovchisi"],
        ["туристический", "turistichiskiy", "turistik"],
        ["навигатор", "navigatar", "navigator"],
        ["загорать", "zagarat", "quyoshda toblanmoq"],
        ["купаться", "kupatsa", "cho‘milmoq"],
        ["тонуть", "tanut", "cho‘kmoq"]
      ]
    },
    {
      theme: "Tabiat va ob-havo", icon: "🌦️", words: [
        ["ливень", "livin", "jala"],
        ["град", "grat", "do‘l"],
        ["слякоть", "slyakat", "loy-shalabbo, qor aralash loy"],
        ["заморозки", "zamaroski", "qirov, sovuq urishi"],
        ["листопад", "listapat", "xazonrezgi"],
        ["духота", "duxata", "dim havo"],
        ["прохлада", "praxlada", "salqin"],
        ["сырость", "sirast", "namlik, zax"],
        ["холм", "xolm", "tepalik"],
        ["пруд", "prut", "hovuz, ko‘lcha"],
        ["тропинка", "trapinka", "so‘qmoq"],
        ["экологичный", "ekalagichniy", "tabiatga zararsiz"]
      ]
    },
    {
      theme: "Hujjat va jamiyat", icon: "📄", words: [
        ["прописка", "prapiska", "propiska, doimiy ro‘yxat"],
        ["миграционная карта", "migratsionnaya karta", "migratsiya kartasi"],
        ["копия", "kopiya", "nusxa"],
        ["заверить", "zaverit", "tasdiqlatmoq (notarial)"],
        ["продлить", "pradlit", "muddatini uzaytirmoq"],
        ["бездомный", "bizdomniy", "uysiz"],
        ["приют", "priyut", "boshpana; mehribonlik uyi"],
        ["пожертвование", "pajertvavaniye", "xayriya, ehson"]
      ]
    }
  ]
});
