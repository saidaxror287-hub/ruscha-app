/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 9: the next 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2, B1 lists or from b2-part1 to b2-part8.
*/
Ruscha.addWords({
  id: "b2-part9",
  title: "B2 so‘zlar — 9-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: telefonda, janjal va shikoyat, odatlar, nikoh va qarindoshlar, bayramlar, pul, olib borish fe’llari, bola tarbiyasi, kasblar, ranglar.",
  groups: [
    {
      theme: "Telefonda", icon: "📞", words: [
        ["вас плохо слышно", "vas ploxa slishna", "ovozingiz yaxshi eshitilmayapti"],
        ["связь прервалась", "svyas prirvalas", "aloqa uzilib qoldi"],
        ["абонент недоступен", "abanent nidastupin", "abonent aloqadan tashqarida"],
        ["гудки", "gutki", "chaqiruv signallari (du-du)"],
        ["набрать номер", "nabrat nomir", "raqam termoq"],
        ["взять трубку", "vzyat trupku", "go‘shakni olmoq, javob bermoq"],
        ["положить трубку", "palajit trupku", "go‘shakni qo‘ymoq"],
        ["сбросить звонок", "zbrosit zvanok", "qo‘ng‘iroqni rad etmoq"],
        ["пропущенный звонок", "prapushenniy zvanok", "javobsiz qo‘ng‘iroq"],
        ["громкая связь", "gromkaya svyas", "baland ovoz rejimi"],
        ["беззвучный режим", "bizzvuchniy rijim", "ovozsiz rejim"],
        ["отключить звук", "atklyuchit zvuk", "ovozni o‘chirmoq"],
        ["заблокировать номер", "zablakiravat nomir", "raqamni bloklamoq"]
      ]
    },
    {
      theme: "Janjal va shikoyat", icon: "😤", words: [
        ["грубить", "grubit", "qo‘pollik qilmoq"],
        ["накричать", "nakrichat", "baqirib bermoq (birovga)"],
        ["повысить голос", "pavisit golas", "ovozini ko‘tarmoq"],
        ["разговаривать на повышенных тонах", "razgavarivat na pavishennix tonax", "baland ovozda tortishmoq"],
        ["жалобная книга", "jalabnaya kniga", "shikoyatlar daftari"],
        ["некачественный", "nikachistvenniy", "sifatsiz"],
        ["обсчитать", "apshitat", "hisobda aldamoq"],
        ["обвешивать", "abveshivat", "tarozida urib qolmoq"],
        ["недовес", "nidaves", "kam tortish (tarozida)"]
      ]
    },
    {
      theme: "Odatlar va salomatlik", icon: "🚭", words: [
        ["вредная привычка", "vrednaya privichka", "zararli odat"],
        ["бросить курить", "brosit kurit", "chekishni tashlamoq"],
        ["курение", "kureniye", "chekish"],
        ["алкоголь", "alkagol", "spirtli ichimlik"],
        ["трезвый", "trezviy", "hushyor (ichmagan)"],
        ["пьяный", "pyaniy", "mast"],
        ["похмелье", "paxmelye", "xumor"],
        ["зависимость", "zavisimast", "qaramlik; bog‘liqlik"],
        ["правильное питание", "pravilnaye pitaniye", "to‘g‘ri ovqatlanish"],
        ["режим дня", "rijim dnya", "kun tartibi"],
        ["недосып", "nidasip", "uyqu yetishmasligi"],
        ["восстановиться", "vasstanavitsa", "tiklanmoq (kasallikdan keyin)"],
        ["закаляться", "zakalyatsa", "chiniqmoq"],
        ["йога", "yoga", "yoga"],
        ["медитация", "miditatsiya", "meditatsiya"]
      ]
    },
    {
      theme: "Nikoh va oila", icon: "💍", words: [
        ["сватать", "svatat", "sovchi qo‘ymoq, qiz so‘ramoq"],
        ["предложение руки и сердца", "pridlajeniye ruki i sertsa", "turmush qurish taklifi"],
        ["обручальное кольцо", "abruchalnaye kalso", "nikoh uzugi"],
        ["молодожёны", "maladajoni", "yangi turmush qurganlar"],
        ["медовый месяц", "midoviy mesits", "asal oyi"],
        ["брачный договор", "brachniy dagavor", "nikoh shartnomasi"],
        ["алименты", "alimenti", "aliment"],
        ["опекунство", "apikunstva", "vasiylik"],
        ["неполная семья", "nipolnaya simya", "to‘liq bo‘lmagan oila"],
        ["мать-одиночка", "mat-adinochka", "yolg‘iz ona"]
      ]
    },
    {
      theme: "Qarindoshlar", icon: "👨‍👩‍👧", words: [
        ["пасынок", "pasinak", "o‘gay o‘g‘il"],
        ["падчерица", "padchiritsa", "o‘gay qiz"],
        ["деверь", "devir", "qayni (erning akasi yoki ukasi)"],
        ["золовка", "zalofka", "qayinsingil, qayinopa (erning opa-singlisi)"],
        ["шурин", "shurin", "qayni (xotinning akasi yoki ukasi)"],
        ["троюродный", "trayurodniy", "uchinchi avlod (amakivachchaning bolasi)"],
        ["дальний родственник", "dalniy rotstvennik", "uzoq qarindosh"]
      ]
    },
    {
      theme: "Bayram va marosim", icon: "🎂", words: [
        ["именинник", "imininnik", "tug‘ilgan kun egasi"],
        ["юбиляр", "yubilyar", "yubiley egasi"],
        ["виновник торжества", "vinovnik tarjestva", "tantana egasi"],
        ["поднять бокал", "padnyat bakal", "qadah ko‘tarmoq"],
        ["загадать желание", "zagadat jilaniye", "niyat qilmoq (orzu)"],
        ["задуть свечи", "zadut svechi", "shamlarni puflab o‘chirmoq"],
        ["вручить подарок", "vruchit padarak", "sovg‘a topshirmoq"],
        ["принимать гостей", "prinimat gastey", "mehmon kutmoq"],
        ["званый ужин", "zvaniy ujin", "taklif bilan kechki ziyofat"],
        ["проводы", "provadi", "kuzatish marosimi (armiyaga, safarga)"],
        ["встреча выпускников", "fstrecha vipusknikaf", "bitiruvchilar uchrashuvi"],
        ["поминать", "paminat", "xotirlamoq, ehson qilmoq (marhumni)"],
        ["годовщина свадьбы", "gadafshina svadbi", "to‘y yilligi"],
        ["серебряная свадьба", "siribryanaya svadba", "kumush to‘y (25 yil)"]
      ]
    },
    {
      theme: "Pul (so‘zlashuvda)", icon: "💸", words: [
        ["занять денег", "zanyat dinek", "qarz olmoq"],
        ["дать в долг", "dat v dolk", "qarz bermoq"],
        ["расплатиться", "rasplatitsa", "hisob-kitob qilmoq, to‘lab qo‘ymoq"],
        ["скинуться", "skinutsa", "pul yig‘ishmoq (hamma bo‘lib)"],
        ["вскладчину", "fskladchinu", "bo‘lishib (pulni)"],
        ["поделить счёт", "padilit shot", "hisobni bo‘lishmoq"],
        ["карманные деньги", "karmanniye dengi", "cho‘ntak puli"],
        ["на мели", "na mili", "puli yo‘q, qisilib qolgan"],
        ["без гроша", "biz grasha", "bir tiyinsiz"],
        ["сводить концы с концами", "svadit kantsi s kantsami", "kunini zo‘rg‘a ko‘rmoq"],
        ["жить на широкую ногу", "jit na shirokuyu nogu", "dabdabali yashamoq"],
        ["отложить на чёрный день", "atlajit na chorniy den", "qora kunga pul yig‘moq"]
      ]
    },
    {
      theme: "Olib bormoq, olib kelmoq", icon: "🚚", words: [
        ["подвезти", "padvisti", "yo‘l-yo‘lakay olib bormoq (mashinada)"],
        ["подбросить", "padbrosit", "tashlab qo‘ymoq (mashinada); otib yubormoq"],
        ["довезти", "davisti", "yetkazib qo‘ymoq (mashinada)"],
        ["увезти", "uvisti", "olib ketmoq (mashinada)"],
        ["перевезти", "pirivisti", "ko‘chirib olib o‘tmoq"],
        ["развозить", "razvazit", "tarqatib yetkazmoq"],
        ["перевозка", "pirivoska", "tashish, yuk tashish"],
        ["доставить", "dastavit", "yetkazib bermoq"],
        ["отнести", "atnisti", "olib borib qo‘ymoq"],
        ["донести", "danisti", "ko‘tarib yetkazmoq"],
        ["занести", "zanisti", "kirib berib ketmoq"],
        ["унести", "unisti", "olib ketmoq (qo‘lda)"],
        ["пронести", "pranisti", "olib o‘tmoq"],
        ["выносить мусор", "vinasit musar", "chiqindini chiqarmoq"],
        ["отвести", "atvisti", "olib bormoq (bolani bog‘chaga)"],
        ["довести", "davisti", "kuzatib qo‘ymoq; …holga yetkazmoq"],
        ["развести", "razvisti", "tarqatmoq; ajrashtirmoq; suyultirmoq"],
        ["завести", "zavisti", "o‘t oldirmoq (mashina); boqmoq (it, mushuk)"],
        ["подвести итоги", "padvisti itogi", "yakun yasamoq"]
      ]
    },
    {
      theme: "Uchmoq, suzmoq, yugurmoq", icon: "🏃", words: [
        ["перелететь", "pirilitet", "uchib o‘tmoq"],
        ["переплыть", "piriplit", "suzib o‘tmoq"],
        ["доплыть", "daplit", "suzib yetmoq"],
        ["уплыть", "uplit", "suzib ketmoq"],
        ["сбежать", "zbijat", "qochib ketmoq"],
        ["разбежаться", "razbijatsa", "tarqab ketmoq; yugurib olmoq"],
        ["выскочить", "viskachit", "otilib chiqmoq"],
        ["проскочить", "praskachit", "sirg‘alib o‘tib ketmoq"]
      ]
    },
    {
      theme: "O‘zgarib qolmoq", icon: "🔄", words: [
        ["повзрослеть", "pavzraslet", "ulg‘aymoq"],
        ["постареть", "pastaret", "qarimoq"],
        ["поумнеть", "paumnet", "aqli kirmoq"],
        ["побледнеть", "pablidnet", "oqarib ketmoq"],
        ["покраснеть", "pakrasnet", "qizarib ketmoq"],
        ["загореть", "zagaret", "qorayib qolmoq (quyoshda)"],
        ["облысеть", "ablisset", "kal bo‘lib qolmoq"],
        ["поседеть", "pasidet", "sochi oqarmoq"],
        ["ослабеть", "aslabet", "holsizlanmoq"],
        ["окрепнуть", "akrepnut", "kuchga kirmoq, mustahkamlanmoq"],
        ["разбогатеть", "razbagatet", "boyimoq"],
        ["обеднеть", "abidnet", "kambag‘allashmoq"],
        ["разориться", "razaritsa", "sinmoq (bankrot bo‘lmoq)"],
        ["отвыкнуть", "atviknut", "odatdan chiqmoq"],
        ["избавиться", "izbavitsa", "qutulmoq"],
        ["лишиться", "lishitsa", "mahrum bo‘lmoq"]
      ]
    },
    {
      theme: "Bola tarbiyasi", icon: "🧸", words: [
        ["воспитатель", "vaspitatil", "tarbiyachi"],
        ["ясли", "yasli", "yasli (kichik bolalar bog‘chasi)"],
        ["пелёнки", "pilyonki", "yo‘rgaklar"],
        ["кормить грудью", "karmit grudyu", "ko‘krak suti bilan boqmoq"],
        ["укачивать", "ukachivat", "allalab uxlatmoq"],
        ["капризы", "kaprizi", "injiqliklar"],
        ["истерика", "istirika", "isteriya, yig‘i-sig‘i"],
        ["шалить", "shalit", "sho‘xlik qilmoq"],
        ["шалость", "shalast", "sho‘xlik"],
        ["хулиганить", "xuliganit", "bezorilik qilmoq"],
        ["похвала", "paxvala", "maqtov"],
        ["поощрение", "paashreniye", "rag‘bat"],
        ["переходный возраст", "pirixodniy vozrast", "o‘tish davri (o‘smirlik)"],
        ["самостоятельность", "samastayatilnast", "mustaqillik"]
      ]
    },
    {
      theme: "G‘amxo‘rlik", icon: "🧓", words: [
        ["уход", "uxot", "parvarish; ketish"],
        ["сиделка", "sidelka", "bemorga qarovchi ayol"],
        ["дом престарелых", "dom pristarelix", "qariyalar uyi"],
        ["инвалидная коляска", "invalidnaya kalyaska", "nogironlar aravachasi"],
        ["опека", "apeka", "vasiylik, qaramog‘ida bo‘lish"]
      ]
    },
    {
      theme: "Kasblar", icon: "👷", words: [
        ["плотник", "plotnik", "duradgor"],
        ["столяр", "stalyar", "yog‘och ustasi (mebel)"],
        ["маляр", "malyar", "bo‘yoqchi"],
        ["штукатур", "shtukatur", "suvoqchi"],
        ["плиточник", "plitachnik", "kafel ustasi"],
        ["вахтёр", "vaxtyor", "qorovul (kirish joyida)"],
        ["швея", "shviya", "tikuvchi ayol"],
        ["портной", "partnoy", "tikuvchi (erkak)"],
        ["пекарь", "pekar", "novvoy"],
        ["кондитер", "kanditir", "qandolatchi"],
        ["мясник", "misnik", "qassob"]
      ]
    },
    {
      theme: "Asbob va materiallar", icon: "🧰", words: [
        ["пила", "pila", "arra"],
        ["топор", "tapor", "bolta"],
        ["гаечный ключ", "gayechniy klyuch", "gayka kaliti"],
        ["плоскогубцы", "plaskagubtsi", "ombir"],
        ["рулетка", "ruletka", "ruletka (o‘lchagich)"],
        ["стремянка", "strimyanka", "narvon (yig‘iladigan)"],
        ["спецодежда", "spetsadejda", "maxsus ish kiyimi"],
        ["сварка", "svarka", "payvandlash"],
        ["бетон", "biton", "beton"],
        ["цемент", "tsiment", "sement"],
        ["щебень", "shebin", "shag‘al"],
        ["брус", "brus", "to‘sin (yog‘och)"],
        ["древесина", "drivisina", "yog‘och (material)"],
        ["сталь", "stal", "po‘lat"],
        ["медь", "met", "mis"],
        ["алюминий", "alyuminiy", "alyuminiy"],
        ["резина", "rizina", "rezina"]
      ]
    },
    {
      theme: "Rang va tur", icon: "🎨", words: [
        ["бежевый", "bejeviy", "och jigarrang (bej)"],
        ["бордовый", "bardoviy", "to‘q qizil (bordo)"],
        ["салатовый", "salataviy", "och yashil"],
        ["бирюзовый", "biryuzoviy", "feruza rang"],
        ["золотистый", "zalatistiy", "tillarang"],
        ["серебристый", "siribristiy", "kumushrang"],
        ["светло-синий", "svetla-siniy", "och ko‘k"],
        ["тёмно-зелёный", "tyomna-zilyoniy", "to‘q yashil"],
        ["разноцветный", "raznatsvetniy", "rang-barang"],
        ["бесцветный", "bistsvetniy", "rangsiz"],
        ["натуральный", "naturalniy", "tabiiy"],
        ["искусственный", "iskusstvenniy", "sun’iy"]
      ]
    },
    {
      theme: "Qanday qilib?", icon: "🪶", words: [
        ["бережно", "berijna", "ehtiyotlab, avaylab"],
        ["небрежно", "nibrejna", "beparvolik bilan"],
        ["тщательно", "tshatilna", "sinchiklab, puxta"],
        ["поспешно", "paspeshna", "shoshib"],
        ["неторопливо", "nitarapliva", "shoshmasdan"],
        ["решительно", "rishitilna", "qat’iyat bilan"],
        ["уверенно", "uverenna", "ishonch bilan"],
        ["робко", "ropka", "tortinib"],
        ["смело", "smela", "dadil"],
        ["сердито", "sirdita", "jahl bilan"],
        ["ласково", "laskava", "mehr bilan"],
        ["строго", "stroga", "qattiq, jiddiy"],
        ["нервно", "nervna", "asabiy holda"],
        ["шёпотом", "shopatam", "pichirlab"],
        ["вполголоса", "fpolgalasa", "past ovozda"],
        ["наперебой", "napiriboy", "bir-birining gapini bo‘lib"],
        ["хором", "xoram", "jo‘r bo‘lib"],
        ["дружно", "drujna", "ahillik bilan, birgalikda"]
      ]
    }
  ]
});
