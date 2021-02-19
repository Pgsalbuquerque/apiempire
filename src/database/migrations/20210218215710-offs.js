'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offs', { 
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
       },
       percent: {
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
    await queryInterface.dropTable('offs');

  }
};
