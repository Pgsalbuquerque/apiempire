'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', "employee_cpf" , 
    {
      type: Sequelize.STRING,
      references: {model: 'employees', key: "cpf"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );
    await queryInterface.addColumn('orders', "provider_cnpj" , 
    {
      type: Sequelize.STRING,
      references: {model: 'providers', key: "cnpj"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );
    await queryInterface.addColumn('orders', "product_id" , 
    {
      type: Sequelize.INTEGER,
      references: {model: 'products', key: "id"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );

  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('orders', "employee_cpf");
    await queryInterface.removeColumn('orders', "provider_cnpj");
    await queryInterface.removeColumn('orders', "product_id");

  }
};