'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchases', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       value: {
         type: Sequelize.FLOAT,
         allowNull: false,
       }
      });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('purchases');

  }
};
