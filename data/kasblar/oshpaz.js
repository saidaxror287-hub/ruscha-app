Ruscha.addTopic({
  id: "kasb-oshpaz",
  section: "kasblar",
  title: "Oshpaz",
  icon: "🍳",
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
