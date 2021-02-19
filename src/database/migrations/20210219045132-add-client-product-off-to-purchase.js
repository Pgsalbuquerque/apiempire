'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('purchases', "client_cpf" , 
    {
      type: Sequelize.STRING,
      references: {model: 'clients', key: "cpf"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );
    await queryInterface.addColumn('purchases', "product_id" , 
    {
      type: Sequelize.INTEGER,
      references: {model: 'products', key: "id"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );
    await queryInterface.addColumn('purchases', "off_id" , 
    {
      type: Sequelize.STRING,
      references: {model: 'offs', key: "id"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );
    

  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('purchases', "client_cpf");
    await queryInterface.removeColumn('purchases', "product_id");
    await queryInterface.removeColumn('purchases', "off_id");
    

  }
};