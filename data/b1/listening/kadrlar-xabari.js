Ruscha.addListening({
  id: "b1-l-kadrlar-xabari",
  title: "Kadrlar bo‘limidan xabar",
  icon: "📩",
  about: "Kompaniyaning kadrlar bo‘limi xodimasi Javlonga ovozli xabar qoldirdi.",
  lines: [
    ["Добрый день, Джавлон! Это Ольга Петровна из отдела кадров компании «СтройГрад».", "Dobriy den, Djavlon! Eta Olga Pitrovna iz atdela kadraf kampanii «Stroygrat».", "Xayrli kun, Javlon! Bu «StroyGrad» kompaniyasining kadrlar bo‘limidan Olga Petrovna."],
    ["Звоню вам по поводу вашего собеседования на прошлой неделе.", "Zvanyu vam pa povadu vashiva sabisedavaniya na proshlay nidele.", "O‘tgan haftadagi suhbatingiz yuzasidan qo‘ng‘iroq qilyapman."],
    ["У меня для вас хорошая новость: руководитель решил взять вас на работу.", "U minya dlya vas xaroshaya novast: rukavaditel rishil vzyat vas na rabotu.", "Siz uchun yaxshi yangiligim bor: rahbar sizni ishga olishga qaror qildi."],
    ["Вы будете работать мастером участка на нашем объекте в Химках.", "Vi budite rabotat masteram uchastka na nashem abyekte f Ximkax.", "Siz Ximkidagi obyektimizda uchastka ustasi bo‘lib ishlaysiz."],
    ["Зарплата, как мы и договаривались, девяносто тысяч рублей в месяц.", "Zarplata, kak mi i dagavarivalis, divyanosta tisich rubley v mesits.", "Maosh, kelishganimizdek, oyiga to‘qson ming rubl."],
    ["Первые три месяца — испытательный срок.", "Perviye tri mesitsa — ispitatilniy srok.", "Dastlabki uch oy — sinov muddati."],
    ["Мы будем оформлять вас официально, по трудовому договору.", "Mi budim afarmlyat vas afitsialna, pa trudavomu dagavoru.", "Sizni rasmiy, mehnat shartnomasi bo‘yicha rasmiylashtiramiz."],
    ["Для этого вам нужно подъехать к нам в офис до конца недели.", "Dlya etava vam nujna padyexat k nam v ofis da kantsa nideli.", "Buning uchun hafta oxirigacha ofisimizga kelishingiz kerak."],
    ["Возьмите, пожалуйста, паспорт, патент, СНИЛС и ИНН.", "Vazmite, pajalusta, paspart, patent, snils i i-en-en.", "Iltimos, pasport, patent, SNILS va INNni oling."],
    ["Если у вас есть трудовая книжка, её тоже принесите.", "Yesli u vas yest trudavaya knishka, yeyo toje prinisite.", "Agar mehnat daftarchangiz bo‘lsa, uni ham olib keling."],
    ["Ещё вам нужно пройти медосмотр. Направление я вам дам.", "Yishyo vam nujna prayti medasmotr. Napravleniye ya vam dam.", "Yana tibbiy ko‘rikdan o‘tishingiz kerak. Yo‘llanmani men beraman."],
    ["Медосмотр оплачивает компания, вам платить ничего не нужно.", "Medasmotr aplachivayet kampaniya, vam platit nichivo ne nujna.", "Tibbiy ko‘rikni kompaniya to‘laydi, siz hech narsa to‘lamaysiz."],
    ["Офис работает с девяти до шести, обед с часу до двух.", "Ofis rabotayet z devyati da shesti, abet s chisu da dvux.", "Ofis to‘qqizdan oltigacha ishlaydi, tushlik birdan ikkigacha."],
    ["Наш адрес: улица Ленина, дом пятнадцать, третий этаж, кабинет триста один.", "Nash adres: ulitsa Lenina, dom pitnatsat, tretiy etash, kabinet trista adin.", "Manzilimiz: Lenin ko‘chasi, 15-uy, uchinchi qavat, 301-xona."],
    ["Если планируете приехать, предупредите меня, пожалуйста, заранее.", "Yesli planiruyete priyexat, pridupredite minya, pajalusta, zarani.", "Kelishni rejalashtirsangiz, iltimos, meni oldindan ogohlantiring."],
    ["Выйти на работу нужно будет в следующий понедельник.", "Viyti na rabotu nujna budit f sleduyushiy panidelnik.", "Ishga keyingi dushanba kuni chiqishingiz kerak bo‘ladi."],
    ["Если у вас есть вопросы, звоните мне на этот номер или пишите в мессенджер.", "Yesli u vas yest vaprosi, zvanite mne na etat nomir ili pishite v misenjer.", "Savollaringiz bo‘lsa, shu raqamga qo‘ng‘iroq qiling yoki messenjerga yozing."],
    ["Поздравляю вас и жду звонка. До свидания!", "Pazdravlyayu vas i zhdu zvanka. Da svidaniya!", "Tabriklayman va qo‘ng‘irog‘ingizni kutaman. Xayr!"]
  ],
  questions: [
    { q: "Olga Petrovna qanday yangilik aytdi?", options: ["Javlon ishga olinmadi", "Javlon ishga olindi", "Suhbat ko‘chirildi"], answer: 1, line: 2 },
    { q: "Sinov muddati qancha?", options: ["Bir oy", "Olti oy", "Uch oy"], answer: 2, line: 5 },
    { q: "Tibbiy ko‘rikni kim to‘laydi?", options: ["Kompaniya", "Javlonning o‘zi", "Sug‘urta"], answer: 0, line: 11 },
    { q: "Ofis qaysi qavatda?", options: ["Birinchi qavatda", "Uchinchi qavatda", "Beshinchi qavatda"], answer: 1, line: 13 },
    { q: "Javlon ishga qachon chiqishi kerak?", options: ["Ertaga", "Oy boshida", "Keyingi dushanba"], answer: 2, line: 15 }
  ]
});
