/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 5: the last words of the TORFL / ТРКИ-1 (B1) lexical minimum (about 2300 words together with A1 and A2).
  None of them repeats a word from the A1, A2 or B1 lists.
*/
Ruscha.addWords({
  id: "b1-part5",
  title: "B1 so‘zlar — 5-qism",
  icon: "📙",
  note: "ТРКИ-1 (B1) so‘zlari, oxirgi qism: ish va hujjatlar, raqamli hayot, marosimlar, xarakter va kundalik fe’llar.",
  groups: [
    {
      theme: "Ish joyida", icon: "💼", words: [
        ["стажёр", "stajyor", "stajyor, amaliyotchi"],
        ["стажировка", "stajirofka", "amaliyot, stajirovka"],
        ["вахта", "vaxta", "vaxta usulida ishlash"],
        ["надбавка", "nadbafka", "ustama (maoshga)"],
        ["аванс", "avans", "avans, oldindan to‘lov"],
        ["оклад", "aklat", "maosh (belgilangan)"],
        ["кадры", "kadri", "kadrlar, xodimlar"],
        ["трудовая книжка", "trudavaya knijka", "mehnat daftarchasi"],
        ["испытательный срок", "ispitatilniy srok", "sinov muddati"],
        ["рабочее место", "rabochiye mesta", "ish joyi"]
      ]
    },
    {
      theme: "Uy va hovli", icon: "🏘️", words: [
        ["общежитие", "apshijitiye", "yotoqxona (talabalar, ishchilar)"],
        ["коммуналка", "kamunalka", "kommunal kvartira"],
        ["сосулька", "sasulka", "muz sumalak"],
        ["мусоропровод", "musarapravot", "axlat quvuri"],
        ["мусорный бак", "musarniy bak", "axlat konteyneri"],
        ["газон", "gazon", "maysazor"],
        ["скамейка", "skameyka", "o‘rindiq, skameyka"],
        ["детская площадка", "detskaya plashatka", "bolalar maydonchasi"]
      ]
    },
    {
      theme: "Tibbiy xizmatlar", icon: "🏥", words: [
        ["участковый врач", "uchastkoviy vrach", "hududiy shifokor"],
        ["медосмотр", "medasmotr", "tibbiy ko‘rik"],
        ["флюорография", "flyuaragrafiya", "flyuorografiya"],
        ["рентген", "rintgen", "rentgen"],
        ["УЗИ", "uzi", "UZI (ultratovush tekshiruvi)"],
        ["кардиолог", "kardiolag", "kardiolog (yurak shifokori)"],
        ["невролог", "nivrolag", "nevrolog"],
        ["окулист", "akulist", "ko‘z shifokori"]
      ]
    },
    {
      theme: "Yo‘l va transport", icon: "🛴", words: [
        ["автовокзал", "aftavagzal", "avtovokzal"],
        ["попутчик", "paputchik", "yo‘ldosh, hamroh"],
        ["объезд", "abyest", "aylanma yo‘l"],
        ["тупик", "tupik", "berk ko‘cha, boshi berk yo‘l"],
        ["развязка", "razvyaska", "yo‘l ayrilishi (razvyazka)"],
        ["пешеходная зона", "pishixodnaya zona", "piyodalar hududi"],
        ["велодорожка", "veladarojka", "velosiped yo‘lagi"],
        ["самокат", "samakat", "samokat"]
      ]
    },
    {
      theme: "Xarid va xizmat", icon: "📦", words: [
        ["маркетплейс", "marketpleys", "internet savdo maydoni (marketpleys)"],
        ["пункт выдачи", "punkt vidachi", "buyurtma topshirish punkti"],
        ["курьер", "kuryer", "kuryer"],
        ["бренд", "brend", "brend, tovar belgisi"],
        ["подделка", "paddelka", "qalbaki mahsulot"],
        ["кешбэк", "keshbek", "keshbek (qaytgan pul)"],
        ["бонус", "bonus", "bonus"],
        ["дефицит", "difitsit", "taqchillik"]
      ]
    },
    {
      theme: "Ovqat", icon: "🥟", words: [
        ["фастфуд", "fastfut", "tez tayyor ovqat (fastfud)"],
        ["шашлык", "shashlik", "shashlik"],
        ["лепёшка", "lipyoshka", "non, lepyoshka"],
        ["самса", "samsa", "somsa"],
        ["манты", "manti", "manti"],
        ["лагман", "lagman", "lag‘mon"],
        ["творог", "tvarok", "tvorog, suzma"],
        ["йогурт", "yogurt", "yogurt"],
        ["компот", "kampot", "kompot"]
      ]
    },
    {
      theme: "Odamlar", icon: "🧑‍🤝‍🧑", words: [
        ["ровесник", "ravesnik", "tengdosh"],
        ["собеседник", "sabesednik", "suhbatdosh"],
        ["незнакомец", "niznakomets", "notanish odam"],
        ["владелец", "vladelets", "egasi"],
        ["ветеран", "vitiran", "faxriy, veteran"],
        ["инвалид", "invalit", "nogironligi bor odam"],
        ["малыш", "malish", "kichkintoy"],
        ["старик", "starik", "chol, qariya"],
        ["старушка", "starushka", "kampir, keksa ayol"]
      ]
    },
    {
      theme: "O‘qish", icon: "🎓", words: [
        ["аудитория", "auditoriya", "auditoriya, dars xonasi"],
        ["балл", "bal", "ball"],
        ["отметка", "atmetka", "baho"],
        ["тест", "test", "test"],
        ["олимпиада", "alimpiada", "olimpiada"],
        ["выпускной", "vipusknoy", "bitiruv kechasi"],
        ["аттестат", "atistat", "attestat (maktab hujjati)"],
        ["студенческий билет", "studencheskiy bilet", "talabalik guvohnomasi"]
      ]
    },
    {
      theme: "OAV va tomosha", icon: "🎬", words: [
        ["блогер", "bloger", "bloger"],
        ["подписчик", "patpishchik", "obunachi"],
        ["видео", "video", "video"],
        ["трансляция", "translyatsiya", "jonli efir, translyatsiya"],
        ["эфир", "efir", "efir"],
        ["ведущий", "viduyushiy", "boshlovchi"],
        ["аплодисменты", "aplodismenti", "qarsaklar"],
        ["антракт", "antrakt", "tanaffus (teatrda)"]
      ]
    },
    {
      theme: "Hayvonlar", icon: "🐻", words: [
        ["медведь", "midvet", "ayiq"],
        ["волк", "volk", "bo‘ri"],
        ["лиса", "lisa", "tulki"],
        ["заяц", "zayats", "quyon"],
        ["белка", "belka", "olmaxon"],
        ["змея", "zmiya", "ilon"],
        ["верблюд", "virblyut", "tuya"],
        ["коза", "kaza", "echki"]
      ]
    },
    {
      theme: "Davlat va xizmatlar", icon: "🏛️", words: [
        ["паспортный стол", "paspartniy stol", "pasport stoli"],
        ["МВД", "em-ve-de", "Ichki ishlar vazirligi"],
        ["госуслуги", "gosuslugi", "davlat xizmatlari (portal)"],
        ["администрация", "administratsiya", "ma’muriyat"],
        ["указ", "ukas", "farmon"],
        ["реформа", "riforma", "islohot"],
        ["партия", "partiya", "partiya"],
        ["демократия", "dimakratiya", "demokratiya"]
      ]
    },
    {
      theme: "Raqamli hayot", icon: "📲", words: [
        ["аккаунт", "akkaunt", "akkaunt, hisob"],
        ["логин", "login", "login"],
        ["уведомление", "uvidamleniye", "bildirishnoma; xabarnoma"],
        ["обновление", "abnavleniye", "yangilanish"],
        ["переводчик", "pirivotchik", "tarjimon"],
        ["голосовое сообщение", "galasavoye saapsheniye", "ovozli xabar"],
        ["смайлик", "smaylik", "smaylik"],
        ["камера", "kamira", "kamera"],
        ["наушники", "naushniki", "quloqchin"]
      ]
    },
    {
      theme: "Bayram va marosimlar", icon: "🕌", words: [
        ["юбилей", "yubiley", "yubiley"],
        ["годовщина", "gadafshina", "yillik (sana)"],
        ["поминки", "pominki", "marhumni xotirlash marosimi"],
        ["похороны", "poxarani", "dafn marosimi"],
        ["помолвка", "pamolfka", "unashtiruv, fotiha to‘yi"],
        ["сватовство", "svataftsvo", "sovchilik"],
        ["Навруз", "Navruz", "Navro‘z"],
        ["ифтар", "iftar", "iftorlik"]
      ]
    },
    {
      theme: "Kundalik fe’llar", icon: "🔄", words: [
        ["регистрироваться", "rigistrirovatsa", "ro‘yxatdan o‘tmoq"],
        ["подписывать", "patpisivat", "imzolamoq"],
        ["заполнять", "zapalnyat", "to‘ldirmoq (anketa)"],
        ["предъявлять", "pridyavlyat", "ko‘rsatmoq (hujjat)"],
        ["подавать", "padavat", "topshirmoq (ariza); uzatmoq"],
        ["арендовать", "arindavat", "ijaraga olmoq"],
        ["скачивать", "skachivat", "yuklab olmoq"],
        ["загружать", "zagrujat", "yuklamoq"],
        ["удалять", "udalyat", "o‘chirmoq (fayl, xabar)"],
        ["печатать", "pichatat", "chop etmoq; yozmoq (klaviaturada)"],
        ["нажимать", "najimat", "bosmoq (tugmani)"],
        ["переписываться", "piripisivatsa", "yozishmoq"],
        ["обнимать", "abnimat", "quchoqlamoq"],
        ["целовать", "tselavat", "o‘pmoq"],
        ["ругать", "rugat", "koyimoq, urishmoq"],
        ["хвалить", "xvalit", "maqtamoq"],
        ["шутить", "shutit", "hazillashmoq"],
        ["кричать", "krichat", "baqirmoq"],
        ["шептать", "shiptat", "shivirlamoq"],
        ["молчать", "malchat", "jim turmoq"],
        ["терпеть", "tirpet", "chidamoq"],
        ["прятать", "pryatat", "yashirmoq, bekitmoq"],
        ["наливать", "nalivat", "quymoq"],
        ["чистить", "chistit", "tozalamoq; archimoq"],
        ["гладить", "gladit", "dazmollamoq; silamoq"],
        ["вешать", "veshat", "ilmoq, osmoq"],
        ["складывать", "skladivat", "taxlamoq; qo‘shmoq"]
      ]
    },
    {
      theme: "Xarakter va sifatlar", icon: "✨", words: [
        ["халяльный", "xalyalniy", "halol (ovqat)"],
        ["электронный", "elektronniy", "elektron"],
        ["цифровой", "tsifravoy", "raqamli"],
        ["мобильный", "mabilniy", "mobil, ko‘chma"],
        ["безопасный", "bizapasniy", "xavfsiz"],
        ["надёжный", "nadyojniy", "ishonchli"],
        ["аккуратный", "akuratniy", "ozoda, puxta"],
        ["внимательный", "vnimatilniy", "e’tiborli, diqqatli"],
        ["заботливый", "zabotliviy", "g‘amxo‘r"],
        ["строгий", "strogiy", "qattiqqo‘l"],
        ["капризный", "kapriziniy", "injiq"],
        ["любопытный", "lyubapitniy", "qiziquvchan"],
        ["общительный", "apshitilniy", "dilkash, kirishimli"],
        ["застенчивый", "zastenchiviy", "tortinchoq"],
        ["упрямый", "upryamiy", "o‘jar"]
      ]
    },
    {
      theme: "Ravishlar", icon: "🔗", words: [
        ["онлайн", "anlayn", "onlayn, internet orqali"],
        ["заочно", "zaochna", "sirtdan, sirtqi"],
        ["наизусть", "naizust", "yoddan"],
        ["бесплатно", "bisplatna", "tekin, bepul"],
        ["срочно", "srochna", "shoshilinch, tezda"],
        ["лично", "lichna", "shaxsan"],
        ["вручную", "vruchnuyu", "qo‘lda"],
        ["наличными", "nalichnimi", "naqd pul bilan"],
        ["хорошенько", "xaroshenka", "yaxshilab, obdon"]
      ]
    }
  ]
});
