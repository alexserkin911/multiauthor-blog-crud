'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          userName: 'alex',
          email: 'zverev095@list.ru',
          password: 'alex123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'jax',
          email: '750zverev095@list.ru',
          password: 'alex1232',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'lex',
          email: '123zverev095@list.ru',
          password: 'alex1123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
