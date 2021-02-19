'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
         },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       description: {
         type: Sequelize.STRING,
         allowNull: true,
       },
       value: {
         type: Sequelize.FLOAT,
         allowNull: false
       },
       year: {
         type: Sequelize.DATE,
         allowNull: false
       },
       amount: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: true,
       },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
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
     await queryInterface.dropTable('products');
  }
};
