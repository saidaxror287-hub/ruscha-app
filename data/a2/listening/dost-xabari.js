Ruscha.addListening({
  id: "a2-l-dost-xabari",
  title: "Do‘stdan ovozli xabar",
  icon: "🎤",
  about: "Bahodir do‘sti Azizga ovozli xabar yubordi.",
  lines: [
    ["Привет, Азиз! Это Баходир. Ты не берёшь трубку, поэтому записываю голосовое.", "Privet, Aziz! Eta Baxadir. Ti ne biryosh trupku, paetamu zapisivayu galasavoye.", "Salom, Aziz! Bu Bahodir. Telefonni olmayapsan, shuning uchun ovozli xabar yozyapman."],
    ["В субботу у моего сына день рождения, ему исполняется пять лет.", "F subotu u mayevo sina den rajdeniya, yemu ispalnyayetsa pyat let.", "Shanba kuni o‘g‘limning tug‘ilgan kuni, u besh yoshga to‘lyapti."],
    ["Мы хотим отметить его в кафе «Радуга» на проспекте Мира.", "Mi xatim atmetit yevo f kafe «Raduga» na praspekte Mira.", "Uni Mira prospektidagi «Raduga» kafesida nishonlamoqchimiz."],
    ["Начало в четыре часа, но приходи пораньше, если можешь.", "Nachala f chitire chisa, no prixadi paranshe, yesli mojish.", "Boshlanishi soat to‘rtda, lekin iloji bo‘lsa, ertaroq kel."],
    ["Мне нужна помощь: надо надуть шарики и украсить зал.", "Mne nujna pomash: nada nadut shariki i ukrasit zal.", "Yordaming kerak: sharlarni puflash va zalni bezash kerak."],
    ["Бери с собой жену и детей, будет весело.", "Biri s saboy jinu i ditey, budit vesila.", "Xotining va bolalaringni ham olib kel, qiziqarli bo‘ladi."],
    ["Подарок покупать не обязательно, но сын больше всего любит машинки.", "Padarak pakupat ne abizatelna, no sin bolshe fsivo lyubit mashinki.", "Sovg‘a olish shart emas, lekin o‘g‘lim eng ko‘p mashinachalarni yaxshi ko‘radi."],
    ["Кафе находится рядом с метро, у второго выхода.", "Kafe naxoditsa ryadam s mitro, u ftarova vixada.", "Kafe metro yonida, ikkinchi chiqish oldida."],
    ["Перезвони мне вечером или напиши, придёшь ты или нет.", "Pirizvani mne vecheram ili napishi, pridyosh ti ili net.", "Kechqurun qo‘ng‘iroq qil yoki kelasanmi-yo‘qmi, yozib yubor."],
    ["Ну всё, жду ответа. Пока!", "Nu fsyo, jdu atveta. Paka!", "Xo‘p, javobingni kutaman. Xayr!"]
  ],
  questions: [
    { q: "Bahodirning o‘g‘li necha yoshga to‘lyapti?", options: ["Uch", "Besh", "Yetti"], answer: 1, line: 1 },
    { q: "Tug‘ilgan kun qayerda nishonlanadi?", options: ["Uyda", "Parkda", "Kafeda"], answer: 2, line: 2 },
    { q: "Bahodir Azizdan qanday yordam so‘rayapti?", options: ["Ovqat pishirishni", "Sharlarni puflash va zalni bezashni", "Mashinada olib kelishni"], answer: 1, line: 4 },
    { q: "Bahodirning o‘g‘li nimani yaxshi ko‘radi?", options: ["Mashinachalarni", "Kitoblarni", "To‘pni"], answer: 0, line: 6 }
  ]
});
