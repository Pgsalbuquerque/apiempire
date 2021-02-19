'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('addresses', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        number: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        complement: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        district: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('addresses');

  }
};
