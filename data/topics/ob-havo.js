Ruscha.addTopic({
  id: "ob-havo",
  title: "Ob-havo",
  icon: "⛅",
  templates: [
    { ru: "Сегодня ...", pr: "Sivodnya ...", uz: "Bugun ...", ex: ["Сегодня холодно.", "Сегодня жарко.", "Сегодня идёт дождь."] },
    { ru: "Завтра будет ...", pr: "Zaftra budet ...", uz: "Ertaga ... bo‘ladi", ex: ["Завтра будет снег.", "Завтра будет тепло."] },
    { ru: "Надо взять ...", pr: "Nada vzyat ...", uz: "... olish kerak", ex: ["Надо взять зонт.", "Надо взять куртку."] }
  ],
  phrases: [
    { ru: "Какая сегодня погода?", pr: "Kakaya sivodnya pagoda?", uz: "Bugun ob-havo qanaqa?", sit: "Ertalab tashqariga chiqishdan oldin ob-havoni bilmoqchisiz." },
    { ru: "Сегодня холодно.", pr: "Sivodnya xoladna.", uz: "Bugun sovuq." },
    { ru: "Сегодня жарко.", pr: "Sivodnya jarka.", uz: "Bugun issiq." },
    { ru: "Сегодня идёт дождь.", pr: "Sivodnya idyot dosht.", uz: "Bugun yomg‘ir yog‘yapti." },
    { ru: "Сегодня солнечно.", pr: "Sivodnya solnichna.", uz: "Bugun quyoshli." },
    { ru: "Хорошая погода сегодня!", pr: "Xaroshaya pagoda sivodnya!", uz: "Bugun havo ajoyib!" },
    { ru: "Пасмурно.", pr: "Pasmurna.", uz: "Havo bulutli." },
    { ru: "Идёт снег.", pr: "Idyot snek.", uz: "Qor yog‘yapti." },
    { ru: "Сильный ветер.", pr: "Silniy veter.", uz: "Kuchli shamol." },
    { ru: "Сегодня туман, плохо видно.", pr: "Sivodnya tuman, ploxa vidna.", uz: "Bugun tuman, yaxshi ko‘rinmayapti.", sit: "Ertalab mashina haydashingiz kerak, lekin hech narsa ko‘rinmayapti." },
    { ru: "Сколько градусов?", pr: "Skolka gradusaf?", uz: "Necha daraja?" },
    { ru: "На улице минус двадцать.", pr: "Na ulitse minus dvatsat.", uz: "Tashqarida minus yigirma daraja.", sit: "Do‘stingiz tashqarida qanchalik sovuq ekanini so‘radi." },
    { ru: "Какая погода будет завтра?", pr: "Kakaya pagoda budet zaftra?", uz: "Ertaga ob-havo qanaqa bo‘ladi?", sit: "Ertaga tashqarida ishlaysiz, ob-havoni oldindan bilmoqchisiz." },
    { ru: "Завтра будет снег.", pr: "Zaftra budet snek.", uz: "Ertaga qor yog‘adi." },
    { ru: "Завтра будет тепло.", pr: "Zaftra budet tipla.", uz: "Ertaga iliq bo‘ladi." },
    { ru: "Будет гроза.", pr: "Budet graza.", uz: "Momaqaldiroq bo‘ladi." },
    { ru: "Дождь кончился.", pr: "Dosht kanchilsa.", uz: "Yomg‘ir to‘xtadi." },
    { ru: "Надо взять зонт.", pr: "Nada vzyat zont.", uz: "Soyabon olish kerak.", sit: "Osmonni qora bulut qopladi, siz uydan chiqyapsiz." },
    { ru: "Надо взять куртку.", pr: "Nada vzyat kurtku.", uz: "Kurtka olish kerak." },
    { ru: "Оденься теплее.", pr: "Adensa tipleye.", uz: "Issiqroq kiyin.", sit: "Ukangiz qishda yupqa kiyimda tashqariga chiqmoqchi." },
    { ru: "Скользко, осторожно!", pr: "Skolska, astarojna!", uz: "Sirpanchiq, ehtiyot bo‘ling!", sit: "Yo‘lda muz bor, yoningizdagi odamni ogohlantirasiz." },
    { ru: "Мне холодно.", pr: "Mne xoladna.", uz: "Menga sovuq (sovqotyapman)." },
    { ru: "Мне жарко.", pr: "Mne jarka.", uz: "Menga issiq." },
    { ru: "Я замёрз.", pr: "Ya zamyors.", uz: "Sovqotib qoldim. (ayol aytsa: «Я замёрзла»)", sit: "Bekatda uzoq kutdingiz, qo‘l-oyog‘ingiz muzlab qoldi." },
    { ru: "Я не привык к такому холоду.", pr: "Ya ne privik k takomu xoladu.", uz: "Bunday sovuqqa o‘rganmaganman. (ayol aytsa: «Я не привыкла к такому холоду»)", sit: "Bu Rossiyadagi birinchi qishingiz." },
    { ru: "Когда в Москве начинается зима?", pr: "Kagda v Maskve nachinayetsa zima?", uz: "Moskvada qish qachon boshlanadi?" },
    { ru: "Здесь зима очень длинная.", pr: "Zdes zima ochen dlinnaya.", uz: "Bu yerda qish juda uzun." },
    { ru: "В Ташкенте сейчас тепло.", pr: "F Tashkente sichas tipla.", uz: "Toshkentda hozir iliq.", sit: "Hamkasbingiz O‘zbekistonda ob-havo qanaqa deb so‘radi." },
    { ru: "Летом у нас плюс сорок.", pr: "Letam u nas plyus sorak.", uz: "Yozda bizda plyus qirq daraja." },
    { ru: "Я люблю весну.", pr: "Ya lyublyu visnu.", uz: "Men bahorni yaxshi ko‘raman." }
  ],
  dialogues: [
    {
      title: "Ertangi ob-havo",
      a: "Ali",
      b: "Dima",
      lines: [
        ["a", "Дима, какая погода будет завтра?", "Dima, kakaya pagoda budet zaftra?", "Dima, ertaga ob-havo qanaqa bo‘ladi?"],
        ["b", "Завтра будет снег и минус пятнадцать.", "Zaftra budet snek i minus pitnatsat.", "Ertaga qor yog‘adi, minus o‘n besh daraja bo‘ladi."],
        ["a", "Ого! Я не привык к такому холоду.", "Aga! Ya ne privik k takomu xoladu.", "Voy! Men bunday sovuqqa o‘rganmaganman."],
        ["b", "Оденься теплее и надень шапку.", "Adensa tipleye i nadin shapku.", "Issiqroq kiyin va telpak kiy."],
        ["a", "А в Ташкенте сейчас тепло!", "A f Tashkente sichas tipla!", "Toshkentda esa hozir iliq!"],
        ["b", "Повезло им!", "Pavizlo im!", "Ularning omadi bor ekan!"]
      ]
    },
    {
      title: "Yomg‘ir yog‘yapti",
      a: "Malika",
      b: "Sveta",
      lines: [
        ["a", "Света, идёт дождь! У тебя есть зонт?", "Sveta, idyot dosht! U tibya yest zont?", "Sveta, yomg‘ir yog‘yapti! Soyaboning bormi?"],
        ["b", "Нет, я забыла его дома.", "Net, ya zabila yivo doma.", "Yo‘q, uni uyda unutib qoldiribman."],
        ["a", "Давай подождём в кафе.", "Davay padajdyom f kafe.", "Kel, kafeda kutib turamiz."],
        ["b", "Хорошая идея. Я замёрзла.", "Xaroshaya ideya. Ya zamyorzla.", "Yaxshi fikr. Sovqotib qoldim."],
        ["a", "Смотри, дождь кончился!", "Smatri, dosht kanchilsa!", "Qara, yomg‘ir to‘xtadi!"],
        ["b", "Ура! Пойдём!", "Ura! Paydyom!", "Ura! Ketdik!"]
      ]
    }
  ]
});
