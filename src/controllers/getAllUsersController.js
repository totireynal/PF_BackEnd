const Users = require('../models').Users;
const Company = require('../models').Company;

const getAllUsersController = async () => {

    const results = await Users.findAll({
        include: {
            model: Company,
            attributes: ['name']
        }
    });

    return results;

}


module.exports = getAllUsersController;