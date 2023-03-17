const { Op } = require('sequelize');
const Users = require('../../models').Users;
const Company = require('../../models').Company;
const cleanInfoDb = require('./cleanInfoDb/cleanInfoDb');

const getUserNameController = async(name) => {
    const dataBaseNameRaw = await Users.findAll({
        where: {
            name: {
                [Op.iLike] : `%${name}%`
            }
        },
        include: {

            model: Company,
            attributes: ['name'],
            trough: { attributes: [] }
        }
    });
    const cleanInfo = cleanInfoDb(dataBaseNameRaw);

    return !cleanInfo ? new Error(`The user with the name: '${name}' does not exist. Try another please`) : cleanInfo
};

module.exports = getUserNameController;