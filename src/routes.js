const { Router } = require('express');

const routes = new Router();

const EmployeeController = require("./app/controllers/EmployeeController");
const ProviderController = require("./app/controllers/ProviderController");
const ClientController = require("./app/controllers/ClientController");
const AddressController = require("./app/controllers/AddressController");
const FeedbackController = require("./app/controllers/FeedbackController");
const OffController = require("./app/controllers/OffController");
const ProductController = require("./app/controllers/ProductController");
const OrderController = require("./app/controllers/OrderController");
const PurchaseController = require("./app/controllers/PurchaseController");

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

routes.get("/address/listbyid", AddressController.ListById);

routes.get("/address/listbystreet", AddressController.ListByStreet);

routes.post("/feedback", FeedbackController.store);

routes.delete("/feedback", FeedbackController.delete);

routes.get("/feedback/listall", FeedbackController.ListAll);

routes.get("/feedback/findbyemployeecpf", FeedbackController.findByEmployeeCpf);

routes.post("/off", OffController.store);

routes.delete("/off", OffController.delete);

routes.get("/off/listall", OffController.ListAll);

routes.get("/off/findbyid", OffController.findById);

routes.post("/product", ProductController.store);

routes.put("/product", ProductController.put);

routes.delete("/product", ProductController.delete);

routes.get("/product/listall", ProductController.ListAll);

routes.get("/product/listbyname", ProductController.ListByName);

routes.get("/product/listbyvalue", ProductController.ListByValue);

routes.post("/order", OrderController.store);

routes.delete("/order", OrderController.delete);

routes.get("/order/listall", OrderController.ListAll);

routes.get("/order/listbyattributes", OrderController.ListByAttributes);

routes.post("/purchase", PurchaseController.store);

routes.delete("/purchase", PurchaseController.delete);

routes.get("/purchase/listall", PurchaseController.ListAll);

routes.get("/purchase/listbyattributes", PurchaseController.ListByAttributes);


module.exports = routes;