/*
  Word list file format:
    groups: { theme, icon, words: [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...] }
  Part 8: the next 200 words of the TORFL / ТРКИ-2 (B2) lexical minimum — the most frequent and
  useful ones for everyday speaking and listening come first.
  None of them repeats a word from the A1, A2, B1 lists or from b2-part1 to b2-part7.
*/
Ruscha.addWords({
  id: "b2-part8",
  title: "B2 so‘zlar — 8-qism",
  icon: "📕",
  note: "ТРКИ-2 (B2) so‘zlari: yangiliklar tili, iqtisod va qonun, old qo‘shimchali fe’llar, so‘zlashuv va iboralar, san’at, sport, geografiya va joylashuv.",
  groups: [
    {
      theme: "Yangiliklar tili", icon: "📰", words: [
        ["сообщается", "saapshayetsa", "xabar qilinmoqda"],
        ["по данным", "pa dannim", "ma’lumotlarga ko‘ra"],
        ["по словам", "pa slavam", "…ning so‘zlariga ko‘ra"],
        ["по информации", "pa infarmatsii", "ma’lumotga ko‘ra"],
        ["заявить", "zayavit", "bayonot bermoq, ma’lum qilmoq"],
        ["комментировать", "kamintiravat", "izoh bermoq"],
        ["опровержение", "apravirjeniye", "rad etish (xabarni)"],
        ["пресс-служба", "pres-slujba", "matbuot xizmati"],
        ["пресс-конференция", "pres-kanfirentsiya", "matbuot anjumani"],
        ["версия", "versiya", "taxmin, versiya"],
        ["очевидец", "achividits", "ko‘rgan odam, guvoh"],
        ["виновник", "vinovnik", "aybdor (hodisada)"],
        ["пострадать", "pastradat", "jabr ko‘rmoq, zarar ko‘rmoq"],
        ["погибшие", "pagipshiye", "halok bo‘lganlar"],
        ["раненые", "raniniye", "yaradorlar"],
        ["эвакуация", "evakuatsiya", "evakuatsiya, ko‘chirish"],
        ["госпитализировать", "gaspitaliziravat", "kasalxonaga yotqizmoq"]
      ]
    },
    {
      theme: "Iqtisod va qonun", icon: "📊", words: [
        ["рост цен", "rost tsen", "narxlar o‘sishi"],
        ["курс доллара", "kurs dollara", "dollar kursi"],
        ["обвал", "abval", "keskin tushish; qulash"],
        ["стабильность", "stabilnast", "barqarorlik"],
        ["стабильный", "stabilniy", "barqaror"],
        ["нестабильный", "nistabilniy", "beqaror"],
        ["спрос", "spros", "talab (bozorda)"],
        ["рынок труда", "rinak truda", "mehnat bozori"],
        ["дефицит кадров", "difitsit kadraf", "ishchi yetishmasligi"],
        ["средняя зарплата", "srednyaya zarplata", "o‘rtacha maosh"],
        ["прожиточный минимум", "prajitachniy minimum", "yashash minimumi"],
        ["законопроект", "zakonapraekt", "qonun loyihasi"],
        ["принять закон", "prinyat zakon", "qonun qabul qilmoq"],
        ["вступить в силу", "fstupit f silu", "kuchga kirmoq"],
        ["принимать меры", "prinimat meri", "chora ko‘rmoq"],
        ["ужесточить", "ujistachit", "qattiqlashtirmoq"],
        ["смягчить", "smixchit", "yumshatmoq"]
      ]
    },
    {
      theme: "Ob-havo xabari", icon: "🌪️", words: [
        ["осадки", "asatki", "yog‘ingarchilik"],
        ["порывы ветра", "parivi vetra", "shamol esishi (kuchli)"],
        ["штормовое предупреждение", "shtormavaye pridupirjdeniye", "bo‘ron haqida ogohlantirish"],
        ["аномальный", "anamalniy", "g‘ayritabiiy"],
        ["выше нормы", "vishi normi", "me’yordan yuqori"],
        ["ниже нормы", "nije normi", "me’yordan past"]
      ]
    },
    {
      theme: "Qayta va oxirigacha", icon: "🔁", words: [
        ["переписать", "piripisat", "qayta yozmoq; ko‘chirib yozmoq"],
        ["переделать", "piridelat", "qayta qilmoq"],
        ["перечитать", "pirichitat", "qayta o‘qimoq"],
        ["пересчитать", "pirishitat", "qayta sanamoq"],
        ["переставить", "piristavit", "joyini o‘zgartirmoq"],
        ["переложить", "pirilajit", "boshqa joyga olib qo‘ymoq"],
        ["передумать", "piridumat", "fikridan qaytmoq"],
        ["пересолить", "pirisalit", "sho‘r qilib qo‘ymoq"],
        ["перегреться", "pirigretsa", "qizib ketmoq"],
        ["переборщить", "piribarshit", "oshirib yubormoq"],
        ["переоценивать", "piriatsenivat", "ortiqcha baholamoq"],
        ["недооценивать", "nidaatsenivat", "yetarlicha baholamaslik"],
        ["недосыпать", "nidasipat", "to‘yib uxlamaslik"],
        ["недоедать", "nidaidat", "to‘yib ovqatlanmaslik"],
        ["доделать", "dadelat", "oxiriga yetkazmoq"],
        ["дописать", "dapisat", "yozib tugatmoq"],
        ["дочитать", "dachitat", "o‘qib tugatmoq"],
        ["досмотреть", "dasmatret", "ko‘rib tugatmoq"],
        ["дождаться", "dajdatsa", "kutib olmoq (oxirigacha)"],
        ["договорить", "dagavarit", "gapini tugatmoq"],
        ["дозвониться", "dazvanitsa", "qo‘ng‘iroq qilib bog‘lanmoq"],
        ["допить", "dapit", "ichib tugatmoq"]
      ]
    },
    {
      theme: "O‘ylash va gapirish", icon: "💭", words: [
        ["задуматься", "zadumatsa", "o‘ylanib qolmoq"],
        ["обдумать", "abdumat", "o‘ylab ko‘rmoq"],
        ["продумать", "pradumat", "puxta o‘ylab chiqmoq"],
        ["придумать", "pridumat", "o‘ylab topmoq"],
        ["додуматься", "dadumatsa", "fahmlab qolmoq, aqli yetmoq"],
        ["заговорить", "zagavarit", "gapira boshlamoq"],
        ["разговориться", "razgavaritsa", "gapga kirishib ketmoq"],
        ["проговориться", "pragavaritsa", "og‘zidan gullab qo‘ymoq"],
        ["сговориться", "zgavaritsa", "til biriktirmoq"],
        ["наговорить", "nagavarit", "ko‘p gapirib yubormoq; tuhmat qilmoq"],
        ["недоговаривать", "nidagavarivat", "gapning hammasini aytmaslik"],
        ["оговорка", "agavorka", "izoh, shart; tilning sirpanishi"]
      ]
    },
    {
      theme: "Olmoq, bermoq, qo‘ymoq", icon: "📥", words: [
        ["забрать", "zabrat", "olib ketmoq"],
        ["отобрать", "atabrat", "tortib olmoq; saralamoq"],
        ["подобрать", "padabrat", "tanlab olmoq; yerdan olmoq"],
        ["разобрать", "razabrat", "qismlarga ajratmoq; tushunmoq"],
        ["отдать", "addat", "qaytarib bermoq; bermoq"],
        ["передать", "piridat", "uzatmoq, yetkazmoq"],
        ["раздать", "razdat", "tarqatmoq"],
        ["выдать", "vidat", "bermoq (hujjat); oshkor qilmoq"],
        ["задать", "zadat", "bermoq (savol, vazifa)"],
        ["вложить", "vlajit", "solmoq; sarmoya qilmoq"],
        ["выложить", "vilajit", "chiqarib qo‘ymoq; internetga joylamoq"],
        ["приложить", "prilajit", "ilova qilmoq; qo‘ymoq"],
        ["разложить", "razlajit", "yoyib qo‘ymoq"],
        ["уложить", "ulajit", "yotqizmoq (bolani); joylamoq"],
        ["выставить", "vistavit", "qo‘ymoq (ko‘rgazmaga); chiqarib yubormoq"],
        ["расставить", "rasstavit", "terib qo‘ymoq"],
        ["составить", "sastavit", "tuzmoq (ro‘yxat, reja)"]
      ]
    },
    {
      theme: "Yozilish", icon: "✍️", words: [
        ["записаться", "zapisatsa", "yozilmoq (qabulga, kursga)"],
        ["подписаться", "patpisatsa", "imzo chekmoq; obuna bo‘lmoq"],
        ["расписаться", "raspisatsa", "imzo qo‘ymoq; nikohdan o‘tmoq"],
        ["выписаться", "vipisatsa", "ro‘yxatdan chiqmoq; kasalxonadan chiqmoq"],
        ["прописаться", "prapisatsa", "propiskaga turmoq"]
      ]
    },
    {
      theme: "Hayotiy vaziyatlar", icon: "🛟", words: [
        ["выручить", "viruchit", "qiyin paytda yordam bermoq"],
        ["выручка", "viruchka", "tushum (savdodan)"],
        ["подвести", "padvisti", "uyaltirib qo‘ymoq, ishonchni oqlamaslik"],
        ["подставить", "patstavit", "tutib bermoq; aybni birovga ag‘darmoq"],
        ["заступиться", "zastupitsa", "himoya qilmoq (birovni)"],
        ["постоять за себя", "pastayat za sibya", "o‘zini himoya qila olmoq"],
        ["выкрутиться", "vikrutitsa", "qutulib ketmoq (qiyin holdan)"],
        ["отделаться", "atdelatsa", "qutulmoq; arzon qutulmoq"],
        ["отмахнуться", "atmaxnutsa", "qo‘l siltamoq, e’tibor bermaslik"],
        ["подшутить", "patshutit", "hazillashmoq (birov ustidan)"],
        ["разыграть", "razigrat", "hazil qilib aldamoq; o‘ynamoq"],
        ["розыгрыш", "rozigrish", "hazil, prank; o‘yin (lotereya)"]
      ]
    },
    {
      theme: "Ovqat va mehmon", icon: "🍵", words: [
        ["наесться", "naistsa", "to‘yib yemoq"],
        ["объесться", "abyestsa", "ortiqcha yeb qo‘ymoq"],
        ["перекусить", "pirikusit", "tamaddi qilmoq"],
        ["закусить", "zakusit", "gazak qilmoq"],
        ["засидеться", "zasidetsa", "o‘tirib qolmoq (mehmonda)"]
      ]
    },
    {
      theme: "So‘zlashuv", icon: "😎", words: [
        ["круто", "kruta", "zo‘r!"],
        ["прикол", "prikol", "hazil, qiziq narsa"],
        ["прикольный", "prikolniy", "qiziq, kulgili"],
        ["обалдеть", "abaldet", "voy-bo‘!, hayron qolmoq"],
        ["проехали", "prayexali", "bo‘ldi, unutdik (bu haqda gapirmaylik)"],
        ["запросто", "zaprasta", "osongina"],
        ["элементарно", "elimintarna", "juda oson"],
        ["без проблем", "bis prablem", "muammo yo‘q"]
      ]
    },
    {
      theme: "Foydali iboralar", icon: "🧩", words: [
        ["честно говоря", "chesna gavarya", "rostini aytsam"],
        ["кстати говоря", "kstati gavarya", "aytgancha"],
        ["в двух словах", "v dvux slavax", "ikki og‘iz so‘z bilan"],
        ["своими глазами", "svaimi glazami", "o‘z ko‘zi bilan"],
        ["от души", "ad dushi", "chin dildan"],
        ["на ходу", "na xadu", "yo‘l-yo‘lakay, yurib ketayotib"],
        ["с головой", "s galavoy", "butunlay berilib"],
        ["на нервах", "na nervax", "asabiy holatda"],
        ["на родине", "na rodine", "vatanda"],
        ["на чужбине", "na chujbine", "g‘urbatda, begona yurtda"],
        ["тоска по родине", "taska pa rodine", "vatan sog‘inchi"]
      ]
    },
    {
      theme: "Iboralar (idiomalar)", icon: "🐘", words: [
        ["делать из мухи слона", "delat iz muxi slana", "pashshadan fil yasamoq"],
        ["водить за нос", "vadit za nos", "aldab yurmoq"],
        ["вешать лапшу на уши", "veshat lapshu na ushi", "quloqqa lag‘mon ilmoq (aldamoq)"],
        ["сидеть сложа руки", "sidet slaja ruki", "qo‘l qovushtirib o‘tirmoq"],
        ["бить баклуши", "bit baklushi", "bekorchilik qilmoq"],
        ["ни рыба ни мясо", "ni riba ni myasa", "na u, na bu (rangsiz odam)"],
        ["как две капли воды", "kak dve kapli vadi", "olmaning ikki pallasidek"],
        ["душа в душу", "dusha v dushu", "ahil-inoq (yashamoq)"],
        ["без задних ног", "biz zadnix nok", "qattiq (uxlamoq), o‘likdek"],
        ["с ног на голову", "s nok na golavu", "teskari, ostin-ustun"]
      ]
    },
    {
      theme: "San’at", icon: "🎨", words: [
        ["произведение", "praizvideniye", "asar"],
        ["шедевр", "shidevr", "durdona asar"],
        ["творчество", "tvorchistva", "ijod"],
        ["творческий", "tvorchiskiy", "ijodiy"],
        ["сочинять", "sachinyat", "ijod qilmoq, to‘qimoq"],
        ["сочинение", "sachineniye", "insho; asar"],
        ["вдохновлять", "vdaxnavlyat", "ilhomlantirmoq"],
        ["скульптура", "skulptura", "haykal"],
        ["экспонат", "ekspanat", "eksponat"],
        ["мелодия", "milodiya", "kuy"],
        ["исполнитель", "ispalnitil", "ijrochi"],
        ["гастроли", "gastroli", "gastrol, safardagi konsertlar"],
        ["аншлаг", "anshlak", "zal to‘la"],
        ["овации", "avatsii", "olqishlar"]
      ]
    },
    {
      theme: "Sport", icon: "⚽", words: [
        ["болеть за", "balet za", "…ga muxlislik qilmoq"],
        ["забить гол", "zabit gol", "gol urmoq"],
        ["пропустить гол", "prapustit gol", "gol o‘tkazib yubormoq"],
        ["сравнять счёт", "sravnyat shot", "hisobni tenglashtirmoq"],
        ["вничью", "vnichyu", "durang"],
        ["выйти в финал", "viti f final", "finalga chiqmoq"],
        ["полуфинал", "palufinal", "yarim final"],
        ["турнир", "turnir", "turnir"],
        ["побить рекорд", "pabit rikort", "rekordni yangilamoq"],
        ["разминка", "razminka", "badan qizdirish"],
        ["растяжка", "rastyashka", "cho‘zilish mashqlari"],
        ["пресс", "pres", "qorin mushaklari"],
        ["отжиматься", "atjimatsa", "yerdan qo‘l bilan ko‘tarilmoq (otjimaniye)"],
        ["подтягиваться", "pattyagivatsa", "turnikda tortilmoq"],
        ["приседать", "prisidat", "o‘tirib-turmoq (mashq)"],
        ["фитнес", "fitnes", "fitnes"]
      ]
    },
    {
      theme: "Geografiya", icon: "🗺️", words: [
        ["континент", "kantinent", "qit’a"],
        ["материк", "matirik", "materik, quruqlik"],
        ["полуостров", "paluostraf", "yarimorol"],
        ["пролив", "praliv", "bo‘g‘oz"],
        ["залив", "zaliv", "qo‘ltiq"],
        ["равнина", "ravnina", "tekislik"],
        ["горный хребет", "gorniy xribet", "tog‘ tizmasi"],
        ["водопад", "vadapat", "sharshara"],
        ["вулкан", "vulkan", "vulqon"],
        ["ледник", "lidnik", "muzlik"],
        ["течение", "techeniye", "oqim"],
        ["побережье", "pabirejye", "sohil"],
        ["провинция", "pravintsiya", "viloyat, chekka joy"],
        ["глубинка", "glubinka", "chekka qishloq joylar"],
        ["деревенский", "dirivenskiy", "qishloqcha, qishloqqa oid"]
      ]
    },
    {
      theme: "Joylashuv", icon: "📍", words: [
        ["вдоль", "vdol", "bo‘ylab"],
        ["поперёк", "papiryok", "ko‘ndalangiga"],
        ["наискосок", "naiskasok", "qiyalab, diagonal"],
        ["сбоку", "zboku", "yonida, yon tomondan"],
        ["позади", "pazadi", "orqada"],
        ["вдали", "vdali", "uzoqda"],
        ["вблизи", "vblizi", "yaqinda (joy)"],
        ["неподалёку", "nipadalyoku", "yaqin atrofda"],
        ["поблизости", "pablizasti", "yaqin orada (joy)"],
        ["по краям", "pa krayam", "chetlarida"],
        ["вверх ногами", "vverx nagami", "teskari (oyog‘i osmondan)"],
        ["задом наперёд", "zadam napiryot", "orqa tomoni oldinga"],
        ["наизнанку", "naiznanku", "teskari (ichi tashqariga)"]
      ]
    }
  ]
});
