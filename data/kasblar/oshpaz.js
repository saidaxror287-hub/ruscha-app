/*
  Oshpaz — job pack (Kasblar). One part per tab:
    boshlangich = Boshlang‘ich (A1–A2) · orta = O‘rta (B1) · yuqori = Yuqori (B2+).
  A tab without a part is shown as "Tez orada". See README.md → "Add a job pack".
  Never change "id" or a published "ru": saved progress depends on them.
*/
Ruscha.addJob({ id: "kasb-oshpaz", title: "Oshpaz", icon: "🍳" });

/* ==================== Boshlang‘ich (A1–A2) ==================== */
Ruscha.addJobTab("kasb-oshpaz", "boshlangich", {
  templates: [
    { ru: "Нарежь ...", pr: "Narej ...", uz: "...ni to‘g‘ra", ex: ["Нарежь лук.", "Нарежь мясо кубиками.", "Нарежь морковь соломкой."] },
    { ru: "Сколько ...?", pr: "Skolka ...?", uz: "Qancha ...? / Nechta ...?", ex: ["Сколько порций?", "Сколько соли класть?"] },
    { ru: "Нужно ещё ...", pr: "Nujna yishyo ...", uz: "Yana ... kerak", ex: ["Нужно ещё масло.", "Нужно ещё рис."] }
  ],
  phrases: [
    { ru: "Помой руки и надень фартук.", pr: "Pamoy ruki i nadin fartuk.", uz: "Qo‘lingni yuv va fartuk kiy. (bosh oshpaz aytadi)" },
    { ru: "Надень шапочку.", pr: "Nadin shapachku.", uz: "Oshpaz qalpog‘ini kiy." },
    { ru: "Нарежь лук.", pr: "Narej luk.", uz: "Piyozni to‘g‘ra." },
    { ru: "Нарежь мясо кубиками.", pr: "Narej myasa kubikami.", uz: "Go‘shtni kubik qilib to‘g‘ra." },
    { ru: "Нарежь морковь соломкой.", pr: "Narej markof solamkay.", uz: "Sabzini somoncha qilib to‘g‘ra." },
    { ru: "Почисти картошку.", pr: "Pachisti kartoshku.", uz: "Kartoshkani archib qo‘y." },
    { ru: "Помой овощи.", pr: "Pamoy ovashi.", uz: "Sabzavotlarni yuv." },
    { ru: "Включи плиту.", pr: "Fklyuchi plitu.", uz: "Plitani yoq." },
    { ru: "Сколько порций?", pr: "Skolka portsiy?", uz: "Necha porsiya?", sit: "Boshliq ovqat tayyorla dedi, lekin qancha kerakligini aytmadi." },
    { ru: "Сколько соли класть?", pr: "Skolka soli klast?", uz: "Qancha tuz solay?", sit: "Sho‘rva pishiryapsiz, lekin bu oshxonada qancha tuz solinishini bilmaysiz." },
    { ru: "Нужно ещё масло.", pr: "Nujna yishyo masla.", uz: "Yana yog‘ kerak.", sit: "Qozondagi yog‘ kamlik qilyapti." },
    { ru: "Нужно ещё рис.", pr: "Nujna yishyo ris.", uz: "Yana guruch kerak." },
    { ru: "Пусть кипит десять минут.", pr: "Pust kipit desit minut.", uz: "O‘n daqiqa qaynab tursin." },
    { ru: "Убавь огонь.", pr: "Ubaf agon.", uz: "Olovni pasaytir." },
    { ru: "Не пересоли.", pr: "Ne pirisali.", uz: "Sho‘r qilib yuborma." },
    { ru: "Попробуй на соль.", pr: "Paprobuy na sol.", uz: "Tuzini tatib ko‘r." },
    { ru: "Суп готов.", pr: "Sup gatof.", uz: "Sho‘rva tayyor.", sit: "Sho‘rvani pishirib bo‘ldingiz, boshliqqa aytasiz." },
    { ru: "Мясо ещё сырое.", pr: "Myasa yishyo siroye.", uz: "Go‘sht hali xom.", sit: "Boshliq taomni berishni so‘radi, lekin go‘sht pishmagan." },
    { ru: "Осторожно, горячо!", pr: "Astarojna, garyacho!", uz: "Ehtiyot bo‘ling, issiq!", sit: "Qaynoq qozonni ko‘tarib, odamlar orasidan o‘tyapsiz." },
    { ru: "Заказ на третий стол.", pr: "Zakas na tretiy stol.", uz: "Uchinchi stolning buyurtmasi." },
    { ru: "Два плова и один лагман.", pr: "Dva plova i adin lagman.", uz: "Ikkita palov va bitta lag‘mon." },
    { ru: "Когда будет готово?", pr: "Kagda budet gatova?", uz: "Qachon tayyor bo‘ladi? (ofitsiant so‘raydi)" },
    { ru: "Через пять минут отдаю.", pr: "Chiriz pyat minut addayu.", uz: "Besh daqiqada beraman.", sit: "Ofitsiant buyurtma qachon tayyor bo‘lishini so‘radi." },
    { ru: "Положи в холодильник.", pr: "Palaji f xaladilnik.", uz: "Muzlatgichga qo‘y." },
    { ru: "Проверь, продукты свежие?", pr: "Praver, pradukti svejiye?", uz: "Mahsulotlar yangimi, tekshir." },
    { ru: "Это мясо испортилось.", pr: "Eta myasa isportilas.", uz: "Bu go‘sht buzilib qolibdi.", sit: "Muzlatgichdan hidi yomon go‘sht chiqdi." },
    { ru: "Помой посуду.", pr: "Pamoy pasudu.", uz: "Idishlarni yuv." },
    { ru: "Я порезал палец.", pr: "Ya parezal palits.", uz: "Barmog‘imni kesib oldim. (ayol aytsa: «Я порезала палец»)", sit: "Piyoz to‘g‘rayotib pichoq qo‘lingizni kesdi." },
    { ru: "Где аптечка?", pr: "Gde aptechka?", uz: "Dori qutisi qayerda?" },
    { ru: "Кухню закрываем в одиннадцать.", pr: "Kuxnyu zakrivayem v adinatsat.", uz: "Oshxonani soat o‘n birda yopamiz." }
  ],
  dialogues: [
    {
      title: "Ish boshlanishi",
      a: "Bosh oshpaz",
      b: "Oshpaz yordamchisi",
      lines: [
        ["a", "Помой руки и надень фартук. Сегодня много заказов.", "Pamoy ruki i nadin fartuk. Sivodnya mnoga zakazaf.", "Qo‘lingni yuv va fartuk kiy. Bugun buyurtma ko‘p."],
        ["b", "Хорошо. Что мне делать?", "Xarasho. Shto mne delat?", "Xo‘p. Men nima qilay?"],
        ["a", "Нарежь лук и морковь для плова.", "Narej luk i markof dlya plova.", "Palov uchun piyoz va sabzi to‘g‘ra."],
        ["b", "Морковь соломкой?", "Markof solamkay?", "Sabzini somoncha qilibmi?"],
        ["a", "Да. Потом почисти картошку.", "Da. Patom pachisti kartoshku.", "Ha. Keyin kartoshkani archib qo‘y."],
        ["b", "Понял.", "Ponyal.", "Tushundim."]
      ]
    },
    {
      title: "Buyurtma",
      a: "Ofitsiant",
      b: "Oshpaz",
      lines: [
        ["a", "Заказ на третий стол: два плова и один лагман.", "Zakas na tretiy stol: dva plova i adin lagman.", "Uchinchi stolning buyurtmasi: ikkita palov va bitta lag‘mon."],
        ["b", "Плов готов. Лагман через пять минут.", "Plof gatof. Lagman chiriz pyat minut.", "Palov tayyor. Lag‘mon besh daqiqada."],
        ["a", "Гость просит не очень острое.", "Gost prosit ne ochen ostraye.", "Mehmon juda achchiq bo‘lmasin deyapti."],
        ["b", "Хорошо, без перца.", "Xarasho, bes pertsa.", "Xo‘p, qalampirsiz."],
        ["a", "Когда будет готово?", "Kagda budet gatova?", "Qachon tayyor bo‘ladi?"],
        ["b", "Через пять минут отдаю.", "Chiriz pyat minut addayu.", "Besh daqiqada beraman."]
      ]
    }
  ]
});

