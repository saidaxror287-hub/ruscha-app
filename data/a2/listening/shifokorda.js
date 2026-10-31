Ruscha.addListening({
  id: "a2-l-shifokorda",
  title: "Kasal bo‘lib qoldim",
  icon: "🩺",
  about: "Anvar qanday kasal bo‘lgani va shifokorga borgani haqida gapiradi.",
  lines: [
    ["В понедельник утром я плохо себя чувствовал.", "F panidelnik utram ya ploxa sibya chustvaval.", "Dushanba kuni ertalab o‘zimni yomon his qildim."],
    ["У меня болела голова и была температура тридцать восемь.", "U minya balela galava i bila timpiratura tritsat vosim.", "Boshim og‘rirdi va isitmam o‘ttiz sakkiz edi."],
    ["Я позвонил начальнику и сказал, что не приду на работу.", "Ya pazvanil nachalniku i skazal, shto ne pridu na rabotu.", "Boshliqqa qo‘ng‘iroq qilib, ishga bormasligimni aytdim."],
    ["Потом я записался к врачу в поликлинику.", "Patom ya zapisalsa k vrachu f paliklinniku.", "Keyin poliklinikaga shifokor qabuliga yozildim."],
    ["Врач посмотрел горло и послушал лёгкие.", "Vrach pasmatrel gorla i paslushal lyoxkiye.", "Shifokor tomog‘imni ko‘rdi va o‘pkamni eshitdi."],
    ["Он сказал, что это грипп, и прописал лекарства.", "On skazal, shto eta grip, i prapisal likarstva.", "U bu gripp ekanini aytdi va dorilar yozib berdi."],
    ["Ещё он открыл мне больничный на пять дней.", "Yishyo on atkril mne balnichniy na pyat dney.", "Yana menga besh kunlik kasallik varaqasi ochdi."],
    ["Я купил лекарства в аптеке рядом с домом.", "Ya kupil likarstva v apteke ryadam z domam.", "Dorilarni uy yonidagi dorixonadan oldim."],
    ["Три дня я лежал дома, пил чай с лимоном и много спал.", "Tri dnya ya lijal doma, pil chay s limonam i mnoga spal.", "Uch kun uyda yotdim, limonli choy ichdim va ko‘p uxladim."],
    ["В пятницу мне стало лучше, а в понедельник я вышел на работу.", "F pyatnitsu mne stala lutshe, a f panidelnik ya vishel na rabotu.", "Juma kuni ahvolim yaxshilandi, dushanba kuni esa ishga chiqdim."]
  ],
  questions: [
    { q: "Anvarning isitmasi qancha edi?", options: ["37", "38", "39"], answer: 1, line: 1 },
    { q: "Anvar kimga qo‘ng‘iroq qildi?", options: ["Boshlig‘iga", "Onasiga", "Do‘stiga"], answer: 0, line: 2 },
    { q: "Shifokor qanday tashxis qo‘ydi?", options: ["Allergiya", "Gripp", "Suyak singan"], answer: 1, line: 5 },
    { q: "Kasallik varaqasi necha kunga ochildi?", options: ["Uch kunga", "Bir haftaga", "Besh kunga"], answer: 2, line: 6 }
  ]
});
