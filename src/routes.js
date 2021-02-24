const { Router } = require('express');

const routes = new Router();

const EmployeeController = require("./app/controllers/EmployeeController")

routes.post("/employee", EmployeeController.store);

routes.delete("/employee", EmployeeController.delete);

routes.put("/employee", EmployeeController.put);

module.exports = routes;