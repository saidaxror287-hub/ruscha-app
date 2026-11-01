Ruscha.addListening({
  id: "b1-l-piter-sayohat",
  title: "Peterburgga sayohat",
  icon: "🌉",
  about: "Anvar Sankt-Peterburgga qilgan sayohati haqida do‘stiga gapirib beradi.",
  lines: [
    ["— Анвар, привет! Ты куда пропал? Тебя целую неделю не было видно.", "— Anvar, privet! Ti kuda prapal? Tibya tseluyu nidelyu ne bila vidna.", "— Anvar, salom! Qayerda yo‘qolding? Bir haftadan beri ko‘rinmading."],
    ["— Привет, Костя! Я ездил с женой в Санкт-Петербург. Мы давно мечтали там побывать.", "— Privet, Kostya! Ya yezdil z jinoy f Sankt-Pitirburk. Mi davno michtali tam pabivat.", "— Salom, Kostya! Xotinim bilan Sankt-Peterburgga bordim. U yerda bo‘lishni anchadan beri orzu qilardik."],
    ["— Здорово! Как добирались?", "— Zdorava! Kak dabiralis?", "— Zo‘r! Qanday bordinglar?"],
    ["— На скоростном поезде «Сапсан». Всего четыре часа, и очень удобно.", "— Na skarasnom poyezde «Sapsan». Fsivo chetiri chisa, i ochen udobna.", "— «Sapsan» tezyurar poyezdida. Bor-yo‘g‘i to‘rt soat va juda qulay."],
    ["— А где жили?", "— A gde jili?", "— Qayerda yashadinglar?"],
    ["— Сняли квартиру в центре через приложение. Это оказалось дешевле, чем гостиница.", "— Snyali kvartiru f tsentre cheris prilajeniye. Eta akazalas dishevle, chem gastinitsa.", "— Ilova orqali markazdan kvartira ijaraga oldik. Bu mehmonxonadan arzonroq bo‘lib chiqdi."],
    ["— Что успели посмотреть?", "— Shto uspeli pasmatret?", "— Nimalarni ko‘rishga ulgurdinglar?"],
    ["— Много всего! Эрмитаж, Петропавловскую крепость, Исаакиевский собор.", "— Mnoga fsivo! Ermitash, Pitrapavlafskuyu krepast, Isaakiyefskiy sabor.", "— Juda ko‘p narsa! Ermitaj, Petropavlovsk qal’asi, Isaakiy sobori."],
    ["— В Эрмитаже мы провели целый день и всё равно увидели только малую часть.", "— V Ermitaje mi pravili tseliy den i fsyo ravno uvideli tolka maluyu chast.", "— Ermitajda butun kunni o‘tkazdik, baribir faqat kichik qismini ko‘rdik."],
    ["— А белые ночи застали?", "— A beliye nochi zastali?", "— Oq tunlarga to‘g‘ri keldinglarmi?"],
    ["— Да! В час ночи было светло, как вечером. Мы гуляли по набережной и смотрели, как разводят мосты.", "— Da! F chas nochi bila svetla, kak vecheram. Mi gulyali pa naberejnay i smatreli, kak razvodyat masti.", "— Ha! Tungi soat birda kechqurundek yorug‘ edi. Sohil bo‘ylab sayr qildik va ko‘priklar qanday ochilishini tomosha qildik."],
    ["— Вот это я тебе завидую! А погода как?", "— Vot eta ya tibe zaviduyu! A pagoda kak?", "— Mana bunga havasim keldi! Ob-havo qanday edi?"],
    ["— Погода, честно говоря, подвела. Почти каждый день шёл дождь.", "— Pagoda, chesna gavarya, padvila. Pachti kajdiy den shol dosht.", "— Ob-havo, rostini aytsam, pand berdi. Deyarli har kuni yomg‘ir yog‘di."],
    ["— Ну, это же Питер. Там всегда так.", "— Nu, eta je Piter. Tam fsigda tak.", "— Xo‘sh, bu Piter-da. U yerda doim shunday."],
    ["— Да, местные смеются: если нет дождя, значит, скоро будет.", "— Da, mesniye smiyutsa: yesli net dajdya, znachit, skora budit.", "— Ha, mahalliylar kulishadi: yomg‘ir bo‘lmasa, demak, tez orada bo‘ladi."],
    ["— А что больше всего понравилось?", "— A shto bolshe fsivo panravilas?", "— Eng ko‘p nima yoqdi?"],
    ["— Наверное, прогулка на катере по каналам. Город с воды выглядит совсем по-другому.", "— Naverna, pragulka na katire pa kanalam. Gorat s vadi viglyadit safsem pa-drugomu.", "— Menimcha, kanallar bo‘ylab katerda sayr. Shahar suvdan butunlay boshqacha ko‘rinadi."],
    ["— А жена что говорит?", "— A jina shto gavarit?", "— Xotining nima deydi?"],
    ["— Ей больше всего понравились музеи и фонтаны в Петергофе. Она уже хочет поехать снова.", "— Yey bolshe fsivo panravilis muzei i fantani f Pitirgofe. Ana uje xochit payexat snova.", "— Unga eng ko‘p muzeylar va Petergofdagi favvoralar yoqdi. U allaqachon yana borishni xohlayapti."],
    ["— Обязательно покажешь фотографии!", "— Abizatelna pakajish fatagrafii!", "— Albatta suratlarni ko‘rsatasan!"]
  ],
  questions: [
    { q: "Anvar Peterburgga qanday bordi?", options: ["Samolyotda", "Tezyurar poyezdda", "Mashinada"], answer: 1, line: 3 },
    { q: "Nega ular kvartira ijaraga olishdi?", options: ["Mehmonxonadan arzonroq edi", "Mehmonxonalar band edi", "Do‘stlari taklif qildi"], answer: 0, line: 5 },
    { q: "Ermitajda qancha vaqt o‘tkazishdi?", options: ["Ikki soat", "Yarim kun", "Butun kun"], answer: 2, line: 8 },
    { q: "Ob-havo qanday edi?", options: ["Issiq va quyoshli", "Deyarli har kuni yomg‘ir", "Qor yog‘di"], answer: 1, line: 12 },
    { q: "Anvarga eng ko‘p nima yoqdi?", options: ["Kanallarda katerda sayr", "Petergofdagi favvoralar", "Restoranlar"], answer: 0, line: 16 }
  ]
});
