/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 1: words of the TORFL / ТРКИ A2 (basic) lexical minimum that are not in A1, grouped by theme.
*/
Ruscha.addWords({
  id: "a2-part1",
  title: "A2 so‘zlar — 1-qism",
  icon: "📘",
  note: "ТРКИ A2 (bazaviy daraja) leksik minimumidan yangi so‘zlar (A1 dagilar takrorlanmagan), mavzular bo‘yicha.",
  groups: [
    {
      theme: "Ish va kasb", icon: "💼", words: [
        ["компания", "kampaniya", "kompaniya, firma"],
        ["специальность", "spitsialnast", "mutaxassislik"],
        ["сотрудник", "satrudnik", "xodim"],
        ["клиент", "kliyent", "mijoz"],
        ["собрание", "sabraniye", "yig‘ilish, majlis"],
        ["резюме", "rezyume", "rezyume (ish uchun ma’lumot)"],
        ["вакансия", "vakansiya", "bo‘sh ish o‘rni"],
        ["отдел", "atdel", "bo‘lim"],
        ["бухгалтер", "buxgalter", "buxgalter, hisobchi"],
        ["менеджер", "menedjer", "menejer"],
        ["секретарь", "sikritar", "kotib, kotiba"],
        ["пенсия", "pensiya", "pensiya"],
        ["смена", "smena", "smena, ish navbati"],
        ["зарабатывать", "zarabativat", "pul topmoq, ishlab topmoq"],
        ["выходной", "vixadnoy", "dam olish kuni"]
      ]
    },
    {
      theme: "Uy-joy", icon: "🏠", words: [
        ["жильё", "jilyo", "turar joy, uy-joy"],
        ["хозяин", "xazyain", "uy egasi"],
        ["аренда", "arenda", "ijara"],
        ["ремонт", "rimont", "ta’mir, remont"],
        ["мебель", "mebel", "mebel, jihoz"],
        ["кресло", "kresla", "kreslo"],
        ["ковёр", "kavyor", "gilam"],
        ["кран", "kran", "jo‘mrak, kran"],
        ["электричество", "elektrichestva", "elektr, tok"],
        ["газ", "gas", "gaz"],
        ["подъезд", "padyest", "podyezd, kirish yo‘lagi"],
        ["двор", "dvor", "hovli"],
        ["коридор", "karidor", "koridor, dahliz"],
        ["сломаться", "slamatsa", "buzilmoq, sinmoq"],
        ["чинить", "chinit", "tuzatmoq, ta’mirlamoq"]
      ]
    },
    {
      theme: "Sog‘liq", icon: "🩺", words: [
        ["здоровье", "zdarovye", "sog‘liq"],
        ["болезнь", "balezn", "kasallik"],
        ["грипп", "grip", "gripp"],
        ["насморк", "nasmark", "tumov"],
        ["лечить", "lichit", "davolamoq"],
        ["лечиться", "lichitsa", "davolanmoq"],
        ["анализ", "analis", "tahlil (qon tahlili va h.k.)"],
        ["стоматолог", "stamatolak", "tish shifokori"],
        ["больничный", "balnichniy", "kasallik varaqasi"],
        ["витамины", "vitamini", "vitaminlar"],
        ["полис", "polis", "sug‘urta polisi"],
        ["чувствовать себя", "chustvavat sibya", "o‘zini his qilmoq"]
      ]
    },
    {
      theme: "Sayohat", icon: "🧳", words: [
        ["путешествовать", "putishestvavat", "sayohat qilmoq"],
        ["турист", "turist", "sayyoh"],
        ["экскурсия", "ekskursiya", "ekskursiya"],
        ["гид", "git", "gid, yo‘lboshchi"],
        ["бронировать", "braniravat", "bron qilmoq, oldindan band qilmoq"],
        ["чемодан", "chimadan", "chamadon"],
        ["рюкзак", "ryukzak", "ryukzak, orqa sumka"],
        ["рейс", "reys", "reys"],
        ["посадка", "pasatka", "samolyotga chiqish, posadka"],
        ["пересадка", "pirisatka", "boshqa reysga (poyezdga) o‘tish"],
        ["граница", "granitsa", "chegara"],
        ["сувенир", "suvinir", "esdalik sovg‘a"],
        ["памятник", "pamitnik", "haykal, yodgorlik"],
        ["пляж", "plyash", "plyaj, sohil"],
        ["отель", "atel", "mehmonxona (otel)"],
        ["загранпаспорт", "zagranpaspart", "xorijga chiqish pasporti"]
      ]
    },
    {
      theme: "Bo‘sh vaqt", icon: "🎭", words: [
        ["хобби", "xobi", "xobbi, sevimli mashg‘ulot"],
        ["концерт", "kantsert", "konsert"],
        ["выставка", "vistafka", "ko‘rgazma"],
        ["вечеринка", "vichirinka", "kecha, ziyofat"],
        ["приглашать", "priglashat", "taklif qilmoq"],
        ["приглашение", "priglasheniye", "taklif, taklifnoma"],
        ["встреча", "fstrecha", "uchrashuv"],
        ["знакомый", "znakomiy", "tanish (odam)"],
        ["рисовать", "risavat", "rasm chizmoq"],
        ["танцевать", "tantsivat", "raqsga tushmoq"],
        ["фотографировать", "fatagrafiravat", "suratga olmoq"],
        ["плавать", "plavat", "suzmoq"],
        ["бассейн", "basseyn", "basseyn, hovuz"],
        ["спортзал", "spartzal", "sport zali"],
        ["шахматы", "shaxmati", "shaxmat"],
        ["игра", "igra", "o‘yin"],
        ["кататься", "katatsa", "uchmoq, sayr qilmoq (velosipedda, konkida)"],
        ["отмечать", "atmichat", "nishonlamoq"],
        ["скучать", "skuchat", "sog‘inmoq; zerikmoq"]
      ]
    },
    {
      theme: "Telefon va aloqa", icon: "📞", words: [
        ["мобильный телефон", "mabilniy tilifon", "mobil telefon"],
        ["позвонить", "pazvanit", "qo‘ng‘iroq qilmoq (bir marta)"],
        ["перезвонить", "pirizvanit", "qayta qo‘ng‘iroq qilmoq"],
        ["занято", "zanyata", "band"],
        ["зарядка", "zaryatka", "zaryadlovchi qurilma"],
        ["батарейка", "bataryeyka", "batareya"],
        ["приложение", "prilajeniye", "ilova (dastur)"],
        ["пароль", "parol", "parol"],
        ["электронная почта", "elektronnaya pochta", "elektron pochta"],
        ["сайт", "sayt", "sayt"],
        ["ссылка", "silka", "havola"],
        ["видеозвонок", "videazvanok", "video qo‘ng‘iroq"],
        ["набирать", "nabirat", "(raqam) termoq"],
        ["отправить", "atpravit", "jo‘natmoq (bir marta)"],
        ["слышно", "slishna", "eshitilyapti"],
        ["сим-карта", "sim-karta", "SIM-karta"],
        ["экран", "ekran", "ekran"]
      ]
    },
    {
      theme: "Shahar va xizmatlar", icon: "🏙️", words: [
        ["очередь", "ochirit", "navbat"],
        ["окошко", "akoshka", "darcha (kassa darchasi)"],
        ["бланк", "blank", "blanka"],
        ["услуга", "usluga", "xizmat"],
        ["транспорт", "transpart", "transport"],
        ["проезд", "prayest", "yo‘l haqi"],
        ["проездной", "prayiznoy", "yo‘l kartasi (proyezdnoy)"],
        ["штраф", "shtraf", "jarima"],
        ["парковка", "parkofka", "avtoturargoh"],
        ["пешком", "pishkom", "piyoda"],
        ["остановиться", "astanavitsa", "to‘xtamoq"],
        ["пробка", "propka", "tirbandlik"],
        ["заправка", "zapravka", "yoqilg‘i quyish shoxobchasi"]
      ]
    },
    {
      theme: "Muhim fe’llar", icon: "🔄", words: [
        ["успевать", "uspivat", "ulgurmoq"],
        ["собираться", "sabiratsa", "otlanmoq; niyat qilmoq"],
        ["предлагать", "pridlagat", "taklif qilmoq"],
        ["обещать", "abishat", "va’da bermoq"],
        ["советовать", "savetavat", "maslahat bermoq"],
        ["разрешать", "razrishat", "ruxsat bermoq"],
        ["надеяться", "nadeyatsa", "umid qilmoq"],
        ["бояться", "bayatsa", "qo‘rqmoq"],
        ["мечтать", "michtat", "orzu qilmoq"],
        ["соглашаться", "saglashatsa", "rozi bo‘lmoq"],
        ["волноваться", "valnavatsa", "xavotirlanmoq, hayajonlanmoq"],
        ["торопиться", "tarapitsa", "shoshilmoq"],
        ["поздравлять", "pazdravlyat", "tabriklamoq"],
        ["извиняться", "izvinyatsa", "uzr so‘ramoq"],
        ["договариваться", "dagavarivatsa", "kelishmoq"]
      ]
    },
    {
      theme: "Sifatlar va ravishlar", icon: "✨", words: [
        ["вежливый", "vejliviy", "xushmuomala"],
        ["серьёзный", "siryozniy", "jiddiy"],
        ["спокойный", "spakoyniy", "tinch, xotirjam"],
        ["известный", "izvesniy", "mashhur"],
        ["обычный", "abichniy", "oddiy, odatdagi"],
        ["главный", "glavniy", "asosiy, bosh"],
        ["бесплатный", "bisplatniy", "bepul"],
        ["платный", "platniy", "pullik"],
        ["шумный", "shumniy", "shovqinli"],
        ["уютный", "uyutniy", "shinam"],
        ["недавно", "nidavna", "yaqinda (o‘tgan zamonda)"],
        ["обычно", "abichna", "odatda"],
        ["вдруг", "vdruk", "birdan"],
        ["по-моему", "pa-moyimu", "menimcha"]
      ]
    },
    {
      theme: "Fikr va tuyg‘ular", icon: "💭", words: [
        ["мнение", "mneniye", "fikr"],
        ["настроение", "nastrayeniye", "kayfiyat"],
        ["радость", "radast", "quvonch"],
        ["уверен", "uveren", "ishonchim komil (ayol aytsa: «уверена»)"],
        ["рад", "rat", "xursandman (ayol aytsa: «рада»)"],
        ["жаль", "jal", "afsus, achinarli"],
        ["к сожалению", "k sajaleniyu", "afsuski"],
        ["кажется", "kajitsa", "shekilli, menimcha"],
        ["совет", "savet", "maslahat"],
        ["результат", "rizultat", "natija"],
        ["решение", "risheniye", "qaror; yechim"],
        ["случай", "sluchay", "hodisa; holat"],
        ["разговор", "razgavor", "suhbat"]
      ]
    }
  ]
});
