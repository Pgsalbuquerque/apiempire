const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Off extends Model {
    static init (sequelize){
        super.init(
        {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            percent: Sequelize.FLOAT,
        },
        {
            sequelize
        })

        return this;
    }
}

module.exports = Off;