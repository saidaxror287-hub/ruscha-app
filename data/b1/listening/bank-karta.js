Ruscha.addListening({
  id: "b1-l-bank-karta",
  title: "Karta bloklandi",
  icon: "💳",
  about: "Madinaning bank kartasi bloklandi. U bankning qo‘llab-quvvatlash xizmatiga qo‘ng‘iroq qiladi.",
  lines: [
    ["— Служба поддержки банка, меня зовут Игорь. Слушаю вас.", "— Slujba paddershki banka, minya zavut Igar. Slushayu vas.", "— Bankning qo‘llab-quvvatlash xizmati, ismim Igor. Eshitaman."],
    ["— Добрый день. У меня проблема: сегодня утром заблокировали мою карту.", "— Dobriy den. U minya prablema: sivodnya utram zablakiravali mayu kartu.", "— Xayrli kun. Muammom bor: bugun ertalab kartamni bloklab qo‘yishdi."],
    ["— Назовите, пожалуйста, ваше имя и дату рождения.", "— Nazavite, pajalusta, vashe imya i datu rajdeniya.", "— Iltimos, ismingiz va tug‘ilgan sanangizni ayting."],
    ["— Мадина Каримова, двенадцатое мая девяносто второго года.", "— Madina Karimava, dvinatsataye maya divyanosta ftarova goda.", "— Madina Karimova, 1992-yil 12-may."],
    ["— Спасибо. Я вижу, что карта заблокирована из-за подозрительной операции.", "— Spasiba. Ya vizhu, shto karta zablakiravana iz-za padazritilnay aperatsii.", "— Rahmat. Karta shubhali operatsiya tufayli bloklanganini ko‘ryapman."],
    ["— Какой операции? Я ничего не покупала.", "— Kakoy aperatsii? Ya nichivo ne pakupala.", "— Qanday operatsiya? Men hech narsa sotib olmadim."],
    ["— Ночью кто-то пытался оплатить покупку в интернет-магазине на пятнадцать тысяч рублей.", "— Nochyu kto-ta pitalsa aplatit pakupku v internet-magazine na pitnatsat tisich rubley.", "— Kechasi kimdir internet-do‘konda o‘n besh ming rubllik xaridni to‘lashga urinibdi."],
    ["— Ужас! Деньги списали?", "— Ujas! Dengi spisali?", "— Dahshat! Pul yechib olindimi?"],
    ["— Нет, не волнуйтесь. Система остановила платёж, деньги на месте.", "— Net, ne valnuytis. Sistema astanavila platyosh, dengi na meste.", "— Yo‘q, xavotir olmang. Tizim to‘lovni to‘xtatdi, pul joyida."],
    ["— Слава богу. Вчера мне звонил какой-то человек и спрашивал код из сообщения.", "— Slava bogu. Fchira mne zvanil kakoy-ta chilavek i sprashival kot is saapsheniya.", "— Xudoga shukur. Kecha menga allaqanday odam qo‘ng‘iroq qilib, xabardagi kodni so‘ragan edi."],
    ["— Вы ему сказали код?", "— Vi yimu skazali kot?", "— Unga kodni aytdingizmi?"],
    ["— Да, к сожалению. Он сказал, что он сотрудник банка.", "— Da, k sajaleniyu. On skazal, shto on satrudnik banka.", "— Ha, afsuski. U o‘zini bank xodimi deb aytdi."],
    ["— Запомните: сотрудники банка никогда не спрашивают коды и пароли.", "— Zapomnite: satrudniki banka nikagda ne sprashivayut kodi i paroli.", "— Esda tuting: bank xodimlari hech qachon kod va parollarni so‘ramaydi."],
    ["— Теперь буду знать. Что мне делать с картой?", "— Tipyer budu znat. Shto mne delat s kartay?", "— Endi bilaman. Karta bilan nima qilay?"],
    ["— Эту карту мы закроем и выпустим новую. Это бесплатно.", "— Etu kartu mi zakroyem i vipustim novuyu. Eta bisplatna.", "— Bu kartani yopamiz va yangisini chiqaramiz. Bu bepul."],
    ["— А когда она будет готова?", "— A kagda ana budit gatova?", "— U qachon tayyor bo‘ladi?"],
    ["— Через пять рабочих дней. Забрать её можно в любом отделении.", "— Cheris pyat rabochix dney. Zabrat yeyo mojna v lyubom atdelenii.", "— Besh ish kunidan keyin. Uni istalgan bo‘limdan olish mumkin."],
    ["— А до этого как мне платить?", "— A da etava kak mne platit?", "— Unga qadar qanday to‘layman?"],
    ["— Можете пользоваться виртуальной картой в приложении, она уже работает.", "— Mojite polzavatsa virtualnay kartay f prilajenii, ana uje rabotayet.", "— Ilovadagi virtual kartadan foydalanishingiz mumkin, u allaqachon ishlayapti."],
    ["— Отлично, спасибо вам большое за помощь!", "— Atlichna, spasiba vam balshoye za pomash!", "— Zo‘r, yordamingiz uchun katta rahmat!"]
  ],
  questions: [
    { q: "Karta nima uchun bloklandi?", options: ["Pul tugagani uchun", "Shubhali operatsiya tufayli", "Muddati o‘tgani uchun"], answer: 1, line: 4 },
    { q: "Kimdir qancha pul to‘lashga urindi?", options: ["5 ming rubl", "50 ming rubl", "15 ming rubl"], answer: 2, line: 6 },
    { q: "Madina kecha qanday xato qildi?", options: ["Notanish odamga kodni aytdi", "Kartani yo‘qotdi", "Parolni unutdi"], answer: 0, line: 11 },
    { q: "Yangi karta qachon tayyor bo‘ladi?", options: ["Ertaga", "Besh ish kunidan keyin", "Bir oydan keyin"], answer: 1, line: 16 },
    { q: "Hozircha Madina qanday to‘lashi mumkin?", options: ["Faqat naqd pul bilan", "Eriga to‘latib", "Ilovadagi virtual karta bilan"], answer: 2, line: 18 }
  ]
});
