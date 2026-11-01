/*
  🗣 Fikr bildiring — speaking tasks (B1).
  Ruscha.addSpeaking([{ id, title, icon, q: [ru, pr, uz], phrases: [[ru, pr, uz], ...], sample: [[ru, pr, uz], ...] }])
    q       — the question (read aloud, with Uzbek meaning)
    phrases — 6-8 helpful phrases (listen & repeat)
    sample  — a sample answer, sentence by sentence
*/
Ruscha.addSpeaking([
  {
    id: "b1-s-ish", title: "Ishingiz haqida gapirib bering", icon: "💼",
    q: ["Расскажите о своей работе. Что вам нравится и что не нравится?", "Rasskajite a svayey rabote. Shto vam nravitsa i shto ne nravitsa?", "Ishingiz haqida gapirib bering. Nimasi yoqadi, nimasi yoqmaydi?"],
    phrases: [
      ["Я работаю ... в компании ...", "Ya rabotayu ... f kampanii ...", "Men ... kompaniyasida ... bo‘lib ishlayman"],
      ["Мой рабочий день начинается в ...", "Moy rabochiy den nachinayetsa v ...", "Ish kunim soat ...da boshlanadi"],
      ["В мои обязанности входит ...", "V mai abyazannasti fxodit ...", "Mening vazifalarimga ... kiradi"],
      ["Больше всего мне нравится то, что ...", "Bolshe fsivo mne nravitsa to, shto ...", "Menga eng ko‘p yoqadigani shuki, ..."],
      ["Единственный минус — это ...", "Yedinstvenniy minus — eta ...", "Yagona kamchiligi — bu ..."],
      ["У нас дружный коллектив.", "U nas drujniy kalliktif.", "Jamoamiz ahil."],
      ["В будущем я хотел бы ...", "V budushem ya xatel bi ...", "Kelajakda ...moqchi edim (ayol aytsa: «я хотела бы»)"]
    ],
    sample: [
      ["Я работаю водителем в службе доставки уже три года.", "Ya rabotayu vaditilem f slujbe dastafki uje tri goda.", "Uch yildan beri yetkazib berish xizmatida haydovchi bo‘lib ishlayman."],
      ["Мой рабочий день начинается в восемь утра и заканчивается в шесть вечера.", "Moy rabochiy den nachinayetsa v vosim utra i zakanchivayetsa f shest vechira.", "Ish kunim ertalab sakkizda boshlanib, kechqurun oltida tugaydi."],
      ["В мои обязанности входит доставка заказов по всему городу.", "V mai abyazannasti fxodit dastafka zakazaf pa fsemu goradu.", "Vazifalarimga butun shahar bo‘ylab buyurtmalarni yetkazish kiradi."],
      ["Больше всего мне нравится то, что я не сижу на одном месте и вижу новые районы.", "Bolshe fsivo mne nravitsa to, shto ya ne sizhu na adnom meste i vizhu noviye rayoni.", "Menga eng ko‘p yoqadigani — bir joyda o‘tirmayman va yangi tumanlarni ko‘raman."],
      ["Единственный минус — это пробки, особенно зимой.", "Yedinstvenniy minus — eta propki, asobinna zimoy.", "Yagona kamchiligi — tirbandliklar, ayniqsa qishda."],
      ["В будущем я хотел бы стать менеджером и работать в офисе.", "V budushem ya xatel bi stat menedjeram i rabotat v ofise.", "Kelajakda menejer bo‘lib, ofisda ishlamoqchi edim. (ayol aytsa: «я хотела бы»)"]
    ]
  },
  {
    id: "b1-s-shahar", title: "Shahar yoki qishloq — qayeri yaxshi?", icon: "🏙️",
    q: ["Где лучше жить: в большом городе или в деревне? Почему?", "Gde luchshe jit: v balshom gorade ili v dirivne? Pachemu?", "Qayerda yashagan yaxshi: katta shahardami yoki qishloqdami? Nega?"],
    phrases: [
      ["На мой взгляд, лучше жить ...", "Na moy vzglyat, luchshe jit ...", "Mening nazarimda, ...da yashagan yaxshi"],
      ["С одной стороны, ..., но с другой стороны, ...", "S adnoy staroni, ..., no z drugoy staroni, ...", "Bir tomondan, ..., lekin boshqa tomondan, ..."],
      ["В городе больше возможностей.", "V gorade bolshe vazmojnastey.", "Shaharda imkoniyatlar ko‘proq."],
      ["В деревне чистый воздух и тишина.", "V dirivne chistiy vozdux i tishina.", "Qishloqda havo toza va jimjitlik."],
      ["Жизнь в городе дороже.", "Jizn v gorade daroje.", "Shaharda hayot qimmatroq."],
      ["Для детей важно ...", "Dlya ditey vajna ...", "Bolalar uchun ... muhim"],
      ["Поэтому я считаю, что ...", "Paetamu ya shitayu, shto ...", "Shuning uchun men ... deb hisoblayman"]
    ],
    sample: [
      ["Я вырос в деревне, а сейчас живу в Москве, поэтому могу сравнить.", "Ya viros v dirivne, a sichas jivu v Maskve, paetamu magu sravnit.", "Men qishloqda o‘sganman, hozir esa Moskvada yashayman, shuning uchun solishtira olaman. (ayol aytsa: «Я выросла»)"],
      ["С одной стороны, в городе больше возможностей: работа, учёба, больницы.", "S adnoy staroni, v gorade bolshe vazmojnastey: rabota, uchyoba, balnitsi.", "Bir tomondan, shaharda imkoniyatlar ko‘proq: ish, o‘qish, shifoxonalar."],
      ["Но с другой стороны, жизнь в городе дороже, а люди всегда спешат.", "No z drugoy staroni, jizn v gorade daroje, a lyudi fsigda spishat.", "Lekin boshqa tomondan, shaharda hayot qimmatroq, odamlar esa doim shoshadi."],
      ["В деревне чистый воздух, тишина, и все соседи знают друг друга.", "V dirivne chistiy vozdux, tishina, i fse sasedi znayut druk druga.", "Qishloqda havo toza, jimjit va barcha qo‘shnilar bir-birini taniydi."],
      ["Для молодых, по-моему, лучше город, а для семьи с детьми — деревня.", "Dlya maladix, pa-moyimu, luchshe gorat, a dlya simyi z detmi — dirivnya.", "Menimcha, yoshlar uchun shahar, bolali oila uchun esa qishloq yaxshiroq."],
      ["Поэтому я хочу накопить денег и потом построить дом в своём кишлаке.", "Paetamu ya xachu nakapit deneg i patom pastroit dom f svayom kishlake.", "Shuning uchun pul yig‘ib, keyin o‘z qishlog‘imda uy qurmoqchiman."]
    ]
  },
  {
    id: "b1-s-birinchi-kun", title: "Rossiyadagi birinchi kuningiz", icon: "🛬",
    q: ["Как прошёл ваш первый день в России? Что вы запомнили?", "Kak prashol vash perviy den v Rassii? Shto vi zapomnili?", "Rossiyadagi birinchi kuningiz qanday o‘tgan? Nimalar esingizda qolgan?"],
    phrases: [
      ["Я приехал в Россию в ... году.", "Ya priyexal v Rassiyu v ... gadu.", "Rossiyaga ...-yilda kelganman. (ayol aytsa: «Я приехала»)"],
      ["Меня встретил ...", "Minya fstretil ...", "Meni ... kutib oldi"],
      ["Первое, что меня удивило, — это ...", "Pervaye, shto minya udivila, — eta ...", "Meni birinchi hayron qoldirgan narsa — bu ..."],
      ["Я почти ничего не понимал.", "Ya pachti nichivo ne panimal.", "Deyarli hech narsani tushunmasdim. (ayol aytsa: «не понимала»)"],
      ["Мне было немного страшно.", "Mne bila nemnoga strashna.", "Biroz qo‘rqinchli edi."],
      ["Я до сих пор помню, как ...", "Ya da six por pomnyu, kak ...", "...ni hanuzgacha eslayman"],
      ["Теперь мне смешно вспоминать об этом.", "Tipyer mne smishno fspaminat ab etam.", "Endi buni eslash menga kulgili."]
    ],
    sample: [
      ["Я приехал в Россию зимой, в декабре две тысячи восемнадцатого года.", "Ya priyexal v Rassiyu zimoy, v dikabre dve tisichi vasimnatsatava goda.", "Rossiyaga qishda, 2018-yil dekabrda kelganman. (ayol aytsa: «Я приехала»)"],
      ["Первое, что меня удивило, — это мороз: было минус двадцать.", "Pervaye, shto minya udivila, — eta maros: bila minus dvatsat.", "Meni birinchi hayron qoldirgan narsa — sovuq edi: minus yigirma daraja edi."],
      ["В аэропорту меня встретил двоюродный брат и отвёз к себе домой.", "V aerapartu minya fstretil dvayurodniy brat i atvyos k sibe damoy.", "Aeroportda meni amakivachcham kutib olib, uyiga olib ketdi."],
      ["В метро я почти ничего не понимал и боялся потеряться.", "V mitro ya pachti nichivo ne panimal i bayalsa patiryatsa.", "Metroda deyarli hech narsani tushunmasdim va adashib qolishdan qo‘rqardim. (ayol aytsa: «не понимала и боялась»)"],
      ["Я до сих пор помню, как в магазине вместо молока купил кефир.", "Ya da six por pomnyu, kak v magazine vmesta malaka kupil kifir.", "Do‘konda sut o‘rniga kefir sotib olganimni hanuzgacha eslayman. (ayol aytsa: «купила»)"],
      ["Теперь мне смешно вспоминать об этом, а тогда было совсем не смешно.", "Tipyer mne smishno fspaminat ab etam, a tagda bila safsem ne smishno.", "Endi buni eslash kulgili, o‘shanda esa umuman kulgili emas edi."]
    ]
  },
  {
    id: "b1-s-oila", title: "Oilangiz haqida", icon: "👨‍👩‍👧",
    q: ["Расскажите о своей семье. Кто чем занимается?", "Rasskajite a svayey simye. Kto chem zanimayetsa?", "Oilangiz haqida gapirib bering. Kim nima ish qiladi?"],
    phrases: [
      ["У меня большая (небольшая) семья.", "U minya balshaya (nibalshaya) simya.", "Oilam katta (kichik)."],
      ["Я женат, у нас ... детей.", "Ya jinat, u nas ... ditey.", "Uylanganman, ... farzandimiz bor. (ayol aytsa: «Я замужем»)"],
      ["Мой отец на пенсии.", "Moy atets na pensii.", "Otam nafaqada."],
      ["Мама занимается домом.", "Mama zanimayetsa domam.", "Onam uy ishlari bilan band."],
      ["Старший брат работает ...", "Starshiy brat rabotayet ...", "Akam ... bo‘lib ishlaydi"],
      ["Мы часто созваниваемся по видеосвязи.", "Mi chasta sazvanivayemsya pa videasvyazi.", "Tez-tez video orqali gaplashamiz."],
      ["Я очень скучаю по ним.", "Ya ochen skuchayu pa nim.", "Ularni juda sog‘inaman."],
      ["Для меня семья — это самое главное.", "Dlya minya simya — eta samaye glavnaye.", "Men uchun oila — eng muhimi."]
    ],
    sample: [
      ["У меня большая семья: родители, два брата и сестра.", "U minya balshaya simya: raditili, dva brata i sistra.", "Oilam katta: ota-onam, ikki akam va singlim."],
      ["Отец уже на пенсии, раньше он работал учителем, а мама всю жизнь занимается домом.", "Atets uje na pensii, ranshe on rabotal uchitilem, a mama fsyu jizn zanimayetsa domam.", "Otam nafaqada, ilgari o‘qituvchi bo‘lib ishlagan, onam esa butun umr uy ishlari bilan band."],
      ["Старший брат работает в Самарканде врачом, а младший учится в университете.", "Starshiy brat rabotayet f Samarkande vracham, a mladshiy uchitsa v univirsitete.", "Katta akam Samarqandda shifokor, kichigi universitetda o‘qiydi."],
      ["Я женат, у нас с женой двое детей: сын и дочка.", "Ya jinat, u nas s jinoy dvoye ditey: sin i dochka.", "Uylanganman, xotinim bilan ikki farzandimiz bor: o‘g‘il va qiz. (ayol aytsa: «Я замужем, у нас с мужем…»)"],
      ["Я живу в Москве, поэтому мы часто созваниваемся по видеосвязи.", "Ya jivu v Maskve, paetamu mi chasta sazvanivayemsya pa videasvyazi.", "Men Moskvada yashayman, shuning uchun tez-tez video orqali gaplashamiz."],
      ["Я очень скучаю по ним, ведь для меня семья — это самое главное.", "Ya ochen skuchayu pa nim, vet dlya minya simya — eta samaye glavnaye.", "Ularni juda sog‘inaman, axir men uchun oila — eng muhimi."]
    ]
  },
  {
    id: "b1-s-bosh-vaqt", title: "Bo‘sh vaqtingiz va dam olish kunlari", icon: "🎯",
    q: ["Как вы проводите свободное время и выходные?", "Kak vi pravoditi svabodnaye vremya i vixadniye?", "Bo‘sh vaqtingiz va dam olish kunlarini qanday o‘tkazasiz?"],
    phrases: [
      ["Свободного времени у меня немного.", "Svabodnava vremini u minya nimnoga.", "Bo‘sh vaqtim ko‘p emas."],
      ["По выходным я обычно ...", "Pa vixadnim ya abichna ...", "Dam olish kunlari odatda ..."],
      ["Я люблю ... с друзьями.", "Ya lyublyu ... z druzyami.", "Do‘stlarim bilan ...ni yaxshi ko‘raman"],
      ["Иногда мы ходим в ...", "Inagda mi xodim v ...", "Ba’zan ...ga boramiz"],
      ["Если погода хорошая, ...", "Yesli pagoda xaroshaya, ...", "Agar havo yaxshi bo‘lsa, ..."],
      ["Мне нравится отдыхать активно.", "Mne nravitsa atdixat aktivna.", "Faol dam olishni yaxshi ko‘raman."],
      ["А вечером я ...", "A vecheram ya ...", "Kechqurun esa men ..."]
    ],
    sample: [
      ["Свободного времени у меня немного, потому что я работаю шесть дней в неделю.", "Svabodnava vremini u minya nimnoga, patamushta ya rabotayu shest dney v nidelyu.", "Bo‘sh vaqtim ko‘p emas, chunki haftada olti kun ishlayman."],
      ["В воскресенье я обычно высыпаюсь, а потом звоню родителям.", "V vaskrisenye ya abichna visipayus, a patom zvanyu raditilyam.", "Yakshanba kuni odatda yaxshilab uxlab olaman, keyin ota-onamga qo‘ng‘iroq qilaman."],
      ["Днём я люблю играть в футбол с друзьями во дворе.", "Dnyom ya lyublyu igrat f futbol z druzyami va dvare.", "Kunduzi do‘stlarim bilan hovlida futbol o‘ynashni yaxshi ko‘raman."],
      ["Если погода хорошая, мы едем в парк или на речку.", "Yesli pagoda xaroshaya, mi yedim f park ili na rechku.", "Agar havo yaxshi bo‘lsa, parkka yoki daryo bo‘yiga boramiz."],
      ["Иногда мы ходим в узбекское кафе и готовим плов вместе.", "Inagda mi xodim v uzbekskaye kafe i gatovim plof vmeste.", "Ba’zan o‘zbek kafesiga boramiz va birga palov pishiramiz."],
      ["А вечером я смотрю фильмы на русском, чтобы учить язык.", "A vecheram ya smatryu filmi na ruskam, shtobi uchit yazik.", "Kechqurun esa til o‘rganish uchun ruscha filmlar ko‘raman."]
    ]
  },
  {
    id: "b1-s-ona-shahar", title: "Ona shahringiz haqida", icon: "🏞️",
    q: ["Расскажите о своём родном городе. Чем он знаменит?", "Rasskajite a svayom rodnam gorade. Chem on znamenit?", "Ona shahringiz haqida gapirib bering. U nimasi bilan mashhur?"],
    phrases: [
      ["Я родом из ...", "Ya rodam iz ...", "Men ...danman"],
      ["Это древний (небольшой) город.", "Eta drevniy (nibalshoy) gorat.", "Bu qadimiy (kichik) shahar."],
      ["Он находится в ... части страны.", "On naxoditsa v ... chasti strani.", "U mamlakatning ... qismida joylashgan"],
      ["Город знаменит своими ...", "Gorat znamenit svaimi ...", "Shahar o‘zining ...lari bilan mashhur"],
      ["Обязательно нужно увидеть ...", "Abizatelna nujna uvidet ...", "Albatta ...ni ko‘rish kerak"],
      ["Летом там очень жарко.", "Letam tam ochen jarka.", "Yozda u yer juda issiq."],
      ["Люди там очень гостеприимные.", "Lyudi tam ochen gastipriimniye.", "U yerdagi odamlar juda mehmondo‘st."]
    ],
    sample: [
      ["Я родом из Бухары. Это один из самых древних городов Узбекистана.", "Ya rodam iz Buxari. Eta adin is samix drevnix garadof Uzbikistana.", "Men Buxorodanman. Bu O‘zbekistonning eng qadimiy shaharlaridan biri."],
      ["Ему больше двух тысяч лет.", "Yimu bolshe dvux tisich let.", "Uning yoshi ikki ming yildan ortiq."],
      ["Город знаменит своими мечетями, медресе и старыми улицами.", "Gorat znamenit svaimi michetyami, midrese i starimi ulitsami.", "Shahar masjidlari, madrasalari va eski ko‘chalari bilan mashhur."],
      ["Туристам обязательно нужно увидеть минарет Калян и крепость Арк.", "Turistam abizatelna nujna uvidet minaret Kalyan i krepast Ark.", "Turistlar albatta Minorai Kalon va Ark qal’asini ko‘rishlari kerak."],
      ["Летом там очень жарко, до сорока пяти градусов, поэтому лучше приезжать весной или осенью.", "Letam tam ochen jarka, da saraka pyati gradusaf, paetamu luchshe priyezjat vesnoy ili osinyu.", "Yozda u yer juda issiq, qirq besh darajagacha, shuning uchun bahorda yoki kuzda kelgan yaxshi."],
      ["Люди у нас очень гостеприимные: гостя всегда угостят чаем и пловом.", "Lyudi u nas ochen gastipriimniye: gostya fsigda ugastyat chayem i plovam.", "Bizda odamlar juda mehmondo‘st: mehmonni doim choy va palov bilan siylashadi."]
    ]
  },
  {
    id: "b1-s-rus-tili", title: "Rus tilini qanday o‘rganyapsiz?", icon: "📚",
    q: ["Как вы учите русский язык? Что для вас самое трудное?", "Kak vi uchite ruskiy yazik? Shto dlya vas samaye trudnaye?", "Rus tilini qanday o‘rganyapsiz? Siz uchun eng qiyini nima?"],
    phrases: [
      ["Я учу русский уже ...", "Ya uchu ruskiy uje ...", "Rus tilini ...dan beri o‘rganyapman"],
      ["Каждый день я стараюсь ...", "Kajdiy den ya starayus ...", "Har kuni ...ga harakat qilaman"],
      ["Мне помогает ...", "Mne pamagayet ...", "Menga ... yordam beradi"],
      ["Самое трудное для меня — это ...", "Samaye trudnaye dlya minya — eta ...", "Men uchun eng qiyini — bu ..."],
      ["Я часто путаю падежи.", "Ya chasta putayu padeji.", "Kelishiklarni tez-tez adashtiraman."],
      ["Я не боюсь делать ошибки.", "Ya ne bayus delat ashipki.", "Xato qilishdan qo‘rqmayman."],
      ["Моя цель — ...", "Maya tsel — ...", "Maqsadim — ..."]
    ],
    sample: [
      ["Я учу русский уже два года, в основном самостоятельно.", "Ya uchu ruskiy uje dva goda, v asnovnam samastayatilna.", "Rus tilini ikki yildan beri, asosan mustaqil o‘rganyapman."],
      ["Каждый день я стараюсь выучить десять новых слов через приложение.", "Kajdiy den ya starayus viuchit desit novix slof cheris prilajeniye.", "Har kuni ilova orqali o‘nta yangi so‘z yodlashga harakat qilaman."],
      ["Мне очень помогает общение на работе и русские сериалы с субтитрами.", "Mne ochen pamagayet apsheniye na rabote i ruskiye sirialy s suptitrami.", "Menga ishdagi muloqot va subtitrli rus seriallari juda yordam beradi."],
      ["Самое трудное для меня — это падежи и окончания, я часто их путаю.", "Samaye trudnaye dlya minya — eta padeji i akanchaniya, ya chasta ix putayu.", "Men uchun eng qiyini — kelishiklar va qo‘shimchalar, ularni tez-tez adashtiraman."],
      ["Но я не боюсь делать ошибки, потому что без ошибок нельзя научиться.", "No ya ne bayus delat ashipki, patamushta biz ashibak nilzya nauchitsa.", "Lekin xato qilishdan qo‘rqmayman, chunki xatosiz o‘rganib bo‘lmaydi."],
      ["Моя цель — сдать экзамен на уровень B1 и найти работу в офисе.", "Maya tsel — zdat ekzamen na uroven be adin i nayti rabotu v ofise.", "Maqsadim — B1 darajasi imtihonini topshirib, ofisdan ish topish."]
    ]
  },
  {
    id: "b1-s-dost", title: "Eng yaqin do‘stingiz", icon: "🤝",
    q: ["Расскажите о своём лучшем друге. Почему вы дружите?", "Rasskajite a svayom luchshem druge. Pachemu vi drujite?", "Eng yaqin do‘stingiz haqida gapirib bering. Nega do‘stsizlar?"],
    phrases: [
      ["Моего лучшего друга зовут ...", "Mayevo luchshiva druga zavut ...", "Eng yaqin do‘stimning ismi ..."],
      ["Мы познакомились ...", "Mi paznakomilis ...", "Biz ...da tanishganmiz"],
      ["Мы дружим уже ... лет.", "Mi drujim uje ... let.", "... yildan beri do‘stmiz"],
      ["Он очень добрый и надёжный человек.", "On ochen dobriy i nadyojniy chilavek.", "U juda mehribon va ishonchli odam."],
      ["Мы понимаем друг друга с полуслова.", "Mi panimayem druk druga s paluslova.", "Bir-birimizni yarim so‘zdan tushunamiz."],
      ["Однажды он мне очень помог.", "Adnajdi on mne ochen pamok.", "Bir kuni u menga juda yordam bergan."],
      ["Я ценю в нём ...", "Ya tsenyu v nyom ...", "Undagi ...ni qadrlayman"]
    ],
    sample: [
      ["Моего лучшего друга зовут Бекзод, мы дружим уже пятнадцать лет.", "Mayevo luchshiva druga zavut Bekzot, mi drujim uje pitnatsat let.", "Eng yaqin do‘stimning ismi Bekzod, o‘n besh yildan beri do‘stmiz."],
      ["Мы познакомились в школе, когда сидели за одной партой.", "Mi paznakomilis f shkole, kagda sideli za adnoy partay.", "Maktabda bir partada o‘tirganimizda tanishganmiz."],
      ["Он очень добрый, весёлый и надёжный человек.", "On ochen dobriy, visyoliy i nadyojniy chilavek.", "U juda mehribon, quvnoq va ishonchli odam."],
      ["Однажды, когда я остался без работы, он одолжил мне деньги и помог найти новое место.", "Adnajdi, kagda ya astalsa biz raboti, on adaljil mne dengi i pamok nayti novaye mesta.", "Bir kuni ishsiz qolganimda, u menga qarz berib, yangi ish topishga yordam bergan. (ayol aytsa: «я осталась»)"],
      ["Мы понимаем друг друга с полуслова и никогда не ссоримся из-за ерунды.", "Mi panimayem druk druga s paluslova i nikagda ne ssorimsya iz-za yirundi.", "Bir-birimizni yarim so‘zdan tushunamiz va arzimagan narsa uchun hech qachon urishmaymiz."],
      ["Больше всего я ценю в нём честность: он всегда говорит правду, даже неприятную.", "Bolshe fsivo ya tsenyu v nyom chesnast: on fsigda gavarit pravdu, dashe nipriyatnuyu.", "Unda eng ko‘p halollikni qadrlayman: u doim rostini aytadi, hatto yoqimsiz bo‘lsa ham."]
    ]
  },
  {
    id: "b1-s-soglom", title: "Sog‘lom turmush: sport va ovqatlanish", icon: "💪",
    q: ["Что вы делаете, чтобы быть здоровым?", "Shto vi delayete, shtobi bit zdarovim?", "Sog‘lom bo‘lish uchun nima qilasiz?"],
    phrases: [
      ["Я стараюсь правильно питаться.", "Ya starayus pravilna pitatsa.", "To‘g‘ri ovqatlanishga harakat qilaman."],
      ["Я занимаюсь ... раза в неделю.", "Ya zanimayus ... raza v nidelyu.", "Haftada ... marta shug‘ullanaman"],
      ["Я почти не ем сладкое и фастфуд.", "Ya pachti ne yem slatkaye i fastfut.", "Shirinlik va fastfudni deyarli yemayman."],
      ["Я бросил курить.", "Ya brosil kurit.", "Chekishni tashladim. (ayol aytsa: «Я бросила»)"],
      ["Важно хорошо высыпаться.", "Vajna xarasho visipatsa.", "Yaxshi uxlab olish muhim."],
      ["К сожалению, у меня не всегда получается ...", "K sajaleniyu, u minya ne fsigda paluchayetsa ...", "Afsuski, har doim ham ...ning uddasidan chiqolmayman"],
      ["Я заметил, что ...", "Ya zametil, shto ...", "...ni sezdim (ayol aytsa: «Я заметила»)"]
    ],
    sample: [
      ["Честно говоря, раньше я совсем не думал о здоровье.", "Chesna gavarya, ranshe ya safsem ne dumal a zdarovye.", "Rostini aytsam, ilgari sog‘lig‘im haqida umuman o‘ylamasdim. (ayol aytsa: «не думала»)"],
      ["Но год назад у меня начала болеть спина, и врач посоветовал заниматься спортом.", "No got nazat u minya nachala balet spina, i vrach pasavetaval zanimatsa sportam.", "Lekin bir yil oldin belim og‘riy boshladi, shifokor sport bilan shug‘ullanishni maslahat berdi."],
      ["Теперь я хожу в бассейн два раза в неделю.", "Tipyer ya xaju v basseyn dva raza v nidelyu.", "Endi haftada ikki marta basseynga boraman."],
      ["Я стараюсь правильно питаться и почти не ем фастфуд.", "Ya starayus pravilna pitatsa i pachti ne yem fastfut.", "To‘g‘ri ovqatlanishga harakat qilaman va fastfudni deyarli yemayman."],
      ["К сожалению, у меня не всегда получается высыпаться из-за работы.", "K sajaleniyu, u minya ne fsigda paluchayetsa visipatsa iz-za raboti.", "Afsuski, ish tufayli har doim ham yaxshi uxlay olmayman."],
      ["Но я заметил, что чувствую себя намного лучше, и спина почти не болит.", "No ya zametil, shto chustvuyu sibya namnoga luchshe, i spina pachti ne balit.", "Lekin o‘zimni ancha yaxshi his qilayotganimni sezdim, belim deyarli og‘rimaydi. (ayol aytsa: «я заметила»)"]
    ]
  },
  {
    id: "b1-s-reja", title: "Kelajak rejalaringiz", icon: "🌟",
    q: ["Какие у вас планы на ближайшие пять лет?", "Kakiye u vas plani na blijayshiye pyat let?", "Yaqin besh yilga qanday rejalaringiz bor?"],
    phrases: [
      ["Я собираюсь ...", "Ya sabirayus ...", "...moqchiman (rejam bor)"],
      ["Моя главная цель — ...", "Maya glavnaya tsel — ...", "Asosiy maqsadim — ..."],
      ["Если всё будет хорошо, ...", "Yesli fsyo budit xarasho, ...", "Hammasi yaxshi bo‘lsa, ..."],
      ["Для этого мне нужно ...", "Dlya etava mne nujna ...", "Buning uchun menga ... kerak"],
      ["Я мечтаю о том, чтобы ...", "Ya michtayu a tom, shtobi ...", "...ni orzu qilaman"],
      ["Я ещё не решил, ...", "Ya yishyo ne rishil, ...", "Hali hal qilmadim, ... (ayol aytsa: «не решила»)"],
      ["Всё зависит от ...", "Fsyo zavisit at ...", "Hammasi ...ga bog‘liq"]
    ],
    sample: [
      ["Моя главная цель на ближайшие пять лет — накопить денег на собственный дом.", "Maya glavnaya tsel na blijayshiye pyat let — nakapit deneg na sopstvinniy dom.", "Yaqin besh yildagi asosiy maqsadim — o‘z uyim uchun pul yig‘ish."],
      ["Для этого я каждый месяц откладываю часть зарплаты.", "Dlya etava ya kajdiy mesits atkladivayu chast zarplati.", "Buning uchun har oy maoshimning bir qismini chetga qo‘yaman."],
      ["Ещё я собираюсь получить права и купить машину.", "Yishyo ya sabirayus paluchit prava i kupit mashinu.", "Yana haydovchilik guvohnomasini olib, mashina sotib olmoqchiman."],
      ["Если всё будет хорошо, через два года я перевезу сюда жену и детей.", "Yesli fsyo budit xarasho, cheris dva goda ya pirivizu syuda jinu i ditey.", "Hammasi yaxshi bo‘lsa, ikki yildan keyin xotinim va bolalarimni bu yerga olib kelaman."],
      ["Я ещё не решил, останемся ли мы в России навсегда.", "Ya yishyo ne rishil, astanimsya li mi v Rassii nafsigda.", "Rossiyada butunlay qolamizmi-yo‘qmi, hali hal qilmadim. (ayol aytsa: «не решила»)"],
      ["Всё зависит от работы и от того, как дети будут учиться.", "Fsyo zavisit at raboti i at tavo, kak deti budut uchitsa.", "Hammasi ishga va bolalarning qanday o‘qishiga bog‘liq."]
    ]
  }
]);
