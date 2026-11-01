/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 2: the next 200 words of the TORFL / ТРКИ-1 (B1) lexical minimum.
  None of them repeats a word from the A1, A2 or B1 lists.
*/
Ruscha.addWords({
  id: "b1-part2",
  title: "B1 so‘zlar — 2-qism",
  icon: "📙",
  note: "ТРКИ-1 (B1) so‘zlari, 2-qism: ish va iqtisod, ta’lim, jamiyat, tabiat, munosabatlar va B1 darajasidagi fe’l va sifatlar.",
  groups: [
    {
      theme: "Ish va iqtisod", icon: "💼", words: [
        ["организация", "arganizatsiya", "tashkilot"],
        ["руководитель", "rukavaditel", "rahbar"],
        ["подчинённый", "padchinyonniy", "qo‘l ostidagi xodim"],
        ["сотрудничество", "satrudnichistva", "hamkorlik"],
        ["производство", "praizvotstva", "ishlab chiqarish"],
        ["продукция", "praduktsiya", "mahsulot(lar)"],
        ["доход", "daxot", "daromad"],
        ["расход", "rasxot", "xarajat, sarf"],
        ["прибыль", "pribil", "foyda"],
        ["предприниматель", "pridprinimatel", "tadbirkor"],
        ["стаж", "stash", "ish staji"],
        ["увольнение", "uvalneniye", "ishdan bo‘shatish"],
        ["безработица", "bizrabotitsa", "ishsizlik"],
        ["безработный", "bizrabotniy", "ishsiz"],
        ["профсоюз", "prafsayus", "kasaba uyushmasi"],
        ["командировка", "kamandirofka", "xizmat safari"],
        ["совещание", "savishaniye", "yig‘ilish, kengash"],
        ["отчёт", "atchyot", "hisobot"]
      ]
    },
    {
      theme: "Uy va qurilish", icon: "🏠", words: [
        ["жилец", "jilets", "uyda yashovchi, ijarachi"],
        ["квартплата", "kvartplata", "kvartira haqi"],
        ["коммунальные услуги", "kamunalniye uslugi", "kommunal xizmatlar"],
        ["счётчик", "shyotchik", "hisoblagich (suv, gaz, tok)"],
        ["проводка", "pravotka", "elektr simlari"],
        ["обои", "aboi", "gulqog‘oz (oboy)"],
        ["краска", "kraska", "bo‘yoq"],
        ["плитка", "plitka", "kafel, plitka"],
        ["кирпич", "kirpich", "g‘isht"],
        ["забор", "zabor", "devor, to‘siq"],
        ["подвал", "padval", "yerto‘la"],
        ["чердак", "chirdak", "chordoq"]
      ]
    },
    {
      theme: "Sog‘liq va tibbiyot", icon: "🩺", words: [
        ["терапевт", "tirapeft", "terapevt (umumiy shifokor)"],
        ["педиатр", "pidiatr", "bolalar shifokori"],
        ["медицина", "miditsina", "tibbiyot"],
        ["лечение", "lichyeniye", "davolash"],
        ["операция", "apiratsiya", "operatsiya, jarrohlik"],
        ["травма", "travma", "jarohat, shikast"],
        ["перелом", "pirilom", "suyak sinishi"],
        ["инфекция", "infektsiya", "infeksiya, yuqumli kasallik"],
        ["прививка", "privifka", "emlash"],
        ["пациент", "patsiyent", "bemor"],
        ["тошнота", "tashnata", "ko‘ngil aynishi"],
        ["головокружение", "galavakrujeniye", "bosh aylanishi"],
        ["бессонница", "bissonnitsa", "uyqusizlik"],
        ["беременность", "biremennast", "homiladorlik"]
      ]
    },
    {
      theme: "Shahar va transport", icon: "🚗", words: [
        ["водительские права", "vaditilskiye prava", "haydovchilik guvohnomasi"],
        ["автомобиль", "aftamabil", "avtomobil"],
        ["шоссе", "shasse", "shosse, katta yo‘l"],
        ["грузовик", "gruzavik", "yuk mashinasi"],
        ["мотоцикл", "matatsikl", "mototsikl"],
        ["скорость", "skorast", "tezlik"],
        ["ДТП", "de-te-pe", "yo‘l-transport hodisasi"],
        ["стоянка", "stayanka", "mashina to‘xtash joyi"],
        ["гараж", "garash", "garaj"],
        ["маршрут", "marshrut", "yo‘nalish, marshrut"],
        ["окрестности", "akresnasti", "atrof, tevarak"],
        ["квартал", "kvartal", "kvartal, mavze"]
      ]
    },
    {
      theme: "Xarid va xizmatlar", icon: "🛍️", words: [
        ["ассортимент", "assartiment", "tovarlar turi, assortiment"],
        ["выбор", "vibar", "tanlov, tanlash"],
        ["продажа", "pradaja", "sotuv"],
        ["стоимость", "stoimast", "qiymat, narx"],
        ["оплата", "aplata", "to‘lov"],
        ["рассрочка", "rassrochka", "bo‘lib to‘lash"],
        ["ценник", "tsennik", "narx yorlig‘i"],
        ["ярмарка", "yarmarka", "yarmarka"],
        ["прачечная", "prachichnaya", "kir yuvish xizmati"],
        ["бытовая техника", "bitavaya texnika", "maishiy texnika"]
      ]
    },
    {
      theme: "Ovqatlanish", icon: "🍲", words: [
        ["питание", "pitaniye", "ovqatlanish"],
        ["диета", "diyeta", "parhez"],
        ["вегетарианец", "vigitarianets", "vegetarian"],
        ["порция", "portsiya", "porsiya"],
        ["закуска", "zakuska", "gazak, sovuq taom"],
        ["десерт", "disert", "desert, shirinlik"],
        ["кулинария", "kulinariya", "pazandachilik; tayyor ovqat do‘koni"]
      ]
    },
    {
      theme: "Odamlar va munosabatlar", icon: "🤝", words: [
        ["личность", "lichnast", "shaxs"],
        ["поколение", "pakaleniye", "avlod"],
        ["супруг", "suprug", "turmush o‘rtog‘i (er)"],
        ["супруга", "supruga", "turmush o‘rtog‘i (xotin)"],
        ["брак", "brak", "nikoh"],
        ["развод", "razvot", "ajralish"],
        ["сирота", "sirata", "yetim"],
        ["дружба", "drujba", "do‘stlik"],
        ["любовь", "lyubof", "muhabbat, sevgi"],
        ["уважение", "uvajeniye", "hurmat"],
        ["доверие", "daveriye", "ishonch"],
        ["ссора", "ssora", "janjal, urishish"],
        ["поддержка", "paddershka", "qo‘llab-quvvatlash"],
        ["забота", "zabota", "g‘amxo‘rlik"],
        ["внимание", "vnimaniye", "e’tibor, diqqat"]
      ]
    },
    {
      theme: "Ta’lim va fan", icon: "🎓", words: [
        ["образование", "abrazavaniye", "ta’lim, ma’lumot"],
        ["обучение", "abucheniye", "o‘qitish, o‘qish"],
        ["школьник", "shkolnik", "maktab o‘quvchisi"],
        ["выпускник", "vipusknik", "bitiruvchi"],
        ["абитуриент", "abituriyent", "abituriyent"],
        ["факультет", "fakultet", "fakultet"],
        ["кафедра", "kafidra", "kafedra"],
        ["стипендия", "stipendiya", "stipendiya"],
        ["семестр", "simestr", "semestr"],
        ["сессия", "sessiya", "imtihonlar mavsumi, sessiya"],
        ["зачёт", "zachyot", "sinov (zachyot)"],
        ["предмет", "pridmet", "fan; buyum"],
        ["наука", "nauka", "fan, ilm"],
        ["учёный", "uchyoniy", "olim"],
        ["исследование", "isledavaniye", "tadqiqot"],
        ["знание", "znaniye", "bilim"]
      ]
    },
    {
      theme: "Madaniyat va OAV", icon: "🎭", words: [
        ["искусство", "iskusstva", "san’at"],
        ["литература", "litiratura", "adabiyot"],
        ["роман", "raman", "roman"],
        ["стихи", "stixi", "she’rlar"],
        ["режиссёр", "rijissyor", "rejissyor"],
        ["сцена", "stsena", "sahna"],
        ["роль", "rol", "rol"],
        ["журналист", "jurnalist", "jurnalist"],
        ["статья", "statya", "maqola"],
        ["интервью", "intervyu", "intervyu, suhbat"],
        ["телевидение", "tilividiniye", "televideniye"],
        ["СМИ", "smi", "ommaviy axborot vositalari"]
      ]
    },
    {
      theme: "Tabiat va ekologiya", icon: "🌍", words: [
        ["окружающая среда", "akrujayushaya srida", "atrof-muhit"],
        ["экология", "ekalogiya", "ekologiya"],
        ["загрязнение", "zagryazneniye", "ifloslanish"],
        ["воздух", "vozdux", "havo"],
        ["океан", "akean", "okean"],
        ["волна", "valna", "to‘lqin"],
        ["песок", "pisok", "qum"],
        ["камень", "kamin", "tosh"],
        ["долина", "dalina", "vodiy"],
        ["степь", "step", "dasht"],
        ["растение", "rasteniye", "o‘simlik"],
        ["насекомое", "nasikomaye", "hasharot"],
        ["землетрясение", "zimlitrisyeniye", "zilzila"],
        ["наводнение", "navadneniye", "suv toshqini"]
      ]
    },
    {
      theme: "Jamiyat va huquq", icon: "⚖️", words: [
        ["власть", "vlast", "hokimiyat"],
        ["депутат", "diputat", "deputat"],
        ["министр", "ministr", "vazir"],
        ["министерство", "ministerstva", "vazirlik"],
        ["конституция", "kanstitutsiya", "konstitutsiya"],
        ["преступление", "pristupleniye", "jinoyat"],
        ["преступник", "pristupnik", "jinoyatchi"],
        ["свидетель", "svidetel", "guvoh"],
        ["адвокат", "advakat", "advokat"],
        ["наказание", "nakazaniye", "jazo"],
        ["нарушение", "narusheniye", "qoidabuzarlik"],
        ["безопасность", "bizapasnast", "xavfsizlik"],
        ["свобода", "svaboda", "erkinlik, ozodlik"],
        ["благотворительность", "blagatvaritilnast", "xayriya"]
      ]
    },
    {
      theme: "Fe’llar", icon: "🔄", words: [
        ["развиваться", "razvivatsa", "rivojlanmoq"],
        ["увеличиваться", "uvilichivatsa", "ko‘paymoq, oshmoq"],
        ["уменьшаться", "umenshatsa", "kamaymoq"],
        ["улучшать", "uluchshat", "yaxshilamoq"],
        ["ухудшаться", "uxutshatsa", "yomonlashmoq"],
        ["создавать", "sazdavat", "yaratmoq"],
        ["сохранять", "saxranyat", "saqlamoq"],
        ["защищать", "zashishat", "himoya qilmoq"],
        ["нарушать", "narushat", "buzmoq (qoidani)"],
        ["уважать", "uvajat", "hurmat qilmoq"],
        ["доверять", "daviryat", "ishonmoq"],
        ["поддерживать", "paddershivat", "qo‘llab-quvvatlamoq"],
        ["заботиться", "zabotitsa", "g‘amxo‘rlik qilmoq"],
        ["требовать", "trebavat", "talab qilmoq"],
        ["предупреждать", "pridupirjdat", "ogohlantirmoq"],
        ["сообщать", "saapshat", "xabar bermoq"],
        ["описывать", "apisivat", "tasvirlamoq"],
        ["доказывать", "dakazivat", "isbotlamoq"],
        ["спорить", "sporit", "bahslashmoq"],
        ["убеждать", "ubijdat", "ishontirmoq, ko‘ndirmoq"],
        ["влиять", "vliyat", "ta’sir qilmoq"],
        ["зависеть", "zaviset", "bog‘liq bo‘lmoq"],
        ["отличаться", "atlichatsa", "farq qilmoq"],
        ["считать", "shitat", "sanamoq; deb hisoblamoq"],
        ["появляться", "payavlyatsa", "paydo bo‘lmoq"],
        ["достигать", "dastigat", "erishmoq"],
        ["стремиться", "strimitsa", "intilmoq"],
        ["экономить", "ekanomit", "tejamoq"]
      ]
    },
    {
      theme: "Sifatlar", icon: "✨", words: [
        ["современный", "savrimenniy", "zamonaviy"],
        ["древний", "drevniy", "qadimiy"],
        ["международный", "mijdunarodniy", "xalqaro"],
        ["государственный", "gasudarstvenniy", "davlatga oid, davlat"],
        ["частный", "chasniy", "xususiy"],
        ["общий", "opshiy", "umumiy"],
        ["личный", "lichniy", "shaxsiy"],
        ["социальный", "satsialniy", "ijtimoiy"],
        ["экономический", "ekanamicheskiy", "iqtisodiy"],
        ["медицинский", "miditsinskiy", "tibbiy"],
        ["научный", "nauchniy", "ilmiy"],
        ["активный", "aktivniy", "faol"],
        ["самостоятельный", "samastayatilniy", "mustaqil"],
        ["ответственный", "atvetstvenniy", "mas’uliyatli"],
        ["опытный", "opitniy", "tajribali"],
        ["талантливый", "talantliviy", "iste’dodli"],
        ["щедрый", "shedriy", "saxiy"],
        ["справедливый", "spravidliviy", "adolatli"]
      ]
    },
    {
      theme: "Bog‘lovchi va yordamchi so‘zlar", icon: "🔗", words: [
        ["следовательно", "sledavatilna", "demak, binobarin"],
        ["благодаря", "blagadarya", "tufayli (yaxshi sabab)"],
        ["из-за", "iz-za", "sababli, ...dan (yomon sabab)"],
        ["несмотря на", "nismatrya na", "...ga qaramay"],
        ["в течение", "f tichyeniye", "davomida"],
        ["по сравнению с", "pa sravneniyu s", "...ga qaraganda"],
        ["в результате", "v rizultate", "natijada"],
        ["таким образом", "takim obrazam", "shunday qilib"],
        ["в основном", "v asnovnam", "asosan"],
        ["действительно", "distvitilna", "haqiqatan, rostdan"]
      ]
    }
  ]
});
