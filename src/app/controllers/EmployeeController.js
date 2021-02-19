const Employee = require("../models/Employee");

class EmployeeController {
    async store(req, res){
        await Employee.create(req.body);

        return res.send(req.body)

    }
}

module.exports = new EmployeeController();