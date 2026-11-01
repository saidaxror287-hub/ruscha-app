Ruscha.addListening({
  id: "b1-l-kvartira-korish",
  title: "Kvartirani ko‘rish",
  icon: "🏠",
  about: "Jamshid va Nigora ijaraga kvartira ko‘rgani kelishdi. Uy egasi bilan suhbat.",
  lines: [
    ["— Проходите, пожалуйста. Вот квартира: две комнаты, кухня, ванная и балкон.", "— Praxadite, pajalusta. Vot kvartira: dve komnati, kuxnya, vannaya i balkon.", "— Marhamat, kiring. Mana kvartira: ikki xona, oshxona, vannaxona va balkon."],
    ["— Какая светлая! А окна куда выходят?", "— Kakaya svetlaya! A okna kuda vixodyat?", "— Qanday yorug‘! Derazalar qayoqqa qaragan?"],
    ["— Во двор, поэтому здесь очень тихо. Рядом школа и детский сад.", "— Va dvor, paetamu zdes ochen tixa. Ryadam shkola i detskiy sat.", "— Hovliga, shuning uchun bu yerda juda tinch. Yaqinda maktab va bolalar bog‘chasi bor."],
    ["— Это для нас важно, у нас двое детей. А мебель остаётся?", "— Eta dlya nas vajna, u nas dvoye ditey. A mebil astayotsa?", "— Bu biz uchun muhim, ikki farzandimiz bor. Mebel qoladimi?"],
    ["— Да, вся мебель и техника: холодильник, стиральная машина, плита.", "— Da, fsya mebil i texnika: xaladilnik, stiralnaya mashina, plita.", "— Ha, barcha mebel va texnika: muzlatkich, kir yuvish mashinasi, plita."],
    ["— Сколько стоит аренда в месяц?", "— Skolka stoit arenda v mesits?", "— Oylik ijara qancha turadi?"],
    ["— Сорок пять тысяч плюс коммунальные услуги. Зимой это примерно ещё шесть тысяч.", "— Sorak pyat tisich plyus kamunalniye uslugi. Zimoy eta primerna yishyo shest tisich.", "— Qirq besh ming, bundan tashqari kommunal xizmatlar. Qishda bu taxminan yana olti ming."],
    ["— А залог нужен?", "— A zalok nujin?", "— Garov puli kerakmi?"],
    ["— Да, залог в размере месячной оплаты. Если всё будет в порядке, я верну его, когда вы будете съезжать.", "— Da, zalok v razmere mesichnay aplati. Yesli fsyo budit f paryatke, ya virnu yevo, kagda vi budite syezjat.", "— Ha, bir oylik to‘lov miqdorida garov. Hammasi joyida bo‘lsa, ko‘chib ketayotganingizda uni qaytaraman."],
    ["— Понятно. А можно платить не за два месяца сразу, а по частям?", "— Panyatna. A mojna platit ne za dva mesitsa srazu, a pa chastyam?", "— Tushunarli. Ikki oylik pulni birdaniga emas, qismlarga bo‘lib to‘lasa bo‘ladimi?"],
    ["— Можно, залог отдадите в течение месяца.", "— Mojna, zalok atdadite f techeniye mesitsa.", "— Bo‘ladi, garovni bir oy ichida berasiz."],
    ["— Ой, а что с краном на кухне? Он течёт.", "— Oy, a shto s kranam na kuxne? On tichyot.", "— Voy, oshxonadagi jo‘mrakka nima bo‘lgan? Undan suv oqyapti."],
    ["— Да, я знаю. Сантехник придёт в среду и всё починит за мой счёт.", "— Da, ya znayu. Santexnik pridyot f sredu i fsyo pachinit za moy shchyot.", "— Ha, bilaman. Santexnik chorshanba kuni kelib, hammasini mening hisobimdan tuzatadi."],
    ["— Хорошо. А вы сделаете нам регистрацию?", "— Xarasho. A vi zdelayete nam rigistratsiyu?", "— Yaxshi. Bizni ro‘yxatdan o‘tkazasizmi?"],
    ["— Конечно, всё будет официально. Мы подпишем договор на одиннадцать месяцев.", "— Kaneshna, fsyo budit afitsialna. Mi padpishem dagavor na adinatsat mesitsef.", "— Albatta, hammasi rasmiy bo‘ladi. O‘n bir oyga shartnoma imzolaymiz."],
    ["— А домашних животных можно? У детей есть кошка.", "— A damashnix jivotnix mojna? U ditey yest koshka.", "— Uy hayvonlariga ruxsat bormi? Bolalarning mushugi bor."],
    ["— Кошку можно, только если она не будет портить мебель.", "— Koshku mojna, tolka yesli ana ne budit portit mebil.", "— Mushukka ruxsat, faqat mebelni buzmasa bo‘ldi."],
    ["— Нигора, что скажешь? По-моему, нам подходит.", "— Nigora, shto skajish? Pa-moyimu, nam padxodit.", "— Nigora, nima deysan? Menimcha, bizga to‘g‘ri keladi."],
    ["— Мне тоже нравится. Давайте подпишем договор в субботу.", "— Mne toje nravitsa. Davayte padpishem dagavor f subotu.", "— Menga ham yoqdi. Shartnomani shanba kuni imzolaylik."],
    ["— Договорились! Приходите в субботу к десяти, я подготовлю документы.", "— Dagavarilis! Prixadite f subotu k disyati, ya padgatovlyu dakumenti.", "— Kelishdik! Shanba kuni soat o‘nga keling, hujjatlarni tayyorlab qo‘yaman."]
  ],
  questions: [
    { q: "Nega bu kvartira oila uchun qulay?", options: ["Metroga yaqin", "Yaqinda maktab va bog‘cha bor", "Juda arzon"], answer: 1, line: 2 },
    { q: "Oylik ijara qancha?", options: ["45 ming va kommunal xizmatlar", "40 ming, hammasi kiritilgan", "51 ming"], answer: 0, line: 6 },
    { q: "Oshxonada qanday muammo bor?", options: ["Plita ishlamaydi", "Deraza singan", "Jo‘mrakdan suv oqyapti"], answer: 2, line: 11 },
    { q: "Shartnoma qancha muddatga tuziladi?", options: ["Bir yilga", "O‘n bir oyga", "Olti oyga"], answer: 1, line: 14 },
    { q: "Mushuk haqida uy egasi nima dedi?", options: ["Mebelni buzmasa, mumkin", "Aslo mumkin emas", "Qo‘shimcha pul to‘lash kerak"], answer: 0, line: 16 }
  ]
});
