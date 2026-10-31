Ruscha.addTopic({
  id: "pochta",
  title: "Pochta",
  icon: "📮",
  templates: [
    { ru: "Я хочу отправить ...", pr: "Ya xachu atpravit ...", uz: "... jo‘natmoqchiman", ex: ["Я хочу отправить посылку.", "Я хочу отправить письмо."] },
    { ru: "Сколько стоит отправить ...?", pr: "Skolka stoit atpravit ...?", uz: "... jo‘natish qancha turadi?", ex: ["Сколько стоит отправить посылку в Узбекистан?", "Сколько стоит отправить письмо?"] },
    { ru: "Сколько идёт ...?", pr: "Skolka idyot ...?", uz: "... qancha vaqtda boradi?", ex: ["Сколько идёт посылка?", "Сколько идёт письмо?"] }
  ],
  phrases: [
    { ru: "Я хочу отправить посылку.", pr: "Ya xachu atpravit pasilku.", uz: "Posilka jo‘natmoqchiman.", sit: "Oilangizga sovg‘a yubormoqchisiz, pochtaga keldingiz." },
    { ru: "Я хочу отправить письмо.", pr: "Ya xachu atpravit pismo.", uz: "Xat jo‘natmoqchiman." },
    { ru: "Сколько стоит отправить посылку в Узбекистан?", pr: "Skolka stoit atpravit pasilku v Uzbikistan?", uz: "O‘zbekistonga posilka jo‘natish qancha turadi?", sit: "Posilka yuborishdan oldin narxini bilmoqchisiz." },
    { ru: "Сколько стоит отправить письмо?", pr: "Skolka stoit atpravit pismo?", uz: "Xat jo‘natish qancha turadi?" },
    { ru: "Сколько идёт посылка?", pr: "Skolka idyot pasilka?", uz: "Posilka qancha vaqtda boradi?" },
    { ru: "Сколько идёт письмо?", pr: "Skolka idyot pismo?", uz: "Xat qancha vaqtda boradi?" },
    { ru: "Мне нужна коробка.", pr: "Mne nujna karopka.", uz: "Menga quti kerak.", sit: "Posilka jo‘natmoqchisiz, lekin narsalaringiz qutiga solinmagan." },
    { ru: "Какой размер коробки?", pr: "Kakoy razmer karopki?", uz: "Quti qanday o‘lchamda?" },
    { ru: "Что внутри?", pr: "Shto vnutri?", uz: "Ichida nima bor? (xodim so‘raydi)" },
    { ru: "Внутри одежда и подарки.", pr: "Vnutri adejda i padarki.", uz: "Ichida kiyim va sovg‘alar bor.", sit: "Pochta xodimi posilkada nima borligini so‘radi." },
    { ru: "Это можно отправлять?", pr: "Eta mojna atpravlyat?", uz: "Buni jo‘natsa bo‘ladimi?" },
    { ru: "Положите посылку на весы.", pr: "Palajite pasilku na visi.", uz: "Posilkani taroziga qo‘ying." },
    { ru: "Заполните бланк.", pr: "Zapolnite blank.", uz: "Blankani to‘ldiring." },
    { ru: "Напишите адрес получателя.", pr: "Napishite adres paluchatelya.", uz: "Oluvchining manzilini yozing." },
    { ru: "Как писать адрес?", pr: "Kak pisat adres?", uz: "Manzilni qanday yozish kerak?", sit: "Blankani to‘ldiryapsiz, manzil qatorini tushunmadingiz." },
    { ru: "Индекс знаете?", pr: "Indeks znayete?", uz: "Pochta indeksini bilasizmi?" },
    { ru: "Напишите «Хрупкое», пожалуйста.", pr: "Napishite «Xrupkaye», pajalusta.", uz: "Iltimos, «Sinuvchan» deb yozing.", sit: "Posilkangiz ichida shisha idish bor." },
    { ru: "Можно застраховать?", pr: "Mojna zastraxavat?", uz: "Sug‘urta qilsa bo‘ladimi?" },
    { ru: "Мне пришло извещение.", pr: "Mne prishlo izvisheniye.", uz: "Menga xabarnoma keldi.", sit: "Pochta qutingizda posilka haqida qog‘oz topdingiz." },
    { ru: "Я хочу получить посылку.", pr: "Ya xachu paluchit pasilku.", uz: "Posilkani olmoqchiman." },
    { ru: "Вот трек-номер.", pr: "Vot trek-nomir.", uz: "Mana trek-raqam." },
    { ru: "Где моя посылка?", pr: "Gde maya pasilka?", uz: "Posilkam qayerda?", sit: "Posilka ikki hafta oldin jo‘natilgan, lekin hali kelmadi." },
    { ru: "Посылка ещё не пришла.", pr: "Pasilka yishyo ne prishla.", uz: "Posilka hali kelmadi." },
    { ru: "Можно отследить посылку?", pr: "Mojna atsledit pasilku?", uz: "Posilkani kuzatsa bo‘ladimi?" },
    { ru: "Сколько хранится посылка?", pr: "Skolka xranitsa pasilka?", uz: "Posilka qancha vaqt saqlanadi?" },
    { ru: "Нужен паспорт?", pr: "Nujen paspart?", uz: "Pasport kerakmi?" },
    { ru: "Распишитесь в получении.", pr: "Raspishites v paluchenii.", uz: "Olganingiz uchun imzo qo‘ying." },
    { ru: "Есть открытки?", pr: "Yest atkritki?", uz: "Otkritkalar bormi?" },
    { ru: "Одну марку, пожалуйста.", pr: "Adnu marku, pajalusta.", uz: "Bitta marka, iltimos." },
    { ru: "Где почтовый ящик?", pr: "Gde pachtoviy yashik?", uz: "Pochta qutisi qayerda?", sit: "Xatni tashlash uchun pochta qutisini qidiryapsiz." }
  ],
  dialogues: [
    {
      title: "Posilka jo‘natish",
      a: "Mijoz",
      b: "Pochta xodimi",
      lines: [
        ["a", "Здравствуйте! Я хочу отправить посылку в Узбекистан.", "Zdrastvuyte! Ya xachu atpravit pasilku v Uzbikistan.", "Assalomu alaykum! O‘zbekistonga posilka jo‘natmoqchiman."],
        ["b", "Что внутри?", "Shto vnutri?", "Ichida nima bor?"],
        ["a", "Внутри одежда и подарки.", "Vnutri adejda i padarki.", "Ichida kiyim va sovg‘alar bor."],
        ["b", "Положите посылку на весы. Пять килограммов. Заполните бланк.", "Palajite pasilku na visi. Pyat kilagramaf. Zapolnite blank.", "Posilkani taroziga qo‘ying. Besh kilo. Blankani to‘ldiring."],
        ["a", "Сколько идёт посылка?", "Skolka idyot pasilka?", "Posilka qancha vaqtda boradi?"],
        ["b", "Две-три недели. С вас три тысячи рублей.", "Dve-tri nideli. S vas tri tisichi rubley.", "Ikki-uch hafta. Uch ming rubl bo‘ladi."]
      ]
    },
    {
      title: "Posilka olish",
      a: "Mijoz",
      b: "Pochta xodimi",
      lines: [
        ["a", "Мне пришло извещение. Я хочу получить посылку.", "Mne prishlo izvisheniye. Ya xachu paluchit pasilku.", "Menga xabarnoma keldi. Posilkani olmoqchiman."],
        ["b", "Ваш паспорт, пожалуйста.", "Vash paspart, pajalusta.", "Pasportingiz, iltimos."],
        ["a", "Вот паспорт и трек-номер.", "Vot paspart i trek-nomir.", "Mana pasport va trek-raqam."],
        ["b", "Подождите минутку. Вот ваша посылка. Распишитесь в получении.", "Padajdite minutku. Vot vasha pasilka. Raspishites v paluchenii.", "Bir daqiqa kuting. Mana posilkangiz. Olganingiz uchun imzo qo‘ying."],
        ["a", "Где расписаться?", "Gde raspisatsa?", "Qayerga imzo qo‘yay?"],
        ["b", "Вот здесь.", "Vot zdes.", "Mana bu yerga."]
      ]
    }
  ]
});
