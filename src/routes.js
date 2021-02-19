const { Router } = require('express');

const routes = new Router();

const EmployeeController = require("./app/controllers/EmployeeController")

routes.post("/", EmployeeController.store);

module.exports = routes;