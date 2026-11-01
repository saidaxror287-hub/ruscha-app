Ruscha.addListening({
  id: "b1-l-radio-yangiliklar",
  title: "Radio yangiliklari",
  icon: "📻",
  about: "Ertalabki radio yangiliklari: shahar, transport, iqtisod va sport.",
  lines: [
    ["Доброе утро! В эфире утренние новости. Сегодня понедельник, пятнадцатое октября.", "Dobraye utra! V efire utrenniye novasti. Sivodnya panidelnik, pitnatsataye aktyabrya.", "Xayrli tong! Efirda ertalabki yangiliklar. Bugun dushanba, 15-oktabr."],
    ["Начнём с городских новостей.", "Nachnyom z garadskix novastey.", "Shahar yangiliklaridan boshlaymiz."],
    ["Мэрия сообщила, что в следующем году в городе откроются пять новых станций метро.", "Meriya saapshila, shto f sleduyushem gadu v gorade atkroyutsa pyat novix stantsiy mitro.", "Meriya kelasi yili shaharda beshta yangi metro bekati ochilishini ma’lum qildi."],
    ["Строительство уже началось, на нём работают более трёх тысяч человек.", "Straitilstva uje nachalos, na nyom rabotayut boleye tryox tisich chilavek.", "Qurilish allaqachon boshlangan, unda uch mingdan ortiq kishi ishlamoqda."],
    ["В связи с ремонтом с сегодняшнего дня закрыта станция «Садовая».", "F svyazi s rimontam s sivodnyashniva dnya zakrita stantsiya «Sadovaya».", "Ta’mir munosabati bilan bugundan boshlab «Sadovaya» bekati yopildi."],
    ["Ремонт продлится два месяца. Пассажирам советуют пользоваться автобусами.", "Rimont pradlitsa dva mesitsa. Passajiram savetuyut polzavatsa aftobusami.", "Ta’mir ikki oy davom etadi. Yo‘lovchilarga avtobuslardan foydalanish tavsiya etiladi."],
    ["Теперь об экономике.", "Tipyer ab ekanomike.", "Endi iqtisod haqida."],
    ["За последний месяц цены на овощи и фрукты выросли на семь процентов.", "Za pasledniy mesits tseni na ovashi i frukti virasli na sem pratsentaf.", "So‘nggi bir oyda sabzavot va mevalar narxi yetti foizga oshdi."],
    ["Эксперты объясняют это плохим урожаем из-за холодного лета.", "Ekspyerti abyasnyayut eta ploxim urajayem iz-za xalodnava leta.", "Mutaxassislar buni sovuq yoz tufayli hosil yomon bo‘lgani bilan izohlashmoqda."],
    ["По их мнению, к зиме цены могут вырасти ещё больше.", "Pa ix mneniyu, k zime tseni mogut virasti yishyo bolshe.", "Ularning fikricha, qishga borib narxlar yanada oshishi mumkin."],
    ["Новости для иностранных граждан.", "Novasti dlya inastrannix grajdan.", "Chet el fuqarolari uchun yangiliklar."],
    ["С первого января в городе откроется новый миграционный центр.", "S pervava yanvarya v gorade atkroyetsa noviy migratsionniy tsentr.", "Birinchi yanvardan shaharda yangi migratsiya markazi ochiladi."],
    ["Там можно будет оформить патент, пройти медосмотр и сдать экзамен по русскому языку в одном месте.", "Tam mojna budit afarmit patent, prayti medasmotr i zdat ekzamen pa ruskamu yaziku v adnom meste.", "U yerda patentni rasmiylashtirish, tibbiy ko‘rikdan o‘tish va rus tili imtihonini bir joyda topshirish mumkin bo‘ladi."],
    ["Центр будет работать без выходных, с восьми утра до восьми вечера.", "Tsentr budit rabotat biz vixadnix, s vasmi utra da vasmi vechira.", "Markaz dam olish kunisiz, ertalab sakkizdan kechqurun sakkizgacha ishlaydi."],
    ["Новости спорта.", "Novasti sporta.", "Sport yangiliklari."],
    ["Вчера сборная Узбекистана по футболу выиграла у команды Ирана со счётом два — один.", "Fchira zbornaya Uzbikistana pa futbolu viigrala u kamandi Irana sa shchyotam dva — adin.", "Kecha O‘zbekiston futbol terma jamoasi Eron jamoasini 2:1 hisobida yutdi."],
    ["Оба гола забил молодой нападающий, которому всего девятнадцать лет.", "Oba gola zabil maladoy napadayushiy, katoramu fsivo divitnatsat let.", "Ikkala golni atigi o‘n to‘qqiz yoshli yosh hujumchi urdi."],
    ["И о погоде: сегодня облачно, днём до плюс восьми, вечером возможен дождь.", "I a pagode: sivodnya oblachna, dnyom da plyus vasmi, vecheram vazmojin dosht.", "Va ob-havo haqida: bugun bulutli, kunduzi plyus sakkiz darajagacha, kechqurun yomg‘ir yog‘ishi mumkin."],
    ["Не забудьте зонт! С вами были утренние новости. Хорошего дня!", "Ne zabutte zont! S vami bili utrenniye novasti. Xaroshiva dnya!", "Soyabonni unutmang! Siz bilan ertalabki yangiliklar edi. Kuningiz xayrli o‘tsin!"]
  ],
  questions: [
    { q: "Kelasi yili nechta yangi metro bekati ochiladi?", options: ["Uchta", "Beshta", "O‘nta"], answer: 1, line: 2 },
    { q: "«Sadovaya» bekati qancha muddatga yopildi?", options: ["Ikki haftaga", "Bir yilga", "Ikki oyga"], answer: 2, line: 5 },
    { q: "Sabzavot va mevalar narxi nima uchun oshdi?", options: ["Sovuq yoz tufayli hosil yomon bo‘ldi", "Benzin qimmatlashdi", "Do‘konlar yopildi"], answer: 0, line: 8 },
    { q: "Yangi migratsiya markazi qanday ishlaydi?", options: ["Faqat ish kunlari", "Dam olish kunisiz, 8:00 dan 20:00 gacha", "Kechayu kunduz"], answer: 1, line: 13 },
    { q: "O‘zbekiston terma jamoasi qanday hisobda yutdi?", options: ["1:0", "3:2", "2:1"], answer: 2, line: 15 }
  ]
});
