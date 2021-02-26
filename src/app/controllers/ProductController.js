const Product = require("../models/Product");
const Provider = require("../models/Provider");

class ProductController {
    async store(req, res) {
        const {name, description, value, year, amount, provider_cnpj} = req.body

        if (!name  || !value || !year || !amount 
            || !provider_cnpj) return res.status(404).send({"message": "Error attributes are missing"});
            
        const provider = await Provider.findOne({where: {cnpj: provider_cnpj}});

        if (!provider) return res.status(404).send({"message": "Error provider not exists"});
        
        const yearToDate = new Date(year);

        await Product.create({name, description, value, year: yearToDate, amount, provider_cnpj})
            
        return res.status(200).send({"message": "Product has been created"});
    }

    async delete(req, res) {
        const { id } = req.body;

        if (!id) return res.status(404).send({"message": "Error id are missing"});

        const product = await Product.findOne({where: {id}});

        if (!product) return res.status(404).send({"message": "Error product not exists"});

        await product.destroy();

        return res.status(200).send({"message": "Product has been deleted"});
    }

    async put (req,res) {
        const {id, name, description, value, year, amount, provider_cnpj} = req.body;

        if (!id) return res.status(404).send({"message": "Error id are missing"});

        const product = await Product.findOne({where: {id}});

        if (!product) return res.status(404).send({"message": "Error product not exists"});

        const yearToDate = new Date(year);

        if (name) product.name = name;
        if (description) product.description = description;
        if (value) product.value = value;
        if (year) product.year = yearToDate;
        if (amount) product.amount = amount;
        if (provider_cnpj) product.provider_cnpj = provider_cnpj;

        await product.save();

        return res.status(200).send({"message": "Product has been updated"});
    }

    async ListAll(req, res) {
        const products = await Product.findAll();
        
        if (!products) return res.status(200).send([]);

        return res.status(200).send(products)
    }

    async ListByName(req, res) {
        const { name } = req.body;

        if (!name) return res.status(404).send({"message": "Error name are missing"});

        const product = await Product.findOne({where: {name}});
        
        if (!product) return res.status(404).send({"message": "Error product not exists"});

        return res.status(200).send(product);
    }

    async ListByValue(req, res){
        const { value } = req.body;

        if (!value) return res.status(404).send({"message": "Error value are missing"});

        const products = await Product.findAll({where: {value}});
        
        if (!products) return res.status(404).send([]);

        return res.status(200).send(products);
    }
}

module.exports = new ProductController();