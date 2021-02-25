const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class Provider extends Model {
    static init(sequelize){
        super.init({
            cnpj: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            telephone1: Sequelize.STRING,
            telephone2: Sequelize.STRING,
            telephone3: Sequelize.STRING
            
        },
        {sequelize}
        )

        return this;
    }
}

module.exports = Provider;