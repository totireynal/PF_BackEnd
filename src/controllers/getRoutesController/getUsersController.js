const Users = require('../../models').Users;
const Company = require('../../models').Company;
const cleanInfoDb = require('./cleanInfoDb/cleanInfoDb');

const getUsersController = async() => {
        const dataBaseUsers = await Users.findAll({
            include: {
                model: Company,
                attributes: ['name'],
                trough: { attributes: [] }
            }
        });
        const infoClean = cleanInfoDb(dataBaseUsers);
    
        return infoClean
        ? infoClean
        : new Error({ error: `The database has failed, please try again later!` })
};

module.exports = getUsersController;