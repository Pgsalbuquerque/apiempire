const Employee = require("../models/Employee");

class EmployeeController {
    async store(req, res){
        //cpf name email telephone1 pay charge
        const {cpf, name, email, telephone1, telephone2, telephone3, pay, charge} = req.body;
        

        if (cpf == null || name == null || email == null || telephone1 == null || pay == null || charge == null) {
            return res.status(404).send({"message": "Error attributes are missing"})
        }

         const user = await Employee.findOne({cpf})

         if (user) {
            return res.status(404).send({"message": "Error user exists"})
         }

        await Employee.create({cpf, name, email, telephone1, telephone2, telephone3, pay, charge});

        return res.status(200).send({"User message:": `User Created ${name}`})

    }

    async put(req, res) {
        const {cpf} = req.body;

        if (cpf == null) {
            return res.status(404).send({"message": "Error cpf are missing"})
        }

        const user = await Employee.findOne({cpf})

        if (user == null)  {
            return res.status(404).send({"message": "Error user not exists"})
         }

        const {name, email, telephone1, telephone2, telephone3, pay, charge} = req.body;
        
        if (name) user.name = name;
        if (email) user.email = email;
        if (telephone1) user.telephone1 = telephone1;
        if (telephone2) user.telephone2 = telephone2;
        if (telephone3) user.telephone3 = telephone3;
        if (pay) user.pay = pay;
        if (charge) user.charge = charge;

        user.save()

        return res.status(200).send({"message": "User has been updated"})
        
        


    }

    async delete(req,res){
        const {cpf} = req.body;

        if (cpf == null) {
            return res.status(404).send({"message": "Error cpf are missing"})
        }

        const user = await Employee.findOne({cpf})

        if (user == null)  {
            return res.status(404).send({"message": "Error user not exists"})
         }

        user.destroy();

        return res.status(200).send({"message": "User has been deleted"})
    }
}

module.exports = new EmployeeController();