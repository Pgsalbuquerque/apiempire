const { Model } = require("sequelize");
const Sequelize = require("sequelize");


class Order extends Model {
    static init(sequelize) {
        super.init({
    
        },
        {
            sequelize
        })

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Employee, {foreignKey: "employee_cpf"});
        this.belongsTo(models.Provider, {foreignKey: "provider_cnpj"});
        this.belongsTo(models.Product, {foreignKey: "product_id"});    
    }
}

module.exports = Order;