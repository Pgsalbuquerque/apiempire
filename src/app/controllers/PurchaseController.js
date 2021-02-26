const Client = require("../models/Client");
const Off = require("../models/Off");
const Product = require("../models/Product");
const Purchase = require("../models/Purchase");

class PurchaseController {
    async store(req, res) {
        const {value,client_cpf, off_id, product_id} = req.body;

        if (!client_cpf || !off_id || !product_id || !value) return res.status(404).send({"message": "Error attributes are missing"});

        const client = await Client.findOne({where: {cpf: client_cpf}});

        if (!client) return res.status(404).send({"message": "Error client not exists"});

        const off = await Off.findOne({where: {id: off_id}});

        if (!off) return res.status(404).send({"message": "Error off not exists"});

        const product = await Product.findOne({where: {id: product_id}});

        if (!product) return res.status(404).send({"message": "Error product not exists"});

        await Purchase.create({value, client_cpf, product_id, off_id});

        return res.status(200).send({"message": "Purchase has been created"});

    }

    async delete(req, res){
        const { id } = req.body;

        const purchase = await Purchase.findOne({where: {id}});

        if (!purchase) return res.status(404).send({"message": "Error purchase not exists"});

        await purchase.destroy();

        return status(200).send({"message": "Purchase has been deleted"});
    }

    async ListAll(req, res) {
        const purchases = await Purchase.findAll();

        if (!purchases) return res.status(200).send([]);

        return res.status(200).send(purchases);

    }

    async ListByAttributes (req, res) {
        const { value,client_cpf, off_id, product_id } = req.body;

        if (!value && !product_id && !client_cpf && !off_id)
            return res.status(200).send({"message": "Error attributes are missing"});
        
        const attributes = {}

        if (value) attributes.value = value;
        if (product_id) attributes.product_id = product_id;
        if (client_cpf) attributes.client_cpf = client_cpf;
        if (off_id) attributes.off_id = off_id;

        const purchases = await Purchase.findAll({where: attributes});

        if (!purchases) return res.status(200).send([])

        return res.status(200).send(purchases);

    }
}

module.exports = new PurchaseController();