Ruscha.addTopic({
  id: "yol-sorash",
  title: "Yo‘l so‘rash",
  icon: "🧭",
  templates: [
    { ru: "Как пройти к ...?", pr: "Kak praiti k ...?", uz: "...ga qanday borsa bo‘ladi?", ex: ["Как пройти к метро?", "Как пройти к вокзалу?"] },
    { ru: "Где находится ...?", pr: "Gde naxoditsa ...?", uz: "... qayerda joylashgan?", ex: ["Где находится больница?", "Где находится почта?"] },
    { ru: "Идите ...", pr: "Idite ...", uz: "... yuring", ex: ["Идите прямо.", "Идите до светофора."] }
  ],
  phrases: [
    { ru: "Извините, можно спросить?", pr: "Izvinite, mojna sprasit?", uz: "Kechirasiz, bir narsa so‘rasam bo‘ladimi?", sit: "Ko‘chada notanish odamdan yo‘l so‘ramoqchisiz. Avval muloyim murojaat qilasiz." },
    { ru: "Вы не подскажете, где рынок?", pr: "Vi ne patskajete, gde rinak?", uz: "Ayta olmaysizmi, bozor qayerda?" },
    { ru: "Как пройти к метро?", pr: "Kak praiti k mitro?", uz: "Metroga qanday borsa bo‘ladi?", sit: "Metroga piyoda qanday borishni bilmaysiz." },
    { ru: "Как пройти к вокзалу?", pr: "Kak praiti k vagzalu?", uz: "Vokzalga qanday borsa bo‘ladi?" },
    { ru: "Где находится больница?", pr: "Gde naxoditsa balnitsa?", uz: "Kasalxona qayerda joylashgan?", sit: "Kasalxonani qidiryapsiz." },
    { ru: "Где находится почта?", pr: "Gde naxoditsa pochta?", uz: "Pochta qayerda joylashgan?" },
    { ru: "Я ищу этот адрес.", pr: "Ya ishu etat adris.", uz: "Men shu manzilni qidiryapman.", sit: "Qog‘ozdagi manzilni o‘tkinchiga ko‘rsatasiz." },
    { ru: "Это далеко?", pr: "Eta daliko?", uz: "Bu uzoqmi?", sit: "Joy uzoq yoki yaqinligini bilmoqchisiz." },
    { ru: "Это близко?", pr: "Eta blizka?", uz: "Bu yaqinmi?" },
    { ru: "Можно дойти пешком?", pr: "Mojna dayti pishkom?", uz: "Piyoda borsa bo‘ladimi?", sit: "Taksiga pul sarflamay, piyoda borish mumkinmi — so‘raysiz." },
    { ru: "Сколько минут пешком?", pr: "Skolka minut pishkom?", uz: "Piyoda necha daqiqa?" },
    { ru: "Идите прямо.", pr: "Idite pryama.", uz: "To‘g‘ri yuring." },
    { ru: "Идите до светофора.", pr: "Idite da svitafora.", uz: "Svetoforgacha yuring." },
    { ru: "Потом направо.", pr: "Patom naprava.", uz: "Keyin o‘ngga." },
    { ru: "Потом налево.", pr: "Patom naleva.", uz: "Keyin chapga." },
    { ru: "На углу.", pr: "Na uglu.", uz: "Burchakda." },
    { ru: "За углом.", pr: "Za uglom.", uz: "Burchak ortida." },
    { ru: "Напротив магазина.", pr: "Naprotif magazina.", uz: "Do‘konning qarshisida." },
    { ru: "Рядом с банком.", pr: "Ryadam s bankam.", uz: "Bankning yonida." },
    { ru: "Перейдите улицу.", pr: "Piriydite ulitsu.", uz: "Ko‘chaning narigi tomoniga o‘ting." },
    { ru: "Где здесь подземный переход?", pr: "Gde zdes padzemniy pirixot?", uz: "Bu yerda yer osti o‘tish yo‘li qayerda?", sit: "Katta yo‘lni xavfsiz kesib o‘tmoqchisiz." },
    { ru: "Я заблудился.", pr: "Ya zabludilsya.", uz: "Adashib qoldim. (ayol aytsa: «Я заблудилась»)", sit: "Notanish shaharda yo‘lni topolmay qoldingiz." },
    { ru: "Покажите на карте, пожалуйста.", pr: "Pakajite na karte, pajalusta.", uz: "Iltimos, xaritada ko‘rsating.", sit: "Tushuntirishni tushunmadingiz, telefoningizdagi xaritani uzatasiz." },
    { ru: "Где мы сейчас?", pr: "Gde mi sichas?", uz: "Biz hozir qayerdamiz?", sit: "Xaritada qayerda turganingizni bilmoqchisiz." },
    { ru: "Как называется эта улица?", pr: "Kak nazivayetsa eta ulitsa?", uz: "Bu ko‘chaning nomi nima?", sit: "Do‘stingizga qayerdaligingizni aytish uchun ko‘cha nomini bilmoqchisiz." },
    { ru: "Какой это район?", pr: "Kakoy eta rayon?", uz: "Bu qaysi tuman?" },
    { ru: "Здесь есть аптека рядом?", pr: "Zdes yest apteka ryadam?", uz: "Yaqin atrofda dorixona bormi?", sit: "Yaqin joyda dorixona bor-yo‘qligini so‘raysiz." },
    { ru: "Где ближайший банкомат?", pr: "Gde blijayshiy bankamat?", uz: "Eng yaqin bankomat qayerda?", sit: "Naqd pul yechib olishingiz kerak." },
    { ru: "Я не местный.", pr: "Ya ne mesniy.", uz: "Men bu yerlik emasman. (ayol aytsa: «Я не местная»)", sit: "Sizdan yo‘l so‘rashdi, lekin siz bu joyni bilmaysiz." },
    { ru: "Спасибо за помощь!", pr: "Spasiba za pomash!", uz: "Yordamingiz uchun rahmat!", sit: "O‘tkinchi sizga yo‘lni yaxshilab tushuntirib berdi." }
  ],
  dialogues: [
    {
      title: "Metroga yo‘l",
      a: "Aziz",
      b: "O‘tkinchi",
      lines: [
        ["a", "Извините, можно спросить?", "Izvinite, mojna sprasit?", "Kechirasiz, bir narsa so‘rasam bo‘ladimi?"],
        ["b", "Да, конечно.", "Da, kanyeshna.", "Ha, albatta."],
        ["a", "Как пройти к метро?", "Kak praiti k mitro?", "Metroga qanday borsa bo‘ladi?"],
        ["b", "Идите прямо до светофора, потом налево.", "Idite pryama da svitafora, patom naleva.", "Svetoforgacha to‘g‘ri yuring, keyin chapga."],
        ["a", "Это далеко?", "Eta daliko?", "Bu uzoqmi?"],
        ["b", "Нет, пять минут пешком.", "Net, pyat minut pishkom.", "Yo‘q, piyoda besh daqiqa."]
      ]
    },
    {
      title: "Adashib qoldim",
      a: "Gulnora",
      b: "Svetlana",
      lines: [
        ["a", "Извините, я заблудилась. Где мы сейчас?", "Izvinite, ya zabludilas. Gde mi sichas?", "Kechirasiz, adashib qoldim. Biz hozir qayerdamiz?"],
        ["b", "На улице Ленина. Что вы ищете?", "Na ulitse Lenina. Shto vi ishite?", "Lenin ko‘chasida. Nimani qidiryapsiz?"],
        ["a", "Я ищу этот адрес.", "Ya ishu etat adris.", "Shu manzilni qidiryapman."],
        ["b", "Это рядом. Перейдите улицу, дом за углом.", "Eta ryadam. Piriydite ulitsu, dom za uglom.", "Bu yaqin. Ko‘chaning narigi tomoniga o‘ting, uy burchak ortida."],
        ["a", "Покажите на карте, пожалуйста.", "Pakajite na karte, pajalusta.", "Iltimos, xaritada ko‘rsating."],
        ["b", "Вот здесь. Видите?", "Vot zdes. Vidite?", "Mana shu yerda. Ko‘ryapsizmi?"]
      ]
    }
  ]
});
