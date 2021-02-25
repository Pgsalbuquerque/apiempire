const { Model } = require("sequelize");
const Sequelize = require("sequelize")

class Address extends Model {
    static init(sequelize){
        super.init({
          //cep, number, street, complement, city, district, employee_cpf, provider_cnpj, client_cpf  
            cep: Sequelize.STRING,
            number: Sequelize.STRING,
            street: Sequelize.STRING,
            complement: Sequelize.STRING,
            city: Sequelize.STRING,
            district: Sequelize.STRING,
        },
        {
            sequelize,
            tableName: 'addresses'
        })

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Employee, {foreignKey: 'employee_cpf'})
        this.belongsTo(models.Provider, {foreignKey: 'provider_cnpj'})
        this.belongsTo(models.Client, {foreignKey: 'client_cpf'})
    }
}

module.exports = Address;