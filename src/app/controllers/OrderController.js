const Employee = require("../models/Employee")
const Provider = require("../models/Provider");
const Product = require("../models/Product");
const Order = require("../models/Order");

class OrderController {
    async store(req, res) {
        const {employee_cpf, provider_cnpj, product_id} = req.body;

        if (!employee_cpf || !provider_cnpj || !product_id) return res.status(404).send({"message": "Error attributes are missing"});

        const employee = await Employee.findOne({where: {cpf: employee_cpf}});

        if (!employee) return res.status(404).send({"message": "Error employee not exists"});

        const provider = await Provider.findOne({where: {cnpj: provider_cnpj}});

        if (!provider) return res.status(404).send({"message": "Error provider not exists"});

        const product = await Product.findOne({where: {id: product_id}});

        if (!product) return res.status(404).send({"message": "Error product not exists"});

        await Order.create({employee_cpf, product_id, provider_cnpj});

        return res.status(200).send({"message": "Order has been created"});

    }

    async delete(req, res){
        const { id } = req.body;

        const order = await Order.findOne({where: {id}});

        if (!order) return res.status(404).send({"message": "Error order not exists"});

        await order.destroy();

        return status(200).send({"message": "Order has been deleted"});
    }

    async ListAll(req, res) {
        const orders = await Order.findAll();

        if (!orders) return res.status(200).send([]);

        return res.status(200).send(orders);

    }

    async ListByAttributes (req, res) {
        const { employee_cpf, product_id, provider_cnpj } = req.body;

        if (!employee_cpf && !product_id && !provider_cnpj)
            return res.status(200).send({"message": "Error attributes are missing"});
        
        const attributes = {}

        if (employee_cpf) attributes.employee_cpf = employee_cpf;
        if (product_id) attributes.product_id = product_id;
        if (provider_cnpj) attributes.provider_cnpj = provider_cnpj;

        const orders = await Order.findAll({where: attributes});

        if (!orders) return res.status(200).send([])

        return res.status(200).send(orders);

    }
}

module.exports = new OrderController();