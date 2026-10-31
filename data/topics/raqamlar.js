Ruscha.addTopic({
  id: "raqamlar",
  title: "Raqamlar va vaqt",
  icon: "🕐",
  templates: [
    { ru: "Сейчас ...", pr: "Sichas ...", uz: "Hozir soat ...", ex: ["Сейчас два часа.", "Сейчас пять часов."] },
    { ru: "Я приду через ...", pr: "Ya pridu chiris ...", uz: "...dan keyin kelaman", ex: ["Я приду через час."] },
    { ru: "С ... до ...", pr: "S ... da ...", uz: "...dan ...gacha", ex: ["Я работаю с восьми до шести."] }
  ],
  phrases: [
    { ru: "Один, два, три.", pr: "Adin, dva, tri.", uz: "Bir, ikki, uch." },
    { ru: "Четыре, пять, шесть.", pr: "Chitire, pyat, shest.", uz: "To‘rt, besh, olti." },
    { ru: "Семь, восемь, девять, десять.", pr: "Sem, vosim, devit, desit.", uz: "Yetti, sakkiz, to‘qqiz, o‘n." },
    { ru: "Одиннадцать, двенадцать, пятнадцать.", pr: "Adinatsat, dvinatsat, pitnatsat.", uz: "O‘n bir, o‘n ikki, o‘n besh." },
    { ru: "Двадцать, тридцать, сорок, пятьдесят.", pr: "Dvatsat, tritsat, sorak, pidisyat.", uz: "Yigirma, o‘ttiz, qirq, ellik." },
    { ru: "Сто, двести, пятьсот, тысяча.", pr: "Sto, dvesti, pitsot, tisicha.", uz: "Yuz, ikki yuz, besh yuz, ming." },
    { ru: "Который час?", pr: "Katoriy chas?", uz: "Soat necha bo‘ldi?", sit: "Ko‘chada odamdan soat nechaligini so‘ramoqchisiz." },
    { ru: "Сколько времени?", pr: "Skolka vremeni?", uz: "Soat necha bo‘ldi?" },
    { ru: "Сейчас два часа.", pr: "Sichas dva chasa.", uz: "Hozir soat ikki.", sit: "Sizdan soatni so‘rashdi. Soat 2:00." },
    { ru: "Сейчас пять часов.", pr: "Sichas pyat chasof.", uz: "Hozir soat besh." },
    { ru: "Сейчас половина третьего.", pr: "Sichas palavina tretyiva.", uz: "Hozir soat ikki yarim.", sit: "Sizdan soatni so‘rashdi. Soat 2:30." },
    { ru: "В котором часу?", pr: "F katoram chasu?", uz: "Soat nechada?" },
    { ru: "В девять утра.", pr: "V devit utra.", uz: "Ertalab soat to‘qqizda.", sit: "Sizdan «Soat nechada?» deb so‘rashdi. Javob: ertalab 9:00 da." },
    { ru: "В шесть вечера.", pr: "F shest vechira.", uz: "Kechqurun soat oltida.", sit: "Uchrashuv kechqurun soat 18:00 da ekanini aytasiz." },
    { ru: "Во сколько вы открываетесь?", pr: "Va skolka vi atkrivayetes?", uz: "Soat nechada ochilasizlar?", sit: "Do‘kon ertalab soat nechada ochilishini bilmoqchisiz." },
    { ru: "Во сколько вы закрываетесь?", pr: "Va skolka vi zakrivayetes?", uz: "Soat nechada yopilasizlar?", sit: "Do‘kon kechqurun qachon yopilishini bilmoqchisiz." },
    { ru: "Какой сегодня день?", pr: "Kakoy sivodnya den?", uz: "Bugun qaysi kun?", sit: "Bugun haftaning qaysi kuni ekanini unutib qo‘ydingiz." },
    { ru: "Сегодня понедельник.", pr: "Sivodnya panidelnik.", uz: "Bugun dushanba." },
    { ru: "Какое сегодня число?", pr: "Kakoye sivodnya chisla?", uz: "Bugun nechanchi sana?", sit: "Hujjatga sanani yozishingiz kerak, lekin bugungi sanani bilmaysiz." },
    { ru: "Сегодня первое мая.", pr: "Sivodnya pervaye maya.", uz: "Bugun birinchi may." },
    { ru: "Завтра я работаю.", pr: "Zavtra ya rabotayu.", uz: "Ertaga ishlayman." },
    { ru: "Вчера я отдыхал.", pr: "Fchira ya atdixal.", uz: "Kecha dam oldim. (ayol aytsa: «Вчера я отдыхала»)" },
    { ru: "Приходите в понедельник.", pr: "Prixadite f panidelnik.", uz: "Dushanba kuni keling." },
    { ru: "Я приду через час.", pr: "Ya pridu chiris chas.", uz: "Bir soatdan keyin kelaman.", sit: "Bir soatdan keyin kelishingizni aytmoqchisiz." },
    { ru: "Подождите пять минут.", pr: "Padajdite pyat minut.", uz: "Besh daqiqa kuting.", sit: "Sizni kutishyapti, sizga yana 5 daqiqa kerak." },
    { ru: "Я опаздываю.", pr: "Ya apazdivayu.", uz: "Kechikyapman.", sit: "Uchrashuvga kechikayotganingizni telefonda aytasiz." },
    { ru: "Извините, я опоздал.", pr: "Izvinite, ya apazdal.", uz: "Kechirasiz, kechikib qoldim. (ayol aytsa: «Извините, я опоздала»)", sit: "Ishga kech keldingiz va boshliqdan uzr so‘raysiz." },
    { ru: "Каждый день.", pr: "Kajdiy den.", uz: "Har kuni." },
    { ru: "Я работаю с восьми до шести.", pr: "Ya rabotayu s vasmi da shesti.", uz: "Men soat sakkizdan oltigacha ishlayman.", sit: "Ish vaqtingizni aytasiz: 8:00 dan 18:00 gacha." },
    { ru: "Напишите, пожалуйста, цифрами.", pr: "Napishite, pajalusta, tsiframi.", uz: "Iltimos, raqam bilan yozib bering.", sit: "Sotuvchi narxni aytdi, lekin siz raqamni tushunmadingiz." }
  ],
  dialogues: [
    {
      title: "Do‘kon qachon ochiladi?",
      a: "Xaridor",
      b: "Sotuvchi",
      lines: [
        ["a", "Извините, во сколько вы открываетесь?", "Izvinite, va skolka vi atkrivayetes?", "Kechirasiz, soat nechada ochilasizlar?"],
        ["b", "В девять утра.", "V devit utra.", "Ertalab soat to‘qqizda."],
        ["a", "А во сколько закрываетесь?", "A va skolka zakrivayetes?", "Soat nechada yopilasizlar-chi?"],
        ["b", "В восемь вечера.", "V vosim vechira.", "Kechqurun soat sakkizda."],
        ["a", "А в воскресенье?", "A v vaskrisenye?", "Yakshanba kuni-chi?"],
        ["b", "В воскресенье выходной.", "V vaskrisenye vixadnoy.", "Yakshanba — dam olish kuni."]
      ]
    },
    {
      title: "Kechikyapman",
      a: "Rustam",
      b: "Sardor",
      lines: [
        ["a", "Привет! Ты где?", "Privet! Ti gde?", "Salom! Qayerdasan?"],
        ["b", "Я в пути. Я опаздываю.", "Ya f puti. Ya apazdivayu.", "Yo‘ldaman. Kechikyapman."],
        ["a", "Сколько тебя ждать?", "Skolka tibya jdat?", "Seni qancha kutay?"],
        ["b", "Подожди десять минут.", "Padajdi desit minut.", "O‘n daqiqa kut."],
        ["a", "Хорошо. Сейчас половина седьмого.", "Xarasho. Sichas palavina sidmova.", "Xo‘p. Hozir soat olti yarim."],
        ["b", "Я буду в семь.", "Ya budu f sem.", "Yettida yetib kelaman."]
      ]
    }
  ]
});
