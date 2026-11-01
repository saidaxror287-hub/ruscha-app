/*
  Farrosh — job pack (Kasblar). One part per tab:
    boshlangich = Boshlang‘ich (A1–A2) · orta = O‘rta (B1) · yuqori = Yuqori (B2+).
  A tab without a part is shown as "Tez orada". See README.md → "Add a job pack".
  Never change "id" or a published "ru": saved progress depends on them.
*/
Ruscha.addJob({ id: "kasb-farrosh", title: "Farrosh", icon: "🧹" });

/* ==================== Boshlang‘ich (A1–A2) ==================== */
Ruscha.addJobTab("kasb-farrosh", "boshlangich", {
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

/* ==================== O‘rta (B1) ==================== */
Ruscha.addJobTab("kasb-farrosh", "orta", {
  phrases: [
    { ru: "На втором этаже засорился унитаз.", pr: "Na ftarom etaje zasarilsa unitas.", uz: "Ikkinchi qavatda unitaz tiqilib qoldi." },
    { ru: "В туалете течёт кран.", pr: "F tualete tichyot kran.", uz: "Hojatxonada jo‘mrak oqyapti." },
    { ru: "Я разбил стакан, сейчас уберу.", pr: "Ya razbil stakan, sichas uberu.", uz: "Stakanni sindirib qo‘ydim, hozir yig‘ishtiraman. (ayol aytsa: «Я разбила стакан, сейчас уберу»)", sit: "Stolni artayotganda stakan qo‘lingizdan tushib sindi, yonida odamlar bor." },
    { ru: "Гость жалуется на шум пылесоса.", pr: "Gost jaluyetsa na shum pilisosa.", uz: "Mehmon changyutgich shovqinidan shikoyat qilyapti." },
    { ru: "Это пятно не отмывается.", pr: "Eta pitno ne atmivayetsa.", uz: "Bu dog‘ yuvilmayapti." },
    { ru: "Потерялся ключ от подсобки.", pr: "Patiryalsa klyuch at patsopki.", uz: "Xo‘jalik xonasining kaliti yo‘qolib qoldi." },
    { ru: "Мне не хватает времени на весь этаж.", pr: "Mne ne xvatayet vremini na ves etash.", uz: "Butun qavatga vaqtim yetmayapti.", sit: "Sizga yana beshta xona qo‘shishdi, smena tugashiga ulgurmayapsiz." },
    { ru: "Можно мне другой участок?", pr: "Mojna mne drugoy uchastak?", uz: "Menga boshqa uchastka bersangiz bo‘ladimi?" },
    { ru: "Я не брал вещи гостя.", pr: "Ya ne bral veshi gostya.", uz: "Mehmonning narsalarini olmadim. (ayol aytsa: «Я не брала вещи гостя»)", sit: "Mehmon xonasidan narsa yo‘qolibdi, administrator sizdan so‘rayapti." },
    { ru: "Кто проверяет мою работу?", pr: "Kto praviryayet mayu rabotu?", uz: "Ishimni kim tekshiradi?" },
    { ru: "Нужно купить новую швабру.", pr: "Nujna kupit novuyu shvabru.", uz: "Yangi shvabra sotib olish kerak." },
    { ru: "С химией работай только в перчатках.", pr: "S ximiyey rabotay tolka f pirchatkax.", uz: "Kimyoviy vositalar bilan faqat qo‘lqopda ishla." },
    { ru: "Хлорку не нюхай, проветри помещение.", pr: "Xlorku ne nyuxay, pravetri pamisheniye.", uz: "Xlorni hidlama, xonani shamollat." },
    { ru: "Не вставай на стул, возьми стремянку.", pr: "Ne fstavay na stul, vazmi strimyanku.", uz: "Stul ustiga chiqma, narvonchani ol." },
    { ru: "Мокрыми руками розетки не трогай.", pr: "Mokrimi rukami razetki ne trogay.", uz: "Ho‘l qo‘l bilan rozetkaga tegma." },
    { ru: "Стекло и иголки — в отдельный пакет.", pr: "Stiklo i igolki — v atdelni paket.", uz: "Shisha va ignalar — alohida paketga." },
    { ru: "Офис убираем после шести вечера.", pr: "Ofis ubirayem posli shesti vechira.", uz: "Ofisni kechki oltidan keyin tozalaymiz." },
    { ru: "Генеральная уборка — по пятницам.", pr: "Giniralnaya uborka — pa pyatnitsam.", uz: "Umumiy tozalash — juma kunlari." },
    { ru: "Я работаю через день.", pr: "Ya rabotayu chiriz den.", uz: "Kun ora ishlayman." },
    { ru: "Можно взять отгул в среду?", pr: "Mojna vzyat atgul f sredu?", uz: "Chorshanba kuni javob olsam bo‘ladimi?" }
  ],
  dialogues: [
    {
      title: "Yo‘qolgan soat",
      a: "Malika (farrosh)",
      b: "Administrator",
      lines: [
        ["b", "Малика, гость из номера двести пять жалуется.", "Malika, gost iz nomira dvesti pyat jaluyetsa.", "Malika, ikki yuz beshinchi xonadagi mehmon shikoyat qilyapti."],
        ["a", "Что случилось? Я убирала номер утром.", "Shto sluchilas? Ya ubirala nomir utram.", "Nima bo‘ldi? Xonani ertalab tozalagan edim."],
        ["b", "Он говорит, что пропали часы.", "On gavarit, shto prapali chisi.", "U soati yo‘qolganini aytyapti."],
        ["a", "Я не брала вещи гостя. Я только поменяла полотенца.", "Ya ne brala veshi gostya. Ya tolka paminyala palatintsa.", "Mehmonning narsalarini olmadim. Faqat sochiqlarni almashtirdim."],
        ["b", "Я вам верю. Давайте вместе посмотрим в номере.", "Ya vam veryu. Davayte vmeste pasmotrim v nomire.", "Sizga ishonaman. Keling, xonani birga ko‘rib chiqamiz."],
        ["a", "Хорошо. Может быть, они упали за кровать.", "Xarasho. Mojit bit, ani upali za kravat.", "Xo‘p. Balki karavot orqasiga tushib ketgandir."],
        ["b", "Вот они! Под кроватью.", "Vot ani! Pat kravatyu.", "Mana! Karavot tagida ekan."],
        ["a", "Слава богу! Можно я пойду убирать дальше?", "Slava bogu! Mojna ya paydu ubirat dalshe?", "Xudoga shukur! Tozalashni davom ettirsam bo‘ladimi?"],
        ["b", "Да, конечно. Спасибо за помощь.", "Da, kanyeshna. Spasiba za pomash.", "Ha, albatta. Yordamingiz uchun rahmat."]
      ]
    },
    {
      title: "Vaqt yetmayapti",
      a: "Farrosh",
      b: "Menejer",
      lines: [
        ["a", "Можно с вами поговорить? Мне не хватает времени на весь этаж.", "Mojna s vami pagavarit? Mne ne xvatayet vremini na ves etash.", "Siz bilan gaplashsam bo‘ladimi? Butun qavatga vaqtim yetmayapti."],
        ["b", "Почему? Раньше вы успевали.", "Pachimu? Ranshe vi uspivali.", "Nega? Avval ulgurardingiz."],
        ["a", "Теперь на этаже двадцать номеров, а не пятнадцать.", "Tipyer na etaje dvatsat namirof, a ne pitnatsat.", "Endi qavatda o‘n beshta emas, yigirmata xona bor."],
        ["b", "Понятно. Можно дать вам помощницу на утро.", "Panyatna. Mojna dat vam pamoshnitsu na utra.", "Tushunarli. Ertalabga sizga yordamchi bersak bo‘ladi."],
        ["a", "Спасибо. И ещё: нужно купить новую швабру, старая сломалась.", "Spasiba. I yishyo: nujna kupit novuyu shvabru, staraya slamalas.", "Rahmat. Yana: yangi shvabra olish kerak, eskisi sinib qoldi."],
        ["b", "Напишите список, что нужно, я закажу.", "Napishite spisak, shto nujna, ya zakaju.", "Nima kerakligini ro‘yxat qilib yozing, buyurtma beraman."],
        ["a", "Хорошо. А генеральная уборка в эту пятницу будет?", "Xarasho. A giniralnaya uborka v etu pyatnitsu budit?", "Xo‘p. Bu juma umumiy tozalash bo‘ladimi?"],
        ["b", "Да, как всегда. Начинаем в семь утра.", "Da, kak fsigda. Nachinayem f sem utra.", "Ha, har doimgidek. Ertalab yettida boshlaymiz."]
      ]
    }
  ]
});

/* ==================== Yuqori (B2+) ==================== */
Ruscha.addJobTab("kasb-farrosh", "yuqori", {
  phrases: [
    { ru: "Площадь уборки увеличили, а оплата осталась той же.", pr: "Ploshat uborki uvilichili, a aplata astalas toy je.", uz: "Tozalash maydonini kengaytirishdi, haq esa o‘shandayligicha qoldi." },
    { ru: "За генеральную уборку должны платить отдельно.", pr: "Za giniralnuyu uborku daljni platit atdelna.", uz: "Umumiy (general) tozalash uchun alohida to‘lashlari kerak." },
    { ru: "Я работаю через клининговую компанию, а не напрямую с офисом.", pr: "Ya rabotayu chiriz kliningavuyu kampaniyu, a ne napryamuyu s ofisam.", uz: "Ofis bilan to‘g‘ridan-to‘g‘ri emas, klining kompaniyasi orqali ishlayman." },
    { ru: "В договоре должен быть указан объём работы.", pr: "V dagavore dolzhen bit ukazan abyom raboti.", uz: "Shartnomada ish hajmi ko‘rsatilishi kerak." },
    { ru: "Мне не выдали расчётный листок за прошлый месяц.", pr: "Mne ne vidali rashotniy listok za proshliy mesits.", uz: "O‘tgan oy uchun hisob varag‘imni berishmadi." },
    { ru: "Химия, которую нам дают, вызывает аллергию.", pr: "Ximiya, katoruyu nam dayut, vizivayet alirgiyu.", uz: "Bizga berilayotgan kimyoviy vositalar allergiya qo‘zg‘ayapti.", sit: "Yangi tozalash vositasidan keyin qo‘llaringiz qizarib, qichiyapti." },
    { ru: "Перчатки и маски должна выдавать компания.", pr: "Pirchatki i maski dalzhna vidavat kampaniya.", uz: "Qo‘lqop va niqoblarni kompaniya berishi kerak." },
    { ru: "Сотрудник офиса обвинил меня в пропаже денег.", pr: "Satrudnik ofisa abvinil minya f prapaje deneg.", uz: "Ofis xodimi meni pul yo‘qolganlikda aybladi." },
    { ru: "Я ничего не брал и готов, чтобы проверили камеры.", pr: "Ya nichivo ne bral i gatof, shtobi praverili kamiri.", uz: "Hech narsa olmaganman, kameralarni tekshirishlariga tayyorman. (ayol aytsa: «Я ничего не брала и готова, чтобы проверили камеры»)", sit: "Ofis xodimi stolidan pul yo‘qolganini aytib, sizga shubha bilan qarayapti." },
    { ru: "Обыскивать меня при всех — это унизительно.", pr: "Abiskivat minya pri fsex — eta unizitilna.", uz: "Hammaning oldida meni tintuv qilish — bu kamsitish." },
    { ru: "Я требую извинений.", pr: "Ya trebuyu izvineniy.", uz: "Kechirim so‘rashlarini talab qilaman." },
    { ru: "Клиент недоволен, но в чек-листе этой работы нет.", pr: "Kliyent nidavolen, no f chek-liste etay raboti net.", uz: "Mijoz norozi, lekin nazorat varag‘ida bu ish yo‘q.", sit: "Ofis rahbari nega shkaflar ichi artilmagan deb shikoyat qildi." },
    { ru: "Мыть окна снаружи на высоте — это не моя работа.", pr: "Mit okna snaruji na visate — eta ne maya rabota.", uz: "Balandlikda derazalarni tashqaridan yuvish — mening ishim emas." },
    { ru: "Супервайзер даёт задания в последний момент, а потом ругает.", pr: "Supervayzer dayot zadaniya f paslredniy mamant, a potam rugayet.", uz: "Supervayzer topshiriqlarni oxirgi daqiqada beradi, keyin urishadi." },
    { ru: "Я хочу, чтобы мои обязанности записали в договор.", pr: "Ya xachu, shtobi mai abyazannasti zapisali v dagavor.", uz: "Majburiyatlarim shartnomaga yozilishini xohlayman." },
    { ru: "Я каждый день задерживаюсь на час, и это нигде не учитывается.", pr: "Ya kajdiy den zadirjivayus na chas, i eta nigde ne uchitivayetsa.", uz: "Har kuni bir soat kech qolaman, bu hech qayerda hisobga olinmaydi." },
    { ru: "Меня ни разу не штрафовали за качество.", pr: "Minya ni razu ne shtrafavali za kachestva.", uz: "Sifat uchun hech qachon jarima olmaganman." },
    { ru: "Я хотел бы стать бригадиром уборщиков на этом объекте.", pr: "Ya xatel bi stat brigadiram uborshikaf na etam abyekte.", uz: "Bu obyektda farroshlar brigadiri bo‘lmoqchi edim. (ayol aytsa: «Я хотела бы стать бригадиром уборщиков на этом объекте»)" },
    { ru: "Я знаю, как организовать уборку быстрее и дешевле.", pr: "Ya znayu, kak arganizavat uborku bistreye i dishevle.", uz: "Tozalashni qanday qilib tezroq va arzonroq tashkil qilishni bilaman." },
    { ru: "Если вопрос не решится, я напишу жалобу руководству компании.", pr: "Isli vapros ne rishitsa, ya napishu jalobu rukavotstvu kampanii.", uz: "Masala hal bo‘lmasa, kompaniya rahbariyatiga shikoyat yozaman." }
  ],
  dialogues: [
    {
      title: "Nohaq ayblov",
      a: "Ofis xodimi",
      b: "Gulnora",
      lines: [
        ["a", "Гульнора, у меня со стола пропали деньги. Вы сегодня убирали мой кабинет?", "Gulnora, u minya sa stala prapali dengi. Vi sivodnya ubirali moy kabinet?", "Gulnora, stolimdan pul yo‘qoldi. Bugun xonamni siz tozaladingizmi?"],
        ["b", "Да, утром. Но я ничего не брала.", "Da, utram. No ya nichivo ne brala.", "Ha, ertalab. Lekin hech narsa olmadim."],
        ["a", "Кроме вас, сюда никто не заходил.", "Kromi vas, syuda nikto ne zaxadil.", "Sizdan boshqa bu yerga hech kim kirmagan."],
        ["b", "Вы меня обвиняете? Это очень серьёзное обвинение.", "Vi minya abvinyayete? Eta ochin siryoznaye abvineniye.", "Meni ayblayapsizmi? Bu juda jiddiy ayblov."],
        ["a", "Я просто хочу понять. Покажите, пожалуйста, вашу тележку и сумку.", "Ya prosta xachu panyat. Pakajite, pajalusta, vashu tilejku i sumku.", "Shunchaki tushunmoqchiman. Iltimos, aravachangiz va sumkangizni ko‘rsating."],
        ["b", "Обыскивать меня при всех — это унизительно. Давайте позовём охрану и проверим камеры.", "Abiskivat minya pri fsex — eta unizitilna. Davayte pazavyom axranu i praverim kamiri.", "Hammaning oldida meni tintuv qilish — kamsitish. Keling, qo‘riqchini chaqirib, kameralarni tekshiraylik."],
        ["a", "Хорошо, давайте посмотрим камеры.", "Xarasho, davayte pasmotrim kamiri.", "Yaxshi, kameralarni ko‘raylik."],
        ["b", "Вот запись: я протёрла стол, вынесла мусор и ушла. Денег я не трогала.", "Vot zapis: ya pratyorla stol, vinisla musar i ushla. Deneg ya ne trogala.", "Mana yozuv: stolni artdim, axlatni chiqardim va ketdim. Pulga tegmadim."],
        ["a", "Ой... А вот я сам кладу конверт в портфель.", "Oy... A vot ya sam kladu kanvert f partfel.", "Voy... Mana, konvertni portfelimga o‘zim solyapman-ku."],
        ["b", "Значит, вопрос решён. Но я жду извинений.", "Znachit, vapros rishon. No ya zhdu izvineniy.", "Demak, masala hal bo‘ldi. Lekin kechirim kutaman."],
        ["a", "Простите меня, пожалуйста. Я был неправ.", "Prastite minya, pajalusta. Ya bil niprav.", "Iltimos, meni kechiring. Men nohaq edim."],
        ["b", "Извинения принимаю. Но в следующий раз, пожалуйста, сначала проверьте свои вещи.", "Izvineniya prinimayu. No f sleduyushiy ras, pajalusta, snachala praverte svai veshi.", "Kechirimingizni qabul qilaman. Lekin keyingi safar, iltimos, avval o‘z narsalaringizni tekshiring."],
        ["a", "Обязательно. И я скажу вашему руководству, что вы работаете честно.", "Abizatilna. I ya skaju vashimu rukavotstvu, shto vi rabotayete chesna.", "Albatta. Rahbariyatingizga ham halol ishlayotganingizni aytaman."]
      ]
    },
    {
      title: "Yuklama va brigadirlik",
      a: "Gulnora",
      b: "Supervayzer",
      lines: [
        ["a", "Можно обсудить мою нагрузку и зарплату?", "Mojna absudit mayu nagruzku i zarplatu?", "Ish yuklamam va maoshimni muhokama qilsak bo‘ladimi?"],
        ["b", "Давай. Что тебя не устраивает?", "Davay. Shto tibya ne ustraivayet?", "Qani. Nima seni qoniqtirmayapti?"],
        ["a", "С сентября мне добавили второй этаж, а оплата осталась той же.", "S sintyabrya mne dabavili ftaroy etash, a aplata astalas toy je.", "Sentabrdan menga ikkinchi qavatni qo‘shishdi, haq esa o‘shandayligicha qoldi."],
        ["b", "Ну, второй этаж небольшой.", "Nu, ftaroy etash nibalshoy.", "Ikkinchi qavat unchalik katta emas-ku."],
        ["a", "Это двести квадратных метров. Я каждый день задерживаюсь на час.", "Eta dvesti kvadratnix metraf. Ya kajdiy den zadirjivayus na chas.", "Bu ikki yuz kvadrat metr. Har kuni bir soat kech qolaman."],
        ["b", "Я не знала, что ты задерживаешься.", "Ya ne znala, shto ti zadirjivayeshsa.", "Kech qolishingni bilmagan ekanman."],
        ["a", "Охрана может подтвердить: я ухожу в восемь, а не в семь.", "Axrana mojet padtverdit: ya uxaju v vosim, a ne f sem.", "Qo‘riqchilar tasdiqlay oladi: yettida emas, sakkizda ketaman."],
        ["b", "Хорошо. Я внесу эти часы в табель как сверхурочные.", "Xarasho. Ya vnisu eti chasi f tabel kak sverxurochniye.", "Yaxshi. Bu soatlarni tabelga qo‘shimcha soat sifatida kiritaman."],
        ["a", "И ещё. Наш бригадир уходит в декабре. Я хотела бы занять её место.", "I yisho. Nash brigadir uxodit v dikabre. Ya xatela bi zanyat yeyo mesta.", "Yana bir gap. Brigadirimiz dekabrda ketyapti. Uning o‘rnini egallamoqchi edim."],
        ["b", "Почему ты думаешь, что справишься?", "Pachimu ti dumayesh, shto spravishsa?", "Nega uddalayman deb o‘ylaysan?"],
        ["a", "Я работаю здесь четыре года, и меня ни разу не штрафовали за качество.", "Ya rabotayu zdes chitiri goda, i minya ni razu ne shtrafavali za kachestva.", "Bu yerda to‘rt yildan beri ishlayman, sifat uchun hech qachon jarima olmaganman."],
        ["b", "Это правда. А как ты будешь работать с людьми?", "Eta pravda. A kak ti budish rabotat s lyudmi?", "To‘g‘ri. Odamlar bilan qanday ishlaysan?"],
        ["a", "Я знаю, как организовать уборку быстрее: разделить этажи и закупать химию оптом.", "Ya znayu, kak arganizavat uborku bistreye: razdilit etaji i zakupat ximiyu optam.", "Tozalashni qanday tezlashtirishni bilaman: qavatlarni bo‘lib berish va kimyoviy vositalarni ulgurji olish."],
        ["b", "Интересно. Напиши мне это предложение, и я покажу руководству.", "Intiresna. Napishi mne eta pridlajeniye, i ya pakaju rukavotstvu.", "Qiziq. Shu taklifni yozib ber, rahbariyatga ko‘rsataman."]
      ]
    }
  ]
});
