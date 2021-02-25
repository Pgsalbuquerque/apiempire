const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Employee = require("../app/models/Employee")
const Provider = require("../app/models/Provider")
const Client = require("../app/models/Client")

const models = [Employee, Provider, Client];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models
          .map(model => model.init(this.connection))
          .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();