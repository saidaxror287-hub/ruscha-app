Ruscha.addListening({
  id: "b1-l-shifokor-qabuli",
  title: "Terapevt qabulida",
  icon: "🩺",
  about: "Botirning beli og‘riyapti. U terapevt qabuliga keldi.",
  lines: [
    ["— Добрый день. На что жалуетесь?", "— Dobriy den. Na shto jaluyetis?", "— Xayrli kun. Nimadan shikoyat qilyapsiz?"],
    ["— Доктор, у меня уже две недели болит спина, особенно по утрам.", "— Doktar, u minya uje dve nideli balit spina, asobinna pa utram.", "— Doktor, ikki haftadan beri belim og‘riyapti, ayniqsa ertalablari."],
    ["— А где именно болит? Покажите.", "— A gde imenna balit? Pakajite.", "— Aynan qayeri og‘riyapti? Ko‘rsating."],
    ["— Вот здесь, внизу. Иногда боль отдаёт в ногу.", "— Vot zdes, vnizu. Inagda bol atdayot v nogu.", "— Mana shu yeri, pastda. Ba’zan og‘riq oyoqqa beradi."],
    ["— Кем вы работаете?", "— Kem vi rabotayete?", "— Kim bo‘lib ishlaysiz?"],
    ["— Я водитель, целый день за рулём. А по выходным помогаю брату на стройке.", "— Ya vaditel, tseliy den za rulyom. A pa vixadnim pamagayu bratu na stroyke.", "— Haydovchiman, kun bo‘yi rul ortidaman. Dam olish kunlari esa akamga qurilishda yordam beraman."],
    ["— Понятно. Тяжёлое поднимаете?", "— Panyatna. Tijyoloye padnimayete?", "— Tushunarli. Og‘ir narsa ko‘tarasizmi?"],
    ["— Да, мешки с цементом. По пятьдесят килограммов.", "— Da, mishki s tsimentam. Pa pitdisyat kilagrammaf.", "— Ha, sement qoplarini. Ellik kilogrammdan."],
    ["— Вот в чём причина. Сидячая работа плюс большая нагрузка — спина этого не выдерживает.", "— Vot f chyom prichina. Sidyachaya rabota plyus balshaya nagruska — spina etava ne vidershivayet.", "— Sabab mana shunda. O‘tirib ishlash va katta yuklama — bel bunga chiday olmaydi."],
    ["— Это опасно?", "— Eta apasna?", "— Bu xavflimi?"],
    ["— Пока ничего страшного, но нужно сделать рентген, чтобы исключить грыжу.", "— Paka nichivo strashnava, no nujna zdelat rengen, shtobi isklyuchit griju.", "— Hozircha qo‘rqinchli narsa yo‘q, lekin churra yo‘qligini aniqlash uchun rentgen qilish kerak."],
    ["— Я выпишу вам направление. Рентген можно сделать здесь, на первом этаже.", "— Ya vipishu vam napravleniye. Rengen mojna zdelat zdes, na pervam etaje.", "— Sizga yo‘llanma yozib beraman. Rentgenni shu yerda, birinchi qavatda qilish mumkin."],
    ["— А лекарства нужно пить?", "— A likarstva nujna pit?", "— Dori ichish kerakmi?"],
    ["— Да, вот рецепт. Эти таблетки принимайте два раза в день после еды, не больше пяти дней.", "— Da, vot ritsept. Eti tablyetki prinimayte dva raza v den posle yedi, ne bolshe pyati dney.", "— Ha, mana retsept. Bu tabletkalarni kuniga ikki marta ovqatdan keyin iching, besh kundan ko‘p emas."],
    ["— И мазь два раза в день на больное место.", "— I mas dva raza v den na balnoye mesta.", "— Malhamni esa kuniga ikki marta og‘riyotgan joyga suring."],
    ["— Хорошо. А на работу можно ходить?", "— Xarasho. A na rabotu mojna xadit?", "— Yaxshi. Ishga borsa bo‘ladimi?"],
    ["— Можно, но каждые два часа останавливайтесь и делайте небольшую разминку.", "— Mojna, no kajdiye dva chisa astanavlivaytis i delayte nibalshuyu razminku.", "— Mumkin, lekin har ikki soatda to‘xtab, biroz badantarbiya qiling."],
    ["— А на стройке помогать?", "— A na stroyke pamagat?", "— Qurilishda yordam berish-chi?"],
    ["— Ни в коем случае! Минимум месяц ничего тяжёлого. Приходите ко мне с рентгеном через неделю.", "— Ni f koyem sluchaye! Minimum mesits nichivo tijyolava. Prixadite ka mne s rengenam cheris nidelyu.", "— Aslo mumkin emas! Kamida bir oy hech qanday og‘ir narsa ko‘tarmang. Bir haftadan keyin rentgen bilan oldimga keling."],
    ["— Спасибо, доктор. Брат, конечно, не обрадуется.", "— Spasiba, doktar. Brat, kaneshna, ne abraduyetsa.", "— Rahmat, doktor. Akam, albatta, bundan xursand bo‘lmaydi."]
  ],
  questions: [
    { q: "Botirning qayeri og‘riyapti?", options: ["Boshi", "Beli", "Tizzasi"], answer: 1, line: 1 },
    { q: "Og‘riqning sababi nima?", options: ["Sovuq qotgan", "Yiqilib tushgan", "O‘tirib ishlash va og‘ir yuk ko‘tarish"], answer: 2, line: 8 },
    { q: "Shifokor qanday tekshiruv buyurdi?", options: ["Rentgen", "Qon tahlili", "UZI"], answer: 0, line: 10 },
    { q: "Tabletkalarni qanday ichish kerak?", options: ["Kuniga bir marta ovqatdan oldin", "Kuniga ikki marta ovqatdan keyin", "Faqat og‘riganda"], answer: 1, line: 13 },
    { q: "Qancha vaqt og‘ir narsa ko‘tarmaslik kerak?", options: ["Bir hafta", "Uch kun", "Kamida bir oy"], answer: 2, line: 18 }
  ]
});
