'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('addresses', "employee_cpf" , 
    {
      type: Sequelize.STRING,
      references: {model: 'employees', key: "cpf"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );
    await queryInterface.addColumn('addresses', "provider_cnpj" , 
    {
      type: Sequelize.STRING,
      references: {model: 'providers', key: "cnpj"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );
    await queryInterface.addColumn('addresses', "client_cpf" , 
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
    await queryInterface.removeColumn('addresses', "employee_cpf");
    await queryInterface.removeColumn('addresses', "provider_cnpj");
    await queryInterface.removeColumn('addresses', "client_cpf");

  }
};