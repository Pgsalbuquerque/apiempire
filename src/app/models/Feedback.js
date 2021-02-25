const { Model } = require("sequelize");
const Sequelize = require("sequelize");


class Feedback extends Model {
    static init(sequelize) {
        super.init({
            score: Sequelize.FLOAT,
            description: Sequelize.STRING,

        },
        {
            sequelize
        })

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Employee, {foreignKey: "employee_cpf"});
    }
}

module.exports = Feedback;