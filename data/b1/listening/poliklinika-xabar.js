Ruscha.addListening({
  id: "b1-l-poliklinika-xabar",
  title: "Poliklinikadan ovozli xabar",
  icon: "📞",
  about: "Poliklinika Akmalning avtojavobgichiga xabar qoldirdi, keyin Akmal xotiniga ovozli xabar yubordi.",
  lines: [
    ["Здравствуйте, это сообщение для Акмала Юсупова.", "Zdrastvuyte, eta saapsheniye dlya Akmala Yusupava.", "Assalomu alaykum, bu xabar Akmal Yusupov uchun."],
    ["Вас беспокоят из городской поликлиники номер сорок два.", "Vas bispakoyat iz garadskoy palikliniki nomir sorak dva.", "Sizni 42-sonli shahar poliklinikasidan bezovta qilishyapti."],
    ["Готовы результаты ваших анализов крови.", "Gotovi rizultati vashix analizaf krovi.", "Qon tahlillaringiz natijalari tayyor."],
    ["Врач просит вас прийти на приём, чтобы обсудить результаты.", "Vrach prosit vas priyti na priyom, shtobi absudit rizultati.", "Shifokor natijalarni muhokama qilish uchun qabulga kelishingizni so‘rayapti."],
    ["Ничего серьёзного нет, но уровень сахара немного выше нормы.", "Nichivo siryoznava net, no uroven saxara nemnoga vishe normi.", "Jiddiy narsa yo‘q, lekin qanddagi miqdor me’yordan biroz yuqori."],
    ["Мы записали вас на четверг, на девять часов утра, кабинет двести пятнадцать.", "Mi zapisali vas na chitverk, na devit chisof utra, kabinet dvesti pitnatsat.", "Sizni payshanba kuni ertalab soat to‘qqizga, 215-xonaga yozib qo‘ydik."],
    ["Перед приёмом ничего не ешьте, нужно будет сдать анализ ещё раз.", "Pered priyomam nichivo ne yeshte, nujna budit zdat analis yishyo ras.", "Qabuldan oldin hech narsa yemang, tahlilni yana bir marta topshirish kerak bo‘ladi."],
    ["Не забудьте взять с собой паспорт и полис.", "Ne zabutte vzyat s saboy paspart i polis.", "Pasport va sug‘urta polisini o‘zingiz bilan olishni unutmang."],
    ["Если это время вам не подходит, перезвоните нам до среды.", "Yesli eta vremya vam ne padxodit, pirizvanite nam da sridi.", "Agar bu vaqt sizga to‘g‘ri kelmasa, chorshanbagacha bizga qayta qo‘ng‘iroq qiling."],
    ["Наш номер: восемь, четыреста девяносто пять, двести тридцать, сорок, сорок.", "Nash nomir: vosim, chitiresta divyanosta pyat, dvesti tritsat, sorak, sorak.", "Raqamimiz: 8 495 230 40 40."],
    ["Всего доброго!", "Fsivo dobrava!", "Hammasi yaxshi bo‘lsin!"],
    ["— Зарина, привет. Только что прослушал сообщение из поликлиники.", "— Zarina, privet. Tolka shto praslushal saapsheniye is palikliniki.", "— Zarina, salom. Hozirgina poliklinikadan kelgan xabarni eshitdim."],
    ["— Анализы готовы, сахар немного повышен, но врач говорит, что ничего страшного.", "— Analizi gatovi, saxar nemnoga pavishen, no vrach gavarit, shto nichivo strashnava.", "— Tahlillar tayyor, qand biroz oshgan, lekin shifokor qo‘rqinchli narsa yo‘q deyapti."],
    ["— Меня записали на четверг на девять утра.", "— Minya zapisali na chitverk na devit utra.", "— Meni payshanba kuni ertalab to‘qqizga yozishdi."],
    ["— Но в четверг у меня важная смена, начальник не отпустит.", "— No f chitverk u minya vajnaya smena, nachalnik ne atpustit.", "— Lekin payshanba kuni muhim smenam bor, boshliq javob bermaydi."],
    ["— Завтра позвоню и попрошу перенести на пятницу.", "— Zaftra pazvanyu i paprashu pirinisti na pyatnitsu.", "— Ertaga qo‘ng‘iroq qilib, jumaga ko‘chirishni so‘rayman."],
    ["— И, кажется, придётся меньше есть сладкого. Прощайте, мои любимые пирожные!", "— I, kajitsa, pridyotsa menshe yest slatkava. Prashayte, mai lyubimiye pirojniye!", "— Va, shekilli, shirinlikni kamroq yeyishga to‘g‘ri keladi. Alvido, sevimli pirojniylarim!"],
    ["— Целую, вечером всё расскажу подробнее.", "— Tseluyu, vecheram fsyo rasskaju padrobneye.", "— O‘paman, kechqurun hammasini batafsil aytib beraman."]
  ],
  questions: [
    { q: "Qaysi tahlil natijalari tayyor?", options: ["Qon tahlili", "Rentgen", "Yurak tekshiruvi"], answer: 0, line: 2 },
    { q: "Tahlilda qanday muammo bor?", options: ["Qon bosimi past", "Qand me’yordan biroz yuqori", "Hech qanday muammo yo‘q"], answer: 1, line: 4 },
    { q: "Qabuldan oldin nima qilish kerak?", options: ["Ko‘p suv ichish", "Dori ichish", "Hech narsa yemaslik"], answer: 2, line: 6 },
    { q: "Nega Akmal payshanba kuni bora olmaydi?", options: ["Muhim smenasi bor", "Shaharda bo‘lmaydi", "Kasal bo‘lib qolgan"], answer: 0, line: 14 },
    { q: "Akmal qabulni qaysi kunga ko‘chirmoqchi?", options: ["Chorshanbaga", "Jumaga", "Dushanbaga"], answer: 1, line: 15 }
  ]
});
