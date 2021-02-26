const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Purchase extends Model {
    static init(sequelize) {
        super.init({
            value: Sequelize.STRING
        },
        {
            sequelize
        })

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Client, {foreignKey: "client_cpf"});
        this.belongsTo(models.Off, {foreignKey: "off_id"});
        this.belongsTo(models.Product, {foreignKey: "product_id"});    
    }
}

module.exports = Purchase;