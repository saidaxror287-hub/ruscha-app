Ruscha.addTopic({
  id: "transport",
  title: "Transport va taksi",
  icon: "🚕",
  templates: [
    { ru: "Мне нужно на ... / в ...", pr: "Mne nujna na ... / v ...", uz: "Menga ...ga borish kerak", ex: ["Мне нужно на вокзал.", "Мне нужно в аэропорт."] },
    { ru: "Этот автобус идёт до ...?", pr: "Etat aftobus idyot da ...?", uz: "Bu avtobus ...gacha boradimi?", ex: ["Этот автобус идёт до вокзала?"] },
    { ru: "Поверните ...", pr: "Pavirnite ...", uz: "...ga buriling", ex: ["Поверните направо.", "Поверните налево."] }
  ],
  phrases: [
    { ru: "Где остановка автобуса?", pr: "Gde astanofka aftobusa?", uz: "Avtobus bekati qayerda?", sit: "Avtobusga chiqmoqchisiz, lekin bekatni topa olmayapsiz." },
    { ru: "Какой автобус идёт до центра?", pr: "Kakoy aftobus idyot da tsentra?", uz: "Markazga qaysi avtobus boradi?", sit: "Shahar markaziga bormoqchisiz, qaysi avtobusga chiqishni bilmaysiz." },
    { ru: "Этот автобус идёт до вокзала?", pr: "Etat aftobus idyot da vagzala?", uz: "Bu avtobus vokzalgacha boradimi?", sit: "Avtobus keldi. U vokzalga borishini tekshirmoqchisiz." },
    { ru: "Где ближайшее метро?", pr: "Gde blijayshiye mitro?", uz: "Eng yaqin metro qayerda?" },
    { ru: "Сколько стоит проезд?", pr: "Skolka stoit prayezd?", uz: "Yo‘l haqi qancha?", sit: "Avtobusda yo‘l haqi qanchaligini bilmoqchisiz." },
    { ru: "Один билет, пожалуйста.", pr: "Adin bilet, pajalusta.", uz: "Bitta chipta, iltimos.", sit: "Kassada bitta chipta sotib olasiz." },
    { ru: "Где купить билет?", pr: "Gde kupit bilet?", uz: "Chiptani qayerdan olsa bo‘ladi?", sit: "Poyezdga chipta kerak, lekin kassa qayerdaligini bilmaysiz." },
    { ru: "Скажите, где мне выходить?", pr: "Skajite, gde mne vixadit?", uz: "Ayting-chi, men qayerda tushishim kerak?", sit: "Avtobusda ketyapsiz, qaysi bekatda tushishni bilmaysiz." },
    { ru: "Вы выходите на следующей?", pr: "Vi vixadite na sleduyushey?", uz: "Keyingi bekatda tushasizmi?", sit: "Avtobus odamga to‘la. Eshik oldida turgan odam ham tushadimi — so‘raysiz." },
    { ru: "Я выхожу здесь.", pr: "Ya vixaju zdes.", uz: "Men shu yerda tushaman." },
    { ru: "Какая следующая остановка?", pr: "Kakaya sleduyushaya astanofka?", uz: "Keyingi bekat qaysi?" },
    { ru: "Мне нужно на вокзал.", pr: "Mne nujna na vagzal.", uz: "Menga vokzalga borish kerak.", sit: "Taksi haydovchisi «Куда едем?» deb so‘radi. Siz vokzalga borasiz." },
    { ru: "Мне нужно в аэропорт.", pr: "Mne nujna v aeraport.", uz: "Menga aeroportga borish kerak." },
    { ru: "Вызовите, пожалуйста, такси.", pr: "Vizavite, pajalusta, taksi.", uz: "Iltimos, taksi chaqirib bering.", sit: "Mehmonxonada xodimdan taksi chaqirib berishni so‘raysiz." },
    { ru: "Вы свободны?", pr: "Vi svabodni?", uz: "Bo‘shmisiz? (taksichiga)", sit: "Taksi to‘xtab turibdi. Haydovchi bo‘shmi — bilmoqchisiz." },
    { ru: "Отвезите меня по этому адресу.", pr: "Atvizite minya pa etamu adrisu.", uz: "Meni shu manzilga olib boring.", sit: "Haydovchiga telefoningizdagi manzilni ko‘rsatasiz." },
    { ru: "Сколько будет стоить до центра?", pr: "Skolka budit stoit da tsentra?", uz: "Markazgacha qancha bo‘ladi?", sit: "Taksiga o‘tirishdan oldin narxni kelishib olmoqchisiz." },
    { ru: "Сколько ехать?", pr: "Skolka yexat?", uz: "Qancha vaqtda yetib boramiz?", sit: "Yo‘l qancha vaqt olishini bilmoqchisiz." },
    { ru: "Я тороплюсь.", pr: "Ya taraplyus.", uz: "Shoshyapman.", sit: "Haydovchiga vaqtingiz kamligini aytasiz." },
    { ru: "Можно побыстрее?", pr: "Mojna pabistreye?", uz: "Tezroq yursangiz bo‘ladimi?" },
    { ru: "Не так быстро, пожалуйста.", pr: "Ne tak bistra, pajalusta.", uz: "Iltimos, sekinroq haydang.", sit: "Haydovchi juda tez haydayapti, sizga qo‘rqinchli." },
    { ru: "Поверните направо.", pr: "Pavirnite naprava.", uz: "O‘ngga buriling." },
    { ru: "Поверните налево.", pr: "Pavirnite naleva.", uz: "Chapga buriling." },
    { ru: "Прямо, пожалуйста.", pr: "Pryama, pajalusta.", uz: "To‘g‘riga, iltimos." },
    { ru: "Остановите здесь, пожалуйста.", pr: "Astanavite zdes, pajalusta.", uz: "Iltimos, shu yerda to‘xtating.", sit: "Taksida manzilga yetdingiz, haydovchi to‘xtashi kerak." },
    { ru: "Подождите меня здесь, пожалуйста.", pr: "Padajdite minya zdes, pajalusta.", uz: "Iltimos, meni shu yerda kutib turing.", sit: "Do‘konga besh daqiqaga kirib chiqmoqchisiz, taksi kutib tursin." },
    { ru: "Откройте багажник, пожалуйста.", pr: "Atkroyte bagajnik, pajalusta.", uz: "Iltimos, yukxonani oching.", sit: "Sumkangiz mashinaning yukxonasida qoldi." },
    { ru: "Сколько с меня?", pr: "Skolka s minya?", uz: "Mendan qancha?", sit: "Manzilga yetdingiz va haydovchiga qancha to‘lashni so‘raysiz." },
    { ru: "Возьмите, пожалуйста.", pr: "Vazmite, pajalusta.", uz: "Marhamat, oling." },
    { ru: "Я еду на работу.", pr: "Ya yedu na rabotu.", uz: "Ishga ketyapman." }
  ],
  dialogues: [
    {
      title: "Taksida",
      a: "Haydovchi",
      b: "Yo‘lovchi",
      lines: [
        ["a", "Здравствуйте! Куда едем?", "Zdrastvuyte! Kuda yedim?", "Assalomu alaykum! Qayerga boramiz?"],
        ["b", "Мне нужно на вокзал. Сколько будет стоить?", "Mne nujna na vagzal. Skolka budit stoit?", "Vokzalga borishim kerak. Qancha bo‘ladi?"],
        ["a", "Пятьсот рублей.", "Pitsot rubley.", "Besh yuz rubl."],
        ["b", "Хорошо. Я тороплюсь.", "Xarasho. Ya taraplyus.", "Xo‘p. Shoshyapman."],
        ["a", "Не волнуйтесь, успеем.", "Ne valnuytes, uspeyem.", "Xavotir olmang, ulguramiz."],
        ["b", "Остановите здесь, пожалуйста. Вот деньги.", "Astanavite zdes, pajalusta. Vot dengi.", "Iltimos, shu yerda to‘xtating. Mana pul."]
      ]
    },
    {
      title: "Avtobusda",
      a: "Yo‘lovchi",
      b: "Ayol",
      lines: [
        ["a", "Извините, этот автобус идёт до центра?", "Izvinite, etat aftobus idyot da tsentra?", "Kechirasiz, bu avtobus markazgacha boradimi?"],
        ["b", "Да, идёт.", "Da, idyot.", "Ha, boradi."],
        ["a", "Скажите, где мне выходить?", "Skajite, gde mne vixadit?", "Ayting-chi, men qayerda tushishim kerak?"],
        ["b", "Через три остановки.", "Chiris tri astanofki.", "Uch bekatdan keyin."],
        ["a", "Спасибо большое!", "Spasiba balshoye!", "Katta rahmat!"],
        ["b", "Не за что.", "Ne za shta.", "Arzimaydi."]
      ]
    }
  ]
});
