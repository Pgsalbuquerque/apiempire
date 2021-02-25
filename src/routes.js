const { Router } = require('express');

const routes = new Router();

const EmployeeController = require("./app/controllers/EmployeeController");
const ProviderController = require("./app/controllers/ProviderController");
const ClientController = require("./app/controllers/ClientController");
const AddressController = require("./app/controllers/AddressController");
const FeedbackController = require("./app/controllers/FeedbackController");

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

routes.post("/client", ClientController.store);

routes.delete("/client", ClientController.delete);

routes.put("/client", ClientController.put);

routes.get("/client/listall", ClientController.ListAll);

routes.get("/client/listone", ClientController.ListOne);

routes.post("/address", AddressController.store);

routes.delete("/address", AddressController.delete);

routes.put("/address", AddressController.put);

routes.get("/client/listbyid", AddressController.ListById);

routes.get("/client/listbystreet", AddressController.ListByStreet);

routes.post("/feedback", FeedbackController.store);

routes.delete("/feedback", FeedbackController.delete);

routes.get("/feedback/listall", FeedbackController.ListAll);

routes.get("/feedback/findbyemployeecpf", FeedbackController.findByEmployeeCpf);



module.exports = routes;