'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      }
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('orders');

  }
};
