Ruscha.addListening({
  id: "b1-l-ob-havo-prognoz",
  title: "Haftalik ob-havo ma’lumoti",
  icon: "🌦️",
  about: "Radiodagi sinoptik kelgusi hafta uchun ob-havo ma’lumotini aytib beradi.",
  lines: [
    ["Здравствуйте, уважаемые радиослушатели! С вами прогноз погоды на неделю.", "Zdrastvuyte, uvajayemiye radiaslushateli! S vami prognas pagodi na nidelyu.", "Assalomu alaykum, hurmatli radio tinglovchilar! Siz bilan bir haftalik ob-havo ma’lumoti."],
    ["Осень наконец-то вступает в свои права.", "Osin nakanets-ta fstupayet f svai prava.", "Kuz nihoyat o‘z huquqiga kirmoqda."],
    ["В понедельник и вторник в городе будет облачно, но без осадков.", "F panidelnik i ftornik v gorade budit oblachna, no bis asatkaf.", "Dushanba va seshanba kunlari shaharda bulutli bo‘ladi, lekin yog‘ingarchiliksiz."],
    ["Температура днём — от плюс пяти до плюс семи градусов, ночью — около нуля.", "Timpiratura dnyom — at plyus pyati da plyus semi gradusaf, nochyu — okala nulya.", "Kunduzgi harorat plyus beshdan plyus yetti darajagacha, kechasi nol atrofida."],
    ["В среду с запада придёт холодный атмосферный фронт.", "F sredu z zapada pridyot xalodniy atmasfyerniy front.", "Chorshanba kuni g‘arbdan sovuq atmosfera fronti keladi."],
    ["Ожидается сильный ветер, порывы до восемнадцати метров в секунду.", "Ajidayetsa silniy veter, porivi da vasimnatsati metraf f sikundu.", "Kuchli shamol kutilmoqda, uning kuchi sekundiga o‘n sakkiz metrgacha yetadi."],
    ["МЧС предупреждает: не оставляйте машины под деревьями и рядом с рекламными щитами.", "Em-che-es pridupirjdayet: ne astavlyayte mashini pad direvyami i ryadam s riklamnimi shitami.", "FVV ogohlantirmoqda: mashinalarni daraxtlar tagida va reklama taxtalari yonida qoldirmang."],
    ["В четверг пойдёт мокрый снег, на дорогах будет скользко.", "F chitverk paydyot mokriy snek, na darogax budit skolska.", "Payshanba kuni ho‘l qor yog‘adi, yo‘llar sirpanchiq bo‘ladi."],
    ["Водителям советуем заранее поменять летнюю резину на зимнюю.", "Vaditilyam savetuyem zarani paminyat letnyuyu rizinu na zimnyuyu.", "Haydovchilarga yozgi shinalarni oldindan qishkisiga almashtirishni maslahat beramiz."],
    ["А пешеходам — надеть удобную обувь и быть осторожными.", "A pishixodam — nadet udobnuyu obuf i bit astarojnimi.", "Piyodalarga esa qulay poyabzal kiyish va ehtiyot bo‘lishni maslahat beramiz."],
    ["В пятницу станет ещё холоднее: ночью до минус четырёх.", "F pyatnitsu stanet yishyo xaladneye: nochyu da minus chetiryox.", "Juma kuni yanada sovuqroq bo‘ladi: kechasi minus to‘rt darajagacha."],
    ["Это первые заморозки в этом году.", "Eta perviye zamarozki v etam gadu.", "Bu yilgi birinchi ayozlar shu."],
    ["Если у вас на балконе есть цветы, лучше занесите их в квартиру.", "Yesli u vas na balkone yest tsveti, luchshe zanisite ix f kvartiru.", "Agar balkoningizda gullar bo‘lsa, ularni kvartiraga olib kirgan ma’qul."],
    ["Зато выходные порадуют нас солнцем.", "Zato vixadniye paraduyut nas sontsem.", "Buning o‘rniga dam olish kunlari bizni quyosh bilan xursand qiladi."],
    ["В субботу и воскресенье будет ясно и тихо, днём до плюс трёх.", "F subotu i vaskrisenye budit yasna i tixa, dnyom da plyus tryox.", "Shanba va yakshanba kunlari ochiq va shamolsiz bo‘ladi, kunduzi plyus uch darajagacha."],
    ["Отличная погода для прогулки в парке, только одевайтесь теплее.", "Atlichnaya pagoda dlya pragulki f parke, tolka adivaytis tipleye.", "Parkda sayr qilish uchun ajoyib havo, faqat issiqroq kiyining."],
    ["Отопление в домах уже включили, так что дома будет тепло.", "Atapleniye v domax uje fklyuchili, tak shto doma budit tiplo.", "Uylarda isitish allaqachon yoqildi, shuning uchun uyda issiq bo‘ladi."],
    ["Берегите себя и своих близких. Хорошей вам недели!", "Birigite sibya i svaix bliskix. Xaroshey vam nideli!", "O‘zingizni va yaqinlaringizni asrang. Haftangiz yaxshi o‘tsin!"]
  ],
  questions: [
    { q: "Dushanba va seshanba kunlari havo qanday bo‘ladi?", options: ["Bulutli, yog‘ingarchiliksiz", "Yomg‘irli", "Ochiq va issiq"], answer: 0, line: 2 },
    { q: "Chorshanba kuni FVV nimadan ogohlantiradi?", options: ["Kuchli issiqdan", "Kuchli shamoldan", "Toshqindan"], answer: 1, line: 6 },
    { q: "Haydovchilarga nima maslahat berilmoqda?", options: ["Mashinada yurmaslik", "Benzin olib qo‘yish", "Qishki shinalarni qo‘yish"], answer: 2, line: 8 },
    { q: "Juma kuni kechasi harorat qancha bo‘ladi?", options: ["Minus to‘rt darajagacha", "Nol daraja", "Plyus uch daraja"], answer: 0, line: 10 },
    { q: "Dam olish kunlari havo qanday bo‘ladi?", options: ["Qorli", "Ochiq va shamolsiz", "Bulutli va yomg‘irli"], answer: 1, line: 14 }
  ]
});
