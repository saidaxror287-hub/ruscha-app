Ruscha.addTopic({
  id: "kasb-taksi",
  section: "kasblar",
  title: "Haydovchi / Taksi",
  icon: "🚕",
  templates: [
    { ru: "Поедем через ...?", pr: "Payedim chiriz ...?", uz: "... orqali boramizmi?", ex: ["Поедем через центр?", "Поедем через мост?"] },
    { ru: "Здесь нельзя ...", pr: "Zdes nilzya ...", uz: "Bu yerda ... mumkin emas", ex: ["Здесь нельзя останавливаться.", "Здесь нельзя парковаться."] },
    { ru: "Поездка стоит ...", pr: "Payestka stoit ...", uz: "Yo‘l haqi ...", ex: ["Поездка стоит пятьсот рублей.", "Поездка стоит тысячу рублей."] }
  ],
  phrases: [
    { ru: "Здравствуйте! Вы заказывали такси?", pr: "Zdrastvuyte! Vi zakazivali taksi?", uz: "Assalomu alaykum! Taksi chaqirganmisiz?", sit: "Mijozni kutib turgan joyingizga bir kishi yaqinlashdi." },
    { ru: "Я подъехал, белая машина.", pr: "Ya padyexal, belaya mashina.", uz: "Yetib keldim, oq mashina. (ayol aytsa: «Я подъехала, белая машина»)", sit: "Mijozning manziliga yetib keldingiz, unga qo‘ng‘iroq qilasiz." },
    { ru: "Я жду вас у подъезда.", pr: "Ya jdu vas u padyezda.", uz: "Sizni podyezd oldida kutyapman." },
    { ru: "Назовите, пожалуйста, адрес.", pr: "Nazavite, pajalusta, adres.", uz: "Iltimos, manzilni ayting." },
    { ru: "Пристегнитесь, пожалуйста.", pr: "Pristignites, pajalusta.", uz: "Iltimos, kamarni taqing.", sit: "Yo‘lovchi mashinaga o‘tirdi, lekin kamar taqmadi." },
    { ru: "Поедем через центр?", pr: "Payedim chiriz tsentr?", uz: "Markaz orqali boramizmi?" },
    { ru: "Поедем через мост?", pr: "Payedim chiriz most?", uz: "Ko‘prik orqali boramizmi?" },
    { ru: "Там большая пробка.", pr: "Tam balshaya probka.", uz: "U yerda katta tirbandlik bor.", sit: "Navigator yo‘lda qizil chiziq ko‘rsatyapti." },
    { ru: "Я поеду в объезд.", pr: "Ya payedu v abyest.", uz: "Aylanib o‘tib boraman." },
    { ru: "Ехать примерно двадцать минут.", pr: "Yexat primerna dvatsat minut.", uz: "Taxminan yigirma daqiqa yuramiz." },
    { ru: "Здесь нельзя останавливаться.", pr: "Zdes nilzya astanavlivatsa.", uz: "Bu yerda to‘xtash mumkin emas.", sit: "Yo‘lovchi chorrahaning o‘rtasida to‘xtashni so‘radi." },
    { ru: "Здесь нельзя парковаться.", pr: "Zdes nilzya parkavatsa.", uz: "Bu yerda mashina qo‘yish mumkin emas." },
    { ru: "Остановлю чуть дальше.", pr: "Astanavlyu chut dalshe.", uz: "Sal narida to‘xtataman." },
    { ru: "Где вас высадить?", pr: "Gde vas visadit?", uz: "Sizni qayerda tushiray?", sit: "Manzilga yaqinlashdingiz, yo‘lovchi qayerda tushishini bilmoqchisiz." },
    { ru: "Поездка стоит пятьсот рублей.", pr: "Payestka stoit pitsot rubley.", uz: "Yo‘l haqi besh yuz rubl." },
    { ru: "Поездка стоит тысячу рублей.", pr: "Payestka stoit tisichu rubley.", uz: "Yo‘l haqi ming rubl." },
    { ru: "Оплата по приложению.", pr: "Aplata pa prilajeniyu.", uz: "To‘lov ilova orqali." },
    { ru: "Можно переводом?", pr: "Mojna pirivodam?", uz: "O‘tkazma orqali bo‘ladimi?" },
    { ru: "Багажник открыт.", pr: "Bagajnik atkrit.", uz: "Yukxona ochiq.", sit: "Yo‘lovchining katta chamadoni bor." },
    { ru: "Не забудьте вещи.", pr: "Ne zabutte veshi.", uz: "Narsalaringizni unutmang.", sit: "Manzilga yetdingiz, yo‘lovchi tushyapti." },
    { ru: "Можно включить кондиционер?", pr: "Mojna fklyuchit kanditsianer?", uz: "Konditsionerni yoqsa bo‘ladimi? (yo‘lovchi so‘raydi)" },
    { ru: "Сделать музыку тише?", pr: "Zdelat muziku tishe?", uz: "Musiqani pasaytiraymi?" },
    { ru: "Вас подождать?", pr: "Vas padajdat?", uz: "Sizni kutib turaymi?" },
    { ru: "Ожидание платное.", pr: "Ajidaniye platnaye.", uz: "Kutish pullik." },
    { ru: "Документы на машину, пожалуйста.", pr: "Dakumenti na mashinu, pajalusta.", uz: "Mashina hujjatlarini ko‘rsating. (yo‘l politsiyasi aytadi)" },
    { ru: "Вот права и техпаспорт.", pr: "Vot prava i texpaspart.", uz: "Mana haydovchilik guvohnomasi va texpasport.", sit: "Yo‘l politsiyasi mashinangizni to‘xtatdi va hujjat so‘radi." },
    { ru: "Я не превышал скорость.", pr: "Ya ne privishal skorast.", uz: "Tezlikni oshirmadim. (ayol aytsa: «Я не превышала скорость»)" },
    { ru: "У меня спустило колесо.", pr: "U minya spustila kaliso.", uz: "G‘ildiragimning dami chiqib qoldi.", sit: "Yo‘lda mashina bir tomonga torta boshladi." },
    { ru: "Нужно заправиться.", pr: "Nujna zapravitsa.", uz: "Yoqilg‘i quyish kerak." },
    { ru: "Хорошей дороги!", pr: "Xaroshey darogi!", uz: "Yo‘lingiz bexatar bo‘lsin!" }
  ],
  dialogues: [
    {
      title: "Aeroportga",
      a: "Haydovchi",
      b: "Yo‘lovchi",
      lines: [
        ["a", "Здравствуйте! Вы заказывали такси?", "Zdrastvuyte! Vi zakazivali taksi?", "Assalomu alaykum! Taksi chaqirganmisiz?"],
        ["b", "Да. В аэропорт, пожалуйста.", "Da. V aeraport, pajalusta.", "Ha. Aeroportga, iltimos."],
        ["a", "Пристегнитесь, пожалуйста. Поедем через центр?", "Pristignites, pajalusta. Payedim chiriz tsentr?", "Iltimos, kamarni taqing. Markaz orqali boramizmi?"],
        ["b", "А там нет пробок?", "A tam net probak?", "U yerda tirbandlik yo‘qmi?"],
        ["a", "Там большая пробка. Я поеду в объезд.", "Tam balshaya probka. Ya payedu v abyest.", "U yerda katta tirbandlik bor. Aylanib o‘tib boraman."],
        ["b", "Хорошо. Сколько ехать?", "Xarasho. Skolka yexat?", "Yaxshi. Qancha yuramiz?"],
        ["a", "Примерно сорок минут.", "Primerna sorak minut.", "Taxminan qirq daqiqa."]
      ]
    },
    {
      title: "Yo‘l politsiyasi",
      a: "Inspektor",
      b: "Anvar",
      lines: [
        ["a", "Здравствуйте! Документы на машину, пожалуйста.", "Zdrastvuyte! Dakumenti na mashinu, pajalusta.", "Assalomu alaykum! Mashina hujjatlarini ko‘rsating."],
        ["b", "Вот права и техпаспорт.", "Vot prava i texpaspart.", "Mana haydovchilik guvohnomasi va texpasport."],
        ["a", "Вы превысили скорость.", "Vi privisili skorast.", "Siz tezlikni oshirdingiz."],
        ["b", "Я не превышал скорость. Здесь можно шестьдесят.", "Ya ne privishal skorast. Zdes mojna shizdisyat.", "Tezlikni oshirmadim. Bu yerda oltmish mumkin."],
        ["a", "Здесь сорок. Вот знак.", "Zdes sorak. Vot znak.", "Bu yerda qirq. Mana belgi."],
        ["b", "Извините, я не заметил.", "Izvinite, ya ne zametil.", "Kechirasiz, sezmabman."]
      ]
    }
  ]
});
