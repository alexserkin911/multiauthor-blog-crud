module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Entries',
      [
        {
          title: 'Salsify Taro Catsear Garlic',
          body: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 1,
        },
        {
          title: 'Kohlrabi Radish Okra Azuki',
          body: 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 1,
        },
        {
          title: 'Lotus Root Water Spinach',
          body: 'Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 2,
        },
        {
          title: 'Bean Swiss Chard Seakale',
          body: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 3,
        },
        {
          title: 'Magis Kohlrabi Welsh Onion',
          body: 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 1,
        },
        {
          title: 'Parsley Shallot Courgette Tatsoi',
          body: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 3,
        },
        {
          title: 'Bean Mustard Tigernut',
          body: 'Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 3,
        },
        {
          title: 'Aubergine Spring Onion',
          body: 'Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. JÃ­cama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 2,
        },
        {
          title: 'Chicory Celtuce Parsley',
          body: 'Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 2,
        },
        {
          title: 'Coriander Yarrow Sweet Pepper',
          body: 'Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_user: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Entries', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
