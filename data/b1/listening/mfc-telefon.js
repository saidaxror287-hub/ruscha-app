Ruscha.addListening({
  id: "b1-l-mfc-telefon",
  title: "MFTsga qo‘ng‘iroq",
  icon: "☎️",
  about: "Rustam ro‘yxatdan o‘tishni uzaytirish uchun hujjatlar markaziga (MFTs) qo‘ng‘iroq qiladi.",
  lines: [
    ["— Многофункциональный центр, оператор Елена, здравствуйте. Чем могу помочь?", "— Mnogafunktsionalniy tsentr, aperatar Yelena, zdrastvuyte. Chem magu pamoch?", "— Ko‘p funksiyali markaz, operator Yelena, assalomu alaykum. Qanday yordam bera olaman?"],
    ["— Здравствуйте. Меня зовут Рустам. Я хотел бы узнать, как продлить регистрацию.", "— Zdrastvuyte. Minya zavut Rustam. Ya xatel bi uznat, kak pradlit rigistratsiyu.", "— Assalomu alaykum. Ismim Rustam. Ro‘yxatdan o‘tishni qanday uzaytirishni bilmoqchi edim."],
    ["— Вы гражданин Узбекистана? У вас есть патент?", "— Vi grajdanin Uzbikistana? U vas yest patent?", "— Siz O‘zbekiston fuqarosimisiz? Patentingiz bormi?"],
    ["— Да, патент есть, я оплачиваю его каждый месяц.", "— Da, patent yest, ya aplachivayu yevo kajdiy mesits.", "— Ha, patent bor, uni har oy to‘layman."],
    ["— Хорошо. Тогда вам нужно прийти вместе с хозяином квартиры.", "— Xarasho. Tagda vam nujna priyti vmeste s xazyainam kvartiri.", "— Yaxshi. Unda uy egasi bilan birga kelishingiz kerak."],
    ["— А без него нельзя? Он сейчас живёт за городом.", "— A biz nivo nilzya? On sichas jivyot za garadam.", "— Usiz bo‘lmaydimi? U hozir shahar tashqarisida yashaydi."],
    ["— К сожалению, нельзя. Собственник должен лично подписать заявление.", "— K sajaleniyu, nilzya. Sopstvinnik doljen lichna padpisat zayavleniye.", "— Afsuski, bo‘lmaydi. Mulk egasi arizani shaxsan imzolashi kerak."],
    ["— Понятно. Какие документы нужно принести?", "— Panyatna. Kakiye dakumenti nujna prinisti?", "— Tushunarli. Qanday hujjatlarni olib kelish kerak?"],
    ["— Ваш паспорт, миграционную карту, патент и чеки об оплате.", "— Vash paspart, migratsionnuyu kartu, patent i cheki ab aplate.", "— Pasportingiz, migratsiya kartangiz, patent va to‘lov cheklari."],
    ["— А хозяину что нужно взять?", "— A xazyainu shto nujna vzyat?", "— Uy egasi nimani olishi kerak?"],
    ["— Паспорт и документ, который подтверждает право собственности на квартиру.", "— Paspart i dakument, katoriy padtverjdayet prava sopstvinnasti na kvartiru.", "— Pasport va kvartiraga egalik huquqini tasdiqlovchi hujjat."],
    ["— Нужно ли записываться заранее?", "— Nujna li zapisivatsa zarani?", "— Oldindan yozilish kerakmi?"],
    ["— Да, обязательно. Могу записать вас прямо сейчас. Какой день вам удобен?", "— Da, abizatelna. Magu zapisat vas pryama sichas. Kakoy den vam udobin?", "— Ha, albatta. Sizni hozirning o‘zida yozib qo‘yishim mumkin. Qaysi kun sizga qulay?"],
    ["— Лучше в субботу, в будни я работаю до восьми.", "— Luchshe f subotu, v budni ya rabotayu da vasmi.", "— Shanba kuni yaxshiroq, ish kunlari sakkizgacha ishlayman."],
    ["— В субботу есть свободное время в одиннадцать тридцать.", "— F subotu yest svabodnaye vremya v adinatsat tritsat.", "— Shanba kuni soat o‘n biru o‘ttizda bo‘sh vaqt bor."],
    ["— Отлично, подходит. Сколько стоит услуга?", "— Atlichna, padxodit. Skolka stoit usluga?", "— Zo‘r, to‘g‘ri keladi. Xizmat qancha turadi?"],
    ["— Для иностранных граждан это бесплатно.", "— Dlya inastrannix grajdan eta bisplatna.", "— Chet el fuqarolari uchun bu bepul."],
    ["— Спасибо большое! А сколько времени займёт оформление?", "— Spasiba balshoye! A skolka vremini zaymyot afarmleniye?", "— Katta rahmat! Rasmiylashtirish qancha vaqt oladi?"],
    ["— Обычно три рабочих дня. Вам придёт сообщение на телефон.", "— Abichna tri rabochix dnya. Vam pridyot saapsheniye na tilifon.", "— Odatda uch ish kuni. Telefoningizga xabar keladi."],
    ["— Понял. До свидания!", "— Ponyal. Da svidaniya!", "— Tushundim. Xayr!"]
  ],
  questions: [
    { q: "Rustam nima uchun qo‘ng‘iroq qildi?", options: ["Patent olish uchun", "Ro‘yxatdan o‘tishni uzaytirish uchun", "Kvartira topish uchun"], answer: 1, line: 1 },
    { q: "Nega uy egasi kelishi shart?", options: ["U arizani shaxsan imzolashi kerak", "U pul to‘lashi kerak", "U tarjimon bo‘lishi kerak"], answer: 0, line: 6 },
    { q: "Rustam qachon boradi?", options: ["Dushanba kuni soat 8 da", "Shanba kuni soat 11:30 da", "Yakshanba kuni soat 10 da"], answer: 1, line: 14 },
    { q: "Xizmat qancha turadi?", options: ["Bepul", "Ming rubl", "Besh yuz rubl"], answer: 0, line: 16 },
    { q: "Rasmiylashtirish odatda qancha vaqt oladi?", options: ["Bir kun", "Bir hafta", "Uch ish kuni"], answer: 2, line: 18 }
  ]
});
