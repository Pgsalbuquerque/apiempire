'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('feedbacks', {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
          },
          score: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: true,
          }
        });

  },

  down: async (queryInterface) => {
      await queryInterface.dropTable('feedbacks');

  }
};
