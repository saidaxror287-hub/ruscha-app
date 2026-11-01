/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 6: the next 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2, B1 lists or from b2-part1 to b2-part5.
*/
Ruscha.addWords({
  id: "b2-part6",
  title: "B2 so‘zlar — 6-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: tayyor iboralar, jonli nutq, fikr bildirish, sifatlar, kiyim tanlash, tana va jarohatlar, pul, xarid va yetkazish, politsiya.",
  groups: [
    {
      theme: "Tayyor iboralar", icon: "🧩", words: [
        ["иметь в виду", "imet v vidu", "nazarda tutmoq"],
        ["обратить внимание", "abratit vnimaniye", "e’tibor bermoq"],
        ["принять решение", "prinyat risheniye", "qaror qabul qilmoq"],
        ["играть роль", "igrat rol", "rol o‘ynamoq, ahamiyatga ega bo‘lmoq"],
        ["иметь значение", "imet znacheniye", "ahamiyatga ega bo‘lmoq"],
        ["быть в курсе", "bit f kursi", "xabardor bo‘lmoq"],
        ["на всякий случай", "na fsyakiy sluchay", "har ehtimolga qarshi"],
        ["как назло", "kak nazlo", "xuddi ataylab qilgandek (omad kelmay)"],
        ["ни в коем случае", "ni f koyem sluchaye", "hech qachon, aslo"],
        ["так или иначе", "tak ili inache", "u yoki bu yo‘l bilan, baribir"],
        ["в первую очередь", "f pervuyu ochirit", "birinchi navbatda"],
        ["в последнее время", "f pasledniye vremya", "so‘nggi paytlarda"],
        ["на днях", "na dnyax", "yaqinda; shu kunlarda"],
        ["со временем", "sa vremenim", "vaqt o‘tib"]
      ]
    },
    {
      theme: "Jonli nutq", icon: "🗯️", words: [
        ["вроде бы", "vrodi bi", "shekilli, go‘yo"],
        ["как бы", "kak bi", "go‘yo, qandaydir (gapda to‘ldiruvchi)"],
        ["что ли", "shto li", "…mi yoki?, shekilli"],
        ["мало ли", "mala li", "kim biladi, nima bo‘lmaydi deysiz"],
        ["ещё бы", "ishyo bi", "bo‘lmasa-chi!, albatta"],
        ["ну и что", "nu i shto", "xo‘sh, nima bo‘pti?"],
        ["так и быть", "tak i bit", "mayli, ko‘ndim"],
        ["ничего страшного", "nichivo strashnava", "hech qisi yo‘q"],
        ["как ни странно", "kak ni stranna", "qizig‘i shundaki"],
        ["к несчастью", "k nishastyu", "baxtga qarshi"],
        ["по-видимому", "pa-vidimamu", "aftidan"]
      ]
    },
    {
      theme: "Bog‘lovchi iboralar", icon: "🔗", words: [
        ["в том числе", "f tom chisle", "shu jumladan"],
        ["в зависимости от", "v zavisimasti at", "…ga qarab, …ga bog‘liq holda"],
        ["по мере", "pa mere", "…gan sari"],
        ["в случае", "f sluchaye", "…gan taqdirda"],
        ["в качестве", "f kachistve", "…sifatida"],
        ["за счёт", "za shot", "…hisobidan"],
        ["с целью", "s tselyu", "…maqsadida"],
        ["с помощью", "s pomashyu", "…yordamida"],
        ["при условии", "pri uslovii", "…sharti bilan"]
      ]
    },
    {
      theme: "Fikr bildirish", icon: "🗣️", words: [
        ["высказаться", "viskazatsa", "fikrini aytmoq"],
        ["высказывание", "viskazivaniye", "fikr, gap, ibora"],
        ["выразить", "virazit", "ifodalamoq, bildirmoq"],
        ["сформулировать", "sfarmuliravat", "ifodalab bermoq, shakllantirmoq"],
        ["пояснить", "payasnit", "tushuntirib bermoq"],
        ["уточнение", "utachneniye", "aniqlik kiritish"],
        ["перечислить", "pirichislit", "sanab o‘tmoq"],
        ["пересказать", "piriskazat", "qayta hikoya qilmoq"],
        ["изложить", "izlajit", "bayon qilmoq"],
        ["переубедить", "piriubidit", "fikridan qaytarmoq, boshqacha ishontirmoq"]
      ]
    },
    {
      theme: "Aniq yoki taxminiy?", icon: "🎯", words: [
        ["вероятный", "viraytniy", "ehtimol tutilgan"],
        ["маловероятный", "malaviraytniy", "ehtimoldan yiroq"],
        ["реальный", "rialniy", "real, haqiqiy"],
        ["нереальный", "nirialniy", "imkonsiz, aql bovar qilmas"],
        ["конкретный", "kankretniy", "aniq, muayyan"],
        ["определённый", "apridilyonniy", "ma’lum, aniq"],
        ["неопределённый", "niapridilyonniy", "noaniq"],
        ["приблизительный", "priblizitilniy", "taxminiy"],
        ["примерный", "primerniy", "taxminiy; namunali"],
        ["единственный", "yidinstvenniy", "yagona"],
        ["отдельный", "atdelniy", "alohida"],
        ["частичный", "chastichniy", "qisman"],
        ["подлинный", "podlinniy", "asl, haqiqiy"],
        ["поддельный", "paddelniy", "qalbaki"],
        ["фальшивый", "falshiviy", "soxta"]
      ]
    },
    {
      theme: "Muhimmi?", icon: "❗", words: [
        ["достаточный", "dastatachniy", "yetarli"],
        ["недостаточный", "nidastatachniy", "yetarli emas"],
        ["существенный", "sushestvenniy", "muhim, jiddiy"],
        ["значительный", "znachitilniy", "sezilarli, katta"],
        ["незначительный", "niznachitilniy", "arzimas, kichik"],
        ["второстепенный", "ftarastepenniy", "ikkinchi darajali"],
        ["важнейший", "vajneyshiy", "eng muhim"]
      ]
    },
    {
      theme: "Shakl va material", icon: "🧱", words: [
        ["громадный", "gramadniy", "ulkan"],
        ["крошечный", "kroshichniy", "jajji, juda kichkina"],
        ["крупный", "krupniy", "yirik"],
        ["плоский", "ploskiy", "yassi"],
        ["гладкий", "glatkiy", "silliq"],
        ["шершавый", "shirshaviy", "g‘adir-budir"],
        ["жёсткий", "joskiy", "qattiq, dag‘al"],
        ["гибкий", "gipkiy", "egiluvchan"],
        ["хрупкий", "xrupkiy", "mo‘rt, nozik"],
        ["прочный", "prochniy", "pishiq, mustahkam"],
        ["прозрачный", "prazrachniy", "shaffof"],
        ["блестящий", "blistyashiy", "yaltiroq; ajoyib"],
        ["бледный", "bledniy", "rangpar, oqargan"]
      ]
    },
    {
      theme: "Kiyim tanlash", icon: "👗", words: [
        ["примерить", "primerit", "kiyib ko‘rmoq"],
        ["подойти по размеру", "padaiti pa razmeru", "o‘lchami to‘g‘ri kelmoq"],
        ["жать", "jat", "siqmoq (tor kiyim, poyabzal)"],
        ["велик", "vilik", "katta (kiyim katta keldi)"],
        ["мал", "mal", "kichik (kiyim kichik keldi)"],
        ["широковат", "shirakavat", "biroz keng"],
        ["тесноват", "tisnavat", "biroz tor"],
        ["пёстрый", "pyostriy", "ola-bula, rang-barang"],
        ["однотонный", "adnatonniy", "bir rangli"],
        ["полосатый", "palasatiy", "yo‘l-yo‘l"],
        ["клетчатый", "kletchatiy", "katak-katak"],
        ["в горошек", "v garoshik", "nuqtali (no‘xatdek)"],
        ["обменять", "abminyat", "almashtirmoq"],
        ["вернуть деньги", "virnut dengi", "pulni qaytarmoq"],
        ["кассовый чек", "kassaviy chek", "kassa cheki"]
      ]
    },
    {
      theme: "Ta’mirlash", icon: "🔧", words: [
        ["отремонтировать", "atrimantiravat", "ta’mirlamoq"],
        ["подключить", "patklyuchit", "ulamoq"],
        ["отключить", "atklyuchit", "o‘chirmoq, uzmoq"],
        ["засориться", "zasaritsa", "tiqilib qolmoq (quvur)"],
        ["прорвать", "prarvat", "yormoq; quvur yorilmoq"],
        ["выключатель", "viklyuchatil", "o‘chirgich"],
        ["слесарь", "slesar", "chilangar"],
        ["вызвать мастера", "vizvat mastira", "ustani chaqirmoq"]
      ]
    },
    {
      theme: "Tana a’zolari", icon: "🦴", words: [
        ["затылок", "zatilak", "ensa"],
        ["висок", "visok", "chakka"],
        ["подбородок", "padbarodak", "iyak"],
        ["кулак", "kulak", "musht"],
        ["запястье", "zapyastye", "bilak (kaft ustidagi)"],
        ["ноготь", "nogat", "tirnoq"],
        ["поясница", "payasnitsa", "bel"],
        ["позвоночник", "pazvanochnik", "umurtqa pog‘onasi"],
        ["бедро", "bidro", "son"],
        ["лодыжка", "ladishka", "to‘piq"],
        ["пятка", "pyatka", "tovon"],
        ["сустав", "sustaf", "bo‘g‘im"],
        ["почки", "pochki", "buyraklar"]
      ]
    },
    {
      theme: "Jarohat va birinchi yordam", icon: "🩹", words: [
        ["обжечься", "abjechsa", "kuyib qolmoq"],
        ["порезаться", "parezatsa", "kesib olmoq (qo‘lni)"],
        ["ушибиться", "ushibitsa", "urilib olmoq"],
        ["пораниться", "paranitsa", "jarohatlanmoq"],
        ["подвернуть ногу", "padvirnut nogu", "oyog‘ini qayirib olmoq"],
        ["вывихнуть", "vivixnut", "chiqarib olmoq (bo‘g‘imni)"],
        ["растянуть", "rastinut", "cho‘zib olmoq (payni)"],
        ["наложить швы", "nalajit shvi", "chok solmoq"],
        ["повязка", "pavyaska", "bog‘ich, bint"],
        ["гипс", "gips", "gips"],
        ["костыли", "kastili", "qo‘ltiqtayoq"],
        ["капельница", "kapilnitsa", "tomchi dori (kapelnitsa)"],
        ["аптечка", "aptechka", "dori qutisi"],
        ["жаропонижающее", "jarapanijayushiye", "isitma tushiruvchi dori"],
        ["доза", "doza", "doza, miqdor"]
      ]
    },
    {
      theme: "Yuqumli kasallik", icon: "😷", words: [
        ["заразиться", "zarazitsa", "yuqtirib olmoq"],
        ["заразный", "zarazniy", "yuqumli"],
        ["передаваться", "piridavatsa", "yuqmoq, o‘tmoq"],
        ["карантин", "karantin", "karantin"],
        ["маска", "maska", "niqob"],
        ["приступ", "pristup", "xuruj"],
        ["обострение", "abastreniye", "kuchayishi (kasallikning)"],
        ["осложнение", "aslajneniye", "asorat"],
        ["судорога", "sudaraga", "talvasa, tirishish"],
        ["сердцебиение", "sirtsabiyeniye", "yurak urishi"]
      ]
    },
    {
      theme: "Tejash va sarflash", icon: "🪙", words: [
        ["экономный", "ekanomniy", "tejamkor"],
        ["бережливый", "birijliviy", "tejamkor, ehtiyotkor"],
        ["расточительный", "rastachitilniy", "isrofgar"],
        ["транжира", "tranjira", "pulni sovuruvchi, isrofgar"],
        ["скупой", "skupoy", "xasis"],
        ["мелочиться", "milachitsa", "mayda narsaga qarab o‘tirmoq"],
        ["раскошелиться", "raskashelitsa", "pul chiqarmoq (istamay)"],
        ["переплатить", "piriplatit", "ortiqcha to‘lab qo‘ymoq"],
        ["недоплатить", "nidaplatit", "kam to‘lamoq"],
        ["округлить", "akruglit", "yaxlitlamoq"],
        ["влезть в долги", "vlest v dalgi", "qarzga botmoq"],
        ["вернуть долг", "virnut dolk", "qarzni qaytarmoq"]
      ]
    },
    {
      theme: "Bank va to‘lovlar", icon: "🏦", words: [
        ["предоплата", "pridaplata", "oldindan to‘lov"],
        ["задаток", "zadatak", "oldindan beriladigan pul (zakalat)"],
        ["депозит", "dipazit", "omonat, depozit"],
        ["процентная ставка", "pratsentnaya stafka", "foiz stavkasi"],
        ["выписка по счёту", "vipiska pa shotu", "hisob ko‘chirmasi"],
        ["зарплатная карта", "zarplatnaya karta", "ish haqi kartasi"],
        ["страховой полис", "straxavoy polis", "sug‘urta polisi"],
        ["застраховать", "zastraxavat", "sug‘urta qilmoq"],
        ["платёжка", "platyoshka", "to‘lov varaqasi"],
        ["компенсировать", "kampinsiravat", "qoplamoq"]
      ]
    },
    {
      theme: "Xarid va yetkazish", icon: "📦", words: [
        ["касса самообслуживания", "kassa samaapslujivaniya", "o‘z-o‘ziga xizmat kassasi"],
        ["консультант", "kansultant", "maslahatchi (do‘konda)"],
        ["по акции", "pa aktsii", "aksiya bo‘yicha (arzonroq)"],
        ["наличие", "nalichiye", "mavjudlik"],
        ["нет в наличии", "net v nalichii", "hozir yo‘q (sotuvda)"],
        ["под заказ", "pad zakas", "buyurtma bilan"],
        ["самовывоз", "samavivos", "o‘zi olib ketish"],
        ["трек-номер", "trek-nomir", "trek raqam (posilka kuzatuvi)"],
        ["отследить", "atslidit", "kuzatmoq (posilkani)"],
        ["распаковать", "raspakavat", "ochmoq (qadoqni)"],
        ["поставка", "pastafka", "yetkazib berish (tovar)"],
        ["повредить", "pavridit", "shikastlamoq"],
        ["повреждение", "pavrijdeniye", "shikast"],
        ["бракованный товар", "brakovanniy tavar", "nuqsonli tovar"]
      ]
    },
    {
      theme: "Politsiya va sud", icon: "👮", words: [
        ["участковый", "uchastkoviy", "uchastka nozimi"],
        ["дежурный", "dijurniy", "navbatchi"],
        ["подозреваемый", "padazrivayemiy", "gumondor"],
        ["обвинять", "abvinyat", "ayblamoq"],
        ["обвинение", "abvineniye", "ayblov"],
        ["обвиняемый", "abvinyayemiy", "ayblanuvchi"],
        ["показания", "pakazaniya", "ko‘rsatma (sudda)"],
        ["улика", "ulika", "dalil (jinoyatga)"],
        ["протокол", "pratakol", "bayonnoma"],
        ["иск", "isk", "da’vo (sudga)"],
        ["оправдать", "apravdat", "oqlamoq"],
        ["освободить", "asvabadit", "ozod qilmoq; bo‘shatmoq"]
      ]
    },
    {
      theme: "O‘g‘rilik va yo‘qotish", icon: "🕵️", words: [
        ["кража со взломом", "kraja sa vzlomam", "buzib kirib o‘g‘irlash"],
        ["угон", "ugon", "olib qochish (mashinani)"],
        ["угнать", "ugnat", "olib qochmoq (mashinani)"],
        ["грабитель", "grabitil", "talonchi"],
        ["карманник", "karmannik", "kissavur"],
        ["обокрасть", "abakrast", "o‘g‘irlab ketmoq (birovni)"],
        ["пропажа", "prapaja", "yo‘qolgan narsa"],
        ["пропасть", "prapast", "yo‘qolmoq, g‘oyib bo‘lmoq"],
        ["розыск", "rozisk", "qidiruv"],
        ["найтись", "naytis", "topilmoq"],
        ["находка", "naxotka", "topilma"],
        ["бюро находок", "byuro naxodak", "topilmalar byurosi"]
      ]
    }
  ]
});
