const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Employee = require("../app/models/Employee")
const Provider = require("../app/models/Provider")

const models = [Employee, Provider];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

module.exports = new Database();