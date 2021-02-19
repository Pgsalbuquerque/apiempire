'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchases', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       value: {
         type: Sequelize.FLOAT,
         allowNull: false,
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
      });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('purchases');

  }
};
