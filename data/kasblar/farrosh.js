Ruscha.addTopic({
  id: "kasb-farrosh",
  section: "kasblar",
  title: "Farrosh",
  icon: "🧹",
  templates: [
    { ru: "Помой ...", pr: "Pamoy ...", uz: "...ni yuv", ex: ["Помой пол.", "Помой окна."] },
    { ru: "Протри ...", pr: "Pratri ...", uz: "...ni art", ex: ["Протри стол.", "Протри зеркало.", "Протри пыль."] },
    { ru: "Где взять ...?", pr: "Gde vzyat ...?", uz: "...ni qayerdan olsa bo‘ladi?", ex: ["Где взять ведро?", "Где взять моющее средство?"] }
  ],
  phrases: [
    { ru: "Помой пол.", pr: "Pamoy pol.", uz: "Polni yuv." },
    { ru: "Помой окна.", pr: "Pamoy okna.", uz: "Derazalarni yuv." },
    { ru: "Протри стол.", pr: "Pratri stol.", uz: "Stolni art." },
    { ru: "Протри зеркало.", pr: "Pratri zerkala.", uz: "Ko‘zguni art." },
    { ru: "Протри пыль.", pr: "Pratri pil.", uz: "Changni art." },
    { ru: "Пропылесось ковёр.", pr: "Prapilisos kavyor.", uz: "Gilamni changyutgich bilan tozala." },
    { ru: "Вынеси мусор.", pr: "Vinisi musar.", uz: "Axlatni chiqarib tashla." },
    { ru: "Где взять ведро?", pr: "Gde vzyat vidro?", uz: "Chelakni qayerdan olsa bo‘ladi?", sit: "Polni yuvishingiz kerak, lekin chelak topolmayapsiz." },
    { ru: "Где взять моющее средство?", pr: "Gde vzyat moyusheye sretstva?", uz: "Yuvish vositasini qayerdan olsa bo‘ladi?" },
    { ru: "Где можно набрать воду?", pr: "Gde mojna nabrat vadu?", uz: "Suvni qayerdan olsa bo‘ladi?", sit: "Chelakni suvga to‘ldirishingiz kerak." },
    { ru: "Закончились мешки для мусора.", pr: "Zakonchilis mishki dlya musara.", uz: "Axlat qoplari tugadi.", sit: "Axlatni yig‘moqchisiz, lekin qop qolmagan." },
    { ru: "Нужны новые перчатки.", pr: "Nujni noviye pirchatki.", uz: "Yangi qo‘lqop kerak.", sit: "Qo‘lqopingiz yirtilib qoldi." },
    { ru: "Осторожно, мокрый пол!", pr: "Astarojna, mokriy pol!", uz: "Ehtiyot bo‘ling, pol ho‘l!", sit: "Hozirgina yo‘lakni yuvdingiz, odamlar o‘tyapti." },
    { ru: "Поставь табличку.", pr: "Pastaf tablichku.", uz: "Ogohlantirish belgisini qo‘y." },
    { ru: "Начни с туалетов.", pr: "Nachni s tualetaf.", uz: "Hojatxonalardan boshla." },
    { ru: "Здесь плохо убрано.", pr: "Zdes ploxa ubrana.", uz: "Bu yer yomon tozalangan. (boshliq aytadi)" },
    { ru: "Переделай, пожалуйста.", pr: "Piridelay, pajalusta.", uz: "Iltimos, qaytadan qil." },
    { ru: "Я уже убрал этот этаж.", pr: "Ya uje ubral etat etash.", uz: "Bu qavatni allaqachon tozaladim. (ayol aytsa: «Я уже убрала этот этаж»)", sit: "Boshliq sizni tozalangan qavatga yana yubormoqchi." },
    { ru: "Какой этаж убирать?", pr: "Kakoy etash ubirat?", uz: "Qaysi qavatni tozalay?", sit: "Ishga keldingiz, bugun qayerni tozalashni bilmaysiz." },
    { ru: "Уборка!", pr: "Uborka!", uz: "Tozalash! (eshikni taqillatganda aytiladi)" },
    { ru: "Можно убрать в номере?", pr: "Mojna ubrat v nomire?", uz: "Xonani tozalasam bo‘ladimi?", sit: "Mehmonxonada xona eshigini taqillatdingiz, ichkarida mehmon bor." },
    { ru: "Зайду позже.", pr: "Zaydu pozje.", uz: "Keyinroq kiraman." },
    { ru: "Поменяй полотенца и постельное бельё.", pr: "Paminyay palatentsa i pastelnaye bilyo.", uz: "Sochiq va choyshablarni almashtir." },
    { ru: "Вещи гостей не трогай.", pr: "Veshi gastey ne trogay.", uz: "Mehmonlarning narsalariga tegma." },
    { ru: "Я нашёл телефон в номере.", pr: "Ya nashol tilefon v nomire.", uz: "Xonadan telefon topib oldim. (ayol aytsa: «Я нашла телефон в номере»)", sit: "Tozalayotib karavot ostidan birovning telefonini topdingiz." },
    { ru: "Отнеси на ресепшен.", pr: "Atnisi na risepshin.", uz: "Qabulxonaga olib bor." },
    { ru: "Не смешивай средства.", pr: "Ne smeshivay sretstva.", uz: "Tozalash vositalarini aralashtirma." },
    { ru: "Пылесос не включается.", pr: "Pilisos ne fklyuchayetsa.", uz: "Changyutgich yoqilmayapti.", sit: "Changyutgichni rozetkaga uladingiz, lekin u ishlamayapti." },
    { ru: "Уберите, пожалуйста, вещи с пола.", pr: "Uberite, pajalusta, veshi s pola.", uz: "Iltimos, narsalarni poldan oling.", sit: "Ofisda polni yuvmoqchisiz, lekin polda qutilar turibdi." },
    { ru: "Убираем каждый день в шесть утра.", pr: "Ubirayem kajdiy den f shest utra.", uz: "Har kuni ertalab soat oltida tozalaymiz." }
  ],
  dialogues: [
    {
      title: "Mehmonxonada",
      a: "Farrosh",
      b: "Mehmon",
      lines: [
        ["a", "Уборка! Можно убрать в номере?", "Uborka! Mojna ubrat v nomire?", "Tozalash! Xonani tozalasam bo‘ladimi?"],
        ["b", "Сейчас нет, я работаю.", "Sichas net, ya rabotayu.", "Hozir yo‘q, ishlayapman."],
        ["a", "Хорошо, зайду позже.", "Xarasho, zaydu pozje.", "Yaxshi, keyinroq kiraman."],
        ["b", "Поменяйте, пожалуйста, полотенца.", "Paminyayte, pajalusta, palatentsa.", "Iltimos, sochiqlarni almashtiring."],
        ["a", "Конечно. Что-нибудь ещё?", "Kanyeshna. Shto-nibud yishyo?", "Albatta. Yana biror narsa kerakmi?"],
        ["b", "Нет, спасибо.", "Net, spasiba.", "Yo‘q, rahmat."]
      ]
    },
    {
      title: "Boshliq tekshiruvi",
      a: "Boshliq",
      b: "Dilnoza",
      lines: [
        ["a", "Дилноза, здесь плохо убрано. Переделай, пожалуйста.", "Dilnoza, zdes ploxa ubrana. Piridelay, pajalusta.", "Dilnoza, bu yer yomon tozalangan. Iltimos, qaytadan qil."],
        ["b", "Извините, пылесос не включается.", "Izvinite, pilisos ne fklyuchayetsa.", "Kechirasiz, changyutgich yoqilmayapti."],
        ["a", "Возьми другой на втором этаже.", "Vazmi drugoy na ftarom etaje.", "Ikkinchi qavatdagi boshqasini ol."],
        ["b", "Хорошо. А первый этаж я уже убрала.", "Xarasho. A perviy etash ya uje ubrala.", "Xo‘p. Birinchi qavatni esa allaqachon tozaladim."],
        ["a", "Молодец! Потом вынеси мусор.", "Maladets! Patom vinisi musar.", "Barakalla! Keyin axlatni chiqarib tashla."],
        ["b", "Ладно.", "Ladna.", "Mayli."]
      ]
    }
  ]
});
