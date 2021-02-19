'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', "provider_cnpj" , 
    {
      type: Sequelize.STRING,
      references: {model: 'providers', key: "cnpj"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );

  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('products', "provider_cnpj");

  }
};
