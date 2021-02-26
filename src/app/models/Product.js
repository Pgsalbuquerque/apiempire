const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Product extends Model {
    static init(sequelize) {
        super.init(
        {
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            value: Sequelize.FLOAT,
            year: Sequelize.DATE,
            amount: Sequelize.INTEGER,

        }, 
        {
            sequelize
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Provider, {foreignKey: "provider_cnpj"})
    }
}

module.exports = Product;