/* ==================== O‘rta (B1) ==================== */
Ruscha.addJobTab("kasb-oshpaz", "orta", {
  phrases: [
    { ru: "Холодильник сломался, продукты греются.", pr: "Xaladilnik slamalsa, pradukti greyutsa.", uz: "Muzlatgich buzildi, mahsulotlar isib ketyapti.", sit: "Ertalab oshxonaga kelib, muzlatgich ishlamayotganini ko‘rdingiz." },
    { ru: "Мясо привезли несвежее.", pr: "Myasa privizli nisvejeye.", uz: "Olib kelingan go‘sht yangi emas." },
    { ru: "Гость говорит, что суп холодный.", pr: "Gost gavarit, shto sup xalodni.", uz: "Mehmon sho‘rva sovuq deyapti." },
    { ru: "У гостя аллергия на орехи.", pr: "U gostya alergiya na arexi.", uz: "Mehmonning yong‘oqqa allergiyasi bor.", sit: "Ofitsiant buyurtmani olib kelib, mehmon haqida ogohlantirdi." },
    { ru: "Закончился рис, на плов не хватит.", pr: "Zakonchilsa ris, na plof ne xvatit.", uz: "Guruch tugadi, oshga yetmaydi." },
    { ru: "Я сжёг лук, начну заново.", pr: "Ya zjok luk, nachnu zanova.", uz: "Piyozni kuydirib qo‘ydim, boshidan boshlayman. (ayol aytsa: «Я сожгла лук, начну заново»)" },
    { ru: "Шеф, можно добавить это блюдо в меню?", pr: "Shef, mojna dabavit eta blyuda v menyu?", uz: "Shef, bu taomni menyuga qo‘shsa bo‘ladimi?" },
    { ru: "Сколько порций готовить на банкет?", pr: "Skolka portsiy gatovit na banket?", uz: "Banket uchun necha porsiya tayyorlay?" },
    { ru: "Я не успеваю, мне нужен помощник.", pr: "Ya ne uspivayu, mne nujen pamoshnik.", uz: "Ulgurmayapman, menga yordamchi kerak.", sit: "Bir vaqtda o‘nta buyurtma keldi, siz oshxonada yolg‘izsiz." },
    { ru: "Надо заказать продукты на завтра.", pr: "Nada zakazat pradukti na zaftra.", uz: "Ertangi kunga mahsulot buyurtma qilish kerak." },
    { ru: "Я хотел бы поговорить о зарплате.", pr: "Ya xatel bi pagavarit a zarplate.", uz: "Maosh haqida gaplashmoqchi edim. (ayol aytsa: «Я хотела бы поговорить о зарплате»)" },
    { ru: "Сырое мясо режем на красной доске.", pr: "Siroye myasa rejem na krasnay daske.", uz: "Xom go‘shtni qizil taxtada to‘g‘raymiz." },
    { ru: "Ножи не оставляй в раковине.", pr: "Naji ne astavlyay v rakavine.", uz: "Pichoqlarni rakovinada qoldirma." },
    { ru: "Подпиши контейнер и поставь дату.", pr: "Patpishi kanteyner i pastaf datu.", uz: "Konteynerga yozib, sanasini qo‘y." },
    { ru: "Без медицинской книжки работать нельзя.", pr: "Bez miditsinskay knijki rabotat nilzya.", uz: "Tibbiy daftarchasiz ishlash mumkin emas." },
    { ru: "Если что-то горит, выключи газ.", pr: "Yesli shto-ta garit, viklyuchi gas.", uz: "Agar nimadir yonsa, gazni o‘chir." },
    { ru: "Пол скользкий, ходи осторожно.", pr: "Pol skolzki, xadi astarojna.", uz: "Pol sirpanchiq, ehtiyot bo‘lib yur." },
    { ru: "Завтра я выхожу с утра.", pr: "Zaftra ya vixaju s utra.", uz: "Ertaga ertalabdan ishga chiqaman." },
    { ru: "Кухня открывается в десять, приходи в девять.", pr: "Kuxnya atkrivayetsa v desit, prixadi v devit.", uz: "Oshxona soat o‘nda ochiladi, to‘qqizda kel." },
    { ru: "В субботу банкет, работаем до ночи.", pr: "F subotu banket, rabotayem da nochi.", uz: "Shanba kuni banket, tungacha ishlaymiz." }
  ],
  dialogues: [
    {
      title: "Muzlatgich buzildi",
      a: "Oshpaz",
      b: "Shef",
      lines: [
        ["a", "Шеф, у нас проблема: холодильник сломался.", "Shef, u nas prablema: xaladilnik slamalsa.", "Shef, muammo bor: muzlatgich buzildi."],
        ["b", "Давно? Продукты тёплые?", "Davno? Pradukti tyopliye?", "Qachondan beri? Mahsulotlar iliqmi?"],
        ["a", "Не знаю. Утром пришёл, а он уже не работал.", "Ne znayu. Utram prishol, a on uje ne rabotal.", "Bilmayman. Ertalab keldim, u allaqachon ishlamayotgan edi."],
        ["b", "Проверь мясо и рыбу. Если пахнут — выбрасывай.", "Praver myasa i ribu. Yesli paxnut — vibrasivay.", "Go‘sht va baliqni tekshir. Hidi chiqqan bo‘lsa — tashlab yubor."],
        ["a", "Мясо нормальное, а рыба уже плохая.", "Myasa narmalnaye, a riba uje ploxaya.", "Go‘sht yaxshi, baliq esa buzilib qolibdi."],
        ["b", "Рыбу выбрось. Мясо переложи в морозилку.", "Ribu vibras. Myasa pirilaji v marazilku.", "Baliqni tashla. Go‘shtni muzlatish kamerasiga o‘tkaz."],
        ["a", "А что делать с меню? Рыбы сегодня не будет.", "A shto delat s menyu? Ribi sivodnya ne budit.", "Menyu-chi? Bugun baliq bo‘lmaydi."],
        ["b", "Скажи официантам, что рыбы нет. Я позвоню мастеру.", "Skaji afitsiantam, shto ribi net. Ya pazvanyu masteru.", "Ofitsiantlarga baliq yo‘qligini ayt. Men ustaga qo‘ng‘iroq qilaman."],
        ["a", "Хорошо, шеф. И надо заказать продукты на завтра.", "Xarasho, shef. I nada zakazat pradukti na zaftra.", "Xo‘p, shef. Ertangi kunga mahsulot ham buyurtma qilish kerak."]
      ]
    },
    {
      title: "Banketga tayyorgarlik",
      a: "Oshpaz",
      b: "Menejer",
      lines: [
        ["b", "В субботу банкет на шестьдесят человек.", "F subotu banket na shizdisyat chilavek.", "Shanba kuni oltmish kishilik banket bor."],
        ["a", "Что будем готовить?", "Shto budim gatovit?", "Nima tayyorlaymiz?"],
        ["b", "Плов, салаты и шашлык. Сколько тебе нужно помощников?", "Plof, salati i shashlik. Skolka tibe nujna pamoshnikaf?", "Osh, salatlar va shashlik. Senga nechta yordamchi kerak?"],
        ["a", "Двое. Один я не успею.", "Dvoye. Adin ya ne uspeyu.", "Ikkita. Yolg‘iz o‘zim ulgurmayman."],
        ["b", "Хорошо. Начинаем в восемь утра, работаем до ночи.", "Xarasho. Nachinayem v vosim utra, rabotayem da nochi.", "Xo‘p. Ertalab sakkizda boshlaymiz, tungacha ishlaymiz."],
        ["a", "А у гостей есть аллергия?", "A u gastey yest alergiya?", "Mehmonlarda allergiya bormi?"],
        ["b", "У двоих аллергия на орехи. Готовь для них отдельно.", "U dvaix alergiya na arexi. Gatof dlya nix atdelna.", "Ikki kishida yong‘oqqa allergiya bor. Ular uchun alohida tayyorla."],
        ["a", "Понял. Я подпишу их тарелки, чтобы не перепутать.", "Ponil. Ya patpishu ix tarelki, shtobi ne piriputat.", "Tushundim. Adashtirmaslik uchun ularning likopchalarini belgilab qo‘yaman."]
      ]
    }
  ]
});

/* ==================== Yuqori (B2+) ==================== */
/* Tez orada: Ruscha.addJobTab("kasb-oshpaz", "yuqori", { phrases: [...], dialogues: [...] }); */
