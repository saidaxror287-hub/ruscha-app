Ruscha.addListening({
  id: "a2-l-maktabdan",
  title: "Maktabdan qo‘ng‘iroq",
  icon: "🏫",
  about: "O‘qituvchi Olimjonga o‘g‘li Samir haqida qo‘ng‘iroq qiladi.",
  lines: [
    ["— Алло, Олимжон? Здравствуйте, это Елена Викторовна, учительница Самира.", "— Alo, Alimjon? Zdrastvuyte, eta Yelena Viktaravna, uchitilnitsa Samira.", "— Allo, Olimjon? Assalomu alaykum, bu Yelena Viktorovna, Samirning o‘qituvchisi."],
    ["— Здравствуйте, Елена Викторовна! Что-то случилось?", "— Zdrastvuyte, Yelena Viktaravna! Shto-ta sluchilas?", "— Assalomu alaykum, Yelena Viktorovna! Biror narsa bo‘ldimi?"],
    ["— Не волнуйтесь, ничего страшного. Самир сегодня упал на физкультуре и ударил колено.", "— Ne valnuytes, nichivo strashnava. Samir sivodnya upal na fiskulture i udaril kaleno.", "— Xavotir olmang, hech qisi yo‘q. Samir bugun jismoniy tarbiya darsida yiqilib, tizzasini urib oldi."],
    ["— Ой! Он в порядке?", "— Oy! On f paryatke?", "— Voy! U yaxshimi?"],
    ["— Да, медсестра его посмотрела, всё нормально. Но лучше забрать его сегодня пораньше.", "— Da, mitsistra yevo pasmatrela, fsyo narmalna. No luchshe zabrat yevo sivodnya paranshe.", "— Ha, hamshira ko‘rdi, hammasi joyida. Lekin bugun uni ertaroq olib ketgan ma’qul."],
    ["— Конечно. Я сейчас на работе, но могу приехать через час.", "— Kaneshna. Ya sichas na rabote, no magu priyexat cheris chas.", "— Albatta. Hozir ishdaman, lekin bir soatdan keyin yetib kela olaman."],
    ["— Хорошо. И ещё: в четверг родительское собрание в шесть вечера.", "— Xarasho. I yishyo: f chitverk raditilskaye sabraniye f shest vechira.", "— Yaxshi. Yana bir gap: payshanba kuni kechki soat oltida ota-onalar majlisi bo‘ladi."],
    ["— Я обязательно приду.", "— Ya abizatelna pridu.", "— Albatta kelaman."],
    ["— Самир очень старается, особенно по математике. Но по русскому языку ему нужна помощь.", "— Samir ochen starayetsa, asobinna pa matimatike. No pa ruskamu yaziku yemu nujna pomash.", "— Samir juda harakat qilyapti, ayniqsa matematikadan. Lekin rus tilidan unga yordam kerak."],
    ["— Понятно. Мы будем заниматься дома каждый день.", "— Panyatna. Mi budim zanimatsa doma kajdiy den.", "— Tushunarli. Uyda har kuni shug‘ullanamiz."],
    ["— Отлично! Тогда до встречи в четверг.", "— Atlichna! Tagda da fstrechi f chitverk.", "— Zo‘r! Unda payshanba kuni ko‘rishguncha."]
  ],
  questions: [
    { q: "Samirga nima bo‘ldi?", options: ["Isitmasi chiqdi", "Tizzasini urib oldi", "Telefonini yo‘qotdi"], answer: 1, line: 2 },
    { q: "Olimjon maktabga qachon yetib keladi?", options: ["Darhol", "Kechqurun", "Bir soatdan keyin"], answer: 2, line: 5 },
    { q: "Ota-onalar majlisi qachon?", options: ["Payshanba, soat 18:00 da", "Juma, soat 16:00 da", "Seshanba, soat 18:00 da"], answer: 0, line: 6 },
    { q: "Samirga qaysi fandan yordam kerak?", options: ["Matematikadan", "Rus tilidan", "Jismoniy tarbiyadan"], answer: 1, line: 8 }
  ]
});
