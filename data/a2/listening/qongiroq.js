Ruscha.addListening({
  id: "a2-l-qongiroq",
  title: "Ovozli xabar",
  icon: "📞",
  about: "Rustamning telefoniga kompaniyadan ovozli xabar qoldirishdi.",
  lines: [
    ["Здравствуйте! Это сообщение для Рустама Каримова.", "Zdrastvuyte! Eta sabsheniye dlya Rustama Karimava.", "Assalomu alaykum! Bu xabar Rustam Karimov uchun."],
    ["Вам звонит Ольга из отдела кадров компании «Стройсервис».", "Vam zvanit Olga iz atdela kadraf kampanii «Stroyservis».", "Sizga «Stroyservis» kompaniyasining kadrlar bo‘limidan Olga qo‘ng‘iroq qilyapti."],
    ["Мы посмотрели ваше резюме, и оно нам понравилось.", "Mi pasmatreli vashe rezyume, i ano nam panravilas.", "Rezyumengizni ko‘rib chiqdik, u bizga yoqdi."],
    ["Приглашаем вас на собеседование в четверг, в одиннадцать часов.", "Priglashayem vas na sabesedavaniye f chitverk, v adinatsat chisof.", "Sizni payshanba kuni soat o‘n birda suhbatga taklif qilamiz."],
    ["Наш адрес: улица Мира, дом двадцать, третий этаж, офис триста пять.", "Nash adres: ulitsa Mira, dom dvatsat, tretiy etash, ofis trista pyat.", "Manzilimiz: Mira ko‘chasi, 20-uy, uchinchi qavat, 305-ofis."],
    ["Возьмите с собой паспорт, патент и медицинскую книжку.", "Vazmite s saboy paspart, patent i miditsinskuyu knijku.", "O‘zingiz bilan pasport, patent va tibbiy daftarchani oling."],
    ["Если в четверг вам неудобно, перезвоните, пожалуйста.", "Yesli f chitverk vam niudobna, pirizvanite, pajalusta.", "Agar payshanba sizga noqulay bo‘lsa, iltimos, qayta qo‘ng‘iroq qiling."],
    ["Мой номер: восемь, девятьсот двадцать пять, сто десять, сорок, ноль два.", "Moy nomir: vosim, divitsot dvatsat pyat, sto desit, sorak, nol dva.", "Raqamim: 8-925-110-40-02."],
    ["Звоните с девяти до пяти, кроме выходных.", "Zvanite z divyati da pyati, krome vixadnix.", "Dam olish kunlaridan tashqari, to‘qqizdan beshgacha qo‘ng‘iroq qiling."],
    ["Спасибо, ждём вас!", "Spasiba, jdyom vas!", "Rahmat, sizni kutamiz!"]
  ],
  questions: [
    { q: "Olga qayerdan qo‘ng‘iroq qilyapti?", options: ["Bankdan", "Kadrlar bo‘limidan", "Poliklinikadan"], answer: 1, line: 1 },
    { q: "Suhbat qachon bo‘ladi?", options: ["Payshanba, soat 11 da", "Juma, soat 10 da", "Dushanba, soat 9 da"], answer: 0, line: 3 },
    { q: "Ofis nechanchi qavatda?", options: ["Ikkinchi", "Uchinchi", "Beshinchi"], answer: 1, line: 4 },
    { q: "Qaysi hujjatlarni olib kelish kerak?", options: ["Diplom va rezyume", "Faqat pasport", "Pasport, patent va tibbiy daftarcha"], answer: 2, line: 5 }
  ]
});
