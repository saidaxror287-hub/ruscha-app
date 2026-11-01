/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 1: the first 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2 or B1 lists.
*/
Ruscha.addWords({
  id: "b2-part1",
  title: "B2 so‘zlar — 1-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: jonli nutqdagi bog‘lovchi so‘zlar, fikr bildirish, his-tuyg‘ular, munosabatlar, ish, pul va jamiyat.",
  groups: [
    {
      theme: "Gapni bog‘lash", icon: "🔗", words: [
        ["на самом деле", "na samam dele", "aslida, haqiqatda"],
        ["вообще-то", "vaapshe-ta", "aslida, umuman olganda"],
        ["в принципе", "f printsipe", "umuman olganda, prinsipda"],
        ["в итоге", "v itogi", "oxir-oqibat, natijada"],
        ["в конце концов", "f kantse kantsof", "oxir-oqibat, nihoyat"],
        ["к тому же", "k tamu je", "buning ustiga"],
        ["тем более", "tem boleye", "ayniqsa, qolaversa"],
        ["между прочим", "mejdu prochim", "aytgancha, aytib qo‘yay"],
        ["иначе", "inache", "aks holda; boshqacha"],
        ["поскольку", "paskolku", "chunki, …gani uchun"],
        ["по крайней мере", "pa krayney mere", "hech bo‘lmaganda"],
        ["в любом случае", "v lyubom sluchaye", "har qanday holatda"],
        ["судя по всему", "sudya pa fsemu", "aftidan, ko‘rinishidan"]
      ]
    },
    {
      theme: "Jonli nutq", icon: "🗯️", words: [
        ["ведь", "vet", "axir"],
        ["неужели", "niujeli", "rostdanmi?, nahotki"],
        ["разве", "razvi", "nahotki, …mi? (ajablanib)"],
        ["всё равно", "fsyo ravno", "baribir"],
        ["как раз", "kak ras", "xuddi, aynan"],
        ["вряд ли", "vryat li", "ehtimoldan yiroq, qaydam"],
        ["наверняка", "navirnyaka", "aniq, shubhasiz"],
        ["будто", "buta", "go‘yo, go‘yoki"],
        ["якобы", "yakabi", "go‘yoki, emish"],
        ["зря", "zrya", "behuda, bekorga"],
        ["едва", "idva", "zo‘rg‘a; endigina"]
      ]
    },
    {
      theme: "Fikr va bahs", icon: "💬", words: [
        ["утверждать", "utvirjdat", "ta’kidlamoq, da’vo qilmoq"],
        ["возражать", "vazrajat", "e’tiroz bildirmoq"],
        ["предполагать", "pridpalagat", "taxmin qilmoq"],
        ["подчёркивать", "padchyorkivat", "alohida ta’kidlamoq"],
        ["преувеличивать", "priuvilichivat", "bo‘rttirmoq, oshirib yubormoq"],
        ["уступать", "ustupat", "yon bermoq; joy bermoq"],
        ["критиковать", "kritikavat", "tanqid qilmoq"],
        ["довод", "dovat", "dalil, asos"],
        ["убеждение", "ubijdeniye", "e’tiqod, qat’iy ishonch"],
        ["компромисс", "kampramis", "murosa, kelishuv"],
        ["недоразумение", "nidarazumeniye", "tushunmovchilik"],
        ["разногласие", "raznaglasiye", "kelishmovchilik, fikr ayriligi"],
        ["спорный", "sporniy", "bahsli, munozarali"],
        ["очевидный", "achividniy", "ravshan, ko‘rinib turgan"],
        ["безусловно", "bizuslovna", "shubhasiz, albatta"],
        ["допустим", "dapustim", "aytaylik, faraz qilaylik"]
      ]
    },
    {
      theme: "His-tuyg‘ular", icon: "🎭", words: [
        ["раздражать", "razdrajat", "asabiga tegmoq, jahlini chiqarmoq"],
        ["обида", "abida", "xafalik, ranjish"],
        ["сожаление", "sajaleniye", "afsus, pushaymonlik"],
        ["разочарование", "razacharavaniye", "hafsala pir bo‘lishi, umidsizlik"],
        ["восторг", "vastork", "zavq, hayajon"],
        ["восхищаться", "vasxishatsa", "qoyil qolmoq, hayratlanmoq"],
        ["тоска", "taska", "sog‘inch, g‘am"],
        ["отчаяние", "atchayaniye", "tushkunlik, umidsizlik"],
        ["зависть", "zavist", "hasad"],
        ["нежность", "nejnast", "mehr, nazokat"],
        ["ненавидеть", "ninavidet", "nafratlanmoq, jini suymaslik"],
        ["облегчение", "ablixcheniye", "yengillik (dardi yengillashdi)"],
        ["равнодушный", "ravnadushniy", "befarq, loqayd"],
        ["растерянный", "rastiryanniy", "sarosimaga tushgan, gangib qolgan"],
        ["возмущаться", "vazmushatsa", "g‘azablanmoq, norozi bo‘lmoq"],
        ["сочувствовать", "sachustvavat", "hamdardlik bildirmoq"],
        ["смущаться", "smushatsa", "xijolat bo‘lmoq, uyalmoq"],
        ["унижение", "unijeniye", "xo‘rlik, kamsitish"]
      ]
    },
    {
      theme: "Munosabatlar", icon: "🤝", words: [
        ["обижать", "abijat", "xafa qilmoq, ranjitmoq"],
        ["недоверие", "nidaveriye", "ishonchsizlik"],
        ["предавать", "pridavat", "xiyonat qilmoq, sotmoq"],
        ["измена", "izmena", "xiyonat"],
        ["ревновать", "rivnavat", "rashk qilmoq"],
        ["упрекать", "uprikat", "ta’na qilmoq, gina qilmoq"],
        ["издеваться", "izdivatsa", "masxara qilmoq; azob bermoq"],
        ["примирение", "primireniye", "yarashuv"],
        ["взаимопонимание", "vzaimapanimaniye", "o‘zaro tushunish"],
        ["взаимный", "vzaimniy", "o‘zaro"],
        ["сближаться", "zblijatsa", "yaqinlashmoq, inoqlashmoq"],
        ["разлука", "razluka", "ayriliq"],
        ["родня", "radnya", "qarindosh-urug‘"],
        ["вдова", "vdava", "beva ayol"]
      ]
    },
    {
      theme: "Kundalik fe’llar", icon: "🔄", words: [
        ["напоминать", "napaminat", "eslatmoq; …ga o‘xshamoq"],
        ["рассчитывать", "rasshitivat", "umid qilmoq; hisoblamoq"],
        ["обходиться", "abxaditsa", "…siz ham eplamoq; narxi tushmoq"],
        ["нуждаться", "nujdatsa", "muhtoj bo‘lmoq"],
        ["добиваться", "dabivatsa", "erishmoq, qo‘lga kiritmoq"],
        ["избегать", "izbigat", "qochmoq, chetlab o‘tmoq"],
        ["заслуживать", "zaslujivat", "munosib bo‘lmoq, loyiq bo‘lmoq"],
        ["вмешиваться", "vmishivatsa", "aralashmoq"],
        ["признаваться", "priznavatsa", "tan olmoq, iqror bo‘lmoq"],
        ["уговаривать", "ugavarivat", "ko‘ndirmoq, yalinib so‘ramoq"],
        ["оправдываться", "apravdivatsa", "o‘zini oqlamoq"],
        ["хвастаться", "xvastatsa", "maqtanmoq"],
        ["притворяться", "pritvaryatsa", "o‘zini …ga solmoq"],
        ["раздумывать", "razdumivat", "o‘ylanib qolmoq, ikkilanmoq"],
        ["колебаться", "kalibatsa", "ikkilanmoq, qaror qilolmaslik"],
        ["выяснять", "viyasnyat", "aniqlamoq, surishtirmoq"],
        ["разбираться", "razbiratsa", "tushunmoq, farqlamoq (biror narsada)"],
        ["угрожать", "ugrajat", "tahdid qilmoq"],
        ["сдаваться", "zdavatsa", "taslim bo‘lmoq; ijaraga berilmoq"],
        ["преодолевать", "priadalivat", "yengib o‘tmoq"],
        ["выживать", "vijivat", "omon qolmoq, yashab ketmoq"],
        ["осуществлять", "asushistvlyat", "amalga oshirmoq"],
        ["осознавать", "asaznavat", "anglamoq, tushunib yetmoq"],
        ["опасаться", "apasatsa", "cho‘chimoq, xavfsiramoq"]
      ]
    },
    {
      theme: "Muloqot", icon: "🗨️", words: [
        ["акцент", "aktsent", "aksent, chet el talaffuzi"],
        ["переспрашивать", "pirisprashivat", "qayta so‘ramoq"],
        ["оговориться", "agavaritsa", "adashib aytib yubormoq"],
        ["перебивать", "piribivat", "gapini bo‘lmoq"],
        ["упоминать", "upaminat", "eslatib o‘tmoq, tilga olmoq"],
        ["уверять", "uviryat", "ishontirib aytmoq"],
        ["намёк", "namyok", "shama, ishora"],
        ["сплетни", "spletni", "g‘iybat, mish-mish gaplar"],
        ["болтать", "baltat", "gap sotmoq, vaysamoq"],
        ["откровенно", "atkravenna", "ochiqchasiga, rostini aytganda"]
      ]
    },
    {
      theme: "Vaqt va holat", icon: "⏱️", words: [
        ["внезапно", "vnizapna", "to‘satdan, kutilmaganda"],
        ["мгновенно", "mgnavenna", "bir zumda"],
        ["ненадолго", "ninadolga", "qisqa vaqtga"],
        ["нередко", "niretka", "tez-tez, ko‘pincha"],
        ["изредка", "izretka", "ba’zan, onda-sonda"],
        ["подряд", "padryat", "ketma-ket, surunkasiga"],
        ["по очереди", "pa ocheridi", "navbat bilan, navbatma-navbat"],
        ["отныне", "atnine", "bundan buyon"],
        ["нарочно", "narochna", "ataylab, qasddan"],
        ["назло", "nazlo", "o‘chakishib, jahliga"],
        ["временно", "vremenna", "vaqtincha"],
        ["своевременно", "svaivremenna", "o‘z vaqtida"],
        ["заблаговременно", "zablagavremenna", "oldindan, vaqtliroq"],
        ["окончательно", "akanchatilna", "butunlay, uzil-kesil"]
      ]
    },
    {
      theme: "Xarakter", icon: "✨", words: [
        ["вспыльчивый", "fspilchiviy", "jizzaki, tez jahli chiqadigan"],
        ["рассеянный", "rasseyanniy", "parishonxotir, e’tiborsiz"],
        ["сдержанный", "sderjanniy", "vazmin, o‘zini tuta biladigan"],
        ["ласковый", "laskaviy", "mehribon, erkalovchi"],
        ["терпеливый", "tirpiliviy", "sabrli, toqatli"],
        ["искренний", "iskrenniy", "samimiy, chin dildan"],
        ["порядочный", "paryadachniy", "vijdonli, halol"],
        ["жадный", "jadniy", "xasis; ochko‘z"],
        ["хитрый", "xitriy", "ayyor, mug‘ombir"],
        ["наглый", "nagliy", "surbet, beadab"],
        ["грубый", "grubiy", "qo‘pol"],
        ["легкомысленный", "lixkamislenniy", "yengiltak, o‘ylamay ish qiladigan"],
        ["обидчивый", "abidchiviy", "arazchi, tez xafa bo‘ladigan"],
        ["болтливый", "baltliviy", "vaysaqi, ko‘p gapiradigan"]
      ]
    },
    {
      theme: "Ish va martaba", icon: "💼", words: [
        ["повышение", "pavisheniye", "lavozimga ko‘tarilish; oshish"],
        ["руководство", "rukavotstva", "rahbariyat; qo‘llanma"],
        ["нагрузка", "nagruska", "yuklama, ish hajmi"],
        ["справляться", "spravlyatsa", "uddalamoq, eplamoq"],
        ["совмещать", "savmishat", "birga olib bormoq (ish va o‘qishni)"],
        ["поручать", "paruchat", "topshirmoq (vazifa)"],
        ["поручение", "parucheniye", "topshiriq"],
        ["сверхурочные", "svirxurochniye", "ish vaqtidan tashqari soatlar"],
        ["выговор", "vigavar", "hayfsan"],
        ["сокращение", "sakrasheniye", "qisqartirish (shtat)"],
        ["декрет", "dikret", "dekret (tug‘ruq) ta’tili"]
      ]
    },
    {
      theme: "Pul va mulk", icon: "💰", words: [
        ["одалживать", "adaljivat", "qarz bermoq"],
        ["взаймы", "vzaymi", "qarzga"],
        ["должник", "daljnik", "qarzdor"],
        ["просрочка", "prasrochka", "muddat o‘tkazib yuborish (to‘lovda)"],
        ["залог", "zalok", "garov, zalog puli"],
        ["льгота", "lgota", "imtiyoz"],
        ["компенсация", "kampinsatsiya", "tovon, kompensatsiya"],
        ["ущерб", "usherp", "zarar, ziyon"],
        ["убыток", "ubitak", "zarar (pulda)"],
        ["подорожать", "padarajat", "qimmatlashmoq"],
        ["подешеветь", "padishivet", "arzonlashmoq"],
        ["вложение", "vlajeniye", "sarmoya, investitsiya"],
        ["недвижимость", "nidvijimast", "ko‘chmas mulk"],
        ["наследство", "nasletstva", "meros"],
        ["обеспеченный", "abispechenniy", "boy-badavlat, ta’minlangan"],
        ["нищета", "nishita", "qashshoqlik"]
      ]
    },
    {
      theme: "Uy va ro‘zg‘or", icon: "🏠", words: [
        ["поломка", "palomka", "buzilish, nosozlik"],
        ["неисправность", "nispravnast", "nosozlik, ishlamay qolish"],
        ["починка", "pachinka", "tuzatish, ta’mirlash"],
        ["запчасть", "zapchast", "ehtiyot qism"],
        ["сигнализация", "signalizatsiya", "signalizatsiya, xavf qo‘ng‘irog‘i"],
        ["шуметь", "shumet", "shovqin qilmoq"],
        ["переезд", "piriyest", "ko‘chish (yangi uyga)"],
        ["обустраиваться", "abustraivatsa", "joylashib olmoq"],
        ["уют", "uyut", "shinamlik"],
        ["пылесосить", "pilisosit", "changyutgich bilan tozalamoq"],
        ["хозяйство", "xazyaystva", "ro‘zg‘or, xo‘jalik"],
        ["домохозяйка", "domaxazyayka", "uy bekasi"]
      ]
    },
    {
      theme: "Sog‘liq", icon: "🩺", words: [
        ["обследование", "apsledavaniye", "tekshiruv (tibbiy)"],
        ["тошнить", "tashnit", "ko‘ngil aynimoq"],
        ["кружиться", "krujitsa", "aylanmoq (bosh aylanmoq)"],
        ["чихать", "chixat", "aksirmoq"],
        ["ушиб", "uship", "lat yeyish, urilgan joy"],
        ["поправляться", "papravlyatsa", "tuzalmoq; semirmoq"],
        ["страдать", "stradat", "azob chekmoq; …dan aziyat chekmoq"],
        ["мучиться", "muchitsa", "qiynalmoq"],
        ["хронический", "xranicheskiy", "surunkali"],
        ["побочный эффект", "pabochniy efekt", "nojo‘ya ta’sir"],
        ["выписывать", "vipisivat", "yozib bermoq (retsept); kasalxonadan chiqarmoq"],
        ["роды", "rodi", "tug‘ruq"]
      ]
    },
    {
      theme: "Jamiyat va yangiliklar", icon: "📰", words: [
        ["кризис", "krizis", "inqiroz"],
        ["голосовать", "galasavat", "ovoz bermoq"],
        ["чиновник", "chinovnik", "amaldor"],
        ["взятка", "vzyatka", "pora"],
        ["протест", "pratest", "norozilik, e’tiroz"],
        ["забастовка", "zabastofka", "ish tashlash"],
        ["пострадавший", "pastradafshiy", "jabrlanuvchi"],
        ["жертва", "jertva", "qurbon"],
        ["нападение", "napadeniye", "hujum"],
        ["ограбление", "agrableniye", "talonchilik"],
        ["мошенничество", "mashennichestva", "firibgarlik"],
        ["задержать", "zadirjat", "ushlab qolmoq, qo‘lga olmoq"],
        ["расследование", "rassledavaniye", "tergov"],
        ["тюрьма", "tyurma", "qamoqxona"],
        ["взрыв", "vzrif", "portlash"]
      ]
    }
  ]
});
