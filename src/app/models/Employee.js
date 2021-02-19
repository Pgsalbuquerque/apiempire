const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class Employee extends Model {
    static init(sequelize){
        super.init({
            cpf: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            telephone1: Sequelize.STRING,
            telephone2: Sequelize.STRING,
            telephone3: Sequelize.STRING,
            pay: Sequelize.FLOAT,
            charge: Sequelize.STRING,
        },
        {sequelize}
        )

        return this;
    }
}

module.exports = Employee;