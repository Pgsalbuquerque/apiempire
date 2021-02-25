const Feedback = require("../models/Feedback");
const Employee = require("../models/Employee");

class FeedbackController {
    async store(req,res) {
        const { score, description, employee_cpf } = req.body;

        if (!score || !employee_cpf) return res.status(404).send({"message": "Error attributes are missing"});

        const employee = await Employee.findOne({where: {cpf: employee_cpf}});

        if (!employee) return res.status(404).send({"message": "Error employee not exists"});

        await Feedback.create({score, description, employee_cpf});

        return res.status(200).send({"message": "Feedback has been created"});
    }

    async delete(req,res){
        const {id} = req.body;

        if (!id) return res.status(404).send({"message": "Error id are missing"});

        const feedback = await Feedback.findOne({where: {id}});

        if (!feedback) return res.status(404).send({"message": "Error feedback not exists"});

        await feedback.destroy();

        return res.status(404).send({"message": "Feedback has been deleted"});
    }

    async ListAll (req, res) {
        const feedbacks = await Feedback.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!feedbacks) {
            return res.status(200).send([]);
        }

        return res.status(200).send(feedbacks)
    }

    async findByEmployeeCpf(req,res) {
        const {employee_cpf} = req.body;

        if (!employee_cpf) return res.status(404).send({"message": "Error employee_cpf are missing"});

        const employee = await Employee.findOne({where: {cpf: employee_cpf}});

        if (!employee) return res.status(404).send({"message": "Error employee not exists"});

        const feedbacks = await Feedback.findAll({where: {employee_cpf}, attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!feedbacks) {
            return res.status(200).send([]);
        }

        return res.status(200).send(feedbacks)

    }
}

module.exports = new FeedbackController();