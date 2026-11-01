/*
  Haydovchi / Taksi — job pack (Kasblar). One part per tab:
    boshlangich = Boshlang‘ich (A1–A2) · orta = O‘rta (B1) · yuqori = Yuqori (B2+).
  A tab without a part is shown as "Tez orada". See README.md → "Add a job pack".
  Never change "id" or a published "ru": saved progress depends on them.
*/
Ruscha.addJob({ id: "kasb-taksi", title: "Haydovchi / Taksi", icon: "🚕" });

/* ==================== Boshlang‘ich (A1–A2) ==================== */
Ruscha.addJobTab("kasb-taksi", "boshlangich", {
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

/* ==================== O‘rta (B1) ==================== */
Ruscha.addJobTab("kasb-taksi", "orta", {
  phrases: [
    { ru: "Машина плохо заводится.", pr: "Mashina ploxa zavoditsa.", uz: "Mashina qiyin o‘t olyapti.", sit: "Ertalab mashinani yurgizmoqchi bo‘ldingiz, lekin motor zo‘rg‘a ishladi." },
    { ru: "Загорелась лампочка двигателя.", pr: "Zagarelas lampachka dvigatilya.", uz: "Dvigatel chirog‘i yonib qoldi." },
    { ru: "Тормоза стали хуже работать.", pr: "Tarmaza stali xuje rabotat.", uz: "Tormozlar yomonroq ishlay boshladi." },
    { ru: "Пассажир отказывается платить.", pr: "Passajir atkazivayetsa platit.", uz: "Yo‘lovchi pul to‘lashdan bosh tortyapti.", sit: "Manzilga yetib keldingiz, yo‘lovchi pul to‘lamay ketmoqchi, dispetcherga qo‘ng‘iroq qilasiz." },
    { ru: "Пассажир забыл в машине сумку.", pr: "Passajir zabil v mashine sumku.", uz: "Yo‘lovchi mashinada sumkasini unutib qoldirdi." },
    { ru: "Навигатор ведёт не туда.", pr: "Navigatar vidyot ne tuda.", uz: "Navigator noto‘g‘ri tomonga olib boryapti." },
    { ru: "Мне нужно поговорить с диспетчером.", pr: "Mne nujna pagavarit s dispetchiram.", uz: "Dispetcher bilan gaplashishim kerak." },
    { ru: "Машину нужно отогнать в сервис.", pr: "Mashinu nujna atagnat f servis.", uz: "Mashinani servisga olib borish kerak." },
    { ru: "Кто будет платить за ремонт?", pr: "Kto budit platit za rimont?", uz: "Ta’mirga kim pul to‘laydi?", sit: "Ijaradagi mashina buzildi, park boshlig‘i bilan gaplashyapsiz." },
    { ru: "Сколько стоит аренда машины в день?", pr: "Skolka stoit arenda mashini v den?", uz: "Mashina ijarasi kuniga qancha turadi?" },
    { ru: "Почему мне снизили рейтинг?", pr: "Pachimu mne snizili reyting?", uz: "Nega reytingimni pasaytirishdi?" },
    { ru: "Пассажир вёл себя грубо.", pr: "Passajir vyol sibya gruba.", uz: "Yo‘lovchi qo‘pol muomala qildi." },
    { ru: "Перед сменой надо пройти медосмотр.", pr: "Peret smenay nada prayti medasmotr.", uz: "Smenadan oldin tibbiy ko‘rikdan o‘tish kerak." },
    { ru: "Больше двенадцати часов работать нельзя.", pr: "Bolshe dvinatsati chisof rabotat nilzya.", uz: "O‘n ikki soatdan ortiq ishlash mumkin emas." },
    { ru: "Я очень устал, мне нужен перерыв.", pr: "Ya ochin ustal, mne nujen piririf.", uz: "Juda charchadim, menga tanaffus kerak. (ayol aytsa: «Я очень устала, мне нужен перерыв»)", sit: "Ketma-ket o‘n soat ishladingiz, ko‘zingiz yumilib ketyapti." },
    { ru: "Зимой надо ставить зимнюю резину.", pr: "Zimoy nada stavit zimnyuyu rizinu.", uz: "Qishda qishki shina qo‘yish kerak." },
    { ru: "Дети должны ехать в детском кресле.", pr: "Deti daljni yexat v detskam kresle.", uz: "Bolalar maxsus bolalar o‘rindig‘ida o‘tirishi kerak." },
    { ru: "На этой неделе у меня ночные смены.", pr: "Na etay nidele u minya nachniye smeni.", uz: "Bu hafta smenalarim tunda." },
    { ru: "Во сколько нужно сдать машину?", pr: "Va skolka nujna sdat mashinu?", uz: "Mashinani soat nechada topshirish kerak?" },
    { ru: "Можно завтра выйти попозже?", pr: "Mojna zaftra viyti papojje?", uz: "Ertaga ishga kechroq chiqsam bo‘ladimi?" }
  ],
  dialogues: [
    {
      title: "Dispetcher bilan",
      a: "Haydovchi",
      b: "Dispetcher",
      lines: [
        ["a", "Алло, это водитель Рустам, машина сорок семь.", "Alo, eta vaditil Rustam, mashina sorak sem.", "Allo, bu haydovchi Rustam, qirq yettinchi mashina."],
        ["b", "Да, Рустам, слушаю.", "Da, Rustam, slushayu.", "Ha, Rustam, eshitaman."],
        ["a", "Загорелась лампочка двигателя, и машина плохо едет.", "Zagarelas lampachka dvigatilya, i mashina ploxa yedit.", "Dvigatel chirog‘i yonib qoldi, mashina yomon yuryapti."],
        ["b", "У вас сейчас есть пассажир?", "U vas sichas yest passajir?", "Hozir yo‘lovchingiz bormi?"],
        ["a", "Нет, я только что высадил пассажира.", "Net, ya tolka shto visadil passajira.", "Yo‘q, hozirgina yo‘lovchini tushirdim."],
        ["b", "Тогда не берите новые заказы. Отгоните машину в сервис.", "Tagda ne berite noviye zakazi. Atganite mashinu f servis.", "Unda yangi buyurtma olmang. Mashinani servisga olib boring."],
        ["a", "А кто будет платить за ремонт?", "A kto budit platit za rimont?", "Ta’mirga kim to‘laydi?"],
        ["b", "Парк заплатит, вы ни в чём не виноваты.", "Park zaplatit, vi ni f chom ne vinavati.", "Park to‘laydi, siz hech narsada aybdor emassiz."],
        ["a", "Понял. А смену мне засчитают?", "Ponil. A smenu mne zashitayut?", "Tushundim. Smena hisobimga yoziladimi?"],
        ["b", "Да, не переживайте. Сообщите, когда будете в сервисе.", "Da, ne pirijivayte. Saapshite, kagda budite f servise.", "Ha, xavotir olmang. Servisga yetganingizda xabar bering."]
      ]
    },
    {
      title: "Ish jadvalini o‘zgartirish",
      a: "Haydovchi",
      b: "Park boshlig‘i",
      lines: [
        ["a", "Здравствуйте. Можно поменять мой график?", "Zdrastvuyte. Mojna paminyat moy grafik?", "Assalomu alaykum. Ish jadvalimni o‘zgartirsa bo‘ladimi?"],
        ["b", "А что случилось?", "A shto sluchilas?", "Nima bo‘ldi?"],
        ["a", "Я работаю в ночную смену уже месяц и очень устаю.", "Ya rabotayu v nachnuyu smenu uje mesits i ochin ustayu.", "Bir oydan beri tungi smenada ishlayapman va juda charchayapman."],
        ["b", "Понимаю. Усталость за рулём — это опасно.", "Panimayu. Ustalast za rulyom — eta apasna.", "Tushunaman. Rul ortida charchoq — bu xavfli."],
        ["a", "Можно мне дневные смены, хотя бы три дня в неделю?", "Mojna mne dnevniye smeni, xatya bi tri dnya v nidelyu?", "Menga kunduzgi smenalar bersangiz bo‘ladimi, hech bo‘lmasa haftada uch kun?"],
        ["b", "Хорошо. С понедельника по среду — днём, с восьми до восьми.", "Xarasho. S panidelnika pa sredu — dnyom, s vasmi da vasmi.", "Xo‘p. Dushanbadan chorshanbagacha — kunduzi, sakkizdan sakkizgacha."],
        ["a", "Спасибо! А медосмотр утром во сколько?", "Spasiba! A medasmotr utram va skolka?", "Rahmat! Ertalab tibbiy ko‘rik soat nechada?"],
        ["b", "В половине восьмого. Не опаздывайте.", "F palavine vasmova. Ne apazdivayte.", "Yetti yarimda. Kechikmang."]
      ]
    }
  ]
});

/* ==================== Yuqori (B2+) ==================== */
Ruscha.addJobTab("kasb-taksi", "yuqori", {
  phrases: [
    { ru: "Комиссия парка выросла, а тарифы остались прежними.", pr: "Kamissiya parka virasla, a tarifi astalis prejnimi.", uz: "Parkning komissiyasi oshdi, tariflar esa o‘sha-o‘shaligicha qoldi." },
    { ru: "За работу в праздники должны платить по двойному тарифу.", pr: "Za rabotu f prazniki daljni platit pa dvaynomu tarifu.", uz: "Bayram kunlari ishlaganga ikki baravar tarif bilan to‘lashlari kerak." },
    { ru: "Мне не доплатили за переработку.", pr: "Mne ne daplatili za pirirabotku.", uz: "Ortiqcha ishlagan soatlarim uchun to‘liq to‘lashmadi.", sit: "Oylik keldi, lekin bayramda ishlagan ortiqcha soatlaringiz hisoblanmagan." },
    { ru: "Прошу показать, из чего складывается сумма удержаний.", pr: "Prashu pakazat, iz chivo skladivayetsa summa udirjaniy.", uz: "Ushlab qolingan summa nimalardan iboratligini ko‘rsatishingizni so‘rayman." },
    { ru: "В договоре аренды не сказано, кто платит за мелкий ремонт.", pr: "V dagavore arendi ne skazana, kto platit za melkiy rimont.", uz: "Ijara shartnomasida mayda ta’mirga kim to‘lashi yozilmagan." },
    { ru: "Я не подпишу договор, пока не прочитаю его полностью.", pr: "Ya ne padpishu dagavor, paka ne prachitayu yivo polnastyu.", uz: "Shartnomani to‘liq o‘qib chiqmagunimcha imzolamayman." },
    { ru: "Штраф за опоздание к клиенту несправедлив, я стоял в пробке.", pr: "Shtraf za apazdaniye k kliyentu nisprividlif, ya stayal f probke.", uz: "Mijozga kechikkanim uchun jarima adolatsiz, men tirbandlikda turgandim. (ayol aytsa: «Штраф за опоздание к клиенту несправедлив, я стояла в пробке»)" },
    { ru: "Пассажир написал на меня жалобу, но всё было не так.", pr: "Passajir napisal na minya jalobu, no fsyo bila ne tak.", uz: "Yo‘lovchi ustimdan shikoyat yozdi, lekin aslida bunday bo‘lmagan." },
    { ru: "У меня есть запись с видеорегистратора.", pr: "U minya yest zapis s videaregistratara.", uz: "Videoregistrator yozuvi menda bor.", sit: "Yo‘lovchi sizni qo‘pol haydadi deb shikoyat qildi, lekin bu yolg‘on." },
    { ru: "Давайте не будем повышать голос и спокойно разберёмся.", pr: "Davayte ne budim pavishat golas i spakoyna razbiryomsa.", uz: "Keling, ovozimizni ko‘tarmaylik va xotirjam hal qilaylik.", sit: "Yo‘lovchi yo‘l haqi qimmat deb baqira boshladi." },
    { ru: "Если вы будете меня оскорблять, я прерву поездку.", pr: "Isli vi budite minya askarblyat, ya prirvu payestku.", uz: "Agar meni haqoratlasangiz, safarni to‘xtataman." },
    { ru: "Я хочу обжаловать блокировку аккаунта.", pr: "Ya xachu abjalavat blakirofku akaunta.", uz: "Akkauntim bloklanganiga e’tiroz bildirmoqchiman.", sit: "Ilova akkauntingizni to‘satdan bloklab qo‘ydi." },
    { ru: "Меня заблокировали без объяснения причин.", pr: "Minya zablakiravali biz abyasneniya prichin.", uz: "Meni hech qanday sabab aytmay bloklab qo‘yishdi." },
    { ru: "Сколько можно заработать, если выходить на линию в выходные?", pr: "Skolka mojna zarabatat, isli vixadit na liniyu v vixadniye?", uz: "Dam olish kunlari liniyaga chiqsam, qancha ishlab topish mumkin?" },
    { ru: "Я работаю у вас три года без единого замечания.", pr: "Ya rabotayu u vas tri goda biz idinava zamichaniya.", uz: "Sizlarda uch yildan beri birorta tanbehsiz ishlayapman." },
    { ru: "Я бы хотел перейти в бизнес-класс.", pr: "Ya bi xatel pirayti v biznes-klas.", uz: "Biznes-klassga o‘tmoqchi edim. (ayol aytsa: «Я бы хотела перейти в бизнес-класс»)", sit: "Park boshlig‘i bilan ishingiz haqida suhbatlashyapsiz." },
    { ru: "Готов взять на себя обучение новых водителей.", pr: "Gatof vzyat na sibya abucheniye novix vaditiley.", uz: "Yangi haydovchilarni o‘qitishni o‘z zimmamga olishga tayyorman. (ayol aytsa: «Готова взять на себя обучение новых водителей»)" },
    { ru: "Я требую вернуть незаконно списанные деньги.", pr: "Ya trebuyu virnut nizakona spisanniye dengi.", uz: "Noqonuniy yechib olingan pulni qaytarishni talab qilaman." },
    { ru: "Иначе я буду вынужден обратиться в трудовую инспекцию.", pr: "Inache ya budu vinujden abratitsa f trudavuyu inspektsiyu.", uz: "Aks holda mehnat inspeksiyasiga murojaat qilishga majbur bo‘laman. (ayol aytsa: «Иначе я буду вынуждена обратиться в трудовую инспекцию»)" },
    { ru: "Пассажир испачкал салон, химчистку должен оплатить он.", pr: "Passajir ispachkal salon, ximchistku dolzhen aplatit on.", uz: "Yo‘lovchi salonni iflos qildi, kimyoviy tozalash pulini u to‘lashi kerak." }
  ],
  dialogues: [
    {
      title: "Ushlab qolingan pul",
      a: "Haydovchi",
      b: "Park boshlig‘i",
      lines: [
        ["a", "Добрый день. Я хотел бы обсудить мою зарплату за октябрь.", "Dobriy den. Ya xatel bi absudit mayu zarplatu za aktyabr.", "Xayrli kun. Oktabr oyligim haqida gaplashmoqchi edim."],
        ["b", "Слушаю. Что-то не так?", "Slushayu. Shto-ta ne tak?", "Eshitaman. Biror narsa noto‘g‘rimi?"],
        ["a", "С меня удержали пять тысяч, и я не понимаю за что.", "S minya udirjali pyat tisich, i ya ne panimayu za shto.", "Mendan besh ming ushlab qolishdi, nima uchunligini tushunmayapman."],
        ["b", "Это штраф за жалобу пассажира и за опоздания к клиентам.", "Eta shtraf za jalobu passajira i za apazdaniya k kliyentam.", "Bu yo‘lovchining shikoyati va mijozlarga kechikkaningiz uchun jarima."],
        ["a", "Жалоба несправедливая. У меня есть запись с видеорегистратора.", "Jaloba nisprividlivaya. U minya yest zapis s videaregistratara.", "Shikoyat adolatsiz. Videoregistrator yozuvi menda bor."],
        ["b", "Хорошо, пришлите запись, мы её посмотрим.", "Xarasho, prishlite zapis, mi yeyo pasmotrim.", "Yaxshi, yozuvni yuboring, ko‘rib chiqamiz."],
        ["a", "А опоздания были из-за аварии на мосту. Это видно по треку поездки.", "A apazdaniya bili iz-za avarii na mastu. Eta vidna pa treku payestki.", "Kechikishlar esa ko‘prikdagi avariya tufayli bo‘lgan. Bu safar marshrutida ko‘rinib turibdi."],
        ["b", "Если это подтвердится, штраф отменим.", "Isli eta padtverditsa, shtraf atmenim.", "Agar bu tasdiqlansa, jarimani bekor qilamiz."],
        ["a", "И ещё: в праздники я работал по двенадцать часов, а доплаты нет.", "I yisho: f prazniki ya rabotal pa dvinatsat chisof, a daplati net.", "Yana bir gap: bayramda o‘n ikki soatdan ishladim, lekin qo‘shimcha haq yo‘q."],
        ["b", "По договору за праздничные смены вам положена доплата пятьдесят процентов.", "Pa dagavoru za prazdnichniye smeni vam palojena daplata pidisyat protsentaf.", "Shartnoma bo‘yicha bayram smenalari uchun sizga ellik foiz qo‘shimcha haq tegishli."],
        ["a", "Значит, бухгалтерия ошиблась?", "Znachit, buxgaltiriya ashiblas?", "Demak, buxgalteriya xato qilibdi-da?"],
        ["b", "Похоже на то. Я сам проверю расчёт и всё пересчитаю.", "Poxaje na ta. Ya sam praveryu rashot i fsyo pirishitayu.", "Shunga o‘xshaydi. Hisob-kitobni o‘zim tekshirib, hammasini qayta hisoblayman."],
        ["a", "Спасибо. Когда я получу ответ?", "Spasiba. Kagda ya paluchu atvet?", "Rahmat. Javobni qachon olaman?"],
        ["b", "До конца недели. Деньги вернём со следующей выплатой.", "Da kantsa nideli. Dengi virnyom sa sleduyushey viplatay.", "Hafta oxirigacha. Pulni keyingi to‘lov bilan qaytaramiz."]
      ]
    },
    {
      title: "Biznes-klassga o‘tish",
      a: "Haydovchi",
      b: "Park boshlig‘i",
      lines: [
        ["a", "Можно с вами поговорить насчёт моей работы?", "Mojna s vami pagavarit nashot mayey raboti?", "Ishim yuzasidan siz bilan gaplashsam bo‘ladimi?"],
        ["b", "Конечно, садитесь.", "Kanechna, sadites.", "Albatta, o‘tiring."],
        ["a", "Я работаю в парке уже три года, и у меня рейтинг четыре и девять.", "Ya rabotayu f parke uje tri goda, i u minya reyting chitiri i devit.", "Parkda uch yildan beri ishlayapman, reytingim 4,9."],
        ["b", "Да, я знаю. Нареканий на вас почти нет.", "Da, ya znayu. Narikaniy na vas pachti net.", "Ha, bilaman. Sizdan deyarli shikoyat yo‘q."],
        ["a", "Я бы хотел перейти в бизнес-класс. Там другие заказы и другой заработок.", "Ya bi xatel pirayti v biznes-klas. Tam drugiye zakazi i drugoy zarabatak.", "Biznes-klassga o‘tmoqchi edim. U yerda buyurtmalar ham, daromad ham boshqacha."],
        ["b", "Для бизнес-класса нужен стаж пять лет и хороший русский.", "Dlya biznes-klasa nujen stash pyat let i xaroshiy ruskiy.", "Biznes-klass uchun besh yillik staj va yaxshi rus tili kerak."],
        ["a", "Стаж вождения у меня десять лет, а русский я подтянул на курсах.", "Stash vajdeniya u minya desit let, a ruskiy ya padtyanul na kursax.", "Haydovchilik stajim o‘n yil, rus tilimni esa kurslarda yaxshilab oldim."],
        ["b", "Это заметно. Но машину для бизнес-класса придётся арендовать дороже.", "Eta zametna. No mashinu dlya biznes-klasa pridyotsa arindavat daroje.", "Bu sezilib turibdi. Lekin biznes-klass mashinasini qimmatroqqa ijaraga olishga to‘g‘ri keladi."],
        ["a", "Насколько дороже? И какая будет комиссия?", "Naskolka daroje? I kakaya budit kamissiya?", "Qanchaga qimmat? Komissiya qancha bo‘ladi?"],
        ["b", "Аренда на треть дороже, зато комиссия меньше — пятнадцать процентов.", "Arenda na tret daroje, zato kamissiya menshe — pitnatsat protsentaf.", "Ijara uchdan bir qism qimmatroq, buning evaziga komissiya kamroq — o‘n besh foiz."],
        ["a", "Тогда это выгодно. И ещё: я готов обучать новичков.", "Tagda eta vigadna. I yisho: ya gatof abuchat navichkof.", "Unda bu foydali. Yana: yangi kelganlarni o‘qitishga tayyorman."],
        ["b", "Наставникам мы доплачиваем. Напишите заявление, я передам директору.", "Nastavnikam mi daplachivayem. Napishite zayavleniye, ya piridam direktaru.", "Ustozlarga qo‘shimcha haq to‘laymiz. Ariza yozing, direktorga yetkazaman."],
        ["a", "Спасибо. Принесу заявление завтра утром.", "Spasiba. Prinesu zayavleniye zaftra utram.", "Rahmat. Arizani ertaga ertalab olib kelaman."]
      ]
    }
  ]
});
