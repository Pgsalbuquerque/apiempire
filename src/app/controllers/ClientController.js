const Client = require("../models/Client");

class ClientController {
    async store(req, res){
        const {cpf, name, email, telephone1, telephone2, telephone3, client_cpf} = req.body;
        

        if (cpf == null || name == null || email == null || telephone1 == null) {
            return res.status(404).send({"message": "Error attributes are missing"})
        }

         const client = await Client.findOne({where: {cpf}})

         if (client) {
            return res.status(404).send({"message": "Error client exists"})
         }
         if (client_cpf){
            const client2 = await Client.findOne({where: {cpf: client_cpf}})

            if (!client2) return res.status(404).send({"message": "Error indicator client does not exists"})
         }

        await Client.create({cpf, name, email, telephone1, telephone2, telephone3, client_cpf});

        return res.status(200).send({"message:": `Client created ${name}`})

    }

    async put(req, res) {
        const {cpf} = req.body;

        if (cpf == null) {
            return res.status(404).send({"message": "Error cpf are missing"})
        }

        const client = await Client.findOne({where: {cpf}})

        if (client == null)  {
            return res.status(404).send({"message": "Error client not exists"})
         }

        const {name, email, telephone1, telephone2, telephone3} = req.body;
        
        if (name) client.name = name;
        if (email) client.email = email;
        if (telephone1) client.telephone1 = telephone1;
        if (telephone2) client.telephone2 = telephone2;
        if (telephone3) client.telephone3 = telephone3;

        await client.save()

        return res.status(200).send({"message": "Client has been updated"})

    }

    async delete(req,res){
        const {cpf} = req.body;

        if (cpf == null) {
            return res.status(404).send({"message": "Error cpf are missing"})
        }

        const client = await Client.findOne({where: {cpf}})

        if (client == null)  {
            return res.status(404).send({"message": "Error client not exists"})
         }

        await client.destroy();

        return res.status(200).send({"message": "Client has been deleted"})
    }

    async ListAll(req, res) {
        const clients = await Client.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!clients) {
            return res.status(200).send([])
        }

        return res.status(200).send(clients)
    }

    async ListOne(req, res) {
        const {cpf} = req.body

        if (!cpf) return res.status(404).send({"message": "Error cpf are missing"})

        const client = await Client.findOne({
            where: {cpf}, 
            attributes: {exclude: ["createdAt", "updatedAt"]}
        })

        if (!client) return res.status(404).send({"message": "Error client not exists"})

        return res.status(200).send(client)
    }
}

module.exports = new ClientController();