const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class Client extends Model {
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
        },
        {sequelize}
        )

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Client, {foreignKey: 'client_cpf'})
    }
}

module.exports = Client;