Ruscha.addListening({
  id: "a2-l-kuryer-xabari",
  title: "Kuryerdan xabar",
  icon: "📦",
  about: "Kuryer Gulnoraning telefoniga ovozli xabar qoldirdi.",
  lines: [
    ["Добрый день! Это курьер службы доставки, меня зовут Андрей.", "Dobriy den! Eta kuryer slujbi dastafki, minya zavut Andrey.", "Xayrli kun! Bu yetkazib berish xizmatining kuryeri, ismim Andrey."],
    ["Я привёз ваш заказ — холодильник, но никто не открывает дверь.", "Ya privyos vash zakaz — xaladilnik, no nikto ne atkrivayet dver.", "Buyurtmangizni — muzlatgichni olib keldim, lekin hech kim eshikni ochmayapti."],
    ["Я звонил вам три раза, но вы не ответили.", "Ya zvanil vam tri raza, no vi ne atvetili.", "Sizga uch marta qo‘ng‘iroq qildim, lekin javob bermadingiz."],
    ["Я подожду ещё пятнадцать минут около подъезда.", "Ya padajdu yishyo pitnatsat minut okala padyezda.", "Yana o‘n besh daqiqa podyezd oldida kutaman."],
    ["Если вас нет дома, заказ вернётся на склад.", "Yesli vas net doma, zakaz virnyotsa na sklat.", "Agar uyda bo‘lmasangiz, buyurtma omborga qaytadi."],
    ["Тогда вам нужно будет заново выбрать день доставки на сайте.", "Tagda vam nujna budit zanova vibrat den dastafki na sayte.", "Unda saytda yetkazib berish kunini qaytadan tanlashingiz kerak bo‘ladi."],
    ["Повторная доставка стоит пятьсот рублей.", "Paftornaya dastafka stoit pitsot rubley.", "Qayta yetkazib berish besh yuz rubl turadi."],
    ["И ещё вопрос: у вас в доме не работает лифт?", "I yishyo vapros: u vas v dome ne rabotayet lift?", "Yana bir savol: uyingizda lift ishlamayaptimi?"],
    ["Холодильник тяжёлый, а у вас девятый этаж.", "Xaladilnik tijyoliy, a u vas divyatiy etash.", "Muzlatgich og‘ir, siz esa to‘qqizinchi qavatda yashaysiz."],
    ["Пожалуйста, перезвоните мне как можно скорее. Спасибо!", "Pajalusta, pirizvanite mne kak mojna skareye. Spasiba!", "Iltimos, imkon qadar tezroq qayta qo‘ng‘iroq qiling. Rahmat!"]
  ],
  questions: [
    { q: "Kuryer nima olib keldi?", options: ["Muzlatgich", "Kir yuvish mashinasi", "Televizor"], answer: 0, line: 1 },
    { q: "Kuryer yana qancha kutadi?", options: ["5 daqiqa", "15 daqiqa", "1 soat"], answer: 1, line: 3 },
    { q: "Qayta yetkazib berish qancha turadi?", options: ["Bepul", "1500 rubl", "500 rubl"], answer: 2, line: 6 },
    { q: "Gulnora nechanchi qavatda yashaydi?", options: ["Uchinchi", "Oltinchi", "To‘qqizinchi"], answer: 2, line: 8 }
  ]
});
