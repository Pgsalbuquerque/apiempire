const { Router } = require('express');

const routes = new Router();

const EmployeeController = require("./app/controllers/EmployeeController")
const ProviderController = require("./app/controllers/ProviderController")

routes.post("/employee", EmployeeController.store);

routes.delete("/employee", EmployeeController.delete);

routes.put("/employee", EmployeeController.put);

routes.get("/employee/listall", EmployeeController.ListAll);

routes.get("/employee/listone", EmployeeController.ListOne);

routes.get("/employee/listallbycharge", EmployeeController.ListByCharge);

routes.post("/provider", ProviderController.store);

routes.delete("/provider", ProviderController.delete);

routes.put("/provider", ProviderController.put);

routes.get("/provider/listall", ProviderController.ListAll);

routes.get("/provider/listone", ProviderController.ListOne);

module.exports = routes;