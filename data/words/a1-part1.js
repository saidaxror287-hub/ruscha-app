/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 1: 150 core words of the TORFL / ТРКИ A1 (elementary) lexical minimum, grouped by theme.
*/
Ruscha.addWords({
  id: "a1-part1",
  title: "A1 so‘zlar — 1-qism",
  icon: "📚",
  note: "ТРКИ A1 (elementar daraja) leksik minimumidan 150 ta eng kerakli so‘z, mavzular bo‘yicha.",
  groups: [
    {
      theme: "Salomlashish va odob", icon: "👋", words: [
        ["здравствуйте", "zdrastvuyte", "assalomu alaykum"],
        ["привет", "privet", "salom"],
        ["спасибо", "spasiba", "rahmat"],
        ["пожалуйста", "pajalusta", "iltimos; marhamat"],
        ["извините", "izvinite", "kechirasiz"],
        ["до свидания", "da svidaniya", "xayr"],
        ["да", "da", "ha"],
        ["нет", "net", "yo‘q"],
        ["хорошо", "xarasho", "yaxshi; xo‘p"],
        ["плохо", "ploxa", "yomon"]
      ]
    },
    {
      theme: "Odamlar va oila", icon: "👨‍👩‍👧", words: [
        ["человек", "chilavek", "odam, inson"],
        ["мужчина", "mushina", "erkak"],
        ["женщина", "jenshina", "ayol"],
        ["ребёнок", "ribyonak", "bola"],
        ["мама", "mama", "oyi (ona)"],
        ["папа", "papa", "dada (ota)"],
        ["отец", "atets", "ota"],
        ["мать", "mat", "ona"],
        ["брат", "brat", "aka, uka"],
        ["сестра", "sistra", "opa, singil"],
        ["сын", "sin", "o‘g‘il"],
        ["дочь", "doch", "qiz (farzand)"],
        ["муж", "mush", "er (turmush o‘rtog‘i)"],
        ["жена", "jina", "xotin, rafiqa"],
        ["друг", "druk", "do‘st"]
      ]
    },
    {
      theme: "Raqamlar", icon: "🔢", words: [
        ["один", "adin", "bir"],
        ["два", "dva", "ikki"],
        ["три", "tri", "uch"],
        ["четыре", "chitire", "to‘rt"],
        ["пять", "pyat", "besh"],
        ["шесть", "shest", "olti"],
        ["семь", "sem", "yetti"],
        ["восемь", "vosim", "sakkiz"],
        ["девять", "devit", "to‘qqiz"],
        ["десять", "desit", "o‘n"],
        ["сто", "sto", "yuz"],
        ["тысяча", "tisicha", "ming"]
      ]
    },
    {
      theme: "Vaqt", icon: "🕐", words: [
        ["день", "den", "kun"],
        ["ночь", "noch", "tun, kecha"],
        ["утро", "utra", "ertalab, tong"],
        ["вечер", "vecher", "kechqurun"],
        ["сегодня", "sivodnya", "bugun"],
        ["завтра", "zavtra", "ertaga"],
        ["вчера", "fchira", "kecha (o‘tgan kun)"],
        ["сейчас", "sichas", "hozir"],
        ["час", "chas", "soat (bir soat)"],
        ["минута", "minuta", "daqiqa"],
        ["неделя", "nidelya", "hafta"],
        ["месяц", "mesits", "oy"],
        ["год", "got", "yil"],
        ["время", "vremya", "vaqt"],
        ["всегда", "fsigda", "doim"]
      ]
    },
    {
      theme: "Hafta kunlari", icon: "📅", words: [
        ["понедельник", "panidelnik", "dushanba"],
        ["вторник", "ftornik", "seshanba"],
        ["среда", "srida", "chorshanba"],
        ["четверг", "chitverk", "payshanba"],
        ["пятница", "pyatnitsa", "juma"],
        ["суббота", "subota", "shanba"],
        ["воскресенье", "vaskrisenye", "yakshanba"]
      ]
    },
    {
      theme: "Uy", icon: "🏠", words: [
        ["дом", "dom", "uy"],
        ["квартира", "kvartira", "kvartira, xonadon"],
        ["комната", "komnata", "xona"],
        ["дверь", "dver", "eshik"],
        ["окно", "akno", "deraza"],
        ["стол", "stol", "stol"],
        ["стул", "stul", "stul"],
        ["кровать", "kravat", "karavot"],
        ["кухня", "kuxnya", "oshxona"],
        ["ключ", "klyuch", "kalit"],
        ["адрес", "adris", "manzil"],
        ["улица", "ulitsa", "ko‘cha"]
      ]
    },
    {
      theme: "Ovqat va ichimlik", icon: "🍞", words: [
        ["хлеб", "xlep", "non"],
        ["вода", "vada", "suv"],
        ["чай", "chay", "choy"],
        ["кофе", "kofe", "qahva"],
        ["молоко", "malako", "sut"],
        ["мясо", "myasa", "go‘sht"],
        ["рыба", "riba", "baliq"],
        ["курица", "kuritsa", "tovuq"],
        ["рис", "ris", "guruch"],
        ["яйцо", "yaytso", "tuxum"],
        ["сахар", "saxar", "shakar"],
        ["соль", "sol", "tuz"],
        ["фрукты", "frukti", "mevalar"],
        ["овощи", "ovashi", "sabzavotlar"],
        ["яблоко", "yablaka", "olma"],
        ["картошка", "kartoshka", "kartoshka"],
        ["суп", "sup", "sho‘rva"],
        ["сок", "sok", "sharbat"]
      ]
    },
    {
      theme: "Shahar va joylar", icon: "🏙", words: [
        ["город", "gorat", "shahar"],
        ["магазин", "magazin", "do‘kon"],
        ["рынок", "rinak", "bozor"],
        ["аптека", "apteka", "dorixona"],
        ["больница", "balnitsa", "kasalxona"],
        ["банк", "bank", "bank"],
        ["школа", "shkola", "maktab"],
        ["работа", "rabota", "ish"],
        ["вокзал", "vagzal", "vokzal"],
        ["остановка", "astanofka", "bekat"],
        ["метро", "mitro", "metro"],
        ["парк", "park", "bog‘, park"],
        ["кафе", "kafe", "kafe"],
        ["туалет", "tualet", "hojatxona"],
        ["центр", "tsentr", "markaz"]
      ]
    },
    {
      theme: "Transport", icon: "🚌", words: [
        ["автобус", "aftobus", "avtobus"],
        ["машина", "mashina", "mashina"],
        ["такси", "taksi", "taksi"],
        ["поезд", "poyist", "poyezd"],
        ["самолёт", "samalyot", "samolyot"],
        ["билет", "bilet", "chipta"]
      ]
    },
    {
      theme: "Pul va xarid", icon: "💵", words: [
        ["деньги", "dengi", "pul"],
        ["рубль", "rubl", "rubl"],
        ["цена", "tsena", "narx"],
        ["дорого", "doraga", "qimmat"],
        ["дёшево", "dyoshiva", "arzon"],
        ["карта", "karta", "karta (bank kartasi)"],
        ["сдача", "sdacha", "qaytim"],
        ["касса", "kassa", "kassa"]
      ]
    },
    {
      theme: "Harakatlar", icon: "🏃", words: [
        ["говорить", "gavarit", "gapirmoq"],
        ["понимать", "panimat", "tushunmoq"],
        ["знать", "znat", "bilmoq"],
        ["хотеть", "xatet", "xohlamoq"],
        ["жить", "jit", "yashamoq"],
        ["работать", "rabotat", "ishlamoq"],
        ["есть", "yest", "yemoq"],
        ["пить", "pit", "ichmoq"],
        ["идти", "itti", "bormoq (piyoda)"],
        ["ехать", "yexat", "bormoq (mashinada)"],
        ["купить", "kupit", "sotib olmoq"],
        ["стоить", "stoit", "turmoq (narxi)"],
        ["видеть", "videt", "ko‘rmoq"],
        ["слушать", "slushat", "tinglamoq"],
        ["читать", "chitat", "o‘qimoq"],
        ["писать", "pisat", "yozmoq"],
        ["спать", "spat", "uxlamoq"],
        ["делать", "delat", "qilmoq"]
      ]
    },
    {
      theme: "Qanday? Qayerda?", icon: "🔍", words: [
        ["большой", "balshoy", "katta"],
        ["маленький", "malenkiy", "kichik"],
        ["новый", "noviy", "yangi"],
        ["старый", "stariy", "eski; qari"],
        ["хороший", "xaroshiy", "yaxshi (yaxshi odam)"],
        ["плохой", "plaxoy", "yomon (yomon ob-havo)"],
        ["горячий", "garyachiy", "issiq (issiq choy)"],
        ["холодный", "xalodniy", "sovuq"],
        ["красивый", "krasiviy", "chiroyli"],
        ["вкусный", "fkusniy", "mazali"],
        ["здесь", "zdes", "shu yerda"],
        ["там", "tam", "u yerda"],
        ["много", "mnoga", "ko‘p"],
        ["мало", "mala", "kam"]
      ]
    }
  ]
});
