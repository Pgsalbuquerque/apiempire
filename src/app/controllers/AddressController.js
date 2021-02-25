const Address = require("../models/Address");
const Employee = require("../models/Employee");
const Client = require("../models/Client");
const Provider = require("../models/Provider");

class AddressController {
    async store(req, res) {
        const {cep, number, street, complement, city, district, 
            employee_cpf, provider_cnpj, client_cpf} = req.body;

        if (cep == null || number == null || street == null || city == null 
            || district == null) return res.status(400).send({"message": "Error attributes are missing"});
        

        if (!employee_cpf && !provider_cnpj && !client_cpf) return res.status(400).send({"message": "Error foreignKey are missing"});
        
        if (employee_cpf) {
            const employee = await Employee.findOne({where: {cpf: employee_cpf}});

            if (!employee) return res.status(400).send({"message": "Error employee not exists"})
        }

        if (client_cpf) {
            const client = await Client.findOne({where: {cpf: client_cpf}});
            console.log(client)
            if (!client) return res.status(400).send({"message": "Error client not exists"})
        }

        if (provider_cnpj) {
            const provider = await Provider.findOne({where: {cnpj: provider_cnpj}});

            if (!provider) return res.status(400).send({"message": "Error provider not exists"})
        }


        await Address.create({cep, number, street, complement, city, district, employee_cpf, provider_cnpj, client_cpf});

        return res.status(200).send({"message": "Addres created"})
    }

    async delete(req, res) {
        const {id} = req.body;

        if (!id) return res.status(404).send({"message": "Error id are missing"});

        const address = Address.findOne({where: {id}});

        if (!address) return res.status(404).send({"message": "Error addres not exists"});

        await address.destroy();

        return res.status(200).send({"message": "Addres has been deleted"});
    }

    async put(req,res) {
        const {id} = req.body;

        if (!id) return res.status(404).send({"message": "Error id are missing"})


        const address = await Address.findOne({where: {id}})

        if (!address)  return res.status(404).send({"message": "Error address not exists"})

        const {cep, number, street, complement, city, district, 
            employee_cpf, provider_cnpj, client_cpf} = req.body;
        
        if (employee_cpf) {
            const employee = await Employee.findOne({where: {cpf: employee_cpf}});

            if (!employee) return res.status(400).send({"message": "Error employee not exists"})
        }

        if (client_cpf) {
            const client = await Client.findOne({where: {cpf: client_cpf}});
            console.log(client)
            if (!client) return res.status(400).send({"message": "Error client not exists"})
        }

        if (provider_cnpj) {
            const provider = await Provider.findOne({where: {cnpj: provider_cnpj}});

            if (!provider) return res.status(400).send({"message": "Error provider not exists"})
        }
        
        
        if (cep) address.cep = cep;
        if (number) address.number = number;
        if (street) address.street = street;
        if (complement) address.complement = complement;
        if (city) address.city = city;
        if (district) address.district = district;
        if (employee_cpf) address.employee_cpf = employee_cpf;
        if (client_cpf) address.client_cpf = client_cpf;
        if (provider_cnpj) address.provider_cnpj = provider_cnpj;

        await address.save()

        return res.status(200).send({"message": "Addres has been updated"})
    }

    async ListAll(req, res) {
        const addresses = await Address.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!addresses) {
            return res.status(200).send([])
        }

        return res.status(200).send(addresses)
    }

    async ListById(req, res) {
        const {id} = req.body

        if (!id) return res.status(404).send({"message": "Error id are missing"})

        const address = await Address.findOne({
            where: {id}, 
            attributes: {exclude: ["createdAt", "updatedAt"]}
        })

        if (!address) return res.status(404).send({"message": "Error address not exists"})

        return res.status(200).send(address)
    }

    async ListByStreet(req, res) {
        const {street} = req.body

        if (!street) return res.status(404).send({"message": "Error street are missing"})

        const addresses = await Address.findAll({
            where: {street}, 
            attributes: {exclude: ["createdAt", "updatedAt"]}
        })

        if (!addresses) {
            return res.status(200).send([])
        }

        return res.status(200).send(addresses)
    }
}

module.exports = new AddressController();