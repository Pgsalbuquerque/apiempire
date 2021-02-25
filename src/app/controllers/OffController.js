const Off = require("../models/Off");

class OffController {
    async store(req, res) {
        const {id, percent} = req.body;

        if (!id || !percent) return res.status(404).send({"message": "Error attributes are missing"});

        const off = await Off.findOne({where: {id}});

        if (off) return res.status(404).send({"message": "Error off exists"});

        await Off.create({id, percent});

        return res.status(200).send({"message": "Off has been created"});
    }

    async delete(req,res) {
        const {id} = req.body;

        if (!id) return res.status(404).send({"message": "Error id are missing"});
        
        const off = await Off.findOne({where: {id}});

        if (!off) return res.status(404).send({"message": "Error off not exists"});

        await off.destroy();

        return res.status(200).send({"message": "Off has been deleted"})
        
    }

    async ListAll (req, res) {
        const offs = await Off.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!offs) return res.status(200).send([]);

        return res.status(200).send(offs);

    }

    async findById(req, res) {
        const {id} = req.body;

        if (!id) return res.status(404).send({"message": "Error id are missing"});

        const off = await Off.findOne({where: {id}, attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!off) return res.status(404).send({"message": "Error off not exists"});

        return res.status(200).send(off);
    }
}

module.exports = new OffController();