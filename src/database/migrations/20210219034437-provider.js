'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('providers', {
       cnpj:{
         type: Sequelize.STRING,
         primaryKey: true,
         allowNull: false,
      },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       telephone1: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       telephone2: {
         type: Sequelize.STRING,
         allowNull: true,
       },
       telephone3: {
        type: Sequelize.STRING,
        allowNull: true,
      }
      });

  },

  down: async (queryInterface) => {
      await queryInterface.dropTable('providers');

  }
};
