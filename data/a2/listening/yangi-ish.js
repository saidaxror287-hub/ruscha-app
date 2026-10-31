/*
  Listening text format:
    lines:     [[Russian, pronunciation in Uzbek Latin, meaning in Uzbek Latin], ...]
    questions: { q: question in Uzbek, options: [...], answer: number of the right option (0 = first), line: number of the line with the answer (0 = first) }
*/
Ruscha.addListening({
  id: "a2-l-yangi-ish",
  title: "Yangi ish",
  icon: "💼",
  about: "Farhod yangi ishi haqida gapirib beradi.",
  lines: [
    ["Меня зовут Фарход, мне тридцать лет.", "Minya zavut Farxod, mne tritsat let.", "Mening ismim Farhod, o‘ttiz yoshdaman."],
    ["Я приехал в Россию два года назад.", "Ya priyexal v Rasiyu dva goda nazat.", "Rossiyaga ikki yil oldin kelganman."],
    ["Сначала я работал на стройке, но там было очень тяжело.", "Snachala ya rabotal na stroyke, no tam bila ochen tijilo.", "Avval qurilishda ishladim, lekin u yerda juda og‘ir edi."],
    ["Месяц назад я нашёл новую работу в магазине.", "Mesits nazat ya nashol novuyu rabotu v magazine.", "Bir oy oldin do‘konda yangi ish topdim."],
    ["Теперь я продавец в отделе фруктов и овощей.", "Tiper ya pradavets v atdele fruktaf i avashey.", "Endi meva-sabzavot bo‘limida sotuvchiman."],
    ["Я работаю пять дней в неделю, с девяти до шести.", "Ya rabotayu pyat dney v nidelyu, z divyati da shesti.", "Haftada besh kun, to‘qqizdan oltigacha ishlayman."],
    ["Зарплата небольшая, но работа с оформлением.", "Zarplata nibalshaya, no rabota s afarmleniyem.", "Maosh katta emas, lekin ish rasmiy."],
    ["Коллеги хорошие, начальник вежливый.", "Kalegi xaroshiye, nachalnik vejliviy.", "Hamkasblar yaxshi, boshliq xushmuomala."],
    ["Каждый день я говорю с покупателями, и мой русский становится лучше.", "Kajdiy den ya gavaryu s pakupatilyami, i moy ruskiy stanovitsa lutshe.", "Har kuni xaridorlar bilan gaplashaman, rus tilim yaxshilanyapti."],
    ["Через год я хочу стать старшим продавцом.", "Cheris got ya xachu stat starshim pradavtsom.", "Bir yildan keyin katta sotuvchi bo‘lmoqchiman."]
  ],
  questions: [
    { q: "Farhod Rossiyaga qachon kelgan?", options: ["Ikki yil oldin", "Bir oy oldin", "O‘n yil oldin"], answer: 0, line: 1 },
    { q: "Nega u qurilishdagi ishni tashladi?", options: ["Maosh berishmadi", "U yerda juda og‘ir edi", "Uyidan uzoq edi"], answer: 1, line: 2 },
    { q: "Hozir u qayerda ishlaydi?", options: ["Kafeda", "Omborda", "Do‘konda, meva-sabzavot bo‘limida"], answer: 2, line: 4 },
    { q: "U haftada necha kun ishlaydi?", options: ["Besh kun", "Olti kun", "Uch kun"], answer: 0, line: 5 }
  ]
});
