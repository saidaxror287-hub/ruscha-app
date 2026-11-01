Ruscha.addListening({
  id: "a2-l-ustaxona",
  title: "Telefon ustaxonasi",
  icon: "📱",
  about: "Nilufar telefonini ta’mirga bergan servis markaziga qo‘ng‘iroq qiladi.",
  lines: [
    ["— Сервисный центр «Мастер», здравствуйте!", "— Servisniy tsentr «Master», zdrastvuyte!", "— «Master» servis markazi, assalomu alaykum!"],
    ["— Здравствуйте! Меня зовут Нилуфар. На прошлой неделе я сдала вам телефон в ремонт.", "— Zdrastvuyte! Minya zavut Nilufar. Na proshlay nidele ya zdala vam tilifon v rimont.", "— Assalomu alaykum! Ismim Nilufar. O‘tgan hafta sizlarga telefonimni ta’mirga topshirgan edim."],
    ["— Назовите, пожалуйста, номер квитанции.", "— Nazavite, pajalusta, nomir kvitantsii.", "— Iltimos, kvitansiya raqamini ayting."],
    ["— Номер двести сорок семь.", "— Nomir dvesti sorak sem.", "— Raqami ikki yuz qirq yetti."],
    ["— Секунду... Да, вижу. У вас была проблема с экраном и батареей.", "— Sikundu... Da, viju. U vas bila prablema s ekranam i bataryeyey.", "— Bir soniya... Ha, ko‘ryapman. Sizda ekran va batareya bilan muammo bor edi."],
    ["— Да, верно. Телефон уже готов?", "— Da, verna. Tilifon uje gatof?", "— Ha, to‘g‘ri. Telefon tayyor bo‘ldimi?"],
    ["— Экран мы уже поменяли, а батарею привезут только в пятницу.", "— Ekran mi uje pamenyali, a bataryeyu privizut tolka f pyatnitsu.", "— Ekranni almashtirdik, batareyani esa faqat juma kuni olib kelishadi."],
    ["— А сколько будет стоить ремонт?", "— A skolka budit stoit rimont?", "— Ta’mir qancha turadi?"],
    ["— Всего четыре тысячи пятьсот рублей. Гарантия — три месяца.", "— Fsivo chitire tisichi pitsot rubley. Garantiya — tri mesitsa.", "— Hammasi bo‘lib to‘rt ming besh yuz rubl. Kafolat — uch oy."],
    ["— Хорошо. Когда можно забрать телефон?", "— Xarasho. Kagda mojna zabrat tilifon?", "— Yaxshi. Telefonni qachon olib ketsa bo‘ladi?"],
    ["— В субботу после двенадцати. Не забудьте квитанцию и паспорт.", "— F subotu posle dvenatsati. Ne zabutte kvitantsiyu i paspart.", "— Shanba kuni soat o‘n ikkidan keyin. Kvitansiya va pasportni unutmang."],
    ["— Спасибо, до свидания!", "— Spasiba, da svidaniya!", "— Rahmat, xayr!"]
  ],
  questions: [
    { q: "Nilufar telefonni qachon ta’mirga bergan?", options: ["Kecha", "O‘tgan hafta", "O‘tgan oy"], answer: 1, line: 1 },
    { q: "Nima allaqachon almashtirildi?", options: ["Batareya", "Ekran", "Hech narsa"], answer: 1, line: 6 },
    { q: "Ta’mir qancha turadi?", options: ["4500 rubl", "5400 rubl", "450 rubl"], answer: 0, line: 8 },
    { q: "Telefonni qachon olsa bo‘ladi?", options: ["Juma kuni", "Yakshanba kuni", "Shanba kuni, soat 12 dan keyin"], answer: 2, line: 10 }
  ]
});
