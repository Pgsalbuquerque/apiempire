'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('feedbacks', "employee_cpf" , 
    {
      type: Sequelize.STRING,
      references: {model: 'employees', key: "cpf"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }
    );

  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('feedbacks', "employee_cpf");

  }
};
