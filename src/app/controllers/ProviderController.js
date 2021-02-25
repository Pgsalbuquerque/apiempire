const Provider = require("../models/Provider");

class ProviderController {
    async store(req, res){
        const {cnpj, name, email, telephone1,telephone2,telephone3} = req.body;

        if (!cnpj || !name || !email || !telephone1) {
            return res.status(404).send({"message": "Error cpnj are missing"})
        }

        const provider = await Provider.findOne({where: {cnpj}})

        if (provider) return res.status(404).send({"message": "Error provider exists"})


        Provider.create({cnpj, name, email, telephone1, telephone2, telephone3})

        return res.status(200).send({"message": `Provider created: ${name}`})

    }

    async put(req, res){
        const {cnpj, name, email, telephone1, telephone2, telephone3} = req.body;

        if (!cnpj) return res.status(404).send({"message": "Error cnpj are missing"});

        const provider = await Provider.findOne({where: {cnpj}});

        if (!provider) return res.status(404).send({"message": "Error provider not exists"});

        if (name) provider.name = name;
        if (email) provider.email = email;
        if (telephone1) provider.telephone1 = telephone1;
        if (telephone2) provider.telephone2 = telephone2;
        if (telephone3) provider.telephone3 = telephone3;

        await provider.save();

        return res.status(200).send({"message": "Provider has been updated"});
    }

    async delete(req, res) {
        const {cnpj} = req.body;

        if (!cnpj) return res.status(404).send({"message": "Error cnpj are missing"});

        const provider = await Provider.findOne({where: {cnpj}});

        if (!provider) return res.status(404).send({"message": "Error provider not exists"});

        await provider.destroy();

        return res.status(200).send({"message": "Provider has been deleted"});

    }

    async ListAll(req, res) {
        const providers = await Provider.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!providers) {
            return res.status(200).send([])
        }

        return res.status(200).send(providers)
    }

    async ListOne(req, res) {
        const {cnpj} = req.body

        if (!cnpj) return res.status(404).send({"message": "Error cnpj are missing"})

        const provider = await Provider.findOne({
            where: {cnpj}, 
            attributes: {exclude: ["createdAt", "updatedAt"]}
        })

        if (!provider) return res.status(404).send({"message": "Error provider not exists"})

        return res.status(200).send(provider)
    }
}


module.exports = new ProviderController();