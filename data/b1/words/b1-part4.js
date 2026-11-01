/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 4: the next 200 words of the TORFL / ТРКИ-1 (B1) lexical minimum.
  None of them repeats a word from the A1, A2 or B1 lists.
*/
Ruscha.addWords({
  id: "b1-part4",
  title: "B1 so‘zlar — 4-qism",
  icon: "📙",
  note: "ТРКИ-1 (B1) so‘zlari, 4-qism: iqtisod, pul, hujjatlar, ta’mir, til va grammatika, xavfsizlik va B1 darajasidagi fe’l, sifat va bog‘lovchilar.",
  groups: [
    {
      theme: "Iqtisod va ishlab chiqarish", icon: "🏭", words: [
        ["бюджет", "byudjet", "byudjet"],
        ["инфляция", "inflyatsiya", "inflyatsiya, narxlar oshishi"],
        ["экспорт", "eksport", "eksport, chetga sotish"],
        ["импорт", "import", "import, chetdan olib kelish"],
        ["промышленность", "pramishlennast", "sanoat"],
        ["сельское хозяйство", "selskaye xazyaystva", "qishloq xo‘jaligi"],
        ["завод", "zavot", "zavod"],
        ["фабрика", "fabrika", "fabrika"],
        ["цех", "tsex", "sex (zavod bo‘limi)"],
        ["оборудование", "abarudavaniye", "uskunalar, jihozlar"],
        ["сырьё", "siryo", "xomashyo"],
        ["поставщик", "pastafshik", "yetkazib beruvchi"],
        ["конкуренция", "kankurentsiya", "raqobat"],
        ["экономия", "ekanomiya", "tejamkorlik"]
      ]
    },
    {
      theme: "Pul va bank", icon: "💰", words: [
        ["вклад", "fklat", "omonat (bankda)"],
        ["ипотека", "ipateka", "ipoteka"],
        ["заём", "zayom", "qarz (rasmiy)"],
        ["сбережения", "zbirijeniya", "jamg‘arma"],
        ["пособие", "pasobiye", "nafaqa; qo‘llanma"],
        ["доплата", "daplata", "qo‘shimcha to‘lov"],
        ["взнос", "vznos", "badal, to‘lov"],
        ["задолженность", "zadoljennast", "qarzdorlik"],
        ["обмен", "abmen", "almashtirish"],
        ["бухгалтерия", "buxgaltiriya", "buxgalteriya"]
      ]
    },
    {
      theme: "Hujjatlar", icon: "📄", words: [
        ["удостоверение", "udastavereniye", "guvohnoma"],
        ["свидетельство", "svidetilstva", "guvohnoma, sertifikat"],
        ["доверенность", "daverennast", "ishonchnoma"],
        ["вид на жительство", "vit na jitilstva", "yashash guvohnomasi"],
        ["РВП", "er-ve-pe", "vaqtincha yashash ruxsatnomasi"],
        ["миграционный учёт", "migratsionniy uchyot", "migratsiya hisobi"],
        ["продление", "pradleniye", "uzaytirish"],
        ["оригинал", "ariginal", "asl nusxa"],
        ["ксерокопия", "kserakopiya", "nusxa (kserokopiya)"],
        ["нотариус", "natarius", "notarius"]
      ]
    },
    {
      theme: "Uy va ta’mir", icon: "🔧", words: [
        ["ремонтировать", "rimantiravat", "ta’mirlamoq"],
        ["сантехника", "santexnika", "santexnika"],
        ["труба", "truba", "quvur"],
        ["протекать", "pratikat", "suv o‘tkazmoq, oqmoq"],
        ["засор", "zasor", "tiqilib qolish (quvurda)"],
        ["перегореть", "pirigaret", "kuyib qolmoq (lampochka)"],
        ["дрель", "drel", "drel, parma"],
        ["отвёртка", "atvyortka", "otvyortka, burama kalit"],
        ["лестничная площадка", "lesnichnaya plashatka", "zinapoya maydonchasi"],
        ["домофон", "damafon", "domofon"]
      ]
    },
    {
      theme: "Sog‘liq", icon: "🩺", words: [
        ["иммунитет", "imunitet", "immunitet"],
        ["организм", "arganizm", "organizm"],
        ["воспаление", "vaspaleniye", "yallig‘lanish"],
        ["сыпь", "sip", "toshma"],
        ["зуд", "zut", "qichishish"],
        ["отравление", "atravleniye", "zaharlanish"],
        ["обморок", "obmarak", "hushdan ketish"],
        ["инфаркт", "infarkt", "infarkt"],
        ["диабет", "diabet", "qandli diabet"],
        ["реанимация", "rianimatsiya", "reanimatsiya"]
      ]
    },
    {
      theme: "Avtomobil va yo‘l", icon: "🚙", words: [
        ["руль", "rul", "rul"],
        ["колесо", "kalyeso", "g‘ildirak"],
        ["бензин", "binzin", "benzin"],
        ["ремень безопасности", "remin bizapasnasti", "xavfsizlik kamari"],
        ["шлагбаум", "shlagbaum", "shlagbaum, to‘siq"],
        ["полоса", "palasa", "yo‘l bo‘lagi, polosa"],
        ["обгон", "abgon", "quvib o‘tish"],
        ["разворот", "razvarot", "ortga burilish"],
        ["эвакуатор", "evakuatar", "evakuator"],
        ["каршеринг", "karshering", "soatbay ijaraga mashina (karshering)"]
      ]
    },
    {
      theme: "Ovqat", icon: "🥕", words: [
        ["полуфабрикат", "palufabrikat", "yarim tayyor mahsulot"],
        ["консервы", "kanservi", "konserva"],
        ["свёкла", "svyokla", "lavlagi"],
        ["баклажан", "baklajan", "baqlajon"],
        ["тыква", "tikva", "qovoq"],
        ["кабачок", "kabachok", "qovoqcha (kabachok)"],
        ["абрикос", "abrikos", "o‘rik"],
        ["персик", "persik", "shaftoli"],
        ["кукуруза", "kukuruza", "makkajo‘xori"],
        ["фасоль", "fasol", "loviya"]
      ]
    },
    {
      theme: "Mato va kiyim", icon: "🧵", words: [
        ["ткань", "tkan", "mato"],
        ["шерсть", "sherst", "jun"],
        ["хлопок", "xlopak", "paxta"],
        ["шёлк", "shyolk", "ipak"],
        ["кожаный", "kojaniy", "charm, charmdan"],
        ["воротник", "varatnik", "yoqa"],
        ["рукав", "rukaf", "yeng"],
        ["синтетика", "sintetika", "sun’iy mato, sintetika"],
        ["лён", "lyon", "zig‘ir (mato)"]
      ]
    },
    {
      theme: "Odamlar va jamiyat", icon: "👥", words: [
        ["человечество", "chilavechistva", "insoniyat"],
        ["общение", "apsheniye", "muloqot"],
        ["лидер", "lider", "yetakchi, lider"],
        ["герой", "giroy", "qahramon"],
        ["волонтёр", "valantyor", "ko‘ngilli (volontyor)"],
        ["беженец", "bejinets", "qochqin"],
        ["эмигрант", "emigrant", "emigrant"],
        ["земляк", "zimlyak", "hamyurt"],
        ["соотечественник", "saatechistvennik", "vatandosh"],
        ["диаспора", "diaspara", "diaspora"],
        ["связи", "svyazi", "aloqalar, tanish-bilishlar"],
        ["репутация", "riputatsiya", "obro‘, nom"],
        ["конфликт", "kanflikt", "mojaro, nizo"],
        ["толпа", "talpa", "olomon"]
      ]
    },
    {
      theme: "Til va grammatika", icon: "🔤", words: [
        ["грамотный", "gramatniy", "savodli"],
        ["алфавит", "alfavit", "alifbo"],
        ["буква", "bukva", "harf"],
        ["звук", "zvuk", "tovush"],
        ["произношение", "praiznasheniye", "talaffuz"],
        ["падеж", "padesh", "kelishik"],
        ["глагол", "glagol", "fe’l"],
        ["существительное", "sushistvitilnaye", "ot (so‘z turkumi)"],
        ["прилагательное", "prilagatilnaye", "sifat (so‘z turkumi)"],
        ["текст", "tekst", "matn"]
      ]
    },
    {
      theme: "Dam olish va madaniyat", icon: "🎪", words: [
        ["поход", "paxot", "piyoda sayohat, poxod"],
        ["палатка", "palatka", "chodir"],
        ["рыбалка", "ribalka", "baliq ovi"],
        ["охота", "axota", "ov"],
        ["танец", "tanets", "raqs"],
        ["фестиваль", "fistival", "festival"],
        ["балет", "balet", "balet"],
        ["опера", "opira", "opera"],
        ["галерея", "galireya", "galereya"],
        ["мультфильм", "multfilm", "multfilm"]
      ]
    },
    {
      theme: "Tabiat hodisalari", icon: "🌈", words: [
        ["восход", "vasxot", "quyosh chiqishi"],
        ["закат", "zakat", "quyosh botishi"],
        ["радуга", "raduga", "kamalak"],
        ["молния", "molniya", "chaqmoq"],
        ["гром", "grom", "momaqaldiroq"],
        ["иней", "iney", "qirov"],
        ["сугроб", "sugrop", "qor uyumi"],
        ["лужа", "luja", "ko‘lmak"],
        ["ручей", "ruchey", "soy, jilg‘a"],
        ["вершина", "virshina", "cho‘qqi"]
      ]
    },
    {
      theme: "Xavfsizlik va hodisalar", icon: "🚒", words: [
        ["пожар", "pajar", "yong‘in"],
        ["пожарный", "pajarniy", "o‘t o‘chiruvchi"],
        ["спасатель", "spasatel", "qutqaruvchi"],
        ["огнетушитель", "agnitushitel", "o‘t o‘chirgich"],
        ["кража", "kraja", "o‘g‘irlik"],
        ["вор", "vor", "o‘g‘ri"],
        ["мошенник", "mashennik", "firibgar"],
        ["драка", "draka", "mushtlashuv"],
        ["происшествие", "praisshestviye", "hodisa, voqea"],
        ["грабёж", "grabyosh", "talonchilik"],
        ["угроза", "ugroza", "tahdid, xavf"]
      ]
    },
    {
      theme: "Fe’llar", icon: "🔄", words: [
        ["означать", "aznachat", "anglatmoq, bildirmoq"],
        ["называться", "nazivatsa", "atalmoq, deb nomlanmoq"],
        ["относиться", "atnasitsa", "munosabatda bo‘lmoq; tegishli bo‘lmoq"],
        ["принадлежать", "prinadlijat", "tegishli bo‘lmoq"],
        ["касаться", "kasatsa", "taalluqli bo‘lmoq; tegmoq"],
        ["включать", "fklyuchat", "yoqmoq; o‘z ichiga olmoq"],
        ["выключать", "viklyuchat", "o‘chirmoq"],
        ["подключать", "patklyuchat", "ulamoq"],
        ["проводить", "pravadit", "o‘tkazmoq (vaqt, tadbir)"],
        ["устраивать", "ustraivat", "uyushtirmoq; ma’qul kelmoq"],
        ["устраиваться", "ustraivatsa", "joylashmoq (ishga, uyga)"],
        ["получаться", "paluchatsa", "chiqmoq, bo‘lmoq (natija)"],
        ["удаваться", "udavatsa", "uddalamoq, muvaffaq bo‘lmoq"],
        ["пытаться", "pitatsa", "urinmoq"],
        ["стараться", "staratsa", "harakat qilmoq, tirishmoq"],
        ["бороться", "barotsa", "kurashmoq"],
        ["побеждать", "pabijdat", "g‘alaba qilmoq"],
        ["спасать", "spasat", "qutqarmoq"],
        ["рисковать", "riskavat", "tavakkal qilmoq"],
        ["беспокоиться", "bispakoitsa", "bezovta bo‘lmoq, xavotirlanmoq"],
        ["мириться", "miritsa", "yarashmoq"],
        ["знакомить", "znakomit", "tanishtirmoq"],
        ["провожать", "pravajat", "kuzatib qo‘ymoq"],
        ["навещать", "navishat", "ko‘rgani bormoq"],
        ["угощать", "ugashat", "mehmon qilmoq, siylamoq"],
        ["кормить", "karmit", "ovqatlantirmoq, boqmoq"],
        ["будить", "budit", "uyg‘otmoq"],
        ["краснеть", "krasnet", "qizarmoq"],
        ["взрослеть", "vzraslet", "ulg‘aymoq"],
        ["стареть", "staret", "qarimoq"],
        ["худеть", "xudet", "ozmoq"],
        ["толстеть", "talstet", "semirmoq"],
        ["сокращать", "sakrashat", "qisqartirmoq"],
        ["обменивать", "abmenivat", "almashtirmoq"]
      ]
    },
    {
      theme: "Sifatlar", icon: "✨", words: [
        ["бытовой", "bitavoy", "maishiy"],
        ["городской", "garatskoy", "shahar (sifat), shaharga oid"],
        ["сельский", "selskiy", "qishloq (sifat)"],
        ["местный", "mesniy", "mahalliy"],
        ["иностранный", "inastranniy", "xorijiy, chet el"],
        ["родной", "radnoy", "ona (tili, yurti); tug‘ishgan"],
        ["официальный", "afitsialniy", "rasmiy"],
        ["законный", "zakonniy", "qonuniy"],
        ["нелегальный", "nilegalniy", "noqonuniy"],
        ["обязательный", "abizatilniy", "majburiy"],
        ["дополнительный", "dapalnitilniy", "qo‘shimcha"],
        ["основной", "asnavnoy", "asosiy"],
        ["средний", "sredniy", "o‘rta, o‘rtacha"],
        ["настоящий", "nastayashiy", "haqiqiy; hozirgi"],
        ["семейный", "simeyniy", "oilaviy"],
        ["детский", "detskiy", "bolalar (sifat), bolalarga oid"],
        ["женский", "jenskiy", "ayollar (sifat), ayollarga oid"],
        ["мужской", "mushskoy", "erkaklar (sifat), erkaklarga oid"]
      ]
    },
    {
      theme: "Bog‘lovchi va kirish so‘zlar", icon: "🔗", words: [
        ["впрочем", "fprochim", "darvoqe, aslida"],
        ["тем не менее", "tem ne meniye", "shunga qaramay"],
        ["в то же время", "f to je vremya", "ayni paytda"],
        ["с одной стороны", "s adnoy staroni", "bir tomondan"],
        ["с другой стороны", "z drugoy staroni", "boshqa tomondan"],
        ["во-третьих", "va-tretyix", "uchinchidan"],
        ["итак", "itak", "xullas, demak"],
        ["так как", "tak kak", "chunki, ...gani uchun"],
        ["если бы", "yesli bi", "agar ...sa edi"],
        ["как только", "kak tolka", "...ishi bilanoq"]
      ]
    }
  ]
});
