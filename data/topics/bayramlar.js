Ruscha.addTopic({
  id: "bayramlar",
  title: "Bayramlar va tabriklar",
  icon: "🎉",
  templates: [
    { ru: "С ...!", pr: "S ...!", uz: "... bilan!", ex: ["С днём рождения!", "С Новым годом!", "С праздником!"] },
    { ru: "Желаю ...!", pr: "Jilayu ...!", uz: "... tilayman!", ex: ["Желаю счастья!", "Желаю здоровья!", "Желаю удачи!"] },
    { ru: "Поздравляю с ...!", pr: "Pazdravlyayu s ...!", uz: "... bilan tabriklayman!", ex: ["Поздравляю с днём рождения!", "Поздравляю со свадьбой!"] }
  ],
  phrases: [
    { ru: "С днём рождения!", pr: "Z dnyom rajdeniya!", uz: "Tug‘ilgan kuningiz bilan!", sit: "Bugun hamkasbingizning tug‘ilgan kuni." },
    { ru: "С Новым годом!", pr: "S Novim godam!", uz: "Yangi yil bilan!" },
    { ru: "С праздником!", pr: "S praznikam!", uz: "Bayram bilan!" },
    { ru: "Поздравляю с днём рождения!", pr: "Pazdravlyayu z dnyom rajdeniya!", uz: "Tug‘ilgan kuningiz bilan tabriklayman!" },
    { ru: "Поздравляю со свадьбой!", pr: "Pazdravlyayu sa svadboy!", uz: "To‘yingiz bilan tabriklayman!", sit: "Hamkasbingiz yaqinda uylandi." },
    { ru: "Желаю счастья!", pr: "Jilayu shastya!", uz: "Baxt tilayman!" },
    { ru: "Желаю здоровья!", pr: "Jilayu zdarovya!", uz: "Sog‘lik tilayman!" },
    { ru: "Желаю удачи!", pr: "Jilayu udachi!", uz: "Omad tilayman!", sit: "Do‘stingiz ertaga imtihon topshiradi." },
    { ru: "Всего самого лучшего!", pr: "Fsivo samava lutshiva!", uz: "Eng yaxshi tilaklarimni bildiraman!" },
    { ru: "Счастливого пути!", pr: "Shislivava puti!", uz: "Oq yo‘l!", sit: "Do‘stingiz uyiga, O‘zbekistonga jo‘nab ketyapti." },
    { ru: "Рамадан мубарак!", pr: "Ramadan mubarak!", uz: "Ramazon muborak!", sit: "Musulmon hamkasbingizni Ramazon oyi boshlangani bilan tabriklaysiz." },
    { ru: "С Рамазан-байрамом!", pr: "S Ramazan-bayramam!", uz: "Ramazon hayiti bilan!" },
    { ru: "С Курбан-байрамом!", pr: "S Kurban-bayramam!", uz: "Qurbon hayiti bilan!" },
    { ru: "С Восьмым марта!", pr: "S Vasmim marta!", uz: "8-Mart bilan!", sit: "8-mart kuni ayol hamkasblaringizni tabriklaysiz." },
    { ru: "Это вам подарок.", pr: "Eta vam padarak.", uz: "Bu sizga sovg‘a.", sit: "Tug‘ilgan kun egasiga sovg‘ani uzatyapsiz." },
    { ru: "Это от всей души.", pr: "Eta at fsey dushi.", uz: "Bu chin yurakdan." },
    { ru: "Спасибо за поздравление!", pr: "Spasiba za pazdravleniye!", uz: "Tabrigingiz uchun rahmat!" },
    { ru: "Спасибо, и вас тоже!", pr: "Spasiba, i vas toje!", uz: "Rahmat, sizni ham!", sit: "Qo‘shningiz sizni Yangi yil bilan tabrikladi." },
    { ru: "Приходите к нам в гости.", pr: "Prixadite k nam v gosti.", uz: "Bizga mehmonga keling." },
    { ru: "Приглашаю вас на свадьбу.", pr: "Priglashayu vas na svadbu.", uz: "Sizni to‘yga taklif qilaman.", sit: "To‘yingiz bo‘ladi, boshlig‘ingizni taklif qilmoqchisiz." },
    { ru: "Когда свадьба?", pr: "Kagda svadba?", uz: "To‘y qachon?" },
    { ru: "Спасибо за приглашение!", pr: "Spasiba za priglasheniye!", uz: "Taklifingiz uchun rahmat!" },
    { ru: "Я обязательно приду.", pr: "Ya abizatilna pridu.", uz: "Albatta kelaman." },
    { ru: "К сожалению, я не смогу прийти.", pr: "K sajaleniyu, ya ne smagu priyti.", uz: "Afsuski, kela olmayman.", sit: "Sizni bayramga taklif qilishdi, lekin o‘sha kuni ishdasiz." },
    { ru: "Как вы отмечаете Новый год?", pr: "Kak vi atmichayete Noviy got?", uz: "Yangi yilni qanday nishonlaysiz?" },
    { ru: "У нас праздник — Навруз.", pr: "U nas praznik — Navrus.", uz: "Bizda bayram — Navro‘z.", sit: "Hamkasbingiz martda nega bayram qilayotganingizni so‘radi." },
    { ru: "Мы готовим сумаляк.", pr: "Mi gatovim sumalyak.", uz: "Biz sumalak pishiramiz." },
    { ru: "Давайте выпьем чаю за именинника!", pr: "Davayte vipyem chayu za imininnika!", uz: "Tug‘ilgan kun egasi sharafiga choy ichaylik!" },
    { ru: "Мои соболезнования.", pr: "Mai sabaleznavaniya.", uz: "Ta’ziya bildiraman.", sit: "Hamkasbingizning yaqin odami vafot etdi." },
    { ru: "Держитесь.", pr: "Dirjites.", uz: "Sabr qiling, bardam bo‘ling." }
  ],
  dialogues: [
    {
      title: "Tug‘ilgan kun",
      a: "Jamshid",
      b: "Olga",
      lines: [
        ["a", "Ольга, с днём рождения! Это вам подарок.", "Olga, z dnyom rajdeniya! Eta vam padarak.", "Olga, tug‘ilgan kuningiz bilan! Bu sizga sovg‘a."],
        ["b", "Ой, спасибо большое! Как приятно!", "Oy, spasiba balshoye! Kak priyatna!", "Voy, katta rahmat! Qanday yoqimli!"],
        ["a", "Желаю счастья и здоровья!", "Jilayu shastya i zdarovya!", "Baxt va sog‘lik tilayman!"],
        ["b", "Спасибо! Приходите вечером к нам в гости.", "Spasiba! Prixadite vecheram k nam v gosti.", "Rahmat! Kechqurun bizga mehmonga keling."],
        ["a", "Я обязательно приду!", "Ya abizatilna pridu!", "Albatta kelaman!"],
        ["b", "Ждём вас в семь.", "Jdyom vas f sem.", "Soat yettida kutamiz."]
      ]
    },
    {
      title: "To‘yga taklif",
      a: "Aziz",
      b: "Igor",
      lines: [
        ["a", "Игорь, приглашаю тебя на свадьбу!", "Igar, priglashayu tibya na svadbu!", "Igor, seni to‘yga taklif qilaman!"],
        ["b", "Поздравляю! Когда свадьба?", "Pazdravlyayu! Kagda svadba?", "Tabriklayman! To‘y qachon?"],
        ["a", "В субботу, в шесть вечера, в ресторане «Самарканд».", "F subotu, f shest vechira, v ristarane «Samarkand».", "Shanba kuni, kechqurun soat oltida, «Samarqand» restoranida."],
        ["b", "Спасибо за приглашение! Я обязательно приду.", "Spasiba za priglasheniye! Ya abizatilna pridu.", "Taklifing uchun rahmat! Albatta kelaman."],
        ["a", "Будет плов и музыка!", "Budet plof i muzika!", "Palov va musiqa bo‘ladi!"],
        ["b", "Отлично!", "Atlichna!", "Zo‘r!"]
      ]
    }
  ]
});
