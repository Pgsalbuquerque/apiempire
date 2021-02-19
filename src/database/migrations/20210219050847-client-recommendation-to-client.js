'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('clients', "client_cpf" , 
    {
      type: Sequelize.STRING,
      references: {model: 'clients', key: "cpf"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );

  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('clients', "client_cpf");

  }
};
