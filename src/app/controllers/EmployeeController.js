const Employee = require("../models/Employee");

class EmployeeController {
    async store(req, res){
        //cpf name email telephone1 pay charge
        const {cpf, name, email, telephone1, telephone2, telephone3, pay, charge} = req.body;
        

        if (cpf == null || name == null || email == null || telephone1 == null || pay == null || charge == null) {
            return res.status(404).send({"message": "Error attributes are missing"})
        }

         const employee = await Employee.findOne({where: {cpf}})

         if (employee) {
            return res.status(404).send({"message": "Error employee exists"})
         }

        await Employee.create({cpf, name, email, telephone1, telephone2, telephone3, pay, charge});

        return res.status(200).send({"message:": `Employee Created ${name}`})

    }

    async put(req, res) {
        const {cpf} = req.body;

        if (cpf == null) {
            return res.status(404).send({"message": "Error cpf are missing"})
        }

        const employee = await Employee.findOne({where: {cpf}})

        if (employee == null)  {
            return res.status(404).send({"message": "Error employee not exists"})
         }

        const {name, email, telephone1, telephone2, telephone3, pay, charge} = req.body;
        
        if (name) employee.name = name;
        if (email) employee.email = email;
        if (telephone1) employee.telephone1 = telephone1;
        if (telephone2) employee.telephone2 = telephone2;
        if (telephone3) employee.telephone3 = telephone3;
        if (pay) employee.pay = pay;
        if (charge) employee.charge = charge;

        await employee.save()

        return res.status(200).send({"message": "Employee has been updated"})
        
        


    }

    async delete(req,res){
        const {cpf} = req.body;

        if (cpf == null) {
            return res.status(404).send({"message": "Error cpf are missing"})
        }

        const employee = await Employee.findOne({where: {cpf}})

        if (employee == null)  {
            return res.status(404).send({"message": "Error employee not exists"})
         }

        await employee.destroy();

        return res.status(200).send({"message": "Employee has been deleted"})
    }

    async ListAll(req, res) {
        const employees = await Employee.findAll({attributes: {exclude: ["createdAt", "updatedAt"]}});

        if (!employees) {
            return res.status(200).send([])
        }

        return res.status(200).send(employees)
    }

    async ListOne(req, res) {
        const {cpf} = req.body

        if (!cpf) return res.status(404).send({"message": "Error cpf are missing"})

        const employee = await Employee.findOne({
            where: {cpf}, 
            attributes: {exclude: ["createdAt", "updatedAt"]}
        })

        if (!employee) return res.status(404).send({"message": "Error employee not exists"})

        return res.status(200).send(employee)
    }

    async ListByCharge(req, res) {
        const {charge} = req.body;

        if (!charge) return res.status(404).send({"message": "Error charge are missing"})

        const employees = await Employee.findAll({
            where: {charge},
            attributes: {exclude: ["createdAt", "updatedAt"]}
        });

        if (!employees) {
            return res.status(200).send([])
        }

        return res.status(200).send(employees)

    }
}

module.exports = new EmployeeController();